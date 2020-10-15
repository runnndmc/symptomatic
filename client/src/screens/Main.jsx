import React from "react";
import { Link } from "react-router-dom";
import Layout from "../shared/Layout";
import MySymptoms from "./MySymptoms";

const Main = (props) => {
  const {symptoms, currentUser} = props;

  return (
    <>
      <h2>PAGE : MAIN</h2>

      <div className="all-symptoms">
        <Link to="/symptoms">
          <div>
            <h5>My Symptoms</h5>
          </div>
        </Link>
      </div>

      
        <div>
          <h5>New Symptom</h5>
        </div>
    
    </>
  );
};

export default Main;
