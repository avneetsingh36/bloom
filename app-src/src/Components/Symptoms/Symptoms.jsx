// Symptoms.jsx
import React, { useState } from "react";
import "./Symptoms.css";

export default function Symptoms() {
  const symptoms = ["Cough", "Fever", "Fatigue", "Pain", "Anxiety"];

  // State to track which symptom is selected
  const [selectedSymptom, setSelectedSymptom] = useState("");
  // State to track the severity of the symptom
  const [severity, setSeverity] = useState(5);

  // Function to handle clicking on a symptom button
  const handleSymptomClick = (symptom) => {
    setSelectedSymptom(symptom);
  };

  // Function to handle saving the form
  const handleSave = () => {
    if (selectedSymptom) {
      console.log(`Symptom: ${selectedSymptom}, Severity: ${severity}`);
      // Here you can add what to do with the form data, such as sending it to a server
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
          disabled={!selectedSymptom} // Disable slider if no symptom is selected
        />
      </div>
      <button
        className="save-button"
        onClick={handleSave}
        disabled={!selectedSymptom} // Disable save button if no symptom is selected
      >
        Save
      </button>
    </div>
  );
}
