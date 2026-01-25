import { Brain, Sparkles, Zap, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-headshot.jpg";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 relative animate-fade-in">
          {/* Small accent line */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Operating System
            </span>
          </div>

          {/* Icon cluster */}
          <div className="flex items-center gap-3 mb-6 opacity-80">
            <div className="p-2 rounded-lg bg-primary/10 animate-float">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <div className="p-2 rounded-lg bg-primary/10 animate-float animation-delay-500">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="p-2 rounded-lg bg-primary/10 animate-float animation-delay-1000">
              <Zap className="w-5 h-5 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-3">
            <span className="text-primary inline-block animate-slide-up">sy</span>
            <span className="text-foreground inline-block animate-slide-up animation-delay-100">NRG</span>
            <span className="text-primary inline-block animate-slide-up animation-delay-200">y</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-2 animate-fade-in animation-delay-300">
            Me <span className="text-primary">+</span> AI Synergy
          </p>
          <div className="flex items-center gap-2 mb-8 animate-fade-in animation-delay-400">
            <p className="text-sm text-muted-foreground">
              By Navya Rehani Gupta (NRG)
            </p>
            <a 
              href="https://www.linkedin.com/in/navyarehani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-10 max-w-2xl animate-fade-in animation-delay-500">
            How I operate as a hands-on CPTO — building tools, automating research,
            and shipping faster than traditional product orgs.
          </p>

          <div className="space-y-4 text-lg leading-relaxed max-w-2xl animate-fade-in animation-delay-700">
            <p className="text-foreground">
              AI is not a shortcut. <span className="text-primary font-medium">It is my operating system.</span>
            </p>
            <p className="text-muted-foreground">
              It helps me operate at the right altitude, move faster with clarity,
              and create space for better decisions.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4 mt-10 animate-fade-in animation-delay-1000">
            <button
              onClick={() => document.querySelector('#how-i-use-ai')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Explore My Workflows
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 w-48 md:w-64 lg:w-80 xl:w-96 animate-fade-in animation-delay-500">
          <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl shadow-primary/20 group ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
            <img 
              src={heroImage} 
              alt="Navya Rehani Gupta - Product Leader and AI Strategist" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
