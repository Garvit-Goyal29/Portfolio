import logo from '../assets/logo.png'
import { MapPin } from "lucide-react";
function Navbar(params) {
    function locationToIndore() {
        window.open("https://www.google.com/maps?q=Indore,India", "_blank");
    }
    return (
        <>
            <div id="home" className="w-full h-[16vh] py-[3vh] px-[2vw]">
                <div className="w-full h-full border border-white/40 flex bg-black/60 backdrop-blur-2xl rounded-full justify-between items-center px-[1vw] relative z-10">
                    <img src={logo} alt="" className='w-[3vw] h-[6vh]' />
                    <div className='flex gap-[2vw] sora'>
                        <a className='text-white hover:text-purple-400 text-xs transition duration-100' href="#project">PROJECT</a>
                        <a className='text-white hover:text-purple-400 text-xs transition duration-100' href="#skills">SKILLS</a>
                        <a className='text-white hover:text-purple-400 text-xs transition duration-100' href="#home">HOME</a>
                        <a className='text-white hover:text-purple-400 text-xs transition duration-100' href="#about">ABOUT</a>
                        <a className='text-white hover:text-purple-400 text-xs transition duration-100' href="#contact">CONTACT</a>
                    </div>
                    <div>
                        <button onClick={locationToIndore} className="flex items-center text-sm gap-1 text-gray-300 cursor-pointer">
                            <MapPin className="w-3 h-3 text-gray-300" />
                            <p>Indore, India</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;