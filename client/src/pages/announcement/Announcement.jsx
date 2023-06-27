import React, { useEffect, useState } from 'react'
import './Announcement.scss'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/announcementcard/Card'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import campus from "../../assets/office.png";
import sports from "../../assets/sport.png";
import hostel from "../../assets/hotel.png";
import music from "../../assets/musical-note.png";
import dance from "../../assets/dancing.png";

const Announcement = () => {
    const [cat, setCat] = useState("")
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['announcement'],
        queryFn: () => newRequest.get(`/announcements?category=${cat}`).then((res) => {
            return res.data
        })
    })
    useEffect(() => {
        refetch();
    }, [cat])
    console.log(data)

    return (
        <div className='announcement'>
            <div className="Categories">
                <h1>Categories</h1>
                <div className="button">
                    <img src={campus} alt="" />
                    <button onClick={() => setCat("campus")}>Campus</button>
                </div>
                <div className="button">
                    <img src={sports} alt="" />
                    <button onClick={() => setCat("sports")}>Sports</button>
                </div>
                <div className="button">
                    <img src={hostel} alt="" />
                    <button onClick={() => setCat("hostel")}>Hostel</button>
                </div>
                <div className="button">
                    <img src={music} alt="" />
                    <button onClick={() => setCat("music")}>Music</button>
                </div>
                <div className="button">
                    <img src={dance} alt="" />
                    <button onClick={() => setCat("dance")}>Dance</button>
                </div>
            </div>
            <div className="singleannouncement">
                {isLoading ? "loading..." : error ? "error" :
                    data.map((adata) => (
                        <Card data={adata} key={adata._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Announcement