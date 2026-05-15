import Particles from '../component/Particles.jsx'
import contactEle from '../assets/contactElement.png'
import { motion } from 'motion/react'
function Contact(params) {
    return (
        <>
            <div
                id="contact" className="relative bg-black w-full min-h-screen">
                <Particles />
                <div className='flex flex-col justify-center items-center w-full h-full pt-[5vh]'>
                    <h1 className='sora text-purple-400 text-center text-4xl h-[10vh]'>Contact</h1>
                    <div className='w-full h-[85vh] flex'>
                        <div className='w-[50%] h-full flex justify-center items-center'>
                            <motion.img
                                animate={{
                                    y: [0, 25, 0, 25, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity
                                }}
                                src={contactEle} alt="" className='scale-75' />
                        </div>
                        <div className='w-[50%] h-full px-[5vw] pb-[5vh]'>
                            <div className="w-full bg-purple-900/20 backdrop-blur-2xl rounded-2xl p-4 border border-white/20">
                                <h1 className="text-3xl text-purple-400 mb-6 text-center sora">
                                    Contact Me
                                </h1>
                                <form className="flex flex-col gap-5">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="bg-transparent border border-white/20 rounded-lg px-1 py-2 text-white outline-none focus:border-purple-400 transition"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="bg-transparent border border-white/20 rounded-lg px-1 py-2 text-white outline-none focus:border-purple-400 transition"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="bg-transparent border border-white/20 rounded-lg px-1 py-2 text-white outline-none focus:border-purple-400 transition"
                                    />
                                    <textarea
                                        rows="5"
                                        placeholder="Your Message"
                                        className="bg-transparent border border-white/20 rounded-lg px-1 py-2 text-white outline-none focus:border-purple-400 transition resize-none"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 bg-purple-600 hover:bg-purple-700 transition text-white px-1 py-2 rounded-lg font-medium hover:scale-[1.02]"
                                    >Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;