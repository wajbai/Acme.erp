import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

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
import Chatbot from './components/Chatbot.jsx';
import MapIndia from '../src/components/MapIndia.jsx';
import MapToggle from './components/MapToggle.jsx';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 },
};
const Home = () => {
  return (
    <>
      <ScrollTrackerCircle />
      <div id="hero">
        <motion.div {...fadeInUp}>
          <Hero />
        </motion.div>
      </div>

      <div id="data">
        <motion.div {...fadeInUp}>
          <Data />
        </motion.div>
      </div>

      <div id="cards">
        <motion.div {...fadeInUp}>
          <Cards />
        </motion.div>
      </div>

      <div id="about">
          <About />
      </div>

      <div id="review">
        <motion.div {...fadeInUp}>
          <Review />
        </motion.div>
      </div>

      <div id="map">
        <motion.div {...fadeInUp}>
          <MapIndia />
        </motion.div>
      </div>

      <div id="Functional">
        {/* <motion.div {...fadeInUp}> */}
          <Functional />
        {/* </motion.div> */}
      </div>

      <div id="plan">
        {/* <motion.div {...fadeInUp}> */}
          <Plan />
        {/* </motion.div> */}
      </div>

      <div id="question">
      
          <Question />
      
      </div>

      <div id="streamlines">
      
          <Streamlines />
       
      </div>

      <div id="blogpost">
        <motion.div {...fadeInUp}>
          <BlogPost />
        </motion.div>
      </div>


    </>
  );
};

const App = () => {
  return (
    <Router>
      <Chatbot />
      <CustomCursor />
      <ScrollToTop />

      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/finance2" element={<Finance2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Termscondition" element={<Tearmsconditions />} />
        <Route path='/Privacy-Policy' element={<Privacy />} />
        {/* <Route path='/map' element={<MapToggle/>}/> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
