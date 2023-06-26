import React, { useState } from 'react'
import './electioncard.scss'
import ElectionProfile from '../../pages/electionprofile/ElectionProfile'

const ElectionCard = ({ vote, setVote }) => {
    const [openProfle, setOpenProfile] = useState(false)
    const data = {
        name: "Jai Vishwakarma",
        rollno: "214ca027",
        dept: "MACS",
        course: "MCA",
        year: 3,
        img: "https://m.timesofindia.com/photo/90103603/90103603.jpg",
        desc: "A curated list with React Templates that provide user profile pages, an element that might help your app to increase user interaction and retention."
    }
    return (
        <div className="electioncard">
            <img src="https://m.timesofindia.com/photo/90103603/90103603.jpg" alt="" />
            <div className="info">
                <div className="user">
                    <span>username</span>
                </div>
                <p>desc</p>
                <span>LinkedIN</span>
            </div>
            <hr />
            <div className="details">
                {!vote && <button onClick={() => setVote(!vote)}>Vote</button>}
                <button onClick={() => setOpenProfile(true)}>Profile</button>
            </div>
            {openProfle && <ElectionProfile setOpenProfile={setOpenProfile} data={data} />}
        </div>
    )
}

export default ElectionCard