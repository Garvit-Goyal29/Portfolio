import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import OptimizedSpline from "./OptimizedSpline.jsx";
import './Home.css'

function Home() {
    return (
        <>
            <div className="w-full min-h-[84vh] md:h-[84vh] flex flex-col md:flex-row mb-[8vh] md:mb-[10vh]">
                <div className="w-full md:w-[50%] h-auto md:h-full flex flex-col justify-start items-start px-5 md:pl-[3vw] md:pr-0 text-white pb-[3vh]">
                    <div className="pt-[4vh] md:pt-[5vh]">
                        <div className="mb-[4vh]">
                            <h2 className="sora text-xl sm:text-2xl md:text-3xl typing mr-[0.5vw]">Full Stack Developer.</h2>
                            <span className="text-4xl md:text-5xl font-extralight blink relative bottom-1">|</span>
                        </div>
                        <h1 className="text-purple-400 text-3xl md:text-4xl sora">Hello,I'm</h1>
                        <h1 className="sora text-4xl sm:text-5xl md:text-6xl font-semibold">Garvit Goyal</h1>
                    </div>
                    <div className="flex justify-between items-center text-gray-300 w-40 md:w-[35%] my-[4vh] md:my-[5vh] pl-[0.5vw]">
                        <a href="https://linkedin.com" target="_blank">
                            <FaLinkedin className="w-7 h-7 md:w-[2vw] md:h-[5vh] hover:text-blue-400 hover:scale-110 transition duration-300" />
                        </a>

                        <a href="https://github.com" target="_blank">
                            <FaGithub className="w-7 h-7 md:w-[2vw] md:h-[5vh] hover:text-purple-400 hover:scale-110 transition duration-300" />
                        </a>

                        <a href="https://instagram.com" target="_blank">
                            <FaInstagram className="w-7 h-7 md:w-[2vw] md:h-[5vh] hover:text-pink-400 hover:scale-110 transition duration-300" />
                        </a>
                    </div>
                    <div className="w-full sm:w-[92%] md:w-[84%] h-auto md:h-full rounded-2xl border border-gray-400 bg-[#0b0b0f] shadow-lg overflow-hidden">
                        <div className="flex items-center bg-[#111111] gap-2 px-4 py-2 border-b border-gray-400">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="font-mono text-xs sm:text-sm bg-[#0A0A0A] px-4 md:px-[2vw] py-[2vh] overflow-x-auto">
                            <span className="text-[#ff7b72]">const</span>{" "}
                            <span className="text-[#79c0ff]">profile</span>{" "}
                            <span className="text-gray-300">=</span>{" "}
                            <span className="text-gray-300">{"{"}</span>
                            <div className="ml-4">
                                <p>
                                    <span className="text-[#d2a8ff]">name</span>
                                    <span className="text-gray-300">: </span>
                                    <span className="text-[#a5d6ff]">"Garvit Goyal"</span>,
                                </p>
                                <p>
                                    <span className="text-[#d2a8ff]">role</span>
                                    <span className="text-gray-300">: </span>
                                    <span className="text-gray-300">[</span>
                                    <span className="text-[#a5d6ff]">
                                        "Student", "MERN developer", "DSA solver"
                                    </span>
                                     <span className="text-gray-300">]</span>,
                                </p>
                                <p>
                                    <span className="text-[#d2a8ff]">skills</span>
                                    <span className="text-gray-300">: </span>
                                    <span className="text-gray-300">[</span>
                                    <span className="text-[#a5d6ff]">
                                        "MongoDB", "Express", "React", "Node"
                                    </span>
                                    <span className="text-gray-300">]</span>,
                                </p>
                                <p>
                                    <span className="text-[#d2a8ff]">hardworker</span>
                                    <span className="text-gray-300">: </span>
                                    <span className="text-blue-300">true</span>
                                </p>
                            </div>
                            <span className="text-gray-300">{"};"}</span>
                        </div>
                    </div>
                </div>
                <div className="relative w-full md:w-[50%] h-[55vh] sm:h-[62vh] md:h-full">
                    <div className="w-full h-full scale-[0.75] sm:scale-[0.8] md:scale-[0.85] relative bottom-[4vh] md:bottom-[6vh]">
                        <OptimizedSpline
                            scene="https://prod.spline.design/0UiiESxBKNdm64-Q/scene.splinecode"
                            fallback={<div className="w-full h-full rounded-full bg-purple-500/10 blur-3xl" />}
                        />
                    </div>
                    <button className="absolute md:relative bg-purple-400 hover:scale-[1.1] transition duration-100 bottom-[5vh] md:bottom-[20.1vh] left-[10vw] md:left-[6vw] px-4 md:px-[1vw] py-2 md:py-[1vh] w-[36vw] sm:w-[28vw] md:w-[11vw] rounded-full sora text-sm">My Resume</button>
                    <button className="absolute md:relative bg-purple-400 hover:scale-[1.1] transition duration-100 bottom-[5vh] md:bottom-[20.1vh] left-[54vw] sm:left-[44vw] md:left-[23vw] px-4 md:px-[1vw] py-2 md:py-[1vh] w-[36vw] sm:w-[28vw] md:w-[11vw] rounded-full sora text-sm">Reach out</button>
                </div>
            </div>
        </>
    )
}
export default Home;
