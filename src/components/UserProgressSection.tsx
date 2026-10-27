import React, { useState, useEffect } from 'react';
import {
  Clock,
  Flame,
  Award,
  Calendar,
  Plus,
  Trash2,
  Play,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  X,
} from 'lucide-react';
import {
  loadUserProgress,
  recordPracticeSession,
  clearUserProgress,
  UserProgressData,
  getTodayDateString,
} from '../utils/progress';
import { Achievements } from './Achievements';

interface UserProgressSectionProps {
  onStartPractice: () => void;
}

export const UserProgressSection: React.FC<UserProgressSectionProps> = ({
  onStartPractice,
}) => {
  const [progress, setProgress] = useState<UserProgressData>(loadUserProgress());
  const [showManualModal, setShowManualModal] = useState(false);
  const [manualTitle, setManualTitle] = useState('Personal Mat Practice');
  const [manualMinutes, setManualMinutes] = useState(20);
  const [manualPoses, setManualPoses] = useState(8);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Sync state on events
  const refreshData = () => {
    setProgress(loadUserProgress());
  };

  useEffect(() => {
    refreshData();
    const handleUpdate = () => refreshData();
    window.addEventListener('yogasana_progress_updated', handleUpdate);
    return () => {
      window.removeEventListener('yogasana_progress_updated', handleUpdate);
    };
  }, []);

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    recordPracticeSession({
      routineTitle: manualTitle.trim() || 'Personal Self-Practice',
      durationSeconds: manualMinutes * 60,
      posesCount: manualPoses,
      type: 'manual',
    });
    setShowManualModal(false);
    refreshData();
  };

  const handleClearHistory = () => {
    clearUserProgress();
    setShowClearConfirm(false);
    refreshData();
  };

  // Format minutes into clean human-readable hours & minutes
  const formatTotalTime = (mins: number) => {
    if (mins < 60) return `${mins} min`;
    const hrs = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return remainingMins > 0 ? `${hrs}h ${remainingMins}m` : `${hrs} hrs`;
  };

  // Total postures completed across history
  const totalPosesCompleted = progress.history.reduce(
    (acc, curr) => acc + (curr.posesCount || 0),
    0
  );

  // 7-day weekly activity grid
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });

    // Sessions on this date
    const daySessions = progress.history.filter((h) => h.dateString === dateStr);
    const dayMins = daySessions.reduce((sum, s) => sum + s.durationMinutes, 0);

    return {
      dateStr,
      dayLabel,
      hasPracticed: daySessions.length > 0,
      minutes: dayMins,
      isToday: dateStr === getTodayDateString(),
    };
  });

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-800 font-medium tracking-wide uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Sadhana Tracking</span>
            <span aria-hidden="true">·</span>
            <span>Local Storage</span>
          </div>
          <h2 className="text-3xl font-bold font-display text-stone-900 tracking-tight">
            User Practice Progress
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            A quiet, personal reflection of your consistency on the mat. All sessions, total minutes, and daily streaks are automatically persisted locally on your device.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowManualModal(true)}
            className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 text-amber-700" />
            <span>Log Self-Practice</span>
          </button>

          {progress.totalSessions > 0 && (
            <button
              onClick={() => setShowClearConfirm(true)}
              className="p-2 text-stone-400 hover:text-red-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Reset progress history"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 4-Card Metric Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1: Total Practice Time */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-stone-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Total Time</span>
            <div className="p-2 bg-amber-50 rounded-lg text-amber-800">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-bold font-display text-stone-900 font-mono tabular-nums">
              {formatTotalTime(progress.totalMinutes)}
            </span>
            <p className="text-xs text-stone-500 mt-1">
              {progress.totalMinutes * 60} seconds on the mat
            </p>
          </div>
        </div>

        {/* Card 2: Completed Sessions */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-stone-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Completed Sessions</span>
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-800">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-bold font-display text-stone-900 font-mono tabular-nums">
              {progress.totalSessions}
            </span>
            <p className="text-xs text-stone-500 mt-1">
              Flows & breathwork cycles
            </p>
          </div>
        </div>

        {/* Card 3: Daily Consistency Streak */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-stone-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Current Streak</span>
            <div className="p-2 bg-orange-50 rounded-lg text-orange-700">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-display text-stone-900 font-mono tabular-nums">
                {progress.currentStreakDays}
              </span>
              <span className="text-xs text-stone-600 font-medium">
                {progress.currentStreakDays === 1 ? 'day' : 'days'}
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-1">
              Best record: {progress.bestStreakDays} {progress.bestStreakDays === 1 ? 'day' : 'days'}
            </p>
          </div>
        </div>

        {/* Card 4: Total Asanas Flowed */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-stone-500 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Asanas Flowed</span>
            <div className="p-2 bg-sky-50 rounded-lg text-sky-800">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-bold font-display text-stone-900 font-mono tabular-nums">
              {totalPosesCompleted}
            </span>
            <p className="text-xs text-stone-500 mt-1">
              Total postures maintained
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Activity Ribbon */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-700" />
            <h3 className="text-sm font-semibold text-stone-900">
              Last 7 Days Consistency
            </h3>
          </div>
          <span className="text-xs text-stone-500">
            {progress.history.length > 0 ? 'Daily presence on the mat' : 'Start your streak today'}
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2 sm:gap-4 pt-1">
          {last7Days.map((day) => (
            <div
              key={day.dateStr}
              className={`p-3 rounded-xl border text-center flex flex-col items-center justify-between gap-1.5 transition-colors ${
                day.hasPracticed
                  ? 'bg-amber-50/80 border-amber-300 shadow-2xs'
                  : 'bg-stone-50/70 border-stone-200/60'
              } ${day.isToday ? 'ring-1 ring-amber-700' : ''}`}
            >
              <span className="text-[11px] font-medium text-stone-500">
                {day.dayLabel}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  day.hasPracticed
                    ? 'bg-amber-700 text-white'
                    : 'bg-stone-200/70 text-stone-400'
                }`}
              >
                {day.hasPracticed ? '✓' : '·'}
              </div>
              <span className="text-[10px] font-mono text-stone-600 tabular-nums">
                {day.hasPracticed ? `${day.minutes}m` : '0m'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Badges & Achievements */}
      <Achievements progress={progress} />

      {/* Recent Sadhana History List */}
      <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-stone-600" />
            <h3 className="text-sm font-semibold text-stone-900">
              Practice History ({progress.history.length} Sessions)
            </h3>
          </div>
          {progress.history.length > 0 && (
            <span className="text-xs text-stone-500">
              Sorted newest to oldest
            </span>
          )}
        </div>

        {progress.history.length === 0 ? (
          /* Empty state */
          <div className="py-12 text-center max-w-sm mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-base font-semibold text-stone-800">
              No Practice Sessions Recorded Yet
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Complete a guided Surya Namaskar, curate your flow, or log a self-practice session to begin tracking your journey.
            </p>
            <div className="pt-2">
              <button
                onClick={onStartPractice}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-xl transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                <span>Begin Your First Flow</span>
              </button>
            </div>
          </div>
        ) : (
          /* Chronological Session List */
          <div className="space-y-3">
            {progress.history.map((session) => (
              <div
                key={session.id}
                className="p-4 bg-stone-50/70 hover:bg-stone-100/60 rounded-xl border border-stone-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100/70 text-amber-900 border border-amber-200/60 flex items-center justify-center shrink-0 text-xs font-serif font-bold">
                    ॐ
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">
                      {session.routineTitle}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                      <span>{session.dateString}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{session.type.replace('_', ' ')}</span>
                      {session.posesCount > 0 && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{session.posesCount} postures</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs font-semibold font-mono text-stone-800 bg-white px-3 py-1 rounded-md border border-stone-200 shadow-2xs tabular-nums">
                    {session.durationMinutes} min
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Manual Self-Practice Logging Modal */}
      {showManualModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="bg-[#FCFAF7] rounded-2xl max-w-md w-full border border-stone-200 shadow-xl overflow-hidden p-6 space-y-5 animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h3 className="text-lg font-bold font-display text-stone-900">
                  Log Self-Practice Session
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Record an unguided or offline session on the mat
                </p>
              </div>
              <button
                onClick={() => setShowManualModal(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleManualSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-stone-700 font-medium block mb-1">
                  Session Name
                </label>
                <input
                  type="text"
                  value={manualTitle}
                  onChange={(e) => setManualTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                  placeholder="e.g. Morning Vinyasa, Pranayama, Yin"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between text-stone-700 font-medium mb-1">
                  <span>Duration (Minutes)</span>
                  <span className="font-mono text-stone-900 font-bold">{manualMinutes} min</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={120}
                  step={5}
                  value={manualMinutes}
                  onChange={(e) => setManualMinutes(Number(e.target.value))}
                  className="w-full accent-amber-700"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>10m</span>
                  <span>20m</span>
                  <span>45m</span>
                  <span>60m</span>
                  <span>120m</span>
                </div>
              </div>

              <div>
                <label className="text-stone-700 font-medium block mb-1">
                  Estimated Postures Flowed
                </label>
                <input
                  type="number"
                  min={1}
                  max={108}
                  value={manualPoses}
                  onChange={(e) => setManualPoses(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 font-mono focus:outline-none focus:ring-2 focus:ring-amber-700/20"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setShowManualModal(false)}
                  className="px-4 py-2 text-stone-600 hover:text-stone-800 font-medium rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  Save Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Clear Confirmation Dialog */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="bg-white rounded-2xl max-w-sm w-full border border-stone-200 shadow-xl p-6 space-y-4 animate-in fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold font-display text-stone-900">
              Reset Practice History?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              This will erase all recorded sessions, total practice minutes, and streaks stored in this browser. This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-3.5 py-1.5 text-xs text-stone-600 hover:text-stone-800 font-medium rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleClearHistory}
                className="px-4 py-1.5 text-xs bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
