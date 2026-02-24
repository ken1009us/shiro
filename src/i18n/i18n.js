import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ja from './ja.json';
import zhTW from './zh-TW.json';
import en from './en.json';

// Read saved language from localStorage
let savedLang = 'ja';
try {
  const stored = localStorage.getItem('shiro-quest');
  if (stored) {
    const parsed = JSON.parse(stored);
    if (parsed.language) savedLang = parsed.language;
  }
} catch { /* ignore */ }

i18n.use(initReactI18next).init({
  resources: {
    ja: { translation: ja },
    'zh-TW': { translation: zhTW },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});

export default i18n;
