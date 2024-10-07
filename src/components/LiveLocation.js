import React, { useState, useEffect } from 'react';

const LiveLocation = () => {
  const [location, setLocation] = useState({
    city: '',
    country: '',
    coords: { lat: null, lon: null },
  });
  const [errorMessage, setErrorMessage] = useState('');

  const getLocation = async () => {
    try {
      const response = await fetch('http://ip-api.com/json/');
      const data = await response.json();

      if (data.status === 'fail') {
        setErrorMessage('Unable to retrieve location information.');
      } else {
        setLocation({
          city: data.city,
          country: data.country,
          coords: { lat: data.lat, lon: data.lon },
        });
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage('Error fetching location data.');
    }
  };

  useEffect(() => {
    getLocation();
    const intervalId = setInterval(getLocation, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="live-location">
      <h2>Your Live Location</h2>
      {errorMessage ? (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      ) : (
        <div>
          <p>City: {location.city || 'Fetching...'}</p>
          <p>Country: {location.country || 'Fetching...'}</p>
          <p>
            Coordinates: {location.coords.lat}, {location.coords.lon}
          </p>
        </div>
      )}
    </div>
  );
};

export default LiveLocation;
