import React from 'react'

const Main = (props) => {

    const {currentUser} = props
    
    return(
        <h2>Hello! {currentUser.name}</h2>
    )
}

export default Main