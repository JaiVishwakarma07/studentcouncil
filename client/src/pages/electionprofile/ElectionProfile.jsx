import React from 'react'
import "./electionprofile.scss"

const ElectionProfile = ({ setOpenProfile, data }) => {
    return (
        <div className="electionprofile">
            <div className="wrapper">
                <img src={data.img} alt="" />
                <h1>{data.username}</h1>
                <div className="info">
                    <span>ROLLNO : {data.rollno}</span>
                    <span>DEPARTMENT : {data.dept}</span>
                    <span>COURSE : {data.dept}</span>
                    <span>Email : {data.email}</span>

                </div>
                <button className="close" onClick={() => setOpenProfile(false)}>
                    close
                </button>
            </div>
        </div>
    )
}

export default ElectionProfile