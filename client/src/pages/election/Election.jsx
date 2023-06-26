import React, { useState } from 'react'
import "./election.scss"
import ElectionCard from '../../components/electioncard/ElectionCard'

const Election = () => {
    const [vote, setVote] = useState(false)
    return (
        <div className="election">
            <div className="container">
                <h1>Welcome to Election Portal of Student Council</h1>
                <p>Every Vote Matters so choose your representative vicely</p>
                <div className="cards">
                    <ElectionCard vote={vote} setVote={setVote} />
                    <ElectionCard vote={vote} setVote={setVote} />
                    <ElectionCard vote={vote} setVote={setVote} />
                    <ElectionCard vote={vote} setVote={setVote} />
                    <ElectionCard vote={vote} setVote={setVote} />
                    <ElectionCard vote={vote} setVote={setVote} />
                    <ElectionCard vote={vote} setVote={setVote} />
                    <ElectionCard vote={vote} setVote={setVote} />
                </div>
            </div>
        </div>
    )
}

export default Election