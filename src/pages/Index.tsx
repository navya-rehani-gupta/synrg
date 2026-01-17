import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowIUseAI from "@/components/HowIUseAI";
import TeamUsage from "@/components/TeamUsage";
import Principles from "@/components/Principles";
import LivingLog from "@/components/LivingLog";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl mx-auto px-6 pt-20">
        <Hero />
        <div className="h-px bg-border" />
        <HowIUseAI />
        <div className="h-px bg-border" />
        <TeamUsage />
        <div className="h-px bg-border" />
        <Principles />
        <div className="h-px bg-border" />
        <LivingLog />
        <footer className="py-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
};

export default Index;
