import React, { useState } from 'react';
import { Play, Sparkles, ChevronLeft, ChevronRight, Sun, Volume2, ShieldCheck, Heart, Wind } from 'lucide-react';
import { SURYA_NAMASKAR_A_STEPS, SURYA_NAMASKAR_OVERVIEW } from '../data/suryaNamaskar';
import { SuryaStep } from '../types/yoga';
import { PoseIllustration } from './PoseIllustration';
import { soundManager } from '../utils/audio';

interface SuryaNamaskarSectionProps {
  onStartGuidedFlow: (rounds: number) => void;
  onOpenStepDetail: (step: SuryaStep) => void;
}

export const SuryaNamaskarSection: React.FC<SuryaNamaskarSectionProps> = ({
  onStartGuidedFlow,
  onOpenStepDetail,
}) => {
  const [selectedStepIdx, setSelectedStepIdx] = useState(0);
  const [roundsToPractice, setRoundsToPractice] = useState(3);

  const activeStep = SURYA_NAMASKAR_A_STEPS[selectedStepIdx];

  const handlePrevStep = () => {
    setSelectedStepIdx((prev) => (prev > 0 ? prev - 1 : SURYA_NAMASKAR_A_STEPS.length - 1));
  };

  const handleNextStep = () => {
    setSelectedStepIdx((prev) => (prev < SURYA_NAMASKAR_A_STEPS.length - 1 ? prev + 1 : 0));
  };

  const playStepAudio = () => {
    soundManager.speakText(`${activeStep.breath}. Step ${activeStep.stepNumber}: ${activeStep.sanskritName}. ${activeStep.englishName}. ${activeStep.mantra}`);
  };

  return (
    <div className="space-y-12">
      {/* Editorial Hero Banner */}
      <section className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-xs bg-stone-900 text-stone-100">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/surya_namaskar_dawn_1793030105869.jpg"
            alt="Sunrise dawn yoga practice"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
        </div>

        <div className="relative p-6 sm:p-10 lg:p-12 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-amber-300 font-medium tracking-wider uppercase mb-2">
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Classical Hatha Sadhana</span>
            <span aria-hidden="true">·</span>
            <span>12 Sacred Solar Steps</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-3">
            Surya Namaskar
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            The ancient 12-movement solar sequence uniting breath, movement, Vedic mantras, and chakra stimulation. Rebalances the sympathetic nervous system and awakens the solar plexus energy center.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 bg-stone-900/90 border border-stone-700/80 rounded-lg p-1">
              {[1, 3, 6, 12].map((r) => (
                <button
                  key={r}
                  onClick={() => setRoundsToPractice(r)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    roundsToPractice === r
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {r} {r === 1 ? 'Round' : 'Rounds'}
                </button>
              ))}
            </div>

            <button
              onClick={() => onStartGuidedFlow(roundsToPractice)}
              className="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-medium text-sm rounded-lg transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Begin {roundsToPractice} {roundsToPractice === 1 ? 'Round' : 'Rounds'} Flow</span>
            </button>
          </div>
        </div>
      </section>

      {/* Step-by-Step Interactive Masterclass Navigator */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold font-display text-stone-900 tracking-tight">
              Step-by-Step Sequence Breakdown
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Select any of the 12 classical postures to master the breath cue, Vedic mantra, and precise anatomical alignment.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevStep}
              className="p-2 border border-stone-200 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              title="Previous Step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono tabular-nums text-stone-600 px-2">
              {activeStep.stepNumber} / 12
            </span>
            <button
              onClick={handleNextStep}
              className="p-2 border border-stone-200 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              title="Next Step"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 12-Step Horizontal Thumbnail Ribbon */}
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 pb-2">
          {SURYA_NAMASKAR_A_STEPS.map((step, idx) => {
            const isSelected = idx === selectedStepIdx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setSelectedStepIdx(idx)}
                className={`p-2 rounded-xl text-left border transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                  isSelected
                    ? 'border-amber-700 bg-amber-50/80 shadow-xs ring-1 ring-amber-700'
                    : 'border-stone-200/80 bg-white hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <span className={`text-[11px] font-bold font-mono ${isSelected ? 'text-amber-800' : 'text-stone-500'}`}>
                  {step.stepNumber}
                </span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <PoseIllustration type={step.svgPoseType} className="w-full h-full" />
                </div>
                <span className="text-[10px] text-stone-600 truncate w-full text-center">
                  {step.breath}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Deep-Dive Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Visual Area (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-stone-200/80">
              <div className="w-full flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">
                  Step {activeStep.stepNumber} of 12
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  activeStep.breath === 'Inhale'
                    ? 'bg-sky-100 text-sky-800'
                    : activeStep.breath === 'Exhale'
                    ? 'bg-amber-100 text-amber-900'
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {activeStep.breath}
                </span>
              </div>

              {/* Vector Pose Illustration */}
              <div className="w-full my-6 flex items-center justify-center">
                <PoseIllustration type={activeStep.svgPoseType} className="w-full max-h-64" />
              </div>

              <div className="w-full flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={playStepAudio}
                  className="px-3 py-1.5 text-xs text-stone-700 hover:text-stone-900 bg-white border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Pronunciation</span>
                </button>

                <button
                  onClick={() => onOpenStepDetail(activeStep)}
                  className="px-3.5 py-1.5 text-xs font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/60 rounded-lg transition-colors cursor-pointer"
                >
                  Full Reference
                </button>
              </div>
            </div>

            {/* Right Information & Instruction Deck (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              {/* Titles & Sanskrit */}
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
                    {activeStep.sanskritName}
                  </h3>
                  <span className="text-xl font-serif text-amber-800">
                    {activeStep.devanagari}
                  </span>
                </div>
                <p className="text-sm font-medium text-stone-600 mt-0.5">
                  {activeStep.englishName}
                </p>
              </div>

              {/* Mantra & Chakra Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/60">
                  <span className="text-[10px] font-semibold text-amber-900 uppercase tracking-wider block">
                    Vedic Sun Mantra
                  </span>
                  <p className="text-sm font-semibold text-amber-950 mt-1 font-serif">
                    {activeStep.mantra}
                  </p>
                  <p className="text-xs text-stone-600 italic mt-0.5">
                    {activeStep.mantraMeaning}
                  </p>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-[10px] font-semibold text-stone-700 uppercase tracking-wider block">
                    Chakra & Drishti Focus
                  </span>
                  <p className="text-sm font-semibold text-stone-900 mt-1">
                    {activeStep.chakra}
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Location: {activeStep.chakraLocation} · Gaze: {activeStep.gazePoint}
                  </p>
                </div>
              </div>

              {/* Physical Action */}
              <div>
                <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-stone-600" />
                  Movement & Alignment Guidance
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed bg-stone-50/80 p-3.5 rounded-xl border border-stone-200/50">
                  {activeStep.physicalAction}
                </p>
              </div>

              {/* 4 Golden Alignment Keys */}
              <div>
                <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  Key Alignment Points
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {activeStep.alignmentKeys.map((key, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>{key}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="pt-2 border-t border-stone-200/60">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                  Primary Benefits
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {activeStep.benefits.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Scientific Principles */}
      <section className="bg-stone-100/70 p-6 sm:p-8 rounded-2xl border border-stone-200/70">
        <h3 className="text-xl font-bold font-display text-stone-900 mb-4">
          The Anatomy & Science of Sun Salutations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SURYA_NAMASKAR_OVERVIEW.keyPhilosophies.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-sm font-semibold text-stone-900">
                0{idx + 1}. {item.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
