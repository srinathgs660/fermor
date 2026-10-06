import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductSection } from "@/components/ProductSection";
import { Features } from "@/components/Features";
import { Signature3DSection } from "@/components/Signature3DSection";
import { Insights } from "@/components/Insights";
import { HowItWorks } from "@/components/HowItWorks";
import { Philosophy } from "@/components/Philosophy";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#F7F7F3] text-[#111111] overflow-x-clip selection:bg-emerald-500 selection:text-white">
        {/* Sleek initial load entrance animation */}
        <Preloader />

        {/* Desktop subtle magnetic cursor */}
        <CustomCursor />

        {/* Floating frosted glass sticky navigation */}
        <Navbar />

        {/* 01. Full-screen 3D immersive hero */}
        <Hero />

        {/* 02. Trust & proof strip */}
        <TrustStrip />

        {/* 03. Problem statement & signature Fragmented -> Connected -> Clear interaction */}
        <ProblemSection />

        {/* 04. Stylized 3D financial interface preview */}
        <ProductSection />

        {/* 05. Four distinct architectural dimensions */}
        <Features />

        {/* 06. Signature 3D Section: "Your financial life, in motion" */}
        <Signature3DSection />

        {/* 07. Contextual insight simulations */}
        <Insights />

        {/* 08. Three-step workflow progression */}
        <HowItWorks />

        {/* 09. Editorial design manifesto */}
        <Philosophy />

        {/* 10. High-contrast final conversion CTA */}
        <FinalCTA />

        {/* 11. Minimalist footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
