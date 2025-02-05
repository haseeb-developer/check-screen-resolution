import React, { useState, useEffect } from 'react';

const CountryStatus = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setLocation(data.address);
          } catch (err) {
            setError('Failed to fetch location details');
          }
        },
        (err) => {
          setError(err.message);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="detect-place p-4 border rounded shadow">
      <h2>Live Location Detection</h2>
      {error && <p>Error: {error}</p>}
      {location ? (
        <div>
          <p><strong>Country:</strong> {location.country}</p>
          <p><strong>State:</strong> {location.state}</p>
          <p><strong>Street:</strong> {location.road}</p>
          <p><strong>Postal Code:</strong> {location.postcode}</p>
        </div>
      ) : (
        <p>Detecting location...</p>
      )}
    </div>
  );
};

export default CountryStatus;
