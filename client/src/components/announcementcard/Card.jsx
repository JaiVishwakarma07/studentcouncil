import React, { useState } from 'react'
import "./card.scss"
import AComment from '../acomment/AComment';
import Chat from "../../assets/chat.png"
import Send from "../../assets/send.png"
import Logo from "../../assets/logo.jpg"

const Card = ({ data }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    return (
        <div className='card'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img className='image' src={Logo} alt="" />
                        <div className="details">
                            <span className='name'>{data.title}</span>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p>{data.desc}</p>
                    <img className='image' src={data.img} alt="" />
                </div>
                <div className="info">
                    <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
                        <img src={Chat} alt="" />
                        <span>12 Comments</span>
                    </div>
                    <div className='item'>
                        <img src={Send} alt="" />
                        <span>Share</span>
                    </div>
                </div>
                {commentOpen && <AComment Aid={data._id} />}
            </div>
        </div>
    )
}

export default Card