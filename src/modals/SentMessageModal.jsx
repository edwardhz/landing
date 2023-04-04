import React,{useState} from 'react'
import styled from 'styled-components';
import {RiCloseFill} from 'react-icons/ri'
import {motion} from 'framer-motion'

const SentMessageModal = (props) => {
  
  return (
    <Container
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration: 0.2}}
    
    >
      <span><RiCloseFill onClick={props.toggleModal}/></span>
      <p>Message Sent!</p>
    </Container>
  )
}
const Container = styled(motion.div)`
  right: 50%;
  transform: translate(50%,0);
  top:70%;
  position: absolute;
  height: 40px;
  width: 250px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #f0ead6;
  border: solid 1px rgba(112, 160, 175);
  opacity: 80%;
  span{
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
`

export default SentMessageModal