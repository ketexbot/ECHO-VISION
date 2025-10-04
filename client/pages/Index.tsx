import AppLayout from "@/components/layout/AppLayout";
import Challenge from "@/components/sections/Challenge";
import FinalCallToAction from "@/components/sections/FinalCallToAction";
import Hero from "@/components/sections/Hero";
import SolutionFeatures from "@/components/sections/SolutionFeatures";
import TechnologyShowcase from "@/components/sections/TechnologyShowcase";

const Index = () => {
  return (
    <AppLayout>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(circle_at_top,#80bbaa33,transparent_65%)] blur-2xl" />
        <Hero />
        <Challenge />
        <SolutionFeatures />
        <TechnologyShowcase />
        <FinalCallToAction />
      </div>
    </AppLayout>
  );
};

export default Index;
