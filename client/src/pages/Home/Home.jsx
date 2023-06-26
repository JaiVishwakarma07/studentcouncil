import React from 'react'
import "./Home.scss"
import Hero from "../../assets/hero.png"

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="item">
                    <h1 className="title">
                        Welcome to Student Council NITK
                    </h1>
                    <p className="desc">
                        Student's Council hub of the National Institute of Technology Karnataka, Surathkal, Mangalore, India.
                    </p>
                    <h2>Connect with us</h2>
                    <div className="buttons">
                        <button className="button">Telegram</button>
                        <button className="button">LinkedIn</button>
                        <button className="button">NITK Official</button>
                    </div>
                </div>
                <div className="item">
                    <img src={Hero} alt="" className='img' />
                </div>
            </div>
        </div>
    )
}

export default Home