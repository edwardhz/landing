import React from 'react'
import styled from 'styled-components'
import {DiGithubAlt} from 'react-icons/di'
import {SiLinkedin} from 'react-icons/si'


const Footer = () => {

  const notificationCopied = ()=>{
    console.log('copied');
    navigator.clipboard.writeText('edw123hernandez@gmail.com');
    document.getElementById("span-copied").style.display = "inline";
    setTimeout( function() {
        document.getElementById("span-copied").style.display = "none";
    }, 1000);
  }
  return (
    <>
    <FooterDiv>
        <div>
        
        <h5 onClick={()=>notificationCopied()}>edw123hernandez@gmail.com</h5>
        <span className='span-copied' id='span-copied'>Copied!</span>
        </div>
        <div>
            <span><DiGithubAlt size={40} onClick={()=>window.open('https://github.com/edwardhz')}/></span>
            <span><SiLinkedin size={30} onClick={()=>window.open('https://www.linkedin.com/in/edward-hernandez-230818260')}/></span>
        </div>
        
    </FooterDiv>
    </>
  )
}

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0px; left: 0;
  height: 50px;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  
  align-items: center;
  background-color: rgb(112, 160, 175);
  color: rgb(244, 232, 193);
 
  @media (max-width:380px){
    font-size: 5%;
}
div:first-child{
  span{
    display: none;
  }
}
div{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 20px;
    h5,span{
      padding: 10px;
      
    }
    h5:hover{
      cursor: copy;
      display: inline-block;
      background-color: rgb(88, 147, 165);
      border-radius: 40px;
      color: #F0EAD6;
    }
    span:hover{
      color: #F0EAD6;
    }
}
span{
  cursor:pointer;
}

`


export default Footer
