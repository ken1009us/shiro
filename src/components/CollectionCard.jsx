import { motion } from 'framer-motion';
import { getLocalizedText, formatJapaneseDate } from '../utils/helpers';
import { useTranslation } from 'react-i18next';

// Castle silhouette paths keyed by illustration style
const silhouettes = {
  'star-fort': 'M50,20 L62,38 L80,42 L68,55 L72,75 L50,65 L28,75 L32,55 L20,42 L38,38Z',
  classic: 'M30,85 L32,60 L36,55 L38,45 L42,42 L45,35 L48,32 L50,25 L52,32 L55,35 L58,42 L62,45 L64,55 L68,60 L70,85Z',
  black: 'M28,85 L30,58 L35,52 L38,42 L42,38 L45,30 L48,26 L50,20 L52,26 L55,30 L58,38 L62,42 L65,52 L70,58 L72,85Z',
  white: 'M30,85 L33,60 L37,54 L40,44 L44,40 L47,33 L50,28 L53,33 L56,40 L60,44 L63,54 L67,60 L70,85Z',
  imperial: 'M25,85 L28,55 L33,48 L37,40 L41,35 L44,28 L47,24 L50,18 L53,24 L56,28 L59,35 L63,40 L67,48 L72,55 L75,85Z',
  gold: 'M28,85 L31,58 L36,50 L40,42 L44,36 L47,30 L50,22 L53,30 L56,36 L60,42 L64,50 L69,58 L72,85Z',
  palace: 'M25,85 L25,50 L35,45 L40,40 L50,35 L60,40 L65,45 L75,50 L75,85Z',
  ruins: 'M30,85 L33,65 L38,58 L42,50 L48,45 L50,40 L52,45 L58,50 L62,58 L67,65 L70,85Z',
  red: 'M28,85 L30,60 L35,52 L40,44 L45,38 L48,32 L50,26 L52,32 L55,38 L60,44 L65,52 L70,60 L72,85Z',
};

function getSilhouette(style) {
  return silhouettes[style] || silhouettes.classic;
}

// Goshuin-style ink stamp card
export default function CollectionCard({ castle, visitInfo }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { goshuin } = castle;
  const castleName = getLocalizedText(castle.name, lang);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${goshuin.bg}, ${goshuin.bg}dd, #e8dfd0)`,
        aspectRatio: '3/4',
      }}
    >
      {/* Parchment texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.03) 2px,
            rgba(0,0,0,0.03) 3px
          )`,
        }}
      />

      {/* Castle silhouette shadow — style-specific */}
      <div className="absolute inset-0 flex items-end justify-center">
        <svg viewBox="0 0 100 100" className="w-[100%] h-[90%]" preserveAspectRatio="xMidYMax meet">
          <path
            d={getSilhouette(castle.illustration.style)}
            fill={goshuin.ink}
            opacity={0.06}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between p-3 pt-4 pb-3">
        {/* Gold family crest (mon) */}
        <div className="absolute top-3 right-3">
          <svg viewBox="0 0 24 24" width={20} height={20}>
            <circle cx="12" cy="12" r="10" fill="none" stroke={goshuin.crest} strokeWidth={0.8} opacity={0.5} />
            <circle cx="12" cy="12" r="6" fill="none" stroke={goshuin.crest} strokeWidth={0.5} opacity={0.5} />
            <circle cx="12" cy="12" r="2" fill={goshuin.crest} opacity={0.4} />
          </svg>
        </div>

        {/* Vertical castle name — main calligraphy */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="writing-vertical font-brush text-2xl leading-none tracking-widest"
            style={{ color: goshuin.ink }}
          >
            {castleName}
          </div>
        </div>

        {/* Red seal mark (朱印) — full castle name */}
        <motion.div
          initial={{ scale: 2, rotate: -15, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 200 }}
          className="my-1"
        >
          <div
            className="rounded-sm flex items-center justify-center border-2 rotate-[-3deg] px-1.5 py-1.5"
            style={{
              borderColor: goshuin.seal,
              color: goshuin.seal,
              minWidth: 40,
              minHeight: 40,
            }}
          >
            <span className="font-brush text-[10px] leading-tight writing-vertical">
              {castleName}
            </span>
          </div>
        </motion.div>

        {/* Visit date in Japanese format */}
        <div
          className="text-[9px] font-serif mt-1 opacity-60"
          style={{ color: goshuin.ink }}
        >
          {formatJapaneseDate(visitInfo?.date)}
        </div>

        {/* Prefecture */}
        <div
          className="text-[8px] font-serif opacity-40 mt-0.5"
          style={{ color: goshuin.ink }}
        >
          {getLocalizedText(castle.prefecture, lang)}
        </div>
      </div>

      {/* Subtle border */}
      <div className="absolute inset-0 rounded-2xl border border-black/[0.06]" />
    </motion.div>
  );
}
