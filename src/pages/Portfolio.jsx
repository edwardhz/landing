import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Portfolio = () => {

  const Letters = ['<span>P</span>','R','O'];

  return (
    <>
      <Header/>
        <Wrapper
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration: 0.5}}
        >
        <h3>Projects</h3>
          <Splide options={{
          perPage: 1,
          arrows:true,
          pagination:false,
          drag:'free',
          gap:'2.5rem'
        }}> 
              <SplideSlide>
                <Card onClick={()=>window.open('https://startling-frangipane-bb8a2b.netlify.app/')}>
                  
                    <h4>Recipes searcher</h4>
                    <ul>
                      <li>React</li>
                      <li>Styled Component</li>
                      <li>Webpack</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                    <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197949307@N02/52767271035/in/photostream/" title="recipe"><img src="https://live.staticflickr.com/65535/52767271035_859622118c_b.jpg" width="1024" height="686" alt="recipe"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                    <Gradient/>
                </Card>
              </SplideSlide>
              <SplideSlide>
                <Card onClick={()=>window.open('https://edwardhz.github.io/pokemon1st/')}>
                  <h4>Pokemon 1st gen searcher</h4>
                  <ul>
                      <li>React</li>
                      <li>Ant Design</li>
                      <li>Webpack</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                  <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197949307@N02/52766339297/" title="pokemon"><img src="https://live.staticflickr.com/65535/52766339297_eebfdcaaf6_h.jpg" width="1329" height="838" alt="pokemon"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                    <Gradient/>
                </Card>
              </SplideSlide>
              <SplideSlide>
                <Card onClick={()=>window.open('https://papaya-kataifi-ee05c7.netlify.app')}>
                  <h4>Shop</h4>
                  <ul>
                      <li>React</li>
                      <li>Tailwind</li>
                      <li>Webpack</li>
                      <li>HTML</li>
                    </ul>
                    <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197949307@N02/52777840254/in/dateposted-public/" title="shop"><img src="https://live.staticflickr.com/65535/52777840254_9ceb587e2c_b.jpg" width="1024" height="600" alt="shop"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                    <Gradient/>
                </Card>
              </SplideSlide>
        </Splide>
        </Wrapper>
      <Footer/>
    </>
  )
}

const Wrapper = styled(motion.div)`
  margin: 4rem 5%;
  text-align: center;
  height: 35rem;
  padding: 1rem 1rem;
  background-color: #f0ead6;
  border-radius: 40px;
  box-shadow: 7px 10px 0px 0px rgba(112, 160, 175);
  border: solid 1px rgba(112, 160, 175);
  max-width: 1200px;
  margin: 4rem auto;
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
  max-width: 1200px;
  cursor: pointer;
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

    @media (max-width:689px) {
      left: 25%;
    }
    @media (max-width:1000px) {
      margin-left: 50px;
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