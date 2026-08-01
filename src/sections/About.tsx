import { useTranslation } from "react-i18next";
import { MagneticButton } from "../components/Animation/MagneticButton";
import { motion } from "motion/react";

export default function About() {
    const { t } = useTranslation();
    return (
        <>
            <section id="about" className="relative z-10 bg-slate-950 py-20">
                <motion.div
                    className="text-center mb-16"
                    initial={{
                        opacity: 0,
                        y: 50,
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
                    }}
                >
                    <h2 className="text-3xl md:text-5xl text-primary font-bold uppercase [text-shadow:0_0_20px_var(--color-primary),0_0_40px_var(--color-primary)]">
                        <span className="text-white">{"<"}</span>
                        {t("about")}
                        <span className="text-white">{">"}</span>
                    </h2>
                </motion.div>

                <div className="container mx-auto px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">
                    {/* عمود البايو */}
                    <div className="space-y-6">
                        <span className="inline-block text-primary font-mono text-xs uppercase tracking-[0.3em]">
              // {t("whoami")}
                        </span>

                        <motion.p
                            className="text-white/80 text-base leading-8"
                            initial={{
                                opacity: 0,
                                y: 50,
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
                            }}
                        >
                            {t("desc1")}
                        </motion.p>

                        <motion.p
                            className="text-white/60 text-sm leading-7"
                            initial={{
                                opacity: 0,
                                y: 50,
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
                            }}
                        >
                            {t("desc2")}
                        </motion.p>

                        {/* شرائح سريعة بدل فقرة طويلة تالتة */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "Frontend Developer",
                                "React / Next.js",
                                "Freelance • Egypt",
                            ].map((chip, index) => (
                                <motion.div
                                    key={chip}
                                    initial={{
                                        opacity: 0,
                                        y: 50,
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
                                        as="span"
                                        data-cursor="hover"
                                        className="text-xs font-mono text-primary/90 border border-primary/30 rounded-full px-3 py-1.5 hover:border-primary hover:bg-primary/10 transition-colors"
                                    >
                                        {chip}
                                    </MagneticButton>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* عمود الكارت - Terminal / Code Editor style */}
                    <div className="relative group" dir="ltr">
                        <div className="absolute -inset-0.5 bg-primary/30 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />

                        <motion.div
                            className="relative bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                            initial={{
                                opacity: 0,
                                y: 50,
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
                                duration: 2,
                                ease: "easeIn",
                            }}
                        >
                            {/* شريط علوي زي نافذة الكود */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="text-white/40 text-xs font-mono ms-3">
                                    education.ts
                                </span>
                            </div>

                            <div className="p-6 font-mono text-sm leading-7">
                                <p>
                                    <span className="text-purple-400">const</span>{" "}
                                    <span className="text-sky-300">education</span> = {"{"}
                                </p>
                                <p className="ps-6">
                                    <span className="text-red-300">faculty</span>:{" "}
                                    <span className="text-emerald-400">
                                        "Faculty of Computers & Information"
                                    </span>
                                    ,
                                </p>
                                <p className="ps-6">
                                    <span className="text-red-300">grade</span>:{" "}
                                    <span className="text-emerald-400">"Good"</span>,
                                </p>
                                <p className="ps-6 flex items-center gap-2">
                                    <span className="text-red-300">gpa</span>:{" "}
                                    <span className="text-primary font-bold text-lg [text-shadow:0_0_15px_var(--color-primary)]">
                                        2.88
                                    </span>
                                    <span className="text-white/40">/ 4.0,</span>
                                </p>
                                <p className="ps-6">
                                    <span className="text-red-300">status</span>:{" "}
                                    <span className="text-emerald-400">"Graduated"</span>,
                                </p>
                                <p>{"}"}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
