import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import AddSymptom from '../screens/AddSymptom'
import Home from '../screens/Home'

import MySymptoms from '../screens/MySymptoms'
import SymptomDetail from '../screens/SymptomDetail'

import { getAllSymptoms, postSymptom } from '../services/symptoms'



const MainContainer = (props) => {
    const {currentUser} = props
    const [symptoms, setSymptoms] = useState([])
    const history = useHistory()

    useEffect(()=> {
        const fetchSymptoms = async () => {
            const symptomsData = await getAllSymptoms()
            setSymptoms(symptomsData)
        }
        fetchSymptoms()
    }, [])

    const createSubmit = async (formData) => {
        const newSymptom = await postSymptom(formData)
        setSymptoms(prevState => [...prevState, newSymptom])
        history.push('/symptoms')
    }


    return(
        <Switch>
            <Route path="/symptoms/new">
                <AddSymptom 
                    currentUser={currentUser}
                    createSubmit={createSubmit}
                />
            </Route>
            <Route path='/symptoms/:id'>
                <SymptomDetail 
                    currentUser={currentUser}
                    symptoms={symptoms}
                />
            </Route>
            <Route path="/symptoms">
                <MySymptoms 
                    currentUser={currentUser}
                    symptoms={symptoms}
                />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default MainContainer