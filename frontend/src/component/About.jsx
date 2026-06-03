import profile from '../assets/profile2.png'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { FaLightbulb, FaClipboardList, FaCode, FaBug, FaRocket } from "react-icons/fa";
import './About.css'
function About() {
    const { ref: firstAbout, inView: faVisible } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const { ref: secAbout, inView: saVisible } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const { ref: thAbout, inView: taVisible } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    return (
        <>
            <div id="about" className="w-full min-h-screen pt-[4vh] border-t rounded-t-3xl border-purple-900">
                <h1 ref={firstAbout} className={`fa ${faVisible ? "fas" : ""} pl-5 md:pl-[7vw] sora text-3xl md:text-4xl text-purple-400 h-auto md:h-[6vh] mb-5 md:mb-0`}>About me</h1>
                <div className="flex flex-col md:flex-row border-b rounded-b-3xl border-purple-900 pb-[3vh]">
                    <div className='w-full md:w-[30%] h-auto md:h-[50vh] flex flex-col justify-around items-center gap-5 md:gap-0 px-5 md:px-0'>
                        <img src={profile} alt="" className={`fa ${faVisible ? "fas" : ""} w-44 h-44 sm:w-52 sm:h-52 md:w-[45%] md:h-[50%] object-cover rounded-2xl`} />
                        <div ref={secAbout} className={`sa ${saVisible ? "sas" : ""} w-full sm:w-[70%] md:w-[70%] min-h-28 md:h-[30%] bg-white/10 hover:-translate-y-1 hover:shadow-purple-400 shadow-2xs transition duration-150 rounded-2xl flex flex-col justify-center items-start px-5 md:px-[2.4vw] text-gray-300`}>
                            <p className='text-sm sora text-gray-400'>Education</p>
                            <h3 className='text-sm sora font-semibold'>BTech(CSE) - 2023-2027</h3>
                            <p className='text-gray-400 text-sm sora'>Medicaps University, India</p>
                        </div>
                    </div>
                    <div className='w-full md:w-[70%] h-full flex flex-col pt-[4vh] md:pt-[2.2vh]'>
                        <div ref={firstAbout} className={`fa ${faVisible ? "fas" : ""} w-full text-white mb-[5vh] px-5 md:px-[3vw]`}>
                            <p className="text-gray-300 text-sm md:text-sm">
                                I’m a BTech student and a passionate full-stack developer with a strong interest in building modern, user-friendly web applications. I enjoy turning ideas into real-world projects using technologies like React, Node.js, Express.js and MongoDB.
                            </p>
                            <p className="text-gray-300 text-sm md:text-sm mt-1">
                                Along with development, I actively practice Data Structures and Algorithms in Java to strengthen my problem-solving skills and prepare for placements.
                            </p>
                            <p className="text-gray-300 text-sm md:text-sm mt-1">
                                Currently, I am focused on improving my frontend skills and building project that showcase both creativity and
                                technical ability.
                            </p>
                        </div>
                        <div
                            ref={secAbout}
                            className={`sa ${saVisible ? "sas" : ""} w-full grid grid-cols-2 md:flex items-center justify-between gap-4 md:gap-0 px-5 md:px-[3vw]`}>
                            <div className="bg-purple-900/20 border border-white/10 p-4 md:p-6 rounded-xl text-center w-full md:w-[15vw]">
                                <h2 className="text-2xl text-purple-400">Project</h2>
                                <p className="text-gray-300 text-sm mt-2">Websites</p>
                            </div>

                            <div className="bg-purple-900/20 border border-white/10 p-4 md:p-6 rounded-xl text-center w-full md:w-[15vw]">
                                <h2 className="text-2xl text-purple-400">MERN</h2>
                                <p className="text-gray-300 text-sm mt-2">Stack</p>
                            </div>

                            <div className="bg-purple-900/20 border border-white/10 p-4 md:p-6 rounded-xl text-center w-full md:w-[15vw]">
                                <h2 className="text-2xl text-purple-400">DSA</h2>
                                <p className="text-gray-300 text-sm mt-2">Java</p>
                            </div>

                            <div className="bg-purple-900/20 border border-white/10 p-4 md:p-6 rounded-xl text-center w-full md:w-[15vw]">
                                <h2 className="text-2xl text-purple-400">2027</h2>
                                <p className="text-gray-300 text-sm mt-2">Graduate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1
                    ref={thAbout}
                    className={`ta ${taVisible ? "tas" : ""} text-purple-400 text-xl md:text-2xl pt-[4vh] md:pt-[2vh] text-center sora font-semibold`}>From Idea to Deployment</h1>
                <div
                    ref={thAbout}
                    className={`ta ${taVisible ? "tas" : ""} w-full h-auto md:h-[28vh] py-5 md:py-3 flex justify-start md:justify-center items-center overflow-x-auto px-5 md:px-0`}>
                    <motion.div
                        animate={{
                            opacity: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-24 md:min-w-0 w-24 md:w-[10vw] h-28 md:h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaLightbulb className='w-10 h-10 text-yellow-400' />
                        <p className='sora text-xs text-yellow-400'>Idea</p>
                    </motion.div>
                    <motion.div
                        animate={{
                            scaleX: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-12 md:min-w-0 w-12 md:w-[10vw] h-[1vh] bg-purple-900/20 border-y border-purple-400 origin-left'></motion.div>
                    <motion.div
                        animate={{
                            opacity: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-24 md:min-w-0 w-24 md:w-[10vw] h-28 md:h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaClipboardList className='w-10 h-10 text-blue-400' />
                        <p className='sora text-xs text-blue-400'>Plan</p>
                    </motion.div>
                    <motion.div
                        animate={{
                            scaleX: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-12 md:min-w-0 w-12 md:w-[10vw] h-[1vh] bg-purple-900/20 border-y border-purple-400 origin-left'>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-24 md:min-w-0 w-24 md:w-[10vw] h-28 md:h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaCode className='w-10 h-10 text-green-400' />
                        <p className='sora text-xs text-green-400'>Code</p>
                    </motion.div>
                    <motion.div
                        animate={{
                            scaleX: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-12 md:min-w-0 w-12 md:w-[10vw] h-[1vh] bg-purple-900/20 border-y border-purple-400 origin-left'>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-24 md:min-w-0 w-24 md:w-[10vw] h-28 md:h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaBug className='w-10 h-10 text-red-400' />
                        <p className='sora text-xs text-red-400'>Debug</p>
                    </motion.div>
                    <motion.div
                        animate={{
                            scaleX: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-12 md:min-w-0 w-12 md:w-[10vw] h-[1vh] bg-purple-900/20 border-y border-purple-400 origin-left'>
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 15,
                            repeat:Infinity
                        }}
                        className='min-w-24 md:min-w-0 w-24 md:w-[10vw] h-28 md:h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaRocket className='w-10 h-10 text-purple-400' />
                        <p className='sora text-xs text-purple-400'>Deploy</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
export default About;
