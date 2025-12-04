"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SeaLandTransportHero() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
      >
        <span className="text-white">Sea & Land </span>
        <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent block md:inline">
          Transportation Services
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Comprehensive sea and land freight solutions for your cargo and logistics needs
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-8 py-4 bg-gold text-black font-semibold rounded-lg flex items-center gap-2 hover:bg-gold-light transition-all shadow-lg shadow-gold/50"
        >
          View Services
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
        
        <motion.a
          href="#booking"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
        >
          Get Quote
        </motion.a>
      </motion.div>
    </div>
  );
}

