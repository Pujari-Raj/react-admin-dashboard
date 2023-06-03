import React from 'react';
import './navbar.css';
import { NotificationsNone, Language, Settings, Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = () => {
    
    // Toggle Hamburger code 
    // const [isOpen, setIsOpen] = useState(true);
    // const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbar-left">
                    <Link to='/' className="link">
                        <span className='logo'>salesadmin</span>
                    </Link>
                </div>
                <div className="topbar-right">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className='topIconBadge'>4</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className='topIconBadge'>4</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className='topIconBadge'>4</span>
                    </div>
                    <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="" className="profile" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;