import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { regions } from '../data/regions';
import { getCastlesByRegion, getLocalizedText } from '../utils/helpers';
import { useState } from 'react';
import CastleDrawer from './CastleDrawer';

export default function CastleList({ store }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedCastle, setSelectedCastle] = useState(null);

  return (
    <motion.div
      key="list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pt-6"
    >
      <h1 className="text-lg font-serif font-bold mb-4">{t('nav.list')}</h1>

      <div className="space-y-5 pb-4">
        {regions.map((region) => {
          const regionCastles = getCastlesByRegion(region.id);
          const visitedCount = regionCastles.filter((c) => store.visited[c.id]).length;

          return (
            <div key={region.id}>
              {/* Region header */}
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: region.color }}
                />
                <h2 className="text-sm font-bold font-serif">
                  {getLocalizedText(region.name, lang)}
                </h2>
                <span className="text-[10px] text-nibi dark:text-[#808080] ml-auto">
                  {visitedCount}/{regionCastles.length}
                </span>
              </div>

              {/* Castle items */}
              <div className="space-y-1">
                {regionCastles.map((castle) => {
                  const isVisited = !!store.visited[castle.id];
                  const isFavorite = !!store.favorites[castle.id];

                  return (
                    <button
                      key={castle.id}
                      onClick={() => setSelectedCastle(castle)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors text-left"
                    >
                      {/* Castle mini icon */}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: isVisited ? `${region.color}20` : 'rgba(0,0,0,0.04)',
                        }}
                      >
                        <svg viewBox="0 0 24 24" width={16} height={16}>
                          <path
                            d="M4,20 L4,12 L8,8 L12,6 L16,8 L20,12 L20,20Z"
                            fill={isVisited ? region.color : '#ccc'}
                            opacity={isVisited ? 1 : 0.5}
                          />
                        </svg>
                      </div>

                      {/* Castle info */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {getLocalizedText(castle.name, lang)}
                        </div>
                        <div className="text-[10px] text-nibi dark:text-[#808080] truncate">
                          {getLocalizedText(castle.city, lang)}
                        </div>
                      </div>

                      {/* Status badges */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {isFavorite && (
                          <svg viewBox="0 0 24 24" width={12} height={12} fill="#c53d43">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
                          </svg>
                        )}
                        {isVisited && (
                          <div className="w-5 h-5 rounded-full bg-wakatake/10 text-wakatake flex items-center justify-center">
                            <svg viewBox="0 0 24 24" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={3}>
                              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Castle drawer */}
      <AnimatePresence>
        {selectedCastle && (
          <CastleDrawer
            castle={selectedCastle}
            store={store}
            onClose={() => setSelectedCastle(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
