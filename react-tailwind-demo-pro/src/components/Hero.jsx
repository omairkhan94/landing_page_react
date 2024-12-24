import { Link } from 'react-router-dom';
import omairkhanImage from '../assets/images/omairkhan.png';

const Hero = () => {
  return (
               <section id='hero'>
      
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
     
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                   <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Omair Yahya Building a community, sharing updates
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Hey everyone, it's Omair Yahya! I'm building a community where friends stay connected and always up-to-date!
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='https://www.linkedin.com/in/omair-yahya55/'
              className='hidden p-3 px-6 pt-2 text-white bg-blue-500 rounded-full baseline hover:bg-blue-400 md:block'
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className='md:w-1/2'>
          <img src={omairkhanImage} alt='Omair Khan' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
