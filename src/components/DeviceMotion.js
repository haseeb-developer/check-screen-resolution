import React, { useState, useEffect } from 'react';

const DeviceMotion = () => {
  const [motionData, setMotionData] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  useEffect(() => {
    const handleDeviceMotion = (event) => {
      setMotionData({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    window.addEventListener('deviceorientation', handleDeviceMotion);

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceMotion);
    };
  }, []);

  return (
    <div className="device-motion">
      <h2>Device Motion</h2>
      <p>Z-axis (alpha): {Math.round(motionData.alpha)}°</p>
      <p>X-axis (beta): {Math.round(motionData.beta)}°</p>
      <p>Y-axis (gamma): {Math.round(motionData.gamma)}°</p>
    </div>
  );
};

export default DeviceMotion;
