import React, { useState, useEffect } from 'react';

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState('');

  const updateNetworkStatus = () => {
    setIsOnline(navigator.onLine);
    if (navigator.connection) {
      setConnectionType(navigator.connection.effectiveType);
    }
  };

  useEffect(() => {
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    if (navigator.connection) {
      setConnectionType(navigator.connection.effectiveType);
    }

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  return (
    <div className="network-status">
      <h2>Network Status</h2>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
      {isOnline && <p>Connection Type: {connectionType}</p>}
    </div>
  );
};

export default NetworkStatus;
