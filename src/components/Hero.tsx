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

      <div className="max-w-3xl relative">
        {/* Small accent line */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Operating System
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
          Human <span className="text-primary">+</span> AI Synergy
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-10 max-w-2xl">
          A living record of how I use AI to think clearly, reduce cognitive load, 
          and scale judgment.
        </p>

        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-1 rounded-full bg-primary" />
          <div className="h-1 w-1 rounded-full bg-primary/60" />
          <div className="h-1 w-1 rounded-full bg-primary/30" />
        </div>
        
        <div className="space-y-4 text-lg leading-relaxed max-w-2xl">
          <p className="text-foreground">
            AI is not a shortcut in my work. <span className="text-primary font-medium">It is infrastructure.</span>
          </p>
          <p className="text-muted-foreground">
            Its role is to help me operate at the right altitude, move faster with clarity, 
            and create space for better decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
