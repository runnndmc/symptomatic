import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import AddSymptom from "../screens/AddSymptom";
import EditSymptom from "../screens/EditSymptom";
import Home from "../screens/Home";

import MySymptoms from "../screens/MySymptoms";
import SymptomDetail from "../screens/SymptomDetail";

import { getAllSymptoms, postSymptom, putSymptom, deleteSymptom } from "../services/symptoms";

const MainContainer = (props) => {
  const { currentUser } = props;
  const [symptoms, setSymptoms] = useState([]);
  const history = useHistory();
  const {id} = useParams()

  useEffect(() => {
    const fetchSymptoms = async () => {
      const symptomsData = await getAllSymptoms();
      setSymptoms(symptomsData);
    };
    fetchSymptoms();
  }, []);

  const createSubmit = async (formData) => {
    const newSymptom = await postSymptom(formData);
    setSymptoms((prevState) => [...prevState, newSymptom]);
    history.push("/symptoms");
  };

  const updateSubmit = async (id, formData) => {
    const editedSymptom = await putSymptom(id, formData)
    setSymptoms(prevState => prevState.map(symptom => {
        return symptom.id === Number(id) ? editedSymptom : symptom
    }))
    history.push(`/symptoms/${id}`)
}

const handleDelete = async(id) => {
    await deleteSymptom(id)
    setSymptoms(prevState => prevState.filter(symptom => symptom.id !== id))
}

  return (
    <Switch>
      <Route path="/symptoms/new">
        <AddSymptom currentUser={currentUser} createSubmit={createSubmit} />
      </Route>
      <Route path="/symptoms/:id/edit">
        <EditSymptom updateSubmit={updateSubmit} symptoms={symptoms} id={id} />
      </Route>
      <Route path="/symptoms/:id">
        <SymptomDetail currentUser={currentUser} symptoms={symptoms} handleDelete={handleDelete}/>
      </Route>
      <Route path="/symptoms">
        <MySymptoms currentUser={currentUser} symptoms={symptoms} />
      </Route>
      <Route exact path="/">
        <Home currentUser={currentUser}/>
      </Route>
    </Switch>
  );
};

export default MainContainer;
