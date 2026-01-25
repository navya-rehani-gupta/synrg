import { Bot } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-2xl mx-auto">
        {/* Meta section - How this page updates */}
        <div className="bg-accent/50 rounded-lg p-6 mb-12">
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

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold mb-1">
              <span className="text-primary">sy</span>NRG<span className="text-primary">y</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Human + AI Synergy by Navya Rehani Gupta
            </p>
          </div>

          <a 
            href="https://www.linkedin.com/in/navyarehani/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
          >
            More about me here →
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Navya Rehani Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
