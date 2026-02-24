import { useState, useCallback } from 'react';

const STORAGE_KEY = 'shiro-quest';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { visited: {}, favorites: {}, achievements: [], darkMode: false, language: 'ja' };
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useCastleStore() {
  const [state, setState] = useState(loadState);

  const update = useCallback((fn) => {
    setState((prev) => {
      const next = fn(prev);
      saveState(next);
      return next;
    });
  }, []);

  const markVisited = useCallback((castleId, notes = '') => {
    update((s) => ({
      ...s,
      visited: {
        ...s.visited,
        [castleId]: { date: new Date().toISOString(), notes },
      },
    }));
  }, [update]);

  const unmarkVisited = useCallback((castleId) => {
    update((s) => {
      const { [castleId]: _, ...rest } = s.visited;
      return { ...s, visited: rest };
    });
  }, [update]);

  const toggleFavorite = useCallback((castleId) => {
    update((s) => {
      const next = { ...s.favorites };
      if (next[castleId]) delete next[castleId];
      else next[castleId] = true;
      return { ...s, favorites: next };
    });
  }, [update]);

  const addAchievement = useCallback((achievementId) => {
    update((s) => {
      if (s.achievements.includes(achievementId)) return s;
      return { ...s, achievements: [...s.achievements, achievementId] };
    });
  }, [update]);

  const setDarkMode = useCallback((on) => {
    update((s) => ({ ...s, darkMode: on }));
  }, [update]);

  const setLanguage = useCallback((lang) => {
    update((s) => ({ ...s, language: lang }));
  }, [update]);

  const resetData = useCallback(() => {
    const fresh = { visited: {}, favorites: {}, achievements: [], darkMode: state.darkMode, language: state.language };
    saveState(fresh);
    setState(fresh);
  }, [state.darkMode, state.language]);

  return {
    ...state,
    markVisited,
    unmarkVisited,
    toggleFavorite,
    addAchievement,
    setDarkMode,
    setLanguage,
    resetData,
  };
}
