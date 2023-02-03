import React from 'react'
import styled from 'styled-components'
import {DiGithubAlt} from 'react-icons/di'
import {SiLinkedin} from 'react-icons/si'


const Footer = () => {
  return (
    <>
    <FooterDiv>
        <h5>Edward Martin Hernandez Zambrano</h5>
        <h5>edw123hernandez@gmail.com</h5>
        <div>
            <DiGithubAlt size={20}/>
            *
            <SiLinkedin size={15}/>
        </div>
        
    </FooterDiv>
    </>
  )
}

const FooterDiv = styled.div`
    font-size: 15px;
    opacity: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width:380px){
      font-size: 5%;
    }

    div{
        display: flex;
        width: 10%;
        justify-content: space-evenly;
        align-items: center;
    }

`


export default Footer
