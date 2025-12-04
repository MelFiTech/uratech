"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({ value, duration = 2, className = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract number from value (e.g., "500+" -> 500)
    const numMatch = value.match(/\d+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const num = parseInt(numMatch[0]);
    const suffix = value.replace(/\d+/, ""); // Get the "+" or "%" etc.

    let start = 0;
    const increment = num / (duration * 60); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start) + suffix);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {displayValue}
    </motion.span>
  );
}

