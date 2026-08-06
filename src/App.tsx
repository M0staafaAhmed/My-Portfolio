import { useEffect } from 'react'
import './App.css'
import { SmoothCursor } from './components/Animation/AdvancedCursor'
import MotionBackground from './components/Animation/MotionBackground'
import Navbar from './components/customComponents/Navbar'
import SwitchLang from './components/customComponents/SwitchLang'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {


  

  return (
    <>

      <Navbar />
      {/* hero section */}
      <Hero />

      {/* hero section */}
      <About />

      {/* projects section */}
      <Projects />

      {/* skills section */}
      <Skills />

      {/* contact section */}
      <Contact />

      {/* footer section */}
      <Footer />

      {/* 1. استدعاء المؤشر في الصفحة */}
      <SmoothCursor color="#DC143C" />

      {/* get animated bg */}
      <MotionBackground />
      {/* change language btn */}
      <SwitchLang />
    </>
  )
}

export default App
