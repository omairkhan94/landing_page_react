import { Link } from 'react-router-dom';
import avatarAli from '../assets/images/avatar-ali.png';

const Testimonial = () => {
  return (
    <section id='testimonials'>
          <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        <h2 className='text-4xl font-bold text-center'>
          What's Different People Think!
        </h2>
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
         
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img src={avatarAli} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>Ali jan</h5>
            <p className='text-sm text-darkGrayishBlue'>
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, delectus.
          ” 
            </p>
          </div>

          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={avatarAli} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>Mudasir khan</h5>
            <p className='text-sm text-darkGrayishBlue'>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, delectus.
              ” 
              </p>
          </div>
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={avatarAli} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>maveya</h5>
            <p className='text-sm text-darkGrayishBlue'>
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, delectus.
            ” 
            </p>
          </div>
        </div>
        <div className='my-16'>
        <Link
  to='#'
  className='p-3 px-6 pt-2 text-white bg-blue-500 rounded-full baseline hover:bg-blue-400'
>
  Get Started
</Link>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
