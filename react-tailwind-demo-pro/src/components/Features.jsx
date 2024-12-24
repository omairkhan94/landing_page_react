import React from 'react';

const Features = () => {
  return (
    <section id='features'>
      
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
  
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What's different about My Idea?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam voluptate molestiae repudiandae nisi ab tempore quis a? Distinctio, veritatis.
          </p>
        </div>

        <div className='flex flex-col space-y-8 md:w-1/2'>
        
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
         
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
              <div
  className='px-4 py-2 text-white rounded-full md:py-1'
  style={{ backgroundColor: '#67a176' }}
>
  01
</div>

                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Its just a Demo
              </h3>
              <p className='text-darkGrayishBlue'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aliquam aperiam voluptate molestiae repudiandae nisi ab 
              tempore quis a? Distinctio, veritatis.
              </p>
            </div>
          </div>

       
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>

            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
              <div
  className='px-4 py-2 text-white rounded-full md:py-1'
  style={{ backgroundColor: '#67a176' }}
>
  02
</div>

                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Read my Bio
              </h3>
              <p className='text-darkGrayishBlue'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aliquam aperiam voluptate molestiae 
              repudiandae nisi ab tempore quis a? Distinctio, veritatis.
              </p>
            </div>
          </div>

          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
   
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
              <div
  className='px-4 py-2 text-white rounded-full md:py-1'
  style={{ backgroundColor: '#67a176' }}
>
  03
</div>

                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Leave your queries
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Visit my linkedIn
              </h3>
              <p className='text-darkGrayishBlue'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Aliquam aperiam voluptate molestiae repudiandae nisi ab 
              tempore quis a? Distinctio, veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
