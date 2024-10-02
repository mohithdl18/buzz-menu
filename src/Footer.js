import React from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p>Phone: 7022911561</p>
        <p>Email: chiragchiru2k2@gmail.com</p>

        <h3>Follow Us</h3>
        <p>
          Instagram:
          <a
            href="https://www.instagram.com/_buzz_club_._?igsh=Y250Nm1lanVyb2xh"
            target="_blank"
            rel="noopener noreferrer"
          >
            @BuzzClub
          </a>
        </p>

        <h3>Developers</h3>
        <p>Mohith D L (mohithdl1803@gmail.com)</p>
        <p>Sanjan B M (sanjanacharaya1234@gmail.com)</p>

        <p>© 2024 Buzz Club. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;