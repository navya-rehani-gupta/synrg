import { Linkedin, Twitter, Mail, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-2xl mx-auto">
        {/* Meta section moved here */}
        <div className="bg-accent/50 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <Bot className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-foreground text-sm">/synrgy</span>
              <span className="text-muted-foreground text-sm ml-2">— proactive logging agent</span>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                A Claude Code skill with proactive triggers. After significant actions, it prompts for updates 
                and syncs to both private notes and this public page.
              </p>
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

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
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
