import React, { useState } from 'react'
import './electioncard.scss'
import ElectionProfile from '../../pages/electionprofile/ElectionProfile'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const ElectionCard = ({ id }) => {
    const [openProfle, setOpenProfile] = useState(false)
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const { isLoading, error, data } = useQuery({
        queryKey: ['user', id],
        queryFn: () => newRequest.get(`/user/single/` + id).then((res) => {
            return res.data
        })
    })
    const vote = false;
    return (
        <div className="electioncard">
            {isLoading ? "loading..." : <img src={data.img} alt="" />}
            {isLoading ? "loading..." : <div className="info">
                <div className="user">
                    <span>Name : {data.username}</span>
                </div>
                <p>RollNO : {data.rollno}</p>
                <span>Social link : {data.social}</span>
            </div>}
            <hr />
            <div className="details">
                {!vote && !currentUser.isAdmin && <button onClick={() => { }}>Vote</button>}
                <button onClick={() => setOpenProfile(true)}>Profile</button>
            </div>
            {openProfle && <ElectionProfile setOpenProfile={setOpenProfile} data={data} />}
        </div>
    )
}

export default ElectionCard