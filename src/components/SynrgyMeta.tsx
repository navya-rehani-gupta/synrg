import { Bot } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SynrgyMeta = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={headerVisible ? 'animate-fade-in' : 'opacity-0'}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How This Page Updates</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          This page is maintained by a proactive Claude Code skill that monitors my workflow and prompts me to log new discoveries.
        </p>
      </div>

      <div className={`bg-accent/50 rounded-lg p-6 max-w-2xl ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="flex items-start gap-4">
          <Bot className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <span className="font-semibold text-foreground">/synrgy</span>
            <span className="text-muted-foreground ml-2">— proactive logging agent</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              A Claude Code skill configured with proactive triggers. After significant actions (git push, task completion, tool setup), it prompts: <em>"Anything new to log?"</em> — then updates both my private notes and this public page via GitHub auto-sync.
            </p>
            <div className="mt-4 text-xs text-muted-foreground font-mono">
              Trigger → Prompt → Log to Markdown → Push to GitHub → Lovable deploys
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynrgyMeta;
