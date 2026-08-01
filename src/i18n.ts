import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locale/en.json";
import translationAR from "./locale/ar.json";

const resources = {
  en: { translation: translationEN.translation },
  ar: { translation: translationAR.translation }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // اللغة الافتراضية لو حصل مشكلة
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;