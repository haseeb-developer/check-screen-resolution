import React, { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs'; // Import bcrypt library

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false); // State to control signup mode

  useEffect(() => {
    const storedUpdatedTime = localStorage.getItem('lastUpdatedTime');
    if (storedUpdatedTime) {
      setLastUpdated(storedUpdatedTime);
    }

    // Retrieve the hashed password from local storage
    const storedHashedPassword = localStorage.getItem('adminPassword');
    if (storedHashedPassword) {
      setHashedPassword(storedHashedPassword); // Store the hashed password in state
    }

    const storedAdminStatus = localStorage.getItem('isAdmin');
    if (storedAdminStatus === 'true') {
      setIsAdmin(true);
    }

    // Remove admin status on initial load
    localStorage.removeItem('isAdmin');
  }, []);

  const handleLogin = () => {
    // Verify the hashed password with bcrypt
    if (bcrypt.compareSync(adminPassword, hashedPassword)) {
      localStorage.setItem('isAdmin', 'true');
      setIsAdmin(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const handleSignup = () => {
    // Hash the password before storing it
    const salt = bcrypt.genSaltSync(10); // Generate a salt
    const hashedPassword = bcrypt.hashSync(adminPassword, salt); // Hash the password
    localStorage.setItem('adminPassword', hashedPassword); // Store the hashed password
    alert('Signup successful! You can now log in.');
    setAdminPassword(''); // Clear the password field after signup
    setIsSigningUp(false); // Exit signup mode
  };

  const handleUpdate = () => {
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

    localStorage.setItem('lastUpdatedTime', formattedDate);
    setLastUpdated(formattedDate);
  };

  return (
    <div className="last-updated">
      <h2>Last Updated On:</h2>
      <p>{lastUpdated || 'No updates yet.'}</p>

      {!isAdmin ? (
        <div>
          <h3>Admin Signup/Login</h3>
          {isSigningUp ? (
            <div>
              <input
                type="password"
                placeholder="Set admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="input__update"
              />
              <button onClick={handleSignup}>Sign Up</button>
              <button onClick={() => setIsSigningUp(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <input
                type="password"
                placeholder="Enter admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="input__update"
              />
              <button onClick={handleLogin}>Login</button>
              {/* Show the signup button only if there is no password set */}
              {!hashedPassword && (
                <button onClick={() => setIsSigningUp(true)}>Sign Up</button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3>Admin Controls</h3>
          <button onClick={handleUpdate}>Update Last Updated Time</button>
        </div>
      )}
    </div>
  );
};

export default LastUpdated;
