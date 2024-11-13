import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';

const Layout = () => {
  const location = useLocation();
  const [contentVisible, setContentVisible] = useState(true); // Varsayılan olarak true ayarlandı
  const [animationStarted, setAnimationStarted] = useState(false);
  const [previousWidth, setPreviousWidth] = useState(window.innerWidth);
  const [previousPathname, setPreviousPathname] = useState(location.pathname);
  const [animationKey, setAnimationKey] = useState(0);

  const breakpoints = [480, 768, 992];

  const startAnimation = () => {
    setAnimationStarted(false);
    setContentVisible(false);

    setTimeout(() => {
      setAnimationStarted(true);
      setAnimationKey((prev) => prev + 1);
    }, 100);
  };

  // Sayfa yüklendiğinde animasyonu başlat
  useEffect(() => {
    const handleLoad = () => {
      startAnimation();
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // URL değiştiğinde animasyonu başlat, sayfa içi yönlendirmeleri hariç tut
  useEffect(() => {
    if (location.pathname !== previousPathname) {
      startAnimation();
      setPreviousPathname(location.pathname);
    }
  }, [location.pathname, previousPathname]);

  // Breakpoint kontrolü ve animasyon tetikleme
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      const isPreviousCrossingBreakpoint = breakpoints.some(
        (bp) =>
          (previousWidth < bp && currentWidth >= bp) ||
          (previousWidth >= bp && currentWidth < bp)
      );

      if (isPreviousCrossingBreakpoint) {
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
      {animationStarted && !contentVisible && (
        <motion.div
          key={`fadeOut-${animationKey}`}
          className="h-[4px] bg-primary absolute top-0 left-0"
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: 0.001, delay: 0.5 }}
          style={{ zIndex: 10 }}
          onAnimationStart={() => setTimeout(() => setContentVisible(true), 1000)}
        />
      )}

      <motion.div
        key={`fadeIn-${animationKey}`}
        className="h-[4px] bg-primary absolute top-0 left-0"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
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
          transition={{ duration: 0.7 }}
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
