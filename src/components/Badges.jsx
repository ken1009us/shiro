import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { allBadges, getEarnedBadges } from '../data/badges';
import { getLocalizedText } from '../utils/helpers';

const categories = ['milestone', 'region', 'type', 'special'];

export default function Badges({ store }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const earnedSet = useMemo(() => {
    const earned = getEarnedBadges(store.visited, store.favorites);
    return new Set(earned.map((b) => b.id));
  }, [store.visited, store.favorites]);

  const earnedCount = earnedSet.size;
  const totalCount = allBadges.length;

  return (
    <motion.div
      key="badges"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pt-6 pb-4"
    >
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-lg font-bold">{t('badges.title')}</h1>
        <div className="flex items-center gap-3 mt-2">
          <div className="text-3xl font-bold text-wakatake">{earnedCount}</div>
          <div>
            <div className="text-xs text-nibi dark:text-[#808080]">
              / {totalCount} {t('badges.title')}
            </div>
            <div className="mt-1 w-32 h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-wakatake rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(earnedCount / totalCount) * 100}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Badge categories */}
      <div className="space-y-6">
        {categories.map((cat) => {
          const badges = allBadges.filter((b) => b.category === cat);
          if (badges.length === 0) return null;

          return (
            <div key={cat}>
              <h2 className="text-sm font-bold mb-3 text-nibi dark:text-[#808080]">
                {t(`badges.categories.${cat}`)}
              </h2>
              <div className="space-y-2">
                {badges.map((badge, i) => {
                  const earned = earnedSet.has(badge.id);
                  const progress = badge.total
                    ? badge.current(store.visited)
                    : null;

                  return (
                    <motion.div
                      key={badge.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                        earned
                          ? 'bg-white dark:bg-white/5 border-kincha/20'
                          : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/5'
                      }`}
                    >
                      {/* Badge icon */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                          earned
                            ? 'bg-kincha/10'
                            : 'bg-black/5 dark:bg-white/5 grayscale opacity-40'
                        }`}
                      >
                        {badge.icon}
                      </div>

                      {/* Badge info */}
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-medium ${!earned ? 'opacity-50' : ''}`}>
                          {getLocalizedText(badge.name, lang)}
                        </div>
                        <div className="text-[10px] text-nibi dark:text-[#808080] mt-0.5">
                          {getLocalizedText(badge.desc, lang)}
                        </div>
                        {/* Progress bar for trackable badges */}
                        {badge.total && !earned && (
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="flex-1 h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-wakatake/50 rounded-full transition-all"
                                style={{ width: `${(progress / badge.total) * 100}%` }}
                              />
                            </div>
                            <span className="text-[9px] text-nibi dark:text-[#808080] shrink-0">
                              {progress}/{badge.total}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Earned indicator */}
                      {earned && (
                        <div className="w-6 h-6 rounded-full bg-kincha/10 text-kincha flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={3}>
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
