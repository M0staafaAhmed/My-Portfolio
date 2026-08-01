import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MagneticButton } from "../Animation/MagneticButton";

function SwitchLang() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        document.dir = i18n.language === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div className={`fixed bottom-0 m-10 z-10 ${i18n.language === "ar" ? "left-0" : "right-0"}`}>
            <MagneticButton
                data-cursor-color={"#dc143c"}
                data-cursor="hover"
                className="flex items-center justify-center gap-1 size-10 md:size-14 text-xs md:text-sm font-bold text-white rounded-xl border border-primary/60 bg-neutral/5 backdrop-blur-xl hover:bg-primary hover:border-primary hover:shadow-[0_0_25px_-4px_var(--color-primary)] transition-all duration-300"
                onClick={toggleLanguage}
            >
                <span className="text-primary group-hover:text-white transition-colors duration-300">‹</span>
                {i18n.language === "ar" ? "EN" : "AR"}
                <span className="text-primary group-hover:text-white transition-colors duration-300">›</span>
            </MagneticButton>
        </div>
    );
}

export default SwitchLang;
