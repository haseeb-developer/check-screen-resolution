// src/components/DeviceInfo.js
import React, { useEffect, useState } from 'react';

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    deviceName: 'Loading...',
    browser: 'Loading...',
    os: 'Loading...',
    screenResolution: 'Loading...',
    deviceType: 'Loading...',
    batteryLevel: 'Loading...',
    batteryCharging: 'Loading...',
    timezone: 'Loading...',
    language: 'Loading...',
    connectionType: 'Loading...',
    uptime: 'Loading...',
    publicIP: 'Loading...',
  });

  useEffect(() => {
    const getDeviceInfo = async () => {
      // Browser Name and Version
      const userAgent = navigator.userAgent;
      let browserName, browserVersion;

      if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Chrome';
        browserVersion = userAgent.split('Chrome/')[1].split(' ')[0];
      } else if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Firefox';
        browserVersion = userAgent.split('Firefox/')[1];
      } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Safari';
        browserVersion = userAgent.split('Version/')[1].split(' ')[0];
      } else {
        browserName = 'Unknown';
        browserVersion = 'Unknown';
      }

      // Operating System
      let os = 'Unknown OS';
      if (userAgent.indexOf('Windows NT') > -1) {
        os = 'Windows';
      } else if (userAgent.indexOf('Mac OS') > -1) {
        os = 'Mac OS';
      } else if (userAgent.indexOf('Linux') > -1) {
        os = 'Linux';
      } else if (userAgent.indexOf('Android') > -1) {
        os = 'Android';
      } else if (userAgent.indexOf('like Mac') > -1) {
        os = 'iOS';
      }

      // Screen Resolution
      const screenResolution = `${window.screen.width} x ${window.screen.height}`;

      // Device Type
      const deviceType = /Mobi|Android/i.test(userAgent) ? 'Mobile' : 'Desktop';

      // Battery Status
      let batteryLevel = 'N/A';
      let batteryCharging = 'N/A';
      if (navigator.getBattery) {
        const battery = await navigator.getBattery();
        batteryLevel = `${(battery.level * 100).toFixed(0)}%`;
        batteryCharging = battery.charging ? 'Yes' : 'No';
      }

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const language = navigator.language || navigator.userLanguage;

      const connectionType = navigator.connection
        ? navigator.connection.effectiveType
        : 'Unknown';

      setDeviceInfo({
        deviceName: `${navigator.platform} (${deviceType})`,
        browser: `${browserName} ${browserVersion}`,
        os,
        screenResolution,
        deviceType,
        batteryLevel,
        batteryCharging,
        timezone,
        language,
        connectionType,
      });
    };

    getDeviceInfo();
    const intervalId = setInterval(getDeviceInfo, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="device-info">
      <h2>Device Information</h2>
      <p>
        <strong>Device Name:</strong> {deviceInfo.deviceName}
      </p>
      <p>
        <strong>Browser:</strong> {deviceInfo.browser}
      </p>
      <p>
        <strong>Operating System:</strong> {deviceInfo.os}
      </p>
      <p>
        <strong>Device Type:</strong> {deviceInfo.deviceType}
      </p>
      <p>
        <strong>Timezone:</strong> {deviceInfo.timezone}
      </p>
      <p>
        <strong>Language:</strong> {deviceInfo.language}
      </p>
    </div>
  );
};

export default DeviceInfo;
