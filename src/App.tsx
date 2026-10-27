/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SuryaNamaskarSection } from './components/SuryaNamaskarSection';
import { PoseLibrarySection } from './components/PoseLibrarySection';
import { CuratedFlowsSection } from './components/CuratedFlowsSection';
import { PranayamaSection } from './components/PranayamaSection';
import { RoutineBuilder } from './components/RoutineBuilder';
import { UserProgressSection } from './components/UserProgressSection';
import { PoseDetailModal } from './components/PoseDetailModal';
import { PracticePlayer, PracticeSessionItem } from './components/PracticePlayer';
import { AsanaPose, SuryaStep, YogaRoutine, RoutineItem } from './types/yoga';
import { SURYA_NAMASKAR_A_STEPS } from './data/suryaNamaskar';
import { ALL_ASANAS } from './data/asanas';
import { CURATED_ROUTINES } from './data/routines';

export default function App() {
  const [activeTab, setActiveTab] = useState<'surya' | 'poses' | 'routines' | 'pranayama' | 'builder' | 'progress'>('surya');
  const [selectedPoseForModal, setSelectedPoseForModal] = useState<AsanaPose | SuryaStep | null>(null);
  
  // Practice Player Active State
  const [activePracticeSession, setActivePracticeSession] = useState<{
    title: string;
    items: PracticeSessionItem[];
    roundsCount: number;
  } | null>(null);

  // Staged item for Routine Builder
  const [builderInitialItems, setBuilderInitialItems] = useState<RoutineItem[]>([]);

  // Start guided Surya Namaskar with specified rounds
  const handleStartGuidedSurya = (rounds: number) => {
    const sessionItems: PracticeSessionItem[] = SURYA_NAMASKAR_A_STEPS.map((step) => ({
      id: `surya-step-${step.stepNumber}`,
      sanskritName: step.sanskritName,
      devanagari: step.devanagari,
      englishName: step.englishName,
      breath: step.breath,
      durationSec: 15,
      svgPoseType: step.svgPoseType,
      mantra: step.mantra,
      instruction: step.physicalAction,
    }));

    setActivePracticeSession({
      title: `Surya Namaskar (${rounds} ${rounds === 1 ? 'Round' : 'Rounds'})`,
      items: sessionItems,
      roundsCount: rounds,
    });
  };

  // Start single pose practice (e.g. 30s-60s hold)
  const handleStartSinglePosePractice = (pose: AsanaPose | SuryaStep) => {
    const isSurya = 'stepNumber' in pose;
    const item: PracticeSessionItem = {
      id: isSurya ? `surya-step-${pose.stepNumber}` : pose.id,
      sanskritName: pose.sanskritName,
      devanagari: pose.devanagari,
      englishName: pose.englishName,
      breath: isSurya ? pose.breath : (pose as AsanaPose).breathing,
      durationSec: isSurya ? 20 : (pose as AsanaPose).defaultDurationSec,
      svgPoseType: pose.svgPoseType,
      mantra: isSurya ? (pose as SuryaStep).mantra : undefined,
      instruction: isSurya ? (pose as SuryaStep).physicalAction : (pose as AsanaPose).steps.holding[0],
    };

    setActivePracticeSession({
      title: `${pose.sanskritName} Practice`,
      items: [item],
      roundsCount: 1,
    });
  };

  // Start curated routine
  const handleStartCuratedRoutine = (routine: YogaRoutine) => {
    const sessionItems: PracticeSessionItem[] = routine.items.map((item, idx) => {
      // Find matching asana or fallback
      const matchingAsana = ALL_ASANAS.find((p) => p.id === item.poseId);
      const matchingSurya = SURYA_NAMASKAR_A_STEPS.find((s) => s.svgPoseType === item.poseId);

      return {
        id: `${item.poseId}-${idx}`,
        sanskritName: matchingAsana?.sanskritName || item.poseName.split('(')[0].trim(),
        devanagari: matchingAsana?.devanagari,
        englishName: matchingAsana?.englishName || item.poseName,
        breath: matchingAsana?.breathing || 'Normal Breathing',
        durationSec: item.durationSec,
        svgPoseType: matchingAsana?.svgPoseType || matchingSurya?.svgPoseType || 'tadasana',
        instruction: item.notes || matchingAsana?.steps.holding[0],
      };
    });

    setActivePracticeSession({
      title: routine.title,
      items: sessionItems,
      roundsCount: 1,
    });
  };

  // Add pose from detail modal to builder
  const handleAddPoseToRoutine = (pose: AsanaPose | SuryaStep) => {
    const isSurya = 'stepNumber' in pose;
    const newItem: RoutineItem = {
      poseId: isSurya ? pose.svgPoseType : pose.id,
      poseName: `${pose.sanskritName} (${pose.englishName})`,
      durationSec: isSurya ? 20 : (pose as AsanaPose).defaultDurationSec,
      notes: isSurya ? (pose as SuryaStep).physicalAction : undefined,
    };
    setBuilderInitialItems((prev) => [...prev, newItem]);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* 3-Zone Compliant Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onStartQuickPractice={() => handleStartCuratedRoutine(CURATED_ROUTINES[0])}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'surya' && (
          <SuryaNamaskarSection
            onStartGuidedFlow={handleStartGuidedSurya}
            onOpenStepDetail={(step) => setSelectedPoseForModal(step)}
          />
        )}

        {activeTab === 'poses' && (
          <PoseLibrarySection
            onOpenPoseModal={(pose) => setSelectedPoseForModal(pose)}
            onStartSinglePractice={handleStartSinglePosePractice}
          />
        )}

        {activeTab === 'routines' && (
          <CuratedFlowsSection
            onStartRoutine={handleStartCuratedRoutine}
            onOpenFlowBuilder={() => setActiveTab('builder')}
          />
        )}

        {activeTab === 'pranayama' && <PranayamaSection />}

        {activeTab === 'builder' && (
          <RoutineBuilder
            onStartCustomRoutine={handleStartCuratedRoutine}
            initialItems={builderInitialItems}
          />
        )}

        {activeTab === 'progress' && (
          <UserProgressSection
            onStartPractice={() => handleStartCuratedRoutine(CURATED_ROUTINES[0])}
          />
        )}
      </main>

      {/* Pose Detail Deep-Dive Modal */}
      {selectedPoseForModal && (
        <PoseDetailModal
          pose={selectedPoseForModal}
          onClose={() => setSelectedPoseForModal(null)}
          onStartSinglePractice={(pose) => {
            setSelectedPoseForModal(null);
            handleStartSinglePosePractice(pose);
          }}
          onAddToRoutine={handleAddPoseToRoutine}
        />
      )}

      {/* Fullscreen Zen Practice Studio Player */}
      {activePracticeSession && (
        <PracticePlayer
          title={activePracticeSession.title}
          items={activePracticeSession.items}
          roundsCount={activePracticeSession.roundsCount}
          onClose={() => setActivePracticeSession(null)}
        />
      )}

      {/* Serene Footer */}
      <footer className="mt-auto border-t border-stone-200/80 bg-[#F5F3EF] py-12 text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-stone-900 text-amber-100 flex items-center justify-center font-serif text-sm">
              ॐ
            </span>
            <div>
              <span className="font-bold text-stone-900 font-display text-sm block">Yogasana</span>
              <span className="text-stone-500">The classical science of step-by-step yoga & Surya Namaskar</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-stone-600">
            <button onClick={() => setActiveTab('surya')} className="hover:text-stone-900 transition-colors cursor-pointer">
              Surya Namaskar
            </button>
            <button onClick={() => setActiveTab('poses')} className="hover:text-stone-900 transition-colors cursor-pointer">
              Asana Library
            </button>
            <button onClick={() => setActiveTab('pranayama')} className="hover:text-stone-900 transition-colors cursor-pointer">
              Pranayama
            </button>
            <button onClick={() => setActiveTab('builder')} className="hover:text-stone-900 transition-colors cursor-pointer">
              Custom Flow
            </button>
            <button onClick={() => setActiveTab('progress')} className="hover:text-stone-900 transition-colors cursor-pointer">
              My Progress
            </button>
          </div>

          <div className="text-stone-500 text-center md:text-right">
            <p className="font-serif italic text-amber-900">ॐ शान्तिः शान्तिः शान्तिः</p>
            <p className="text-[11px] mt-0.5">Om Shanti, Shanti, Shanti — Peace in body, speech, and mind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
