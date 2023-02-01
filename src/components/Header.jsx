import React,{useState} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


const Header = () => {

    const [show,setShow]=useState(false);
    const [activeBtn, setActiveBtn]=useState('home');

    const handleToggle = ()=>{
        setShow(!show);     
    }

  return (
    <>
    <header>
        
        <div className='logo' >_Edward_Hernandez</div>
            <div className='hamburger' onClick={handleToggle}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
        <nav className={show ? 'mobile' : 'nav-bar'}>
            <ul>
                <li>
                    <SLink to={'/'}>Home</SLink>
                </li>
                <li>
                    <SLink to={'/portfolio'} >Portfolio</SLink>
                </li>
                <li>
                    <SLink to={'/contact'} >Contact</SLink>
                </li>
            </ul>
        </nav>
    
    </header>
    </>
    
  )
}

const SLink = styled(NavLink)`
        display: block;
        color: rgb(244, 232, 193);
        font-size: 20px;
        padding: 10px 25px;
        border-radius: 50px;
        transition: 0.5s;
        margin: 0 5px;
        margin-bottom: 12px;

    :hover{
        color: rgb(112, 160, 175);
        background: rgb(244, 232, 193);
    }
    &.active{
        color: rgb(112, 160, 175);
        background: rgb(244, 232, 193);
    }
  `

export default Header