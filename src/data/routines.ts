import { YogaRoutine } from '../types/yoga';

export const CURATED_ROUTINES: YogaRoutine[] = [
  {
    id: 'morning_surya_flow',
    title: 'Surya Namaskar 6-Rounds Solar Flow',
    description: 'Awaken inner fire, circulate prana, and salute the dawn sun through 6 synchronized rounds of Sun Salutations.',
    level: 'Beginner',
    totalDurationMin: 12,
    tags: ['Sun Salutation', 'Prana Awakening', 'Morning Flow'],
    imageUrl: '/src/assets/images/surya_namaskar_dawn_1793030105869.jpg',
    items: [
      { poseId: 'pranamasana', poseName: 'Pranamasana (Prayer Pose)', durationSec: 20, notes: 'Center your awareness at Anahata heart chakra' },
      { poseId: 'hastauttanasana', poseName: 'Hastauttanasana (Raised Arms)', durationSec: 15, notes: 'Inhale deeply and arch gently' },
      { poseId: 'uttanasana', poseName: 'Padahastasana (Forward Fold)', durationSec: 20, notes: 'Exhale fully, lengthen hamstrings' },
      { poseId: 'ashwasanchalanasana', poseName: 'Ashwa Sanchalanasana (Low Lunge)', durationSec: 25, notes: 'Inhale, look up, open right hip' },
      { poseId: 'dandasana_plank', poseName: 'Dandasana (Plank)', durationSec: 15, notes: 'Retain breath, straight strong spine' },
      { poseId: 'ashtanganamaskara', poseName: 'Ashtanga Namaskara (8 Limbs)', durationSec: 15, notes: 'Exhale, 8 points touch the earth' },
      { poseId: 'bhujangasana', poseName: 'Bhujangasana (Cobra)', durationSec: 20, notes: 'Inhale, lift heart, relax shoulders' },
      { poseId: 'parvatasana', poseName: 'Parvatasana (Downward Dog)', durationSec: 30, notes: 'Exhale, ground heels and lift sit bones' },
      { poseId: 'ashwasanchalanasana', poseName: 'Ashwa Sanchalanasana (Left Lunge)', durationSec: 25, notes: 'Inhale, opposite foot forward' },
      { poseId: 'uttanasana', poseName: 'Padahastasana (Forward Fold)', durationSec: 20, notes: 'Exhale, fold completely' },
      { poseId: 'hastauttanasana', poseName: 'Hastauttanasana (Raised Arms)', durationSec: 15, notes: 'Inhale, sweep up to the sun' },
      { poseId: 'tadasana', poseName: 'Tadasana (Mountain Stillness)', durationSec: 30, notes: 'Exhale, absorb the solar energy' }
    ]
  },
  {
    id: 'hatha_foundation',
    title: 'Hatha Yoga Foundation for Balance',
    description: 'A classical, steady practice focusing on postural alignment, spinal equilibrium, and mindful breath awareness.',
    level: 'Beginner',
    totalDurationMin: 15,
    tags: ['Foundational', 'Spine Alignment', 'Balance'],
    imageUrl: '/src/assets/images/hero_yoga_serene_1793030105230.jpg',
    items: [
      { poseId: 'sukhasana', poseName: 'Sukhasana (Easy Pose Centering)', durationSec: 60, notes: 'Set intention and breathe consciously' },
      { poseId: 'tadasana', poseName: 'Tadasana (Mountain Pose)', durationSec: 30, notes: 'Check 4-corner foot balance' },
      { poseId: 'vrikshasana', poseName: 'Vrikshasana (Tree Pose - Right)', durationSec: 40, notes: 'Focus gaze on Drishti point' },
      { poseId: 'vrikshasana', poseName: 'Vrikshasana (Tree Pose - Left)', durationSec: 40, notes: 'Switch sides, ground standing leg' },
      { poseId: 'virabhadrasana2', poseName: 'Warrior II (Virabhadrasana II)', durationSec: 45, notes: 'Expansive power and open hips' },
      { poseId: 'trikonasana', poseName: 'Triangle (Trikonasana)', durationSec: 40, notes: 'Lengthen lateral waist and chest' },
      { poseId: 'baddhakonasana', poseName: 'Bound Angle (Baddha Konasana)', durationSec: 60, notes: 'Gentle release for hips and groin' },
      { poseId: 'setubandhasana', poseName: 'Bridge Pose (Setu Bandhasana)', durationSec: 45, notes: 'Activate glutes and open heart' },
      { poseId: 'balasana', poseName: 'Child’s Pose (Balasana)', durationSec: 60, notes: 'Surrender into deep back decompression' },
      { poseId: 'savasana', poseName: 'Savasana (Deep Rest)', durationSec: 180, notes: 'Integrate the peaceful stillness' }
    ]
  },
  {
    id: 'posture_decompression',
    title: 'Spine & Desk Posture Decompression',
    description: 'Targeted antidote for long sitting, rounded shoulders, forward head tilt, and tight hip flexors.',
    level: 'Beginner',
    totalDurationMin: 14,
    tags: ['Desk Relief', 'Healthy Spine', 'Chest Opener'],
    imageUrl: '/src/assets/images/yoga_studio_zen_1793030106415.jpg',
    items: [
      { poseId: 'sukhasana', poseName: 'Sukhasana (Seated Breath)', durationSec: 60, notes: 'Elongate thoracic spine' },
      { poseId: 'uttanasana', poseName: 'Standing Forward Fold (Uttanasana)', durationSec: 45, notes: 'Let gravity traction the neck and lumbar' },
      { poseId: 'bhujangasana_pose', poseName: 'Bhujangasana (Cobra)', durationSec: 35, notes: 'Counteract slouching by strengthening upper back' },
      { poseId: 'gomukhasana', poseName: 'Cow Face Arms (Gomukhasana)', durationSec: 50, notes: 'Unravel tight rotator cuffs and chest' },
      { poseId: 'ustrasana', poseName: 'Camel Pose (Ustrasana)', durationSec: 35, notes: 'Open the throat, sternum, and psoas' },
      { poseId: 'setubandhasana', poseName: 'Bridge Pose (Setu Bandha)', durationSec: 50, notes: 'Extend hip flexors and decompress discs' },
      { poseId: 'balasana', poseName: 'Child’s Pose (Balasana)', durationSec: 90, notes: 'Release all lingering lumbar tension' },
      { poseId: 'savasana', poseName: 'Savasana (Final Integration)', durationSec: 180, notes: 'Effortless relaxation' }
    ]
  },
  {
    id: 'core_vitality_fire',
    title: 'Core Agni & Arm Balance Flow',
    description: 'Ignite the Manipura solar fire, challenge wrist and shoulder stability, and elevate balance control.',
    level: 'Intermediate',
    totalDurationMin: 18,
    tags: ['Core Power', 'Arm Balance', 'Energy'],
    items: [
      { poseId: 'tadasana', poseName: 'Tadasana (Centering)', durationSec: 30, notes: 'Draw core inward and activate arches' },
      { poseId: 'utkatasana', poseName: 'Utkatasana (Chair Pose)', durationSec: 40, notes: 'Build heat in thighs and back' },
      { poseId: 'virabhadrasana1', poseName: 'Warrior I (Virabhadrasana I)', durationSec: 45, notes: 'Steadfast concentration and stability' },
      { poseId: 'dandasana_plank', poseName: 'Plank Pose (Phalakasana)', durationSec: 40, notes: 'Solid arm and abdominal engagement' },
      { poseId: 'bakasana', poseName: 'Crow Pose (Bakasana)', durationSec: 25, notes: 'Find flight through forward gaze' },
      { poseId: 'navasana', poseName: 'Boat Pose (Navasana)', durationSec: 35, notes: 'Fierce abdominal contraction' },
      { poseId: 'dhanurasana', poseName: 'Bow Pose (Dhanurasana)', durationSec: 30, notes: 'Stretch the entire front abdominal wall' },
      { poseId: 'balasana', poseName: 'Child’s Pose (Balasana)', durationSec: 60, notes: 'Cool down and restore' },
      { poseId: 'savasana', poseName: 'Savasana (Corpse Pose)', durationSec: 180, notes: 'Soothe the nervous system' }
    ]
  },
  {
    id: 'evening_restorative',
    title: 'Evening Wind-Down & Deep Sleep Sadhana',
    description: 'Melt evening restlessness, quiet the mind, and ease into restorative sleep with gentle opening asanas.',
    level: 'Beginner',
    totalDurationMin: 16,
    tags: ['Restorative', 'Deep Sleep', 'Calming'],
    imageUrl: '/src/assets/images/pranayama_breath_zen_1793030106415.jpg',
    items: [
      { poseId: 'sukhasana', poseName: 'Sukhasana (Quiet Seated Breathing)', durationSec: 90, notes: 'Exhales twice as long as inhales' },
      { poseId: 'baddhakonasana', poseName: 'Baddha Konasana (Bound Angle)', durationSec: 75, notes: 'Passive release of emotional tension' },
      { poseId: 'paschimottanasana', poseName: 'Seated Forward Fold (Paschimottanasana)', durationSec: 90, notes: 'Soften into parasympathetic surrender' },
      { poseId: 'balasana', poseName: 'Child’s Pose (Balasana)', durationSec: 90, notes: 'Forehead grounding onto the mat' },
      { poseId: 'setubandhasana', poseName: 'Gentle Bridge Pose', durationSec: 60, notes: 'Passive soothing back extension' },
      { poseId: 'savasana', poseName: 'Extended Savasana (Nidra Prep)', durationSec: 300, notes: 'Floating into blissful stillness' }
    ]
  }
];
