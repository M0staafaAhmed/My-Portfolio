import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { AnimatePresence, motion } from 'motion/react';

const navItems = [
    { id: 'about' },
    { id: 'projects' },
    { id: 'skills' },
    { id: 'contact' },
];

export default function MobileNavbar() {
    const { t } = useTranslation();
    const activeSection = useScrollSpy(navItems.map((item) => item.id));
    const [open, setOpen] = useState(false)
    return (
        <>
            <button className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)} title='open mobile menu'>
                <div className="w-8 h-6 space-y-1">
                    <div className={`w-full h-1 bg-white rounded-2xl transition-all duration-800 ${open ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-full h-1 bg-white rounded-2xl mt-1 transition-all duration-800 ${open ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`w-full h-1 bg-white rounded-2xl mt-1 transition-all duration-800 ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>
            </button>



            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}

                        className="w-full absolute top-full left-0 rounded-2xl border border-primary/30 bg-black/80 shadow-[0_0_25px_-5px_var(--color-primary)]"
                    >
                        <ul className={`flex flex-col gap-4 p-4`}>
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;

                                return (
                                    <li key={item.id}>
                                        <a
                                            onClick={() => setOpen(false)}
                                            href={`#${item.id}`}
                                            className={`transition-colors duration-300 hover:text-primary group flex items-center gap-2 ${isActive ? "text-primary" : "text-white"}`}
                                        >
                                            <span className={`transition-colors duration-300 ${isActive ? "text-primary" : "text-gray-700 group-hover:text-primary"}`}>#</span>
                                            {t(item.id)}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
