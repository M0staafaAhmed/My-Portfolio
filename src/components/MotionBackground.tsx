import { motion } from "motion/react";

// 1. إنشاء بيانات الـ 8 كور بخصائص عشوائية
const ORBS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  size: 180 + (i % 4) * 60, // أحجام متنوعة لكور الإضاءة
  color:
    i % 3 === 0
      ? "rgba(255, 61, 0, 0.5)"   // برتقالي ناري
      : i % 3 === 1
      ? "rgba(255, 120, 51, 0.45)" // برتقالي فاتح
      : "rgba(234, 88, 12, 0.35)",  // دافي
  duration: 8 + (i % 5) * 3, // سرعات مختلفة (من 8 لـ 20 ثانية) عشان الحركة تكون هادية
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
          // ⭐️ هنا العشوائية الكاملة في الحركة
          animate={{
            // تتحرك في الشاشة أفقياً ورأسياً بين أماكن عشوائية بالنسبة لمركز الشاشة
            x: [
              `${(Math.sin(orb.id + 1) * 35)}vw`,
              `${(Math.cos(orb.id + 2) * -30)}vw`,
              `${(Math.sin(orb.id + 3) * -40)}vw`,
              `${(Math.cos(orb.id + 4) * 35)}vw`,
              `${(Math.sin(orb.id + 1) * 35)}vw`, // العودة لنقطة البداية لسلاسة التكرار
            ],
            y: [
              `${(Math.cos(orb.id + 1) * 35)}vh`,
              `${(Math.sin(orb.id + 2) * -40)}vh`,
              `${(Math.cos(orb.id + 3) * 30)}vh`,
              `${(Math.sin(orb.id + 4) * -35)}vh`,
              `${(Math.cos(orb.id + 1) * 35)}vh`,
            ],
            // تكبر وتصغر بشكل عشوائي أثناء الطيران
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