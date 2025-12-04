"use client";

import { motion } from "framer-motion";
import { Ship, Truck, Package, Globe, Clock, Shield } from "lucide-react";

const logisticsServices = [
  {
    icon: Ship,
    title: "Sea Freight",
    description: "International and domestic sea freight services with reliable shipping partners and competitive rates.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Truck,
    title: "Land Transportation",
    description: "Nationwide road freight services with secure handling and timely delivery guarantees.",
    color: "from-gold-light to-gold",
  },
  {
    icon: Package,
    title: "Cargo Handling",
    description: "Professional cargo handling and warehousing services with state-of-the-art facilities.",
    color: "from-gold to-gold-dark",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Global shipping solutions connecting Nigeria to major ports worldwide.",
    color: "from-gold-dark to-gold",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Fast-track delivery services for urgent shipments with real-time tracking.",
    color: "from-gold-light to-gold-dark",
  },
  {
    icon: Shield,
    title: "Insured Cargo",
    description: "Comprehensive cargo insurance coverage for peace of mind on every shipment.",
    color: "from-gold to-gold-light",
  },
];

export default function Logistics() {
  return (
    <section id="logistics" className="py-20 bg-black relative overflow-hidden">
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
            <span className="text-white">Logistics & </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Haulage Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive sea and land transportation solutions for businesses of all sizes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logisticsServices.map((service, index) => {
            const Icon = service.icon;
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
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                
                {/* Hover effect glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

