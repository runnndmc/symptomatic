import React from 'react'

import { Route, Switch } from 'react-router-dom'
import MySyptoms from '../screens/MySymptoms'


const MainContainer = (props) => {
    const {currentUser} = props

    return(
        <Switch>
            <Route exact path="/">
                <MySyptoms />
            </Route>
        </Switch>
    )
}

export default MainContainer