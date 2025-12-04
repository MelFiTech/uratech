"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black border-t border-gold/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent mb-4">
              Ura-Tech Global Services Ltd
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in vehicle rentals & logistics in Abuja, Nigeria.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>SPV Estate, Kilometer 20 Airport Road, Abuja</p>
              <p>Abuja Continental Hotel, Wuse Zone 4 (PCHA)</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#fleet" className="text-gray-400 hover:text-gold transition-colors">Fleet</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-gold transition-colors">Book</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-white font-semibold">Phone:</span>{" "}
                <a href="tel:08036390205" className="text-gold hover:text-gold-light transition-colors">
                  08036390205
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Email:</span>{" "}
                <a href="mailto:uratechy@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                  uratechy@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gold/20 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Ura-Tech Global Services Ltd. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

