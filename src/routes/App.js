import React from 'react';
import 'styles/style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from 'containers/Layout';
import Home from 'pages/Home';
import About from 'pages/About'
import Contact from 'pages/Contact'
import Portfolio from 'pages/Portfolio'


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/Portfolio" element={<Portfolio/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App




