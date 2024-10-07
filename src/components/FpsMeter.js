import React, { useState, useEffect, useRef } from 'react';

const FpsMeter = () => {
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const lastFrameTime = useRef(performance.now());

  useEffect(() => {
    const measureFps = () => {
      const now = performance.now();
      frameCount.current++;

      if (now - lastFrameTime.current >= 1000) {
        setFps(frameCount.current);
        frameCount.current = 0;
        lastFrameTime.current = now;
      }

      requestAnimationFrame(measureFps);
    };

    measureFps();

    return () => {
      frameCount.current = 0;
      lastFrameTime.current = performance.now();
    };
  }, []);

  return (
    <div className="fps-meter">
      <h2>Live FPS Meter</h2>
      <p>Current FPS: {fps}</p>
    </div>
  );
};

export default FpsMeter;
