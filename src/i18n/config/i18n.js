import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: require('../locales/en/translations.json'),
    },
    ar: {
        translation: require('../locales/ar/translations.json'),
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: 'en',
        resources,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;