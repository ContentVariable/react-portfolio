import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-shade w-full'>
      <div className='max-w-[1240px] mx-auto pt-16 pb-4 px-4 text-eggshell' id='footer-sec'>
        <div className='border-b-2 border-agreeable py-16 h-98'>
          <h1 className='md:text-5xl sm:text-4xl text-3xl  font-bold text-[#9e3121] text-center'>
            Contact Me
          </h1>
          <p className='md:text-2xl sm:text-xl text-2xl py-4 text-center'>
            Feel free to reach out using any of the following:
          </p>
          <div className='flex justify-between md:w-[75%] my-6 mx-auto text-agreeable'>
            <div className='group'>
              <a
                className='flex flex-col items-center lg:flex-row'
                href='https://github.com/ContentVariable'
                target='_blank'
                rel='noreferrer'>
                <FaGithub className='group-hover:text-white duration-500' size={40} />
                <h3 className='group-hover:text-white hidden sm:block duration-500 md:text-2xl text-xl lg:ml-2 my-auto'>
                  GitHub
                </h3>
              </a>
            </div>
            <div className='group'>
              <a
                className='flex flex-col items-center lg:flex-row'
                href='https://www.instagram.com/aaronfordwright/'
                target='_blank'
                rel='noreferrer'>
                <FaInstagram className='group-hover:text-white duration-500' size={40} />
                <h3 className='group-hover:text-white hidden sm:block  duration-500 md:text-2xl text-xl lg:ml-2 my-auto'>
                  Instagram
                </h3>
              </a>
            </div>
            <div className='group'>
              <a
                className='flex flex-col items-center lg:flex-row'
                href='https://www.linkedin.com/in/aaronfordwright/'
                target='_blank'
                rel='noreferrer'>
                <FaLinkedinIn className='group-hover:text-white duration-500' size={40} />
                <h3 className='group-hover:text-white hidden sm:block  duration-500 md:text-2xl text-xl lg:ml-2 my-auto'>
                  LinkedIn
                </h3>
              </a>
            </div>
            <div className='group'>
              <a
                className='flex flex-col items-center lg:flex-row'
                href='mailto:aaron.fordwright@gmail.com'
                target='_blank'
                rel='noreferrer'>
                <FaEnvelope className='group-hover:text-white duration-500' size={40} />
                <h3 className='group-hover:text-white hidden sm:block  duration-500 md:text-2xl text-xl lg:ml-2 my-auto'>
                  Send an Email
                </h3>
              </a>
            </div>
          </div>
        </div>
        <div className='my-2 py-4'>
          <p className='text-eggshell text-center'>
            Copyright &copy; 2023 Aaron Ford-Wright - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
