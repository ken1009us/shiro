import { castles } from '../data/castles';

export function getCastlesByRegion(regionId) {
  return castles.filter((c) => c.regionId === regionId);
}

export function getCompletionPercent(visited) {
  const total = castles.length;
  const done = Object.keys(visited).length;
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

export function formatJapaneseDate(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${y}年${m}月${day}日`;
}

export function getLocalizedText(obj, lang) {
  if (!obj) return '';
  if (lang === 'zhTw' || lang === 'zh-TW') return obj.zhTw || obj.ja || '';
  if (lang === 'en') return obj.en || obj.ja || '';
  return obj.ja || '';
}
