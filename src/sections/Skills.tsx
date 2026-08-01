import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SkillMatrix } from '../components/customComponents/SkillMatrix';

export default function Skills() {
    const { t } = useTranslation();
    return (
        <>
            <section id='skills' className="relative z-10 bg-black py-20">
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
                        {t("skills")}
                        <span className="text-white">{">"}</span>
                    </h2>
                </motion.div>

                <motion.div
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
                    <SkillMatrix />
                </motion.div>
            </section>
        </>
    )
}
