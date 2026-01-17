import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareText, Target, Rocket, PenLine, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { LucideIcon } from "lucide-react";

const useCases: Array<{
  title: string;
  description: string;
  items: string[];
  footer: string;
  icon: LucideIcon;
}> = [
  {
    title: "Turning complexity into clear narratives",
    description: "When ideas are dense or stakes are high, I use AI to:",
    items: [
      "Simplify executive updates and leadership comms",
      "Clarify throughlines across multiple themes",
      "Reduce cognitive load without losing substance",
    ],
    footer: "I own the final framing and message.",
    icon: MessageSquareText,
  },
  {
    title: "Pressure-testing strategy and trade-offs",
    description: "I use AI to:",
    items: [
      "Stress-test assumptions",
      "Explore second- and third-order effects",
      "Identify risks, edge cases, and blind spots",
    ],
    footer: "AI helps me see more angles. I decide what matters.",
    icon: Target,
  },
  {
    title: "Accelerating first drafts",
    description: "I use AI to:",
    items: [
      "Draft initial versions of memos, emails, and frameworks",
      "Explore multiple phrasings quickly",
      "Get momentum without over-investing early",
    ],
    footer: "Drafting is cheap. Decisions are not.",
    icon: Rocket,
  },
  {
    title: "Clarifying language when stakes are high",
    description: "I use AI to:",
    items: [
      "Tighten language in sensitive communications",
      "Remove ambiguity and unintended signals",
      "Ensure tone is calm, direct, and grounded",
    ],
    footer: "Words matter. AI helps me choose them more deliberately.",
    icon: PenLine,
  },
  {
    title: "Reducing emotional and cognitive load",
    description: "I use AI to:",
    items: [
      "Externalize thinking when I'm holding too much in my head",
      "Create structure when situations are ambiguous or evolving",
      "Regain calm and perspective before acting",
    ],
    footer: "AI creates space. I choose how to use it.",
    icon: Brain,
  },
];

const UseCaseCard = ({ useCase, index }: { useCase: typeof useCases[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const Icon = useCase.icon;
  
  return (
    <Card
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-card border-border group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold leading-snug flex-1">
            {index + 1}. {useCase.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{useCase.description}</p>
        <ul className="space-y-2">
          {useCase.items.map((item, i) => (
            <li key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm font-medium text-accent-foreground pt-2 border-t border-border">
          {useCase.footer}
        </p>
      </CardContent>
    </Card>
  );
};

const HowIUseAI = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={headerVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How I use AI</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          I use AI primarily as a thinking partner. Its job is to externalize complexity, 
          surface trade-offs, and help me get to clarity faster. I remain fully accountable 
          for judgment and decisions.
        </p>
        
        <h3 className="text-lg font-semibold text-muted-foreground mb-6">Common use cases</h3>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} useCase={useCase} index={index} />
        ))}
      </div>
    </section>
  );
};

export default HowIUseAI;
