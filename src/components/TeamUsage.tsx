import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamExamples = [
  {
    role: "Product",
    items: [
      "Synthesizing discovery and customer insights",
      "Drafting PRDs and strategy outlines",
      "Exploring edge cases and alternative approaches",
    ],
  },
  {
    role: "Engineering",
    items: [
      "Design discussions and architectural trade-offs",
      "Debugging support and hypothesis generation",
      "Documentation and explanation clarity",
    ],
  },
  {
    role: "Design",
    items: [
      "Copy exploration and iteration",
      "Critique and alternative concept exploration",
      "Accessibility and usability checks",
    ],
  },
  {
    role: "Leadership",
    items: [
      "Executive communications and narrative clarity",
      "Scenario planning and decision prep",
      "Framing trade-offs for alignment conversations",
    ],
  },
];

const notUsedFor = [
  "Final decisions without human judgment",
  "Performance or people feedback without direct context",
  "Avoiding hard conversations or accountability",
];

const TeamUsage = () => {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">How my team uses AI</h2>
      <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
        AI is part of how we work. It is not mandated, but it is expected to be 
        used thoughtfully to improve clarity, speed, and quality.
      </p>

      <h3 className="text-lg font-semibold text-muted-foreground mb-6">Examples across the team</h3>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {teamExamples.map((team, index) => (
          <Card key={index} className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-primary">
                {team.role}
              </CardTitle>
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
        ))}
      </div>

      <Card className="bg-secondary/50 border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">What we do not use AI for</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {notUsedFor.map((item, i) => (
              <li key={i} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-destructive mt-1.5">×</span>
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
