// SplashScreen.js
import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!showSplash) {
    return null; // Once the splash is done, render nothing
  }

  return (
    <div className="splash-screen">
      <img
        src="./assets/logo.png"
        alt="Buzz Club Logo"
        className="splash-logo"
      />
      <h1 className="splash-text">Welcome to Buzz Club</h1>
    </div>
  );
};

export default SplashScreen;
