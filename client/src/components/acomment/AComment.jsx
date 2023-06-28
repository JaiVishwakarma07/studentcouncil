import React, { useState } from 'react'
import "./acomment.scss"
import newRequest from '../../utils/newRequest';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const AComment = ({ Aid }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [comment, setComment] = useState("")

    const { isLoading, error, data } = useQuery({
        queryKey: ['comment'],
        queryFn: () => newRequest.get(`/comment?id=${Aid}`).then((res) => {
            return res.data
        })
    })

    const queryClient = useQueryClient();

    const mutation = useMutation(
        (newComment) => {
            return newRequest.post("/comment", newComment);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["comment"]);
            },
        }
    );


    const handleSubmit = async (e) => {
        e.preventDefault();
        mutation.mutate({ desc: comment, id: Aid })
    }




    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.img} alt="" />
                <input type="text" placeholder="write a comment" onChange={(e) => setComment(e.target.value)} />
                <button onClick={handleSubmit} >Send</button>

            </div>
            {isLoading ? "Loading" : data.map((c) => (<div key={c._id} className="comment">
                <img src={currentUser.img} alt="" />
                <div className="info">
                    <span>Anonymous</span>
                    <p>{c.desc}</p>
                </div>
            </div>))}
        </div>
    )
}

export default AComment