import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";

export const metadata: Metadata = {
  title: "Sustainabyte Technologies | AI-Powered Energy Optimization for Buildings & Industries",
  description: "Sustainabyte Technologies helps industrial facilities and commercial buildings reduce energy costs and achieve Net Zero using AI-powered monitoring, chiller plant optimization, and verified savings.",
};

const ProblemSolution = dynamic(() => import("@/components/home/ProblemSolution"));
const EPICSection = dynamic(() => import("@/components/home/EPICSection"));
const TrustedBy = dynamic(() => import("@/components/home/TrustedBy"));
const CaseStudiesAndFounder = dynamic(() => import("@/components/home/CaseStudiesAndFounder"));
const NetZeroFocus = dynamic(() => import("@/components/home/NetZeroFocus"));
const FocusAreas = dynamic(() => import("@/components/home/FocusAreas"));
const GlobalGoals = dynamic(() => import("@/components/home/GlobalGoals"));
const WhatWeDo = dynamic(() => import("@/components/home/WhatWeDo"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProblemSolution />
      <EPICSection />
      <TrustedBy />
      <CaseStudiesAndFounder />
      <NetZeroFocus />
      <FocusAreas />
      <GlobalGoals />
      <WhatWeDo />
      <FAQSection />
    </>
  );
}
