import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import HowIUseAI from "@/components/HowIUseAI";
import TeamUsage from "@/components/TeamUsage";
import SynrgyWorkflows from "@/components/SynrgyWorkflows";
import SynrgyTools from "@/components/SynrgyTools";
import CompareNotes from "@/components/CompareNotes";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SkipToContent from "@/components/SkipToContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      <Header />
      <ScrollProgress />
      <main id="main-content" tabIndex={-1} className="container max-w-4xl mx-auto px-6 pt-20 outline-none">
        <Hero />
        <div className="h-px bg-border" aria-hidden="true" />
        <section id="how-i-operate" aria-labelledby="how-i-operate-heading">
          <HowIUseAI />
        </section>
        <div className="h-px bg-border" aria-hidden="true" />
        <section id="principles" aria-labelledby="principles-heading">
          <Principles />
        </section>
        <div className="h-px bg-border" aria-hidden="true" />
        <section id="team-usage" aria-labelledby="team-usage-heading">
          <TeamUsage />
        </section>
        <div className="h-px bg-border" aria-hidden="true" />
        <section id="workflows" aria-labelledby="workflows-heading">
          <SynrgyWorkflows />
        </section>
        <div className="h-px bg-border" aria-hidden="true" />
        <section id="tools" aria-labelledby="tools-heading">
          <SynrgyTools />
        </section>
        <div className="h-px bg-border" aria-hidden="true" />
        <section id="compare-notes" aria-labelledby="compare-notes-heading">
          <CompareNotes />
        </section>
      </main>
      <div className="container max-w-4xl mx-auto px-6">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
