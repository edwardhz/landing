import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='logo'>_Edward_Hernandez</div>
        <div className='hamburger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
        <nav className='nav-bar'>
            <ul>
                <li>
                    <a href="" className='active'>Home</a>
                </li>
                <li>
                    <a href="" >Portfolio</a>
                </li>
                <li>
                    <a href="" >Contact</a>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header