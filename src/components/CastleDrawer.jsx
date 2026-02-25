import { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useAnimate, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CastleIllustration from './CastleIllustration';
import { getLocalizedText, formatJapaneseDate } from '../utils/helpers';

// Collapsible card section
function Section({ icon, title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2.5 px-3.5 py-3 text-left"
      >
        <span className="text-base shrink-0">{icon}</span>
        <span className="text-sm font-medium flex-1">{title}</span>
        <motion.svg
          viewBox="0 0 24 24" width={16} height={16} fill="none"
          stroke="currentColor" strokeWidth={2}
          className="text-nibi/40 shrink-0"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-3.5 pb-3.5 pt-0.5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function toInputDate(isoString) {
  if (!isoString) return new Date().toISOString().slice(0, 10);
  return new Date(isoString).toISOString().slice(0, 10);
}

export default function CastleDrawer({ castle, store, onClose }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const isVisited = !!store.visited[castle.id];
  const isFavorite = !!store.favorites[castle.id];
  const visitInfo = store.visited[castle.id];

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickedDate, setPickedDate] = useState(new Date().toISOString().slice(0, 10));
  const [editingDate, setEditingDate] = useState(false);

  // ── Drag-to-dismiss when scrolled to top ──
  const dragY = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const scrollRef = useRef(null);
  const touchRef = useRef({ startY: 0, dragging: false });

  const onTouchStart = useCallback((e) => {
    touchRef.current.startY = e.touches[0].clientY;
    touchRef.current.dragging = false;
  }, []);

  const onTouchMove = useCallback((e) => {
    const scrollEl = scrollRef.current;
    const dy = e.touches[0].clientY - touchRef.current.startY;
    const atTop = scrollEl && scrollEl.scrollTop <= 0;

    // Start dragging only when at top and pulling down
    if (!touchRef.current.dragging && atTop && dy > 4) {
      touchRef.current.dragging = true;
    }

    if (touchRef.current.dragging) {
      e.preventDefault();
      dragY.set(Math.max(0, dy));
    }
  }, [dragY]);

  const onTouchEnd = useCallback(() => {
    if (!touchRef.current.dragging) return;
    touchRef.current.dragging = false;
    const current = dragY.get();
    if (current > 80) {
      animate(scope.current, { y: '100%' }, { duration: 0.2 }).then(onClose);
    } else {
      animate(dragY, 0, { type: 'spring', stiffness: 400, damping: 30 });
    }
  }, [dragY, animate, scope, onClose]);

  const handleConfirmVisit = () => {
    store.markVisited(castle.id, new Date(pickedDate + 'T12:00:00').toISOString());
    setShowDatePicker(false);
  };

  const handleDateEdit = (newVal) => {
    store.updateVisitDate(castle.id, new Date(newVal + 'T12:00:00').toISOString());
    setEditingDate(false);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Drawer */}
      <motion.div
        ref={scope}
        className="absolute bottom-0 left-0 right-0 max-w-lg mx-auto bg-gofun dark:bg-[#2a2a2a] rounded-t-3xl flex flex-col"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        style={{ y: dragY, maxHeight: '92vh' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Header: drag handle + close button */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 shrink-0">
          <div className="w-8" />
          <div className="w-10 h-1 rounded-full bg-nibi/30" />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto no-scrollbar px-4 pb-2 overscroll-contain"
        >
          {/* Castle illustration */}
          <div className="flex justify-center mb-3">
            <CastleIllustration illustration={castle.illustration} size={130} />
          </div>

          {/* Castle name & info */}
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold mb-0.5">
              {getLocalizedText(castle.name, lang)}
            </h2>
            <p className="text-xs text-nibi dark:text-[#808080]">
              {getLocalizedText(castle.city, lang)} · {getLocalizedText(castle.prefecture, lang)}
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <div className="text-center px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5">
              <div className="text-[9px] text-nibi dark:text-[#808080]">{t('castle.series')}</div>
              <div className="text-[11px] font-medium">
                {castle.number <= 100 ? t('castle.seriesNames.hyaku') : t('castle.seriesNames.zoku')} #{castle.number}
              </div>
            </div>
            <div className="text-center px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5">
              <div className="text-[9px] text-nibi dark:text-[#808080]">{t('castle.type')}</div>
              <div className="text-[11px] font-medium">{t(`castle.types.${castle.type}`, castle.type)}</div>
            </div>
            <div className="text-center px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5">
              <div className="text-[9px] text-nibi dark:text-[#808080]">{t('castle.designation')}</div>
              <div className="text-[11px] font-medium">{t(`castle.designations.${castle.designation}`, castle.designation)}</div>
            </div>
            {isVisited && (
              editingDate ? (
                <div className="text-center px-3 py-1.5 rounded-lg bg-kincha/10">
                  <div className="text-[9px] text-kincha">{t('castle.visitedOn')}</div>
                  <input
                    type="date"
                    defaultValue={toInputDate(visitInfo.date)}
                    onChange={(e) => handleDateEdit(e.target.value)}
                    onBlur={() => setEditingDate(false)}
                    autoFocus
                    className="text-[11px] font-medium text-kincha bg-transparent outline-none w-full text-center"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setEditingDate(true)}
                  className="text-center px-3 py-1.5 rounded-lg bg-kincha/10 active:bg-kincha/20 transition-colors"
                >
                  <div className="text-[9px] text-kincha">{t('castle.visitedOn')}</div>
                  <div className="text-[11px] font-medium text-kincha">{formatJapaneseDate(visitInfo.date)}</div>
                </button>
              )
            )}
          </div>

          {/* Collapsible sections */}
          <div className="space-y-2 mb-4">
            {castle.figures && castle.figures.length > 0 && (
              <Section icon="👤" title={t('castle.figures')} defaultOpen={true}>
                <div className="space-y-2.5">
                  {castle.figures.map((fig, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <div className="w-7 h-7 rounded-full bg-wakatake/10 dark:bg-wakatake/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs">👤</span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium">{getLocalizedText(fig, lang)}</div>
                        {fig.desc && (
                          <div className="text-xs text-nibi dark:text-[#808080] leading-relaxed mt-0.5">
                            {getLocalizedText(fig.desc, lang)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <Section icon="📜" title={t('castle.history')}>
              <div className="space-y-2.5">
                {castle.history.map((item, i) => {
                  const text = item.event ? getLocalizedText(item.event, lang) : getLocalizedText(item, lang);
                  return (
                    <div key={i} className="flex gap-2.5">
                      <div className="flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-wakatake shrink-0 mt-2" />
                        {i < castle.history.length - 1 && (
                          <div className="w-px flex-1 bg-wakatake/20 mt-1" />
                        )}
                      </div>
                      <div className="pb-1 min-w-0">
                        {item.year && <div className="text-[11px] font-bold text-wakatake dark:text-[#7ec8b8]">{item.year}</div>}
                        <div className="text-xs leading-relaxed">{text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>

            {castle.trivia && castle.trivia.length > 0 && (
              <Section icon="💡" title={t('castle.trivia')}>
                <div className="space-y-2">
                  {castle.trivia.map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-xs text-kincha mt-0.5 shrink-0">●</span>
                      <p className="text-xs leading-relaxed">{getLocalizedText(item, lang)}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {castle.highlights && castle.highlights.length > 0 && (
              <Section icon="🏯" title={t('castle.highlights')}>
                <div className="space-y-2">
                  {castle.highlights.map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-xs text-wakatake mt-0.5 shrink-0">◆</span>
                      <p className="text-xs leading-relaxed">{getLocalizedText(item, lang)}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {castle.architecture && castle.architecture.length > 0 && (
              <Section icon="🔨" title={t('castle.architecture')}>
                <div className="space-y-2">
                  {castle.architecture.map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-xs text-nibi mt-0.5 shrink-0">▪</span>
                      <p className="text-xs leading-relaxed">{getLocalizedText(item, lang)}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </div>
        </div>

        {/* Sticky action buttons */}
        <div className="shrink-0 px-4 pt-3 pb-6 bg-gofun dark:bg-[#2a2a2a] border-t border-black/5 dark:border-white/5">
          <AnimatePresence mode="wait">
            {showDatePicker ? (
              <motion.div
                key="datepicker"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="space-y-3"
              >
                <div className="text-sm font-medium text-center">{t('castle.selectDate')}</div>
                <input
                  type="date"
                  value={pickedDate}
                  onChange={(e) => setPickedDate(e.target.value)}
                  max={new Date().toISOString().slice(0, 10)}
                  className="w-full py-2.5 px-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#333] text-sm text-center outline-none"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleConfirmVisit}
                    className="flex-1 py-3 rounded-2xl text-sm font-medium bg-wakatake text-white"
                  >
                    {t('castle.confirmVisit')}
                  </button>
                  <button
                    onClick={() => setShowDatePicker(false)}
                    className="px-4 py-3 rounded-2xl text-sm font-medium border border-black/5 dark:border-white/5 text-nibi"
                  >
                    {t('settings.cancel')}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="actions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex gap-3"
              >
                <button
                  onClick={() => isVisited ? store.unmarkVisited(castle.id) : setShowDatePicker(true)}
                  className={`flex-1 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isVisited
                      ? 'bg-kincha/10 text-kincha border border-kincha/20'
                      : 'bg-wakatake text-white'
                  }`}
                >
                  {isVisited ? t('castle.unmarkVisited') : t('castle.markVisited')}
                </button>
                <button
                  onClick={() => store.toggleFavorite(castle.id)}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    isFavorite
                      ? 'bg-beni/10 text-beni'
                      : 'bg-black/5 dark:bg-white/5 text-nibi'
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
