import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { castles } from '../data/castles';
import { getCompletionPercent } from '../utils/helpers';

const languages = [
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

export default function Settings({ store }) {
  const { t, i18n } = useTranslation();
  const [showReset, setShowReset] = useState(false);

  const visitedCount = Object.keys(store.visited).length;
  const favCount = Object.keys(store.favorites).length;
  const pct = getCompletionPercent(store.visited);

  const handleLanguageChange = (code) => {
    store.setLanguage(code);
    i18n.changeLanguage(code);
  };

  const handleReset = () => {
    store.resetData();
    setShowReset(false);
  };

  return (
    <motion.div
      key="settings"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pt-6 pb-4"
    >
      <h1 className="text-lg font-serif font-bold mb-6">{t('settings.title')}</h1>

      {/* Stats card */}
      <div className="rounded-2xl bg-wakatake/5 dark:bg-wakatake/10 border border-wakatake/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-wakatake/10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="#2d4a3e" strokeWidth={1.5}>
              <path d="M4,20 L4,12 L8,8 L12,5 L16,8 L20,12 L20,20Z" />
              <rect x="9" y="14" width="6" height="6" rx="0.5" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-2xl font-bold font-serif">{pct}%</div>
            <div className="text-xs text-nibi dark:text-[#808080]">
              {visitedCount} / {castles.length} {t('map.castles')} · {favCount} {t('castle.favorite')}
            </div>
          </div>
        </div>
        <div className="mt-3 h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-wakatake rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Settings sections */}
      <div className="space-y-4">
        {/* Dark mode */}
        <div className="rounded-2xl bg-white dark:bg-[#2a2a2a] border border-black/5 dark:border-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sumi/5 dark:bg-white/5 flex items-center justify-center">
                {store.darkMode ? (
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium">{t('settings.darkMode')}</span>
            </div>
            <button
              onClick={() => store.setDarkMode(!store.darkMode)}
              className={`relative w-12 h-7 rounded-full transition-colors duration-200 ${
                store.darkMode ? 'bg-wakatake' : 'bg-black/10 dark:bg-white/10'
              }`}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm"
                animate={{ left: store.darkMode ? 26 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            </button>
          </div>
        </div>

        {/* Language picker */}
        <div className="rounded-2xl bg-white dark:bg-[#2a2a2a] border border-black/5 dark:border-white/5 p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-sumi/5 dark:bg-white/5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10A15 15 0 0112 2z" />
              </svg>
            </div>
            <span className="text-sm font-medium">{t('settings.language')}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {languages.map((lang) => {
              const isActive = i18n.language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`py-3 rounded-xl text-sm font-medium transition-all border ${
                    isActive
                      ? 'bg-wakatake text-white border-wakatake shadow-sm'
                      : 'bg-transparent border-black/5 dark:border-white/5 text-nibi hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="text-base mb-0.5">{lang.flag}</div>
                  <div className="text-xs">{lang.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Data management */}
        <div className="rounded-2xl bg-white dark:bg-[#2a2a2a] border border-black/5 dark:border-white/5 p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-beni/5 dark:bg-beni/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#c53d43" strokeWidth={1.5}>
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </div>
            <span className="text-sm font-medium">{t('settings.resetData')}</span>
          </div>

          <AnimatePresence mode="wait">
            {!showReset ? (
              <motion.button
                key="trigger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowReset(true)}
                className="w-full py-2.5 rounded-xl text-sm text-beni border border-beni/15 hover:bg-beni/5 transition-colors"
              >
                {t('settings.resetData')}
              </motion.button>
            ) : (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                <p className="text-sm text-nibi dark:text-[#808080] leading-relaxed">
                  {t('settings.resetConfirm')}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2.5 rounded-xl bg-beni text-white text-sm font-medium"
                  >
                    {t('settings.reset')}
                  </button>
                  <button
                    onClick={() => setShowReset(false)}
                    className="flex-1 py-2.5 rounded-xl border border-black/5 dark:border-white/5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {t('settings.cancel')}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* App version */}
      <div className="text-center mt-8 text-[10px] text-nibi/40">
        ShiroQuest v1.0.0
      </div>
    </motion.div>
  );
}
