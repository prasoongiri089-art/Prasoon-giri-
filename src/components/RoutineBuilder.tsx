import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown, Play, Save, Check, Clock } from 'lucide-react';
import { ALL_ASANAS } from '../data/asanas';
import { YogaRoutine, RoutineItem } from '../types/yoga';
import { PoseIllustration } from './PoseIllustration';

interface RoutineBuilderProps {
  onStartCustomRoutine: (routine: YogaRoutine) => void;
  initialItems?: RoutineItem[];
}

export const RoutineBuilder: React.FC<RoutineBuilderProps> = ({
  onStartCustomRoutine,
  initialItems = [],
}) => {
  const [routineTitle, setRoutineTitle] = useState('My Custom Yoga Flow');
  const [routineDescription, setRoutineDescription] = useState('Personalized daily asana practice.');
  const [selectedPoseId, setSelectedPoseId] = useState(ALL_ASANAS[0].id);
  const [poseDuration, setPoseDuration] = useState(30);
  const [items, setItems] = useState<RoutineItem[]>(() => {
    if (initialItems.length > 0) return initialItems;
    // Load saved or provide starter items
    try {
      const saved = localStorage.getItem('yogasana_custom_routine');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return [
      { poseId: 'tadasana', poseName: 'Tāḍāsana (Mountain Pose)', durationSec: 30 },
      { poseId: 'vrikshasana', poseName: 'Vṛkṣāsana (Tree Pose)', durationSec: 40 },
      { poseId: 'trikonasana', poseName: 'Trikoṇāsana (Triangle)', durationSec: 40 },
      { poseId: 'balasana', poseName: 'Bālāsana (Child’s Pose)', durationSec: 60 },
      { poseId: 'savasana', poseName: 'Śavāsana (Corpse Pose)', durationSec: 180 },
    ];
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  // Calculate total seconds
  const totalSeconds = items.reduce((acc, curr) => acc + curr.durationSec, 0);
  const totalMinutes = Math.ceil(totalSeconds / 60);

  const handleAddPose = () => {
    const pose = ALL_ASANAS.find((p) => p.id === selectedPoseId);
    if (!pose) return;

    const newItem: RoutineItem = {
      poseId: pose.id,
      poseName: `${pose.sanskritName} (${pose.englishName})`,
      durationSec: poseDuration,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const handleRemove = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setItems((prev) => {
      const copy = [...prev];
      const temp = copy[index - 1];
      copy[index - 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const handleMoveDown = (index: number) => {
    if (index === items.length - 1) return;
    setItems((prev) => {
      const copy = [...prev];
      const temp = copy[index + 1];
      copy[index + 1] = copy[index];
      copy[index] = temp;
      return copy;
    });
  };

  const handleUpdateDuration = (index: number, newSec: number) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, durationSec: Math.max(5, newSec) } : item))
    );
  };

  const handleSaveToStorage = () => {
    try {
      localStorage.setItem('yogasana_custom_routine', JSON.stringify(items));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch {
      // Ignore
    }
  };

  const handleLaunchPractice = () => {
    if (items.length === 0) return;
    const routine: YogaRoutine = {
      id: 'custom_user_flow',
      title: routineTitle,
      description: routineDescription,
      level: 'Intermediate',
      totalDurationMin: totalMinutes,
      tags: ['Custom Flow', 'Personal Practice'],
      isCustom: true,
      items,
    };
    onStartCustomRoutine(routine);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-800 font-medium tracking-wide uppercase mb-1">
            <span>Custom Sadhana</span>
            <span aria-hidden="true">·</span>
            <span>Sequence Designer</span>
          </div>
          <h2 className="text-3xl font-bold font-display text-stone-900 tracking-tight">
            Personal Flow Builder
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            Curate your own yoga sequence. Pick postures from the traditional library, reorder transitions, set custom hold durations, and practice seamlessly with the guided timer.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleSaveToStorage}
            className="px-4 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            {savedSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-700">Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>Save Sequence</span>
              </>
            )}
          </button>

          <button
            onClick={handleLaunchPractice}
            disabled={items.length === 0}
            className="px-5 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Practice This Flow</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Sequence Metadata & Add Pose Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Metadata Box */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <h3 className="text-sm font-semibold text-stone-900">Sequence Details</h3>
            <div>
              <label className="text-xs text-stone-500 block mb-1">Routine Name</label>
              <input
                type="text"
                value={routineTitle}
                onChange={(e) => setRoutineTitle(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
              />
            </div>
            <div>
              <label className="text-xs text-stone-500 block mb-1">Description / Intention</label>
              <input
                type="text"
                value={routineDescription}
                onChange={(e) => setRoutineDescription(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
              />
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-stone-600 border-t border-stone-100">
              <span>Postures: <strong className="text-stone-900">{items.length}</strong></span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-stone-500" />
                Est. Duration: <strong className="text-stone-900 font-mono">{totalMinutes} min</strong> ({totalSeconds}s)
              </span>
            </div>
          </div>

          {/* Add Posture Picker */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-sm font-semibold text-stone-900 flex items-center gap-1.5">
              <Plus className="w-4 h-4 text-amber-700" />
              Add Posture to Flow
            </h3>

            <div>
              <label className="text-xs text-stone-500 block mb-1">Select Asana</label>
              <select
                value={selectedPoseId}
                onChange={(e) => setSelectedPoseId(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20"
              >
                {ALL_ASANAS.map((pose) => (
                  <option key={pose.id} value={pose.id}>
                    {pose.sanskritName} — {pose.englishName} ({pose.category})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span>Hold Duration</span>
                <span className="font-mono text-stone-800 font-semibold">{poseDuration} seconds</span>
              </div>
              <input
                type="range"
                min={10}
                max={180}
                step={5}
                value={poseDuration}
                onChange={(e) => setPoseDuration(Number(e.target.value))}
                className="w-full accent-amber-700"
              />
              <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                <span>10s</span>
                <span>30s</span>
                <span>60s</span>
                <span>120s</span>
                <span>180s</span>
              </div>
            </div>

            <button
              onClick={handleAddPose}
              className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Insert Asana into Flow</span>
            </button>
          </div>
        </div>

        {/* Right Column: Ordered Sequence List (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 shadow-xs p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-semibold text-stone-900 text-sm">
              Flow Sequence ({items.length} Postures)
            </h3>
            {items.length > 0 && (
              <button
                onClick={() => setItems([])}
                className="text-xs text-stone-400 hover:text-red-700 transition-colors cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="py-12 text-center text-stone-500 text-xs">
              Your flow is empty. Select an asana from the left panel and click &quot;Insert Asana&quot; to begin building.
            </div>
          ) : (
            <div className="space-y-2.5">
              {items.map((item, idx) => {
                const asanaData = ALL_ASANAS.find((p) => p.id === item.poseId);
                return (
                  <div
                    key={`${item.poseId}-${idx}`}
                    className="p-3 bg-stone-50/80 rounded-xl border border-stone-200/70 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center text-xs font-mono font-bold text-stone-400">
                        {idx + 1}
                      </span>
                      <div className="w-10 h-10 bg-white rounded-lg border border-stone-200/60 p-1 flex items-center justify-center shrink-0">
                        <PoseIllustration
                          type={asanaData?.svgPoseType || 'tadasana'}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-900">
                          {item.poseName}
                        </h4>
                        <span className="text-[11px] text-stone-500">
                          {asanaData?.category || 'Yoga'} · {asanaData?.difficulty || 'General'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs">
                        <input
                          type="number"
                          min={5}
                          max={300}
                          step={5}
                          value={item.durationSec}
                          onChange={(e) => handleUpdateDuration(idx, Number(e.target.value))}
                          className="w-14 px-1.5 py-1 text-center bg-white border border-stone-200 rounded font-mono text-xs text-stone-800"
                        />
                        <span className="text-[10px] text-stone-500">sec</span>
                      </div>

                      <div className="flex items-center gap-0.5">
                        <button
                          onClick={() => handleMoveUp(idx)}
                          disabled={idx === 0}
                          className="p-1 text-stone-400 hover:text-stone-800 disabled:opacity-20 transition-colors"
                          title="Move up"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleMoveDown(idx)}
                          disabled={idx === items.length - 1}
                          className="p-1 text-stone-400 hover:text-stone-800 disabled:opacity-20 transition-colors"
                          title="Move down"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(idx)}
                        className="p-1.5 text-stone-400 hover:text-red-700 transition-colors"
                        title="Remove from flow"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
