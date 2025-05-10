import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Second from './Components/Second'
import Footer from './Components/footer'
import About from './Components/About'
import Project from './Components/Project'



function App() {



  return (
    <>
      <Navbar />
      <Section />
      <div className="  h-0.5 bg-purple-500  mt-10 mb-10 ml-20 mr-20"><hr /></div>
      <About/>
      <div className="  h-0.5 bg-purple-500  mt-10 mb-10 ml-20 mr-20"><hr /></div>
      <Project/>
      <div className="  h-0.5 bg-purple-500  mt-10 mb-10 ml-20 mr-20"><hr /></div>
      <Second />
      <Footer />
    </>
  )
}

export default App
