import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ja', label: '日本語' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'en', label: 'English' },
];

export default function Settings({ store }) {
  const { t, i18n } = useTranslation();
  const [showReset, setShowReset] = useState(false);

  const handleLanguageChange = (code) => {
    store.setLanguage(code);
    i18n.changeLanguage(code);
  };

  const handleReset = () => {
    store.resetData();
    setShowReset(false);
  };

  const handleExport = () => {
    const data = {
      visited: store.visited,
      favorites: store.favorites,
      achievements: store.achievements,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const today = new Date().toISOString().slice(0, 10);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shiroquest-backup-${today}.json`;
    a.click();
    URL.revokeObjectURL(url);
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
                  className={`py-2.5 rounded-xl text-sm font-medium transition-all border ${
                    isActive
                      ? 'bg-wakatake text-white border-wakatake shadow-sm'
                      : 'bg-transparent border-black/5 dark:border-white/5 text-nibi hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {lang.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Export data */}
        <div className="rounded-2xl bg-white dark:bg-[#2a2a2a] border border-black/5 dark:border-white/5 p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-sumi/5 dark:bg-white/5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">{t('settings.exportData')}</div>
              <div className="text-[10px] text-nibi dark:text-[#808080] mt-0.5">{t('settings.exportDesc')}</div>
            </div>
          </div>
          <button
            onClick={handleExport}
            className="w-full py-2.5 rounded-xl text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {t('settings.exportData')}
          </button>
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
