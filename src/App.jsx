import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//引入組件
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
//引入分頁
import About from './pages/About';
import Know from './pages/Know';
import Limited from './pages/Limited';
import Serve from './pages/Serve';
import Member from './pages/Member';
import Contact from './pages/Contact';
//引入置頂效果
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/know' element={<Know />} />
          <Route path='/limited' element={<Limited />} />
          <Route path='/serve' element={<Serve />} />
          <Route path='/member' element={<Member />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
