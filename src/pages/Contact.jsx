import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from 'components/Header'
import Footer from 'components/Footer'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import SentMessageModal from '../modals/SentMessageModal';

const Contact = () => {
  const [modal,setModal] = useState(false);
  const toggleModal = () =>{
    setModal(!modal)
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vxi1qou', 'template_znnknpm', form.current, '7cVuekujLbvY5VhTV')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setModal(true)
          
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <Header/>
    {modal && <SentMessageModal toggleModal={toggleModal}/>}
    <FormContact ref={form} onSubmit={sendEmail}
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    
    >
      <label>Name</label>
      <InputForm type="text" name="user_name" required/>
      <label>Email</label>
      <InputForm type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <ButtonForm type="submit">
          Send
        </ButtonForm>
    </FormContact>
    <Footer/>
    </>
  )
}

const FormContact = styled(motion.form)`
  margin: 2rem auto;
  min-width: 180px;
  width: 30vw;
  height: 40vh;
  background-color: #f0ead6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 7px 10px 0px 0px rgba(112, 160, 175);
  border: solid 1px rgba(112, 160, 175);
  label{
    margin: 0.5rem 1rem;
    font-weight: 700;
    color: rgb(112, 160, 175);
    font-size: 20px;
  }
  textArea{
    width: 80%;
    height: 20%;
    border-radius: 1rem;
    background: white;
    border: solid 1px rgb(112, 160, 175);
    outline: none;
    color: black;
    padding: 0.5rem 0.5rem;
  }
  @media (max-width:390px) {
    
    
  }
`
const InputForm = styled.input`
  width: 80%;
  border-radius: 1rem;
  background: white;
  border: solid 1px rgb(112, 160, 175);
  outline: none;
  color: black;
  padding: 0.5rem 0.5rem;
`
const ButtonForm = styled(motion.button)`
  margin-top: 1rem;
  padding: 10px 25px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: rgb(112, 160, 175);
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #b1b1b1;
  @media (max-width:390px) {
    margin-top: 0.5rem;
    
  }
:hover {background-color: #577e8b}
:active {
  background-color: #577e8b;
  transform: translateY(2px);
  box-shadow: 0 2px #666;
}
`

export default Contact