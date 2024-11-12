import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppRoutes } from './routes/AppRoutes';

const Layout = () => {
  const location = useLocation();
  const [contentVisible, setContentVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [previousWidth, setPreviousWidth] = useState(window.innerWidth);
  const [previousPathname, setPreviousPathname] = useState(location.pathname);

  const breakpoints = [480, 768, 992];

  const startAnimation = () => {
    setAnimationStarted(false);
    setContentVisible(false);

    setTimeout(() => {
      setAnimationStarted(true);
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

      // Önceki genişlik ile şimdiki genişlik arasında breakpoint geçişi var mı kontrol et
      const isPreviousCrossingBreakpoint = breakpoints.some(bp =>
        (previousWidth < bp && currentWidth >= bp) ||
        (previousWidth >= bp && currentWidth < bp)
      );

      // Eğer bir breakpoint'i geçtiyse animasyonu başlat
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
          className="h-[4px] bg-secondary4 absolute top-0 left-0"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.03 }}
          style={{ zIndex: 10 }}
          onAnimationComplete={() => setContentVisible(true)}
        />
      )}

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
