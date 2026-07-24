import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const SmoothCursor = ({ defaultColor = 'rgba(234, 88, 12, 0.35)', size = 32, color }: { defaultColor?: string; size?: number; color?: string }) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // حالة للتحكم في لون المؤشر الحالي وحالة الهوفر
  const [cursorColor, setCursorColor] = useState(color ?? defaultColor);
  const [isHovered, setIsHovered] = useState(false);

  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e : any) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // البحث عن أقرب عنصر عليه الخصائص المخصصة
      const target = e.target.closest('[data-cursor-color]');

      if (target) {
        // قراءة اللون المكتوب في data-cursor-color
        const targetColor = target.getAttribute('data-cursor-color');
        setCursorColor(targetColor ?? color ?? defaultColor);
        setIsHovered(true);
      } else {
        // الرجوع للون الافتراضي عند الخروج
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, defaultColor, color]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      // ⭐️ الحركة والتفاعل مع تغيير اللون والأنيميشن
      animate={{
        scale: isHovered ? 0 : 1,
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        width: size,
        height: size,
        backgroundColor: cursorColor,
      }}
    />
  );
};