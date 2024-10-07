import React, { useState, useEffect } from 'react';

const LiveWifiPing = () => {
  const [ping, setPing] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [errorMessage, setErrorMessage] = useState('');

  const pingServer = async () => {
    const startTime = Date.now();
    try {
      const response = await fetch('https://www.google.com/favicon.ico', {
        method: 'HEAD',
        mode: 'no-cors',
      });
      const endTime = Date.now();
      if (response) {
        setPing(endTime - startTime);
        setErrorMessage('');
      }
    } catch (error) {
      setPing(null);
      setErrorMessage('Error pinging server.');
    }
  };

  useEffect(() => {
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        setErrorMessage('');
      } else {
        setPing(null);
        setErrorMessage(
          'You are not connected to WiFi. Please connect to WiFi.'
        );
      }
    };

    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);

    const intervalId = setInterval(() => {
      if (navigator.onLine) {
        pingServer();
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, []);

  return (
    <div className="live-wifi-ping">
      <h2>Live WiFi Ping</h2>
      {isOnline ? (
        ping !== null ? (
          <p>Ping: {ping} ms</p>
        ) : (
          <p>Checking ping...</p>
        )
      ) : (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      )}
    </div>
  );
};

export default LiveWifiPing;
