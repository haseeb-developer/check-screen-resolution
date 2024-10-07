import React, { useState, useEffect } from 'react';

const ColorDepth = () => {
  const [colorDepth, setColorDepth] = useState(null);

  useEffect(() => {
    const currentColorDepth = window.screen.colorDepth;
    setColorDepth(currentColorDepth);
  }, []);

  return (
    <div className="color-depth">
      <h2>Device Color Depth</h2>
      {colorDepth !== null ? (
        <p>{colorDepth} bits per pixel</p>
      ) : (
        <p>Fetching color depth...</p>
      )}
    </div>
  );
};

export default ColorDepth;
