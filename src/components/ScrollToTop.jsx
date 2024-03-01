import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 每次路由變化時滚動到頁面頂部
  }, [pathname]);

  return null;
};

export default ScrollToTop;
