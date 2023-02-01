import React from 'react'
import styled from 'styled-components'
import {DiGithubAlt} from 'react-icons/Di'
import {SiLinkedin} from 'react-icons/Si'


const Footer = () => {
  return (
    <>
    <FooterDiv>
        <h5>Edward Martin Hernandez Zambrano</h5>
        <h5>edw123hernandez@gmail.com</h5>
        <div>
            <DiGithubAlt size={30}/>
            *
            <SiLinkedin size={25}/>
        </div>
        
    </FooterDiv>
    </>
  )
}

const FooterDiv = styled.div`
    font-size: 13px;
    opacity: 50%;
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    div{
        display: flex;
        width: 10%;
        justify-content: space-evenly;
        align-items: center;
    }

`


export default Footer
