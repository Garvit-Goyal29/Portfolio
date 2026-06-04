import Particles from '../component/Particles.jsx'
import contactEle from '../assets/contactElement.png'
import { motion } from 'motion/react'
import { useState } from 'react'

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.DEV ? "http://localhost:5000" : "https://portfolio-sq6v.onrender.com");

function Contact() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [sub, setsub] = useState("")
    const [mess, setmess] = useState("")
    async function handlefrom(e) {
        e.preventDefault()
        try {
            const data = await fetch(`${API_BASE_URL}/api/handlecontactform`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body:
                    JSON.stringify({
                        name,
                        email,
                        sub,
                        mess
                    })
            })
            const res = await data.json()
            if (res.success) {
                console.log(name, " ", email, " ", sub, " ", mess)
                alert("Message sent successfully!")
                setname("")
                setemail("")
                setsub("")
                setmess("")
            } else {
                console.error("Mail server error:", res.message || res)
                alert("Failed to send message: " + (res.message || "Unknown error"))
            }
        } catch (err) {
            console.error("Network or execution error:", err)
            alert("An error occurred while sending message. Please try again.")
        }
    }
    return (
        <>
            <div
                id="contact" className="relative bg-black w-full min-h-screen">
                <Particles />
                <div className='flex flex-col md:justify-center justify-evenly items-center w-full md:h-full h-screen md:pt-[5vh] pt-[1vh]'>
                    <h1 className='sora text-purple-400 text-center text-6xl md:text-4xl h-auto md:h-[10vh] mb-3 md:mb-0'>Contact</h1>
                    <div className='w-full min-h-[80vh] md:h-[85vh] flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-[50%] h-[34vh] md:h-full flex justify-center items-center'>
                            <motion.img
                                animate={{
                                    y: [0, 25, 0, 25, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity
                                }}
                                src={contactEle} alt="" className='scale-60 md:scale-80' />
                        </div>
                        <div className="md:w-[50%] w-[90%] h-[80%] mx-[1vw] bg-purple-900/20 backdrop-blur-2xl rounded-2xl p-4 border border-white/20">
                            <form onSubmit={handlefrom} className="flex flex-col md:h-full w-full h-full justify-around md:w-full">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    className="bg-transparent border border-white/20 rounded-lg px-1 py-2 text-white outline-none focus:border-purple-400 transition"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    className="bg-transparent border border-white/20 rounded-lg px-1 py-2 text-white outline-none focus:border-purple-400 transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    value={sub}
                                    onChange={(e) => setsub(e.target.value)}
                                    className="bg-transparent border border-white/20 rounded-lg px-1 py-2 text-white outline-none focus:border-purple-400 transition"
                                />
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    value={mess}
                                    onChange={(e) => setmess(e.target.value)}
                                    className="bg-transparent border border-white/20 rounded-lg px-1 py-2 text-white outline-none focus:border-purple-400 transition resize-none"
                                />
                                <button
                                    type="submit"
                                    className="mt-0 md:mt-3 bg-purple-600 hover:bg-purple-700 transition text-white px-1 py-2 rounded-lg font-medium hover:scale-[1.02]"
                                >Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
