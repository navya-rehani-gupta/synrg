import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Code, Palette, Users, XCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { LucideIcon } from "lucide-react";

const teamExamples: Array<{
  role: string;
  items: string[];
  icon: LucideIcon;
}> = [
  {
    role: "Product",
    items: [
      "Synthesizing discovery and customer insights",
      "Drafting PRDs and strategy outlines",
      "Exploring edge cases and alternative approaches",
    ],
    icon: Lightbulb,
  },
  {
    role: "Engineering & Data",
    items: [
      "Design discussions and architectural trade-offs",
      "Debugging support and hypothesis generation",
      "Accelerating analytics from idea to insight",
    ],
    icon: Code,
  },
  {
    role: "Design",
    items: [
      "Copy exploration and iteration",
      "Critique and alternative concept exploration",
      "Accessibility and usability checks",
    ],
    icon: Palette,
  },
  {
    role: "Leadership",
    items: [
      "Executive communications and narrative clarity",
      "Scenario planning and decision prep",
      "Framing trade-offs for alignment conversations",
    ],
    icon: Users,
  },
];

const notUsedFor = [
  "Final decisions without human judgment",
  "Performance or people feedback without direct context",
  "Avoiding hard conversations or accountability",
];

const TeamCard = ({ team, index }: { team: typeof teamExamples[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const Icon = team.icon;

  return (
    <Card
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-card border-border group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-base font-semibold text-primary">
            {team.role}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {team.items.map((item, i) => (
            <li key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const TeamUsage = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: notUsedRef, isVisible: notUsedVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={headerVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How my team uses AI</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          AI is part of how we work. It is not mandated, but it is expected to be 
          used thoughtfully to improve clarity, speed, and quality.
        </p>

        <h3 className="text-lg font-semibold text-muted-foreground mb-6">Examples across the team</h3>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {teamExamples.map((team, index) => (
          <TeamCard key={index} team={team} index={index} />
        ))}
      </div>

      <Card
        ref={notUsedRef as React.RefObject<HTMLDivElement>}
        className={`bg-secondary/50 border-border ${notUsedVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-destructive/10">
              <XCircle className="w-5 h-5 text-destructive" />
            </div>
            <CardTitle className="text-lg font-semibold">What we do not use AI for</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {notUsedFor.map((item, i) => (
              <li key={i} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-destructive mt-0.5">×</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium text-muted-foreground mt-4 pt-4 border-t border-border">
            AI supports thinking. It does not replace responsibility.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default TeamUsage;
