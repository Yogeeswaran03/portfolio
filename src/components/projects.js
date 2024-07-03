import proj from '../assets/echo1.jpg';
import ProjectCard from './ProjectCard';

export default function Project() {
    const projects = [
        {
            image: proj,
            title: "Echo",
            description: "An ecommerce website like Swiggy, built with MERN Stack",
            techStack: "Flutter, Google map API",
            githubLink: "#",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Echo",
            description: "An ecommerce website like Swiggy, built with MERN Stack",
            techStack: "Flutter, Google map API",
            githubLink: "#",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Echo",
            description: "An ecommerce website like Swiggy, built with MERN Stack",
            techStack: "Flutter, Google map API",
            githubLink: "#",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Echo",
            description: "An ecommerce website like Swiggy, built with MERN Stack",
            techStack: "Flutter, Google map API",
            githubLink: "#",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Echo",
            description: "An ecommerce website like Swiggy, built with MERN Stack",
            techStack: "Flutter, Google map API",
            githubLink: "#",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Echo",
            description: "An ecommerce website like Swiggy, built with MERN Stack",
            techStack: "Flutter, Google map API",
            githubLink: "#",
            bgColor: "card-bg",
            textColor: "card-text"
        }
    ];

    return (
        <section id='projects' className="flex flex-col py-20 px-5 md:py-30 justify-center bg-back">
            <div className="w-full">
                <div className='flex justify-center'>
                    <h1 className='text-2xl md:text-3xl mb-4 md:mb-7 font-hero-font font-bold relative pb-2'>
                        Projects
                        <span className='block absolute bottom-0 left-0 w-5/6 border-b-4'></span>
                    </h1>
                </div>
            </div>
            <div className="w-full flex flex-col gap-10 justify-evenly">
                <div className="w-full flex flex-col md:flex-row gap-10 justify-evenly">
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className="w-full flex flex-col md:flex-row gap-10 justify-evenly">
                    {projects.slice(3, 6).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
