import i18n, { type Resource } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar";
import en from "./locales/en";

export const defaultNS = "common";

export const supportedLngs = ["en", "ar"] as const;
export const fallbackLng = supportedLngs[0];

const resources = {
  en,
  ar,
} satisfies Resource;

const namespaces = Object.keys(en);

if (!i18n.isInitialized) {
  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: import.meta.env.DEV,
      fallbackLng,
      supportedLngs: Array.from(supportedLngs),
      defaultNS,
      ns: namespaces,
      resources,
      detection: {
        order: ["querystring", "localStorage", "navigator"],
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
