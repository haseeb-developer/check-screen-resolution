// src/components/LastUpdated.js
import React, { useState, useEffect } from 'react';

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Get the current date and format it
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'long', // "Monday"
      year: 'numeric', // "2024"
      month: 'long', // "October"
      day: 'numeric', // "7"
      hour: '2-digit', // "03"
      minute: '2-digit', // "30"
      second: '2-digit', // "15"
      hour12: true, // "AM/PM format"
    });

    setLastUpdated(formattedDate);
  }, []);

  return (
    <div className="last-updated">
      <h2>Last Updated On:</h2>
      <p>{lastUpdated}</p>
    </div>
  );
};

export default LastUpdated;
