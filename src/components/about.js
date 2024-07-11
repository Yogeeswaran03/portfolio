import Aboutimg from '../assets/about.png';

export default function About() {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-back1 px-5 pt-17 md:pt-27 pb-20 md:pb-27'>
      <div className='md:w-1/2 flex justify-center mb-5 md:mb-0 px-5'>
        <img src={Aboutimg} alt="About Me" className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl' />
      </div>
      <div className='md:w-1/2 flex px-5'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl md:text-3xl mb-4 md:mb-7 font-hero-font font-bold relative pb-2'>
            About Me
            <span className='block absolute bottom-0 left-0 w-1/6 border-b-4'></span>
          </h1>
          <p className='font-hero-font text-base md:text-lg leading-relaxed md:leading-relaxed text-justify'>
         Hello, I'm Yogeeswaran M, a final year B.Tech student in Information Technology at PSNA College of Engineering and Technology, Dindigul. I have a strong foundation in programming, particularly in Java, and I enjoy solving complex problems. In addition to Java, I am proficient in full-stack development and mobile app development. Currently, I am focusing on Java backend development, creating efficient and scalable systems. I am passionate about continuous learning and staying updated with the latest technologies. My goal is to leverage my skills in a dynamic and challenging environment. I aim to contribute to impactful projects and drive technological innovation. My commitment to excellence and innovation drives me to deliver high-quality solutions. I look forward to making meaningful contributions to the tech industry.</p>
        </div>
      </div>
    </section>
  );
}
