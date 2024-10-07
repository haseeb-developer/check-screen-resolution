// src/components/ViewportSize.js
import React, { useState, useEffect } from 'react';

const ViewportSize = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="viewport-size">
      <h2>Browser Viewport Size</h2>
      <p>Width: {viewport.width}px</p>
      <p>Height: {viewport.height}px</p>
    </div>
  );
};

export default ViewportSize;
