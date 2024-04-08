import React from 'react'
import image from '../../assets/Icons/logo.png'
import customersIcon from '../../assets/Icons/customers_icon.svg'
import './style.css'

const SideBar = () => {
    return (
        <>
            <div className='sidebar'>

                <div className='sidebar-logo'>
                    <img width="244px" height="58px" src={image} alt="logo" />
                </div>
                <div className='sidebar-items'>
                    <div className='sidebar-list'>
                        <img src={customersIcon} alt='icon' />  Customers
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar