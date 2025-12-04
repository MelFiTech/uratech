"use client";

import { motion, AnimatePresence } from "framer-motion";
import RealEstateHero from "./hero/RealEstateHero";
import TransportationHero from "./hero/TransportationHero";
import SeaLandTransportHero from "./hero/SeaLandTransportHero";
import { useSector } from "@/contexts/SectorContext";

const services = [
  { id: "transportation", label: "Transportation", component: TransportationHero, video: "/video/hero.mp4" },
  { id: "sea-land", label: "Sea & Land Transport", component: SeaLandTransportHero, video: "/video/sea.mp4" },
  { id: "real-estate", label: "Real Estate", component: RealEstateHero, video: "/video/real-estate.mp4" },
];

export default function Hero() {
  const { activeSector, setActiveSector } = useSector();
  const activeService = services.find(s => s.id === activeSector) || services[0];
  const ActiveComponent = activeService.component;
  const activeVideo = activeService.video;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <video
              key={activeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/10" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-8 max-w-2xl mx-auto"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveSector(service.id as "transportation" | "real-estate" | "sea-land")}
              className={`w-full sm:flex-1 sm:min-w-[140px] md:min-w-[180px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all text-center ${
                activeSector === service.id
                  ? "bg-gold text-black shadow-lg shadow-gold/50"
                  : "bg-black/50 text-white border border-gold/30 hover:border-gold/50 hover:bg-gold/10"
              }`}
            >
              {service.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

