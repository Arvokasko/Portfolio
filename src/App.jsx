import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import AboutMe from './components/aboutMe/AboutMe'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import './App.css'

function App() {

  return (
    <>
      <Sidebar />
      <Home />
      <AboutMe />
      <Works />
      <Contact />
      <Footer />
    </>
  )
}

export default App
