import Spline from '@splinetool/react-spline';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiVercel } from "react-icons/si";
import { useInView } from 'react-intersection-observer'
import './Skills.css'
function Skills() {
    const { ref: firstSkill, inView: fsVisible } = useInView({
        threshold: 0.15,
        triggerOnce: false
    });
    const skills = [
        {
            title: "React",
            icon: FaReact
        },
        {
            title: "Node.js",
            icon: FaNodeJs
        },
        {
            title: "Express",
            icon: SiExpress
        },
        {
            title: "MongoDB",
            icon: SiMongodb
        },
        {
            title: "HTML",
            icon: FaHtml5
        },
        {
            title: "CSS",
            icon: FaCss3Alt
        },
        {
            title: "JavaScript",
            icon: FaJs
        },
        {
            title: "Tailwind CSS",
            icon: SiTailwindcss
        },
        {
            title: "Java",
            icon: FaJava
        },
        {
            title: "Git",
            icon: FaGitAlt
        },
        {
            title: "GitHub",
            icon: FaGithub
        },
        {
            title: "Vercel",
            icon: SiVercel
        }
    ];
    return (
        <>
            <div ref={firstSkill} id="skills" className={`s ${fsVisible ? "ss" : ""} w-full min-h-screen md:h-screen relative py-[5vh] md:py-[3vh]`}>
                <div className="absolute inset-0 z-0">
                    <Spline scene="https://prod.spline.design/nVwbLanFnaJSzsOt/scene.splinecode" />
                </div>
                <h1 className='text-3xl md:text-4xl sora text-purple-400 text-center z-10 relative inset-0 mb-[5vh]'>Skills</h1>
                <div className="flex flex-wrap relative z-10 px-5 md:px-[5vw] gap-5 sm:gap-8 md:gap-[10vw] justify-center items-center pointer-events-none">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index} className="w-24 h-24 md:w-[7vw] md:h-[9vh] p-1 bg-[#291A36] hover:bg-purple-900 hover:scale-[1.2] duration-150 transition rounded-xl flex flex-col items-center justify-center gap-2 pointer-events-auto">
                                <Icon className="text-xl text-white" />
                                <p className="text-xs text-white">{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default Skills;
