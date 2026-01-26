import { Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CompareNotes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={isVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Compare Notes</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          If you're building something similar or want to compare notes, I'd love to hear from you.
        </p>

        <a
          href="https://www.linkedin.com/in/navyarehani/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default CompareNotes;
