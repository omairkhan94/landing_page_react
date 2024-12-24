import { Link } from 'react-router-dom';

import facebookLogo from '../assets/images/icon-facebook.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import pinterestLogo from '../assets/images/icon-pinterest.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='bg-veryDarkBlue'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © 2022, All Rights Reserved
          </div>
          <div>
            <p className='text-white text-lg font-bold'>DEMO</p>
          </div>
          <div className='flex justify-center space-x-4'>
            <Link to='#'>
              <img src={facebookLogo} className='h-8' alt='' />
            </Link>
            <Link to='#'>
              <img src={youtubeLogo} className='h-8' alt='' />
            </Link>
            <Link to='#'>
              <img src={twitterLogo} className='h-8' alt='' />
            </Link>
            <Link to='#'>
              <img src={pinterestLogo} className='h-8' alt='' />
            </Link>
            <Link to='#'>
              <img src={instagramLogo} className='h-8' alt='' />
            </Link>
          </div>
        </div>
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-brightRed'>
              Home
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Pricing
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Products
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              About
            </Link>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-brightRed'>
              Careers
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Community
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Updated in your inbox'
              />
              <button className='px-6 py-2 text-white rounded-full bg-blue-500 hover:bg-blue-400 focus:outline-none'>
                Go
              </button>
            </div>
          </form>
          <div className='hidden text-white md:block'>
            Copyright © 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
