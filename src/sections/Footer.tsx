import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const navLinks = [
    { id: 'hero', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'projects', label: 'projects' },
    { id: 'skills', label: 'skills' },
    { id: 'contact', label: 'contact' },
];

const socials = [
    { label: 'github', href: 'https://github.com/M0staafaAhmed' },
    { label: 'linkedin', href: 'https://linkedin.com/in/your-profile' },
    { label: 'email', href: 'mailto:you@example.com' },
];

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 bg-black border-t border-white/10 overflow-hidden">
            {/* توهج خفيف في الخلفية */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-primary blur-[120px] opacity-[0.06] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* شريط حالة النظام العلوي */}
                <div className="flex items-center justify-between py-4 border-b border-white/10 font-mono text-[10px] uppercase tracking-wider text-white/30">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span>system_status: available_for_work</span>
                    </div>
                    <span className="hidden sm:block">last_deploy: {year}</span>
                </div>

                {/* المحتوى الرئيسي */}
                <div className="grid md:grid-cols-3 gap-10 py-12">
                    {/* اللوجو والوصف */}
                    <div>
                        <a
                            href="#hero"
                            data-cursor="hover"
                            data-cursor-color="#fff"
                            className="text-lg font-bold tracking-tight text-white inline-block mb-3"
                        >
                            <span className="text-primary">{'<'}</span>MA<span className="text-primary">.</span>DEV
                            <span className="text-primary">{'>'}</span>
                        </a>
                        <p className="text-white/40 text-sm leading-6 max-w-xs">
                            {t(
                                'footerTagline',
                                'مطور فرونت اند بحول الأفكار لواجهات حقيقية تحس إنها حية.'
                            )}
                        </p>
                    </div>

                    {/* روابط التنقل */}
                    <div>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                            // navigation
                        </span>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        data-cursor="hover"
                                        data-cursor-color="#DC143C"
                                        className="text-white/50 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                                    >
                                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                            {'>'}
                                        </span>
                                        {t(link.label)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* السوشيال / التواصل */}
                    <div>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                            // connect
                        </span>
                        <ul className="space-y-3">
                            {socials.map((social) => (
                                <li key={social.label}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-cursor="hover"
                                        data-cursor-color="#DC143C"
                                        className="text-white/50 hover:text-white text-sm font-mono transition-colors duration-300"
                                    >
                                        [{social.label}]
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* الشريط السفلي */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/10">
                    <p className="text-white/30 font-mono text-[11px] uppercase tracking-wider">
                        © {year} MA.DEV — {t('allRightsReserved', 'كل الحقوق محفوظة')}
                    </p>

                    <motion.button
                        whileHover={{ y: -2 }}
                        onClick={scrollToTop}
                        data-cursor="hover"
                        data-cursor-color="#DC143C"
                        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/40 hover:text-primary transition-colors duration-300 group"
                    >
                        back_to_top
                        <span className="group-hover:-translate-y-1 transition-transform">↑</span>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}