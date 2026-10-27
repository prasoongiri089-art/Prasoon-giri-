import { AsanaPose } from '../types/yoga';

export const ALL_ASANAS: AsanaPose[] = [
  // STANDING POSES
  {
    id: 'tadasana',
    sanskritName: 'Tāḍāsana',
    devanagari: 'ताड़ासन',
    englishName: 'Mountain Pose',
    pronunciation: 'tah-DAHS-uh-nuh',
    category: 'Standing',
    difficulty: 'Beginner',
    primaryChakra: 'Muladhara (Root)',
    targetMuscles: ['Quadriceps', 'Calves', 'Spinal Erectors', 'Abdominals'],
    defaultDurationSec: 30,
    breathing: 'Normal Breathing',
    summary: 'The foundational baseline of all standing postures, establishing balanced posture, vertical elongation, and grounded stillness.',
    steps: {
      entering: [
        'Stand with big toes touching and heels slightly separated, or feet parallel hip-width apart.',
        'Lift and spread your toes, then lay them softly back down, distributing weight across four corners of the feet.',
        'Engage thigh muscles and lift kneecaps gently without locking joints backward.'
      ],
      holding: [
        'Draw pelvic floor and lower belly lightly upward and inward.',
        'Lengthen through all four sides of the waist and roll shoulders gently back and down.',
        'Let arms hang naturally at sides with palms facing forward or gently resting toward thighs.',
        'Crown of head reaches toward the ceiling with chin parallel to the earth.'
      ],
      exiting: [
        'Exhale gently, soften knees, and shake out limbs before moving to the next posture.'
      ]
    },
    alignmentPoints: [
      'Ankles, knees, hips, shoulders, and ears stacked in one vertical plumb line',
      'Neutral pelvis—neither tucking tailbone excessively nor overarching lumbar spine',
      'Collarbones broad and chest softly lifted without thrusting ribcage out'
    ],
    commonMistakes: [
      'Locking knees backward into hyperextension',
      'Slumping shoulders forward or clenching jaw and toes',
      'Leaning body weight into heels alone'
    ],
    modifications: [
      'Stand against a wall to test spinal alignment',
      'Keep feet hip-width distance apart for greater stability'
    ],
    benefits: [
      'Corrects faulty postural habits and reinforces spine alignment',
      'Improves proprioception, equilibrium, and mental presence',
      'Tones the abdomen, buttocks, and leg muscles'
    ],
    contraindications: [
      'Acute vertigo, migraine headache, or low blood pressure dizziness'
    ],
    svgPoseType: 'tadasana'
  },
  {
    id: 'vrikshasana',
    sanskritName: 'Vṛkṣāsana',
    devanagari: 'वृक्षासन',
    englishName: 'Tree Pose',
    pronunciation: 'vrik-SHAH-suh-nuh',
    category: 'Standing',
    difficulty: 'Beginner',
    primaryChakra: 'Ajna & Anahata',
    targetMuscles: ['Ankles', 'Calves', 'Gluteus Medius', 'Core Obliques', 'Adductors'],
    defaultDurationSec: 45,
    breathing: 'Normal Breathing',
    summary: 'A graceful balancing posture that roots like a tree into the earth while elevating poise, mental concentration, and pelvic stability.',
    steps: {
      entering: [
        'Start in Tadasana. Shift weight onto the left foot, firming the left standing leg.',
        'Bend the right knee, reach down and clasp the right ankle.',
        'Place the sole of the right foot against the inner left thigh or calf (avoid placing on knee).'
      ],
      holding: [
        'Press the right foot sole and left inner thigh firmly against one another.',
        'Bring hands together at heart center in Anjali Mudra, or sweep them overhead like branches.',
        'Fix your steady gaze (Drishti) on an unmoving point at eye level.',
        'Breathe smoothly, keeping the chest open and core lightly active.'
      ],
      exiting: [
        'Exhale, lower hands back to heart center.',
        'Gently release the right foot back to the mat with control, return to Tadasana, and repeat on opposite side.'
      ]
    },
    alignmentPoints: [
      'Never place the foot directly onto the side of the knee joint',
      'Keep both hip points facing forward horizontally like headlights',
      'Standing leg remains active, knee pointing straight ahead'
    ],
    commonMistakes: [
      'Allowing standing hip to pop out to the side',
      'Holding breath while trying to balance',
      'Tilting pelvis forward or back'
    ],
    modifications: [
      'Place toes of the lifted foot on floor as a kickstand with heel against ankle',
      'Practice with one hand touching a wall or chair back for balance'
    ],
    benefits: [
      'Strengthens ankles, calves, and stabilizing ligaments of the hip',
      'Deeply trains neuromuscular balance and focus',
      'Stretches groin and inner thigh adductors'
    ],
    contraindications: [
      'Recent ankle surgery or severe knee instability'
    ],
    svgPoseType: 'vrikshasana'
  },
  {
    id: 'virabhadrasana1',
    sanskritName: 'Vīrabhadrāsana I',
    devanagari: 'वीरभद्रासन १',
    englishName: 'Warrior I Pose',
    pronunciation: 'veer-uh-buh-DRAHS-uh-nuh',
    category: 'Standing',
    difficulty: 'Beginner',
    primaryChakra: 'Manipura (Solar Plexus)',
    targetMuscles: ['Quadriceps', 'Hip Flexors / Psoas', 'Shoulders', 'Latissimus Dorsi'],
    defaultDurationSec: 40,
    breathing: 'Inhale Deeply',
    summary: 'A powerful lunging standing asana that evokes courage, fierce determination, and deep thoracic and pelvic opening.',
    steps: {
      entering: [
        'From Tadasana, step the right foot back 3.5 to 4 feet.',
        'Angle the back right foot inward about 45 degrees, grounding the entire outer edge of the heel.',
        'Square your hips and chest toward the front of the mat.'
      ],
      holding: [
        'Bend the front left knee to a 90-degree angle, knee stacked over ankle.',
        'Inhale, raise arms overhead, palms facing each other or pressing together.',
        'Draw lower ribs in and lift sternum toward the sky.',
        'Anchor firmly down through the back heel while sinking hips.'
      ],
      exiting: [
        'Exhale, bring hands down, step back foot forward to Tadasana, switch sides.'
      ]
    },
    alignmentPoints: [
      'Front thigh parallel to the floor, knee tracking directly over second toe',
      'Back leg remains razor-straight with quadricep engaged',
      'Front hip draws backward, back hip rolls forward to square pelvis'
    ],
    commonMistakes: [
      'Collapsing the inner arch of the back foot',
      'Allowing front knee to drift inward beyond ankle',
      'Compressing the lumbar spine'
    ],
    modifications: [
      'Widen feet sideways like being on railroad tracks rather than a tightrope',
      'Lift back heel into Crescent High Lunge if pelvis cannot comfortably square'
    ],
    benefits: [
      'Stretches deep hip flexors, calves, and chest',
      'Builds tremendous stamina and leg power',
      'Cultivates grounded confidence and core vitality'
    ],
    contraindications: [
      'Uncontrolled high blood pressure, recent shoulder or knee injury'
    ],
    svgPoseType: 'virabhadrasana'
  },
  {
    id: 'virabhadrasana2',
    sanskritName: 'Vīrabhadrāsana II',
    devanagari: 'वीरभद्रासन २',
    englishName: 'Warrior II Pose',
    pronunciation: 'veer-uh-buh-DRAHS-uh-nuh',
    category: 'Standing',
    difficulty: 'Beginner',
    primaryChakra: 'Swadhisthana & Manipura',
    targetMuscles: ['Quadriceps', 'Glutes', 'Deltoids', 'Inner Thighs', 'Core'],
    defaultDurationSec: 45,
    breathing: 'Normal Breathing',
    summary: 'A wide-stance warrior posture expressing expansive openness, lateral hip mobility, and unwavering focus over the horizon.',
    steps: {
      entering: [
        'Step feet 3.5 to 4 feet apart on the mat along its length.',
        'Turn right foot out 90 degrees, turn left foot slightly inward 10-15 degrees.',
        'Align right heel with the center arch of the left back foot.'
      ],
      holding: [
        'Exhale, bend right knee to 90 degrees, stacking right knee over right ankle.',
        'Extend arms horizontally at shoulder height, reaching actively in opposite directions.',
        'Turn head to gaze steadily over the middle finger of the right hand.',
        'Keep torso centered upright between both hips.'
      ],
      exiting: [
        'Inhale, straighten front leg, turn feet parallel, and repeat on left side.'
      ]
    },
    alignmentPoints: [
      'Shoulders stacked directly over hips—do not lean torso forward toward front knee',
      'Front knee opens laterally toward the baby toe edge of foot',
      'Shoulder blades glide down the back, keeping neck relaxed'
    ],
    commonMistakes: [
      'Front knee collapsing inward',
      'Leaning upper body forward over the front thigh',
      'Tense shoulders lifted up to ears'
    ],
    modifications: [
      'Lessen depth of bend in front knee if thigh tires',
      'Rest hands on hips to focus solely on lower body grounding'
    ],
    benefits: [
      'Strengthens legs, ankles, and abdominal stabilizers',
      'Opens hips and chest generously',
      'Develops mental grit and graceful poise'
    ],
    contraindications: [
      'Diarrhea, chronic knee joint pathology'
    ],
    svgPoseType: 'virabhadrasana2'
  },
  {
    id: 'trikonasana',
    sanskritName: 'Utthita Trikoṇāsana',
    devanagari: 'उत्थित त्रिकोणासन',
    englishName: 'Extended Triangle Pose',
    pronunciation: 'oo-TEE-tuh trik-oh-NAHS-uh-nuh',
    category: 'Standing',
    difficulty: 'Beginner',
    primaryChakra: 'Manipura & Swadhisthana',
    targetMuscles: ['Hamstrings', 'Groin', 'Obliques', 'Spine', 'Shoulders'],
    defaultDurationSec: 40,
    breathing: 'Normal Breathing',
    summary: 'A geometric masterpiece creating three distinct triangles in space, opening the torso, hamstrings, and thoracic spine.',
    steps: {
      entering: [
        'From standing, take feet about 3.5 feet apart.',
        'Turn right foot out 90 degrees; left foot angled in about 15 degrees.',
        'Extend arms out parallel to floor, palms facing down.'
      ],
      holding: [
        'Inhale, reach right hand forward as far as possible over right leg, hinging at the right hip crease.',
        'Exhale, lower right hand down to right shin, ankle, or a yoga block outside foot.',
        'Extend left arm straight up toward ceiling, creating a vertical line through both arms.',
        'Turn head to gaze gently up at the left thumb.'
      ],
      exiting: [
        'Inhale, press through back heel and rise back up to standing with arms wide.'
      ]
    },
    alignmentPoints: [
      'Imagine your entire body positioned between two narrow panes of glass',
      'Do not collapse all weight onto the bottom hand; maintain active core',
      'Keep both sides of the torso equally long'
    ],
    commonMistakes: [
      'Rounding the chest toward the floor instead of rotating it open toward ceiling',
      'Hyperextending the front knee (keep a micro-bend)',
      'Dropping head down with strain'
    ],
    modifications: [
      'Place a yoga block on high setting under the bottom hand',
      'Gaze downward toward front foot if neck feels strained'
    ],
    benefits: [
      'Stretches hamstrings, groin, and lateral spine',
      'Stimulates abdominal organs and helps relieve stress',
      'Improves pelvic alignment and shoulder freedom'
    ],
    contraindications: [
      'Low blood pressure, neck headaches'
    ],
    svgPoseType: 'trikonasana'
  },
  {
    id: 'utkatasana',
    sanskritName: 'Utkaṭāsana',
    devanagari: 'उत्कटासन',
    englishName: 'Chair / Fierce Pose',
    pronunciation: 'oot-kuh-TAHS-uh-nuh',
    category: 'Standing',
    difficulty: 'Beginner',
    primaryChakra: 'Muladhara & Manipura',
    targetMuscles: ['Quadriceps', 'Gluteus Maximus', 'Calves', 'Spinal Erectors', 'Deltoids'],
    defaultDurationSec: 30,
    breathing: 'Inhale Deeply',
    summary: 'An empowering seated squat with arms raised high, testing leg stamina, ankle dorsiflexion, and inner perseverance.',
    steps: {
      entering: [
        'Stand in Tadasana with feet touching or hip-width apart.',
        'Inhale, sweep arms overhead with palms facing inward.',
        'Exhale, bend knees and sit hips back and down as if sinking into an invisible chair behind you.'
      ],
      holding: [
        'Shift weight into heels so that you can see your toes beyond your knees.',
        'Draw lower abdomen inward and lengthen tailbone slightly toward the mat.',
        'Keep chest lifted and gaze forward or slightly upward between the palms.',
        'Maintain deep, rhythmic breathing.'
      ],
      exiting: [
        'Inhale, press firmly into feet and straighten legs, sweeping arms to sides, return to Tadasana.'
      ]
    },
    alignmentPoints: [
      'Knees track parallel and do not collapse inward toward each other',
      'Torso leans forward at roughly the same angle as the shins',
      'Avoid severe lumbar arching by maintaining core engagement'
    ],
    commonMistakes: [
      'Knees shooting too far past the toes',
      'Shoulders hunching up to ears',
      'Breath becoming shallow or held'
    ],
    modifications: [
      'Place a yoga block between thighs and squeeze to activate adductors',
      'Keep hands at heart center if shoulder mobility is restricted'
    ],
    benefits: [
      'Strengthens ankles, calves, thighs, and spine',
      'Stimulates heart rate and metabolic energy',
      'Tones the pelvic basin and abdominal core'
    ],
    contraindications: [
      'Acute knee ligament injuries, insomnia, headache'
    ],
    svgPoseType: 'tadasana'
  },
  {
    id: 'natarajasana',
    sanskritName: 'Naṭarājāsana',
    devanagari: 'नटराजासन',
    englishName: 'Dancer / Lord of the Dance Pose',
    pronunciation: 'nah-tuh-rah-JAH-suh-nuh',
    category: 'Standing',
    difficulty: 'Intermediate',
    primaryChakra: 'Anahata (Heart)',
    targetMuscles: ['Quadriceps', 'Psoas', 'Hamstrings', 'Back Extensors', 'Chest'],
    defaultDurationSec: 30,
    breathing: 'Inhale',
    summary: 'Dedicated to Shiva as the cosmic dancer, blending backbend flexibility with one-legged poise and aesthetic grace.',
    steps: {
      entering: [
        'From Tadasana, shift weight onto the left foot.',
        'Bend right knee, bringing right foot up behind you, and clasp the inner arch or ankle with right hand.',
        'Raise left arm straight up toward the sky.'
      ],
      holding: [
        'Inhale, begin kicking the right foot into the right hand, lifting thigh up and back.',
        'Allow torso to pivot forward from the hips like a seesaw, keeping heart lifted.',
        'Gaze steadily over the fingertips of the extended left hand.',
        'Keep standing leg strong and steady.'
      ],
      exiting: [
        'Inhale, slowly lower leg and return upright, release foot gently to mat, switch sides.'
      ]
    },
    alignmentPoints: [
      'Keep lifted right hip squared down toward the mat rather than opening sideways',
      'The kick of the foot creates the backbend opening the chest',
      'Do not hyperextend standing knee'
    ],
    commonMistakes: [
      'Letting the lifted knee splay out wide to the side',
      'Dropping torso without kicking the back leg high',
      'Losing focus on the Drishti point'
    ],
    modifications: [
      'Loop a yoga strap around the foot to hold if shoulders or ankles are tight',
      'Place forward hand on a wall for balance support'
    ],
    benefits: [
      'Opens shoulders, chest, and hip flexors',
      'Strengthens standing ankle, leg, and abdominal stabilizers',
      'Improves equilibrium, grace, and concentration'
    ],
    contraindications: [
      'Severe ankle sprain, acute lumbar disc issues'
    ],
    svgPoseType: 'vrikshasana'
  },

  // SEATED & HIP OPENERS
  {
    id: 'sukhasana',
    sanskritName: 'Sukhāsana',
    devanagari: 'सुखासन',
    englishName: 'Easy Pose',
    pronunciation: 'soo-KAHS-uh-nuh',
    category: 'Seated',
    difficulty: 'Beginner',
    primaryChakra: 'Muladhara & Ajna',
    targetMuscles: ['Spinal Erectors', 'Hip External Rotators', 'Core'],
    defaultDurationSec: 120,
    breathing: 'Normal Breathing',
    summary: 'The classic comfortable meditation seat, providing grounding, spinal verticality, and tranquil clarity for meditation and pranayama.',
    steps: {
      entering: [
        'Sit with legs extended on the floor in front of you.',
        'Cross your shins, slipping each foot beneath the opposite knee.',
        'Rest hands on knees in Jnana or Chin Mudra (thumb and index fingertips touching).'
      ],
      holding: [
        'Feel the two sitting bones rooting squarely into the floor.',
        'Lengthen the spine toward the crown of the head, letting shoulders drop softly.',
        'Close eyes or soften gaze toward floor 4 feet ahead.',
        'Observe gentle flow of incoming and outgoing breath.'
      ],
      exiting: [
        'Gently open eyes, extend legs forward, switch the cross of the shins and rest.'
      ]
    },
    alignmentPoints: [
      'Hips should ideally sit higher than or level with knees to avoid rounded lower back',
      'Spine upright without leaning forward or slumping back',
      'Jaw relaxed, tongue resting against roof of mouth'
    ],
    commonMistakes: [
      'Slouching through the lower back',
      'Tensing shoulders or gripping knees with hands'
    ],
    modifications: [
      'Sit on a folded yoga blanket or meditation zafu cushion to elevate pelvis',
      'Place blocks under knees if inner groins feel tight'
    ],
    benefits: [
      'Calms mental chatter and lowers cortisol',
      'Maintains good lumbar lordosis and postural endurance',
      'Ideal vessel for pranayama and meditation'
    ],
    contraindications: [
      'Severe knee joint inflammation or recent meniscus tear'
    ],
    svgPoseType: 'padmasana'
  },
  {
    id: 'padmasana',
    sanskritName: 'Padmāsana',
    devanagari: 'पद्मासन',
    englishName: 'Lotus Pose',
    pronunciation: 'pahd-MAHS-uh-nuh',
    category: 'Seated',
    difficulty: 'Advanced',
    primaryChakra: 'Muladhara & Sahasrara',
    targetMuscles: ['Hip Rotators', 'Ankles', 'Spinal Erectors'],
    defaultDurationSec: 60,
    breathing: 'Normal Breathing',
    summary: 'The supreme royal emblem of yogic meditation, locking the legs to channel ascending Kundalini energy through the Sushumna nadi.',
    steps: {
      entering: [
        'Sit on mat with legs outstretched in Dandasana.',
        'Bend right knee, cradle right foot and shin, and rotate deeply from the hip joint.',
        'Place right foot high on the left thigh with sole facing upward and heel near navel.',
        'Carefully bend left knee, bring left foot across and place it high on top of right thigh.'
      ],
      holding: [
        'Sit bones ground evenly; knees touch or draw near to the mat.',
        'Place hands in Chin Mudra or Dhyana Mudra resting in the lap.',
        'Draw spine up tall like a blossoming lotus stem.',
        'Breathe softly and smoothly through nostrils.'
      ],
      exiting: [
        'Slowly and carefully uncross legs with hands, extend shins forward, rotate ankles, switch cross of legs.'
      ]
    },
    alignmentPoints: [
      'The rotation MUST originate from the ball-and-socket hip joint, never by twisting knee ligaments',
      'Both soles turned upward toward ceiling',
      'Spine effortless, dignified, and upright'
    ],
    commonMistakes: [
      'Forcing the foot onto thigh when hips are tight, endangering the medial meniscus',
      'Sickling the ankles'
    ],
    modifications: [
      'Practice Ardha Padmasana (Half Lotus) with one foot resting on opposite thigh and other foot tucked below',
      'Practice Sukhasana or Siddhasana while working on hip mobility'
    ],
    benefits: [
      'Directs vital prana upward along the spinal column',
      'Locks the body into a stable, unshakable physical foundation',
      'Stimulates pelvic circulation and abdominal organs'
    ],
    contraindications: [
      'Any knee injury, ankle instability, sciatica'
    ],
    svgPoseType: 'padmasana'
  },
  {
    id: 'baddhakonasana',
    sanskritName: 'Baddha Koṇāsana',
    devanagari: 'बद्धकोणासन',
    englishName: 'Bound Angle / Butterfly Pose',
    pronunciation: 'BAHD-huh cone-AHS-uh-nuh',
    category: 'Seated',
    difficulty: 'Beginner',
    primaryChakra: 'Swadhisthana (Sacral)',
    targetMuscles: ['Adductors', 'Groin', 'Psoas', 'Pelvic Floor'],
    defaultDurationSec: 60,
    breathing: 'Exhale to Fold',
    summary: 'A rejuvenating seated pose with soles pressed together, soothing the reproductive organs and increasing inner pelvic mobility.',
    steps: {
      entering: [
        'Sit tall in Dandasana with legs extended.',
        'Bend both knees and draw heels toward the pelvis.',
        'Press soles of feet together and let knees open wide to sides like book covers.'
      ],
      holding: [
        'Clasp hands around feet or big toes with index and middle fingers.',
        'Inhale, lengthen spine upward through the crown of the head.',
        'Exhale, press outer edges of feet together and allow knees to descend naturally toward floor.',
        'Optionally hinge forward from the hips with a flat spine.'
      ],
      exiting: [
        'Inhale, return torso upright. Use hands to support outside of knees and bring them together.'
      ]
    },
    alignmentPoints: [
      'Maintain an anterior pelvic tilt—do not round lumbar spine backward into the floor',
      'Do not aggressively bounce or force knees down; allow gravity and breath to soften groin',
      'Keep feet active by pressing the outer edges together'
    ],
    commonMistakes: [
      'Slumping shoulders and rounding the neck to force forehead to feet',
      'Aggressively flapping the thighs'
    ],
    modifications: [
      'Sit on a folded blanket to tilt pelvis forward easily',
      'Place blocks under outer thighs for restorative relaxation'
    ],
    benefits: [
      'Stimulates abdominal and pelvic organs, prostate gland, ovaries',
      'Relieves menstrual discomfort and sciatica symptoms',
      'Improves circulation to the lower pelvis'
    ],
    contraindications: [
      'Groin pull or knee injury (use bolster under knees)'
    ],
    svgPoseType: 'padmasana'
  },
  {
    id: 'paschimottanasana',
    sanskritName: 'Paścimottānāsana',
    devanagari: 'पश्चिमोत्तानासन',
    englishName: 'Seated Forward Bend',
    pronunciation: 'PAHSH-ee-moh-tahn-AHS-uh-nuh',
    category: 'Seated',
    difficulty: 'Intermediate',
    primaryChakra: 'Manipura & Swadhisthana',
    targetMuscles: ['Hamstrings', 'Calves', 'Spinal Erectors', 'Glutes'],
    defaultDurationSec: 60,
    breathing: 'Exhale to Fold',
    summary: 'Literally the "Intense Stretch of the West" (back of the body), drawing the mind inwards to stillness.',
    steps: {
      entering: [
        'Sit on the floor with legs straight out in front in Dandasana.',
        'Flex feet, pointing toes toward ceiling and drawing heels slightly off mat.',
        'Inhale, raise arms overhead, elongating the spine from the hips.'
      ],
      holding: [
        'Exhale, hinge forward from the hip joints, keeping the spine long.',
        'Reach forward and hold onto shins, ankles, outer edges of feet, or big toes.',
        'With each inhale, lengthen the sternum forward; with each exhale, fold deeper.',
        'Rest abdomen on thighs, chest toward knees, forehead toward shins.'
      ],
      exiting: [
        'Inhale, reach arms forward and lift torso up with flat spine, lower arms.'
      ]
    },
    alignmentPoints: [
      'Movement must initiate from the pelvis rotating over femur heads, not from thoracic rounding',
      'Keep neck relaxed and continuous with spine',
      'Bend knees slightly if hamstrings pull excessively on the lumbar spine'
    ],
    commonMistakes: [
      'Hunching the upper back just to grab the toes with hands',
      'Flaring elbows up and scrunching shoulders into neck'
    ],
    modifications: [
      'Loop a strap around balls of the feet and hold the ends with straight arms and tall spine',
      'Sit on a firm folded blanket'
    ],
    benefits: [
      'Deeply calms the brain and relieves mild depression and stress',
      'Stretches entire posterior myofascial chain from heels to crown',
      'Stimulates liver, kidneys, and improves digestion'
    ],
    contraindications: [
      'Lumbar disc herniation or acute asthma attacks'
    ],
    svgPoseType: 'uttanasana'
  },
  {
    id: 'gomukhasana',
    sanskritName: 'Gomukhāsana',
    devanagari: 'गोमुखासन',
    englishName: 'Cow Face Pose',
    pronunciation: 'go-moo-KAHS-uh-nuh',
    category: 'Seated',
    difficulty: 'Intermediate',
    primaryChakra: 'Anahata & Swadhisthana',
    targetMuscles: ['Triceps', 'Rotator Cuff', 'Latissimus Dorsi', 'Piriformis', 'IT Band'],
    defaultDurationSec: 45,
    breathing: 'Normal Breathing',
    summary: 'A geometric shoulder and hip opener where knees stack like cow lips and hands bind behind the shoulder blades.',
    steps: {
      entering: [
        'Sit on the mat and slide left foot under right hip, crossing left knee over midline.',
        'Cross right leg over left, stacking right knee directly atop left knee.',
        'Sit evenly between both heels.'
      ],
      holding: [
        'Inhale, reach right arm up to ceiling, bend right elbow and pat your upper back.',
        'Reach left arm out to side, rotate thumb downward, bend elbow and reach left fingers up the spine.',
        'Clasp fingers together between shoulder blades.',
        'Keep spine upright, right elbow pointing straight up, chest broad.'
      ],
      exiting: [
        'Exhale, gently release hands, uncross legs, shake out limbs, repeat with left leg and left arm on top.'
      ]
    },
    alignmentPoints: [
      'Both sitting bones remain grounded on the floor or prop',
      'Avoid jutting chin forward or rounding chest',
      'Keep top elbow pointing straight toward sky without pressing down on skull'
    ],
    commonMistakes: [
      'Forcing hands to touch and torquing the shoulder joint',
      'Sitting lopsided on one buttock'
    ],
    modifications: [
      'Hold a yoga strap or washcloth between hands behind the back',
      'Sit on a yoga block to reduce tension in knees and hips'
    ],
    benefits: [
      'Releases deep chronic tension from rotator cuff and shoulders',
      'Stretches outer hips, gluteus medius, and IT bands',
      'Improves lung aeration and chest expansion'
    ],
    contraindications: [
      'Rotator cuff tear, severe knee pathology'
    ],
    svgPoseType: 'padmasana'
  },

  // BACKBENDS
  {
    id: 'bhujangasana_pose',
    sanskritName: 'Bhujaṅgāsana',
    devanagari: 'भुजङ्गासन',
    englishName: 'Cobra Pose',
    pronunciation: 'boo-jahn-GAHS-uh-nuh',
    category: 'Backbend',
    difficulty: 'Beginner',
    primaryChakra: 'Anahata & Swadhisthana',
    targetMuscles: ['Erector Spinae', 'Gluteals', 'Deltoids', 'Pectorals'],
    defaultDurationSec: 30,
    breathing: 'Inhale',
    summary: 'Mimicking the raised hood of a cobra, this foundational prone backbend strengthens the spine and revitalizes energy.',
    steps: {
      entering: [
        'Lie prone on the stomach with legs extended, tops of feet flat on floor.',
        'Place palms flat on the mat underneath the shoulders with fingers pointing forward.',
        'Hug elbows close to the ribcage.'
      ],
      holding: [
        'Inhale, press tops of feet and pubic bone firmly into the mat.',
        'Lift chest off the floor using back muscles, keeping little to no weight in hands.',
        'Roll shoulders back and downward away from ears, broadening collarbones.',
        'Keep neck long and gaze softly forward and slightly upward.'
      ],
      exiting: [
        'Exhale, slowly lower chest and forehead back down to the mat, turn cheek to one side and rest.'
      ]
    },
    alignmentPoints: [
      'Keep pubic bone anchored to protect the lower lumbar spine',
      'Elbows slightly bent and pinned close to sides, not splaying out like chicken wings',
      'Engage glutes moderately to support pelvis'
    ],
    commonMistakes: [
      'Pushing through hands to force arms straight and jamming the lower back',
      'Craning neck backward with wrinkled cervical spine'
    ],
    modifications: [
      'Practice Sphinx Pose on forearms with elbows beneath shoulders for a gentle variation'
    ],
    benefits: [
      'Invigorates kidneys and adrenal glands',
      'Strengthens spinal extensors and improves posture',
      'Opens chest, lungs, and relieves respiratory constriction'
    ],
    contraindications: [
      'Pregnancy, acute back sprain, carpal tunnel'
    ],
    svgPoseType: 'bhujangasana'
  },
  {
    id: 'dhanurasana',
    sanskritName: 'Dhanurāsana',
    devanagari: 'धनुरासन',
    englishName: 'Bow Pose',
    pronunciation: 'duh-noor-AHS-uh-nuh',
    category: 'Backbend',
    difficulty: 'Intermediate',
    primaryChakra: 'Manipura (Solar Plexus)',
    targetMuscles: ['Back Extensors', 'Gluteals', 'Quadriceps', 'Pectorals', 'Abdominals'],
    defaultDurationSec: 25,
    breathing: 'Inhale to Lift',
    summary: 'The body becomes shaped like an archer’s bow with arms as the taut string, balancing purely on the abdomen.',
    steps: {
      entering: [
        'Lie flat on the belly with feet hip-width apart.',
        'Bend knees and bring heels close to the buttocks.',
        'Reach arms back and clasp ankles firmly from the outside.'
      ],
      holding: [
        'Inhale, kick legs back strongly into hands, which pulls the chest off the floor.',
        'Lift thighs off the mat, balancing on the belly and pubic bone.',
        'Gaze forward and slightly upward, keeping breath fluid and steady.',
        'Feel the deep chest and shoulder opening.'
      ],
      exiting: [
        'Exhale gently, release ankles, lower thighs and chest to the mat, rest with arms beside hips.'
      ]
    },
    alignmentPoints: [
      'Keep knees hip-width apart; do not let them flare excessively wide',
      'The kick of the shins drives the lift of the chest',
      'Breathe into the belly, allowing a natural subtle rocking with respiration'
    ],
    commonMistakes: [
      'Holding onto the toes instead of firm grip on ankles',
      'Holding the breath while in the backbend'
    ],
    modifications: [
      'Loop a yoga strap around ankles if reaching them is difficult',
      'Practice one side at a time (Half Bow Pose)'
    ],
    benefits: [
      'Massages abdominal organs, curing constipation and sluggish digestion',
      'Improves spinal elasticity from neck to sacrum',
      'Energizes the sympathetic nervous system and combats fatigue'
    ],
    contraindications: [
      'High or low blood pressure, hernia, peptic ulcer, pregnancy'
    ],
    svgPoseType: 'dhanurasana'
  },
  {
    id: 'ustrasana',
    sanskritName: 'Uṣṭrāsana',
    devanagari: 'उष्ट्रासन',
    englishName: 'Camel Pose',
    pronunciation: 'oosh-TRAHS-uh-nuh',
    category: 'Backbend',
    difficulty: 'Intermediate',
    primaryChakra: 'Anahata & Vishuddhi',
    targetMuscles: ['Quadriceps', 'Psoas', 'Pectoralis Major', 'Erector Spinae'],
    defaultDurationSec: 30,
    breathing: 'Inhale to Open',
    summary: 'A deep kneeling backbend that unbinds emotional constriction, opens the heart, and releases tight hip flexors.',
    steps: {
      entering: [
        'Kneel on the floor with knees hip-width apart and thighs perpendicular to mat.',
        'Place hands on lower back, fingers pointing downward over sacrum.',
        'Draw elbows toward each other behind you and lift chest.'
      ],
      holding: [
        'Inhale, lift sternum high, press hips gently forward.',
        'Arch spine backward and reach hands one by one back to clasp heels.',
        'Keep thighs pressing forward perpendicular to the floor.',
        'Let head drop back softly if neck allows, or keep chin neutral toward chest.'
      ],
      exiting: [
        'Bring hands back to lower back, inhale and use core to lead with chest upright, sit on heels in Vajrasana.'
      ]
    },
    alignmentPoints: [
      'Keep thighs vertical—do not let hips sink back over heels',
      'Focus the extension in thoracic spine rather than crunching lumbar vertebrae',
      'Keep breathing steady and unhurried'
    ],
    commonMistakes: [
      'Collapsing backward onto heels without keeping pelvis forward',
      'Holding the breath'
    ],
    modifications: [
      'Tuck toes under to elevate heels closer to hands',
      'Keep hands supporting the sacrum throughout rather than reaching for heels'
    ],
    benefits: [
      'Opens chest, throat, and entire front body chain',
      'Improves respiratory capacity and eases asthma symptoms',
      'Stimulates thyroid and parathyroid glands'
    ],
    contraindications: [
      'Severe cervical spine or lumbar disc issues, migraine'
    ],
    svgPoseType: 'ustrasana'
  },
  {
    id: 'setubandhasana',
    sanskritName: 'Setu Bandha Sarvāṅgāsana',
    devanagari: 'सेतुबन्ध सर्वाङ्गासन',
    englishName: 'Bridge Pose',
    pronunciation: 'SAY-too BAHN-duh',
    category: 'Backbend',
    difficulty: 'Beginner',
    primaryChakra: 'Vishuddhi & Anahata',
    targetMuscles: ['Gluteus Maximus', 'Hamstrings', 'Quadriceps', 'Erector Spinae'],
    defaultDurationSec: 45,
    breathing: 'Inhale to Lift',
    summary: 'A restorative and strengthening backbend bridging the earth and sky, revitalizing the spine and soothing anxiety.',
    steps: {
      entering: [
        'Lie on back with knees bent and feet flat on floor hip-width apart.',
        'Position heels close enough to pelvis so fingertips can just brush the heels.',
        'Arms rest along sides, palms down.'
      ],
      holding: [
        'Inhale, press firmly into feet and arms, lifting hips and spine toward ceiling.',
        'Interlace fingers beneath pelvis and roll shoulders underneath you to broaden chest.',
        'Keep thighs parallel and knees stacked over ankles.',
        'Lift sternum toward chin, keeping chin lifting slightly away from chest.'
      ],
      exiting: [
        'Exhale, release hands, slowly roll spine down vertebra by vertebra to the mat.'
      ]
    },
    alignmentPoints: [
      'Ground firmly through the inner edges of both feet to prevent knees from splaying outward',
      'Maintain space between chin and chest to safeguard cervical vertebrae',
      'Engage glutes and hamstrings to support pelvic lift'
    ],
    commonMistakes: [
      'Splaying knees outward away from hip-width alignment',
      'Turning head from side to side while in posture'
    ],
    modifications: [
      'Place a yoga block beneath sacrum for a restorative passive Bridge',
      'Keep palms flat beside hips instead of interlacing hands'
    ],
    benefits: [
      'Rejuvenates tired legs and reduces back fatigue',
      'Stimulates thyroid gland and abdominal organs',
      'Soothes nervous system and relieves mild depression'
    ],
    contraindications: [
      'Acute neck injury'
    ],
    svgPoseType: 'bhujangasana'
  },
  {
    id: 'chakrasana',
    sanskritName: 'Ūrdhva Dhanurāsana / Cakrāsana',
    devanagari: 'चक्रासन / ऊर्ध्वधनुरासन',
    englishName: 'Wheel / Upward-Facing Bow Pose',
    pronunciation: 'chuh-KRAHS-uh-nuh',
    category: 'Backbend',
    difficulty: 'Advanced',
    primaryChakra: 'Manipura & Anahata',
    targetMuscles: ['Glutes', 'Hamstrings', 'Triceps', 'Deltoids', 'Pectorals', 'Spine'],
    defaultDurationSec: 20,
    breathing: 'Normal Breathing',
    summary: 'The ultimate wheel backbend, expanding life force across the entire endocrine system and awakening intense vitality.',
    steps: {
      entering: [
        'Lie supine with feet flat and knees bent hip-width apart, heels near sitting bones.',
        'Place hands on floor beside ears, fingers pointing back toward shoulders, elbows parallel.',
        'Press into feet and hands, lift hips and crown of head lightly to mat, pause.'
      ],
      holding: [
        'Press strongly into palms and feet, straightening arms and lifting body into a glorious arch.',
        'Roll thighs inward and press chest through shoulders toward the wall behind you.',
        'Let head hang naturally and breathe evenly.',
        'Distribute curve evenly throughout spine.'
      ],
      exiting: [
        'Tuck chin toward chest, bend elbows and knees slowly, and lower back of shoulders and spine gently to mat.'
      ]
    },
    alignmentPoints: [
      'Keep feet and knees parallel; do not turn toes outwards',
      'Press index knuckles down to prevent wrist compression',
      'Open the thoracic chest rather than dumping into lumbar curve'
    ],
    commonMistakes: [
      'Feet turning outward like a duck',
      'Elbows flaring wide',
      'Holding breath in panic'
    ],
    modifications: [
      'Place hands on blocks angled against a baseboard wall',
      'Practice Bridge Pose until shoulder and hip flexor mobility increases'
    ],
    benefits: [
      'Deeply energizes body and dispels sluggishness and depression',
      'Strengthens arms, wrists, legs, and spine',
      'Stretches chest, lungs, and abdomen'
    ],
    contraindications: [
      'Carpal tunnel, cardiac issues, detached retina, pregnancy'
    ],
    svgPoseType: 'camel'
  },

  // INVERSIONS & ARM BALANCES
  {
    id: 'sirsasana',
    sanskritName: 'Śīrṣāsana',
    devanagari: 'शीर्षासन',
    englishName: 'Headstand (King of Asanas)',
    pronunciation: 'sheer-SHAHS-uh-nuh',
    category: 'Inversion',
    difficulty: 'Advanced',
    primaryChakra: 'Sahasrara (Crown)',
    targetMuscles: ['Deltoids', 'Trapezius', 'Core Abdominals', 'Spinal Stabilizers'],
    defaultDurationSec: 60,
    breathing: 'Normal Breathing',
    summary: 'The revered King of all Asanas, reversing gravitational pull on the cardiovascular system and illuminating higher consciousness.',
    steps: {
      entering: [
        'Kneel on mat, interlace fingers up to knuckles, forming an equilateral triangle with forearms.',
        'Place crown of head on mat cupped by interlaced hands.',
        'Lift knees, walk toes in toward elbows until spine is nearly vertical over shoulders.'
      ],
      holding: [
        'Engage core and lift bent knees to chest, then slowly extend legs upward straight toward ceiling.',
        'Bear 80% of weight through forearms and shoulders, keeping neck safe.',
        'Point toes upward, engaging inner arches and abdominals.',
        'Breathe calmly and observe equilibrium.'
      ],
      exiting: [
        'Slowly bend knees, lower feet to mat with control, and rest in Balasana (Child’s Pose) for at least 6 deep breaths.'
      ]
    },
    alignmentPoints: [
      'Active press through forearms prevents neck compression',
      'Tailbone lengthens toward heels to avoid banana back arch',
      'Never kick up aggressively; lift with core control'
    ],
    commonMistakes: [
      'Dumping all body weight directly into the neck and skull',
      'Flaring elbows wider than shoulder width',
      'Standing up immediately after headstand without resting in Balasana'
    ],
    modifications: [
      'Practice against a wall under qualified supervision',
      'Practice Dolphin Pose to build shoulder girdle strength first'
    ],
    benefits: [
      'Increases blood and oxygen supply to brain and pituitary gland',
      'Improves mental clarity, memory, and concentration',
      'Relieves gravitational venous blood stagnation in legs'
    ],
    contraindications: [
      'High blood pressure, glaucoma, neck injury, menstruation'
    ],
    svgPoseType: 'sirsasana'
  },
  {
    id: 'sarvangasana',
    sanskritName: 'Sarvāṅgāsana',
    devanagari: 'सर्वाङ्गासन',
    englishName: 'Shoulderstand (Queen of Asanas)',
    pronunciation: 'sar-vahn-GAHS-uh-nuh',
    category: 'Inversion',
    difficulty: 'Intermediate',
    primaryChakra: 'Vishuddhi (Throat)',
    targetMuscles: ['Shoulder Girdle', 'Core', 'Gluteals', 'Triceps'],
    defaultDurationSec: 90,
    breathing: 'Normal Breathing',
    summary: 'The Queen of Asanas, nourishing every organ ("sarva-anga") of the body and revitalizing thyroid metabolism.',
    steps: {
      entering: [
        'Lie flat on back with arms beside body.',
        'Bend knees and swing legs and pelvis upward toward ceiling, supporting lower back with hands.',
        'Walk hands up the spine toward shoulder blades to bring torso perpendicular to mat.'
      ],
      holding: [
        'Extend legs straight up toward sky, feet together.',
        'Bring elbows shoulder-width apart behind the back.',
        'Chest presses toward chin (chin lock / Jalandhara Bandha).',
        'Gaze softly toward toes or chest; DO NOT turn neck sideways.'
      ],
      exiting: [
        'Lower legs partially overhead into Halasana, release hands to floor, slowly roll spine down to mat.'
      ]
    },
    alignmentPoints: [
      'Support shoulders on folded blankets so cervical spine floats free and uncompressed',
      'Keep head completely still—never look around or turn head while weight is on shoulders',
      'Reach up through big toes'
    ],
    commonMistakes: [
      'Letting elbows splay wide out to sides',
      'Collapsing hips backward like a jackknife'
    ],
    modifications: [
      'Place 2-3 folded yoga blankets under shoulders with neck hanging off edge',
      'Practice Legs-Up-the-Wall (Viparita Karani) as a gentle alternative'
    ],
    benefits: [
      'Stimulates thyroid and parathyroid glands, balancing metabolism',
      'Relieves varicose veins, swollen ankles, and fatigue',
      'Induces parasympathetic calm and soothes insomnia'
    ],
    contraindications: [
      'Cervical disc disease, high blood pressure, menstruation'
    ],
    svgPoseType: 'sirsasana'
  },
  {
    id: 'bakasana',
    sanskritName: 'Bakāsana / Kakāsana',
    devanagari: 'बकासन / काकासन',
    englishName: 'Crow / Crane Pose',
    pronunciation: 'bah-KAHS-uh-nuh',
    category: 'Arm Balance',
    difficulty: 'Intermediate',
    primaryChakra: 'Manipura (Solar Plexus)',
    targetMuscles: ['Wrist Flexors', 'Triceps', 'Anterior Deltoids', 'Transverse Abdominis'],
    defaultDurationSec: 20,
    breathing: 'Normal Breathing',
    summary: 'A thrilling arm balance lifting the body on two hands like a crane taking flight, testing core compaction and wrist fortitude.',
    steps: {
      entering: [
        'Squat down with feet together and knees wide.',
        'Plant palms flat on the floor shoulder-width apart, fingers spread wide like sun rays.',
        'Lift hips high, rise onto balls of feet, and nestle knees high up onto the backs of your upper triceps.'
      ],
      holding: [
        'Gaze forward at the floor about 12 inches ahead of your hands (not down at feet).',
        'Lean weight forward into palms until toes become light.',
        'Lift one foot, then the other off the mat. Touch big toes together.',
        'Press floor away and dome upper back, hugging core tightly.'
      ],
      exiting: [
        'Exhale, slowly lower feet back to the mat with control, return to squat.'
      ]
    },
    alignmentPoints: [
      'Gaze MUST look forward, not down or back (where you look is where you will fall)',
      'Fingertips grip the mat firmly to micro-balance (like claws)',
      'Hips stay lifted high and knees hug inward onto triceps'
    ],
    commonMistakes: [
      'Looking down between hands causing forward somersault',
      'Jumping or hopping into the pose rather than shifting weight smoothly'
    ],
    modifications: [
      'Place a pillow or folded blanket in front of head as a safety bumper',
      'Practice lifting one foot off mat at a time to build confidence'
    ],
    benefits: [
      'Builds tremendous arm, shoulder, and wrist strength',
      'Tones the abdominal organs and pelvic floor',
      'Overcomes fear of falling and enhances balance control'
    ],
    contraindications: [
      'Carpal tunnel syndrome, wrist fracture, pregnancy'
    ],
    svgPoseType: 'bakasana'
  },

  // CORE & RESTORATIVE
  {
    id: 'navasana',
    sanskritName: 'Paripūrṇa Nāvāsana',
    devanagari: 'परिपूर्ण नावासन',
    englishName: 'Boat Pose',
    pronunciation: 'nah-VAHS-uh-nuh',
    category: 'Core',
    difficulty: 'Intermediate',
    primaryChakra: 'Manipura (Solar Plexus)',
    targetMuscles: ['Rectus Abdominis', 'Iliopsoas', 'Hip Flexors', 'Erector Spinae'],
    defaultDurationSec: 30,
    breathing: 'Inhale to Expand',
    summary: 'Balancing on the tripod of the sitting bones and tailbone, forging intense abdominal fire and spinal resilience.',
    steps: {
      entering: [
        'Sit with knees bent, feet flat on the floor.',
        'Hold backs of thighs with hands and lean torso back about 45 degrees, keeping spine flat.',
        'Lift feet off floor until shins are parallel to the mat.'
      ],
      holding: [
        'If stable, straighten knees, pointing toes upward into a V-shape.',
        'Reach arms forward parallel to the floor alongside legs, palms facing inward.',
        'Lift sternum, pull lower abdomen inward, and gaze over toes.'
      ],
      exiting: [
        'Exhale, bend knees, lower feet to the mat, hug shins to chest.'
      ]
    },
    alignmentPoints: [
      'Keep chest lifted and shoulder blades pulled together; avoid rounding thoracic spine',
      'Balance slightly behind the sitting bones without collapsing onto sacrum'
    ],
    commonMistakes: [
      'Rounding the lower back and slouching backward',
      'Holding the breath when the core burns'
    ],
    modifications: [
      'Keep knees bent with shins parallel to floor (Half Boat / Ardha Navasana)',
      'Hold backs of thighs with hands for support'
    ],
    benefits: [
      'Fires up metabolic energy and strengthens core stabilizers',
      'Stimulates thyroid, intestines, and kidneys',
      'Improves balance and digestion'
    ],
    contraindications: [
      'Asthma flare-ups, diarrhea, heart problems'
    ],
    svgPoseType: 'bakasana'
  },
  {
    id: 'balasana',
    sanskritName: 'Bālāsana',
    devanagari: 'बालासन',
    englishName: 'Child’s Pose',
    pronunciation: 'bah-LAHS-uh-nuh',
    category: 'Restorative',
    difficulty: 'Beginner',
    primaryChakra: 'Ajna (Third Eye)',
    targetMuscles: ['Latissimus Dorsi', 'Spinal Extensors', 'Glutes', 'Ankles'],
    defaultDurationSec: 90,
    breathing: 'Normal Breathing',
    summary: 'A sanctuary posture of sweet surrender and deep neurological rest, releasing spinal tension and quieting sensory stimulation.',
    steps: {
      entering: [
        'Kneel on the floor, bring big toes together to touch, and separate knees wide apart.',
        'Exhale, lower hips back toward heels and walk hands forward along the mat.',
        'Drape torso between thighs and rest forehead gently on the floor.'
      ],
      holding: [
        'Extend arms forward with palms resting on mat, or sweep arms back alongside torso.',
        'Allow belly to soften between thighs with every breath.',
        'Feel the lower back expand and decompress.',
        'Breathe deeply into the back of the heart.'
      ],
      exiting: [
        'Inhale, walk hands back in toward body, press up into seated kneeling posture.'
      ]
    },
    alignmentPoints: [
      'Hips sink toward heels; let gravity do the work',
      'Neck relaxed, shoulders softening down and away from ears',
      'Forehead resting firmly on floor or block stimulates vagal calming tone'
    ],
    commonMistakes: [
      'Lifting hips into the air because of tight ankles or knees (use props)'
    ],
    modifications: [
      'Place a bolster or pillow between knees and fold over it',
      'Place a folded blanket beneath shins or under sitting bones'
    ],
    benefits: [
      'Activates parasympathetic nervous system (rest & digest)',
      'Gently stretches hips, thighs, and ankles',
      'Relieves stress, fatigue, and lower back aches'
    ],
    contraindications: [
      'Diarrhea, late-term pregnancy, knee injury'
    ],
    svgPoseType: 'balasana'
  },
  {
    id: 'savasana',
    sanskritName: 'Śavāsana',
    devanagari: 'शवासन',
    englishName: 'Corpse Pose',
    pronunciation: 'shah-VAHS-uh-nuh',
    category: 'Restorative',
    difficulty: 'Beginner',
    primaryChakra: 'All Chakras / Sahasrara',
    targetMuscles: ['Complete Neuromuscular Release'],
    defaultDurationSec: 300,
    breathing: 'Effortless Natural Breath',
    summary: 'The ultimate conscious relaxation and integration pose concluding every yogic sadhana, dissolving bodily identification.',
    steps: {
      entering: [
        'Lie flat on back on the mat.',
        'Allow legs to fall comfortably open, wider than hip-width, feet flopping naturally outward.',
        'Place arms about 6 inches away from sides, palms turned upward in surrender.'
      ],
      holding: [
        'Close eyes gently. Release all conscious control over the breath.',
        'Scan body systematically from toes to crown, softening every muscle fiber, jaw, and tongue.',
        'Allow thoughts to pass by like clouds across a vast sky without latching onto them.',
        'Rest in pure luminous awareness.'
      ],
      exiting: [
        'Deepen breath gently. Wiggle fingers and toes.',
        'Roll slowly onto the right side in fetal posture, pause for 3 breaths, then press up to seated.'
      ]
    },
    alignmentPoints: [
      'Body symmetrical along central axis of mat',
      'Keep warm with a light blanket if room is cool',
      'Stay completely still yet alert—neither fidgeting nor falling into unconscious sleep'
    ],
    commonMistakes: [
      'Rushing through or skipping Savasana (depriving the nervous system of integration)',
      'Getting distracted by mental to-do lists'
    ],
    modifications: [
      'Place a bolster beneath knees to relieve lower back sensitivity',
      'Place a thin folded towel under the head'
    ],
    benefits: [
      'Lowers blood pressure, heart rate, and metabolic fatigue',
      'Integrates the neuromuscular and energetic benefits of the entire practice',
      'Promotes cellular healing and deep serenity'
    ],
    contraindications: [
      'None (support back with bolster if pregnant)'
    ],
    svgPoseType: 'savasana'
  }
];

export const CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'All Poses' },
  { id: 'Standing', label: 'Standing (Utthita)' },
  { id: 'Seated', label: 'Seated & Hips (Upavistha)' },
  { id: 'Backbend', label: 'Backbends (Purva)' },
  { id: 'Inversion', label: 'Inversions (Viparita)' },
  { id: 'Arm Balance', label: 'Arm Balances (Bhuja)' },
  { id: 'Core', label: 'Core & Fire (Nabhi)' },
  { id: 'Restorative', label: 'Restorative (Vishrama)' },
];
