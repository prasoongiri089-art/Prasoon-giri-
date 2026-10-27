import { PranayamaExercise } from '../types/yoga';

export const PRANAYAMA_PRACTICES: PranayamaExercise[] = [
  {
    id: 'sama_vritti',
    name: 'Box Breathing (Sama Vritti)',
    sanskritName: 'Sama Vṛtti Prāṇāyāma',
    devanagari: 'समवृत्ति प्राणायाम',
    meaning: 'Equal Ratio Breath — balancing the autonomic nervous system into immediate calm.',
    ratio: {
      inhale: 4,
      holdIn: 4,
      exhale: 4,
      holdOut: 4
    },
    benefits: [
      'Rapidly downsizes acute panic, stress, and racing thoughts',
      'Normalizes blood pressure and heart rate variability (HRV)',
      'Enhances steady cognitive alertness and mental clarity'
    ],
    contraindications: [
      'Pregnancy or severe hypertension (skip breath retention stages and practice 4:4 ratio without holds)'
    ],
    instructions: [
      'Sit comfortably upright in Sukhasana with spine straight and eyes closed.',
      'Inhale slowly and smoothly through both nostrils for 4 counts.',
      'Retain the breath with lungs comfortably full (Antara Kumbhaka) for 4 counts.',
      'Exhale completely through nostrils for 4 counts.',
      'Hold the breath with lungs empty (Bahya Kumbhaka) for 4 counts.'
    ],
    recommendedRounds: 8
  },
  {
    id: 'nadi_shodhana',
    name: 'Alternate Nostril Breathing (Nadi Shodhana)',
    sanskritName: 'Nāḍī Śodhana Prāṇāyāma',
    devanagari: 'नाड़ी शोधन प्राणायाम',
    meaning: 'Purification of the Energy Channels (Ida & Pingala Nadis).',
    ratio: {
      inhale: 4,
      holdIn: 4,
      exhale: 6,
      holdOut: 2
    },
    benefits: [
      'Harmonizes left and right brain hemispheres (logical & intuitive)',
      'Clears respiratory blockages and soothes the central nervous system',
      'Prepares the mind for profound dhyana (meditation)'
    ],
    contraindications: [
      'Acute nasal congestion or severe cold (do not force breathing through blocked nostril)'
    ],
    instructions: [
      'Adopt Vishnu Mudra with right hand: fold index and middle fingers toward palm.',
      'Close right nostril with thumb, inhale gently through left nostril.',
      'Close left nostril with ring finger, hold breath briefly.',
      'Release right nostril, exhale smoothly through right.',
      'Inhale back through right nostril, hold, close right, and exhale smoothly through left.',
      'This completes one cycle.'
    ],
    recommendedRounds: 6
  },
  {
    id: 'ujjayi',
    name: 'Victorious / Ocean Breath (Ujjayi)',
    sanskritName: 'Ujjāyī Prāṇāyāma',
    devanagari: 'उज्जायी प्राणायाम',
    meaning: 'The Victorious Breath — creating a soft resonant whispered sound like ocean waves.',
    ratio: {
      inhale: 5,
      holdIn: 2,
      exhale: 5,
      holdOut: 0
    },
    benefits: [
      'Warms the physical body from inside, generating purifying internal heat',
      'Acts as an auditory meditation anchor to sustain presence throughout flow',
      'Increases oxygen exchange and regulates blood pressure'
    ],
    contraindications: [
      'Extreme throat inflammation or dry laryngitis'
    ],
    instructions: [
      'Slightly constrict the glottis at the back of the throat (similar to whispering or fogging a mirror).',
      'Inhale steadily through nostrils, maintaining the gentle oceanic throat whisper.',
      'Exhale smoothly through nostrils with the same whisper sound.',
      'Keep shoulders relaxed and chest expansive.'
    ],
    recommendedRounds: 10
  },
  {
    id: 'kapalabhati',
    name: 'Skull-Shining Breath (Kapalabhati)',
    sanskritName: 'Kapālabhāti Prāṇāyāma',
    devanagari: 'कपालभाति प्राणायाम',
    meaning: 'Skull Luminescence — vigorous abdominal pumping technique that clarifies brain fog.',
    ratio: {
      inhale: 1,
      holdIn: 0,
      exhale: 1,
      holdOut: 0
    },
    benefits: [
      'Clears sinus passages and purges stale carbon dioxide from lung bases',
      'Vigorously tones transverse abdominis and stimulates sluggish intestines',
      'Awakens mental alertness and dispels morning lethargy'
    ],
    contraindications: [
      'High blood pressure, hernia, cardiac conditions, epilepsy, pregnancy'
    ],
    instructions: [
      'Sit tall with hands on knees. Take a deep preparatory breath in.',
      'Contract abdomen sharply to expel breath forcefully out through the nose.',
      'Allow the inhalation to happen passively as abdominal wall relaxes.',
      'Begin at a steady rhythm of about 1 pump per second (20-30 pumps per round).'
    ],
    recommendedRounds: 3
  },
  {
    id: 'bhramari',
    name: 'Humming Bee Breath (Bhramari)',
    sanskritName: 'Bhrāmarī Prāṇāyāma',
    devanagari: 'भ्रामरी प्राणायाम',
    meaning: 'The Black Bee — soothing micro-vibrations that silence anxious mental turbulence.',
    ratio: {
      inhale: 4,
      holdIn: 2,
      exhale: 8,
      holdOut: 0
    },
    benefits: [
      'Increases natural nitric oxide production in nasal cavities by up to 15x',
      'Instantly dissolves agitation, anger, and sensory overload',
      'Produces a soothing cranial resonance that aids deep sleep'
    ],
    contraindications: [
      'Severe ear infection or mastoiditis'
    ],
    instructions: [
      'Optionally close ears with thumbs and place fingertips over closed eyes (Shanmukhi Mudra).',
      'Inhale deeply through the nose.',
      'Exhale slowly while producing a steady, smooth, low-pitched humming sound like a gentle bee in the throat.',
      'Feel the blissful vibration vibrating through the skull, palate, and chest.'
    ],
    recommendedRounds: 7
  }
];
