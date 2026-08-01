import { TypewriterText } from '../components/Animation/TypeWriter'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react';
import { MagneticButton } from '../components/Animation/MagneticButton';
import { FaArrowDown } from "react-icons/fa";
import { AvailabilityBadge } from '../components/customComponents/AvailabilityBadge';


export default function Hero() {
    const { t } = useTranslation();
    const primaryColor = "#dc143c";

    return (
        <>
            <div className="container mx-auto px-3 relative z-10 h-screen flex items-center justify-center" id='hero'>
                <div className="text-center space-y-3 relative">
                    {/* توهج خلفي خفيف حوالين النص كله */}
                    <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-primary rounded-full scale-75" />

                    {/* السطر الأول - تحية، أصغر شوية وبمسافة حروف واسعة */}
                    <p
                        className="text-white/80 uppercase text-lg md:text-xl font-semibold tracking-[0.3em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                        data-cursor-color={"#fff"}
                        data-cursor="hover"
                    >
                        <TypewriterText text={`${t("hello")} 👋`} duration={1} />
                    </p>

                    {/* السطر الثاني - الاسم، أكبر عنصر في الهيرو */}
                    <div className="flex justify-center flex-wrap gap-3 items-center text-4xl md:text-6xl font-bold uppercase">
                        <span
                            className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                            data-cursor-color={"#fff"}
                            data-cursor="hover"
                        >
                            <TypewriterText text={`${t("im")}`} duration={0.5} delay={1} />
                        </span>
                        <h2
                            className="text-primary [text-shadow:0_0_30px_var(--color-primary),0_0_60px_var(--color-primary)]"
                            data-cursor-color={primaryColor}
                            data-cursor="hover"
                        >
                            <TypewriterText text={t("name")} duration={2} delay={1.5} />
                        </h2>
                    </div>

                    {/* فاصل رفيع متوهج بدل ما نكرر "im" تاني */}
                    <div className="flex justify-center items-center gap-3 py-1">
                        <span className="h-px w-10 bg-linear-to-r from-transparent to-primary/60" />
                        <span className="material-symbols-outlined text-primary text-xl drop-shadow-[0_0_10px_var(--color-primary)]">
                            code
                        </span>
                        <span className="h-px w-10 bg-linear-to-l from-transparent to-primary/60" />
                    </div>

                    {/* السطر الثالث - المسمى الوظيفي */}
                    <h1
                        className="text-3xl md:text-5xl text-primary font-bold uppercase [text-shadow:0_0_20px_var(--color-primary),0_0_40px_var(--color-primary)]"
                        data-cursor-color={primaryColor}
                        data-cursor="hover"
                    >
                        <TypewriterText text={t("job")} duration={2} delay={3.2} />
                    </h1>

                    {/* السطر الرابع - التاجلاين، أصغر وأخف وزن عشان يبان ثانوي */}
                    <p className="text-base md:text-lg text-white/70 font-medium uppercase tracking-wider max-w-xl mx-auto pt-2">
                        <TypewriterText
                            text={t("sum")}
                            duration={3}
                            delay={5.2}
                        />
                    </p>
                    <AvailabilityBadge text={t("available")} />

                </div>
                <motion.div
                    className="absolute bottom-15 left-1/2 -translate-x-1/2 text-white"
                    animate={{
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 5,
                    }}

                >
                    <MagneticButton
                        className='flex items-center justify-center size-10 rounded-full animate-bounce'
                        data-cursor-color={primaryColor}
                        data-cursor="hover"
                        href='#about'
                    >
                        <FaArrowDown />
                    </MagneticButton>
                </motion.div>

            </div>
        </>
    )
}
