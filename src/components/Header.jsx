import React, { useState } from 'react'

const Header = () => {

    const [darkMode, setDarkMode ] = useState(false)

    return (
        <div className="header">
            <div className="container flex justify-content-b align-center">
                <h1>React Hooks</h1>
                <button type='button' onClick={() => setDarkMode (!darkMode)}>{darkMode ? 'Dark mode 2' : ' Light Mode 2'}</button>
            </div>
        </div>
    )
}

export default Header