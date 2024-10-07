import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="theme-switcher-container">
      <button onClick={toggleTheme} className="theme-switcher-button">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
        <span className="theme-label">
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
