import React from "react";
import { useHistory } from "react-router-dom";
import SymptomCard from "../components/SymptomCard";

const MySyptoms = (props) => {
  const { symptoms, currentUser } = props;
  const history = useHistory()

  console.log(symptoms)

  const cards = symptoms.map(symptom => (
    <div 
      key={symptom.id}
      onClick={(e) => {
        history.push(`/symptoms/${symptom.id}`)
      }}>

    <SymptomCard 
      symptom={symptom.symptom} 
      pain={symptom.pain_level} 
    />

    </div>
  ))
     console.log(cards)

  return (
    <>
      <h1>MY SYMPTOMS</h1>
        {cards}    
    </>
  );
};

export default MySyptoms;