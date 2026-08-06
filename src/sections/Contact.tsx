import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MagneticButton } from '../components/Animation/MagneticButton';

const PROJECT_TYPES = ['SaaS Platform', 'E-Commerce', 'Landing Page', 'Full-Stack App'];
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
    const { t } = useTranslation();
    const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);

    const [quickStatus, setQuickStatus] = useState('idle'); // idle | sending | success | error
    const [generalStatus, setGeneralStatus] = useState('idle');

    const sendToWeb3Forms = async (formEl : HTMLFormElement, extraFields = {}) => {
        const formData = new FormData(formEl);
        formData.append('access_key', WEB3FORMS_KEY);
        Object.entries(extraFields).forEach(([key, value]) => {
            formData.append(key, value as string);
        });

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message || 'Submission failed');
    };

    const handleQuickSubmit = async (e : any) => {
        e.preventDefault();
        setQuickStatus('sending');
        try {
            await sendToWeb3Forms(e.target, { subject: 'New Quick Project Inquiry' });
            setQuickStatus('success');
            e.target.reset();
            setProjectType(PROJECT_TYPES[0]);
        } catch {
            setQuickStatus('error');
        }
    };

    const handleGeneralSubmit = async (e : any) => {
        e.preventDefault();
        setGeneralStatus('sending');
        try {
            await sendToWeb3Forms(e.target, { subject: 'New General Contact Message' });
            setGeneralStatus('success');
            e.target.reset();
        } catch {
            setGeneralStatus('error');
        }
    };

    const statusText = {
        idle: null,
        sending: null,
        success: 'message_sent ✓',
        error: 'transmission_failed — try again',
    };

    return (
        <section id="contact" className="relative z-10 py-20 overflow-hidden">
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
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                >
                    {/* زوايا HUD */}
                    <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary z-20" />
                    <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary z-20" />
                    <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary z-20" />
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary z-20" />

                    {/* شريط التيرمنال العلوي */}
                    <div dir='ltr' className="flex items-center justify-between px-5 py-3 border-b border-white/10">
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
                                {t('quickProjectTitle')}
                            </h3>
                            <p className="text-white/40 text-xs mb-6">
                                {t('quickProjectDesc')}
                            </p>

                            <form className="space-y-5" onSubmit={handleQuickSubmit}>
                                {/* الاسم */}
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        {t('nameInput', 'الاسم')}
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="your_name"
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors placeholder:text-white/20"
                                    />
                                </div>

                                {/* الايميل */}
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        {t('email')}
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@domain.com"
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors placeholder:text-white/20"
                                    />
                                </div>

                                {/* نوع المشروع - راديو بشكل chips */}
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-3">
                                        {t('projectType')}
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {PROJECT_TYPES.map((option) => {
                                            const isSelected = projectType === option;
                                            return (
                                                <label
                                                    key={option}
                                                    data-cursor="hover"
                                                    data-cursor-color="#DC143C"
                                                    className={`relative flex items-center gap-2 px-3 py-2.5 border cursor-pointer transition-all duration-300 ${
                                                        isSelected
                                                            ? 'border-primary bg-primary/10 shadow-[0_0_12px_-2px_var(--color-primary)]'
                                                            : 'border-white/10 hover:border-white/25'
                                                    }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="project_type"
                                                        value={option}
                                                        checked={isSelected}
                                                        onChange={() => setProjectType(option)}
                                                        className="sr-only"
                                                    />
                                                    <span
                                                        className={`shrink-0 w-3 h-3 rounded-full border flex items-center justify-center transition-colors ${
                                                            isSelected ? 'border-primary' : 'border-white/30'
                                                        }`}
                                                    >
                                                        {isSelected && (
                                                            <motion.span
                                                                layoutId="project-type-dot"
                                                                className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--color-primary)]"
                                                            />
                                                        )}
                                                    </span>
                                                    <span
                                                        className={`font-mono text-[11px] leading-tight ${
                                                            isSelected ? 'text-white' : 'text-white/50'
                                                        }`}
                                                    >
                                                        {option}
                                                    </span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* الميزانية - إنبت عادي */}
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        {t('projectBudjet')}
                                    </label>
                                    <input
                                        name="budget"
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="e.g. $1,500"
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors placeholder:text-white/20"
                                    />
                                </div>

                                {/* تفاصيل المشروع */}
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        {t('details')}
                                    </label>
                                    <textarea
                                        name="project_details"
                                        rows={3}
                                        placeholder="briefly_describe_your_project..."
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors resize-none placeholder:text-white/20"
                                    />
                                </div>

                                <MagneticButton
                                    type="submit"
                                    variant="solid"
                                    disabled={quickStatus === 'sending'}
                                    className="w-full mt-2"
                                >
                                    {quickStatus === 'sending' ? t('transmitting') : `${t('send')} →`}
                                </MagneticButton>

                                {statusText[quickStatus as keyof typeof statusText] && (
                                    <p
                                        className={`font-mono text-[11px] text-center ${
                                            quickStatus === 'success' ? 'text-primary' : 'text-red-400'
                                        }`}
                                    >
                                        {statusText[quickStatus as keyof typeof statusText]}
                                    </p>
                                )}
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

                            <form className="space-y-4" onSubmit={handleGeneralSubmit}>
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        {t('nameInput')}
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="your_name"
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors placeholder:text-white/20"
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        {t('email')}
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@domain.com"
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors placeholder:text-white/20"
                                    />
                                </div>
                                <div>
                                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">
                                        {t('message')}
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={3}
                                        placeholder="type_your_message..."
                                        className="w-full bg-white/3 border border-white/10 focus:border-primary px-4 py-3 text-white text-sm font-mono outline-none transition-colors resize-none placeholder:text-white/20"
                                    />
                                </div>
                                <MagneticButton
                                    type="submit"
                                    variant="solid"
                                    disabled={generalStatus === 'sending'}
                                    className="w-full mt-2"
                                >
                                    {generalStatus === 'sending' ? t('transmitting') : `${t('send')} →`}
                                </MagneticButton>

                                {statusText[generalStatus as keyof typeof statusText] && (
                                    <p
                                        className={`font-mono text-[11px] text-center ${
                                            generalStatus === 'success' ? 'text-primary' : 'text-red-400'
                                        }`}
                                    >
                                        {statusText[generalStatus as keyof typeof statusText]}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* فوتر الكارت - لينكات مباشرة */}
                    <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-5 border-t border-white/10">
                        {[
                            { label: 'email', href: 'mailto:aldhb176@gmail.com' },
                            { label: 'github', href: 'https://github.com/M0staafaAhmed' },
                            { label: 'linkedin', href: 'https://linkedin.com/in/m0sstafaahmed' },
                            { label: 'whatsapp', href: 'https://api.whatsapp.com/send/?phone=01229757587' },
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