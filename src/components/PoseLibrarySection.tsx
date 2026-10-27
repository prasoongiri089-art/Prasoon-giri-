import React, { useState, useMemo } from 'react';
import { Search, Filter, Play, BookOpen, Sparkles } from 'lucide-react';
import { ALL_ASANAS, CATEGORIES } from '../data/asanas';
import { AsanaPose, Difficulty } from '../types/yoga';
import { PoseIllustration } from './PoseIllustration';

interface PoseLibrarySectionProps {
  onOpenPoseModal: (pose: AsanaPose) => void;
  onStartSinglePractice: (pose: AsanaPose) => void;
}

export const PoseLibrarySection: React.FC<PoseLibrarySectionProps> = ({
  onOpenPoseModal,
  onStartSinglePractice,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredPoses = useMemo(() => {
    return ALL_ASANAS.filter((pose) => {
      // Category match
      if (selectedCategory !== 'all' && pose.category !== selectedCategory) {
        return false;
      }
      // Difficulty match
      if (selectedDifficulty !== 'all' && pose.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName =
          pose.sanskritName.toLowerCase().includes(query) ||
          pose.englishName.toLowerCase().includes(query) ||
          pose.devanagari.includes(query);
        const matchesMuscles = pose.targetMuscles.some((m) => m.toLowerCase().includes(query));
        const matchesChakra = pose.primaryChakra.toLowerCase().includes(query);
        const matchesBenefits = pose.benefits.some((b) => b.toLowerCase().includes(query));
        return matchesName || matchesMuscles || matchesChakra || matchesBenefits;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-amber-800 font-medium tracking-wide uppercase mb-1">
          <span>Yogic Encyclopedia</span>
          <span aria-hidden="true">·</span>
          <span>Authentic Asanas</span>
        </div>
        <h2 className="text-3xl font-bold font-display text-stone-900 tracking-tight">
          Comprehensive Asana Library
        </h2>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
          Explore standing postures, seated meditation seats, deep backbends, restorative asanas, and inversions. Each posture contains step-by-step guidance, alignments, and anatomical modifications.
        </p>
      </div>

      {/* Controls & Search Toolbar */}
      <div className="space-y-4 bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs">
        {/* Search input & difficulty row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by pose name (e.g. Tadasana, Warrior), muscle, or chakra..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Difficulty Segmented Filter */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl shrink-0 text-xs">
            {['all', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer capitalize font-medium ${
                  selectedDifficulty === diff
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {diff === 'all' ? 'All Levels' : diff}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer font-medium ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-amber-100 shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Results Count Metadata */}
        <div className="text-xs text-stone-500 pt-1 flex items-center justify-between">
          <span>
            Showing <strong className="text-stone-800">{filteredPoses.length}</strong> {filteredPoses.length === 1 ? 'asana' : 'asanas'}
          </span>
          {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="text-amber-800 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Asana Grid */}
      {filteredPoses.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-stone-200">
          <p className="text-stone-600 text-sm">No postures match your search criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedDifficulty('all');
            }}
            className="mt-3 px-4 py-2 text-xs font-medium text-stone-800 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoses.map((pose) => (
            <div
              key={pose.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => onOpenPoseModal(pose)}
            >
              {/* Card Visual Stage */}
              <div className="p-6 bg-[#FAF8F5] border-b border-stone-100 flex items-center justify-center relative">
                <PoseIllustration
                  type={pose.svgPoseType}
                  className="w-full h-44 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Duration hint */}
                <span className="absolute bottom-3 right-3 text-[11px] font-mono tabular-nums text-stone-500 bg-white/80 px-2 py-0.5 rounded-md border border-stone-200/50">
                  {pose.defaultDurationSec}s
                </span>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                    <span>{pose.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className={
                      pose.difficulty === 'Beginner' ? 'text-emerald-700' :
                      pose.difficulty === 'Intermediate' ? 'text-amber-800' : 'text-purple-700'
                    }>{pose.difficulty}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pose.breathing}</span>
                  </div>

                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold font-display text-stone-900 group-hover:text-amber-800 transition-colors">
                      {pose.sanskritName}
                    </h3>
                    <span className="text-base font-serif text-amber-800/80">
                      {pose.devanagari}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-stone-600 mt-0.5">
                    {pose.englishName}
                  </p>

                  <p className="text-xs text-stone-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {pose.summary}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-stone-500 truncate max-w-[150px]">
                    {pose.targetMuscles.slice(0, 2).join(', ')}
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => onOpenPoseModal(pose)}
                      className="px-2.5 py-1.5 text-xs text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onStartSinglePractice(pose)}
                      className="px-3 py-1.5 text-xs font-medium text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Practice</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
