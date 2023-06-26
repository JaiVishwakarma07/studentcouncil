import React, { useState } from 'react'
import "./card.scss"
import AComment from '../acomment/AComment';


const Card = ({ data }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    return (
        <div className='card'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <div className="details">
                            <span className='name'>{data.name}</span>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p>{data.desc}</p>
                    <img src={data.img} alt="" />
                </div>
                <div className="info">
                    <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
                        12 Comments
                    </div>
                    <div className='item'>
                        Share
                    </div>
                </div>
                {commentOpen && <AComment />}
            </div>
        </div>
    )
}

export default Card