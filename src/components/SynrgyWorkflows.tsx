import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Workflow {
  name: string;
  flow: string;
  description?: string;
}

const workflows: Workflow[] = [
  {
    name: "Research → Board-Ready",
    flow: "Web research → Claude Code → Interactive HTML → Vercel",
    description: "Turn raw competitive intelligence into deployed, shareable analysis tools.",
  },
  {
    name: "Strategy → Stakeholder Deck",
    flow: "Markdown docs → Claude Code → Presentation-ready materials",
  },
  {
    name: "Idea → Working Prototype",
    flow: "Concept → Claude Code → GitHub → Deploy",
    description: "Ship working prototypes in hours, not weeks.",
  },
  {
    name: "Meeting → Action",
    flow: "AI capture → Automated extraction → Knowledge base",
  },
  {
    name: "This Page",
    flow: "Auto-updated as I build",
    description: "This living record updates itself. As I build new tools and workflows, they're automatically logged here.",
  },
];

const WorkflowCard = ({ workflow, index }: { workflow: Workflow; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div>
        <span className="font-semibold text-foreground">{workflow.name}</span>
      </div>
      {workflow.description && (
        <p className="text-sm text-muted-foreground mt-2">{workflow.description}</p>
      )}
      <p className="text-xs text-muted-foreground mt-2 font-mono">{workflow.flow}</p>
    </div>
  );
};

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
          These are my daily workflows — prioritized by impact. Each one replaces what used to take a team or a week.
        </p>
      </div>

      <div className="space-y-4 max-w-2xl">
        {workflows.map((workflow, index) => (
          <WorkflowCard key={index} workflow={workflow} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SynrgyWorkflows;
