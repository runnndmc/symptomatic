import React from "react";
import { useState } from "react";

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
    <div className="create-form">
      <h2> add new symptom HERE</h2>

      <form
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
        <label>
          Type of Symptom:
          <input
            type="text"
            name="symptom"
            value={symptom}
            onChange={handleChange}
          />
        </label>
        <label>
          Describe more about it:
          <input
            type="textarea"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <label>
          Pain level:
          <input
            type="text"
            name="pain_level"
            value={pain_level}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddSymptom;
