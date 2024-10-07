// src/components/ThemeSwitcher.js
import React, { useState } from 'react';
import '../styles/ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    const nextTheme =
      theme === 'light' ? 'dark' : theme === 'dark' ? 'gradient' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="theme-switcher">
      <button onClick={switchTheme} className="themeswitcher">
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
