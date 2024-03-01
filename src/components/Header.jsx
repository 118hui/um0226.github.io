import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  return (
    <div className='fixed z-10'>
      <header className='container px-5 py-5 sm:px-10'>
        <div className='flex justify-between items-center'>
          <NavLink exact to='/'>
            <img src={Logo} alt='' className='w-23 h-12' />
          </NavLink>
          <Menu />
        </div>
      </header>
    </div>
  );
};

export default Header;
