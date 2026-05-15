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
      <div className='relative w-full min-h-screen bg-black'>
        <motion.img
          animate={{
            opacity: [1, 0.85, 0.6, 0.85, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          src={bg}
          alt=""
          className='w-full h-screen fixed top-0 left-0 object-cover z-0 pointer-events-none'
        />
        <div className='relative z-10'>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
