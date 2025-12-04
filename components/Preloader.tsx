"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Welcome to </span>
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Ura-Tech Global Services Ltd
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Your Trusted Partner in Vehicle Rentals & Logistics
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.6, duration: 1 }}
              className="h-1 bg-gold/30 mx-auto mb-8 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </motion.div>

            <motion.a
              href="#home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoading(false)}
              className="inline-block px-8 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-all"
            >
              Enter Site
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

