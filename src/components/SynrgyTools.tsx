import { Terminal, Mic, Heart, Triangle, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { LucideIcon } from "lucide-react";

const tools: Array<{
  name: string;
  example: string;
  purpose: string;
  setup: string;
  savedPerWeek: string;
  icon: LucideIcon;
}> = [
  { name: "AI Coding", example: "Claude Code", purpose: "Build, edit, and ship from natural language", setup: "1 hr", savedPerWeek: "8 hrs", icon: Terminal },
  { name: "Meeting Intelligence", example: "Granola", purpose: "Auto-capture and extract action items", setup: "15 min", savedPerWeek: "3 hrs", icon: Mic },
  { name: "Rapid Prototyping", example: "Lovable", purpose: "Turn prompts into deployed web apps", setup: "30 min", savedPerWeek: "2 hrs", icon: Heart },
  { name: "Instant Deploy", example: "Vercel", purpose: "Ship to production from terminal", setup: "10 min", savedPerWeek: "1 hr", icon: Triangle },
  { name: "Workflow Automation", example: "Zapier", purpose: "Connect tools and eliminate manual steps", setup: "1 hr", savedPerWeek: "2 hrs", icon: Zap },
];

const SynrgyTools = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={headerVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 id="tools-heading" className="text-2xl md:text-3xl font-bold mb-4">Active Tools (2026)</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          The stack that lets me build and ship without waiting on anyone. Total weekly savings: 16+ hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        {tools.map((tool, index) => {
          const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
          return (
            <div
              key={index}
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`bg-card border border-border rounded-lg p-5 group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">{tool.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">e.g. {tool.example}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{tool.purpose}</p>
              <div className="flex gap-4 mt-3 text-xs">
                <span className="text-muted-foreground">Setup: <span className="text-foreground font-medium">{tool.setup}</span></span>
                <span className="text-muted-foreground">Saves: <span className="text-primary font-medium">{tool.savedPerWeek}/wk</span></span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SynrgyTools;
