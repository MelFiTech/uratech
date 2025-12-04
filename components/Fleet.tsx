"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles } from "lucide-react";
import CircularGallery from "./CircularGallery";

const fleetItems = [
  {
    image: "/image/interior.jpg",
    text: "Toyota Prado"
  },
  {
    image: "/image/interior.jpg",
    text: "Toyota Camry"
  },
  {
    image: "/image/interior.jpg",
    text: "Toyota Land Cruiser"
  },
  {
    image: "/image/interior.jpg",
    text: "Lexus SUV"
  },
  {
    image: "/image/interior.jpg",
    text: "Executive Bus"
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-black relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
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
              Fleet
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-gold" />
            <span>Well maintained • Insured • Clean</span>
            <Sparkles className="w-5 h-5 text-gold" />
          </p>
        </motion.div>
      </div>
      
      {/* Fleet Gallery - Full Width */}
      <div className="relative" style={{ height: '600px', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <CircularGallery 
          items={fleetItems}
          bend={3} 
          textColor="#d4af37" 
          borderRadius={0.05} 
          scrollEase={0.02}
          font="bold 30px Inter"
        />
      </div>
    </section>
  );
}

