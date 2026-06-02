import Particles from '../component/Particles.jsx'
import contactEle from '../assets/contactElement.png'
import { motion } from 'motion/react'
import { useState } from 'react'
function Contact(params) {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [sub, setsub] = useState("")
    const [mess, setmess] = useState("")
    async function handlefrom(e) {
        e.preventDefault()
        try {
            const data = await fetch("https://portfolio-sq6v.onrender.com/api/handlecontactform", {
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
                console.log(name," ",email," ",sub," ",mess)
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
                                <form onSubmit={handlefrom}
                                    className="flex flex-col gap-5">
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