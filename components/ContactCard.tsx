"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-sm w-full"
    >
      <div className="bg-black border border-gold/30 rounded-xl p-6 shadow-lg shadow-gold/20">
        <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Contact person</p>
              <p className="text-white font-semibold">Mr. Daniel Sule</p>
              <p className="text-gold mt-1">08036390205</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Office</p>
              <p className="text-white text-sm">Abuja Continental Hotel, Wuse Zone 4 (PCHA)</p>
              <p className="text-sm text-gray-400 mt-2">Depot</p>
              <p className="text-white text-sm">SPV Estate, Kilometer 20 Airport Road, Abuja</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <motion.a
            href="tel:08036390205"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call
          </motion.a>
          <motion.a
            href="mailto:uratechy@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 border border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors text-center flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Email
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

