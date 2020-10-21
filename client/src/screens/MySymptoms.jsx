import React from "react";
import SymptomCard from "../components/SymptomCard";

const MySyptoms = (props) => {
  const { symptoms, currentUser } = props;

  const cards = symptoms.map(symptom => (
    <SymptomCard symptom={symptom.symptom} pain={symptom.pain_level} key={symptom.id} id={symptom._id}/>
    ))

  return (
    <>
      <h1>MY SYMPTOMS</h1>
        {cards}    
    </>
  );
};

export default MySyptoms;