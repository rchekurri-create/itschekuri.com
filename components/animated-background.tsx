"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AnimatedBackground() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 22 });
  const springY = useSpring(y, { stiffness: 60, damping: 22 });

  useEffect(() => {
    function onMove(event: MouseEvent) {
      x.set(event.clientX - 220);
      y.set(event.clientY - 220);
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute size-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="absolute right-[8%] top-24 size-48 rounded-full border border-cyan-300/20 bg-white/[0.03] backdrop-blur"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-[12%] h-28 w-28 rounded-lg border border-purple-300/20 bg-purple-400/10"
        animate={{ y: [0, 16, 0], rotate: [12, -4, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
