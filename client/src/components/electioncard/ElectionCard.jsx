import React, { useEffect, useState } from 'react'
import './electioncard.scss'
import ElectionProfile from '../../pages/electionprofile/ElectionProfile'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const ElectionCard = ({ id, voteid, totalvotes }) => {
    const [vote, setVote] = useState(0);
    const [voted, setVoted] = useState(false)
    const [openProfle, setOpenProfile] = useState(false)
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const { isLoading, error, data } = useQuery({
        queryKey: ['user', id],
        queryFn: () => newRequest.get(`/user/single/` + id).then((res) => {
            return res.data
        })
    })



    useEffect(() => {
        setVote(vote)
    }, [vote])

    // const queryClient = useQueryClient();
    // const mutation = useMutation({
    //     mutationFn: (v) => {
    //         if (v) return newRequest.delete("/election", voteid);
    //         return newRequest.post(`/election`, v)
    //     },
    //     onSuccess: () => {
    //         queryClient.invalidateQueries(["election"])
    //     }
    // })


    const handleVote = (e) => {
        e.preventDefault()
        setVoted(true)
        setVote(vote + 1)
    }
    return (
        <div className="electioncard">
            {isLoading ? "loading..." : <img src={data.img} alt="" />}
            {isLoading ? "loading..." : <div className="info">
                <div className="user">
                    <span>Name : {data.username}</span>
                </div>
                <p>RollNO : {data.rollno}</p>
                <span>Social link : {data.social}</span>
                <span>Total Votes : {vote}</span>
            </div>}
            <hr />
            <div className="details">
                {!voted && !currentUser.isAdmin && <button onClick={handleVote}>Vote</button>}
                <button onClick={() => setOpenProfile(true)}>Profile</button>
            </div>
            {openProfle && <ElectionProfile setOpenProfile={setOpenProfile} data={data} />}
        </div>
    )
}

export default ElectionCard