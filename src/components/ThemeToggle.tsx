import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg bg-c4-light hover:bg-c4-accent/10 flex items-center justify-center transition-all duration-200 hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-c4-accent" />
      ) : (
        <Moon className="w-5 h-5 text-c4-text" />
      )}
    </button>
  );
};

export default ThemeToggle;