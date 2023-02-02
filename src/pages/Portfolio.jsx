import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Portfolio = () => {
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
                    <p>Projecto 1</p>
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
  margin: 4rem 4rem;
  text-align: center;
  max-width: 1400px;

  @media (min-width: 1400px) {

      margin: 4rem auto;
  }

`
const Card = styled.div`
  min-height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img{
    position: absolute;
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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