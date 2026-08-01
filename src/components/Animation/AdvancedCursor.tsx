import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const SmoothCursor = ({ defaultColor = '#FF3131', size = 32, color }: { defaultColor?: string; size?: number; color?: string }) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [cursorColor, setCursorColor] = useState(color ?? defaultColor);
  const [isHovered, setIsHovered] = useState(false);

  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e : any) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const colorTarget = e.target.closest('[data-cursor-color]');

      const hoverTarget = e.target.closest('[data-cursor]');



      if (colorTarget) {
        const targetColor = colorTarget.getAttribute('data-cursor-color');
        setCursorColor(targetColor ?? color ?? defaultColor);
        
      }

      if(hoverTarget){
        setIsHovered(true);
      }else{
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, defaultColor, color]);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-9000 rounded-full"
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