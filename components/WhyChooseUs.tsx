"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, Heart, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage for all our vehicles and operations, giving you complete peace of mind.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Zap,
    title: "24/7 Availability",
    description: "Round-the-clock service availability. We're here when you need us, whenever you need us.",
    color: "from-gold-light to-gold",
  },
  {
    icon: Globe,
    title: "Multi-Sector Expertise",
    description: "From transportation to real estate and logistics, we offer integrated solutions across industries.",
    color: "from-gold to-gold-dark",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
    color: "from-gold-dark to-gold",
  },
  {
    icon: Clock,
    title: "Time-Efficient",
    description: "Streamlined processes and professional service ensure timely delivery of all solutions.",
    color: "from-gold-light to-gold-dark",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "Years of experience with a portfolio of successful projects and satisfied clients.",
    color: "from-gold to-gold-light",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
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
            <span className="text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Ura-Tech
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A multifaceted agency delivering comprehensive solutions with unmatched expertise and dedication
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-black border border-gold/20 rounded-xl hover:border-gold/50 transition-all"
              >
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                
                {/* Hover effect glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

