import React from 'react';

interface PoseIllustrationProps {
  type: string;
  className?: string;
  color?: string;
}

export const PoseIllustration: React.FC<PoseIllustrationProps> = ({
  type,
  className = 'w-full h-full max-h-72',
  color = '#292524',
}) => {
  const renderPose = () => {
    switch (type) {
      case 'pranamasana':
      case 'tadasana':
        return (
          <g transform="translate(100, 20)">
            <circle cx="100" cy="40" r="14" fill={color} />
            <path d="M 100 54 L 100 135" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <path d="M 86 70 L 68 100 L 98 94" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 114 70 L 132 100 L 102 94" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <polygon points="98,90 102,90 100,82" fill="#D97706" />
            <path d="M 94 135 L 94 220 L 90 220" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <path d="M 106 135 L 106 220 L 110 220" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <circle cx="100" cy="94" r="4" fill="#059669" />
          </g>
        );

      case 'hastauttanasana':
        return (
          <g transform="translate(90, 20)">
            <path d="M 95 135 Q 115 90 100 55" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <circle cx="95" cy="42" r="14" fill={color} />
            <path d="M 102 65 Q 115 35 125 15" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" />
            <path d="M 96 65 Q 105 35 115 15" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" />
            <path d="M 92 135 L 92 220" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <path d="M 102 135 L 102 220" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <circle cx="98" cy="50" r="4" fill="#0284C7" />
          </g>
        );

      case 'uttanasana':
      case 'hastapadasana':
        return (
          <g transform="translate(100, 20)">
            <path d="M 130 130 L 130 220" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <path d="M 130 130 L 105 130 Q 90 150 90 190" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <circle cx="90" cy="205" r="13" fill={color} />
            <path d="M 95 160 L 115 220" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <path d="M 90 160 L 125 220" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <circle cx="125" cy="130" r="4" fill="#EA580C" />
          </g>
        );

      case 'ashwasanchalanasana':
      case 'lunge':
        return (
          <g transform="translate(60, 30)">
            <path d="M 190 215 L 190 160 L 135 160" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 135 160 Q 80 180 30 215" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <path d="M 135 160 Q 145 120 155 85" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <circle cx="162" cy="72" r="14" fill={color} />
            <path d="M 148 105 L 180 215" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <circle cx="166" cy="72" r="4" fill="#4F46E5" />
          </g>
        );

      case 'dandasana_plank':
      case 'plank':
        return (
          <g transform="translate(60, 40)">
            <path d="M 50 205 L 185 110" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <circle cx="198" cy="102" r="14" fill={color} />
            <path d="M 175 115 L 175 215" stroke={color} strokeWidth="9" strokeLinecap="round" />
            <path d="M 165 122 L 165 215" stroke={color} strokeWidth="9" strokeLinecap="round" />
            <circle cx="120" cy="155" r="4" fill="#EAB308" />
          </g>
        );

      case 'ashtanganamaskara':
        return (
          <g transform="translate(60, 50)">
            <circle cx="40" cy="205" r="5" fill={color} />
            <path d="M 40 205 L 85 195 L 90 205" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <path d="M 90 205 Q 120 160 145 195" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <circle cx="215" cy="198" r="13" fill={color} />
            <path d="M 145 195 L 205 200" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <path d="M 180 185 L 175 208" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <circle cx="118" cy="172" r="4" fill="#EAB308" />
          </g>
        );

      case 'bhujangasana':
        return (
          <g transform="translate(60, 45)">
            <path d="M 30 205 L 125 205" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <path d="M 125 205 Q 155 180 165 115" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <circle cx="170" cy="100" r="14" fill={color} />
            <path d="M 155 130 L 140 205" stroke={color} strokeWidth="9" strokeLinecap="round" />
            <circle cx="130" cy="200" r="4" fill="#EA580C" />
          </g>
        );

      case 'parvatasana':
      case 'adhomukhasvanasana':
      case 'downwarddog':
        return (
          <g transform="translate(65, 30)">
            <path d="M 50 215 L 125 90" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <path d="M 125 90 L 195 215" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <circle cx="165" cy="165" r="13" fill={color} />
            <circle cx="125" cy="90" r="5" fill="#0284C7" />
          </g>
        );

      case 'vrikshasana':
        return (
          <g transform="translate(100, 20)">
            <circle cx="100" cy="35" r="14" fill={color} />
            <path d="M 100 50 L 100 135" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <path d="M 94 65 Q 80 40 98 12" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <path d="M 106 65 Q 120 40 102 12" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <path d="M 98 135 L 98 220" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <path d="M 102 135 L 140 170 L 102 170" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="100" cy="95" r="4" fill="#059669" />
          </g>
        );

      case 'virabhadrasana':
      case 'virabhadrasana2':
        return (
          <g transform="translate(60, 30)">
            <path d="M 175 215 L 175 155 L 115 155" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 115 155 L 45 215" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <path d="M 115 155 L 115 80" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <circle cx="115" cy="65" r="14" fill={color} />
            <path d="M 45 95 L 195 95" stroke={color} strokeWidth="9" strokeLinecap="round" />
            <circle cx="185" cy="95" r="3" fill="#DC2626" />
          </g>
        );

      case 'trikonasana':
        return (
          <g transform="translate(60, 25)">
            <path d="M 50 215 L 115 125 L 180 215" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 115 125 L 165 145" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <circle cx="178" cy="148" r="13" fill={color} />
            <path d="M 165 215 L 140 45" stroke={color} strokeWidth="9" strokeLinecap="round" />
            <circle cx="140" cy="45" r="4" fill="#D97706" />
          </g>
        );

      case 'padmasana':
      case 'sukhasana':
      case 'seated':
        return (
          <g transform="translate(85, 45)">
            <circle cx="115" cy="45" r="14" fill={color} />
            <path d="M 115 60 L 115 145" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <path d="M 70 185 Q 115 195 160 185" fill="none" stroke={color} strokeWidth="13" strokeLinecap="round" />
            <path d="M 80 160 Q 115 170 150 160" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <path d="M 103 80 L 68 150 L 75 165" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 127 80 L 162 150 L 155 165" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="115" cy="98" r="4" fill="#059669" />
          </g>
        );

      case 'balasana':
      case 'childspose':
        return (
          <g transform="translate(60, 50)">
            <path d="M 45 205 Q 65 175 85 190 L 70 205" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <path d="M 80 185 Q 120 180 155 195" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <circle cx="165" cy="202" r="13" fill={color} />
            <path d="M 140 190 L 210 205" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <circle cx="165" cy="202" r="3" fill="#0284C7" />
          </g>
        );

      case 'savasana':
      case 'corpse':
        return (
          <g transform="translate(50, 80)">
            <path d="M 40 160 L 210 160" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <circle cx="225" cy="157" r="13" fill={color} />
            <path d="M 175 160 L 120 175" stroke={color} strokeWidth="7" strokeLinecap="round" />
            <circle cx="130" cy="160" r="4" fill="#059669" />
          </g>
        );

      case 'dhanurasana':
      case 'ustrasana':
      case 'camel':
        return (
          <g transform="translate(70, 30)">
            <path d="M 75 215 L 75 160" stroke={color} strokeWidth="11" strokeLinecap="round" />
            <path d="M 75 160 Q 115 130 95 85" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <circle cx="85" cy="72" r="14" fill={color} />
            <path d="M 98 100 L 75 200" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <circle cx="110" cy="115" r="5" fill="#059669" />
          </g>
        );

      case 'sirsasana':
      case 'inversion':
        return (
          <g transform="translate(100, 20)">
            <circle cx="100" cy="205" r="14" fill={color} />
            <path d="M 80 215 L 100 210 L 120 215" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <path d="M 100 190 L 100 100" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <path d="M 97 100 L 97 30" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <path d="M 103 100 L 103 30" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <circle cx="100" cy="214" r="4" fill="#7C3AED" />
          </g>
        );

      case 'bakasana':
      case 'armbalance':
        return (
          <g transform="translate(70, 35)">
            <path d="M 130 215 L 140 145" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <path d="M 140 145 Q 110 130 85 140" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <circle cx="160" cy="135" r="13" fill={color} />
            <path d="M 85 140 Q 120 120 135 150 L 95 165" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <circle cx="120" cy="135" r="4" fill="#EAB308" />
          </g>
        );

      default:
        return (
          <g transform="translate(85, 30)">
            <circle cx="115" cy="50" r="15" fill={color} />
            <path d="M 115 65 L 115 145" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <path d="M 75 190 Q 115 200 155 190" fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" />
            <path d="M 105 85 L 75 155" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <path d="M 125 85 L 155 155" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <circle cx="115" cy="100" r="4" fill="#059669" />
          </g>
        );
    }
  };

  return (
    <svg
      viewBox="0 0 400 280"
      className={`${className} select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Illustration of ${type}`}
    >
      <defs>
        <radialGradient id="auraGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="140" r="105" fill="url(#auraGlow)" />
      <line x1="45" y1="245" x2="355" y2="245" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
      <line x1="70" y1="250" x2="330" y2="250" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.4" />
      {renderPose()}
    </svg>
  );
};
