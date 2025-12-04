"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TickerProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function Ticker({ value, duration = 20, className = "" }: TickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    
    // Calculate the width of the content
    const width = contentRef.current.scrollWidth / 2; // Divide by 2 since we duplicate
    setContentWidth(width);
  }, [value]);

  useEffect(() => {
    if (contentWidth === 0) return;

    const controls = animate(x, -contentWidth, {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [contentWidth, duration, x]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ width: "100%" }}
    >
      <motion.div
        ref={contentRef}
        style={{ x }}
        className="inline-flex"
      >
        <span className="inline-block mr-16 px-4">{value}</span>
        <span className="inline-block mr-16 px-4">{value}</span>
        <span className="inline-block mr-16 px-4">{value}</span>
        <span className="inline-block mr-16 px-4">{value}</span>
      </motion.div>
    </div>
  );
}

