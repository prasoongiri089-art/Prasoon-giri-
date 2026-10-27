# User Progress Dashboard Architecture & Implementation Plan

> [!NOTE]
> **Status: Completed & Verified**. The User Progress Dashboard and Local Storage state persistence have been fully implemented, integrated with the practice player, and verified with zero compilation or lint errors.

Implement a dedicated **User Progress Dashboard** in Yogasana to track cumulative practice minutes, number of completed sessions, daily consistency streaks, and recent sadhana history with zero backend dependencies using browser `localStorage`.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> To provide an empowering and mindful experience without overwhelming the interface, the dashboard will integrate as a primary section in Yogasana while automatically capturing sessions completed through the interactive practice player.

- **Dashboard Placement**: Dedicated **"My Progress"** tab in the main navigation bar and mobile ribbon, alongside a summary widget on practice completion.
- **Tracked Metrics**:
  - Total minutes practiced (accumulated accurately across all flows, Surya Namaskar rounds, and breathwork).
  - Total completed practice sessions.
  - Current daily practice streak & best streak.
  - Recent session log with date, flow name, duration, and poses practiced.
  - Manual quick-log button for offline or personal mat sessions.
- **Persistence Strategy**: Type-safe local storage wrapper (`yogasana_user_progress`) with automatic migration and JSON schema validation.

---

## 1. Overview & Core Concept

- **What It Does**: Visualizes the user's ongoing yoga journey, rewarding consistency and self-discipline without gamified clutter or artificial badges.
- **Target Audience**: Yoga practitioners seeking a quiet, personal reflection of their daily practice frequency, total time spent on the mat, and flow history.
- **Key Value**: Provides effortless, automatic logging when using the interactive timers, while maintaining 100% data privacy and instant offline persistence.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Automatic Session Recording**: When a practitioner finishes any guided session (Surya Namaskar, curated routine, custom flow, or pranayama), the completion screen automatically records session stats (duration in minutes/seconds, title, date, poses count) into local storage.
2. **Dashboard Review**: Navigating to "My Progress" displays:
   - 4-card KPI metric strip: **Total Practice Time**, **Sessions Completed**, **Current Day Streak**, and **Total Asanas Mastered**.
   - **Recent Sadhana History**: Clean chronological list with timestamps, routine names, duration, and tags.
   - **Manual Session Logger**: Quick 1-click modal to log unguided self-practice (e.g. 15, 30, 45, or 60 min).
   - **Data Management**: Quiet reset / clear data option with confirmation.
3. **Completion Celebration Integration**: The existing completion screen inside `PracticePlayer.tsx` will display an updated tally showing the newly added minutes and session total.

### Visual Identity & Theme
- **Aesthetic Direction**: Meditative, serene, travertine stone canvas (`#FAF9F6`) with warm amber, terracotta, and subdued slate text.
- **Anti-Slop Compliance**:
  - No candy pill enclosures on metadata; metrics use clean unboxed text with subtle typographic dividers (`·`).
  - No decorative pulsing green dots or mechanical prefixes.
  - Tabular numerals (`font-mono tabular-nums`) for clean vertical alignment of time and counts.
- **Typography**: Display headings in `Outfit`, body in `Plus Jakarta Sans`, and subtle yogic mantras in `Source Serif 4`.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Local Storage vs. Cloud Auth/Database**
  - *Chosen Approach*: Browser `localStorage` with a robust TypeScript state manager.
  - *Why*: Instant zero-latency loading, complete privacy for the user's personal mindfulness data, zero login barriers, and full offline resilience.
- **Decision 2: Dual Logging (Automatic + Manual Entry)**
  - *Chosen Approach*: Auto-log upon player completion + a clean "Log Self-Practice" modal.
  - *Why*: Many yogis practice without a screen or do breathwork away from the computer; allowing manual logging ensures the streak and minute counts remain accurate.

---

## 4. Technical Architecture & Data Strategy

### System & Component Architecture

```
┌────────────────────────────────────────────────────────┐
│                   Yogasana Main App                    │
│                     (src/App.tsx)                      │
└───────────────────────────┬────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            ▼                               ▼
┌────────────────────────┐      ┌────────────────────────┐
│   Top Navigation Bar   │      │ Guided Practice Player │
│  (src/Navbar.tsx)      │      │ (PracticePlayer.tsx)   │
│  * "My Progress" tab   │      │ * Auto-logs on finish  │
└───────────┬────────────┘      └───────────┬────────────┘
            │                               │
            ▼                               ▼
┌────────────────────────────────────────────────────────┐
│             Progress Storage Utility Hook              │
│               (src/utils/progress.ts)                  │
│   - Reads & writes to localStorage                     │
│   - Calculates streaks, total minutes, sessions        │
│   - Emits storage events for cross-component sync      │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│               User Progress Dashboard                  │
│       (src/components/UserProgressSection.tsx)         │
│   - KPI metric grid (Minutes, Sessions, Streaks)       │
│   - Weekly activity timeline                           │
│   - Chronological session history list                 │
│   - Manual entry dialog & data reset                   │
└────────────────────────────────────────────────────────┘
```

### Data Model Schema

```typescript
export interface PracticeSessionRecord {
  id: string;
  timestamp: number; // Unix ms
  dateString: string; // ISO YYYY-MM-DD
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
```

### Component & State Transition Mapping
- **`src/utils/progress.ts`**: Pure helper functions:
  - `loadUserProgress(): UserProgressData`
  - `recordPracticeSession(record: Omit<PracticeSessionRecord, 'id' | 'timestamp'>): UserProgressData`
  - `clearProgressData(): void`
  - `calculateStreak(history: PracticeSessionRecord[]): { current: number; best: number }`
- **`src/components/UserProgressSection.tsx`**: High-performance dashboard component displaying stats, history, and manual logger.
- **`src/components/PracticePlayer.tsx`**: Injects `recordPracticeSession` on session completion so every practice minute is counted.
- **`src/components/Navbar.tsx` & `src/App.tsx`**: Exposes the `progress` view as an active navigation tab.
