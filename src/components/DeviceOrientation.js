import React, { useEffect, useState } from 'react';

const DeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  const handleOrientation = (event) => {
    setOrientation({
      alpha: event.alpha ? event.alpha.toFixed(2) : 0,
      beta: event.beta ? event.beta.toFixed(2) : 0,
      gamma: event.gamma ? event.gamma.toFixed(2) : 0,
    });
  };

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);

      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
      };
    } else {
      console.error('Device Orientation not supported');
    }
  }, []);

  return (
    <div className="device-orientation">
      <h2>Device Orientation</h2>
      <p>
        Alpha: {orientation.alpha !== null ? `${orientation.alpha}°` : 'N/A'}
      </p>
      <p>Beta: {orientation.beta !== null ? `${orientation.beta}°` : 'N/A'}</p>
      <p>
        Gamma: {orientation.gamma !== null ? `${orientation.gamma}°` : 'N/A'}
      </p>
    </div>
  );
};

export default DeviceOrientation;
