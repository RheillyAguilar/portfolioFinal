

import { Link } from "react-router-dom";
import { faLink, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project({ project }) {
    

    const background = [
        '#0088D2', // VsCode
        '#006899', // React
        '#2c487f', // CSS3
        '#246881', // Tailwind
        '#2D2E32', // Github
        '#e6b400', // JavaScript
    ];


    return (
        <section className="min-h-[100vh] bg-[#e7e5d9] p-5 flex flex-col items-center justify-center" id="project">
            <div className="text-center font-bold mb-[64px] text-[#5e5946]">
                <p className="text-md">Get to know more about my</p>
                <h1 className="text-4xl">Projects</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10">
                {project.map((proj) => (
                    <div key={proj.id} className="max-w-md rounded-md bg-[#5e5946] shadow-lg">
                        <div className="w-full">
                            <img src={proj.image} alt={proj.name} className="w-full rounded-t-md" />
                        </div>

                        <div className="text-[#e7e5d9] p-5">
                            {/* TITLE AND TOOLS */}
                            <div className="text-center mb-5">
                                <h1 className="text-2xl font-semibold">{proj.name}</h1>

                                {/* TOOLS I USED */}
                                <div className="flex flex-wrap items-center justify-center gap-4 mt-3 ">
                                    {proj.skills.map((skill, index) => (
                                        <div key={index} className="flex items-center justify-center gap-1 rounded-md w-[110px] h-[30px] p-3"
                                        style={{background: background[index % background.length]}}>
                                            <img src={skill.image} alt={skill.name} 
                                            className="w-5 h-5" 
                                            />
                                            <h1 className="">{skill.name}</h1>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-base leading-relaxed">{proj.description}</p>
                            <div className="flex items-center justify-center gap-4 mt-5">
                                <Link 
                                to= {proj.Visit}
                                className="px-12 py-1.5 bg-[#ae887b] rounded-md flex items-center gap-2"
                                target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} />Visit</Link>
                                <Link 
                                to={proj.Github}
                                target="_blank"
                                className="px-12 py-1.5 bg-[#ae887b] rounded-md flex items-center gap-2"><FontAwesomeIcon icon={faLink} />Github</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
