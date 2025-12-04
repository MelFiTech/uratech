"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Technology() {
  const features = [
    {
      title: "GPS Tracking & Real-Time Updates",
      description: "Track your vehicle in real-time and receive instant updates on location and status.",
    },
    {
      title: "24/7 Roadside Assistance",
      description: "Round-the-clock support for any emergencies or assistance you need on the road.",
    },
    {
      title: "Digital Booking System",
      description: "Book and manage your rentals seamlessly through our online platform.",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="bg-black/80 backdrop-blur-sm p-8 lg:p-12 rounded-xl border border-gold/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
                  TECHNOLOGY
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Your intelligent{" "}
                  <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    travel partner
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Technology at your fingertips. Whether it's real-time tracking keeping you informed 
                  or a seamless booking system that connects you to premium vehicles, professional 
                  transportation is always within reach.
                </p>

                <div className="space-y-6 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <div className="w-full h-full border-l-2 border-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="#booking"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all group"
                >
                  Explore More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] lg:h-[700px] rounded-xl overflow-hidden border border-gold/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video/hero2.mp4" type="video/mp4" />
            </video>
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

