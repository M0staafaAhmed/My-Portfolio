import { motion } from "motion/react";

const ORBS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  size: 180 + (i % 4) * 60,
  color:
    i % 3 === 0
      ? "rgba(220, 20, 40, 0.5)"
      : i % 3 === 1
      ? "rgba(220, 40, 80, 0.45)"
      : "rgba(234, 35, 20, 0.35)", 
  duration: 8 + (i % 5) * 3,
}));

export default function RandomFloatingBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-60 bg-slate-950 overflow-hidden flex items-center justify-center">
      {ORBS.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
          }}
          animate={{
            x: [
              `${(Math.sin(orb.id + 1) * 35)}vw`,
              `${(Math.cos(orb.id + 2) * -30)}vw`,
              `${(Math.sin(orb.id + 3) * -40)}vw`,
              `${(Math.cos(orb.id + 4) * 35)}vw`,
              `${(Math.sin(orb.id + 1) * 35)}vw`,
            ],
            y: [
              `${(Math.cos(orb.id + 1) * 35)}vh`,
              `${(Math.sin(orb.id + 2) * -40)}vh`,
              `${(Math.cos(orb.id + 3) * 30)}vh`,
              `${(Math.sin(orb.id + 4) * -35)}vh`,
              `${(Math.cos(orb.id + 1) * 35)}vh`,
            ],
            scale: [0.5, 0.6, 0.4, 0.8, 0.5],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}