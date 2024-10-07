import React, { useEffect, useState } from 'react';

const BatteryStatus = () => {
  const [battery, setBattery] = useState({ level: 0, charging: false });

  useEffect(() => {
    const updateBatteryStatus = async () => {
      const batteryStatus = await navigator.getBattery();
      setBattery({
        level: batteryStatus.level * 100,
        charging: batteryStatus.charging,
      });
    };

    updateBatteryStatus();
    const batteryInterval = setInterval(updateBatteryStatus, 2000);

    return () => clearInterval(batteryInterval);
  }, []);

  return (
    <div className="battery-status">
      <h2>Battery Status</h2>
      <p>Level: {battery.level}%</p>
      <p>Status: {battery.charging ? 'Charging' : 'Not Charging'}</p>
    </div>
  );
};

export default BatteryStatus;
