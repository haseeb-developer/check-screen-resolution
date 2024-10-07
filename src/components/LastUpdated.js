import React, { useState, useEffect } from 'react';

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
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

    setLastUpdated(formattedDate);
  }, []);

  return (
    <div className="last-updated">
      @Muhammad Haseeb.
      <h2>Last Updated On:</h2>
      <p>{lastUpdated}</p>
    </div>
  );
};

export default LastUpdated;
