import { Brain, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
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

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-3">
            <span className="text-primary inline-block animate-slide-up">sy</span>
            <span className="text-foreground inline-block animate-slide-up animation-delay-100">NRG</span>
            <span className="text-primary inline-block animate-slide-up animation-delay-200">y</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 animate-fade-in animation-delay-300">
            Human <span className="text-primary">+</span> AI Synergy
          </p>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-10 max-w-2xl animate-fade-in animation-delay-500">
            A living record of how I use AI to think clearly, reduce cognitive load, 
            and scale judgment.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
            <div className="h-1 w-1 rounded-full bg-primary/60 animate-pulse animation-delay-200" />
            <div className="h-1 w-1 rounded-full bg-primary/30 animate-pulse animation-delay-400" />
          </div>
          
          <div className="space-y-4 text-lg leading-relaxed max-w-2xl animate-fade-in animation-delay-700">
            <p className="text-foreground">
              AI is not a shortcut in my work. <span className="text-primary font-medium">It is infrastructure.</span>
            </p>
            <p className="text-muted-foreground">
              Its role is to help me operate at the right altitude, move faster with clarity, 
              and create space for better decisions.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl hidden md:block animate-fade-in animation-delay-500">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
            <img 
              src={heroImage} 
              alt="Leadership insights" 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
