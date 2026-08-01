import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

type MagneticAs = 'button' | 'a' | 'span';

interface MagneticButtonOwnProps {
  children: React.ReactNode;
  className?: string;
  buttonColor?: string;
  fillColor?: string;
  variant?: any; // 💡 يسمح بأي variant
  size?: any;    // 💡 يسمح بأي size
  style?: any;   // 💡 يحل مشكلة تعارض الـ style كـ Function أو Object
  as?: MagneticAs;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

// 1. استبدال HTMLAttributes بـ ButtonHTMLAttributes
type MagneticButtonProps = MagneticButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MagneticButtonOwnProps>;

export const MagneticButton = ({
  children,
  onClick,
  className = '',
  buttonColor = '#dc143c',
  fillColor = '#dc143c',
  variant = 'solid',
  as,
  href,
  disabled = false,
  ...props
}: MagneticButtonProps) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [fillOrigin, setFillOrigin] = useState({ x: '50%', y: '50%' });

  // لو محددتش "as" صراحة: فيه href يبقى لينك <a>، غير كده زرار <button>
  const resolvedAs: MagneticAs = as ?? (href ? 'a' : 'button');
  const isChip = variant === 'chip';

  // motion.button / motion.a / motion.span جاهزين من المكتبة نفسها
  const MotionTag = motion[resolvedAs] as React.ElementType;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    setIsHovered(true);
    const target = elementRef.current;
    if (target) {
      const { left, top } = target.getBoundingClientRect();
      setFillOrigin({
        x: `${e.clientX - left}px`,
        y: `${e.clientY - top}px`,
      });
    }
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setIsHovered(false);
  };

  return (
    <MotionTag
      ref={elementRef}
      href={resolvedAs === 'a' ? href : undefined}
      data-cursor-color={buttonColor}
      data-cursor={disabled ? undefined : 'hover'}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} bg-transparent relative overflow-hidden inline-flex items-center justify-center hover:shadow-lg transition-all duration-300`}
      style={{
        color: isHovered ? '#ffffff' : buttonColor,
        border: `${isChip ? '1px' : '2px'} solid ${isChip && !isHovered ? `${buttonColor}4D` : buttonColor
          }`,
        boxShadow: isHovered ? `0 0 20px 0 ${fillColor}` : undefined,
      }}
      {...props}
    >
      <span className="relative z-2">{children}</span>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2.5 : 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="absolute w-full pb-[100%] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-1"
        style={{
          top: fillOrigin.y,
          left: fillOrigin.x,
          backgroundColor: fillColor,
        }}
      />
    </MotionTag>
  );
};