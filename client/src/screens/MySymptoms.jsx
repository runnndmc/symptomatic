import React from "react";
import SymptomCard from "../components/SymptomCard";

const MySymptoms = (props) => {
  const { currentUser, symptoms } = props;

  return (
    <>
      {currentUser && (
        <>
          <h2>My Symptoms</h2>
          {symptoms.map((symptom) => (
            <div key={symptom.id} className="symptom-card">
              <p>{symptom.symptom}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MySymptoms;
