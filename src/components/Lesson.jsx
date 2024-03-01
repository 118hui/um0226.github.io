import { NavLink } from 'react-router-dom';

const Lesson = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'></span> 定期課程介紹
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>提供狗、貓，一對一及團體課程，並有安心住宿及到府照顧......等，多項服務課程</p>
      </div>
      <div className='relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2'>
        <div className='absolute inset-0 flex items-center justify-center sm:hidden lg:flex'>
          <div className='w-px h-full bg-gray-300 lg:w-full lg:h-px' />
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-xl font-bold leading-5'>一對一課程</p>
            <p className='flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-amber-400'>1</p>
          </div>
          <p className='text-sm text-gray-900'>Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm.</p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-xl font-bold leading-5'>團體課程</p>
            <p className='flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-amber-400'>2</p>
          </div>
          <p className='text-sm text-gray-900'>A flower in my garden, a mystery in my panties. Heart attack never stopped.</p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-xl font-bold leading-5'>安心住宿</p>
            <p className='flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-amber-400'>3</p>
          </div>
          <p className='text-sm text-gray-900'>Chase ball of string eat plants, meow, and throw up because I ate plants going.</p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2'>
          <div className='flex items-center justify-between mb-2'>
            <p className='text-xl font-bold leading-5'>到府照顧</p>
            <p className='flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-amber-400'>4</p>
          </div>
          <p className='text-sm text-gray-900'>Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless.</p>
        </div>
      </div>
      <div className='text-center'>
        <NavLink exact to='/serve' activeClassName='active'>
          <button className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-amber-500 hover:bg-sky-900 focus:shadow-outline focus:outline-none'>更多課程</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Lesson;
