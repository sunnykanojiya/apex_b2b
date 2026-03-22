import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ProgramSection from "@/components/sections/ProgramSection";
import SystemsSection from "@/components/sections/SystemsSection";
import ProductivitySection from "@/components/sections/ProductivitySection";
import AchievesSection from "@/components/sections/AchievesSection";
import ConsultingSection from "@/components/sections/ConsultingSection";
import ForWhoSection from "@/components/sections/ForWhoSection";
import WhyApexSection from "@/components/sections/WhyApexSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Faculty from "@/components/sections/Faculty";
import FAQSection from "@/components/sections/FAQSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ToolsMarquee from "@/components/sections/ToolsMarquee";
import { LeadFormProvider } from "@/context/LeadFormContext";
import LeadFormModal from "@/components/ui/LeadFormModal";

export default function HomePage() {
  return (
    <LeadFormProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ToolsMarquee />
        <TrustedBySection />
        <OutcomesSection />
        <Faculty />
        <ProductivitySection />
        <ForWhoSection />
        {/* <ImpactSection /> */}
        {/* <ProgramSection /> */}
        <SystemsSection />
        <WhyApexSection />
        <AchievesSection />
        {/* <ConsultingSection /> */}
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <LeadFormModal />
    </LeadFormProvider>
  );
}

