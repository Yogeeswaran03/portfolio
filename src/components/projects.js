import { motion } from 'framer-motion';
import echo from '../assets/1.jpg';
import nearo from '../assets/2.jpg';
import whatsapp from '../assets/3.jpg';
import enga from '../assets/4.jpg';
import linkedin from '../assets/Untitled design.jpg';
import ProjectCard from './ProjectCard';

export default function Project() {
    const projects = [
        {
            image: nearo,
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
            image: enga,
            title: "Enga Madurai",
            description: "Enga Madurai is an app for Madurai that helps identify ward boundaries and offers e-governance features.",
            techStack: "Flutter, Google map API, Firebase",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        }, 
        {
            image: echo,
            title: "Echo",
            description: "Developed a game-based audiometer to assess children’s hearing tendencies through engaging audio-based games.",
            techStack: "Flutter, Unity, Firebase",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        },
        {
            image: whatsapp,
            title: "Whatsapp Clone",
            description: "The WhatsApp Clone UI in Flutter is a basic app that mimics WhatsApp's design using Flutter widgets, focusing only on the front-end.",
            techStack: "Flutter",
            githubLink: "https://github.com/Yogeeswaran03",
            bgColor: "card-bg",
            textColor: "card-text"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

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
            <motion.div
                className="w-full flex flex-col gap-10 justify-evenly"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="w-full flex flex-col md:flex-row gap-10 justify-evenly">
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
                <div className="w-full flex flex-col md:flex-row gap-10 justify-evenly">
                    {projects.slice(3, 6).map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
