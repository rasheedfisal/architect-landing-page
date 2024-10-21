import NavBar from "@/components/common/NavBar";
import Features from "@/components/sections/features";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import LovedByBuildersSection from "@/components/sections/LovedByBuildersSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import MoreFeaturesSection from "@/components/sections/MoreFeaturesSection";
import ReadyToBuildSection from "@/components/sections/ReadyToBuildSection";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-col">
        <NavBar />
      </div>
      <div className="mt-8 md:mt-[81px] flex flex-col gap-8 md:gap-[100px] px-4 md:px-[100px]">
        <HeroSection />
        <MarqueeSection />
        <Features />
      </div>

      <div className="mt-8 md:mt-[81px] flex flex-col">
        <MoreFeaturesSection />
        <LovedByBuildersSection />
        <ReadyToBuildSection />
        <FooterSection />
      </div>
    </main>
  );
}
