import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";

function ProjectCard({ image, title, description, techStack, githubLink, theme }) {
    const cardClass = theme === 'dark' ? 'dark' : ''; // Apply 'dark' class conditionally

    return (
        <div id="projectcard" className={`flex px-2 md:px-0 md:gap-5 ${cardClass}`}>
            <div className='p-3 rounded-md w-full max-w-xs mx-auto'>
                <img className='h-[150px] w-full object-cover rounded-md mb-2' src={image} alt={title} />
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-xl font-hero-font relative pb-1'>{title}</h1>
                    <p className='text-sm font-hero-font text-start'>{description}</p>
                    <p className='text-sm font-hero-font pt-2 pb-3 text-start'>Tech Stack: {techStack}</p>
                    <div className='flex justify-end'>
                    <button className='flex items-center' style={{ 
    border: '1px solid', // Example border color for light theme
    borderRadius: '15px', 
    padding: '3px 8px', 
     // Example text color for light theme
    backgroundColor: 'transparent' 
}}>
    <AiOutlineGithub size={18} style={{ marginRight: '5px' }} /> View
</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
