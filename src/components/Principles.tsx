const principles = [
  "Clarity over cleverness",
  "AI accelerates judgment, it does not replace it",
  "First drafts are cheap, decisions are not",
  "Use AI to create space, not urgency",
  "If it increases confusion, stop using it",
];

const Principles = () => {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Operating principles</h2>
      <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
        These guide how I use AI and how I expect my team to use it.
      </p>
      
      <div className="bg-accent/50 rounded-lg p-8 max-w-2xl">
        <ul className="space-y-4">
          {principles.map((principle, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-primary font-semibold text-lg">•</span>
              <span className="text-foreground font-medium text-lg">{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Principles;
