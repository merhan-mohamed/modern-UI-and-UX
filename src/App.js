import React from 'react';
import './App.css';

import { Header, Blog, Footer, Possibilities, WhatGPT3 } from "./components" ;

import { Brand, Navbar, CTA, Feature  } from "./container" ;


function App() {
  return (
    <div className="App">
      <div className="gradient_Bg">
        <Navbar />
        <Header />
      </div>
    <Brand />
    <WhatGPT3 />
    <Feature />
    <Possibilities />
    <CTA />
    <Blog />
    <Footer />
    </div>
  );
}

export default App;
