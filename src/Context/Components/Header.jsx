import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/" >Home Page</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Header
