import profile from '../assets/profile2.png'
import { FaLightbulb, FaClipboardList, FaCode, FaBug, FaRocket } from "react-icons/fa";
function About() {
    return (
        <>
            <div id="about" className="w-full h-screen pt-[4vh]">
                <h1 className="pl-[7vw] sora text-4xl text-purple-400 h-[6vh] ">About me</h1>
                <div className="flex">
                    <div className='w-[30%] h-[50vh] flex flex-col justify-around items-center'>
                        <img src={profile} alt="" className='w-[45%] h-[50%] rounded-2xl' />
                        <div className='w-[70%] h-[30%] bg-white/10 hover:-translate-y-1 hover:shadow-purple-400 shadow-2xs transition duration-150 rounded-2xl flex flex-col justify-center items-start px-[2.4vw] text-gray-300'>
                            <p className='text-sm sora text-gray-400'>Education</p>
                            <h3 className='text-sm sora font-semibold'>BTech(CSE) - 2023-2027</h3>
                            <p className='text-gray-400 text-sm sora'>Medicaps University, India</p>
                        </div>
                    </div>
                    <div className='w-[70%] h-full  flex flex-col pt-[2.2vh]'>
                        <div className="w-full text-white mb-[5vh] px-[3vw]">
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
                        <div className="w-full flex items-center justify-between px-[3vw]">
                            <div className="bg-purple-900/20 border border-white/10 p-6 rounded-xl text-center w-[12vw]">
                                <h2 className="text-2xl text-purple-400">Project</h2>
                                <p className="text-gray-300 text-sm mt-2">Websites</p>
                            </div>

                            <div className="bg-purple-900/20 border border-white/10 p-6 rounded-xl text-center w-[12vw]">
                                <h2 className="text-2xl text-purple-400">MERN</h2>
                                <p className="text-gray-300 text-sm mt-2">Stack</p>
                            </div>

                            <div className="bg-purple-900/20 border border-white/10 p-6 rounded-xl text-center w-[12vw]">
                                <h2 className="text-2xl text-purple-400">DSA</h2>
                                <p className="text-gray-300 text-sm mt-2">Java</p>
                            </div>

                            <div className="bg-purple-900/20 border border-white/10 p-6 rounded-xl text-center w-[12vw]">
                                <h2 className="text-2xl text-purple-400">2027</h2>
                                <p className="text-gray-300 text-sm mt-2">Graduate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-purple-400 text-2xl text-center pt-[5vh] sora font-semibold'>From Idea to Deployment</h1>
                <div className='w-full h-[28vh] py-3 flex justify-center items-center'>
                    <div className='w-[10vw] h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaLightbulb className='w-10 h-10 text-yellow-400' />
                        <p className='sora text-xs text-yellow-400'>Idea</p>
                    </div>
                    <div className='w-[10vw] h-[1vh] bg-white/20'></div>
                    <div className='w-[10vw] h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaClipboardList className='w-10 h-10 text-blue-400' />
                        <p className='sora text-xs text-blue-400'>Plan</p>
                    </div>
                    <div className='w-[10vw] h-[1vh] bg-white/20'></div>
                    <div className='w-[10vw] h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaCode className='w-10 h-10 text-green-400' />
                        <p className='sora text-xs text-green-400'>Code</p>
                    </div>
                    <div className='w-[10vw] h-[1vh] bg-white/20'></div>
                    <div className='w-[10vw] h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20'>
                        <FaBug className='w-10 h-10 text-red-400' />
                        <p className='sora text-xs text-red-400'>Debug</p>
                    </div>
                    <div className='w-[10vw] h-[1vh] bg-white/20'></div>
                    <div className='w-[10vw] h-[20vh] flex flex-col items-center justify-center gap-[1vh] bg-purple-900/20 border border-purple-400 rounded-2xl bg-blue/20 '>
                        <FaRocket className='w-10 h-10 text-purple-400' />
                        <p className='sora text-xs text-purple-400'>Deploy</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;