import { castles } from './castles';
import { regions } from './regions';

// Badge definitions with conditions
// Each badge has: id, category, name (i18n), description (i18n), icon, condition(visited, favorites)

const castlesByRegion = {};
const castlesByType = {};
for (const c of castles) {
  if (!castlesByRegion[c.regionId]) castlesByRegion[c.regionId] = [];
  castlesByRegion[c.regionId].push(c.id);
  if (!castlesByType[c.type]) castlesByType[c.type] = [];
  castlesByType[c.type].push(c.id);
}

// Milestone badges
const milestones = [
  {
    id: 'first-castle',
    category: 'milestone',
    icon: '🏯',
    name: { ja: '初城', zhTw: '初城', en: 'First Castle' },
    desc: { ja: '初めての城を訪問した', zhTw: '訪問了第一座城堡', en: 'Visited your first castle' },
    check: (v) => Object.keys(v).length >= 1,
  },
  {
    id: 'five-castles',
    category: 'milestone',
    icon: '⭐',
    name: { ja: '城巡り', zhTw: '巡城之旅', en: 'Castle Hopper' },
    desc: { ja: '5つの城を訪問した', zhTw: '訪問了5座城堡', en: 'Visited 5 castles' },
    check: (v) => Object.keys(v).length >= 5,
    total: 5,
    current: (v) => Math.min(Object.keys(v).length, 5),
  },
  {
    id: 'ten-castles',
    category: 'milestone',
    icon: '🌟',
    name: { ja: '城の達人', zhTw: '名城達人', en: 'Castle Master' },
    desc: { ja: '10の城を訪問した', zhTw: '訪問了10座城堡', en: 'Visited 10 castles' },
    check: (v) => Object.keys(v).length >= 10,
    total: 10,
    current: (v) => Math.min(Object.keys(v).length, 10),
  },
  {
    id: 'all-castles',
    category: 'milestone',
    icon: '👑',
    name: { ja: '天下統一', zhTw: '天下統一', en: 'Unifier' },
    desc: { ja: '全ての城を訪問した', zhTw: '訪問了所有城堡', en: 'Visited every castle' },
    check: (v) => Object.keys(v).length >= castles.length,
    total: castles.length,
    current: (v) => Math.min(Object.keys(v).length, castles.length),
  },
];

// Region completion badges
const regionBadges = regions.map((r) => ({
  id: `region-${r.id}`,
  category: 'region',
  icon: '🗾',
  name: r.name,
  desc: {
    ja: `${r.name.ja}の全城を訪問した`,
    zhTw: `訪問了${r.name.zhTw}的所有城堡`,
    en: `Visited all castles in ${r.name.en}`,
  },
  check: (v) => {
    const ids = castlesByRegion[r.id] || [];
    return ids.length > 0 && ids.every((id) => v[id]);
  },
  total: (castlesByRegion[r.id] || []).length,
  current: (v) => (castlesByRegion[r.id] || []).filter((id) => v[id]).length,
  color: r.color,
}));

// Castle type badges
const typeNames = {
  hirayama: { ja: '平山城マスター', zhTw: '平山城大師', en: 'Hill Castle Master' },
  hirajiro: { ja: '平城マスター', zhTw: '平城大師', en: 'Flatland Master' },
  yamajiro: { ja: '山城マスター', zhTw: '山城大師', en: 'Mountain Master' },
};
const typeBadges = Object.entries(castlesByType)
  .filter(([type]) => typeNames[type])
  .map(([type, ids]) => ({
    id: `type-${type}`,
    category: 'type',
    icon: type === 'hirayama' ? '⛰️' : type === 'yamajiro' ? '🏔️' : '🏗️',
    name: typeNames[type],
    desc: {
      ja: `全ての${type === 'hirayama' ? '平山城' : type === 'yamajiro' ? '山城' : '平城'}を訪問した`,
      zhTw: `訪問了所有${type === 'hirayama' ? '平山城' : type === 'yamajiro' ? '山城' : '平城'}`,
      en: `Visited all ${type === 'hirayama' ? 'hill' : type === 'yamajiro' ? 'mountain' : 'flatland'} castles`,
    },
    check: (v) => ids.every((id) => v[id]),
    total: ids.length,
    current: (v) => ids.filter((id) => v[id]).length,
  }));

// Special badges
const nationalTreasures = castles.filter((c) => c.designation.includes('国宝')).map((c) => c.id);
const worldHeritage = castles.filter((c) => c.designation.includes('世界遺産')).map((c) => c.id);

const specialBadges = [
  {
    id: 'national-treasure',
    category: 'special',
    icon: '💎',
    name: { ja: '国宝ハンター', zhTw: '國寶獵人', en: 'National Treasure Hunter' },
    desc: { ja: '国宝の城を訪問した', zhTw: '訪問了國寶城堡', en: 'Visited a National Treasure castle' },
    check: (v) => nationalTreasures.some((id) => v[id]),
  },
  {
    id: 'all-treasures',
    category: 'special',
    icon: '🏆',
    name: { ja: '国宝制覇', zhTw: '國寶制霸', en: 'Treasure Complete' },
    desc: { ja: '全ての国宝の城を訪問した', zhTw: '訪問了所有國寶城堡', en: 'Visited all National Treasure castles' },
    check: (v) => nationalTreasures.every((id) => v[id]),
    total: nationalTreasures.length,
    current: (v) => nationalTreasures.filter((id) => v[id]).length,
  },
  {
    id: 'world-heritage',
    category: 'special',
    icon: '🌍',
    name: { ja: '世界遺産巡り', zhTw: '世界遺產巡禮', en: 'World Heritage Tour' },
    desc: { ja: '全ての世界遺産の城を訪問した', zhTw: '訪問了所有世界遺產城堡', en: 'Visited all World Heritage castles' },
    check: (v) => worldHeritage.every((id) => v[id]),
    total: worldHeritage.length,
    current: (v) => worldHeritage.filter((id) => v[id]).length,
  },
  {
    id: 'multi-region',
    category: 'special',
    icon: '🧭',
    name: { ja: '旅の達人', zhTw: '旅行達人', en: 'Explorer' },
    desc: { ja: '3つ以上の地域の城を訪問した', zhTw: '訪問了3個以上地區的城堡', en: 'Visited castles in 3+ regions' },
    check: (v) => {
      const visitedRegions = new Set(
        castles.filter((c) => v[c.id]).map((c) => c.regionId)
      );
      return visitedRegions.size >= 3;
    },
  },
  {
    id: 'collector',
    category: 'special',
    icon: '❤️',
    name: { ja: 'コレクター', zhTw: '收藏家', en: 'Collector' },
    desc: { ja: '5つ以上の城をお気に入りに登録した', zhTw: '收藏了5座以上的城堡', en: 'Favorited 5+ castles' },
    check: (v, f) => Object.keys(f).length >= 5,
  },
];

export const allBadges = [...milestones, ...regionBadges, ...typeBadges, ...specialBadges];

export function getEarnedBadges(visited, favorites) {
  return allBadges.filter((b) => b.check(visited, favorites));
}
