import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <NavLink exact to='/'>About Us</NavLink>
            <NavLink exact to='/closings'>Recent Closings</NavLink>
            <NavLink exact to='/history'>Learn more about us and Weichert Realty</NavLink>
        </nav>
    )
}