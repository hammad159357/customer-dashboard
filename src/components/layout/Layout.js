import React from 'react'
import NavBar from '../navBar/NavBar'
import SideBar from '../sideBar/SideBar'
import './style.css'

const Layout = ({ children }) => {
    return (
        <>
            <div className='landing-page-container'>
                <SideBar />
                <div className='landing-page-content'>
                    <NavBar />
                    <div className='landing-page-main-content'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout