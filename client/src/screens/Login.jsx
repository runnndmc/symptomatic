import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const {username, password} = formData
    
    return(
        <>
            <form>
                <h2>Login</h2>
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
                <button>Enter if you DARE</button>                
            </form>
            <h5>New to Symptomatic?</h5>
            <Link to='/register'>
                <h5>Register Here</h5>
            </Link>

        </>
    )
}

export default Login