import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import Hero from './components/Hero.jsx';
import Data from './components/Data.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About .jsx';
import BlogPost from './components/blogpost.jsx';
import Plan from './components/Plan.jsx';
import Question from './components/Question.jsx';
import Review from './components/Review.jsx';
import Streamlines from './components/Streamlines.jsx';

const SectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  return (
    <section style={itemContainer}>
      <div ref={ref} style={item}>
        <figure style={progressIconContainer}>
          <svg style={progressIcon} width="75" height="75" viewBox="0 0 100 100">
            <circle
              style={progressIconBg}
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="bg"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              style={{
                ...progressIconIndicator,
                pathLength: scrollYProgress,
              }}
            />
          </svg>
        </figure>
        <div style={{ marginLeft: '120px', width: '100%' }}>{children}</div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <SectionWrapper><Hero /></SectionWrapper>
      <SectionWrapper><Data /></SectionWrapper>
      <SectionWrapper><Cards /></SectionWrapper>
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper><Review /></SectionWrapper>
      <SectionWrapper><Plan /></SectionWrapper>
      <SectionWrapper><Question /></SectionWrapper>
      <SectionWrapper><Streamlines /></SectionWrapper>
      <SectionWrapper><BlogPost /></SectionWrapper>
    </>
  );
};

export default Home;
