import { useTranslation } from "react-i18next";
import { MagneticButton } from "../Animation/MagneticButton";
import { useScrollSpy } from "../../hooks/useScrollSpy";


const navItems = [
    { id: 'about'},
    { id: 'projects'},
    { id: 'skills'},
    { id: 'contact'},
];

export default function Navbar() {
    const { t } = useTranslation();

    const activeSection = useScrollSpy(navItems.map((item) => item.id));

    const handleDownloadCv = () => {
        const link = document.createElement("a");
        link.href = "/Mustafa_Ahmed_CV_Frontend.pdf"
        link.download = "Mustafa_Ahmed_CV_Frontent_react.js.pdf"
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    return (
        <>
            <div className="fixed inset-0 z-51 h-fit pt-4 px-3">
                <nav className="max-w-4xl mx-auto mt-6 flex items-center justify-between px-6 py-3 rounded-4xl border border-primary/30 bg-neutral/5 backdrop-blur-xl shadow-[0_0_25px_-5px_var(--color-primary)]">

                    {/* Logo */}
                    <a href="#hero" className="text-lg font-bold tracking-tight text-white" data-cursor="hover" data-cursor-color={"#fff"}>
                        <span className="text-primary" data-cursor="hover" data-cursor-color={"#dc143c"}>{"<"}</span>MA<span className="text-primary" data-cursor="hover" data-cursor-color={"#dc143c"}>.</span>DEV<span className="text-primary" data-cursor="hover" data-cursor-color={"#dc143c"}>{">"}</span>
                    </a>

                    {/* Links */}
                    <ul className="hidden md:flex items-center gap-8 text-sm">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <li key={item.id}>
                                    <a
                                        data-cursor="hover"
                                        data-cursor-color={"#fff"} 
                                        href={`#${item.id}`}
                                        className={`relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:inset-s-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isActive ? "after:w-full text-white" : "w-0 text-neutral/80"}`}>
                                        {t(item.id)}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA */}

                    <MagneticButton
                        data-cursor-color={"#dc143c"}
                        data-cursor="hover"
                        className="hidden md:block px-5 py-2 text-sm font-semibold text-white rounded-4xl border border-primary bg-primary/10 transition-all duration-300"
                        title="dowload Cv"
                        onClick={handleDownloadCv}
                    >
                        {t("resume")}
                    </MagneticButton>

                    {/* Mobile toggle */}
                    <button className="md:hidden text-white">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </>
    );
}
