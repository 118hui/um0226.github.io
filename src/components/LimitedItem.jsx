import { NavLink } from 'react-router-dom';

const Blog = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <h1 className='sm:text-4xl text-3xl font-bold text-center  text-gray-900 mb-5'>期間限定課程</h1>
      <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
          <img src='https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500' className='object-cover w-full h-64' alt='' />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700' aria-label='Category' title='traveling'>
                20 Dec 2024
              </a>
              <span className='text-gray-600'>— 28 Dec 2024</span>
            </p>
            <a href='/' aria-label='Category' title='Visit the East' className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'>
              Visit the East
            </a>
            <p className='mb-2 text-gray-700'>Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
          <img src='https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' className='object-cover w-full h-64' alt='' />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700' aria-label='Category' title='traveling'>
                16 Jan 2024
              </a>
              <span className='text-gray-600'>— 25 Jan 2024</span>
            </p>
            <a href='/' aria-label='Category' title='Simple is better' className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'>
              Simple is better
            </a>
            <p className='mb-2 text-gray-700'>Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
          <img src='https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' className='object-cover w-full h-64' alt='' />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700' aria-label='Category' title='traveling'>
                8 Feb 2024
              </a>
              <span className='text-gray-600'>— 15 Feb 2024</span>
            </p>
            <a href='/' aria-label='Category' title='Film It!' className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'>
              Film It!
            </a>
            <p className='mb-2 text-gray-700'>Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
          </div>
        </div>
      </div>
      <br />
      <div className='text-center'>
        <NavLink to='/limited' activeClassName='active'>
          <button className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-amber-500 hover:bg-sky-900 focus:shadow-outline focus:outline-none'>更多限定課程</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Blog;
