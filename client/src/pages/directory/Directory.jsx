import React from 'react'
import "./directory.scss"
import { Link } from 'react-router-dom'
import Dircard from '../../components/dircard/Dircard'

const Directory = () => {
    return (
        <div className="directory">
            <div className="container">
                <h1>Directory</h1>
                <p>Meet the peers</p>
                <div className="cards">
                    <Dircard />
                    <Dircard />
                    <Dircard />
                    <Dircard />
                    <Dircard />
                    <Dircard />
                    <Dircard />
                </div>
            </div>
        </div>
    )
}

export default Directory