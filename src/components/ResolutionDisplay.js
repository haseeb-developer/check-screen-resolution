import React from 'react';
import { useScreenResolution } from '../utils/useScreenResolution';

const ResolutionDisplay = () => {
  const { width, height } = useScreenResolution();

  return (
    <div className="resolution-display">
      <h2>Your Screen Resolution</h2>
      <p>
        {width} &nbsp; x &nbsp;{height}
      </p>
    </div>
  );
};

export default ResolutionDisplay;
