import { AboutClub } from "./components/AboutClub";
import { AboutUsSection } from "./components/AboutUsSection";
import { PartnerSection } from "./components/PartnerSection";
import { Countdown } from "./components/CountDown";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/HeroSection";
import { JudgeSection } from "./components/JudgeSection";
import { MentorSection } from "./components/MentorSection";
import { PrizeSection } from "./components/PrizeSection";
import { SponsoredPrizeSection } from "./components/SponsoredPrizeSection";
import { ThemeSection } from "./components/ThemeSection";
import { WhoSection } from "./components/WhoSection";
import { TimelineSection } from "./components/TimelineSection";
import { BackToTopButton } from "./components/BackToTopButton";
import { AcademicMentor } from "./components/AcademicMentor";
import { VideoRecapSection } from "./components/VideoRecapSection";

export default function Home() {
  return (
    <div>
      {/* --- Chapter 1: The HOOK (What is this & Why is it credible?) --- */}
      <Header />
      <HeroSection />
      <AboutUsSection />
      <VideoRecapSection />
      {/* --- Chapter 2: The FOUNDATION (Who is behind this?) --- */}
      <AboutClub />
      {/* --- Chapter 3: The MOTIVATION (Urgency & More Credibility) --- */}
      <Countdown date={"2025-11-09T23:59:00"} />
      <PartnerSection />
      {/* --- Chapter 4: The DETAILS (For interested participants) --- */}
      <WhoSection />
      <ThemeSection />
      <TimelineSection />
      <PrizeSection />
      <SponsoredPrizeSection />
      <JudgeSection />
      <MentorSection />
      <AcademicMentor />
      {/* --- Utilities & Closing --- */}
      <BackToTopButton />
      <Footer />
    </div>
  );
}
