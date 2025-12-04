"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Fleet from "@/components/Fleet";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Values from "@/components/Values";
import WhyChooseUs from "@/components/WhyChooseUs";
import Booking from "@/components/Booking";
import Properties from "@/components/Properties";
import Logistics from "@/components/Logistics";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSector } from "@/contexts/SectorContext";

export default function Home() {
  const { activeSector } = useSector();

  return (
    <main className="min-h-screen bg-black">
      <Preloader />
      <Navbar />
      <Hero />
      <Stats />
      
      {/* Dynamic Content Based on Sector */}
      {activeSector === "transportation" && (
        <>
          <Fleet />
          <Technology />
          <Services />
        </>
      )}
      
      {activeSector === "real-estate" && (
        <>
          <Properties />
          <Services />
        </>
      )}
      
      {activeSector === "sea-land" && (
        <>
          <Logistics />
          <Fleet />
          <Services />
        </>
      )}
      
      {/* Common Sections */}
      <Values />
      <WhyChooseUs />
      <Booking />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
