import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import reactimg from '../assets/react-removebg-preview.png';
import htmlimg from '../assets/html-removebg-preview.png';
import mongooimg from '../assets/mongoo-removebg-preview.png';
import javaimg from '../assets/java-removebg-preview.png';
import tailwindimg from '../assets/tailwind-removebg-preview.png';
import flutter from '../assets/flutter-logo-removebg-preview.png';
import css from '../assets/logo-css-3-1024.png';
import git from '../assets/git-logo-11609362364wwhuzvtx5h-removebg-preview.png';
import sql from '../assets/mysql_PNG23-removebg-preview.png';
import firebase from '../assets/png-transparent-firebase-hd-logo-removebg-preview.png';
import spring from '../assets/spring-boot-logo-removebg-preview.png';
import bootstrap from '../assets/bootstrap-logo-removebg-preview.png';
import python from '../assets/python-logo-png-open-2000-removebg-preview.png';
import postman from '../assets/png-transparent-postman-hd-logo-removebg-preview.png';
import js from '../assets/js.png';
import node from '../assets/text-nodejs-javascript-sign-signage-removebg-preview.png';

export default function Skills({ theme }) {
    const skillsData = [
        { image: javaimg, title: "JAVA" },
        { image: spring, title: "Spring Boot" },
        { image: htmlimg, title: "HTML" },
        { image: css, title: "CSS" },
        { image: js, title: "Javascript" },
        { image: bootstrap, title: "Bootstrap" },
        { image: reactimg, title: "React" },
        { image: node, title: "Node Js" },
        { image: tailwindimg, title: "Tailwind" },
        { image: mongooimg, title: "MongoDB" },
        { image: sql, title: "My SQL" },
        { image: firebase, title: "Firebase" },
        { image: flutter, title: "Flutter" },
        { image: python, title: "Python" },
        { image: git, title: "Git" },
        { image: postman, title: "Postman" },
    ];

    return (
        <section id='skills' className="flex flex-col py-20 px-5 md:py-20 md:px-10 justify-center bg-back1 text-white">
            <div className="w-full">
                <div className='flex justify-center'>
                    <h1 className='text-2xl md:text-3xl mb-4 md:mb-7 font-hero-font font-bold relative pb-2'>
                        Skills
                        <span className='block absolute bottom-0 left-0 w-5/6 border-b-4 border-white'></span>
                    </h1>
                </div>
            </div>

            <div className='w-full px-5 py-10 md:px-10 md:py-10 flex justify-center'>
                <ul className='flex flex-wrap justify-center gap-7 md:gap-10'>
                    {skillsData.map((skill, index) => (
                        <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <SkillCard image={skill.image} title={skill.title} theme={theme} />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
