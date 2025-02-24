import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import gr from "../locales/gr.json";
import it from "../locales/it.json";
import es from "../locales/es.json";
import ar from "../locales/ar.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    gr: { translation: gr },
    it: { translation: it },
    es: { translation: es },
    ar: { translation: ar },
  },
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18next;
