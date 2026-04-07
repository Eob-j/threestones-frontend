import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { StartSection } from "./components/StartSection";
import { ValueSection } from "./components/ValueSection";
import { HealthSection } from "./components/HealthSection";
import { ImpactSection } from "./components/ImpactSection";
import { SustainabilitySection } from "./components/SustainabilitySection";
import { SystemComparisonSection } from "./components/SystemComparisonSection";
import { CircularSystemSection } from "./components/CircularSystemSection";
import { ResearchImpactSection } from "./components/ResearchImpactSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { VideoVerification } from "./components/VideoVerification";
import { CertificateSection } from "./components/CertficateSection";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <VideoVerification />
      <CertificateSection />
      <StartSection />
      <ValueSection />
      <HealthSection />
      <ImpactSection />
      <SustainabilitySection />
      <SystemComparisonSection />
      <CircularSystemSection />
      <ResearchImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
