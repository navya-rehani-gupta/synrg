import { Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-headshot.jpg";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-4">
            <span className="text-primary">sy</span>
            <span className="text-foreground">NRG</span>
            <span className="text-primary">y</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-3">
            Me <span className="text-primary">+</span> AI Synergy
          </p>

          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <p className="text-base text-foreground font-medium">
              By Navya Rehani Gupta (NRG)
            </p>
            <span className="text-muted-foreground/50">·</span>
            <span className="text-sm text-muted-foreground">CPTO at Talent.com | Global CPO Award Winner</span>
            <span className="text-muted-foreground/50">·</span>
            <a
              href="https://www.linkedin.com/in/navyarehani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 max-w-lg leading-snug">
            AI is not a shortcut. It's my operating system.
          </p>

          <p className="text-base text-muted-foreground mb-3 max-w-lg leading-relaxed">
            I don't just use AI. I build with it. It helps me stay clear-headed at high-stakes altitude, not replace thinking.
          </p>

          <p className="text-base text-muted-foreground mb-10 max-w-lg leading-relaxed">
            That's the real synergy: me plus the machine.
          </p>

          <button
            onClick={() => document.querySelector('#workflows')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            See My Workflows
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 w-40 md:w-56 lg:w-72 animate-fade-in animation-delay-300">
          <div className="relative aspect-square rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
            <img 
              src={heroImage} 
              alt="Navya Rehani Gupta" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
