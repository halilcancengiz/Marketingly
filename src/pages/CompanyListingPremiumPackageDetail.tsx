import circlesImage from "../assets/images/circles.webp"
// import check from "../assets/images/check.webp";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
import APP_CONFIG from '../../public/config.ts';
import logo from "../assets/images/logo.webp"
const CompanyListingPremiumPackageDetail = () => {
    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 15
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };

    const scaleAnimationVariant = {
        initial: {
            opacity: 0,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };

    const scaleLargeAnimationVariant = {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };

    const scaleMediumAnimationVariant = {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };
    return (
        <section className="3xl:pt-[95px] lg:pt-[75px] md:pt-[60px] xs:pt-[50px] pt-[40px] 3xl:pb-[136px] lg:pb-[110px] md:pb-[88px] xs:pb-[70px] pb-[60px] px-6 flex items-center justify-center relative">
            <Helmet>
                <title>Unternehmenslistung Premium-Paket – Maximale lokale Präsenz</title>
                <meta name="description" content="Mit unserem Premium-Paket für Unternehmenslistungen /Google MyBusiness-Listungen, steigern Sie Ihre Sichtbarkeit in Verzeichnissen." />
                <meta name="keywords" content="Unternehmenslistung, Premium-Paket, lokale Präsenz, Verzeichnisse, Google My Business, Sichtbarkeit erhöhen" />
                <meta property="og:title" content="Unternehmenslistung Premium-Paket – Maximale lokale Präsenz" />
                <meta property="og:description" content="Erhöhen Sie Ihre lokale und regionale Sichtbarkeit mit unserem umfassenden Premium-Service für Unternehmenslistungen / Google My Business." />

                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${APP_CONFIG.base_url}unternehmenslistung-premium-paket-detail`} />
                <meta property="og:image" content={logo} />
                <link rel="canonical" href={`${APP_CONFIG.base_url}unternehmenslistung-premium-paket-detail`} />
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
            <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col lg:items-start items-center justify-between z-[2]">
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.2 }}
                    className="lg:mr-10 lg:mb-0 md:mb-[70px] mb-[60px] flex flex-col lg:max-w-[621.69px] max-w-[660px] lg:min-w-[491px] w-full">
                    <div className="size-[90px] border border-neutral-300 md:mb-8 xs:mb-[28px] mb-[25px] rounded-[25px] flex items-center justify-center overflow-hidden">
                        <img loading="lazy" src={circlesImage} alt="circle" />
                    </div>
                    <div className="whitespace-nowrap text-neutral-800 tb-bold lg:text-[54px] md:text-[45px] xs:text-[38px] text-[32px] lg:leading-[61px] md:leading-[50px] xs:leading-[42px] leading-[36px] mb-[15px]">
                        Premium-Paket
                    </div>
                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-[28px]">
                        Das Premium-Paket ist speziell für Unternehmen konzipiert, die ihre Sichtbarkeit steigern und einen professionellen Auftritt auf Google sicherstellen möchten. Mit unserer umfassenden Unternehmenslistung wird Ihr Unternehmen optimal auffindbar und hinterlässt einen überzeugenden ersten Eindruck.
                    </div>
                    {/* <div className="flex flex-col gap-[15px] mb-10">
                        <div className="lg:text-[24px] xs:text-[22px] text-[20px] tb-bold mb-[10px] text-neutral-800">Leistungen:</div>

                        <div className="flex items-start gap-[13px]">
                            <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Erstellung eines professionellen Google-Unternehmenseintrags</div>
                        </div>
                        <div className="flex items-start gap-[13px]">
                            <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Einrichtung und Verifizierung Ihres Unternehmenskontos</div>
                        </div>
                        <div className="flex items-start gap-[13px]">
                            <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Ausarbeitung einer ansprechenden und zielgerichteten Unternehmensbeschreibung</div>
                        </div>
                        <div className="flex items-start gap-[13px]">
                            <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Hinzufügen von Logo, Bildern und Kontaktdaten</div>
                        </div>
                        <div className="flex items-start gap-[13px]">
                            <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Optimierung des Eintrags für lokale Suchergebnisse</div>
                        </div>
                    </div> */}
                    <ul className="pl-10 mb-5 list-disc">
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Erstellung eines professionellen Google-Unternehmenseintrags</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Einrichtung und Verifizierung Ihres Unternehmenskontos</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Ausarbeitung einer ansprechenden und zielgerichteten Unternehmensbeschreibung</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Hinzufügen von Logo, Bildern und Kontaktdaten</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Optimierung des Eintrags für lokale Suchergebnisse</li>
                    </ul>
                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-[28px]">
                        Mit diesem Paket gewährleisten wir nicht nur Ihre Sichtbarkeit, sondern auch eine perfekte Präsentation Ihres Unternehmens. Unser persönlicher Ansatz stellt sicher, dass Ihr Google-Eintrag alle relevanten Informationen enthält und langfristig von einem optimierten Online-Auftritt profitiert.
                    </div>
                    <div className="lg:text-[24px] xs:text-[22px] text-[20px] tb-bold text-neutral-800">Ihre Vorteile:</div>

                    <ul className="pl-10 lg:mt-8 lg:mb-10 md:mt-[26px] xs:mb-[33px] mb-[28px] list-disc">
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Stärkung Ihrer lokalen Präsenz</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Erhöhte Auffindbarkeit in Google-Suchen und Maps</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Professionelle Darstellung Ihrer Dienstleistungen</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Maximale Effizienz durch Expertenwissen</li>
                    </ul>

                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-[28px]">
                        Setzen Sie neue Standards für Ihre Google-Präsenz und profitieren Sie von unserer Expertise, um Ihre Marke optimal zu positionieren.
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.2 }}
                    style={{ boxShadow: '0px 8px 44px 0px rgba(8, 15, 52, 0.03)' }}
                    className="bg-white md:px-[45px] xs:px-[35px] px-[25px] lg:py-[65px] md:py-[60px] xs:py-[50px] py-[42px] lg:max-w-[503px] max-w-[660px] lg:min-w-[395.79px] w-full border border-neutral-300 rounded-[20px] sticky top-3">
                    <div className="flex flex-col">
                        <div className="lg:text-[24px] xs:text-[22px] text-[20px] tb-bold mb-[10px] text-neutral-800">Kontaktieren Sie uns noch heute!</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">
                            Wir helfen Ihnen, Ihre Marketingziele zu erreichen. Erfahren Sie mehr über Ihre Möglichkeiten und lassen Sie uns gemeinsam wachsen.
                        </div>
                        <div className="flex flex-col my-5">
                            <div className="tb-bold text-neutral-800 md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">{APP_CONFIG.prices.company_listing.premium} €</div>
                            <div className="tb-medium text-neutral-600">einmalig (zzgl. Mwst.)</div>
                        </div>
                        <NavLink aria-label="Open contact page" to="/kontakt">
                            <Button className="w-full tb-bold" variant="primary" size="default">Kontakt</Button>
                        </NavLink>
                    </div>
                </motion.div>
            </div>
            <motion.div
                variants={scaleAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.4 }}
                className="absolute lg:visible invisible right-0 top-0 bg-secondary1 lg:w-[37%] lg:h-[537px] z-[1]">
                <motion.div
                    variants={scaleMediumAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="w-full relative">
                    <div className="absolute left-0 top-0 bg-primary lg:w-[290px] aspect-square">
                        <div className="absolute top-0 left-0 w-full h-[43%] bg-secondary3 rounded-b-full"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleLargeAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="absolute top-[65.2%] right-0 w-[346px] bg-secondary2 rounded-full aspect-square z-[2]">
                </motion.div>
                <motion.div
                    variants={scaleLargeAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
                    className="absolute top-[502px] right-0 w-[346px] bg-secondary4 aspect-square">
                </motion.div>
            </motion.div>

            <motion.div
                variants={scaleAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.4 }}
                className="absolute lg:invisible visible right-0 bottom-0 bg-secondary1 w-full md:h-[25%] h-[23%] z-[1]">
                <div className="w-full h-full relative ">
                    <motion.div
                        variants={scaleLargeAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                        className="absolute left-0 top-0 bg-primary md:w-[290px] w-[35%] aspect-square overflow-hidden">
                        <div className="absolute md:top-0  top-[-5%] md:left-0 left-[-5%]  w-full md:h-[43%] h-full bg-secondary3 md:rounded-b-full md:rounded-none rounded-full"></div>
                    </motion.div>
                    <motion.div
                        variants={scaleLargeAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                        className="absolute md:top-0 top-10 right-0 md:w-[300px] w-[35%] bg-secondary2 rounded-full aspect-square z-[2]">
                    </motion.div>
                    <motion.div
                        variants={scaleLargeAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
                        className="absolute bg-secondary4 bottom-0 right-0 md:w-[300px] w-[45%] aspect-square z-[1]">
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default CompanyListingPremiumPackageDetail