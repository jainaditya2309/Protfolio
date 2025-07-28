import About from './Components/About'
import Footer from './Components/Footer'
import InstallPWA from './Components/InstallPWA'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import PWAUpdate from './Components/PWAUpdate'
import Second from './Components/Second'
import Section from './Components/Section'



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
      <InstallPWA />
      <PWAUpdate />
    </>
  )
}

export default App
