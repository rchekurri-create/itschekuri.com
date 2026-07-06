"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const particles = [
  { left: "12%", top: "26%", color: "bg-purple-300/50", delay: 0 },
  { left: "27%", top: "18%", color: "bg-pink-300/45", delay: 0.8 },
  { left: "72%", top: "22%", color: "bg-blue-300/45", delay: 1.4 },
  { left: "84%", top: "55%", color: "bg-orange-300/40", delay: 0.35 },
  { left: "18%", top: "72%", color: "bg-white/35", delay: 1.1 },
  { left: "58%", top: "78%", color: "bg-purple-300/35", delay: 1.75 },
];

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
        className="absolute h-[34rem] w-[34rem] rounded-[42%] bg-[conic-gradient(from_140deg,rgba(168,92,255,0.22),rgba(255,60,172,0.13),rgba(0,194,255,0.12),rgba(168,92,255,0.22))] blur-3xl"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="absolute left-[7%] top-32 h-px w-40 origin-left bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"
        animate={{ opacity: [0.25, 0.7, 0.25], rotate: [-8, -3, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-28 h-40 w-40 rounded-[2rem] border border-white/10 bg-white/[0.025] backdrop-blur"
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-[18%] h-20 w-56 rounded-[999px] border border-orange-300/20"
        animate={{ opacity: [0.22, 0.48, 0.22], x: [0, 14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className={`absolute size-1.5 rounded-full ${particle.color}`}
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.15, 0.75, 0.15], y: [0, -12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
        />
      ))}
    </div>
  );
}
