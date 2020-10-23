import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import MySyptoms from '../screens/MySymptoms'
import SymptomDetail from '../screens/SymptomDetail'

import { getAllSymptoms } from '../services/symptoms'


const MainContainer = (props) => {
    const {currentUser} = props
    const [symptoms, setSymptoms] = useState([])

    useEffect(()=> {
        const fetchSymptoms = async () => {
            const symptomsData = await getAllSymptoms()
            setSymptoms(symptomsData)
        }
        fetchSymptoms()
    }, [])

    return(
        <Switch>
            <Route exact path="/">
                <MySyptoms 
                    currentUser={currentUser}
                    symptoms={symptoms}
                />
            </Route>
            <Route exact path='/symptoms/:id'>
                <SymptomDetail 
                    currentUser={currentUser}
                    symptoms={symptoms}
                />
            </Route>
        </Switch>
    )
}

export default MainContainer