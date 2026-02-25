import { useState, useRef, useCallback } from 'react';
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

  const goBack = useCallback(() => {
    setSelectedRegion(null);
    setSelectedCastle(null);
  }, []);

  // Edge swipe to go back
  const touchRef = useRef({ startX: 0, startY: 0, active: false });

  const onTouchStart = useCallback((e) => {
    const x = e.touches[0].clientX;
    // Only activate if touch starts within 20px of the left edge
    if (x <= 20) {
      touchRef.current = { startX: x, startY: e.touches[0].clientY, active: true };
    } else {
      touchRef.current.active = false;
    }
  }, []);

  const onTouchEnd = useCallback((e) => {
    if (!touchRef.current.active || !selectedRegion) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = endX - touchRef.current.startX;
    const dy = Math.abs(endY - touchRef.current.startY);
    // Horizontal swipe > 60px and mostly horizontal
    if (dx > 60 && dx > dy * 1.5) {
      goBack();
    }
    touchRef.current.active = false;
  }, [selectedRegion, goBack]);

  return (
    <motion.div
      key="map"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${selectedRegion ? 'overflow-y-auto no-scrollbar' : 'flex flex-col'}`}
      style={{ height: 'calc(100vh - 5rem - var(--sat) - var(--sab))' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Sticky header — stays pinned when scrolling the region detail */}
      <div className={`${selectedRegion ? 'sticky top-0 z-10 bg-gofun/95 dark:bg-[#1a1a1a]/95 backdrop-blur-sm' : 'shrink-0'}`}>
        <div className="flex items-center gap-2 px-4 pt-6 pb-2">
          {selectedRegion && (
            <button
              onClick={goBack}
              className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-serif font-bold truncate">
              {selectedRegion ? getLocalizedText(region?.name, lang) : t('map.title')}
            </h1>
            {!selectedRegion && (
              <p className="text-xs text-nibi dark:text-[#808080]">{t('app.subtitle')}</p>
            )}
          </div>
        </div>
      </div>

      {/* Map or Region Detail */}
      <div className={`px-4 ${selectedRegion ? 'pb-4' : 'flex-1 flex items-center justify-center'}`}>
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
