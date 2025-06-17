import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Data from './components/Data.jsx'
import Cards from './components/Cards.jsx'
import About from './components/About .jsx'
import BlogPost from './components/blogpost.jsx'
import Accounting from './page/Accounting.jsx'
import Plan from './components/Plan.jsx'
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Data/>
      <Cards/>
      <About/>
      <BlogPost/>
      <Plan/>
      {/* <Accounting/> */}
    </div>
  )
}

export default App