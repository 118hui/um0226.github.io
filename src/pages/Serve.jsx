import { useState } from 'react';
import PropTypes from 'prop-types';
import Faq from '../components/Faq';

import { NavLink } from 'react-router-dom';
const Serve = () => {
  const [showCard, setShowCard] = useState('all');

  const handleProject = (category) => {
    setShowCard(category);
  };
  return (
    <section>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900'>服務項目</h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>提供優質課程 !</p>
        </div>
        <div className='w-full flex flex-wrap justify-center -mx-4'>
          <div className='w-full px-4'>
            <ul className='flex flex-wrap justify-center mb-12 space-x-1'>
              <li className='mb-1'>
                <button onClick={() => handleProject('all')} className={`inline-block rounded-lg py-2 px-5 text-center text-lg font-semibold transition md:py-3 lg:px-8 ${showCard === 'all' ? 'activeClasses bg-amber-500 text-white' : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-sky-900'}`}>
                  所有課程
                </button>
              </li>
              <li className='mb-1'>
                <button onClick={() => handleProject('一對一')} className={`inline-block rounded-lg py-2 px-5 text-center text-lg font-semibold transition md:py-3 lg:px-8 ${showCard === '一對一' ? 'activeClasses bg-amber-500 text-white' : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-sky-900'}`}>
                  一對一
                </button>
              </li>
              <li className='mb-1'>
                <button onClick={() => handleProject('團體')} className={`inline-block rounded-lg py-2 px-5 text-center text-lg font-semibold transition md:py-3 lg:px-8 ${showCard === '團體' ? 'activeClasses bg-amber-500 text-white' : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-sky-900'}`}>
                  團體
                </button>
              </li>
              <li className='mb-1'>
                <button onClick={() => handleProject('安親住宿')} className={`inline-block rounded-lg py-2 px-5 text-center text-lg font-semibold transition md:py-3 lg:px-8 ${showCard === '安親住宿' ? 'activeClasses bg-amber-500 text-white' : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-sky-900'}`}>
                  安親住宿
                </button>
              </li>
              <li className='mb-1'>
                <button onClick={() => handleProject('到府照顧')} className={`inline-block rounded-lg py-2 px-5 text-center text-lg font-semibold transition md:py-3 lg:px-8 ${showCard === '到府照顧' ? 'activeClasses bg-amber-500 text-white' : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-sky-900'}`}>
                  到府照顧
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          <PortfolioCard ImageHref='https://i.ibb.co/64WfFPt/image-01.jpg' category='一對一' title='狗狗' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref='https://i.ibb.co/PT7ghRs/image-06.jpg' category='一對一' title='貓咪' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref='https://i.ibb.co/vkt8C1P/image-02.jpg' category='團體' title='狗狗' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref='https://i.ibb.co/3FKqS1G/image-03.jpg' category='安親住宿' title='狗狗' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref='https://i.ibb.co/m6dq2fX/image-04.jpg' category='到府照顧' title='狗狗' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref='https://i.ibb.co/mCPjBsH/image-05.jpg' category='到府照顧' title='貓咪' button='課程內容' buttonHref='#' showCard={showCard} />
        </div>
        <Faq />
      </div>
    </section>
  );
};

export default Serve;

const PortfolioCard = ({ showCard, category, ImageHref, title, button }) => {
  return (
    <>
      <div className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'}`}>
        <div className='relative mb-12'>
          <div className='overflow-hidden rounded-[10px]'>
            <img src={ImageHref} alt='portfolio' className='w-full' />
          </div>
          <div className='relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark'>
            <span className='text-primary mb-2 block text-lg font-bold'>{category}</span>
            <h3 className='text-dark dark:text-white mb-5 text-xl font-bold'>{title}</h3>
            <NavLink to='/four' activeClassName='active'>
              <button className='text-body-color dark:text-dark-6 hover:border-primary hover:bg-sky-900 inline-block rounded-lg border border-black dark:border-dark-3 py-[10px] px-7 text-md font-medium transition hover:text-white'>{button}</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

PortfolioCard.propTypes = {
  showCard: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  ImageHref: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  buttonHref: PropTypes.string.isRequired,
};
