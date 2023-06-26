import React from 'react'
import './navbar.scss'
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
    const { pathname } = useLocation()
    console.log(pathname)
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
                    <Link className='link' to="/election">Election</Link>
                    <Link className='link' to="/feedback">Feedbacks</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar