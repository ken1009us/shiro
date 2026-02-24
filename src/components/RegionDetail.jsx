import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { regions } from '../data/regions';
import { getCastlesByRegion, getLocalizedText } from '../utils/helpers';
import { useTranslation } from 'react-i18next';

// Simplified Okinawa main island outline for sub-map
const OKINAWA_PATH = 'M14,88 Q15,86 17,85 Q19,84 21,85 Q22,86 22,88 Q22,90 21,92 Q20,94 18,95 Q16,96 15,95 Q13,93 13,91 Q13,89 14,88 Z';

// Push apart castle positions that are too close for clean pin display.
// Returns a map of castleId → { x, y } with adjusted positions.
function spreadPositions(castles, minDist = 2.5) {
  if (castles.length <= 1) {
    return Object.fromEntries(castles.map((c) => [c.id, { ...c.position }]));
  }
  const pos = castles.map((c) => ({ id: c.id, x: c.position.x, y: c.position.y }));
  for (let iter = 0; iter < 12; iter++) {
    for (let i = 0; i < pos.length; i++) {
      for (let j = i + 1; j < pos.length; j++) {
        const dx = pos[j].x - pos[i].x;
        const dy = pos[j].y - pos[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          if (dist === 0) {
            pos[j].x += minDist * 0.5;
            pos[i].x -= minDist * 0.5;
          } else {
            const push = (minDist - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;
            pos[i].x -= nx * push;
            pos[i].y -= ny * push;
            pos[j].x += nx * push;
            pos[j].y += ny * push;
          }
        }
      }
    }
  }
  return Object.fromEntries(pos.map((p) => [p.id, { x: p.x, y: p.y }]));
}

function computeViewBox(positions, pad = 8) {
  if (positions.length === 0) return '0 0 100 100';
  const xs = positions.map((p) => p.x);
  const ys = positions.map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const w = Math.max(maxX - minX + pad * 2, 15);
  const h = Math.max(maxY - minY + pad * 2, 15);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  return `${cx - w / 2} ${cy - h / 2} ${w} ${h}`;
}

function CastlePins({ castles, posMap, visited, regionColor, onSelectCastle }) {
  return castles.map((castle, i) => {
    const isVisited = !!visited[castle.id];
    const px = posMap[castle.id].x;
    const py = posMap[castle.id].y;
    return (
      <motion.g
        key={castle.id}
        initial={{ opacity: 0, y: -1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + i * 0.03, type: 'spring', stiffness: 300 }}
        onClick={() => onSelectCastle(castle)}
        className="cursor-pointer"
      >
        <motion.g
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          style={{ transformOrigin: `${px}px ${py}px` }}
        >
          <ellipse cx={px} cy={py + 1.0} rx={0.7} ry={0.25} fill="rgba(0,0,0,0.1)" />
          <path
            d={`M${px},${py + 0.7} Q${px - 1.0},${py - 0.35} ${px},${py - 1.4} Q${px + 1.0},${py - 0.35} ${px},${py + 0.7}Z`}
            fill={isVisited ? '#c48a2a' : regionColor}
            stroke="white"
            strokeWidth={0.15}
          />
          <circle cx={px} cy={py - 0.5} r={0.4} fill="white" fillOpacity={0.9} />
          {isVisited && (
            <text x={px} y={py - 0.35} textAnchor="middle" dominantBaseline="central"
              fontSize="0.7" fill="#c48a2a" className="pointer-events-none">✓</text>
          )}
        </motion.g>
      </motion.g>
    );
  });
}

export default function RegionDetail({ regionId, visited, onSelectCastle }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const region = regions.find((r) => r.id === regionId);
  const regionCastles = getCastlesByRegion(regionId);

  const isKyushu = regionId === 'kyushu';

  // Split Kyushu castles into mainland and Okinawa
  const mainlandCastles = useMemo(
    () => isKyushu ? regionCastles.filter((c) => c.prefecture?.ja !== '沖縄県') : regionCastles,
    [regionCastles, isKyushu]
  );
  const okinawaCastles = useMemo(
    () => isKyushu ? regionCastles.filter((c) => c.prefecture?.ja === '沖縄県') : [],
    [regionCastles, isKyushu]
  );

  // Spread positions to avoid overlapping pins
  const mainCastlesForMap = isKyushu ? mainlandCastles : regionCastles;
  const mainPosMap = useMemo(() => spreadPositions(mainCastlesForMap), [mainCastlesForMap]);
  const okinawaPosMap = useMemo(() => spreadPositions(okinawaCastles), [okinawaCastles]);

  // Compute viewBoxes from spread positions
  const mainViewBox = useMemo(
    () => computeViewBox(Object.values(mainPosMap)),
    [mainPosMap]
  );
  const okinawaViewBox = useMemo(
    () => computeViewBox(Object.values(okinawaPosMap)),
    [okinawaPosMap]
  );

  if (!region) return null;

  const visitedCount = regionCastles.filter((c) => visited[c.id]).length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Main region map */}
      <div className="w-full mx-auto mb-4">
        <svg viewBox={mainViewBox} className="w-full" style={{ height: '50vh' }}
          preserveAspectRatio="xMidYMid meet">
          {/* Region outline */}
          <motion.path
            d={region.path}
            fill={region.color}
            fillOpacity={0.1}
            stroke={region.color}
            strokeWidth={0.3}
            strokeDasharray="1.5 0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
          {/* Castle pins */}
          <CastlePins
            castles={mainCastlesForMap}
            posMap={mainPosMap}
            visited={visited}
            regionColor={region.color}
            onSelectCastle={onSelectCastle}
          />
        </svg>
      </div>

      {/* Okinawa sub-map (Kyushu only) */}
      {isKyushu && okinawaCastles.length > 0 && (
        <div className="w-full mx-auto mb-4">
          <div className="text-xs font-medium text-nibi dark:text-[#808080] mb-1.5 px-1">
            {lang === 'en' ? 'Okinawa' : '沖縄'}
          </div>
          <svg viewBox={okinawaViewBox} className="w-full" style={{ height: '22vh' }}
            preserveAspectRatio="xMidYMid meet">
            {/* Okinawa island outline */}
            <motion.path
              d={OKINAWA_PATH}
              fill={region.color}
              fillOpacity={0.1}
              stroke={region.color}
              strokeWidth={0.3}
              strokeDasharray="1.5 0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            {/* Okinawa castle pins */}
            <CastlePins
              castles={okinawaCastles}
              posMap={okinawaPosMap}
              visited={visited}
              regionColor={region.color}
              onSelectCastle={onSelectCastle}
            />
          </svg>
        </div>
      )}

      {/* Progress bar */}
      <div className="px-1 mb-3">
        <div className="flex items-center justify-between text-[10px] text-nibi dark:text-[#808080] mb-1">
          <span>{visitedCount} / {regionCastles.length} {t('map.castles')}</span>
          {visitedCount === regionCastles.length && (
            <span className="text-kincha font-medium">{t('achievement.title')}</span>
          )}
        </div>
        <div className="h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: region.color }}
            initial={{ width: 0 }}
            animate={{ width: `${(visitedCount / regionCastles.length) * 100}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>

      {/* Scrollable castle list */}
      <div className="space-y-1.5">
        {regionCastles.map((castle, i) => {
          const isVisited = !!visited[castle.id];
          const seriesLabel = castle.number <= 100 ? t('castle.seriesNames.hyaku') : t('castle.seriesNames.zoku');
          return (
            <motion.button
              key={castle.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.04 }}
              onClick={() => onSelectCastle(castle)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors text-left"
            >
              {/* Pin indicator */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: isVisited ? `${region.color}20` : 'rgba(0,0,0,0.04)' }}
              >
                <svg viewBox="0 0 24 24" width={16} height={16}>
                  <path d="M4,20 L4,12 L8,8 L12,5 L16,8 L20,12 L20,20Z"
                    fill={isVisited ? region.color : '#bbb'} opacity={isVisited ? 1 : 0.4} />
                </svg>
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">
                  {getLocalizedText(castle.name, lang)}
                </div>
                <div className="text-[10px] text-nibi dark:text-[#808080] truncate">
                  {getLocalizedText(castle.city, lang)} · {seriesLabel} #{castle.number}
                </div>
              </div>
              {/* Status */}
              {isVisited && (
                <div className="w-5 h-5 rounded-full bg-kincha/10 text-kincha flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {/* Chevron */}
              <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2}
                className="text-nibi/30 shrink-0">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
