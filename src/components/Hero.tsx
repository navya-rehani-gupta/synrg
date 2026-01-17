const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
          NRG Operating System
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-8">
          A living record of how I use AI to think clearly, reduce cognitive load, 
          and scale judgment — individually and with my team.
        </p>
        <div className="h-px bg-border w-24" />
        <p className="mt-8 text-foreground leading-relaxed max-w-2xl">
          AI is not a shortcut in my work. It is infrastructure.
          Its role is to help me operate at the right altitude, move faster with clarity, 
          and create space for better decisions.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
          This page captures the patterns, use cases, and principles that make up 
          my personal and team-level AI operating system.
        </p>
      </div>
    </section>
  );
};

export default Hero;
