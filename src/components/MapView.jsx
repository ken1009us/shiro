import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import JapanMap from './JapanMap';
import RegionDetail from './RegionDetail';
import CastleDrawer from './CastleDrawer';
import { regions } from '../data/regions';
import { getLocalizedText } from '../utils/helpers';

export default function MapView({ store }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCastle, setSelectedCastle] = useState(null);

  const region = selectedRegion ? regions.find((r) => r.id === selectedRegion) : null;

  return (
    <motion.div
      key="map"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-[calc(100vh-5rem)]"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-2 shrink-0">
        {selectedRegion && (
          <button
            onClick={() => { setSelectedRegion(null); setSelectedCastle(null); }}
            className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        <div>
          <h1 className="text-lg font-serif font-bold">
            {selectedRegion ? getLocalizedText(region?.name, lang) : t('map.title')}
          </h1>
          {!selectedRegion && (
            <p className="text-xs text-nibi dark:text-[#808080]">{t('app.subtitle')}</p>
          )}
        </div>
      </div>

      {/* Map or Region Detail */}
      <div className={`flex-1 px-4 ${selectedRegion ? 'overflow-y-auto no-scrollbar pb-4' : 'flex items-center justify-center'}`}>
        <AnimatePresence mode="wait">
          {selectedRegion ? (
            <RegionDetail
              key={selectedRegion}
              regionId={selectedRegion}
              visited={store.visited}
              onSelectCastle={setSelectedCastle}
            />
          ) : (
            <JapanMap
              key="japan"
              visited={store.visited}
              onSelectRegion={setSelectedRegion}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Castle Drawer */}
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
