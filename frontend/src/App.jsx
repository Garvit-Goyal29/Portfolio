import bg from './assets/bg.jpeg'
import Home from './component/Home.jsx'
import Navbar from './component/Navbar.jsx'
import About from './component/About.jsx'
import Skills from './component/Skills.jsx'
import Project from './component/Project.jsx'
import Contact from './component/Contact.jsx'
import {motion} from 'motion/react'
function App() {
  return (
    <>
      <div className='relative w-full h-screen bg-black z-[-2]'>
        <motion.img
        animate={{
          opacity:[1, 0.8, 0.5 , 0.8, 1]
        }}
        transition={{
          duration:5,
          repeat:Infinity
        }}
        src={bg} alt="" className='w-full min-h-screen fixed z-[-1]' />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
