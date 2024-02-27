// Symptoms.jsx
import React from "react";
import "./Symptoms.css";

export default function Symptoms() {
  // Define an array of symptom names for the buttons
  const symptoms = ["Cough", "Fever", "Fatigue", "Pain", "Shortness of Breath"];

  return (
    <div className="symptoms-container">
      {symptoms.map((symptom, index) => (
        <button key={index} className="symptom-button">
          {symptom}
        </button>
      ))}
    </div>
  );
}
