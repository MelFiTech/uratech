"use client";

import { motion } from "framer-motion";
import { Car, Truck, Plane } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Vehicle Rental & Transportation",
    description: "Premium vehicle rentals for every need — from luxury sedans to executive buses. Short-term and long-term options with professional drivers, GPS tracking, and 24/7 support. Perfect for corporate travel, events, or personal use.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Truck,
    title: "Logistics & Haulage Services",
    description: "End-to-end logistics solutions including sea and land freight, warehousing, and last-mile delivery. Real-time tracking, insured cargo, and secure handling for businesses of all sizes across Nigeria and beyond.",
    color: "from-gold-light to-gold",
  },
  {
    icon: Plane,
    title: "Real Estate Solutions",
    description: "Comprehensive real estate services including property management, investment consulting, and commercial leasing. Expert guidance for acquisitions, development projects, and portfolio optimization in Abuja and surrounding areas.",
    color: "from-gold to-gold-dark",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
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
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions across transportation, real estate, and logistics — your one-stop partner for all business needs
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-black border border-gold/20 rounded-xl hover:border-gold/50 transition-all"
              >
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                
                {/* Hover effect glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

