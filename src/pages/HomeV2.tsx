import Button from "../components/Button";
import analytics from "../assets/images/analytics.webp";
import search from "../assets/images/search.webp";
import system from "../assets/images/system.webp";
import services from "../assets/images/homev1-services-image.webp";
import check from "../assets/images/check.webp";
import womanImage from "../assets/images/card-woman-image.webp";
import * as motion from "framer-motion/client";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import blueCardImage from "../assets/images/blue.webp"
import yellowCardImage from "../assets/images/yellow.webp"
import redCardImage from "../assets/images/red.webp"
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"
import homeV2HeroImage from "../assets/images/homev2hero.webp"
import homeV2Chart1Image from "../assets/images/homev2chart1.webp"
import homeV2Chart2Image from "../assets/images/homev2chart2.webp"


export const HomeV2 = () => {
    const navigate = useNavigate()

    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };

    const scaleAnimationVariant = {
        initial: {
            opacity: 0,
            scale: 0.7
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { scrollY }: { scrollY: any } = useScroll();

    const firstImageTranslateY: any = useTransform(scrollY, (value: number) => value / 20);
    const firstImageTranslateYReverse: any = useTransform(scrollY, (value: number) => -value / 40);
    const jumbotronMainImage: any = useTransform(scrollY, (value: number) => -value / 40);
    const jumbotronSideImages: any = useTransform(scrollY, (value: number) => value / 20);



    const smoothFirstImageTranslateY: any = useSpring(firstImageTranslateY, {
        stiffness: 100,
        damping: 20,
    });

    const smoothFirstImageTranslateYReverse: any = useSpring(firstImageTranslateYReverse, {
        stiffness: 100,
        damping: 20,
    });

    const smoothJumbotronMainImageTranslateY: any = useSpring(jumbotronMainImage, {
        stiffness: 100,
        damping: 20,
    });

    const smoothJumbotronSideImagesTranslateY: any = useSpring(jumbotronSideImages, {
        stiffness: 100,
        damping: 20,
    });
    return (
        <main className="flex flex-col overflow-x-hidden">
            <Helmet>
                <title>Home - Maximaler Erfolg mit Google! | MARKETINGLY X</title>
                <meta name="description" content="Erreichen Sie Ihre Zielgruppe mit maßgeschneiderten Google Ads, SEO-Optimierungen und Unternehmenslistungen. Kontaktieren Sie MARKETINGLY X für maximale Reichweite." />
                <meta property="og:title" content="Home - Maximaler Erfolg mit Google! | MARKETINGLY X" />
                <meta property="og:description" content="Nutzen Sie Google Ads, SEO und Unternehmenslistungen für maximale Reichweite und Sichtbarkeit." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}`} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <section className="homeV2Container 3xl:pt-[167px] lg:pt-[134px] md:pt-[60px] xs:pt-[50px] pt-10 flex flex-col items-start px-6 3xl:h-[795px] lg:h-[735px] md:h-[657px] xs:h-[515px] h-[599px]  relative bg-secondary1 z-[1]">
                <div className="max-w-[632px] w-full mx-auto flex flex-col lg:mb-[86px] md:mb-[72px] xs:mb-[60px] mb-[50px] bg-transparent z-[3]">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.20, duration: 0.3 }}
                        className="lg:text-[54px] md:text-[45px] xs:text-[38px] text-[32px] lg:leading-[61px] md:leading-[50.85px] xs:leading-[42.94px] leading-[36.16px] tb-bold text-white text-center mb-[10px]">Maximaler Erfolg mit <br /> <span className="whitespace-nowrap tb-bold">Google!</span></motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.40, duration: 0.3 }}
                        className="leading-[30px] text-white text-center mb-10 text-[18px] tb-medium">Mit uns erreichen Sie Menschen dort wo sie suchen, auf Google - durch Ads, Seo & Unternehmenslistungen.</motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.50, duration: 0.3 }}
                        className="flex xs:flex-row flex-col items-center justify-center gap-6 pb-3.5">
                        <NavLink className="xs:w-auto w-full" to="/contact">
                            <Button className="xs:w-auto w-full tb-bold !text-primary bg-white hover:!bg-secondary3 hover:!text-white" variant="primary" size="default">Kontakt</Button>
                        </NavLink>
                        <a className="xs:w-auto w-full" href="#unsereDienstleistungen">
                            <Button className="w-full tb-medium border-white text-white hover:!bg-secondary3" variant="secondary" size="default">Mehr Infos</Button>
                        </a>

                    </motion.div>
                </div>

                {/* 3xl üstü */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="3xl:visible invisible absolute top-0 left-0 lg:w-[307px] aspect-square bg-primary z-[1]">
                    <div className="h-[50%] rounded-b-full bg-secondary2"></div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }} className="3xl:visible invisible absolute top-[300px] left-0 3xl:w-[333px] aspect-square bg-secondary4 z-[2]"></motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className='rounded-full aspect-square overflow-hidden 3xl:w-[307px] 3xl:visible invisible absolute bottom-[346px] right-0'>
                    <div className='w-full h-full relative'>
                        <div className='absolute bottom-0 right-0 bg-secondary4 z-[2] w-1/2 h-full transform text-white'></div>
                        <div className='absolute bottom-0 bg-secondary3 z-[1] w-full h-1/2  text-white'></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="3xl:visible invisible absolute bottom-0 right-0 3xl:w-[333px] aspect-square bg-primary"></motion.div>


                {/* lg 3xl arası */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="3xl:invisible visible absolute top-0 left-0 lg:w-[20.21%] aspect-square bg-primary z-[1]">
                    <div className="h-[50%] rounded-b-full bg-secondary2"></div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }} className="3xl:invisible visible absolute top-[300px] left-0 lg:w-[24%] aspect-square bg-secondary4 z-[2]"></motion.div>

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className='rounded-full aspect-square overflow-hidden lg:w-[22%] lg:visible 3xl:invisible absolute top-[15%] -right-10'>
                    <div className='w-full h-full relative'>
                        <div className='absolute bottom-0 right-0 bg-secondary4 z-[2] w-1/2 h-full transform text-white'></div>
                        <div className='absolute bottom-0 bg-secondary3 z-[1] w-full h-1/2  text-white'></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="absolute bottom-0 right-0 w-[24.001%] aspect-square bg-primary 3xl:invisible visible"></motion.div>

                {/* lg md arası */}

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }} className="lg:invisible visible absolute xs:top-[300px] xs:bottom-auto bottom-[10%] left-0 w-[24%] aspect-square bg-secondary4 z-[2]"></motion.div>

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className='rounded-full aspect-square overflow-hidden w-[22%] invisible xs:visible lg:invisible absolute top-[21%] -right-10'>
                    <div className='w-full h-full relative'>
                        <div className='absolute bottom-0 right-0 bg-secondary4 z-[2] w-1/2 h-full transform text-white'></div>
                        <div className='absolute bottom-0 bg-secondary3 z-[1] w-full h-1/2  text-white'></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="absolute bottom-0 right-0 w-[24.001%] aspect-square bg-primary lg:invisible visible"></motion.div>

            </section>

            <motion.section
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.50, duration: 0.3 }}
                className="homeV2FirstSection lg:-mt-[230px] md:-mt-[260px] xs:-mt-[130px] -mt-[120px] max-w-[1173px] w-full mx-auto relative z-[2]">
                <motion.img
                    style={{
                        y: smoothJumbotronMainImageTranslateY
                    }}
                    className="w-full"
                    src={homeV2HeroImage}
                    alt="meeting" />
                <div className="absolute top-[40%] -translate-y-[45%]  flex items-center justify-between w-full px-6">
                    <motion.img
                        style={{
                            y: smoothJumbotronSideImagesTranslateY
                        }}
                        className="max-w-[21.896%] w-full md:rounded-[19px] rounded-[10px] border border-neutral-300 shadow"
                        src={homeV2Chart1Image}
                        alt="chart" />
                    <motion.img
                        style={{
                            y: smoothJumbotronSideImagesTranslateY
                        }}
                        className="max-w-[22.9%] md:rounded-[19px] rounded-[10px] border border-neutral-300 shadow"
                        src={homeV2Chart2Image}
                        alt="chart" />
                </div>
            </motion.section>


            <section className="3xl:py-[220px] lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] px-6 flex flex-col bg-white">
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    id="unsereDienstleistungen"
                    className="flex lg:flex-row flex-col lg:items-end items-center lg:text-start text-center justify-between lg:max-w-[1173px] max-w-[660px] w-full mx-auto lg:mb-[60px] md:mb-[50px] mb-10 lg:gap-6">
                    <div className="flex flex-col max-w-[600px] w-full lg:mb-0 mb-[28px]">
                        <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-base leading-[18px] uppercase text-primary tb-medium tracking-[1.6px]">Unsere Dienstleistungen</div>
                        <div className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] md:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800">Mit uns an Ihrer Seite maximierst du deine Sichtbarkeit!</div>
                    </div>
                    <div className="flex xs:flex-row flex-col items-center justify-center gap-6 xs:w-auto w-full">
                        <NavLink to="/contact" className="xs:w-auto w-full">
                            <Button className="w-full whitespace-nowrap tb-bold" variant="primary" size="default">Kontakt</Button>
                        </NavLink>
                        <NavLink to="/services" className="xs:w-auto w-full">
                            <Button className="w-full whitespace-nowrap tb-medium" variant="secondary" size="default">Mehr Details</Button>
                        </NavLink>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[26px] max-w-[1176px] w-full mx-auto">
                    <div className="col-span-1 rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img loading="lazy" className="object-contain size-[86px] rounded-[10px]" src={analytics} alt="analytics" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Google Ads</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px]">Bezahlte Google Marketingkampagnen – für maximale Reichweite</div>
                        </div>
                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                    </div>
                    <div className="col-span-1 rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img loading="lazy" className="object-contain size-[86px] rounded-[10px]" src={search} alt="search" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Seo</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px]">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen</div>
                        </div>

                        <div className="w-[109px] bg-primary h-[2px]"></div>
                    </div>
                    <div className="col-span-1 rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img loading="lazy" className="object-contain size-[86px] rounded-[10px]" src={system} alt="system" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Unternehmenslistung</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px]">Sichbarkeit optimieren durch Google-Unternehmenslistung</div>
                        </div>

                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                    </div>
                </motion.div>
            </section>

            <section className="3xl:py-[220px] lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] px-6 bg-neutral-200">
                <div className="max-w-[1176px] w-full mx-auto flex flex-col lg:gap-y-[86px] md:gap-y-[200px] xs:gap-y-[160px] gap-y-[128px]">
                    <div className="flex lg:flex-row flex-col items-center justify-between">
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className="relative lg:mr-10 lg:order-1 order-2">
                            <img loading="lazy" style={{ boxShadow: "rgba(8, 15, 52, 0.03) 0px 4px 22px 0px" }} className="hxxl:max-w-[572px] max-w-[660px] hxxl:w-full lg:min-w-[461px] w-full md:rounded-[24px] xs:rounded-[20px] rounded-[15px] border border-neutral-300" src={services} alt="" />
                        </motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.45, duration: 0.3 }}
                            className="lg:max-w-[527px] max-w-[660px] w-full flex flex-col lg:order-2 order-1 lg:mb-0 md:mb-[80px] xs:mb-[60px] mb-[50px]">
                            <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-base leading-[18px] uppercase text-primary tb-medium tracking-[1.6px]">Performance Marketing</div>
                            <div className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] md:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800 lg:mb-5 xs:mb-[15px] mb-[10px]">Wieso Google Ads?</div>
                            <div className="md:mb-12 mb-10 tb-medium text-[18px] text-neutral-600">Mit bezahlter Werbung auf Google erscheint Ihre digitale Anzeige genau in dem Moment, in dem jemand nach Produkten, Dienstleistungen oder Karrieremöglichkeiten wie Ihren sucht.</div>
                            <div className="flex flex-col lg:mb-[60px] xs:mb-[50px] mb-10 gap-[15px]">
                                <div className="flex items-center">
                                    <div className="size-6 mr-[13px]">
                                        <img loading="lazy" className="w-full h-full rounded-full " src={check} alt="check" />
                                    </div>
                                    <div className="text-[18px] tb-bold text-neutral-800">Optimale Reichweite</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="size-6 mr-[13px]">
                                        <img loading="lazy" className="w-full h-full rounded-full " src={check} alt="check" />
                                    </div>
                                    <div className="text-[18px] tb-bold text-neutral-800">Messbare Erfolge</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="size-6 mr-[13px]">
                                        <img loading="lazy" className="w-full h-full rounded-full " src={check} alt="check" />
                                    </div>
                                    <div className="text-[18px] tb-bold text-neutral-800">Schnelle Ergebnisse</div>
                                </div>
                            </div>
                            <NavLink to="/ads-plan" className="xs:w-auto w-full">
                                <Button className="tb-bold xs:w-auto w-full">Details</Button>
                            </NavLink>
                        </motion.div>
                    </div>
                    <div className="flex lg:flex-row flex-col items-center justify-between">

                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className="lg:max-w-[527px] max-w-[660px] w-full flex flex-col lg:mb-0 md:mb-[80px] xs:mb-[60px] mb-[50px] lg:mr-10">
                            <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-base leading-[18px] uppercase text-primary tb-medium tracking-[1.6px]">Nachhaltige Reichweite</div>
                            <div className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] md:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800 lg:mb-5 xs:mb-[15px] mb-[10px]">Warum ist eine SEO Optimierung wichtig?</div>
                            <div className="md:mb-12 mb-10 tb-medium text-[18px] text-neutral-600">Durch gezielte Optimierung bringen wir Ihnen organisch mehr Reichweite durch bessere Platzierungen in Suchmaschinen. Somit ermöglicht es SEO, die Sichtbarkeit Ihrer Webseite nachhaltig zu steigern – ganz ohne zusätzliche Werbeausgaben.</div>

                            <NavLink to="/seo-plan" className="xs:w-auto w-full">
                                <Button className="tb-bold xs:w-auto w-full">Details</Button>
                            </NavLink>
                        </motion.div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.45, duration: 0.3 }}
                            className="relative">
                            <img loading="lazy" src={womanImage} alt="womanImage" style={{ boxShadow: "rgba(8, 15, 52, 0.03) 0px 4px 22px 0px" }} className="hxxl:max-w-[572px] max-w-[660px] hxxl:w-full lg:min-w-[461px] w-full md:rounded-[24px] xs:rounded-[20px] rounded-[15px] border border-neutral-300" />
                        </motion.div>
                    </div>
                </div>

            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px] bg-primary  overflow-hidden flex items-center justify-center relative">
                <div className="max-w-[1173px] w-full mx-auto flex flex-col z-[5]">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="max-w-[527px] w-full md:text-[38px] md:leading-[50px] xs:text-[32px] xs:leading-[42px] text-[26px] leading-[34.216px] tb-bold text-white md:mb-5 xs:mb-[15px] mb-[10px]">
                        Lassen Sie uns gemeinsam starten!
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="max-w-[527px] w-full leading-[30px] text-neutral-100 mb-10 text-[18px] tb-medium">
                        Kontaktieren Sie uns, um zu erfahren, wie wir Ihnen dabei helfen, Ihre Ziele zu erreichen. Lorem ipsum dolor sit amet consectetur.
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="max-w-[527px] w-full flex xs:flex-row flex-col items-center gap-6">
                        <NavLink className="xs:w-auto w-full" to="/contact">
                            <Button className="w-full whitespace-nowrap !text-primary tb-bold bg-white hover:bg-secondary3 hover:!text-white" variant="primary" size="default">Kontakt</Button>
                        </NavLink>
                        <NavLink className="xs:w-auto w-full" to="services">
                            <Button className="w-full whitespace-nowrap border-white text-white hover:bg-secondary3 tb-medium" variant="secondary" size="default">Dienstleistungen</Button>
                        </NavLink>
                    </motion.div>
                </div>

                {/* 3xl+ */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute 3xl:visible invisible right-0 top-0 aspect-square w-[334px] bg-secondary2 rounded-full"></motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    style={{ clipPath: "polygon(95% 0, 100% 0, 100% 100%, 5% 100%)" }}
                    className="absolute 3xl:visible invisible right-0 top-0 w-[398.5px] h-[358.64px] mr-[398px] bg-secondary1"></motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute 3xl:visible invisible -right-[24px] bottom-0 w-[398.5px] h-[378.02px] bg-secondary1"></motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute 3xl:visible invisible right-0 bottom-0 mr-[343px] rounded-full size-[334px]">
                    <div className="relative w-full h-full">
                        <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
                    </div>
                </motion.div>
                {/* 3xl / lg */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute 3xl:invisible lg:visible invisible right-0 top-0 aspect-square w-[22.95%] bg-secondary2 rounded-full z-[2]">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute 3xl:invisible lg:visible invisible -right-[24px] bottom-0 w-[25.5%] h-[50.0024%] bg-secondary1 z-[1]">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    style={{ clipPath: "polygon(95% 0, 100% 0, 100% 100%, 5% 100%)" }}
                    className="absolute 3xl:invisible lg:visible invisible right-0 top-0 w-[25.5%] aspect-[11/10] mr-[25.5%] bg-secondary1">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute 3xl:invisible lg:visible invisible right-[19.95%]  bottom-0 rounded-full w-[22.95%] aspect-square z-[2]">
                    <div className="relative w-full h-full">
                        <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
                    </div>
                </motion.div>

                {/* lg / md */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute lg:invisible md:visible invisible right-0 top-0 aspect-square w-[22.95%] bg-secondary2 rounded-full z-[2]">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute lg:invisible md:visible invisible -right-[24px] bottom-0 w-[25.5%] h-[50.0024%] bg-secondary1 z-[1]">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    style={{ clipPath: "polygon(96% 0, 100% 0, 100% 100%, 5% 100%)" }}
                    className="absolute lg:invisible md:visible invisible right-0 -top-[13%] w-[25.5%] aspect-[11/10] mr-[25.5%] bg-secondary1">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute lg:invisible md:visible invisible right-[12.5%]  bottom-0 rounded-full w-[22.95%] aspect-square z-[2]">
                    <div className="relative w-full h-full">
                        <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
                    </div>
                </motion.div>

                {/* md / xs */}

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute md:invisible xs:visible invisible -right-[2.5%] -top-[11%] aspect-square w-[25%] bg-secondary2 rounded-full z-[2]">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute md:invisible xs:visible invisible -right-[72px] bottom-0 w-[30%] aspect-square bg-secondary1 z-[1]">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute md:invisible xs:visible invisible right-[68px]  bottom-0 rounded-full w-[25%] aspect-square z-[2]">
                    <div className="relative w-full h-full">
                        <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
                    </div>
                </motion.div>

                {/* xs- */}

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute xs:invisible visible -right-[4%] -top-[6%] aspect-square w-[25%] bg-secondary2 rounded-full z-[2]">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute xs:invisible visible -right-0 bottom-0 w-[30%] aspect-square bg-secondary1 z-[1]">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.70, duration: 0.3 }}
                    className="absolute xs:invisible visible right-[68px]  bottom-0 rounded-full w-[25%] aspect-square z-[2]">
                    <div className="relative w-full h-full">
                        <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
                    </div>
                </motion.div>

            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-white">
                <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-center justify-between">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.50, duration: 0.3 }}
                        className="lg:mr-10 flex lg:max-w-[587px] max-w-[660px] lg:min-w-[488px] lg:max-h-[660px] max-h-[718px] lg:aspect-[11/13] aspect-[11/12] w-full relative lg:order-1 order-2 lg:my-0 my-20 ">
                        <motion.img
                            style={{
                                y: smoothFirstImageTranslateY
                            }}
                            className="absolute w-[71%] lg:left-auto left-0 lg:right-0 right-auto -top-[220px] md:rounded-[24px] xs:rounded-[20px] rounded-[15px]"
                            src="https://assets-global.website-files.com/6160c9819f1e5978b56545d6/61672bf97fa40916d9d2a267_image-1-about-v2-marketing-template-p-800.jpeg"
                            alt="woman" />
                        <motion.img
                            style={{
                                y: smoothFirstImageTranslateYReverse
                            }}
                            className="absolute w-[71.15%] lg:left-0 left-auto lg:right-auto right-0 lg:-bottom-[120px] -bottom-[280px] md:rounded-[24px] xs:rounded-[20px] rounded-[15px]"
                            src="https://assets-global.website-files.com/6160c9819f1e5978b56545d6/61672bf9a96ef17d725a04f5_image-2-about-v2-marketing-template-p-800.jpeg"
                            alt="studing" />
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.60, duration: 0.3 }}
                        className="lg:max-w-[504px] max-w-[660px] flex flex-col lg:pl-5 lg:order-2 order-1">
                        <div className="text-primary uppercase md:mb-5 xs:mb-[15px] mb-[10px] tb-medium text-base tracking-[1.6px]">Zielgruppe</div>
                        <div className="col-span-1 md:text-[38px] xs:text-[32px] text-[26px] md:leading-[50px] xs:leading-[42px] leading-[34px] tb-bold text-neutral-800 md:mb-5 xs:mb-[15px] mb-[10px]"> Wer kann von unseren Dienstleistungen profitieren?</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Egal ob Makler, Zahnarztpraxis, lokale Geschäfte oder große Industriefirmen – unsere maßgeschneiderten Lösungen passen zu jedem. Unsere Dienste sind flexibel, skalierbar und helfen Ihnen, genau die Ergebnisse zu erzielen, die Sie brauchen – ob mehr Kunden, mehr Mitarbeiter oder mehr Sichtbarkeit.</div>
                        <hr className="w-full border-neutral-400 my-10" />
                        <div className="flex items-center mb-10">
                            <div className="md:size-[68px] size-[60px] min-w-[60px] min-h-[60px] bg-neutral-600 rounded-full mr-[19px]"></div>
                            <div className="flex flex-col text-[18px] gap-1.5">
                                <div className="tb-bold text-neutral-800 leading-[20px]">
                                    Filler Name John Carter
                                </div>
                                <div className="tb-medium text-neutral-600">
                                    Filler CEO at Marketingly x
                                </div>
                            </div>
                        </div>
                        <div className="xs:w-auto w-full">
                            <NavLink className="xs:w-auto w-full" to="/services">
                                <Button className="tb-bold xs:w-auto w-full">Dienstleistungen</Button>
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-neutral-200">
                <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-center justify-between">

                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="lg:max-w-[436px] max-w-[660px] lg:mb-0 mb-20 lg:w-auto w-full min-w-[288px] flex flex-col lg:mr-10">
                        <div className="text-primary uppercase md:mb-5 xs:mb-[15px] mb-[10px] tb-medium text-base tracking-[1.6px]">Wieso MARKETINGLY X</div>
                        <div className="col-span-1 md:text-[38px] xs:text-[32px] text-[26px] leading-[34px] xs:leading-[42px] md:leading-[50px] tb-bold text-neutral-800 md:mb-5 xs:mb-[15px] mb-[10px]">Wieso Sie mit uns abreiten sollten?</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium"> Es gibt viele Agenturen – aber nur wenige stecken so viel Leidenschaft hinein wie wir.</div>
                        <NavLink to="/contact" className="mt-10 xs:w-auto w-full">
                            <Button className="tb-bold xs:w-auto w-full">Kontakt</Button>
                        </NavLink>
                    </motion.div>

                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="flex md:flex-row flex-col relative lg:max-w-[700px] max-w-[660px] w-full transition-all duraiton-500">
                        <div className="flex md:flex-row flex-col">
                            <div className="md:w-1/2 min-w-[285px] md:pr-[14px] flex flex-col items-start  space-y-[28px] z-[2]">
                                <div className="bg-white lg:py-[60px] md:py-[50px] xs:py-[42px] py-[35px] md:px-9 xs:px-[35px] px-[25px] w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                    <div className="text-neutral-800 lg:text-[58px] md:text-[48px] xs:text-[40px] text-[34px] lg:leading-[59.972px] md:leading-[49.632px] xs:leading-[41.36px] leading-[35.156px] tb-bold mb-5">100<span className="text-primary tb-bold">%</span></div>
                                    <div className="text-neutral-800 md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px]">Einsatz</div>
                                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Wir geben immer unser Bestes für Ihre Ziele.</div>
                                </div>

                                <div className="bg-white lg:py-[60px] md:py-[50px] xs:py-[42px] py-[35px] md:px-9 xs:px-[35px] px-[25px] w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                    <div className="text-neutral-800 lg:text-[58px] md:text-[48px] xs:text-[40px] text-[34px] lg:leading-[59.972px] md:leading-[49.632px] xs:leading-[41.36px] leading-[35.156px] tb-bold mb-5">3<span className="text-primary tb-bold">x</span></div>
                                    <div className="text-neutral-800 md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px]">Power</div>
                                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Alles aus einer Hand - SEO, Google Ads, Unternehmenslistungen.</div>
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-[14px] min-w-[285px] flex flex-col justify-end md:mt-16 mt-7 space-y-[28px] z-[2]">
                                <div className="bg-white lg:py-[60px] md:py-[50px] xs:py-[42px] py-[35px] md:px-9 xs:px-[35px] px-[25px] w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                    <div className="text-neutral-800 lg:text-[58px] md:text-[48px] xs:text-[40px] text-[34px] lg:leading-[59.972px] md:leading-[49.632px] xs:leading-[41.36px] leading-[35.156px] tb-bold mb-5">14 <span className="text-primary tb-bold">Tage</span></div>
                                    <div className="text-neutral-800 md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px]">Kickstart</div>
                                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Schneller Start  für schnelle Ergebnisse – in nur 14 Tagen.</div>
                                </div>
                                <div className="bg-white lg:py-[60px] md:py-[50px] xs:py-[42px] py-[35px] md:px-9 xs:px-[35px] px-[25px] w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                    <div className="text-neutral-800 lg:text-[58px] md:text-[48px] xs:text-[40px] text-[34px] lg:leading-[59.972px] md:leading-[49.632px] xs:leading-[41.36px] leading-[35.156px] tb-bold mb-5">1 <span className="text-primary tb-bold">Ziel</span></div>
                                    <div className="text-neutral-800 md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px]">Ihr Erfolg</div>
                                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Wir setzen alles daran, Sie nach vorne zu bringen.</div>
                                </div>
                            </div>
                        </div>


                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 md:max-w-[284px] max-w-[70%] w-full md:aspect-square md:h-auto h-[90%] z-[1]">
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                className="relative h-full w-full bg-[#A199FF]"></motion.div>
                        </div>
                    </motion.div>


                </div>
            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-white">
                <div className="max-w-[1173px] w-full mx-auto flex flex-col items-center ">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="flex flex-col items-center justify-center max-w-[452px] w-full mb-[60px]">
                        <div className="text-primary uppercase mb-5 tb-medium text-base tracking-[1.6px]">Unser Prozess</div>
                        <div className="text-center md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-5">Ein einfacher, aber effektiver Drei-Schritte-Prozess</div>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="flex lg:flex-row flex-col w-full gap-[26px]">
                        <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                            <div>
                                <img loading="lazy" src={blueCardImage} alt="card" />
                            </div>
                            <div className="pt-[42px] pb-[52px] px-[25px]">
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px] text-neutral-800">1. Erstkontakt</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Wir beginnen mit einem persönlichen Gespräch, um Ihre Bedürfnisse und Ziele zu verstehen.</div>

                            </div>
                        </div>
                        <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                            <div>
                                <img loading="lazy" src={yellowCardImage} alt="card" />
                            </div>
                            <div className="pt-[42px] pb-[52px] px-[25px]">
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px] text-neutral-800">2. Planung</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Wir entwickeln eine maßgeschneiderte Strategie für Ihren Erfolg.</div>

                            </div>
                        </div>
                        <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                            <div>
                                <img loading="lazy" src={redCardImage} alt="card" />
                            </div>
                            <div className="pt-[42px] pb-[52px] px-[25px]">
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px] text-neutral-800">3. Durchführung</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Unsere Experten setzen die Planung präzise und effizient um.</div>

                            </div>
                        </div>
                    </motion.div>
                    <NavLink to="/contact" className="mt-10">
                        <Button className="tb-bold">Kontakt</Button>
                    </NavLink>
                </div>
            </section>

            <section className="3xl:py-[220px] px-6 lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-neutral-200 z-10">
                <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-start  justify-between">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.30, duration: 0.3 }}
                        className="max-w-[487px] lg:mb-0 mb-20 mt-[66px] lg:w-auto w-full min-w-[288px] flex flex-col lg:mr-10 ">
                        <div className="text-primary uppercase mb-5 tb-medium text-base tracking-[1.6px]">Kontakt</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-5">Jetzt Anfragen</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-10">Lassen Sie uns gemeinsam Ihre Ziele erreichen – ob mehr Sichtbarkeit, neue Kunden oder andere Anliegen. Wir sind für Sie da und bieten Ihnen maßgeschneiderte Lösungen für Ihre Bedürfnisse.</div>
                        <div className='grid xs:grid-cols-2 gap-x-[32px] md:gap-y-0 gap-y-4 md:flex-nowrap flex-wrap'>
                            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} className='col-span-1 bg-white flex xs:flex-col flex-row gap-x-3 hover-down lg:rounded-[24px] md:rounded-[20px] rounded-[15px] md:py-[34px] sm:py-[28px] py-[24px] px-[22px]'>
                                <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                    <path opacity="0.35" d="M29.75 32H5.25C2.35025 32 0 29.6497 0 26.75V9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25V26.75C35 29.6497 32.6497 32 29.75 32Z" fill="#4A3AFF" />
                                    <path d="M13.8985 17.5888L0 9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25L21.1015 17.5888C18.8842 18.9188 16.1158 18.9188 13.8985 17.5888Z" fill="#4A3AFF" />
                                </svg>
                                <div className='flex flex-col text-white'>
                                    <div className='tb-bold text-neutral-800 text-[18px]'>Schreibe uns eine Mail! </div>
                                    <div className='text-base text-neutral-600 truncate tb-medium'>{`${import.meta.env.VITE_CONTACT_EMAIL}`}</div>
                                </div>
                            </a>
                            <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`} style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} className='col-span-1 bg-white flex xs:flex-col flex-row gap-x-3 hover-down lg:rounded-[24px] md:rounded-[20px] rounded-[15px] md:py-[34px] sm:py-[28px] py-[24px] px-[22px]'>
                                <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                    <g clipPath="url(#clip0)">
                                        <path opacity="0.35" d="M0.152786 8.03404C0.547467 10.9728 2.09241 17.7268 8.1833 23.8177C14.2742 29.9086 21.0264 31.4536 23.967 31.8483C26.0969 32.3087 28.4063 31.7238 30.0614 30.0686C32.65 27.4801 23.2736 18.1037 20.6851 20.6923L19.0335 22.3439L9.65714 12.9676L11.307 11.3159C13.8955 8.7274 4.51917 -0.648943 1.93063 1.9396C0.275457 3.59477 -0.309453 5.90419 0.152786 8.03404Z" fill="#FF6262" />
                                        <path d="M1.93652 1.93629L11.3111 11.3109C13.8943 8.72054 13.8943 4.52839 11.3058 1.93985C8.72077 -0.645134 4.52684 -0.646912 1.93652 1.93629Z" fill="#FF6262" />
                                        <path d="M20.6885 20.6902L30.063 30.0648C32.6462 27.4762 32.6462 23.2823 30.0577 20.6938C27.4709 18.1088 23.2788 18.107 20.6885 20.6902Z" fill="#FF6262" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="35" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='flex flex-col text-white'>
                                    <div className='tb-bold text-neutral-800 text-[18px]'>Ruf uns an</div>
                                    <div className='text-base text-neutral-600 tb-medium'>{`${import.meta.env.VITE_CONTACT_PHONE}`}</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.80, duration: 0.3 }}
                        style={{ boxShadow: '0px 2px 11px 0px rgba(31, 37, 89, 0.08)' }}
                        className="lg:max-w-[600px] max-w-[660px] mx-auto lg:min-w-[542px] border border-neutral-300 w-full lg:py-[70px] lg:px-[55px] md:px-[46px] px-[35px] md:py-[58px] sm:[48px] py-[40px] rounded-[24px] relative bg-white"
                    >
                        <form onSubmit={() => navigate("/thank-you-page")} className="grid grid-cols-2 gap-[30px] bg-white">
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="firstname" className="xs:text-[18px] text-base tb-bold">Vorname</label>
                                <input id="firstname" name="firstname" required placeholder="Max" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="lastname" className="xs:text-[18px] text-base tb-bold">Name</label>
                                <input id="lastname" name="lastname" required placeholder="Mustermann" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="email" className="xs:text-[18px] text-base tb-bold">E-Mail</label>
                                <input id="email" name="email" required placeholder="name@domain.de" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="email" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="phonenumber" className="xs:text-[18px] text-base tb-bold">Telefonnummer<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="phonenumber" placeholder="0123 4567890" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="number" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="companyname" className="xs:text-[18px] text-base tb-bold">Firma<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="companyname" name="companyname" placeholder="Mustermann GmbH" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="street" className="xs:text-[18px] text-base tb-bold">Straße, Nr.<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="street" name="street" placeholder="Musterstraße 1" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="zipcode" className="xs:text-[18px] text-base tb-bold">PLZ<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="zipcode" name="zipcode" placeholder="12345" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="number" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="location" className="xs:text-[18px] text-base tb-bold">Ort<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="location" name="location" placeholder="Musterstadt" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>

                            <div className="col-span-2 flex flex-col gap-3">
                                <label htmlFor="message" className="xs:text-[18px] text-base tb-bold">Nachricht<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <textarea id="message" name="message" placeholder="Nachricht" className="bplaceholder placeholder:text-neutral-600 text-neutral-800 focus:outline-none border rounded-[10px] py-[17px] h-28 px-5 xs:text-[18px] text-base resize-none hover:border-primary focus:border-primary transition-colors duration-300"></textarea>
                            </div>

                            <div className="col-span-2 flex items-start gap-3">
                                <div>
                                    <input id="termandconditions" required className="size-6 mt-1 border-none outline-none ring-0 !accent-primary" type="checkbox" />
                                </div>
                                <label htmlFor="termandconditions" className="xs:text-[18px] text-base text-neutral-600 flex-wrap tb-medium">Mit dem Absenden des Formulars akzeptieren Sie die <NavLink to="/datenschutz" className="text-primary cursor-pointer tb-medium">Datenschutzerkärung</NavLink></label>
                            </div>
                            <div className="col-span-2">
                                <Button aria-label="Submit form" type="submit" className="tb-bold md:w-auto w-full">Absenden</Button>
                            </div>
                        </form>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 0.3 }}
                            style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }} className="absolute -left-[36px] -top-[49px] size-[205px] z-[-1] bg-secondary2">
                        </motion.div>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="absolute -right-[81px] -bottom-[67px] size-[208px] z-[-1] bg-primary">
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </main>
    )
}