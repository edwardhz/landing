import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styled from 'styled-components'
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiLaravel,SiJava,SiPostgresql,SiMysql,SiWebpack} from 'react-icons/si'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'





const Home = () => {



  return (
    <>
    <Header/>
    <AboutMe
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    >
        <Container>
          <h1>Hi</h1>
          <div className='Writer'>
            <Typewriter
            words={['My Name is Edward Martin and ..', 
            'Im a systems engineer', 
            'Im really looking forward to working on your project or idea', 
            'Just let me know!!']}
            loop={5}
            typeSpeed={80}
            deleteSpeed={30}
            delaySpeed={1000}
            />
          </div>
        </Container>
        <Container>
          <h2>My skills</h2>
          <SkillsContainerIcons
          animate={{opacity:1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration: 0.8}}
          >
            <span><SiHtml5 size={50}/></span>
            
            <SiCss3 size={50} />
            <SiJavascript size={50}/>
            <SiReact size={50}/>
            <SiLaravel size={50}/>
          </SkillsContainerIcons>
          <SkillsContainerIcons
          animate={{opacity:1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration: 0.9}}
          >
            <SiPostgresql size={50}/>
            <SiJava size={50}/>
            <SiMysql size={50}/>
          </SkillsContainerIcons>
          <SkillsContainerIcons
          animate={{opacity:1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration: 1.5}}
          >
            <SiWebpack size={50}/>
          </SkillsContainerIcons>
        </Container>
    
    </AboutMe>
    <Footer/>
    </>
  )
}

const AboutMe = styled(motion.div)`
  margin: 2rem auto;
  width: 70vw;
  height: 70vh;
  background-color: #f0ead6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5%;
  box-shadow: 7px 10px 0px 0px rgba(112, 160, 175);
  border: solid 1px rgba(112, 160, 175);
  svg{
    color: rgb(112, 160, 175);
  }
  div:first-child{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 700;
  color: rgb(112, 160, 175);
  h1{
    font-style: italic;
    letter-spacing: 3px;
    margin-bottom: 2rem;
    font-size: 3rem;
  }
  h2{
    font-style: italic;
    letter-spacing: 3px;
    text-align: center;
  }
  div{
    height: 50px;
    width: 100%;
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    .Writer{
      font-size: 1.5rem;
    }
  }
  svg:hover {
    transform: scale(1.6);
  }
  svg{
    transition: transform 1s;
  }

`
const SkillsContainerIcons = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  margin: 3rem auto;
  
`


export default Home