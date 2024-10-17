import React, { useState, useEffect } from 'react';

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Fetching the last updated time from local storage (if it exists)
    const savedTime = localStorage.getItem('lastUpdated');
    if (savedTime) {
      setLastUpdated(savedTime);
    }
  }, []);

  const handleAdminUpdate = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    // Update the last updated time
    setLastUpdated(formattedDate);
    // Save to local storage
    localStorage.setItem('lastUpdated', formattedDate);
  };

  return (
    <div className="last-updated">
      <h2>Last Updated On:</h2>
      <p>{lastUpdated || 'Not updated yet'}</p>
      <button onClick={handleAdminUpdate}>Admin Update</button>
    </div>
  );
};

export default LastUpdated;
