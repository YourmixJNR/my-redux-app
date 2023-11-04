import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Switch from '../Components/Switch'

const Header = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home Page</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contextapi">Context API</Link>
        </li>
        <li>
            <Switch />
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Header
