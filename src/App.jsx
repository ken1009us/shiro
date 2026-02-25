import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import BottomNav from './components/BottomNav';
import MapView from './components/MapView';
import CastleList from './components/CastleList';
import Collection from './components/Collection';
import Settings from './components/Settings';
import Badges from './components/Badges';
import Achievement from './components/Achievement';
import { useCastleStore } from './hooks/useCastleStore';
import { useAchievements } from './hooks/useAchievements';

export default function App() {
  const [view, setView] = useState('map');
  const store = useCastleStore();
  const { achievement, dismissAchievement } = useAchievements(store.visited);

  const views = {
    map: <MapView store={store} />,
    list: <CastleList store={store} />,
    collection: <Collection store={store} />,
    badges: <Badges store={store} />,
    settings: <Settings store={store} />,
  };

  return (
    <Layout darkMode={store.darkMode}>
      <div className="min-h-screen pt-safe" style={{ paddingBottom: 'calc(5rem + var(--sab))' }}>
        <AnimatePresence mode="wait">
          {views[view]}
        </AnimatePresence>
      </div>
      <BottomNav active={view} onChange={setView} />
      <AnimatePresence>
        {achievement && (
          <Achievement
            achievement={achievement}
            onDismiss={dismissAchievement}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
