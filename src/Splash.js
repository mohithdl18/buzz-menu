import logo from './logo.png';
import React, { useEffect } from "react";
import "./Splash.css";

const Splash = ({ onLoaded }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onLoaded(); // Trigger onLoaded when splash screen should disappear
    }, 2000); // Set the timeout duration as needed

    return () => clearTimeout(timeout);
  }, [onLoaded]);

  return (
    <div className="splash-screen">
      <img
        src={logo}
        alt="Buzz Club Logo"
        className="splash-logo"
      />
      <div className='splash-text'>
        <span className='v'>VEG</span>
        <span> I </span>
        <span className='n'>NON-VEG</span>
        <h3>Your order will be ready in about 10 minutes</h3>
      </div>
    </div>
  );
};

export default Splash;
