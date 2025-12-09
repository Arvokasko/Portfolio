import { useState, useRef, useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import AboutMe from './components/aboutMe/AboutMe'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

import './App.css'
import './styles/scrollAnimations.css'

function App() {

  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0x0,
          midtoneColor: 0x5500aa,
          lowlightColor: 0x2d1a66,
          baseColor: 0x0,
          speed: 1,
          zoom: 3,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);


  return (
    <>
      <div
        ref={vantaRef}
        style={{
          width: "100%",
          minHeight: "100vh",
          position: "relative"
        }}
      >
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
