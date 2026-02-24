import { useState, useEffect, useRef } from 'react';
import { castles } from '../data/castles';
import { regions } from '../data/regions';

// Group castles by region for checking completion
const castlesByRegion = {};
for (const castle of castles) {
  if (!castlesByRegion[castle.regionId]) castlesByRegion[castle.regionId] = [];
  castlesByRegion[castle.regionId].push(castle.id);
}

export function useAchievements(visited) {
  const [achievement, setAchievement] = useState(null);
  const shownRef = useRef(new Set());

  useEffect(() => {
    const visitedIds = new Set(Object.keys(visited));

    for (const region of regions) {
      const regionCastles = castlesByRegion[region.id] || [];
      if (regionCastles.length === 0) continue;

      const allVisited = regionCastles.every((id) => visitedIds.has(id));
      const achievementId = `region-${region.id}`;

      if (allVisited && !shownRef.current.has(achievementId)) {
        shownRef.current.add(achievementId);
        setAchievement({ id: achievementId, region });
        return; // Show one at a time
      }
    }
  }, [visited]);

  const dismissAchievement = () => setAchievement(null);

  return { achievement, dismissAchievement };
}
