import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const {username, password} = formData
    
    return(
        <>
            <form>
                <h2>Register</h2>
                <label>Username:
                <input
                    type='text'
                    name='username'
                    value={username}
                />       
                </label>
                <label>Password:
                <input
                    type='password'
                    name='password'
                    value={password}
                />
                </label>
                <button>Become Fam</button>                
            </form>
            <h5>Already Symptomatic?</h5>
            <Link to='/'>
                <h5>Login Here</h5>
            </Link>

        </>
    )
}

export default Register