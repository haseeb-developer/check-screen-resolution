// src/components/ScreenComparison.js
import React, { useState } from 'react';

const devices = [
  { name: 'iPhone 14 Pro', resolution: '2556 x 1179', colorDepth: '24 bits' },
  {
    name: 'Samsung Galaxy S23',
    resolution: '2340 x 1080',
    colorDepth: '24 bits',
  },
  {
    name: 'iPad Air (5th Gen)',
    resolution: '2360 x 1640',
    colorDepth: '24 bits',
  },
  { name: 'MacBook Pro 16"', resolution: '3072 x 1920', colorDepth: '30 bits' },
  { name: 'Dell XPS 13', resolution: '1920 x 1200', colorDepth: '24 bits' },
];

const ScreenComparison = () => {
  const [comparison, setComparison] = useState(null);

  const compareDevice = () => {
    const currentResolution = `${window.screen.width} x ${window.screen.height}`;
    const currentColorDepth = `${window.screen.colorDepth} bits`;

    const matches = devices.filter(
      (device) =>
        device.resolution === currentResolution &&
        device.colorDepth === currentColorDepth
    );

    setComparison(matches.length > 0 ? matches : null);
  };

  return (
    <div className="screen-comparison">
      <h2>Screen Size Comparison</h2>
      <button onClick={compareDevice}>Compare with Popular Devices</button>
      {comparison && (
        <div>
          <h3>Matched Devices:</h3>
          <ul>
            {comparison.map((device, index) => (
              <li key={index}>
                {device.name} - Resolution: {device.resolution}, Color Depth:{' '}
                {device.colorDepth}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!comparison && <p>No matching devices found.</p>}
    </div>
  );
};

export default ScreenComparison;
