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
import ScrollToTop from './components/ScrollToTop.jsx';

import ScrollTrackerCircle from './ScrollTracker.jsx';
import Footer from './components/Footer .jsx';
import Tearmsconditions from './page/Tearmsconditions.jsx';
import Privacy from './page/privacy.jsx';
import Functional from './components/Functional .jsx';
import CustomCursor from './components/CustomCursor.jsx';

const Home = () => {
  return (
    <> 
     <ScrollTrackerCircle/>
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
      <div id='Functional'>
        <Functional/>
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
       <CustomCursor />
       <ScrollToTop /> 
      <Header />
       <Navbar />
      <Routes>
        <Route path="/staging.acmeerp.org" element={<Home />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/finance2" element={<Finance2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Termscondition" element={<Tearmsconditions />} />
        <Route path='/Privacy-Policy' element={<Privacy/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
