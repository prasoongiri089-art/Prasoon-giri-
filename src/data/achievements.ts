import { UserProgressData } from '../utils/progress';

export interface MilestoneBadge {
  id: string;
  title: string;
  sanskritName: string;
  description: string;
  category: 'Consistency' | 'Practice Time' | 'Milestone' | 'Tradition';
  targetValue: number;
  currentValue: number;
  unit: string;
  isUnlocked: boolean;
  unlockedAt?: string | null;
  iconName: string;
}

export const evaluateAchievements = (progress: UserProgressData): MilestoneBadge[] => {
  const totalMinutes = progress.totalMinutes || 0;
  const totalSessions = progress.totalSessions || 0;
  const bestStreak = Math.max(progress.bestStreakDays || 0, progress.currentStreakDays || 0);

  // Total poses
  const totalPoses = (progress.history || []).reduce(
    (sum, item) => sum + (item.posesCount || 0),
    0
  );

  // Count specific session types
  const suryaCount = (progress.history || []).filter(
    (item) => item.type === 'surya_namaskar' || item.routineTitle.toLowerCase().includes('surya')
  ).length;

  const pranayamaCount = (progress.history || []).filter(
    (item) => item.type === 'pranayama' || item.routineTitle.toLowerCase().includes('pranayama') || item.routineTitle.toLowerCase().includes('breath')
  ).length;

  // Check if any single session was >= 30 min
  const maxSingleSessionMinutes = (progress.history || []).reduce(
    (max, item) => Math.max(max, item.durationMinutes || 0),
    0
  );

  return [
    {
      id: 'first_session',
      title: 'First Step on the Mat',
      sanskritName: 'Ārambha (आरम्भ)',
      description: 'Complete your very first yoga practice session.',
      category: 'Milestone',
      targetValue: 1,
      currentValue: Math.min(1, totalSessions),
      unit: 'session',
      isUnlocked: totalSessions >= 1,
      iconName: 'Sparkles',
    },
    {
      id: 'first_streak',
      title: 'First Streak',
      sanskritName: 'Satata (सतत)',
      description: 'Maintain consistency for 2 consecutive days.',
      category: 'Consistency',
      targetValue: 2,
      currentValue: Math.min(2, bestStreak),
      unit: 'days',
      isUnlocked: bestStreak >= 2,
      iconName: 'Flame',
    },
    {
      id: 'three_day_streak',
      title: '3-Day Sadhana',
      sanskritName: 'Triguna (त्रिगुण)',
      description: 'Achieve a 3-day daily yoga practice streak.',
      category: 'Consistency',
      targetValue: 3,
      currentValue: Math.min(3, bestStreak),
      unit: 'days',
      isUnlocked: bestStreak >= 3,
      iconName: 'TrendingUp',
    },
    {
      id: 'seven_day_streak',
      title: 'Weekly Dedication',
      sanskritName: 'Saptāha (सप्ताह)',
      description: 'Complete a full 7-day uninterrupted daily streak.',
      category: 'Consistency',
      targetValue: 7,
      currentValue: Math.min(7, bestStreak),
      unit: 'days',
      isUnlocked: bestStreak >= 7,
      iconName: 'CalendarCheck',
    },
    {
      id: 'one_hour',
      title: '1 Hour Practiced',
      sanskritName: 'Muhūrta (मुहूर्त)',
      description: 'Accumulate 60 minutes of total mindful practice time.',
      category: 'Practice Time',
      targetValue: 60,
      currentValue: Math.min(60, totalMinutes),
      unit: 'min',
      isUnlocked: totalMinutes >= 60,
      iconName: 'Clock',
    },
    {
      id: 'five_hours',
      title: '5 Hours Practiced',
      sanskritName: 'Abhyāsa (अभ्यास)',
      description: 'Spend 300 minutes (5 full hours) dedicated on the mat.',
      category: 'Practice Time',
      targetValue: 300,
      currentValue: Math.min(300, totalMinutes),
      unit: 'min',
      isUnlocked: totalMinutes >= 300,
      iconName: 'Timer',
    },
    {
      id: 'ten_hours',
      title: '10 Hours Practiced',
      sanskritName: 'Tapas (तपस्)',
      description: 'Reach 600 minutes (10 hours) of continuous self-discipline.',
      category: 'Practice Time',
      targetValue: 600,
      currentValue: Math.min(600, totalMinutes),
      unit: 'min',
      isUnlocked: totalMinutes >= 600,
      iconName: 'Sun',
    },
    {
      id: 'ten_sessions',
      title: '10 Completed Sessions',
      sanskritName: 'Sādhaka (साधक)',
      description: 'Complete 10 full guided or self-directed practice sessions.',
      category: 'Milestone',
      targetValue: 10,
      currentValue: Math.min(10, totalSessions),
      unit: 'sessions',
      isUnlocked: totalSessions >= 10,
      iconName: 'Award',
    },
    {
      id: 'surya_devotee',
      title: 'Solar Devotee',
      sanskritName: 'Sūrya Bhakta (सूर्य भक्त)',
      description: 'Complete 3 guided Surya Namaskar solar sequences.',
      category: 'Tradition',
      targetValue: 3,
      currentValue: Math.min(3, suryaCount),
      unit: 'sessions',
      isUnlocked: suryaCount >= 3,
      iconName: 'Compass',
    },
    {
      id: 'pranayama_master',
      title: 'Prana Whisperer',
      sanskritName: 'Prāṇavān (प्राणवान्)',
      description: 'Engage in 2 dedicated yogic breathwork practices.',
      category: 'Tradition',
      targetValue: 2,
      currentValue: Math.min(2, pranayamaCount),
      unit: 'sessions',
      isUnlocked: pranayamaCount >= 2,
      iconName: 'Wind',
    },
    {
      id: 'century_asanas',
      title: '100 Asanas Flowed',
      sanskritName: 'Śatakam (शतकम्)',
      description: 'Flow through a cumulative total of 100 postures.',
      category: 'Milestone',
      targetValue: 100,
      currentValue: Math.min(100, totalPoses),
      unit: 'postures',
      isUnlocked: totalPoses >= 100,
      iconName: 'Layers',
    },
    {
      id: 'deep_immersion',
      title: 'Deep Immersion',
      sanskritName: 'Dhyāna (ध्यान)',
      description: 'Maintain stillness through a single session lasting 30+ minutes.',
      category: 'Practice Time',
      targetValue: 30,
      currentValue: Math.min(30, maxSingleSessionMinutes),
      unit: 'min',
      isUnlocked: maxSingleSessionMinutes >= 30,
      iconName: 'HeartHandshake',
    },
  ];
};
