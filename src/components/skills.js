import React from 'react';
import SkillCard from './SkillCard';
import reactimg from '../assets/react-removebg-preview.png';
import htmlimg from '../assets/html-removebg-preview.png';
import mongooimg from '../assets/mongoo-removebg-preview.png';
import javaimg from '../assets/java-removebg-preview.png';
import tailwindimg from '../assets/tailwind-removebg-preview.png';

export default function Skills() {
    const skillsData = [
        { image: javaimg, title: "JAVA" },
        { image: htmlimg, title: "HTML" },
        { image: mongooimg, title: "MongoDB" },
        { image: reactimg, title: "React" },
        { image: tailwindimg, title: "Tailwind" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
        { image: reactimg, title: "React" },
    ];

    return (
        <section id='skills' className="flex flex-col py-20 px-5 md:py-20 md:px-10 justify-center bg-back1 text-white">
            <div className="w-full">
                <div className='flex justify-center'>
                    <h1 className='text-2xl md:text-3xl text-white mb-4 md:mb-7 font-hero-font font-bold relative pb-2'>
                        Skills
                        <span className='block absolute bottom-0 left-0 w-5/6 border-b-4 border-white'></span>
                    </h1>
                </div>
            </div>

            <div className='w-full px-5 py-10 md:px-10 md:py-10 flex justify-center'>
                <ul className='flex flex-wrap justify-center gap-7 md:gap-10'>
                    {skillsData.map((skill, index) => (
                        <SkillCard key={index} image={skill.image} title={skill.title} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
