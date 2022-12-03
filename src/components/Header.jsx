import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const Header = () => {

    const [darkMode, setDarkMode ] = useState(false)
    const {theme, setUpdateTheme} = useContext(ThemeContext)

    const handleClick = () => {
        setDarkMode(!darkMode)
        theme === "Light" ? setUpdateTheme("Dark") : setUpdateTheme("Light")
    }


    return (
        <div className="header">
            <div className="container flex justify-content-b align-center">
                <h1>React Hooks</h1>
                <button type='button' onClick={handleClick}>{darkMode ? 'Light' : 'Dark'}</button>
            </div>
        </div>
    )
}

export default Header