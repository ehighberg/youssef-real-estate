import React from 'react'
import { NavLink } from 'react-router-dom'

import WeichertLogo from '../assets/weichert.png'


export default function Nav() {
    return (
        <nav>
            <img src={`/static/frontend/${WeichertLogo}`} />
            <NavLink exact to='/'>About Us</NavLink>
            <NavLink exact to='/recent'>Recent Deals</NavLink>
            <NavLink exact to='/history'>Learn More</NavLink>
        </nav>
    )
}