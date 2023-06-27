import React from 'react'
import "./directory.scss"
import { Link } from 'react-router-dom'
import Dircard from '../../components/dircard/Dircard'
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Directory = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['user'],
        queryFn: () => newRequest.get(`/user`).then((res) => {
            return res.data
        })
    })

    // console.log(data)

    return (
        <div className="directory">
            <div className="container">
                <h1>Directory</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley</p>
                <div className="cards">
                    {isLoading ? "loading" : error ? "error" :
                        data.map(user => (
                            <Dircard user={user} key={user._id} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Directory
