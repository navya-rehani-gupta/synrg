import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const principles = [
  "Clarity over cleverness",
  "Judgment first, tools second",
  "First drafts are cheap. Decisions are not.",
  "Speed without urgency",
  "Ruthless simplicity",
];

const PrincipleItem = ({ principle, index }: { principle: string; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className={`flex items-start gap-4 group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
      <span className="text-foreground font-medium text-lg">{principle}</span>
    </li>
  );
};

const Principles = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={headerVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 id="principles-heading" className="text-2xl md:text-3xl font-bold mb-4">How I Think and Operate</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          How I show up under pressure. These guide how I use AI and how I expect my team to use it.
        </p>
      </div>
      
      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
        <ul className="space-y-4">
          {principles.map((principle, index) => (
            <PrincipleItem key={index} principle={principle} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Principles;
