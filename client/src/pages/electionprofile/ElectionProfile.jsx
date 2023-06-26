import React from 'react'
import "./electionprofile.scss"

const ElectionProfile = ({ setOpenProfile, data }) => {
    return (
        <div className="electionprofile">
            <div className="wrapper">
                <img src={data.img} alt="" />
                <h1>{data.name}</h1>
                <div className="info">
                    <span>ROLLNO : {data.rollno}</span>
                    <span>DEPARTMENT : {data.dept}</span>
                    <span>COURSE : {data.course}</span>
                    <p>About : {data.desc}</p>
                </div>
                <button className="close" onClick={() => setOpenProfile(false)}>
                    close
                </button>
            </div>
        </div>
    )
}

export default ElectionProfile