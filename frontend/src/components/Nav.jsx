import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <NavLink exact to='/'>About Us</NavLink>
            <NavLink exact to='/recent'>Recent Deals</NavLink>
            <NavLink exact to='/history'>Learn More</NavLink>
        </nav>
    )
}