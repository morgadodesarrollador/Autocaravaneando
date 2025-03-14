import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../common/NavBar'

export const Header = () => {
  return (
    <header className='app-header'> 
        <Link to='/' >
            <h2>Autocaravanas</h2>
        </Link>
        <NavBar />
    </header>
  )
}
