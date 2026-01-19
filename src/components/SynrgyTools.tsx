import { Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = [
  { name: "Claude Code", purpose: "Local editing, automation, push to GitHub" },
  { name: "Granola", purpose: "AI meeting notes and summaries" },
  { name: "Lovable", purpose: "Build and deploy web apps from prompts" },
  { name: "Vercel", purpose: "Instant web deploy from terminal" },
  { name: "Zapier", purpose: "Connect everything automatically" },
];

const SynrgyTools = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={headerVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Active Tools (Jan 2026)</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Experimenting with tool chains that reduce friction between thinking and shipping. Always testing new combinations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        {tools.map((tool, index) => {
          const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
          return (
            <div
              key={index}
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`bg-accent/50 rounded-lg p-5 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{tool.name}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{tool.purpose}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SynrgyTools;
