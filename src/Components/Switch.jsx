import React, { useContext } from 'react'
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../ThemeContext';

const Switch = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <ReactSwitch 
      // onChange={toggleTheme}
      // checked={theme === "dark"}
      // className="react-switch"
      />
    </div>
  )
}

export default Switch
