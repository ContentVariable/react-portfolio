import React from 'react';
import Project1 from '../assets/Dice-Game.png';
import Project2 from '../assets/Guess-My-Number.png';
import Project3 from '../assets/Working-Modals.png';
import Project4 from '../assets/technical-doc2.png';
import Project5 from '../assets/filmfav-preview2.png';
import Project6 from '../assets/forkify-preview2.png';

const Projects = () => {
  return (
    <div className='w-full bg-eggshell py-[10rem] px-4' id='project-sec'>
      <div className='mb-10 text-center'>
        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-4 my-2'>Projects</h1>
        <p className='md:text-2xl sm:text-xl text-2xl py-2 mb-2 mt-[-20px]'>My Latest Work</p>
        <hr className='bg-crimson border-0 rounded h-[5px] w-1/3 md:mb-[] mb-10 mx-auto' />
      </div>
      <div className='max-w-[1240px] mx-auto my-[4rem] grid md:grid-cols-3 gap-8'>
        <div className='w-full bg-[#faf9f6] shadow-xl flex flex-col p-0 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-full mx-auto rounded-t-lg' src={Project5} alt='Dice Game main screen' />
          <h2 className='text-3xl font-bold text-center py-8'>FilmFav</h2>
          <div className='text-center font-medium'>
            <p className='text-xl py-2 border-b mx-8 mt-2'>
              <span className='font-bold'>Stack:</span> ReactJS, HMTL, CSS
            </p>
            <p className='text-xl py-2 border-b mx-8'>
              <span className='font-bold'>Description:</span> Browse hundreds of thousands of
              movies, rate them, and store your favorites! Uses the OMDb API (Key: 943ae579).
            </p>
          </div>
          <a
            className='bg-crimson hover:bg-shade duration-500 w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'
            href='https://filmfav-afw.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            View Project
          </a>
        </div>
        <div className='w-full bg-white shadow-xl flex flex-col p-0 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-full mx-auto rounded-t-lg'
            src={Project6}
            alt='health focused web survey'
          />
          <h2 className='text-3xl font-bold text-center py-8'>Forkify</h2>
          <div className='text-center font-medium'>
            <p className='text-xl py-2 border-b mx-8 mt-2'>
              <span className='font-bold'>Stack:</span> JavaScript, HTML, CSS
            </p>
            <p className='text-xl py-2 border-b mx-8'>
              <span className='font-bold'>Description:</span> View thousands of recipes of your
              favorite foods and their ingredients. You can even add your own! Uses a custom API
              from Jonas Schmedtmann.
            </p>
          </div>
          <a
            className='bg-crimson hover:bg-shade duration-500  hover w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'
            href='https://forkify-aaronfw.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            View Project
          </a>
        </div>
        <div className='w-full bg-white shadow-xl flex flex-col p-0 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-full mx-auto rounded-t-lg'
            src={Project4}
            alt='technical document webpage'
          />
          <h2 className='text-3xl font-bold text-center py-8'>Technical Document</h2>
          <div className='text-center font-medium'>
            <p className='text-xl py-2 border-b mx-8 mt-2'>
              <span className='font-bold'>Stack:</span> JavaScript, HTML, CSS
            </p>
            <p className='text-xl py-2 border-b mx-8'>
              <span className='font-bold'>Description:</span> This technical document has a
              operational sidebar that opens and collapses.
            </p>
          </div>
          <a
            className='bg-crimson hover:bg-shade duration-500  w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'
            href='https://codepen.io/contentvariable/full/RwgVevg'
            target='_blank'
            rel='noreferrer'>
            View Project
          </a>
        </div>
        <div className='w-full bg-white shadow-xl flex flex-col p-0 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-full mx-auto rounded-t-lg' src={Project1} alt='Dice Game main screen' />
          <h2 className='text-3xl font-bold text-center py-8'>Dice Game</h2>
          <div className='text-center font-medium'>
            <p className='text-xl py-2 border-b mx-8 mt-2'>
              <span className='font-bold'>Stack:</span> JavaScript
            </p>
            <p className='text-xl py-2 border-b mx-8'>
              <span className='font-bold'>Description:</span> First player to score 100 points wins!
              A dice game that utilizes various math functions.
            </p>
          </div>
          <a
            className='bg-crimson hover:bg-shade duration-500 w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'
            href='https://github.com/ContentVariable/Udemy-Coursework/tree/main/Pig-Game'
            target='_blank'
            rel='noreferrer'>
            View Project
          </a>
        </div>
        <div className='w-full bg-white shadow-xl flex flex-col p-0 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-full mx-auto rounded-t-lg'
            src={Project2}
            alt='Guess My Number! main screen'
          />
          <h2 className='text-3xl font-bold text-center py-8'>Guess My Number!</h2>
          <div className='text-center font-medium'>
            <p className='text-xl py-2 border-b mx-8 mt-2'>
              <span className='font-bold'>Stack:</span> JavaScript
            </p>
            <p className='text-xl py-2 border-b mx-8'>
              <span className='font-bold'>Description:</span> Number guessing game that requires
              player to guess the correct randomized number.
            </p>
          </div>
          <a
            className='bg-crimson hover:bg-shade duration-500  w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'
            href='https://codepen.io/contentvariable/full/ZEJKXGY'
            target='_blank'
            rel='noreferrer'>
            View Project
          </a>
        </div>
        <div className='w-full bg-white shadow-xl flex flex-col p-0 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-full mx-auto rounded-t-lg'
            src={Project3}
            alt='modal over green background'
          />
          <h2 className='text-3xl font-bold text-center py-8'>Working Modals</h2>
          <div className='text-center font-medium'>
            <p className='text-xl py-2 border-b mx-8 mt-2'>
              <span className='font-bold'>Stack:</span> JavaScript, CSS
            </p>
            <p className='text-xl py-2 border-b mx-8'>
              <span className='font-bold'>Description:</span> Pop-up modals that cycle through based
              on what navigation link you select.
            </p>
          </div>
          <a
            className='bg-crimson hover:bg-shade duration-500  w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'
            href='https://codepen.io/contentvariable/full/wvqdrGR'
            target='_blank'
            rel='noreferrer'>
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
