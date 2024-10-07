import React, { useState, useEffect } from 'react';

const VoiceCommands = () => {
  const [command, setCommand] = useState('');

  useEffect(() => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript =
        event.results[event.results.length - 1][0].transcript.trim();
      setCommand(transcript);

      if (transcript.toLowerCase() === 'refresh') {
        window.location.reload();
      } else if (transcript.toLowerCase().includes('theme')) {
        document.body.classList.toggle('dark-theme');
      } else if (transcript.toLowerCase() === 'screen resolution') {
        alert(
          `Your screen resolution is ${window.screen.width} x ${window.screen.height}`
        );
      }
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div className="voice-commands">
      <h2>Voice Commands</h2>
      <p>Say "Refresh", "Theme", or "Screen Resolution".</p>
      <p>
        <strong>Last Command:</strong> {command}
      </p>
    </div>
  );
};

export default VoiceCommands;
