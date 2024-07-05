

import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const companyName = "Yogeeswaran M"; // Replace with your actual company name or your name

    const copyrightText = `© ${currentYear}. Made by ${companyName}.`;

    return (
        <footer id='skills' className="text-center py-4 text-sm">
            {copyrightText}
        </footer>
    );
}

export default Footer;
