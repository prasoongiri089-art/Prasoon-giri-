import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Wind, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { PRANAYAMA_PRACTICES } from '../data/pranayama';
import { soundManager } from '../utils/audio';

export const PranayamaSection: React.FC = () => {
  const [selectedPracticeId, setSelectedPracticeId] = useState(PRANAYAMA_PRACTICES[0].id);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'holdIn' | 'exhale' | 'holdOut'>('inhale');
  const [secondsInPhase, setSecondsInPhase] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  const practice = PRANAYAMA_PRACTICES.find((p) => p.id === selectedPracticeId) || PRANAYAMA_PRACTICES[0];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset when practice changes
  useEffect(() => {
    setIsActive(false);
    setPhase('inhale');
    setSecondsInPhase(0);
    setCurrentRound(1);
  }, [selectedPracticeId]);

  // Phase duration
  const getPhaseDuration = (p: 'inhale' | 'holdIn' | 'exhale' | 'holdOut') => {
    switch (p) {
      case 'inhale':
        return practice.ratio.inhale;
      case 'holdIn':
        return practice.ratio.holdIn;
      case 'exhale':
        return practice.ratio.exhale;
      case 'holdOut':
        return practice.ratio.holdOut;
    }
  };

  // Breath controller loop
  useEffect(() => {
    if (!isActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setSecondsInPhase((prev) => {
        const targetDuration = getPhaseDuration(phase);

        if (prev + 1 >= targetDuration) {
          // Transition to next phase
          soundManager.playBreathTick();
          if (phase === 'inhale') {
            if (practice.ratio.holdIn > 0) {
              setPhase('holdIn');
            } else {
              setPhase('exhale');
            }
          } else if (phase === 'holdIn') {
            setPhase('exhale');
          } else if (phase === 'exhale') {
            if (practice.ratio.holdOut > 0) {
              setPhase('holdOut');
            } else {
              setPhase('inhale');
              setCurrentRound((r) => r + 1);
            }
          } else if (phase === 'holdOut') {
            setPhase('inhale');
            setCurrentRound((r) => r + 1);
          }
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, phase, practice]);

  const handleToggle = () => {
    if (!isActive) {
      soundManager.playBellChime();
    }
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setSecondsInPhase(0);
    setCurrentRound(1);
  };

  // Text label for phase
  const getPhaseLabel = () => {
    switch (phase) {
      case 'inhale':
        return 'INHALE DEEPLY';
      case 'holdIn':
        return 'HOLD BREATH (FULL)';
      case 'exhale':
        return 'EXHALE FULLY';
      case 'holdOut':
        return 'HOLD BREATH (EMPTY)';
    }
  };

  const currentPhaseDuration = getPhaseDuration(phase);
  const remainingInPhase = Math.max(0, currentPhaseDuration - secondsInPhase);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-amber-800 font-medium tracking-wide uppercase mb-1">
          <Wind className="w-3.5 h-3.5" />
          <span>Pranayama</span>
          <span aria-hidden="true">·</span>
          <span>Breath of Life</span>
        </div>
        <h2 className="text-3xl font-bold font-display text-stone-900 tracking-tight">
          Yogic Breathwork & Vital Prana
        </h2>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
          In yoga, the breath is the bridge between physical form and subtle consciousness. Regulate your autonomic nervous system with guided rhythmic breathing pacers.
        </p>
      </div>

      {/* Select Practice Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {PRANAYAMA_PRACTICES.map((p) => {
          const isSelected = p.id === selectedPracticeId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPracticeId(p.id)}
              className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'border-amber-800 bg-amber-50/70 shadow-xs ring-1 ring-amber-800'
                  : 'border-stone-200/90 bg-white hover:border-stone-300 hover:bg-stone-50'
              }`}
            >
              <div>
                <span className={`text-[11px] font-semibold block ${isSelected ? 'text-amber-900' : 'text-stone-500'}`}>
                  {p.sanskritName.split(' ')[0]}
                </span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5 line-clamp-1">
                  {p.name.split('(')[0].trim()}
                </span>
              </div>
              <span className="text-[10px] text-stone-500 font-mono">
                {p.ratio.inhale}-{p.ratio.holdIn}-{p.ratio.exhale}-{p.ratio.holdOut}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Breath Pacer Interactive Canvas */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Visual Breathing Ring (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col items-center justify-center bg-[#FAF8F5] border-b lg:border-b-0 lg:border-r border-stone-200/80 relative min-h-[380px]">
            {/* Dynamic Pulsing Circle */}
            <div className="relative flex items-center justify-center w-64 h-64">
              {/* Outer guide ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-stone-300/70" />

              {/* Pulsing Breathing Orb */}
              <div
                className={`w-40 h-40 rounded-full transition-all flex items-center justify-center shadow-lg ${
                  phase === 'inhale'
                    ? 'scale-125 bg-sky-100/90 border-2 border-sky-400 text-sky-950 duration-[4000ms] ease-out'
                    : phase === 'holdIn'
                    ? 'scale-125 bg-amber-100/90 border-2 border-amber-400 text-amber-950 duration-300'
                    : phase === 'exhale'
                    ? 'scale-75 bg-stone-100/90 border-2 border-stone-400 text-stone-800 duration-[4000ms] ease-in'
                    : 'scale-75 bg-amber-100/70 border-2 border-amber-300 text-amber-900 duration-300'
                }`}
              >
                <div className="text-center p-2">
                  <span className="text-3xl font-bold font-mono tabular-nums block">
                    {isActive ? remainingInPhase : practice.ratio.inhale}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase block opacity-80">
                    {isActive ? getPhaseLabel() : 'PRESS START'}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls & Round Counter */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={handleToggle}
                className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                {isActive ? (
                  <>
                    <Pause className="w-4 h-4 fill-current text-amber-400" />
                    <span>Pause Pacer</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-amber-400" />
                    <span>Begin Breathing</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="p-2.5 text-stone-500 hover:text-stone-800 border border-stone-200 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
                title="Reset session"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 text-xs text-stone-500 font-mono">
              Round <strong className="text-stone-800">{currentRound}</strong> of {practice.recommendedRounds}
            </div>
          </div>

          {/* Practice Details & Guidelines (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-baseline gap-2.5">
                <h3 className="text-2xl font-bold font-display text-stone-900">
                  {practice.name}
                </h3>
                <span className="text-lg font-serif text-amber-800">
                  {practice.devanagari}
                </span>
              </div>
              <p className="text-xs text-stone-600 italic mt-0.5">
                {practice.meaning}
              </p>
            </div>

            {/* Instructions */}
            <div>
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
                Execution Technique
              </h4>
              <ol className="space-y-1.5 list-decimal list-inside text-xs text-stone-700 bg-stone-50/80 p-3.5 rounded-xl border border-stone-200/60 leading-relaxed">
                {practice.instructions.map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ol>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                Key Physiological Benefits
              </h4>
              <ul className="space-y-1 text-xs text-stone-600">
                {practice.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cautions */}
            <div className="p-3 bg-red-50/60 rounded-xl border border-red-200/50 text-xs text-red-900 space-y-1">
              <span className="font-semibold flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                Precautions
              </span>
              <p className="text-stone-700 leading-relaxed">
                {practice.contraindications.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
