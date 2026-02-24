import { useEffect } from 'react';

export default function Layout({ darkMode, children }) {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gofun dark:bg-[#1a1a1a] text-sumi dark:text-[#e0dcd4] transition-colors duration-300">
      <div className="max-w-lg mx-auto relative">
        {children}
      </div>
    </div>
  );
}
