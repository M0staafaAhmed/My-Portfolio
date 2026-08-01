import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { MagneticButton } from '../Animation/MagneticButton';

interface ProjectCardProps {
    index: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    repoUrl: string;
    demoUrl: string;
}

export const ProjectCard = ({
    index,
    title,
    description,
    image,
    tags,
    repoUrl,
    demoUrl,
}: ProjectCardProps) => {
    // ... نفس الكود زي ما هو لغاية جزء المحتوى
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add('custom-cursor-active');
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative group cursor-pointer! bg-[#0A0A0A]"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* رقم المشروع كواترمارك عملاق ورا كل حاجة */}
            <span
                className="absolute -top-6 -right-2 text-[9rem] font-black text-white/3 select-none pointer-events-none leading-none"
                style={{ fontFamily: 'monospace' }}
            >
                {String(index).padStart(2, '0')}
            </span>

            {/* إطار HUD - زوايا مكسورة بدل بوردر كامل */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12" />

            {/* خط سكان بيتحرك لما تعمل هوفر */}
            <motion.div
                className="absolute left-0 right-0 h-px bg-primary shadow-[0_0_10px_2px_#DC143C] z-30 pointer-events-none"
                initial={{ top: '0%', opacity: 0 }}
                animate={
                    isHovered
                        ? { top: ['0%', '100%'], opacity: [0, 1, 1, 0] }
                        : { opacity: 0 }
                }
                transition={{ duration: 1.6, repeat: isHovered ? Infinity : 0, ease: 'linear' }}
            />

            {/* الصورة - duotone أحمر/أسود بدل ألوانها الطبيعية */}
            <div className="relative h-50 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain grayscale contrast-125 transition-transform duration-700 group-hover:scale-110"
                    style={{ mixBlendMode: 'luminosity' }}
                />
                {/* طبقة أحمر فوق الصورة */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-primary/20 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/10 transition-colors duration-500" />

                {/* شرائط noise/scanlines خفيفة */}
                <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px)',
                    }}
                />
            </div>

            {/* المحتوى */}
            <div className="relative z-10 p-6 -mt-16">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#DC143C] animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
                        module_{String(index).padStart(2, '0')}
                    </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-[#F5F5F5] mb-2 tracking-tight relative w-fit">
                    <span className="relative z-10">{title}</span>
                    {/* نسخة glitch حمراء وراء العنوان بتتحرك عند الهوفر */}
                    <span
                        aria-hidden
                        className="absolute inset-0 text-primary transition-transform duration-300 group-hover:translate-x-0.75 group-hover:-translate-y-0.5 -z-10"
                    >
                        {title}
                    </span>
                </h3>

                <p className="text-white/50 text-sm leading-6 mb-5 line-clamp-4">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map((tag, index) => (
                        <motion.div
                            key={tag}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeIn",
                                delay: 0.2 * index
                            }}
                        >
                            <MagneticButton
                                as='span'
                                data-cursor="hover"
                                key={tag}
                                className="text-[10px] font-mono uppercase tracking-wider text-white/60! hover:text-white! border border-white/10 px-2.5 py-1 group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300"
                            >
                                {tag}
                            </MagneticButton>
                        </motion.div>
                    ))}
                </div>

                <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest">

                    <a href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        data-cursor="hover"
                        data-cursor-color="#DC143C"
                        className="group/link flex items-center gap-1.5 text-white/60 hover:text-primary transition-colors duration-300"
                    >
                        <FaGithub className='text-lg' />
                        <span className="relative">
                            repo
                            <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary group-hover/link:w-full transition-all duration-300" />
                        </span>
                    </a>

                    <span className="w-1 h-1 rounded-full bg-white/20" />


                    <a href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        data-cursor="hover"
                        data-cursor-color="#fff"
                        className="group/link flex items-center gap-1.5 text-primary hover:text-white transition-colors duration-300"
                    >
                        <FaExternalLinkAlt />
                        <span>live_demo</span>
                        <motion.span
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            →
                        </motion.span>
                    </a>
                </div>
            </div>

            {/* توهج أحمر تحت الكارت كله عند الهوفر */}
            <div className="absolute -inset-px border border-primary/0 group-hover:border-primary/40 transition-colors duration-500 pointer-events-none z-20" />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
        </motion.div>
    );
};