import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(false);
  };

  return (
    <div className='fixed top-5 right-10 z-50 p-4'>
      <button className='block focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
        <svg className='w-14 h-14 text-amber-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          {isOpen ? <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /> : <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />}
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 right-0 mt-16 bg-sky-900/90 w-[40vh] h-[55vh] shadow-lg p-16 rounded-xl`}>
        <ul className='flex flex-col justify-center items-center'>
          <li>
            <NavLink to='/about' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              關於我們
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/know' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              知識專欄
            </NavLink>
          </li>
          <li>
            <NavLink to='/limited' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              期間限定
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/serve' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              服務項目
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/member' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              會員登入
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              聯絡我們
            </NavLink>
          </li>
          <li>
            <NavLink to='/' onClick={handleOnClick} activeClassName='active' className='text-white hover:text-amber-500 text-[35px]'>
              怪獸商城
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
