import proj from '../assets/echo1.jpg';
import linkedin from '../assets/th.jpg';
import ProjectCard from './ProjectCard';

export default function Project() {
    const projects = [
        {
            image: proj,
            title: "Echo",
            description: "Developed a game-based audiometer to assess children’s hearing tendencies through engaging audio-based games.",
            techStack: "Flutter, Unity, Firebase",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Nearo",
            description: "Developed a Nearby Bluetooth Attendance Tracker Featured with admin and student login for attendance marking",
            techStack: "Flutter, Firebase",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: linkedin,
            title: "Linkedin Clone",
            description: "A web application replicating core LinkedIn functionalities like Seamless Job Search and Dynamic Feeds",
            techStack: "React, Spring Boot, MySQL",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Personal Portfolio",
            description: "Developed a personal portfolio website using React to describe my skills and projects and Implemented a responsive design",
            techStack: "React.js, Tailwind CSS, Spring Boot, MySQL",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Echo",
            description: "An ecommerce website like Swiggy, built with MERN Stack",
            techStack: "Flutter, Google map API",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: proj,
            title: "Echo",
            description: "An ecommerce website like Swiggy, built with MERN Stack",
            techStack: "Flutter, Google map API",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        }
    ];

    return (
        <section id='projects' className="flex flex-col py-20 px-10 md:py-30 justify-center bg-back">
            <div className="w-full">
                <div className='flex justify-center'>
                    <h1 className='text-2xl md:text-3xl mb-4 md:mb-7 font-hero-font font-bold relative pb-2'>
                        Projects
                        <span id='' className='block absolute bottom-0 left-0 w-5/6 border-b-4 '></span>
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
