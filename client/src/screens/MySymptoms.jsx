import React from "react";
import { Link, useHistory } from "react-router-dom";
import SymptomCard from "../components/SymptomCard";
import Footer from "../shared/Footer";

const MySyptoms = (props) => {
  const { symptoms, currentUser } = props;
  const history = useHistory();

  console.log(symptoms);

  return (
    <>
    <h2>My Symptoms</h2>
      {symptoms.map((symptom) => (
        <div key={symptom.id}>
          {currentUser && currentUser.id === symptom.user_id && (
            <Link to={`/symptoms/${symptom.id}`}>
              <SymptomCard
                symptom={symptom.symptom}
                pain={symptom.pain_level}
              />
            </Link>
          )}
        </div>
      ))}
      <Footer />
    </>
  );
};

export default MySyptoms;
