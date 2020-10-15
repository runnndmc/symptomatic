import React, {useEffect, useState} from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import Main from '../screens/Main';
import MySymptoms from '../screens/MySymptoms';
import NewSymptom from '../screens/NewSymptom';
import { getAllSymptoms } from '../services/symptoms';


const MainContainer = (props) => {
    const {currentUser, handleLogout} = props

    const [symptoms, setSymptoms] = useState([])

    useEffect(()=>{
        const fetchSymptom = async () => {
            const symptomsArr = await getAllSymptoms();
            setSymptoms(symptomsArr)
        }
        if (currentUser){
            fetchSymptom()
        }
    }, [currentUser])

/*     const createSubmit = async(formData) => {
        const addSymptom = await postSymptom(formData)
        let symptom_id = addSymptom.id

        setSymptoms((prevState) => [...prevState, addSymptom])
        history.push("/symptoms")
    }
 */

    return(
        <Switch>
            {/* <Route path="/symptoms/add">
                <NewSymptom 
                    createSubmit={createSubmit}
                />
            </Route> */}
            <Route path="/main">
                <Main symptoms={symptoms}/>
            </Route>
        </Switch>
    )
}

export default MainContainer