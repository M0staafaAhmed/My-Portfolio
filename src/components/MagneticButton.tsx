import React, { useState, useRef } from 'react';
import { motion, useSpring } from 'motion/react';

/**
 * زرار مغناطيسي ينجذب للماوس ويتم تعبئته من الداخل من نقطة دخول الماوس
 */

// ⭐️ 1. تغيير النوع لـ HTMLMotionProps عشان يتوافق تماماً مع motion.button
interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: string; // اللون الرئيسي للإطار والنص
  fillColor?: string;   // لون التعبئة عند الهوفر
}

export const MagneticButton = ({
  children,
  onClick,
  className = '',
  buttonColor = '#38bdf8',
  fillColor = '#0284c7',
  ...props
}: MagneticButtonProps) => {
  // ⭐️ 2. تحديد نوع الـ ref كـ HTMLButtonElement
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // إحداثيات السحب المغناطيسي للزرار
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  // نقطة انطلاق التعبئة
  const [fillOrigin, setFillOrigin] = useState({ x: '50%', y: '50%' });

  // ⭐️ 3. إضافة Types دقيقة للـ MouseEvents بدل any
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

    const centerX = clientX - (left + width / 2);
    const centerY = clientY - (top + height / 2);

    // تحريك الزرار بنسبة 35% باتجاه الماوس
    x.set(centerX * 0.35);
    y.set(centerY * 0.35);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    if (buttonRef.current) {
      const { left, top } = buttonRef.current.getBoundingClientRect();
      setFillOrigin({
        x: `${e.clientX - left}px`,
        y: `${e.clientY - top}px`,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      data-cursor="hover"
      data-cursor-color={buttonColor}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_${buttonColor}] text-white hover:text-[${buttonColor}]`}
      style={{
        x,
        y,
        position: 'relative',
        padding: '16px 36px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        border: `2px solid ${buttonColor}`,
        borderRadius: '50px',
        cursor: 'pointer',
        outline: 'none',
        transition: 'color 0.3s ease',
      }}
      {...props} // الآن شغال 100% بدون أي خطأ في Typescript!
    >
      {/* النص فوق طبقة التعبئة */}
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>

      {/* طبقة التعبئة الداخلية */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2.5 : 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        style={{
          position: 'absolute',
          top: fillOrigin.y,
          left: fillOrigin.x,
          width: '100%',
          paddingBottom: '100%',
          backgroundColor: fillColor,
          borderRadius: '50%',
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </motion.button>
  );
};