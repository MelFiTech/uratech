"use client";

import { motion } from "framer-motion";
import MagicBento from "./MagicBento";

export default function Values() {
  return (
    <section id="values" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Values & Ethics
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The principles that guide our multifaceted approach to excellence across all our services
          </p>
        </motion.div>
        
        <div className="w-full">
          <MagicBento
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="212, 175, 55"
          />
        </div>
      </div>
    </section>
  );
}

