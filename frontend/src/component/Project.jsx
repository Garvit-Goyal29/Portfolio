import fl from '../assets/fl.png'
import ww from '../assets/ww.png'
function Project(params) {
    return (
        <>
            <div id="project" className="w-full h-screen pt-[10vh] pb-[5vh] flex justify-between items-center flex-col">
                <h1 className='text-center sora text-4xl text-purple-400'>Project</h1>
                <div className='flex w-full h-full justify-evenly items-center'>
                    <div className="relative group w-[45vw] h-[60vh] rounded-xl overflow-hidden bg-black/30 border border-purple-900/70">
                        <img src={ww} className="absolute w-full h-full object-cover blur-xs opacity-40 group-hover:opacity-100 transition duration-500" />
                        <div className="w-full h-full relative z-10 text-white flex flex-col justify-center items-center group-hover:opacity-0 cursor-none">
                            <h2 className='sora text-3xl font-semibold'>WatchWise</h2>
                            <p>An AI-powered movie recommendation system</p>
                        </div>
                        <div className='absolute inset-0 z-20 flex justify-center items-center opacity-0 transition group-hover:opacity-100 cursor-pointer'>
                            <a href='https://feed-link-web.vercel.app' target='_blank' className='bg-purple-500 w-[20vw] h-[10vh] rounded-2xl flex items-center justify-center sora font-semibold'>
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="relative group w-[45vw] h-[60vh] rounded-xl overflow-hidden bg-black/30 border border-purple-900/70">
                        <img src={fl} className="absolute w-full h-full object-cover blur-xs opacity-40 group-hover:opacity-100 transition duration-500" />
                        <div className="w-full h-full relative z-10 text-white flex flex-col justify-center items-center group-hover:opacity-0 cursor-none">
                            <h2 className='sora text-3xl font-semibold'>FeedLink</h2>
                            <p>A platform for donating surplus food to those in need</p>
                        </div>
                        <div className='absolute inset-0 z-20 flex justify-center items-center opacity-0 transition group-hover:opacity-100 cursor-pointer'>
                            <a href='https://feed-link-web.vercel.app' target='_blank' className='bg-purple-500 w-[20vw] h-[10vh] rounded-2xl flex items-center justify-center sora font-semibold'>
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