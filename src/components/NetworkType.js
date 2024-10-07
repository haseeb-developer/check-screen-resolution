import React, { useEffect, useState } from 'react';

const NetworkType = () => {
  const [networkType, setNetworkType] = useState('Checking...');

  const updateNetworkType = () => {
    if (navigator.connection) {
      const { type } = navigator.connection;

      if (type === 'wifi') {
        setNetworkType('You are connected to WiFi');
      } else if (type === 'ethernet') {
        setNetworkType('You are connected via Ethernet');
      } else if (type === 'cellular') {
        setNetworkType('You are connected via Mobile Data');
      } else {
        setNetworkType('You are using another type of connection');
      }
    } else {
      setNetworkType('Network information is not supported.');
    }
  };

  useEffect(() => {
    updateNetworkType();

    const intervalId = setInterval(updateNetworkType, 5000);

    window.addEventListener('online', updateNetworkType);
    window.addEventListener('offline', () => {
      setNetworkType('You are offline.');
    });

    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkType);
    }

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('online', updateNetworkType);
      window.removeEventListener('offline', () =>
        setNetworkType('You are offline.')
      );
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkType);
      }
    };
  }, []);

  return (
    <div className="network-type">
      <h2>Network Type</h2>
      <p>{networkType}</p>
    </div>
  );
};

export default NetworkType;
