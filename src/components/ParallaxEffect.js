import React, { useEffect } from 'react';

const ParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      document.documentElement.style.setProperty(
        '--scrollY',
        `${scrollPosition * 0.5}px`
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <></>;
};

export default ParallaxEffect;
