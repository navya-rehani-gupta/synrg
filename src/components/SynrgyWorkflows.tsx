import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const workflows = [
  {
    name: "Meeting → Insights",
    flow: "Granola → Zapier → Claude Code → Obsidian",
  },
  {
    name: "Strategy → Deck",
    flow: "Markdown → Claude Code → Slidev → Google Slides",
  },
  {
    name: "Code → Deploy",
    flow: "Claude Code → GitHub → Lovable",
  },
];

const SynrgyWorkflows = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={headerVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Active Workflows (Jan 2026)</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          These are live experiments in AI-native product development. Some will stick, some won't. If you're a CPO/CPTO building similar infrastructure, I'd love to compare notes on what's working.
        </p>
      </div>

      <div className="space-y-4 max-w-2xl">
        {workflows.map((workflow, index) => {
          const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
          return (
            <div
              key={index}
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`bg-accent/50 rounded-lg p-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <span className="font-semibold text-foreground">{workflow.name}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{workflow.flow}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SynrgyWorkflows;
