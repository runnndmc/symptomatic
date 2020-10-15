import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, Link } from "react-router-dom";
import Main from "../screens/Main";
import MySymptoms from "../screens/MySymptoms";
import NewSymptom from "../screens/NewSymptom";
import { getAllSymptoms } from "../services/symptoms";

const MainContainer = (props) => {
  const { currentUser, handleLogout } = props;

  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    const fetchSymptom = async () => {
      const symptomsArr = await getAllSymptoms();
      setSymptoms(symptomsArr);
    };
    fetchSymptom();
  }, []);

  /* const createSubmit = async(formData) => {
        const addSymptom = await postSymptom(formData)
        let symptom_id = addSymptom.id

        setSymptoms((prevState) => [...prevState, addSymptom])
        history.push("/symptoms")
    } */

  return (
    <Switch>
      <Main currentUser={currentUser} symptoms={symptoms} />

      <MySymptoms symptoms={symptoms} currentUser={currentUser} />
    </Switch>
  );
};

export default MainContainer;
