import React, { useState } from 'react'
import "./election.scss"
import ElectionCard from '../../components/electioncard/ElectionCard'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Election = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['election'],
        queryFn: () => newRequest.get(`/election`).then((res) => {
            return res.data
        })
    })

    return (
        <div className="election">
            <div className="container">
                <h1>Welcome to Election Portal of Student Council</h1>
                <p>Every Vote Matters so choose your representative vicely</p>
                <div className="cards">
                    {isLoading ? "loading..." :
                        data.map((candidate, i) => (
                            <ElectionCard id={candidate.id} voteid={candidate._id} totalvotes={candidate.votes} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Election
