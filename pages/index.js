// pages/index.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../src/components/Banner';
import AboutMe from '../src/components/AboutMe';
import Skills from '../src/components/Skills'
import Expertise from '../src/components/Expertise'
import Contact from '../src/components/Contact';
const HomePage = () => {
  return (
    <div>
      {/* Render the Header component here */}
      <Banner />
      <AboutMe />
      <Expertise/>
      <Skills/>
      <Contact/>
      {/* Add other components or content here */}
    </div>
  );
};

export default HomePage;
