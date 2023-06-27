import React, { useState } from 'react'
import "./register.scss"
import upload from '../../utils/upload';
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router';

const Register = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        rollno: "",
        img: "",
        dept: "",
        phone: 0,
        social: ""
    })

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = await upload(file)
        try {
            await newRequest.post("/auth/register", {
                ...user, img: url
            })
            navigate("/")
        } catch (error) {

        }
    }
    return (
        <div className='register'>
            <h1 className='heading'>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={handleChange} placeholder='Name' />
                <input type="email" name="email" onChange={handleChange} placeholder='email' />
                <input type="password" name="password" onChange={handleChange} placeholder='Password' />
                <input type="text" name="rollno" onChange={handleChange} placeholder='Roll No.' />
                <input type="text" name="dept" onChange={handleChange} placeholder='dept' />
                <input type="number" name="phone" onChange={handleChange} placeholder='phone' />
                <input type="text" name="social" onChange={handleChange} placeholder='LinkedIN' />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} placeholder='Upload your photo' />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register