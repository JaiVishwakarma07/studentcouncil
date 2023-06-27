import React, { useState } from 'react'
import './login.scss'
import { useNavigate } from "react-router-dom"
import newRequest from '../../utils/newRequest'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await newRequest.post("/auth/login", { email, password }, { withCredentials: true })
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/")
        } catch (err) {
            setError(err.response.data)
        }
    }

    return (
        <div className='Login'>
            <h1 className='heading'>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                {err && err}
            </form>
        </div>
    )
}

export default Login