import React from 'react';

const SkillCard = ({ image, title, theme }) => {
    const cardClass = theme === 'dark' ? 'dark' : ''; // Apply 'dark' class conditionally

    return (
        <div id='skillcard' className={`flex flex-col items-center justify-center p-5 rounded-md h-32 w-28 ${cardClass}`}>
            <div className="w-20 h-20 mt-1 rounded-full">
                <img className="w-full h-full object-contain rounded-full" src={image} alt={title} />
            </div>
            <div className="text-center mt-2">
                <p className="text-xs font-hero-font">{title}</p>
            </div>
        </div>
    );
}

export default SkillCard;
