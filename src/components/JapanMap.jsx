import { motion } from 'framer-motion';
import { regions } from '../data/regions';
import { castles } from '../data/castles';
import { getLocalizedText } from '../utils/helpers';
import { useTranslation } from 'react-i18next';

function getRegionVisitCount(regionId, visited) {
  const regionCastles = castles.filter((c) => c.regionId === regionId);
  const visitedCount = regionCastles.filter((c) => visited[c.id]).length;
  return { visitedCount, total: regionCastles.length };
}

export default function JapanMap({ visited, onSelectRegion }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Background dots pattern */}
        <defs>
          <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.3" fill="currentColor" className="text-nibi/20" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dots)" />

        {regions.map((region, i) => {
          const { visitedCount, total } = getRegionVisitCount(region.id, visited);
          const allVisited = visitedCount === total;

          return (
            <motion.g
              key={region.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              onClick={() => onSelectRegion(region.id)}
              className="cursor-pointer"
            >
              {/* Region shape */}
              <motion.path
                d={region.path}
                fill={allVisited ? region.accentColor : region.color}
                fillOpacity={allVisited ? 0.9 : 0.6}
                stroke={region.color}
                strokeWidth={0.5}
                whileHover={{ fillOpacity: 0.85, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ transformOrigin: `${region.center.x}px ${region.center.y}px` }}
              />

              {/* Region label */}
              <text
                x={region.center.x + region.labelOffset.x}
                y={region.center.y + region.labelOffset.y}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[3px] font-medium fill-white pointer-events-none"
                style={{ textShadow: '0 0.5px 1px rgba(0,0,0,0.5)' }}
              >
                {getLocalizedText(region.name, lang)}
              </text>

              {/* Visit count badge */}
              {visitedCount > 0 && (
                <g>
                  <circle
                    cx={region.center.x + 8}
                    cy={region.center.y - 6}
                    r={2.5}
                    fill={allVisited ? '#c48a2a' : '#c53d43'}
                  />
                  <text
                    x={region.center.x + 8}
                    y={region.center.y - 6}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-[2px] fill-white font-bold pointer-events-none"
                  >
                    {visitedCount}
                  </text>
                </g>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
