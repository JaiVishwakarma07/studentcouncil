import React from 'react'
import './dircard.scss'

const Dircard = () => {
    return (
        <div className="dircard">
            <img src="https://m.timesofindia.com/photo/90103603/90103603.jpg" alt="" />
            <div className="info">
                <div className="user">
                    <span>username</span>
                </div>
                <p>desc</p>
            </div>
            <hr />
            <div className="details">
                <div className="price">
                    <span>LinkedIN</span>
                </div>
            </div>
        </div>
    )
}

export default Dircard