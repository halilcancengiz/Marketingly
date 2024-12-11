import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';

const Layout = () => {
  const location = useLocation();
  const [contentVisible, setContentVisible] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [previousWidth, setPreviousWidth] = useState(window.innerWidth);
  const [previousPathname, setPreviousPathname] = useState(location.pathname);
  const [initialLoad, setInitialLoad] = useState(true);

  const breakpoints = [480, 768, 992];

  const startAnimation = () => {
    setContentVisible(false);
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => {
      setContentVisible(true);
    }, 500); // Animasyon süresiyle uyumlu şekilde ayarlandı
  };

  // Sayfa yüklendiğinde animasyonu başlat
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      startAnimation();
    }
  }, [initialLoad]);

  // URL değiştiğinde animasyonu başlat
  useEffect(() => {
    if (location.pathname !== previousPathname) {
      startAnimation();
      setPreviousPathname(location.pathname);
    }
  }, [location.pathname, previousPathname]);

  // Breakpoint değişimlerinde animasyonu başlat
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      const isCrossingBreakpoint = breakpoints.some(
        (bp) =>
          (previousWidth < bp && currentWidth >= bp) ||
          (previousWidth >= bp && currentWidth < bp)
      );

      if (isCrossingBreakpoint) {
        startAnimation();
      }

      setPreviousWidth(currentWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [previousWidth, breakpoints]);

  return (
    <div className="flex flex-col relative">
      <motion.div
        key={`fadeIn-${animationKey}`}
        className="h-[4px] bg-primary absolute top-0 left-0"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ zIndex: 10 }}
        onAnimationComplete={() => {
          const element = document.querySelector('.bg-primary') as HTMLDivElement;
          if (element) {
            element.style.opacity = '0';
          }
        }}
      />

      {contentVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <AppRoutes />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Layout;