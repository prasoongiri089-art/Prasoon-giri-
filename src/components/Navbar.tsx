import React from 'react';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  activeTab: 'surya' | 'poses' | 'routines' | 'pranayama' | 'builder' | 'progress';
  onSelectTab: (tab: 'surya' | 'poses' | 'routines' | 'pranayama' | 'builder' | 'progress') => void;
  onStartQuickPractice: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onStartQuickPractice,
}) => {
  const [isMuted, setIsMuted] = React.useState(soundManager.getIsMuted());

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundManager.setMuted(next);
    if (!next) {
      soundManager.playBellChime();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => onSelectTab('surya')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <span className="w-8 h-8 rounded-full bg-stone-900 text-amber-100 flex items-center justify-center font-serif text-lg font-medium shadow-xs">
            ॐ
          </span>
          <span className="text-xl font-bold tracking-tight text-stone-900 font-display whitespace-nowrap shrink-0">
            Yogasana
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single line, 4-5 concise items) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onSelectTab('surya')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'surya'
                ? 'text-stone-900 font-semibold border-b-2 border-amber-700'
                : 'hover:text-stone-900'
            }`}
          >
            Surya Namaskar
          </button>
          <button
            onClick={() => onSelectTab('poses')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'poses'
                ? 'text-stone-900 font-semibold border-b-2 border-amber-700'
                : 'hover:text-stone-900'
            }`}
          >
            All Asanas
          </button>
          <button
            onClick={() => onSelectTab('routines')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'routines'
                ? 'text-stone-900 font-semibold border-b-2 border-amber-700'
                : 'hover:text-stone-900'
            }`}
          >
            Curated Flows
          </button>
          <button
            onClick={() => onSelectTab('pranayama')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'pranayama'
                ? 'text-stone-900 font-semibold border-b-2 border-amber-700'
                : 'hover:text-stone-900'
            }`}
          >
            Pranayama
          </button>
          <button
            onClick={() => onSelectTab('builder')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'builder'
                ? 'text-stone-900 font-semibold border-b-2 border-amber-700'
                : 'hover:text-stone-900'
            }`}
          >
            Flow Builder
          </button>
          <button
            onClick={() => onSelectTab('progress')}
            className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'progress'
                ? 'text-stone-900 font-semibold border-b-2 border-amber-700'
                : 'hover:text-stone-900'
            }`}
          >
            My Progress
          </button>
        </nav>

        {/* Zone 3: Primary Action & Sound control */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute meditation chimes' : 'Mute meditation chimes'}
            title={isMuted ? 'Sound muted' : 'Meditation bell sound active'}
            className="p-2 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors focus:outline-none"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
          </button>

          <button
            onClick={onStartQuickPractice}
            className="px-4 py-2 text-xs md:text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 shadow-xs flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Begin Practice</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-200/60 px-2 py-2 overflow-x-auto text-xs">
        <button
          onClick={() => onSelectTab('surya')}
          className={`px-2 py-1 rounded-sm whitespace-nowrap ${
            activeTab === 'surya' ? 'text-amber-800 font-semibold' : 'text-stone-600'
          }`}
        >
          Surya
        </button>
        <button
          onClick={() => onSelectTab('poses')}
          className={`px-2 py-1 rounded-sm whitespace-nowrap ${
            activeTab === 'poses' ? 'text-amber-800 font-semibold' : 'text-stone-600'
          }`}
        >
          Poses
        </button>
        <button
          onClick={() => onSelectTab('routines')}
          className={`px-2 py-1 rounded-sm whitespace-nowrap ${
            activeTab === 'routines' ? 'text-amber-800 font-semibold' : 'text-stone-600'
          }`}
        >
          Flows
        </button>
        <button
          onClick={() => onSelectTab('pranayama')}
          className={`px-2 py-1 rounded-sm whitespace-nowrap ${
            activeTab === 'pranayama' ? 'text-amber-800 font-semibold' : 'text-stone-600'
          }`}
        >
          Breath
        </button>
        <button
          onClick={() => onSelectTab('builder')}
          className={`px-2 py-1 rounded-sm whitespace-nowrap ${
            activeTab === 'builder' ? 'text-amber-800 font-semibold' : 'text-stone-600'
          }`}
        >
          Builder
        </button>
        <button
          onClick={() => onSelectTab('progress')}
          className={`px-2 py-1 rounded-sm whitespace-nowrap ${
            activeTab === 'progress' ? 'text-amber-800 font-semibold' : 'text-stone-600'
          }`}
        >
          Progress
        </button>
      </div>
    </header>
  );
};
