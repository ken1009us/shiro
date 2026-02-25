import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { allBadges, getEarnedBadges } from '../data/badges';
import { getLocalizedText } from '../utils/helpers';

const categories = ['milestone', 'region', 'type', 'special'];

function ProgressRing({ earned, total, size = 120 }) {
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = total > 0 ? earned / total : 0;

  return (
    <svg width={size} height={size} className="block">
      {/* Background ring */}
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke="currentColor" strokeWidth={stroke}
        className="text-black/5 dark:text-white/5"
      />
      {/* Progress ring */}
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke="currentColor" strokeWidth={stroke}
        strokeLinecap="round"
        className="text-wakatake"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: circumference * (1 - pct) }}
        transition={{ duration: 1, ease: 'easeOut' }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export default function Badges({ store }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const earnedSet = useMemo(() => {
    const earned = getEarnedBadges(store.visited, store.favorites);
    return new Set(earned.map((b) => b.id));
  }, [store.visited, store.favorites]);

  const earnedCount = earnedSet.size;
  const totalCount = allBadges.length;

  const [selectedBadge, setSelectedBadge] = useState(null);

  return (
    <motion.div
      key="badges"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pt-6 pb-4"
    >
      {/* Summary card */}
      <div
        className="relative rounded-2xl overflow-hidden mb-6 p-6"
        style={{
          background: 'linear-gradient(135deg, #2d4a3e 0%, #3a6b5a 50%, #6b5a3a 100%)',
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <ProgressRing earned={earnedCount} total={totalCount} size={110} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-white">{earnedCount}</div>
            </div>
          </div>
          <div className="text-white/60 text-xs mt-1">/ {totalCount} {t('badges.title')}</div>
        </div>
      </div>

      {/* Badge categories as grids */}
      <div className="space-y-5">
        {categories.map((cat) => {
          const badges = allBadges.filter((b) => b.category === cat);
          if (badges.length === 0) return null;

          return (
            <div key={cat}>
              <h2 className="text-xs font-bold mb-2.5 text-nibi dark:text-[#808080] uppercase tracking-wider">
                {t(`badges.categories.${cat}`)}
              </h2>
              <div className="grid grid-cols-4 gap-2.5">
                {badges.map((badge, i) => {
                  const earned = earnedSet.has(badge.id);
                  return (
                    <motion.button
                      key={badge.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => setSelectedBadge(badge)}
                      className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-colors ${
                        earned
                          ? 'bg-kincha/10 border border-kincha/20'
                          : 'bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5'
                      }`}
                    >
                      <span className={`text-2xl ${earned ? '' : 'grayscale opacity-40'}`}>
                        {badge.icon}
                      </span>
                      <span className={`text-[9px] leading-tight text-center px-1 line-clamp-2 ${
                        earned ? 'font-medium' : 'text-nibi/60 dark:text-white/30'
                      }`}>
                        {getLocalizedText(badge.name, lang)}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Badge detail popup */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedBadge(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-gofun dark:bg-[#2a2a2a] rounded-2xl p-6 w-full max-w-xs shadow-xl"
              onClick={() => setSelectedBadge(null)}
            >
              <div className="flex flex-col items-center text-center">
                <span className={`text-5xl mb-3 ${earnedSet.has(selectedBadge.id) ? '' : 'grayscale opacity-40'}`}>
                  {selectedBadge.icon}
                </span>
                <h3 className="text-base font-bold mb-1">
                  {getLocalizedText(selectedBadge.name, lang)}
                </h3>
                <p className="text-xs text-nibi dark:text-[#808080] leading-relaxed mb-3">
                  {getLocalizedText(selectedBadge.desc, lang)}
                </p>
                {selectedBadge.total && (
                  <div className="w-full">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-wakatake rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(selectedBadge.current(store.visited) / selectedBadge.total) * 100}%` }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                      <span className="text-[10px] text-nibi dark:text-[#808080] shrink-0">
                        {selectedBadge.current(store.visited)}/{selectedBadge.total}
                      </span>
                    </div>
                  </div>
                )}
                {earnedSet.has(selectedBadge.id) && (
                  <div className="mt-3 flex items-center gap-1.5 text-kincha">
                    <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs font-medium">{t('badges.earned')}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
