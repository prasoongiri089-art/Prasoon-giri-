import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, X, Volume2, VolumeX, RotateCcw, Check, Clock } from 'lucide-react';
import { AsanaPose, SuryaStep } from '../types/yoga';
import { PoseIllustration } from './PoseIllustration';
import { soundManager } from '../utils/audio';
import { recordPracticeSession } from '../utils/progress';

export interface PracticeSessionItem {
  id: string;
  sanskritName: string;
  devanagari?: string;
  englishName: string;
  breath: string;
  durationSec: number;
  svgPoseType: string;
  mantra?: string;
  instruction?: string;
}

interface PracticePlayerProps {
  title: string;
  items: PracticeSessionItem[];
  roundsCount?: number;
  onClose: () => void;
}

export const PracticePlayer: React.FC<PracticePlayerProps> = ({
  title,
  items,
  roundsCount = 1,
  onClose,
}) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(items[0]?.durationSec || 15);
  const [isMuted, setIsMuted] = useState(soundManager.getIsMuted());
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalSecondsElapsed, setTotalSecondsElapsed] = useState(0);
  const recordSavedRef = useRef(false);

  const currentItem = items[currentIndex];
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : (currentRound < roundsCount ? items[0] : null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerCompletion = (elapsedSecs: number) => {
    if (!recordSavedRef.current) {
      recordSavedRef.current = true;
      const sessionType = title.toLowerCase().includes('surya')
        ? 'surya_namaskar'
        : title.toLowerCase().includes('breath')
        ? 'pranayama'
        : 'guided';

      recordPracticeSession({
        routineTitle: title,
        durationSeconds: Math.max(elapsedSecs, 15),
        posesCount: items.length * roundsCount,
        type: sessionType,
      });
    }
    setIsCompleted(true);
    setIsPlaying(false);
    soundManager.playSingingBowl(432, 4.0);
  };

  // Announce current pose with chime and voice
  const announceCurrentPose = (item: PracticeSessionItem) => {
    soundManager.playSingingBowl(320, 2.5);
    if (voiceEnabled) {
      const speech = `${item.breath}. ${item.sanskritName}. ${item.englishName}.`;
      soundManager.speakText(speech);
    }
  };

  // Start announcement on initial mount
  useEffect(() => {
    if (currentItem) {
      setTimeRemaining(currentItem.durationSec);
      announceCurrentPose(currentItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Main practice timer loop
  useEffect(() => {
    if (!isPlaying || isCompleted) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTotalSecondsElapsed((prev) => {
        const nextElapsed = prev + 1;
        return nextElapsed;
      });

      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          // Advance to next step or next round
          if (currentIndex < items.length - 1) {
            const nextIdx = currentIndex + 1;
            setCurrentIndex(nextIdx);
            announceCurrentPose(items[nextIdx]);
            return items[nextIdx].durationSec;
          } else if (currentRound < roundsCount) {
            // Next round
            setCurrentRound((r) => r + 1);
            setCurrentIndex(0);
            announceCurrentPose(items[0]);
            return items[0].durationSec;
          } else {
            // Session finished
            triggerCompletion(totalSecondsElapsed + 1);
            return 0;
          }
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isCompleted, currentIndex, currentRound, items, roundsCount, voiceEnabled, totalSecondsElapsed]);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setTimeRemaining(items[nextIdx].durationSec);
      announceCurrentPose(items[nextIdx]);
    } else if (currentRound < roundsCount) {
      setCurrentRound((r) => r + 1);
      setCurrentIndex(0);
      setTimeRemaining(items[0].durationSec);
      announceCurrentPose(items[0]);
    } else {
      triggerCompletion(totalSecondsElapsed);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      setTimeRemaining(items[prevIdx].durationSec);
      announceCurrentPose(items[prevIdx]);
    } else if (currentRound > 1) {
      setCurrentRound((r) => r - 1);
      const lastIdx = items.length - 1;
      setCurrentIndex(lastIdx);
      setTimeRemaining(items[lastIdx].durationSec);
      announceCurrentPose(items[lastIdx]);
    }
  };

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundManager.setMuted(next);
  };

  const adjustCurrentDuration = (delta: number) => {
    setTimeRemaining((prev) => Math.max(5, prev + delta));
  };

  const progressPercent = currentItem
    ? Math.max(0, Math.min(100, ((currentItem.durationSec - timeRemaining) / currentItem.durationSec) * 100))
    : 0;

  // Format mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Breath rhythm status
  const isBreathInhale = currentItem?.breath.toLowerCase().includes('inhale');
  const isBreathExhale = currentItem?.breath.toLowerCase().includes('exhale');

  return (
    <div className="fixed inset-0 z-50 bg-[#171615] text-stone-100 flex flex-col justify-between overflow-hidden select-none">
      {/* Top Bar */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-stone-800/80 bg-stone-950/40">
        <div>
          <span className="text-xs text-amber-400/90 font-medium tracking-wide uppercase">
            {title}
          </span>
          <div className="flex items-center gap-2 text-stone-400 text-xs mt-0.5">
            {roundsCount > 1 && (
              <>
                <span className="font-semibold text-stone-200">Round {currentRound} of {roundsCount}</span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span>Pose {currentIndex + 1} of {items.length}</span>
            <span aria-hidden="true">·</span>
            <span>Elapsed: {formatTime(totalSecondsElapsed)}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
              voiceEnabled
                ? 'bg-amber-950/60 text-amber-200 border-amber-800/80'
                : 'bg-stone-900 text-stone-400 border-stone-800'
            }`}
            title="Toggle voice narration for poses and breath cues"
          >
            Voice Cues: {voiceEnabled ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={toggleSound}
            className="p-2 text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 rounded-lg transition-colors"
            title={isMuted ? 'Unmute chimes' : 'Mute chimes'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-400" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800/60 rounded-lg transition-colors"
            title="Exit practice"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Completion View */}
      {isCompleted ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center mb-4">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold font-display text-amber-100 mb-2">
            Practice Completed
          </h2>
          <p className="text-stone-300 text-sm mb-6 leading-relaxed">
            Namaste. Take a quiet moment to observe the serene stillness and peaceful vitality cultivated through your breath and posture.
          </p>

          <div className="grid grid-cols-3 gap-4 w-full bg-stone-900/80 p-4 rounded-xl border border-stone-800 mb-8 text-center">
            <div>
              <span className="text-xs text-stone-400 block">Total Time</span>
              <span className="text-lg font-semibold text-stone-100 font-mono tabular-nums">{formatTime(totalSecondsElapsed)}</span>
            </div>
            <div>
              <span className="text-xs text-stone-400 block">Total Poses</span>
              <span className="text-lg font-semibold text-stone-100 font-mono tabular-nums">{items.length * roundsCount}</span>
            </div>
            <div>
              <span className="text-xs text-stone-400 block">Rounds</span>
              <span className="text-lg font-semibold text-stone-100 font-mono tabular-nums">{roundsCount}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                recordSavedRef.current = false;
                setCurrentRound(1);
                setCurrentIndex(0);
                setIsCompleted(false);
                setIsPlaying(true);
                setTimeRemaining(items[0]?.durationSec || 15);
                setTotalSecondsElapsed(0);
                announceCurrentPose(items[0]);
              }}
              className="px-5 py-2.5 text-sm font-medium bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Repeat Practice
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium bg-amber-700 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-xs"
            >
              Finish & Return
            </button>
          </div>
        </div>
      ) : (
        /* Active Practice Visual Stage */
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 max-w-4xl mx-auto w-full relative">
          {/* Breath Guide Badge */}
          <div className="mb-4 text-center">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-700 ${
                isBreathInhale
                  ? 'bg-sky-950/80 text-sky-200 border border-sky-800 scale-105'
                  : isBreathExhale
                  ? 'bg-amber-950/80 text-amber-200 border border-amber-800 scale-95'
                  : 'bg-emerald-950/80 text-emerald-200 border border-emerald-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              <span>{currentItem.breath}</span>
            </div>

            {currentItem.mantra && (
              <p className="text-xs text-amber-300/80 italic mt-2 font-serif">
                {currentItem.mantra}
              </p>
            )}
          </div>

          {/* Central Pose Stage with Breath Pulse Halo */}
          <div className="relative flex items-center justify-center w-full max-w-lg aspect-4/3 my-2">
            {/* Meditative Breathing Aura Pulse */}
            <div
              className={`absolute inset-0 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${
                isBreathInhale
                  ? 'bg-sky-500/15 scale-110'
                  : isBreathExhale
                  ? 'bg-amber-500/15 scale-90'
                  : 'bg-emerald-500/10 scale-100'
              }`}
            />

            {/* SVG Illustration with soft dark theme compensation */}
            <div className="w-full h-full flex items-center justify-center p-4 z-10">
              <PoseIllustration
                type={currentItem.svgPoseType}
                color="#F5F5F4"
                className="w-full h-full max-h-72 drop-shadow-md"
              />
            </div>
          </div>

          {/* Pose Titles */}
          <div className="text-center z-10 mt-2">
            <div className="flex items-baseline justify-center gap-2.5">
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
                {currentItem.sanskritName}
              </h2>
              {currentItem.devanagari && (
                <span className="text-xl font-serif text-amber-400/80">
                  {currentItem.devanagari}
                </span>
              )}
            </div>
            <p className="text-stone-300 text-sm sm:text-base font-medium mt-1">
              {currentItem.englishName}
            </p>
            {currentItem.instruction && (
              <p className="text-xs text-stone-400 max-w-md mx-auto mt-2 leading-relaxed">
                {currentItem.instruction}
              </p>
            )}
          </div>

          {/* Large Countdown Ring */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => adjustCurrentDuration(-5)}
              className="w-8 h-8 rounded-full border border-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-800/80 flex items-center justify-center text-xs"
              title="Minus 5 seconds"
            >
              -5s
            </button>

            <div className="relative flex items-center justify-center w-24 h-24">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  stroke="#292524"
                  strokeWidth="6"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  stroke="#F59E0B"
                  strokeWidth="6"
                  strokeDasharray="276.46"
                  strokeDashoffset={276.46 - (276.46 * progressPercent) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-300 ease-linear"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold font-mono tabular-nums text-white">
                  {timeRemaining}
                </span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider">SEC</span>
              </div>
            </div>

            <button
              onClick={() => adjustCurrentDuration(5)}
              className="w-8 h-8 rounded-full border border-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-800/80 flex items-center justify-center text-xs"
              title="Add 5 seconds"
            >
              +5s
            </button>
          </div>
        </div>
      )}

      {/* Bottom Control & Next Preview Deck */}
      {!isCompleted && (
        <div className="border-t border-stone-800/80 bg-stone-950/60 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Previous Pose Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0 && currentRound === 1}
              className="p-3 text-stone-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-800/60 rounded-xl transition-colors"
              title="Previous pose"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-xl bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95"
              title={isPlaying ? 'Pause' : 'Resume'}
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>

            {/* Next Pose Button */}
            <button
              onClick={handleNext}
              className="p-3 text-stone-400 hover:text-white hover:bg-stone-800/60 rounded-xl transition-colors"
              title="Next pose"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Next Pose Preview Strip */}
          {nextItem && (
            <div className="flex items-center gap-3 bg-stone-900/80 px-4 py-2 rounded-xl border border-stone-800 text-xs">
              <span className="text-stone-400 font-medium">Up Next:</span>
              <span className="font-semibold text-stone-200">{nextItem.sanskritName}</span>
              <span className="text-stone-400">({nextItem.englishName})</span>
              <span className="text-amber-400 font-mono">{nextItem.durationSec}s</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
