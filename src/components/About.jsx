import React from 'react';
import Bio from '../assets/P1803226.jpg';

const About = () => {
  return (
    <div className='w-full bg-eggshell py-[10rem] px-4' id='about-sec'>
      <div className='mb-10 text-center'>
        <h1 className='py-4 my-2 text-3xl font-bold md:text-5xl sm:text-4xl'>About Me</h1>
        <hr className='bg-crimson border-0 rounded h-[5px] w-1/3 md:mb-[] mb-10 mx-auto' />
      </div>
      <div className='max-w-[1240px] mx-auto flex flex-col-reverse xl:flex-row'>
        <img
          className='md:w-[75%] lg:w-[60%] xl:w-[500px] mx-auto my-4 xl:max-h-[600px] rounded-lg shadow-xl'
          src={Bio}
          alt='Aaron listening to a presenter'
        />
        <div className='flex flex-col justify-center md:px-12 xl:px-8'>
          <p className='my-3'>
            I am a B.A. graduate from VCU, who had a major focus in design and theater carpentry.
            While my degree initially led me to develop skills in production creation, I learned
            much more from the hobbies I developed while at college and over the previous years
            since graduating. During my time at VCU, I spent a lot of my time at their aptly named
            “The Workshop'' center, where I recorded my own podcast and learned basic graphic
            design. This eventually led to me acquiring a work-study job where I did various tasks
            to assist with the theater department’s IT issues. Anything that wouldn’t require the
            university’s IT helpdesk, myself, and a few, others were called in to help with. In the
            years since, I have taught myself JavaScript (JQuery and React), HTML/CSS, and completed
            the CompTIA Security+ exam with a passing score. IT work is an extreme passion of mine,
            that while it only sort of flourished during college, definitely came to bloom when I
            found the time to really dig into the latent fire I had for it since leaving.
          </p>
          <p className='my-3'>
            My biggest strength is my firm belief in really listening to people and correctly
            assessing their situation. Oversight in what someone may be asking for assistance for
            may lead to more issues than there had been before. It is important to pay attention to
            things that may even be beyond the scope of what your employee, manager, or customer may
            be inquiring about. This has helped me countless times as I have been able to properly
            solve a problem that may have otherwise been handled ineffectively. In working at my
            current marketing company, group efficiency is paramount, and I have worked with a
            fantastic graphic designer who has helped elevate my creative process and ability to
            deliver not just clean code, but a clean product. That relationship only worked because
            of consistent, and concise, communication.
          </p>
          <p className='my-3'>
            Currently, I’m focused on growing as a front-end developer by building clean, performant
            interfaces using React, Next.js, and Tailwind CSS, while continuing to support dynamic,
            content-driven sites with WordPress. My aim is to contribute to teams where thoughtful
            design, accessibility, and maintainable code are prioritized. I’m especially interested
            in roles that value cross-functional collaboration, where I can help bring design
            concepts to life through reusable components, modern tooling, and a strong eye for user
            experience. Long-term, I’m committed to deepening my expertise in full-stack software
            architecture and evolving into a developer who bridges the gap between intuitive design
            and robust, scalable engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
