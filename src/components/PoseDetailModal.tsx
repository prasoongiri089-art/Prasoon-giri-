import React, { useState } from 'react';
import { X, Volume2, Plus, Play, CheckCircle2, AlertTriangle, ShieldCheck, Compass } from 'lucide-react';
import { AsanaPose, SuryaStep } from '../types/yoga';
import { PoseIllustration } from './PoseIllustration';
import { soundManager } from '../utils/audio';

interface PoseDetailModalProps {
  pose: AsanaPose | SuryaStep | null;
  onClose: () => void;
  onStartSinglePractice?: (pose: AsanaPose | SuryaStep) => void;
  onAddToRoutine?: (pose: AsanaPose | SuryaStep) => void;
}

export const PoseDetailModal: React.FC<PoseDetailModalProps> = ({
  pose,
  onClose,
  onStartSinglePractice,
  onAddToRoutine,
}) => {
  const [activeTab, setActiveTab] = useState<'steps' | 'alignment' | 'benefits' | 'modifications'>('steps');
  const [addedToast, setAddedToast] = useState(false);

  if (!pose) return null;

  const isSuryaStep = 'stepNumber' in pose;
  const asana = pose as AsanaPose;
  const surya = pose as SuryaStep;

  const playVoice = () => {
    soundManager.speakText(`${pose.sanskritName}. ${pose.englishName}.`);
  };

  const handleAdd = () => {
    if (onAddToRoutine) {
      onAddToRoutine(pose);
      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FCFAF7] rounded-2xl max-w-3xl w-full border border-stone-200 shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-stone-200/80 flex items-start justify-between gap-4 bg-stone-100/40">
          <div>
            <div className="flex items-center gap-2.5 text-xs text-stone-500 mb-1">
              {isSuryaStep ? (
                <>
                  <span>Surya Namaskar</span>
                  <span aria-hidden="true">·</span>
                  <span>Step {surya.stepNumber} of 12</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-800 font-medium">{surya.breath}</span>
                </>
              ) : (
                <>
                  <span>{asana.category} Asana</span>
                  <span aria-hidden="true">·</span>
                  <span>{asana.difficulty}</span>
                  <span aria-hidden="true">·</span>
                  <span>{asana.defaultDurationSec}s Hold</span>
                </>
              )}
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 tracking-tight">
                {pose.sanskritName}
              </h2>
              <span className="text-lg font-serif text-amber-800/80">
                {pose.devanagari}
              </span>
            </div>

            <p className="text-sm font-medium text-stone-600 mt-0.5">
              {pose.englishName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={playVoice}
              title="Hear pronunciation"
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 rounded-lg transition-colors"
            >
              <Volume2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-200/70 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Pose Visual and Primary Metadata Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-5 rounded-xl border border-stone-200/70">
            <div className="flex items-center justify-center p-2 bg-[#F9F8F5] rounded-lg">
              <PoseIllustration type={pose.svgPoseType} className="w-full h-56" />
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {isSuryaStep ? (
                <>
                  <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200/50">
                    <span className="text-[11px] font-semibold text-amber-900 tracking-wide uppercase block">Vedic Solar Mantra</span>
                    <p className="text-sm font-semibold text-amber-950 mt-1">{surya.mantra}</p>
                    <p className="text-xs text-stone-600 italic mt-0.5">{surya.mantraMeaning}</p>
                  </div>
                  <div className="space-y-1 text-stone-700">
                    <p><strong className="text-stone-900">Chakra Focus:</strong> {surya.chakra} ({surya.chakraLocation})</p>
                    <p><strong className="text-stone-900">Breathing Synchrony:</strong> {surya.breath}</p>
                    <p><strong className="text-stone-900">Gaze Point (Drishti):</strong> {surya.gazePoint}</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {asana.summary}
                  </p>
                  <div className="space-y-1.5 pt-1 text-stone-700">
                    <p><strong className="text-stone-900">Pronunciation:</strong> <span className="italic">{asana.pronunciation}</span></p>
                    <p><strong className="text-stone-900">Primary Chakra:</strong> {asana.primaryChakra}</p>
                    <p><strong className="text-stone-900">Target Anatomy:</strong> {asana.targetMuscles.join(', ')}</p>
                    <p><strong className="text-stone-900">Natural Respiration:</strong> {asana.breathing}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-medium">
            <button
              onClick={() => setActiveTab('steps')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'steps' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Step-by-Step Guide
            </button>
            <button
              onClick={() => setActiveTab('alignment')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'alignment' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Alignment & Precautions
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'benefits' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Health Benefits
            </button>
            {!isSuryaStep && (
              <button
                onClick={() => setActiveTab('modifications')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'modifications' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Props & Modifications
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="text-sm text-stone-700">
            {activeTab === 'steps' && (
              <div className="space-y-4">
                {isSuryaStep ? (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-stone-900 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-amber-700" />
                      Physical Execution
                    </h3>
                    <p className="leading-relaxed bg-white p-4 rounded-xl border border-stone-200/60">
                      {surya.physicalAction}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-stone-900 mb-2">1. Entering the Posture</h4>
                      <ul className="space-y-1.5 list-disc list-inside bg-white p-4 rounded-xl border border-stone-200/60">
                        {asana.steps.entering.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">{step}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 mb-2">2. Holding & Breath Sustenance</h4>
                      <ul className="space-y-1.5 list-disc list-inside bg-white p-4 rounded-xl border border-stone-200/60">
                        {asana.steps.holding.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">{step}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900 mb-2">3. Mindful Exit & Transition</h4>
                      <ul className="space-y-1.5 list-disc list-inside bg-white p-4 rounded-xl border border-stone-200/60">
                        {asana.steps.exiting.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'alignment' && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    Essential Alignment Keys
                  </h4>
                  <ul className="space-y-2 bg-white p-4 rounded-xl border border-stone-200/60">
                    {(isSuryaStep ? surya.alignmentKeys : asana.alignmentPoints).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {!isSuryaStep && asana.commonMistakes && (
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-700" />
                      Common Mistakes to Avoid
                    </h4>
                    <ul className="space-y-2 bg-amber-50/50 p-4 rounded-xl border border-amber-200/50">
                      {asana.commonMistakes.map((mistake, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-stone-700 leading-relaxed">
                          <span className="text-amber-700 font-bold shrink-0">✕</span>
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    Contraindications & Cautions
                  </h4>
                  <ul className="space-y-1.5 bg-red-50/50 p-4 rounded-xl border border-red-200/50 text-stone-700">
                    {(isSuryaStep ? surya.contraindications : asana.contraindications).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-red-600 font-bold shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="space-y-3">
                <h4 className="font-semibold text-stone-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Physiological & Energetic Benefits
                </h4>
                <ul className="space-y-2.5 bg-white p-4 rounded-xl border border-stone-200/60">
                  {(isSuryaStep ? surya.benefits : asana.benefits).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-emerald-700 font-semibold shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'modifications' && !isSuryaStep && (
              <div className="space-y-3">
                <h4 className="font-semibold text-stone-900">Props, Straps, Blocks & Variations</h4>
                <ul className="space-y-2 bg-white p-4 rounded-xl border border-stone-200/60">
                  {asana.modifications.map((mod, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-amber-700 font-bold shrink-0">✦</span>
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-100/50 flex items-center justify-between gap-3">
          {addedToast ? (
            <span className="text-xs text-emerald-700 font-medium flex items-center gap-1.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" /> Added to your custom flow!
            </span>
          ) : (
            <span className="text-xs text-stone-500">
              {isSuryaStep ? 'Classical Solar Kriya Step' : `Traditional ${asana.difficulty} Posture`}
            </span>
          )}

          <div className="flex items-center gap-2">
            {onAddToRoutine && (
              <button
                onClick={handleAdd}
                className="px-3.5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Flow</span>
              </button>
            )}

            {onStartSinglePractice && (
              <button
                onClick={() => onStartSinglePractice(pose)}
                className="px-4 py-2 text-xs font-medium text-white bg-amber-800 rounded-lg hover:bg-amber-900 transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Practice Now</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
