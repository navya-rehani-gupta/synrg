import { Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-headshot.jpg";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Text content */}
        <div className="flex-1 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-3">
            <span className="text-primary">sy</span>
            <span className="text-foreground">NRG</span>
            <span className="text-primary">y</span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-muted-foreground mb-6">
            Me <span className="text-primary">+</span> AI Synergy
          </p>

          <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Navya Rehani Gupta</span>
            <span className="text-muted-foreground/40">·</span>
            <span>CPTO at Talent.com</span>
            <span className="text-muted-foreground/40">·</span>
            <a
              href="https://www.linkedin.com/in/navyarehani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <p className="text-lg md:text-xl font-medium text-foreground mb-3 max-w-md leading-relaxed">
            AI is not a shortcut. It's my operating system.
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-2 max-w-md leading-relaxed">
            I don't just use AI. I build with it. It helps me stay clear-headed at high-stakes altitude, not replace thinking.
          </p>

          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-md leading-relaxed">
            That's the real synergy: me plus the machine.
          </p>

          <button
            onClick={() => document.querySelector('#workflows')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            See My Workflows
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 w-36 md:w-48 lg:w-60 animate-fade-in animation-delay-300">
          <div className="relative aspect-square rounded-full overflow-hidden ring-1 ring-border ring-offset-2 ring-offset-background">
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
