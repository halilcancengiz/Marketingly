import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import shapes from "../assets/images/thankspage.webp";
import check from "../assets/images/thankcheck.webp";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
import APP_CONFIG from '../../public/config.ts';
import logo from "../assets/images/logo.webp"

const Thankyou = () => {


    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    }


    useEffect(() => {
        const checkImage = document.getElementById("checkImage");
        const shapeImage = document.getElementById("shapeImage");

        const handleMouseMove = (event: any) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;
            const xOffset = ((clientX / innerWidth) * 20) - 10;
            const yOffset = ((clientY / innerHeight) * 20) - 10;
            if (checkImage) {
                checkImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            }
            if (shapeImage) {
                shapeImage.style.transform = `translate(${-xOffset / 3}px, ${-yOffset / 3}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='3xl:pt-[95px] lg:pt-[76px] md:pt-[60px] xs:pt-[50px] pt-10 3xl:pb-[220px] lg:pb-[176px] md:pb-[140px] xs:pb-[113px] pb-[90px] bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden'>
            <Helmet>
                <title>Vielen Dank für Ihre Anfrage!</title>
                <meta name="description" content="Ihre Anfrage wurde erfolgreich übermittelt. Erfahren Sie, wie es weitergeht, und lassen Sie uns gemeinsam an Ihrer Vision arbeiten." />
                <meta name="keywords" content="Danke-Seite, Anfrage bestätigt, nächster Schritt" />
                <meta property="og:title" content="Vielen Dank für Ihre Anfrage!" />
                <meta property="og:description" content="Wir haben Ihre Anfrage erhalten und melden uns in Kürze mit den nächsten Schritten." />

                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${APP_CONFIG.base_url}danke-seite`} />
                <meta property="og:image" content={logo} />
                <link rel="canonical" href={`${APP_CONFIG.base_url}danke-seite`} />
                <meta charSet="UTF-8" />
                <html lang="de" />
                {/* Structured Data for Logo */}
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Superagentur Marketing",
        "url": "${APP_CONFIG.base_url}",
        "logo": "${APP_CONFIG.base_url}assets/images/logo.webp",
        "sameAs": [
          "${APP_CONFIG.social_media.facebook}",
          "${APP_CONFIG.social_media.instagram}",
          "${APP_CONFIG.social_media.linkedin}"
        ]
      }
    `}
                </script>
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
                className="max-w-[540px] aspect-[5/3.9] w-full mx-auto lg:mb-[86px] md:mb-[72px] xs:mb-[60px] mb-[50px] relative flex items-center justify-center">
                {/* Shape Image Container */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <img loading="lazy" id="shapeImage" src={shapes} alt="shapes" className="w-full h-full object-cover" />
                </div>
                {/* Check Image Container */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <img loading="lazy" id="checkImage" className="z-[2] max-w-[320px] object-cover" src={check} alt="check" />
                </div>
            </motion.div>
            <div className="flex flex-col items-center justify-center max-w-[640px] w-full">
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="3xl:text-[58px] lg:text-[48px] text-[41px] text-center lg:leading-[59px] md:leading-[49px] leading-[41px] tb-bold mb-5 text-neutral-800">
                    Danke!
                </motion.div>
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.30, duration: 0.3 }}
                    className="leading-[30px] text-neutral-600 text-[18px] text-center tb-medium">
                    Vielen Dank für Ihre Nachricht. Unser Team wird sich so schnell wie möglich bei Ihnen melden.
                </motion.div>
            </div>

            <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-10"
            >
                <NavLink aria-label="Back to home page" to="/">
                    <Button className="tb-bold">Zurück</Button>
                </NavLink>
            </motion.div>
        </div>
    );
};

export default Thankyou;
