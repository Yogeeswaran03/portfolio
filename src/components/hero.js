import Heroimg from '../assets/yogees.JPG';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function Hero() {

  const handleResumeClick = () => {
    window.location.href = 'https://drive.google.com/file/d/14H8CoBp8wvJCoWRBc9ym-3UpOQcWb8nl/view?usp=drivesdk';
  };

  return (
    <section id='home' className='flex flex-col md:flex-row px-6 md:px-12 pt-[12rem] md:pt-40 pb-20 md:pb-40 bg-back justify-center items-center'>
      <div className='md:flex md:flex-col px-8 md:pl-12 md:justify-center pb-15 md:w-1/2 order-2 md:order-1'>
        <h1 className='text-white text-3xl md:text-5xl font-hero-font'>
          Hi, <br /> I'm Yogeeswaran M
          <p className='md:text-2xl text-xl mt-2 md:mt-4'>
            I'm a full-stack developer
          </p>
        </h1>
        <div className='flex py-5 justify-start'>
          <a className='pr-5 text-white hover:text-white' href='https://www.linkedin.com/in/yogeeswaran-m/'><AiOutlineLinkedin size={40} /></a>
          <a className='pr-5 text-white hover:text-white' href='https://github.com/Yogeeswaran03'><AiOutlineGithub size={40} /></a>
          <a className='pr-5 text-white hover:text-white' href='mailto:yogees97@gmail.com'><SiGmail size={35} /></a>
        </div>
        <div className='flex justify-start'>
          <button className="border-2 border-white text-white px-3 py-2 rounded-md mt-5 md:mt-0 bg-transparent hover:bg-white hover:text-black transition duration-300"
                  onClick={handleResumeClick}>
            Resume
          </button>
        </div>
      </div>

      <div className="md:w-1/3 w-4/5 h-auto rounded-full border-4 border-solid flex mb-20 md:mb-0 justify-center items-center animate-border-color order-1 md:order-2">
        <img className="w-full h-auto rounded-full" src={Heroimg} alt="Yogeeswaran M" />
      </div>
    </section>
  );
}
