import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SakuraAnimation from './SakuraAnimation';
import { getLocalizedText } from '../utils/helpers';

export default function Achievement({ achievement, onDismiss }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const regionName = getLocalizedText(achievement.region.name, lang);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onDismiss}
    >
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Sakura petals */}
      <SakuraAnimation />

      {/* Achievement content */}
      <motion.div
        className="relative text-center z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
      >
        {/* Main calligraphy */}
        <motion.div
          className="font-brush text-6xl text-sakura mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t('achievement.title')}
        </motion.div>

        {/* Region name */}
        <motion.div
          className="text-xl font-serif text-white/90 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t('achievement.regionComplete', { region: regionName })}
        </motion.div>

        {/* Gold seal */}
        <motion.div
          className="inline-block"
          initial={{ scale: 3, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 150 }}
        >
          <div className="w-20 h-20 rounded-full border-2 border-kincha flex items-center justify-center">
            <span className="font-brush text-kincha text-2xl writing-vertical leading-none">
              {regionName}
            </span>
          </div>
        </motion.div>

        {/* Tap to dismiss */}
        <motion.p
          className="text-xs text-white/40 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Tap to dismiss
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
