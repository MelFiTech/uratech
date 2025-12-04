"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
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
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-white">Contact & </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Office
            </span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black border border-gold/30 rounded-xl p-8 shadow-lg shadow-gold/20"
          >
            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Contact person</p>
                  <p className="text-white font-semibold text-lg">Mr. Daniel Sule</p>
                  <a href="tel:08036390205" className="text-gold hover:text-gold-light transition-colors">
                    08036390205
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:uratechy@gmail.com" className="text-white hover:text-gold transition-colors">
                    uratechy@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Office</p>
                  <p className="text-white mb-3">Abuja Continental Hotel, Wuse Zone 4 (PCHA)</p>
                  <p className="text-sm text-gray-400 mb-1">Depot</p>
                  <p className="text-white">SPV Estate, Kilometer 20 Airport Road, Abuja</p>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3 p-4 bg-gold/10 border border-gold/20 rounded-lg"
            >
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                We respond to booking requests within a few hours during business hours. 
                For urgent bookings call the number above.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

