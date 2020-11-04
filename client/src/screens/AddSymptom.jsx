import React from "react";
import { useState } from "react";

import "./addSymptom.css";

const AddSymptom = (props) => {
  const { createSubmit } = props;
  const [formData, setFormData] = useState({
    symptom: "",
    description: "",
    pain_level: "",
  });
  const { symptom, description, pain_level } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="add-title">Add a New Symptom</h2>

      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          createSubmit(formData);
          setFormData({
            symptom: "",
            description: "",
            pain_level: "",
          });
        }}
      >
        <label>What kind of Symptom are you having:</label>
        <br></br>
        <input
          type="text"
          name="symptom"
          value={symptom}
          onChange={handleChange}
        />

        <label>
          How would you describe it?
          </label>
          <br></br>
          <textarea
            type="textarea"
            name="description"
            value={description}
            onChange={handleChange}
          />
        
        <label>
          Pain level:
          </label>
          <br></br>
          <input
            type="text"
            name="pain_level"
            value={pain_level}
            onChange={handleChange}
          />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddSymptom;
