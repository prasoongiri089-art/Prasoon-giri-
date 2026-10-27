export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type PoseCategory =
  | 'Standing'
  | 'Seated'
  | 'Backbend'
  | 'Inversion'
  | 'Arm Balance'
  | 'Core'
  | 'Restorative';

export type BreathCue =
  | 'Inhale'
  | 'Exhale'
  | 'Retain'
  | 'Normal Breathing'
  | 'Inhale Deeply'
  | 'Exhale Fully'
  | 'Exhale to Fold'
  | 'Inhale to Lift'
  | 'Inhale to Open'
  | 'Inhale to Expand'
  | 'Effortless Natural Breath';

export interface Chakra {
  name: string;
  sanskrit: string;
  location: string;
  color: string;
  seedMantra: string;
}

export interface AsanaPose {
  id: string;
  sanskritName: string;
  devanagari: string;
  englishName: string;
  pronunciation: string;
  category: PoseCategory;
  difficulty: Difficulty;
  primaryChakra: string;
  targetMuscles: string[];
  defaultDurationSec: number;
  breathing: BreathCue;
  summary: string;
  steps: {
    entering: string[];
    holding: string[];
    exiting: string[];
  };
  alignmentPoints: string[];
  commonMistakes: string[];
  modifications: string[];
  benefits: string[];
  contraindications: string[];
  svgPoseType: string;
}

export interface SuryaStep {
  stepNumber: number;
  sanskritName: string;
  devanagari: string;
  englishName: string;
  mantra: string;
  mantraMeaning: string;
  chakra: string;
  chakraLocation: string;
  breath: BreathCue;
  physicalAction: string;
  gazePoint: string;
  alignmentKeys: string[];
  contraindications: string[];
  benefits: string[];
  svgPoseType: string;
}

export interface RoutineItem {
  poseId: string;
  poseName: string;
  durationSec: number;
  notes?: string;
}

export interface YogaRoutine {
  id: string;
  title: string;
  description: string;
  level: Difficulty;
  totalDurationMin: number;
  tags: string[];
  isCustom?: boolean;
  items: RoutineItem[];
  imageUrl?: string;
}

export interface PranayamaExercise {
  id: string;
  name: string;
  sanskritName: string;
  devanagari: string;
  meaning: string;
  ratio: {
    inhale: number;
    holdIn: number;
    exhale: number;
    holdOut: number;
  };
  benefits: string[];
  contraindications: string[];
  instructions: string[];
  recommendedRounds: number;
}
