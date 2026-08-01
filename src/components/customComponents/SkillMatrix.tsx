import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const skillCategories = [
    {
        key: 'frontend',
        label: 'Frontend',
        skills: [
            { name: 'React', level: 5 },
            { name: 'Next.js', level: 4 },
            { name: 'TypeScript', level: 4 },
            { name: 'Tailwind CSS', level: 5 },
            { name: 'JavaScript', level: 5 },
            { name: 'HTML5', level: 5 },
            { name: 'CSS3', level: 5 },
            { name: 'Bootstrap', level: 5 },
        ],
    },
    {
        key: 'state',
        label: 'State_&_forms',
        skills: [
            { name: 'Redux Toolkit', level: 4 },
            { name: 'React Hook Form', level: 4 },
            { name: 'Zod', level: 4 },
        ],
    },
    {
        key: 'backend',
        label: 'Backend',
        skills: [
            { name: 'Node.js', level: 3 },
            { name: 'Express', level: 3 },
            { name: 'MySQL', level: 3 },
        ],
    },
    {
        key: 'tools',
        label: 'Tools',
        skills: [
            { name: 'Git / GitHub', level: 5 },
            { name: 'Framer Motion', level: 4 },
        ],
    },
    {
        key: 'programming',
        label: 'Programming',
        skills: [
            { name: 'c++', level: 4 },
            { name: 'c#', level: 3 },
        ],
    },
];

const BARS = 5;

function SignalBars({ level, active } : {level : number, active : boolean}) {
    return (
        <div className="flex items-end gap-0.75 h-5">
            {Array.from({ length: BARS }).map((_, i) => (
                <motion.span
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: active && i < level ? 1 : 0.15 }}
                    transition={{ duration: 0.4, delay: active ? i * 0.06 : 0 }}
                    className="w-1.25 origin-bottom rounded-[1px]"
                    style={{
                        height: `${8 + i * 3}px`,
                        backgroundColor: i < level ? '#DC143C' : 'rgba(255,255,255,0.12)',
                        boxShadow: active && i < level ? '0 0 6px #DC143C' : 'none',
                    }}
                />
            ))}
        </div>
    );
}

export const SkillMatrix = () => {
    const [activeTab, setActiveTab] = useState(skillCategories[0].key);
    const activeCategory = skillCategories.find((c) => c.key === activeTab);

    return (
        <div dir='ltr' className="relative px-6 bg-[#0A0A0A] overflow-hidden">

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute -inset-10 bg-primary blur-[100px] opacity-[0.08] -z-10" />

                <div className="relative bg-[#0A0A0A] border border-white/10">
                    <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
                    <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
                    <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                                root@dev:~/skills
                            </span>
                        </div>
                        <span className="text-[10px] font-mono text-white/30">
                            [{skillCategories.findIndex((c) => c.key === activeTab) + 1}/{skillCategories.length}]
                        </span>
                    </div>

                    <div className="flex flex-wrap border-b border-white/10">
                        {skillCategories.map((cat) => (
                            <button
                                key={cat.key}
                                data-cursor="hover"
                                data-cursor-color="#fff"
                                onClick={() => setActiveTab(cat.key)}
                                className={`relative px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${activeTab === cat.key ? 'text-primary' : 'text-white/40 hover:text-white/70'
                                    }`}
                            >
                                {activeTab === cat.key && '> '}
                                {cat.label}
                                {activeTab === cat.key && (
                                    <motion.span
                                        layoutId="tab-underline"
                                        className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary shadow-[0_0_8px_var(--primary-color)]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-6 md:p-8 min-h-65">
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -8 }}
                                transition={{ duration: 0.25, delay: 1 }}
                                className="space-y-4"
                            >
                                {activeCategory?.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                        className="flex items-center justify-between gap-4 py-2 border-b border-white/6 last:border-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-primary font-mono text-xs">$</span>
                                            <span className="text-white font-mono text-sm">{skill.name}</span>
                                        </div>
                                        <SignalBars level={skill.level} active={true} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* خط سكانر بيتحرك على طول الكارت */}
                    <motion.div
                        className="absolute left-0 right-0 h-px bg-primary/60 shadow-[0_0_10px_2px_var(--primary-color)] pointer-events-none"
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                </div>
            </div>
        </div>
    );
};