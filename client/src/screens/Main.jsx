import React from 'react'

const Main = (props) => {

    const {currentUser, handleLogout} = props
    console.log(currentUser.username)
    console.log(props)
    console.log(handleLogout)
    return(
        <>
        <h2>Hello !</h2>
        
        </>
    )
}

export default Main