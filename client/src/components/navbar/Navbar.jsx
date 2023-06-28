import React from 'react'
import './navbar.scss'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import newRequest from "../../utils/newRequest";


const Navbar = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout")
            localStorage.setItem("currentUser", null)
            navigate("/login")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={pathname === "/" ? 'navbar active' : 'navbar'}>
            <div className='left'>
                <img className='logo' src={Logo} alt="" />
                <span className='heading'>Student Council</span>
            </div>
            <div className='right'>
                <div className='links'>
                    <Link className='link' to="/"> Home </Link>
                    <Link className='link' to="/directory"> Directory </Link>
                    <Link className='link' to="/feedback">Feedback</Link>
                    <Link className='link' to="/election">Election</Link>
                    <Link className='link' to="/announcement">Announcements</Link>
                    {currentUser && <button onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </div>
    )
}

export default Navbar