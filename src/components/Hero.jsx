import React from 'react';
import Typed from 'react-typed';
import HeroLogo from '../assets/NameLogo-V2.png';

const Hero = () => {
  return (
    <div className='text-[#0c120c]' id='intro'>
      <div className='max-w-[800px] sm:mt-5 mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[4rem] font-bold p-2'>Hey, I'm</p>
        <img className='w-[1240px] my-4 mx-auto' src={HeroLogo} alt='Aaron Ford-Wright logo' />
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-2xl font-medium py-4'>Web</p>
          <Typed
            className='md:text-5xl sm:text-4xl text-2xl font-medium md:pl-4 pl-2'
            strings={['Designer', 'Developer', 'Expert']}
            typeSpeed={80}
            backSpeed={120}
            loop
          />
        </div>
        {/* <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms.
        </p>
        <button className='bg-[#9e3141] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
