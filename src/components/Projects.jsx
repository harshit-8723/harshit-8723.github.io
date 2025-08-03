import ProjectCard from "./ProjectCard";
import { projects } from "../data";


const Projects = () => {
    return (
        <section id="projects" >
            <div className='relative w-full min-h-screen mt-7'>
                <h3 className='text-3xl md:text-4xl font-bold text-white z-3 text-center m-5'>
                    Some Of My Projects
                </h3>

                <div className='flex flex-wrap items-center justify-evenly'>
                    {projects.map((item,ind)=>(
                        <ProjectCard 
                            key={ind}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            githubLink={item.githubLink}
                            liveSiteLink={item.liveSiteLink}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects