import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Flame,
  TrendingUp,
  CalendarCheck,
  Clock,
  Timer,
  Sun,
  Award,
  Compass,
  Wind,
  Layers,
  HeartHandshake,
  Lock,
  CheckCircle2,
  Trophy,
} from 'lucide-react';
import { evaluateAchievements, MilestoneBadge } from '../data/achievements';
import { UserProgressData } from '../utils/progress';

interface AchievementsProps {
  progress: UserProgressData;
}

export const Achievements: React.FC<AchievementsProps> = ({ progress }) => {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'in_progress'>('all');

  const badges = useMemo(() => evaluateAchievements(progress), [progress]);

  const unlockedCount = badges.filter((b) => b.isUnlocked).length;
  const totalCount = badges.length;
  const unlockedPercentage = Math.round((unlockedCount / totalCount) * 100);

  const filteredBadges = useMemo(() => {
    if (filter === 'unlocked') return badges.filter((b) => b.isUnlocked);
    if (filter === 'in_progress') return badges.filter((b) => !b.isUnlocked);
    return badges;
  }, [badges, filter]);

  // Dynamic icon helper
  const renderBadgeIcon = (iconName: string, isUnlocked: boolean) => {
    const props = {
      className: `w-5 h-5 ${isUnlocked ? 'text-amber-800' : 'text-stone-400'}`,
    };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'CalendarCheck':
        return <CalendarCheck {...props} />;
      case 'Clock':
        return <Clock {...props} />;
      case 'Timer':
        return <Timer {...props} />;
      case 'Sun':
        return <Sun {...props} />;
      case 'Award':
        return <Award {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Wind':
        return <Wind {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      default:
        return <Trophy {...props} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs p-6 sm:p-8 space-y-6">
      {/* Header and Summary Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-800 font-medium tracking-wide uppercase mb-1">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>Practice Milestones</span>
            <span aria-hidden="true">·</span>
            <span>Personal Sadhana</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 tracking-tight">
            Milestone Badges & Achievements
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            Honoring consistency, practice time, and dedication on the mat.
          </p>
        </div>

        {/* Milestone Unlocked Tally Banner */}
        <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200/80 flex items-center gap-4 self-start sm:self-auto shrink-0">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-display text-stone-900 font-mono tabular-nums">
                {unlockedCount}
              </span>
              <span className="text-xs text-stone-500 font-medium">/ {totalCount}</span>
            </div>
            <span className="text-[11px] text-stone-500 block">Milestones Unlocked</span>
          </div>

          <div className="w-16 h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-700 rounded-full transition-all duration-500"
              style={{ width: `${unlockedPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter Segmented Controls */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl text-xs font-medium">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Milestones ({totalCount})
          </button>
          <button
            onClick={() => setFilter('unlocked')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              filter === 'unlocked'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Unlocked ({unlockedCount})
          </button>
          <button
            onClick={() => setFilter('in_progress')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              filter === 'in_progress'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            In Progress ({totalCount - unlockedCount})
          </button>
        </div>

        <span className="text-xs text-stone-500">
          Showing <strong className="text-stone-800">{filteredBadges.length}</strong> badges
        </span>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBadges.map((badge) => {
          const progressPercent = Math.min(
            100,
            Math.round((badge.currentValue / badge.targetValue) * 100)
          );

          return (
            <div
              key={badge.id}
              className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between gap-3 ${
                badge.isUnlocked
                  ? 'bg-gradient-to-b from-[#FCFAF6] to-white border-amber-200/90 shadow-2xs hover:border-amber-300'
                  : 'bg-stone-50/60 border-stone-200/70 opacity-80 hover:opacity-100'
              }`}
            >
              {/* Top Row: Icon + Category + Lock/Check Status */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      badge.isUnlocked
                        ? 'bg-amber-50 border-amber-200/80 shadow-2xs'
                        : 'bg-stone-100 border-stone-200 text-stone-400'
                    }`}
                  >
                    {renderBadgeIcon(badge.iconName, badge.isUnlocked)}
                  </div>

                  <div>
                    <span className="text-[10px] font-medium text-stone-500 block uppercase tracking-wider">
                      {badge.category}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 leading-tight">
                      {badge.title}
                    </h4>
                  </div>
                </div>

                <div className="shrink-0 pt-0.5">
                  {badge.isUnlocked ? (
                    <span
                      title="Milestone achieved!"
                      className="inline-flex items-center gap-1 text-[11px] text-emerald-800 font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    </span>
                  ) : (
                    <span title="In progress" className="text-stone-400">
                      <Lock className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>

              {/* Sanskrit Kicker & Description */}
              <div className="space-y-1">
                <span className="text-xs font-serif text-amber-900/90 block italic">
                  {badge.sanskritName}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              {/* Bottom Progress Bar or Completed Label */}
              <div className="pt-2 border-t border-stone-100/90">
                {badge.isUnlocked ? (
                  <div className="flex items-center justify-between text-[11px] text-emerald-800 font-medium">
                    <span>Completed</span>
                    <span className="font-mono tabular-nums">
                      {badge.targetValue} {badge.unit}
                    </span>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-stone-500">
                      <span>Progress</span>
                      <span className="font-mono tabular-nums">
                        {badge.currentValue} / {badge.targetValue} {badge.unit} ({progressPercent}%)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-600 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
