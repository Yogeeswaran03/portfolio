import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";

function ProjectCard({ image, title, description, techStack, githubLink, theme }) {
    const cardClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'; // Apply theme class

    return (
        <div id="projectcard" className={`flex px-3 rounded-md md:p-3 w-full max-w-sm mx-auto ${cardClass}`}>
            <div className='flex flex-col'>
                <img className='h-[150px] w-full object-cover rounded-md mb-2' src={image} alt={title} />
                <h1 className='text-xl md:text-xl font-hero-font font-semibold relative pb-1'>{title}</h1>
                <p className='text-sm font-hero-font text-start'>{description}</p>
                <p className='text-sm font-hero-font pt-2 pb-3 text-start'>Tech Stack: {techStack}</p>
                <div className='flex justify-end mt-auto'>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className='flex items-center' style={{
                        border: '1px solid', // Example border color for light theme
                        borderRadius: '15px',
                        padding: '3px 8px',
                        backgroundColor: 'transparent'
                    }}>
                        <AiOutlineGithub size={18} style={{ marginRight: '5px' }} /> View
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
