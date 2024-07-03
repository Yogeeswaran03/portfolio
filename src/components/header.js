import { Bars3Icon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Import Sun and Moon icons
import { useState, useEffect } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const { offsetTop, offsetHeight } = sectionElement;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <header id='header' className="fixed top-0 left-0 w-full flex md:justify-between items-center px-5 py-5 bg-back z-50">
            <a className="font-bold" href="#home">Yogees</a>

            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="#home"
                            className={`pb-2 ${activeSection === 'home' ? 'border-b-2' : ''}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={`pb-2 ${activeSection === 'about' ? 'border-b-2' : ''}`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`pb-2 ${activeSection === 'projects' ? 'border-b-2' : ''}`}
                        >
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className={`pb-2 ${activeSection === 'skills' ? 'border-b-2' : ''}`}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`pb-2 ${activeSection === 'contact' ? 'border-b-2' : ''}`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            {toggleMenu && (
                <nav className="absolute top-full left-0 w-full bg-primary bg-opacity-95 md:hidden z-10">
                    <ul className="flex flex-col text-center space-y-4 overflow-y-auto pl-4">
                        <li className="py-2 list-disc flex justify-center items-center">
                            <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
                        </li>
                        <li className="py-2 list-disc flex justify-center items-center">
                            <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
                        </li>
                        <li className="py-2 list-disc flex justify-center items-center">
                            <a href="#projects" onClick={() => setToggleMenu(false)}>Project</a>
                        </li>
                        <li className="py-2 list-disc flex justify-center items-center">
                            <a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a>
                        </li>
                        <li className="py-2 pb-4 list-disc flex justify-center items-center">
                            <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
                        </li>
                    </ul>
                </nav>
            )}

            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="h-5" />
            </button>

            <button onClick={toggleTheme} className="ml-4">
                {isDarkTheme ? (
                    <SunIcon className="h-5" />
                ) : (
                    <MoonIcon className="h-5" />
                )}
            </button>
        </header>
    );
}
