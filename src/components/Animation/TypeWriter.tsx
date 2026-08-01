import  { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';

// كومبوننت المؤشر الجانبي (Blinking Cursor)
const CursorBlinker = () => {
    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'reverse' as const,
                ease: 'linear',
            },
        },
    };

    return (
        <motion.span
            variants={cursorVariants as any}
            animate="blinking"
            className="inline-block w-0.5 h-[1em] bg-current align-middle ml-1"
        />
    );
};

interface TypewriterProps {
    text: string;
    duration?: number; // مدة الكتابة بالثواني
    delay?: number;    // تأخير البدء بالثواني
}

export const TypewriterText = ({
    text,
    duration = 2,
    delay = 0,
}: TypewriterProps) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
    
    // 1. القيمة الافتراضية false تماماً عشان الكارسور يكون مخفي خلال الـ delay
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        count.set(0);
        setShowCursor(false); // التأكد من إخفائه في حال تغير النص

        const controls = animate(count, text.length, {
            duration: duration,
            delay: delay,
            ease: 'linear',
            // 2. أول ما يبدأ الـ count يتغير بعد الـ delay
            onUpdate: (latest) => {
                // يظهر الكارسور أول ما يبدأ يتكتب أو القيمة تزيد عن الصفر
                if (latest > 0 && latest < text.length) {
                    setShowCursor(true);
                }
            },
            // 3. لما يخلص كتابة بالكامل يختفي
            onComplete: () => {
                setShowCursor(false);
            },
        });

        return controls.stop;
    }, [count, text, duration, delay]);

    return (
        <span className="inline-flex items-center">
            <motion.span>{displayText}</motion.span>
            {showCursor && <CursorBlinker />}
        </span>
    );
};