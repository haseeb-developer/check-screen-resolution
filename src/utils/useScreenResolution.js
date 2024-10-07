import { useState, useEffect } from 'react';

export const useScreenResolution = () => {
  const [resolution, setResolution] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });

  useEffect(() => {
    const handleResize = () => {
      setResolution({
        width: window.screen.width,
        height: window.screen.height,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return resolution;
};
