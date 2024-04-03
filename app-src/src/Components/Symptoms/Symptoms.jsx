// Symptoms.jsx
import React, { useState } from "react";
import "./Symptoms.css";

export default function Symptoms() {
  const symptoms = ["Cough", "Fever", "Fatigue", "Pain", "Anxiety"];
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [severity, setSeverity] = useState(5);

  const handleSymptomClick = (symptom) => {
    setSelectedSymptom(symptom);
  };

  const handleSave = () => {
    if (selectedSymptom) {
      console.log(`Symptom: ${selectedSymptom}, Severity: ${severity}`);
    } else {
      console.error("No symptom selected");
    }
  };

  return (
    <div className="symptom-box">
      <div className="symptoms-container">
        {symptoms.map((symptom, index) => (
          <button
            key={index}
            className={`symptom-button ${
              selectedSymptom === symptom ? "active" : ""
            }`}
            onClick={() => handleSymptomClick(symptom)}
          >
            {symptom}
          </button>
        ))}
      </div>
      <div className="severity-slider">
        <label htmlFor="severity">Severity: {severity}</label>
        <input
          id="severity"
          type="range"
          min="0"
          max="5"
          step="1"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          disabled={!selectedSymptom}
        />
      </div>
      <button
        className="save-button"
        onClick={handleSave}
        disabled={!selectedSymptom}
      >
        Save
      </button>
    </div>
  );
}
