import React from 'react'
import './dircard.scss'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Dircard = ({ user }) => {
    // console.log(user)
    return (
        <div className="dircard">
            <img src={user.img} alt="" />
            <div className="info">
                <div className="user">
                    <span>Name : {user.username}</span>
                </div>
                <span>Roll No : {user.rollno}</span>
                <span>Department : {user.dept}</span>
            </div>
            <hr />
            <div className="details">
                <span>Email : {user.email}</span>
                <span>LinkedIN : {user.social}</span>
            </div>
        </div>
    )
}

export default Dircard