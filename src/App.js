import React from 'react';

import './App.css';
// import AppBar from './components/AppBar/Navbar';
import Hero from './components/heroComponent/Hero';
import About from './components/About/About';
import Showcase from './components/showcase/Showcase'
import Experties from './components/Expertise/Experties'
import WorkSection from './components/Work/WorkSection'

function App() {
  return (
    <div>
      {/* <AppBar /> */}
      <Hero />
      <About />
      < Showcase/>
      < Experties/>
      <WorkSection/>
    </div>
  );
}

export default App;
