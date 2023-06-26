import React from 'react'
import './Announcement.scss'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/announcementcard/Card'


const Announcement = () => {
    const data = {
        name: "Incident 2024 is Coming",
        desc: "With great excitement, we bring you the opportunity to showcase your masterpieces of written works, be it a poem or an article, and share it with the NITK community in an album that will stay forever and cherish your work. Submit your writing works for the *Annual Shoreline Magazine* of our NITK. You can submit your written art and thoughtful opinions in *any of the 3 languages, English, Hindi, or Kannada* and upto 3 entries will be accepted from an individual. There's no restriction on the topic, but we encourage all the writers to be community friendly and spread positivity through their brilliant works! ",
        img: "https://i.ytimg.com/vi/hWAY_HdnE88/maxresdefault.jpg"
    }
    return (
        <div className='announcement'>
            <div className="singleannouncement">
                <Card data={data} />
                <Card data={data} />
                <Card data={data} />
                <Card data={data} />
                <Card data={data} />
                <Card data={data} />
            </div>
            <div className="Categories">
                <h1>Categories</h1>
                <Link className='link' to="/">Campus</Link>
                <Link className='link' to="/">Hostels</Link>
                <Link className='link' to="/">Clubs</Link>
                <Link className='link' to="/">Sports</Link>
            </div>
        </div>
    )
}

export default Announcement