import React, { useState } from 'react'
import './feedback.scss'
import axios from 'axios'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


const Feedback = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const [feedback, setFeedback] = useState({
        username: "",
        rollno: "",
        email: "",
        club: "",
        desc: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFeedback((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // console.log(feedback)
    const handleSubmit = async (e) => {
        try {
            await newRequest.post("/feedback/getfeedback", feedback)
        } catch (error) {
            console.log(error)
        }
        navigate("/")
    }

    return (
        <div className='feedback'>
            <h1 className='heading'>Feedback Form</h1>
            <form>
                <input type="text" name="username" onChange={handleChange} placeholder='Name' />
                <input type="text" name='rollno' placeholder='Roll No.' onChange={handleChange} />
                <input type="email" name='email' placeholder='email' onChange={handleChange} />
                <label htmlFor="Clubs">Select Club</label>
                <select name="club" onChange={handleChange}>
                    <option value="Web">Web Club</option>
                    <option value="Dance">Dance</option>
                    <option value="PhotoGrapgy">Photography</option>
                    <option value="Music">Music</option>
                </select>
                <textarea name="desc" id="" cols="30" rows="10" onChange={handleChange} placeholder='Write your feedback here'></textarea>
                <button onClick={handleSubmit}>Submit</button>
                {currentUser.isAdmin && <div>
                    <Link to="/showfeedbacks" style={{ textDecoration: "none", color: "inherit", border: "1px solid black", padding: "5px" }}>Show Feedbacks</Link>
                </div>}
            </form>
        </div>
    )
}

export default Feedback