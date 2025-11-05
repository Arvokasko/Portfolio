import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/layout/Home'
import AboutMe from './components/layout/AboutMe'
import Works from './components/layout/Works'
import Contact from './components/layout/Contact'

import './App.css'

function App() {

  return (
    <>
      <Sidebar />
      <Home />
      <AboutMe />
      <Works />
      <Contact />
      <div style={{ marginLeft: "250px" }}>

      </div>
    </>
  )
}

export default App
