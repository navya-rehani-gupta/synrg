const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background gradient circles */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Large ambient circles */}
        <circle cx="200" cy="200" r="150" fill="url(#gradient1)" className="animate-pulse-slow" />
        <circle cx="200" cy="200" r="100" fill="url(#gradient2)" className="animate-pulse-slow animation-delay-1000" />

        {/* Connection lines */}
        <g className="opacity-60">
          {/* Human to center */}
          <line x1="80" y1="200" x2="160" y2="200" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
          {/* AI to center */}
          <line x1="240" y1="200" x2="320" y2="200" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash animation-delay-500" />
          {/* Top connections */}
          <line x1="200" y1="80" x2="200" y2="160" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash animation-delay-1000" />
          {/* Bottom connections */}
          <line x1="200" y1="240" x2="200" y2="320" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash animation-delay-1500" />
          {/* Diagonal connections */}
          <line x1="120" y1="120" x2="170" y2="170" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash" />
          <line x1="280" y1="120" x2="230" y2="170" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash animation-delay-500" />
          <line x1="120" y1="280" x2="170" y2="230" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash animation-delay-1000" />
          <line x1="280" y1="280" x2="230" y2="230" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash animation-delay-1500" />
        </g>

        {/* Human node (left) */}
        <g className="animate-float">
          <circle cx="80" cy="200" r="24" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
          <circle cx="80" cy="190" r="6" fill="hsl(var(--primary))" />
          <path d="M 68 210 Q 80 220 92 210" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* AI node (right) */}
        <g className="animate-float animation-delay-500">
          <circle cx="320" cy="200" r="24" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" />
          <rect x="308" y="188" width="24" height="24" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
          <circle cx="316" cy="196" r="2" fill="hsl(var(--primary))" />
          <circle cx="324" cy="196" r="2" fill="hsl(var(--primary))" />
          <line x1="312" y1="204" x2="328" y2="204" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Central synergy node */}
        <g className="animate-pulse-slow">
          <circle cx="200" cy="200" r="36" fill="hsl(var(--primary))" fillOpacity="0.15" />
          <circle cx="200" cy="200" r="24" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="3" />
          <text x="200" y="206" textAnchor="middle" fill="hsl(var(--primary))" fontSize="16" fontWeight="bold">+</text>
        </g>

        {/* Floating idea nodes */}
        <g className="animate-float animation-delay-1000">
          <circle cx="200" cy="80" r="16" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
          <circle cx="200" cy="80" r="4" fill="hsl(var(--primary))" fillOpacity="0.6" />
        </g>
        
        <g className="animate-float animation-delay-1500">
          <circle cx="200" cy="320" r="16" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
          <circle cx="200" cy="320" r="4" fill="hsl(var(--primary))" fillOpacity="0.6" />
        </g>

        <g className="animate-float">
          <circle cx="120" cy="120" r="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <circle cx="120" cy="120" r="3" fill="hsl(var(--primary))" fillOpacity="0.5" />
        </g>

        <g className="animate-float animation-delay-500">
          <circle cx="280" cy="120" r="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <circle cx="280" cy="120" r="3" fill="hsl(var(--primary))" fillOpacity="0.5" />
        </g>

        <g className="animate-float animation-delay-1000">
          <circle cx="120" cy="280" r="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <circle cx="120" cy="280" r="3" fill="hsl(var(--primary))" fillOpacity="0.5" />
        </g>

        <g className="animate-float animation-delay-1500">
          <circle cx="280" cy="280" r="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <circle cx="280" cy="280" r="3" fill="hsl(var(--primary))" fillOpacity="0.5" />
        </g>

        {/* Sparkle effects */}
        <g className="animate-twinkle">
          <circle cx="150" cy="150" r="2" fill="hsl(var(--primary))" />
        </g>
        <g className="animate-twinkle animation-delay-500">
          <circle cx="250" cy="150" r="2" fill="hsl(var(--primary))" />
        </g>
        <g className="animate-twinkle animation-delay-1000">
          <circle cx="150" cy="250" r="2" fill="hsl(var(--primary))" />
        </g>
        <g className="animate-twinkle animation-delay-1500">
          <circle cx="250" cy="250" r="2" fill="hsl(var(--primary))" />
        </g>
      </svg>
    </div>
  );
};

export default HeroIllustration;
