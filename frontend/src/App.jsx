import bg from './assets/bg.jpeg'
import { lazy, Suspense } from "react";
import Navbar from "./component/Navbar.jsx";
const Home = lazy(() => import("./component/Home.jsx"));
const About = lazy(() => import("./component/About.jsx"));
const Skills = lazy(() => import("./component/Skills.jsx"));
const Contact = lazy(() => import("./component/Contact.jsx"));
const Project = lazy(() => import("./component/Project.jsx"));
function App() {
  return (
    <>
      <div className='relative w-full min-h-screen bg-black'>
        <img
          src={bg}
          alt=""
          className='w-full h-screen fixed top-0 left-0 object-cover z-0 pointer-events-none opacity-80'
        />
        <div className='relative z-10'>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
