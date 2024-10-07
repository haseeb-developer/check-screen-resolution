// src/components/DeviceInfo.js
import React, { useEffect, useState } from 'react';

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    deviceName: 'Loading...',
    browser: 'Loading...',
    os: 'Loading...',
    screenResolution: 'Loading...',
    deviceType: 'Loading...',
  });

  useEffect(() => {
    const getDeviceInfo = () => {
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

      setDeviceInfo({
        deviceName: `${navigator.platform} (${deviceType})`,
        browser: `${browserName} ${browserVersion}`,
        os,
        screenResolution,
        deviceType,
      });
    };

    getDeviceInfo();
    const intervalId = setInterval(getDeviceInfo, 10000); // Refresh every 10 seconds

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
        <strong>Screen Resolution:</strong> {deviceInfo.screenResolution}
      </p>
      <p>
        <strong>Device Type:</strong> {deviceInfo.deviceType}
      </p>
    </div>
  );
};

export default DeviceInfo;
