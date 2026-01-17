import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    title: "Turning complexity into clear narratives",
    description: "When ideas are dense or stakes are high, I use AI to:",
    items: [
      "Simplify executive updates and leadership comms",
      "Clarify throughlines across multiple themes",
      "Reduce cognitive load without losing substance",
    ],
    footer: "I own the final framing and message.",
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
  },
];

const HowIUseAI = () => {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">How I use AI</h2>
      <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
        I use AI primarily as a thinking partner. Its job is to externalize complexity, 
        surface trade-offs, and help me get to clarity faster. I remain fully accountable 
        for judgment and decisions.
      </p>
      
      <h3 className="text-lg font-semibold text-muted-foreground mb-6">Common use cases</h3>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold leading-snug">
                {index + 1}. {useCase.title}
              </CardTitle>
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
        ))}
      </div>
    </section>
  );
};

export default HowIUseAI;
