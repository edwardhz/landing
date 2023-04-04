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
            <span><DiGithubAlt size={20} onClick={()=>window.open('https://github.com/edwardhz')}/></span>
            *
            <span><SiLinkedin size={15} onClick={()=>window.open('https://www.linkedin.com/in/edward-martin-hernandez-zambrano-230818260/')}/></span>
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
span{
  cursor:pointer;
}

`


export default Footer
