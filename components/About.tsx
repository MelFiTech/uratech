"use client";

import { motion } from "framer-motion";
import { Award, Target, Heart } from "lucide-react";

const stats = [
  { number: "500+", label: "Happy Clients", icon: Heart },
  { number: "10+", label: "Years Experience", icon: Award },
  { number: "98%", label: "Success Rate", icon: Target },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Uratech
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              We are a premier consultancy firm specializing in car consultancy and comprehensive business solutions. 
              With years of experience and a commitment to excellence, we help businesses and individuals achieve their goals.
            </p>
            <p className="text-gray-400 text-lg mb-8">
              Our team of experts brings together deep industry knowledge and innovative thinking to deliver 
              results that exceed expectations. We believe in building long-term partnerships based on trust, 
              transparency, and mutual success.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-black/80 rounded-lg border border-gold/20"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gold">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl border border-gold/30 p-8">
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-gold/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-24 h-24 bg-gold-light/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="text-6xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent mb-4"
                >
                  Excellence
                </motion.div>
                <p className="text-gray-300 text-lg">
                  Delivering premium solutions with unmatched quality and dedication
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

