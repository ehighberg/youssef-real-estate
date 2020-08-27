import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <NavLink exact to='/' >About Us</NavLink>
        </nav>
    )
}