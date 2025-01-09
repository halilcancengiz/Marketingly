"use client";
import { lazy, Suspense, useEffect } from "react";
import contactPeopleImage from "../assets/images/homeV1-hero-section-small.webp";
import chart from "../assets/images/chart.webp";
import { Helmet } from "react-helmet"
import APP_CONFIG from '../../public/config.ts';
import logo from "../assets/images/logo.webp"
import Button from "../components/Button.tsx";
import * as motion from "framer-motion/client";
import { NavLink } from "react-router-dom";
import splitStringUsingRegex from "../utils/splitStringUsingRegex.tsx";
import { useScroll, useSpring, useTransform } from "framer-motion";
const HomeV1CardSection = lazy(() => import("../components/HomeV1/HomeV1CardSection.tsx"));
const HomeV1ThirdSection = lazy(() => import("../components/HomeV1/HomeV1ThirdSection.tsx"));
const HomeV1FourthSection = lazy(() => import("../components/HomeV1/HomeV1FourthSection.tsx"));
const HomeV1FifthSection = lazy(() => import("../components/HomeV1/HomeV1FifthSection.tsx"));
const HomeV1SixthSection = lazy(() => import("../components/HomeV1/HomeV1SixthSection.tsx"));
const HomeV1SeventhSection = lazy(() => import("../components/HomeV1/HomeV1SeventhSection.tsx"));
const HomeV1ContactFormSection = lazy(() => import("../components/HomeV1/HomeV1ContactFormSection.tsx"));

const HomeV1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
    const jumbotronBoldText = "Marketing!"
    const jumbotronTextSplit = splitStringUsingRegex(jumbotronBoldText)
    const charVariants9 = { hidden: { opacity: 0, color: "#4A3AFF" }, reveal: { opacity: 1, color: "#14142B" } };
    const fadeInAnimationVariantExample = {
        hidden: { opacity: 0, y: 20 },
        reveal: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.7,
                duration: 0.3,
                staggerChildren: 0.08,
                delayChildren: 1,
            },
        },
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
    const { scrollY }: { scrollY: any } = useScroll();
    const translateY: any = useTransform(scrollY, (value: number) => value / 20);
    const translateYReverse: any = useTransform(scrollY, (value: number) => -value / 40);

    const smoothTranslateY: any = useSpring(translateY, {
        stiffness: 100,
        damping: 20,
    });
    const smoothTranslateYReverse: any = useSpring(translateYReverse, {
        stiffness: 100,
        damping: 20,
    });


    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        const yOffset = -80;

        if (element) {
            const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };



    return (
        <main className="flex flex-col overflow-x-hidden">
            <Helmet>
                <title>Superagentur – Ihr Partner für Online-Marketing und digitalen Erfolg!</title>
                <meta property="og:title" content="Superagentur – Ihr Partner für Online-Marketing und digitalen Erfolg!" />
                <meta name="description" content="Als All-in-One-Werbeagentur steigern wir Ihre Sichtbarkeit und Erfolge auf allen Online-Kanälen – mit Search Ads, SEO, Social Media Ads & mehr." />
                <meta property="og:description" content="Als All-in-One-Werbeagentur steigern wir Ihre Sichtbarkeit und Erfolge auf allen Online-Kanälen – mit Search Ads, SEO, Social Media Ads & mehr." />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${APP_CONFIG.base_url}`} />
                <meta property="og:image" content={logo} />
                <link rel="canonical" href="https://superagentur-marketing.de" />
                <link rel="preload" as="image" href={contactPeopleImage} />
                <link rel="preload" as="image" href={chart} />
            </Helmet>


            <section className="3xl:pt-[145px] 3xl:pb-[145px] lg:pt-[116px] lg:pb-[116px] md:pt-[60px] md:pb-[93px] xs:pt-[50px] xs:pb-[74px] pt-[40px] pb-[60px] relative">
                <div className="w-full h-full xs:px-6 px-4">
                    <div className="max-w-[1173px] w-full mx-auto lg:flex-row flex-col flex lg:items-center items-start justify-between z-[3]">
                        <div className="lg:mr-10 lg:mb-0 md:mb-[80px] xs:mb-[60px] mb-[50px] flex flex-col max-w-[547px] w-full mx-auto lg:text-start xs:text-center text-start">
                            <motion.h2
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-[16px] leading-[18px] uppercase tb-medium text-primary tracking-[1.6px]">
                                Ihr Partner für digitale Werbung
                            </motion.h2>
                            <motion.h1
                                variants={fadeInAnimationVariantExample}
                                initial="hidden"
                                whileInView="reveal"
                                viewport={{ once: true }}
                                className="lg:mb-[22px] md:mb-[20px] xs:mb-[15px] mb-[10px] text-neutral-800 tb-bold lg:text-[54px] lg:leading-[61.02px] md:text-[45px] md:leading-[50.85px] xs:text-[38px] xs:leading-[42.94px] text-[32px] leading-[36.16px]"
                            >
                                Maximaler Erfolg mit&nbsp;
                                <motion.span
                                    className="inline-flex flex-wrap-nowrap"
                                    style={{ whiteSpace: 'nowrap' }}
                                >
                                    {jumbotronTextSplit.map((char, index) => (
                                        <motion.span
                                            key={index}
                                            className="tb-bold inline-block"
                                            variants={charVariants9}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            </motion.h1>
                            <motion.p
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="md:mb-12 mb-10 tb-medium text-[18px] text-neutral-600">
                                Als All-in-One-Werbeagentur sorgen wir auf allen Online-Kanälen für maximale Sichtbarkeit und messbaren Erfolg – mit Search Ads, SEO, Social Media Marketing und vielem mehr.
                            </motion.p>
                            <motion.div
                                variants={fadeInAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="flex xs:flex-row flex-col gap-6 lg:justify-start justify-center">
                                <NavLink aria-label="Open contact page" to="/kontakt" className="xs:w-auto w-full">
                                    <Button className="w-full whitespace-nowrap tb-bold" variant="primary" size="default">Kontakt</Button>
                                </NavLink>
                                <div aria-label="Scroll to next section" onClick={() => scrollToSection("unsereDienstleistungen")} className="xs:w-auto w-full">
                                    <Button className="w-full whitespace-nowrap tb-medium" variant="secondary" size="default">Mehr Details</Button>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.70, duration: 0.3 }}
                            className="lg:max-w-[565px] max-w-[660px] mx-auto w-full relative lg:ml-5">
                            <motion.img
                                style={{
                                    boxShadow: "rgba(20, 20, 43, 0.07) 0px 18px 54px 0px",
                                    y: smoothTranslateYReverse,
                                }}
                                className="border border-neutral-300 max:w-[502.844px] 3xl:w-[89%] lg:w-[87%] w-[87%]  lg:ml-auto xs:rounded-[18px] rounded-[10px]"
                                src={chart}
                                alt="chart"

                            />
                            <motion.img
                                style={{
                                    boxShadow: "rgba(20, 20, 43, 0.07) 0px 18px 54px 0px",
                                    y: smoothTranslateY, // Hareket miktarı
                                }}
                                className="absolute top-[27%] -translate-y-1/3 lg:left-0 right-0 hxl:w-[237px] lg:w-[43.627%] w-[42%] xs:rounded-[18px] rounded-[10px] border border-neutral-300"
                                src={contactPeopleImage}
                                alt="Contact People"

                            />

                        </motion.div>
                    </div>
                </div>
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="absolute lg:right-0 lg:top-0 lg:bottom-auto bottom-0 bg-primary 3xl:w-[45%] lg:w-[38%] w-full lg:h-full h-[35.719%] -z-[1]">
                    <div className="relative w-full h-full">
                        {/* 3xl+ / lg*/}
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} className="bg-secondary3 lg:visible invisible absolute right-0 top-0 aspect-square 3xl:w-[284px] lg:w-[50%] "></motion.div>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="lg:visible invisible absolute right-0 bottom-0 bg-secondary1 aspect-square 3xl:w-[50%] 3xl:h-[50%] lg:w-[50%]"></motion.div>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="lg:visible invisible absolute left-0 top-0 bg-secondary1 aspect-square 3xl:w-[50%] 3xl:h-[50%] lg:w-[50%]"></motion.div>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="lg:visible invisible absolute 3xl:-left-[11.8%] 3xl:-bottom-[21%] lg:-left-auto lg:-bottom-[27.6%] 3xl:mr-auto lg:-ml-[116px] bg-secondary2 aspect-square 3xl:w-[375px] w-[69%] rounded-full"></motion.div>
                        {/* lg / xs */}
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} className="bg-secondary3 lg:invisible xs:visible invisible absolute right-0 top-0 aspect-square w-[27%] "></motion.div>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="absolute left-0 top-0 bg-secondary1 aspect-square w-[27%] lg:invisible xs:visible invisible"></motion.div>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="absolute left-0 -bottom-[20%] aspect-square w-[38%] bg-secondary2 rounded-full lg:invisible xs:visible invisible"></motion.div>
                        {/* xs- */}
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} className="bg-secondary3 xs:invisible visible absolute right-0 top-0 aspect-square w-[27%] "></motion.div>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="absolute left-0 bottom-0 aspect-square w-[38%] bg-secondary2 rounded-full xs:invisible visible"></motion.div>

                    </div>
                </motion.div>
            </section>

            <Suspense fallback={<div>loading...</div>}>
                <HomeV1CardSection />
                <HomeV1FifthSection />
                <HomeV1SeventhSection />
                <HomeV1FourthSection />
                <HomeV1ThirdSection />
                <HomeV1SixthSection />
                <HomeV1ContactFormSection />
            </Suspense>

        </main>
    )
}

export default HomeV1