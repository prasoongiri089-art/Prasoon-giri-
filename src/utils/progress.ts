/**
 * Utility for tracking and persisting user yoga practice progress in browser localStorage
 */

export interface PracticeSessionRecord {
  id: string;
  timestamp: number;
  dateString: string; // YYYY-MM-DD
  routineTitle: string;
  durationSeconds: number;
  durationMinutes: number;
  posesCount: number;
  type: 'guided' | 'manual' | 'surya_namaskar' | 'pranayama';
}

export interface UserProgressData {
  totalMinutes: number;
  totalSessions: number;
  currentStreakDays: number;
  bestStreakDays: number;
  lastPracticeDate: string | null; // YYYY-MM-DD
  history: PracticeSessionRecord[];
}

const STORAGE_KEY = 'yogasana_user_progress_data';

// Format YYYY-MM-DD in local time
export const getTodayDateString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Calculate consecutive day streak
export const calculateStreaks = (
  dates: string[]
): { currentStreak: number; bestStreak: number } => {
  if (dates.length === 0) return { currentStreak: 0, bestStreak: 0 };

  // Unique sorted dates descending
  const uniqueSortedDates = Array.from(new Set(dates)).sort().reverse();
  const today = getTodayDateString();

  // Check if practiced today or yesterday
  const mostRecent = uniqueSortedDates[0];
  const mostRecentDate = new Date(mostRecent + 'T00:00:00');
  const todayDate = new Date(today + 'T00:00:00');

  const diffDays = Math.floor(
    (todayDate.getTime() - mostRecentDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  let currentStreak = 0;
  // If last practice was today (0) or yesterday (1), streak is active
  if (diffDays <= 1) {
    let checkDate = new Date(mostRecentDate);
    for (const dateStr of uniqueSortedDates) {
      const d = new Date(dateStr + 'T00:00:00');
      const dayDelta = Math.floor(
        (checkDate.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (dayDelta === 0) {
        currentStreak++;
        checkDate = new Date(d.getTime() - 24 * 60 * 60 * 1000);
      } else {
        break;
      }
    }
  }

  // Calculate best all-time streak
  let bestStreak = currentStreak;
  let runningStreak = 0;
  let prevDate: Date | null = null;

  // Chronological order for best streak
  const chronological = [...uniqueSortedDates].reverse();
  for (const dateStr of chronological) {
    const curDate = new Date(dateStr + 'T00:00:00');
    if (!prevDate) {
      runningStreak = 1;
    } else {
      const delta = Math.floor(
        (curDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (delta === 1) {
        runningStreak++;
      } else if (delta > 1) {
        runningStreak = 1;
      }
    }
    prevDate = curDate;
    if (runningStreak > bestStreak) {
      bestStreak = runningStreak;
    }
  }

  return { currentStreak, bestStreak };
};

// Default initial state
export const getDefaultProgress = (): UserProgressData => ({
  totalMinutes: 0,
  totalSessions: 0,
  currentStreakDays: 0,
  bestStreakDays: 0,
  lastPracticeDate: null,
  history: [],
});

// Load from local storage
export const loadUserProgress = (): UserProgressData => {
  if (typeof window === 'undefined') return getDefaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw) as UserProgressData;

    // Recalculate streak to ensure dates are current relative to today
    const sessionDates = (parsed.history || []).map((h) => h.dateString);
    const { currentStreak, bestStreak } = calculateStreaks(sessionDates);

    return {
      totalMinutes: Number(parsed.totalMinutes) || 0,
      totalSessions: Number(parsed.totalSessions) || 0,
      currentStreakDays: currentStreak,
      bestStreakDays: Math.max(bestStreak, Number(parsed.bestStreakDays) || 0),
      lastPracticeDate: parsed.lastPracticeDate || null,
      history: Array.isArray(parsed.history) ? parsed.history : [],
    };
  } catch {
    return getDefaultProgress();
  }
};

// Record a new practice session
export const recordPracticeSession = (
  entry: Omit<PracticeSessionRecord, 'id' | 'timestamp' | 'dateString' | 'durationMinutes'>
): UserProgressData => {
  const current = loadUserProgress();
  const today = getTodayDateString();
  const minutes = Math.max(1, Math.round(entry.durationSeconds / 60));

  const newRecord: PracticeSessionRecord = {
    id: `session_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    dateString: today,
    routineTitle: entry.routineTitle,
    durationSeconds: entry.durationSeconds,
    durationMinutes: minutes,
    posesCount: entry.posesCount,
    type: entry.type,
  };

  const newHistory = [newRecord, ...current.history];
  const allDates = newHistory.map((h) => h.dateString);
  const { currentStreak, bestStreak } = calculateStreaks(allDates);

  const updated: UserProgressData = {
    totalMinutes: current.totalMinutes + minutes,
    totalSessions: current.totalSessions + 1,
    currentStreakDays: currentStreak,
    bestStreakDays: Math.max(bestStreak, current.bestStreakDays),
    lastPracticeDate: today,
    history: newHistory,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Trigger window event so active tabs update immediately
    window.dispatchEvent(new Event('yogasana_progress_updated'));
  } catch {
    // Storage quota exceeded or disabled
  }

  return updated;
};

// Clear history
export const clearUserProgress = (): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('yogasana_progress_updated'));
  } catch {
    // Ignore
  }
};
