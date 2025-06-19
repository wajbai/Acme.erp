import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Data from './components/Data.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About .jsx';
import BlogPost from './components/blogpost.jsx';
import Accounting from './page/Accounting.jsx';
import Plan from './components/Plan.jsx';
import Question from './components/Question.jsx';
import Review from './components/Review.jsx';
import Streamlines from './components/Streamlines.jsx';
import Finance from './page/finance.jsx';
import Finance2 from './components/Finance2.jsx';
import Contact from './components/contact.jsx';

const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="data">
        <Data />
      </div>
      <div id="cards">
        <Cards />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="review">
        <Review />
      </div>
      <div id="plan">
        <Plan />
      </div>
      <div id="question">
        <Question />
      </div>
      <div id="streamlines">
        <Streamlines />
      </div>
      <div id="blogpost">
        <BlogPost />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/finance" element={<Finance />} />
             <Route path="/finance2" element={<Finance2 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
