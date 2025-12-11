import { useState, useRef, useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import AboutMe from './components/aboutMe/AboutMe'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './App.css'
import './styles/scrollAnimations.css'

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}assets/endless-clouds.svg')`,
          backgroundSize: '100px',
          backgroundRepeat: 'repeat',
          minHeight: '100vh',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          animation: 'moveBottomLeft 15s linear infinite'
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Sidebar />
        <Home />
        <AboutMe />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
