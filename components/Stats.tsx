"use client";

import { motion } from "framer-motion";
import { Users, Car, Building2, Ship, TrendingUp, Award } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";
import Ticker from "./Ticker";

const stats = [
  { icon: Users, value: "500+", label: "Satisfied Clients", color: "from-gold to-gold-light" },
  { icon: Car, value: "200+", label: "Fleet Vehicles", color: "from-gold-light to-gold" },
  { icon: Building2, value: "50+", label: "Real Estate Projects", color: "from-gold to-gold-dark" },
  { icon: Ship, value: "1000+", label: "Logistics Deliveries", color: "from-gold-dark to-gold" },
  { icon: TrendingUp, value: "98%", label: "Success Rate", color: "from-gold-light to-gold-dark" },
  { icon: Award, value: "10+", label: "Years Experience", color: "from-gold to-gold-light" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Ticker Section - Full Width - Above Heading */}
      <div className="mb-16" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <div className="bg-gold py-8 overflow-hidden">
          <Ticker
            value="500+ Satisfied Clients • 200+ Fleet Vehicles • 50+ Real Estate Projects • 1000+ Logistics Deliveries • 98% Success Rate • 10+ Years Experience"
            duration={20}
            className="text-2xl md:text-4xl font-bold text-black"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Numbers That </span>
            <span className="text-white">
              Speak
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A multifaceted agency delivering excellence across transportation, real estate, and logistics
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-black border border-gray-700 rounded-xl hover:border-gray-600 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedNumber value={stat.value} duration={2} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

