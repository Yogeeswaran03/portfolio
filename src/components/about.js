import Aboutimg from '../assets/about.png';

export default function About() {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-back1 px-5 pt-20 md:pt-27 pb-20 md:pb-27'>
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
            This is Yogeeswaran M. I am pursuing Third year B.Tech. in the department of Information Technology Engg., in PSNA College of engineering and technology, Dindigul. I was into this esteemed university, with my hard work, intelligence and commitment, with a good Grade and Rank. I have maintained consistency in academics since my schooling and I used to be in the top of the batch. I maintained this performance even in my graduation; I am in the top 10 in the class. Though I am strong in my academics, I had no interest in general reading, but I have developed this habit for past 1 year. The books inspired me the most are ‘The Monk Who Sold his Ferrari’ by Robin Sharma and ‘The Alchemist’ by Paulo Coelho. My favorite author is Chetan Bhagat. Coming to my objectives in life, My family has inculcated the motto ‘Live and Let Live’ into my life which made my objective as starting an organization for Deaf and Dumb by introducing sophisticated equipment to make them normal and I provide this at the optimum cost to the needy.
          </p>
        </div>
      </div>
    </section>
  );
}
