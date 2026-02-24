import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CollectionCard from './CollectionCard';
import { castles } from '../data/castles';

export default function Collection({ store }) {
  const { t } = useTranslation();
  const visitedCastles = castles.filter((c) => store.visited[c.id]);

  return (
    <motion.div
      key="collection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pt-6"
    >
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-lg font-serif font-bold">{t('collection.title')}</h1>
        <p className="text-xs text-nibi dark:text-[#808080] mt-1">
          {t('collection.progress', { count: visitedCastles.length, total: castles.length })}
        </p>
        {/* Progress bar */}
        <div className="mt-2 h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-wakatake rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(visitedCastles.length / castles.length) * 100}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>

      {visitedCastles.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-4xl mb-4 opacity-30">🏯</div>
          <p className="text-sm text-nibi dark:text-[#808080]">{t('collection.empty')}</p>
          <p className="text-xs text-nibi/60 mt-1">{t('collection.emptyHint')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 pb-4">
          {visitedCastles.map((castle, i) => (
            <motion.div
              key={castle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <CollectionCard
                castle={castle}
                visitInfo={store.visited[castle.id]}
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
