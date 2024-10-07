// src/components/ScreenDetails.js
import React from 'react';
import { useScreenResolution } from '../utils/useScreenResolution';
import { isMobile, isTablet } from 'react-device-detect';

const ScreenDetails = () => {
  const { width, height } = useScreenResolution();
  const aspectRatio = (width / height).toFixed(2);
  const isPortrait = height > width;

  return (
    <div className="screen-details">
      <h2>Screen Details</h2>
      <p>Aspect Ratio: {aspectRatio}</p>
      <p>Orientation: {isPortrait ? 'Portrait' : 'Landscape'}</p>

      <p>
        Device Type: {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}
      </p>
    </div>
  );
};

export default ScreenDetails;
