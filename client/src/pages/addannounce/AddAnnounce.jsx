import React, { useState } from 'react'
import upload from '../../utils/upload';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router';
import "./addannounce.scss"

const AddAnnounce = () => {
    const [announce, setAnnounce] = useState({
        title: "",
        desc: "",
        category: "web",
        img: ""
    })
    const navigate = useNavigate()
    const [file, setFile] = useState(null);
    const handleChange = (e) => {
        setAnnounce((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    // console.log(announce)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = await upload(file)
        try {
            await newRequest.post("/announcements", {
                ...announce, img: url
            })
            navigate("/announcement")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='addAnouncement'>
            <h1 className='heading'>Add New Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" onChange={handleChange} placeholder='Title' />
                <input type="text" name="desc" onChange={handleChange} placeholder='Description' />
                <select name="category" onChange={handleChange}>
                    <option value="Web">Web Club</option>
                    <option value="Dance">Dance</option>
                    <option value="PhotoGrapgy">Photography</option>
                    <option value="Music">Music</option>
                </select>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} placeholder='Upload your photo' />
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}

export default AddAnnounce