import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const builds = [
  {
    name: "Country Market Prioritization",
    description: "Interactive analysis tool for international expansion decisions",
  },
  {
    name: "Agentic AI Enterprise Assessment",
    description: "Strategic framework for evaluating AI transformation opportunities",
  },
  {
    name: "Competitive Intelligence Dashboards",
    description: "Real-time market and competitor analysis tools",
  },
  {
    name: "This Page",
    description: "Auto-updating record of AI workflows and tools",
  },
];

const WhatIveBuilt = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={headerVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What I've Built (Jan 2026)</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Real tools shipped this month — each built in hours, not weeks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        {builds.map((build, index) => {
          const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
          return (
            <div
              key={index}
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`bg-card border border-border rounded-lg p-5 group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{build.name}</span>
                <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{build.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatIveBuilt;
