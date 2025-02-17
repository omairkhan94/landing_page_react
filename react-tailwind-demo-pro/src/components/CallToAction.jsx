import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id='cta' className='bg-[#614360]'>
      <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
          Simplify how we respect your privacy
        </h2>
        <div>
          <Link
            to='#'
            className='p-3 px-6 pt-2 text-white bg-blue-500 rounded-full shadow-2xl baseline hover:bg-blue-400'
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
