import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MagneticButton } from '../components/Animation/MagneticButton';

export default function Contact() {
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // اربطها بالـ backend/service بتاعك
    };

    return (
        <section id="contact" className="relative z-10 bg-black py-20 overflow-hidden">
            {/* توهج خلفي */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary blur-[140px] opacity-[0.07] pointer-events-none" />

            <motion.div
                className="text-center mb-10 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: 'easeIn' }}
            >
                <h2 className="text-3xl md:text-5xl text-primary font-bold uppercase [text-shadow:0_0_20px_var(--color-primary),0_0_40px_var(--color-primary)]">
                    <span className="text-white">{'<'}</span>
                    {t('contact')}
                    <span className="text-white">{'>'}</span>
                </h2> 
            </motion.div>

            <div className="container mx-auto px-3 relative z-10">
                <motion.div
                    className="relative max-w-5xl mx-auto bg-[#0A0A0A] border border-white/10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                >
                    {/* زوايا HUD */}
                    <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary z-20" />
                    <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary z-20" />
                    <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary z-20" />
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary z-20" />

                    {/* شريط التيرمنال العلوي */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                                transmission_control_center
                            </span>
                        </div>
                        <span className="text-[10px] font-mono text-white/30">status: online</span>
                    </div>

                    {/* خط سكانر */}
                    <motion.div
                        className="absolute left-0 right-0 h-px bg-primary/60 shadow-[0_0_10px_2px_var(--color-primary)] pointer-events-none z-10"
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />

                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {/* قناة أولوية - مشروع فوري */}
                        <div className="p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
                                    channel_01 // priority_transmission
                                </span>
                            </div>
                            <h3 className="text-white font-bold uppercase text-lg mb-1">
                                {t('quickProjectTitle', 'مشروع فوري')}
                            </h3>
                            <p className="text-white/40 text-xs mb-6">
                                {t('quickProjectDesc', 'عندك مشروع جاهز ومحتاج تبدأ فورًا؟')}
                            </p>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        project_type
                                    </label>
                                    <select className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors">
                                        <option className='text-black'>SaaS Platform</option>
                                        <option className='text-black'>E-Commerce</option>
                                        <option className='text-black'>Landing Page</option>
                                        <option className='text-black'>Full-Stack App</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        budget_range
                                    </label>
                                    <select className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors">
                                        <option className='text-black'>$500 - $1,500</option>
                                        <option className='text-black'>$1,500 - $5,000</option>
                                        <option className='text-black'>$5,000+</option>
                                    </select>
                                </div>
                                <MagneticButton
                                    type="submit"
                                    variant="solid"
                                    className="w-full mt-2"
                                >
                                    initialize_request →
                                </MagneticButton>
                            </form>
                        </div>

                        {/* قناة عامة - تواصل بسيط */}
                        <div className="p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                                    channel_02 // standard_transmission
                                </span>
                            </div>
                            <h3 className="text-white font-bold uppercase text-lg mb-1">
                                {t('generalContactTitle', 'تواصل عام')}
                            </h3>
                            <p className="text-white/40 text-xs mb-6">
                                {t('generalContactDesc', 'عايز تسأل أو تكلمني في أي حاجة؟')}
                            </p>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        identifier
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="your_name"
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors placeholder:text-white/20"
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@domain.com"
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors placeholder:text-white/20"
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        message
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="type_your_message..."
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors resize-none placeholder:text-white/20"
                                    />
                                </div>
                                <MagneticButton
                                    type="submit"
                                    variant="solid"
                                    className="w-full mt-2" 
                                >
                                    send_transmission →
                                </MagneticButton>
                            </form>
                        </div>
                    </div>

                    {/* فوتر الكارت - لينكات مباشرة */}
                    <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-5 border-t border-white/10">
                        {[
                            { label: 'email', href: 'mailto:aldhb176@gmail.com' },
                            { label: 'github', href: 'https://github.com/M0staafaAhmed' },
                            { label: 'linkedin', href: 'https://linkedin.com/in/your-profile' },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor="hover"
                                data-cursor-color="#DC143C"
                                className="font-mono text-xs uppercase tracking-wider text-white/50 hover:text-primary transition-colors"
                            >
                                [{link.label}]
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}