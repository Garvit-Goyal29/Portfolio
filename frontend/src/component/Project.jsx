import fl from '../assets/fl.png'
import ww from '../assets/ww.png'
function Project() {
    return (
        <>
            <div id="project" className="w-full min-h-screen md:h-screen pt-[8vh] md:pt-[10vh] pb-[5vh] flex justify-between items-center flex-col">
                <h1 className='text-center sora text-3xl md:text-4xl text-white mb-8 md:mb-0'>Project</h1>
                <div className='flex flex-col md:flex-row w-full h-full justify-evenly items-center gap-6 md:gap-0 px-5 md:px-0'>
                    <div className="relative group w-full sm:w-[88vw] md:w-[45vw] h-[35vh] md:h-[60vh] rounded-xl overflow-hidden bg-black/30 border border-purple-900/70">
                        <img src={ww} className="absolute w-full h-full object-cover blur-xs opacity-40 group-hover:opacity-100 transition duration-500" />
                        <div className="w-full h-full relative z-10 text-white flex flex-col justify-center items-center group-hover:opacity-0 cursor-none">
                            <h2 className='sora text-2xl md:text-3xl font-semibold'>WatchWise</h2>
                            <p className="px-4 text-center">An AI-powered movie recommendation system</p>
                        </div>
                        <div className='absolute inset-0 z-20 flex justify-center items-center opacity-0 transition group-hover:opacity-100 cursor-pointer'>
                            <a href='https://feed-link-web.vercel.app' target='_blank' className='bg-purple-500 w-44 md:w-[20vw] h-14 md:h-[10vh] rounded-2xl flex items-center justify-center sora font-semibold'>
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="relative group w-full sm:w-[88vw] md:w-[45vw] h-[35vh] md:h-[60vh] rounded-xl overflow-hidden bg-black/30 border border-purple-900/70">
                        <img src={fl} className="absolute w-full h-full object-cover blur-xs opacity-40 group-hover:opacity-100 transition duration-500" />
                        <div className="w-full h-full relative z-10 text-white flex flex-col justify-center items-center group-hover:opacity-0 cursor-none">
                            <h2 className='sora text-2xl md:text-3xl font-semibold'>FeedLink</h2>
                            <p className="px-4 text-center">A platform for donating surplus food to those in need</p>
                        </div>
                        <div className='absolute inset-0 z-20 flex justify-center items-center opacity-0 transition group-hover:opacity-100 cursor-pointer'>
                            <a href='https://feed-link-web.vercel.app' target='_blank' className='bg-purple-500 w-44 md:w-[20vw] h-14 md:h-[10vh] rounded-2xl flex items-center justify-center sora font-semibold'>
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;
