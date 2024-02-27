// Header.jsx
import React from "react";
import "./Header.css";
import logo from "../../assets/bloom_healthcare_logo_colored.png"; // Adjust the path as necessary

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Bloom Healthcare Logo" />
      <h1 className="title">bloom</h1>
      <button className="sign-on-button">Sign On</button>
    </header>
  );
}
