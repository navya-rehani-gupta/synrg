import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowIUseAI from "@/components/HowIUseAI";
import TeamUsage from "@/components/TeamUsage";
import Principles from "@/components/Principles";
import SynrgyWorkflows from "@/components/SynrgyWorkflows";
import SynrgyTools from "@/components/SynrgyTools";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollProgress />
      <main className="container max-w-4xl mx-auto px-6 pt-20">
        <Hero />
        <div className="h-px bg-border" />
        <section id="how-i-use-ai">
          <HowIUseAI />
        </section>
        <div className="h-px bg-border" />
        <section id="team-usage">
          <TeamUsage />
        </section>
        <div className="h-px bg-border" />
        <section id="principles">
          <Principles />
        </section>
        <div className="h-px bg-border" />
        <section id="workflows">
          <SynrgyWorkflows />
        </section>
        <div className="h-px bg-border" />
        <section id="tools">
          <SynrgyTools />
        </section>
      </main>
      <div className="container max-w-4xl mx-auto px-6">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
