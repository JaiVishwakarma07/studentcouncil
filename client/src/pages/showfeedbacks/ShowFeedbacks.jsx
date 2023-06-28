import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./showfeedbacks.scss"

const ShowFeedbacks = () => {
    const [club, setClub] = useState("")

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['feedback'],
        queryFn: () => newRequest.post(`/feedback/showfeedback`, club).then((res) => {
            return res.data
        })
    })

    useEffect(() => {
        refetch()
    }, [club])

    const handleChange = (e) => {
        setClub((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(data)

    return (
        <div className='showfeedback'>
            <h1>Choose club</h1>
            <select name="club" onChange={handleChange}>
                <option value="Web">Web Club</option>
                <option value="Dance">Dance</option>
                <option value="PhotoGrapgy">Photography</option>
                <option value="Music">Music</option>
            </select>
            {isLoading ? "Loding..." :
                data.map((feedback) => (
                    <div className='feedbacks'>
                        <span><span className='uname'>Name :</span> {feedback.username}</span>
                        <span><span className='uname'>Feedback :</span>{feedback.desc}</span>
                    </div>
                ))}
            {data?.length === 0 && "no Feedbacks"}
        </div>
    )
}

export default ShowFeedbacks