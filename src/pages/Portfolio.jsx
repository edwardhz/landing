import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Portfolio = () => {

  const Letters = ['<span>P</span>','R','O'];

  return (
    <>
      <Header/>
        <Wrapper>
        <h3>Projects</h3>
          <Splide options={{
          perPage: 1,
          arrows:true,
          pagination:false,
          drag:'free',
          gap:'2.5rem'
        }}> 
              <SplideSlide>
                <Card>
                  <Link to={'recipe/'}>
                    <h4>Shop</h4>
                    <ul>
                      <li>React</li>
                      <li>Tailwind</li>
                      <li>Webpack</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                    <img src='https://cdn.pixabay.com/photo/2023/01/26/18/09/zebra-7746719_960_720.jpg' alt='Project 1' />
                    <Gradient/>
                  </Link>
                </Card>
              </SplideSlide>
              <SplideSlide>
                <Card>
                  <Link to={'recipe/'}>
                    <p>Projecto 2</p>
                    <img src='https://cdn.pixabay.com/photo/2023/01/26/18/09/zebra-7746719_960_720.jpg' alt='Project 1' />
                    <Gradient/>
                  </Link>
                </Card>
              </SplideSlide>
        </Splide>
        </Wrapper>
      <Footer/>
    </>
  )
}

const Wrapper = styled.div`
  margin: 4rem 5%;
  text-align: center;
  height: 35rem;
  padding: 1rem 1rem;
  background-color: #f0ead6;
  border-radius: 5%;
  box-shadow: 7px 10px 0px 0px rgba(112, 160, 175);
  border: solid 1px rgba(112, 160, 175);
  h3{  
    display: inline-block;
    padding: 10px 10px;
    color: #f0ead6;;
    background-color: rgba(112, 160, 175);
    border-radius: 5%;
    letter-spacing: 2px;
  }
`
const Card = styled.div`
  margin-top: 5px;
  min-height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img{
    width: 80%;
    position: absolute;
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h4{
    z-index: 10;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align:center;
    font-weight: 600;
    font-size: 2.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  ul{
    z-index: 10;
    position: absolute;
    bottom: 50%;
    left: 10%;
    transform: translate(-50%,0%);
    color: white;
    text-align:center;
    font-weight: 600;
    font-size: 1.2rem;
    height: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width:425px) {
      left: 50%;
    }

    li{
      display: inline-block;
      padding: 0.5rem 0.5rem;
      color: #f0ead6;
      background-color: rgba(112, 160, 175);
      border-radius: 10%;
      box-shadow: 3px 3px 0px 0px #f0ead6;
    }
    
  }
`
const Gradient = styled.div`
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), #0000007d);
  
`

export default Portfolio