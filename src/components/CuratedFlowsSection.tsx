import React from 'react';
import { Play, Clock, Flame, ChevronRight, Layers } from 'lucide-react';
import { CURATED_ROUTINES } from '../data/routines';
import { YogaRoutine } from '../types/yoga';

interface CuratedFlowsSectionProps {
  onStartRoutine: (routine: YogaRoutine) => void;
  onOpenFlowBuilder: () => void;
}

export const CuratedFlowsSection: React.FC<CuratedFlowsSectionProps> = ({
  onStartRoutine,
  onOpenFlowBuilder,
}) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-800 font-medium tracking-wide uppercase mb-1">
            <span>Structured Practice</span>
            <span aria-hidden="true">·</span>
            <span>Balanced Sadhanas</span>
          </div>
          <h2 className="text-3xl font-bold font-display text-stone-900 tracking-tight">
            Curated Yoga Sequences
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            Thoughtfully orchestrated flows combining warm-up, solar activation, standing strength, balance, backbends, and restorative cool-down integration.
          </p>
        </div>

        <button
          onClick={onOpenFlowBuilder}
          className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-2 cursor-pointer shadow-xs self-start sm:self-auto"
        >
          <Layers className="w-4 h-4 text-amber-700" />
          <span>Build Custom Flow</span>
        </button>
      </div>

      {/* Routine Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CURATED_ROUTINES.map((routine) => (
          <div
            key={routine.id}
            className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between"
          >
            {/* Card Header with optional background preview */}
            <div className="relative h-44 overflow-hidden bg-stone-900">
              {routine.imageUrl ? (
                <img
                  src={routine.imageUrl}
                  alt={routine.title}
                  className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-stone-800 to-stone-950 flex items-center justify-center">
                  <span className="font-serif text-3xl text-amber-200/40">ॐ</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
                    {routine.level}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white tracking-tight">
                    {routine.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-stone-200 bg-stone-900/80 px-2.5 py-1 rounded-md border border-stone-700/60">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{routine.totalDurationMin} min</span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {routine.description}
                </p>

                {/* Sequence Preview Pill Strip */}
                <div className="mt-3.5 pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                    Sequence Preview ({routine.items.length} postures)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {routine.items.slice(0, 5).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md"
                      >
                        {item.poseName.split('(')[0].trim()}
                      </span>
                    ))}
                    {routine.items.length > 5 && (
                      <span className="text-[11px] text-stone-500 px-1 py-0.5">
                        +{routine.items.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onStartRoutine(routine)}
                  className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs group"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Start Guided Flow</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
