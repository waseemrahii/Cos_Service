import React from "react";

export default function FooterLogoAndBio({ logo, bio, socialLinks }) {
  return (
    <div className="footer-box">
      <a href="/" className="navbar-brand">
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: "100px", height: "auto" }}
        />
      </a>
      <p
        className="company-bio"
        style={{ textAlign: "left", marginLeft: "40px" }}
      >
        {bio}
      </p>
      <div
        className="social-links"
        style={{
          backgroundColor: "transparent",
          padding: "10px",
          borderRadius: "50%",
          color: "#fff",
        }}
      >
        {socialLinks.map((link, index) => (
          <a href={link.href} key={index}>
            <i className={link.iconClass} />
          </a>
        ))}
      </div>
    </div>
  );
}
