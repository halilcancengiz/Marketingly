"use client";
import Button from "../../components/Button";
import analytics from "../../assets/images/analytics.webp";
import search from "../../assets/images/search.webp";
import system from "../../assets/images/system.webp";
import * as motion from "framer-motion/client";
import { NavLink } from "react-router-dom";



const HomeV1CardSection = () => {


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

    return (
        <section className="3xl:py-[220px] lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] xs:px-6 px-4 flex flex-col bg-white">
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
                    <h2 className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] md:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800">Mit uns an Ihrer Seite maximierst du deine Sichtbarkeit!</h2>
                </div>
                <div className="flex xs:flex-row flex-col items-center justify-center gap-6 xs:w-auto w-full">
                    <NavLink aria-label="Open contact page" to="/kontakt" className="xs:w-auto w-full">
                        <Button className="w-full whitespace-nowrap tb-bold" variant="primary" size="default">Kontakt</Button>
                    </NavLink>
                    <NavLink aria-label="Open services page" to="/dienstleistungen" className="xs:w-auto w-full">
                        <Button className="w-full whitespace-nowrap tb-medium" variant="secondary" size="default">Dienstleistungen</Button>
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
                <NavLink aria-label="Open Google Ads Plan page" to="/google-ads-plan" className="col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img
                            className="object-contain size-[86px] rounded-[10px]"
                            src={analytics}
                            alt="analytics"

                        />
                        <h3 className="md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Google Ads</h3>
                        <p className="text-neutral-600 text-[18px] tb-medium leading-[30px]">Bezahlte Google-Marketingkampagnen – für maximale Reichweite.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                        <div aria-label="Open seo plan page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </NavLink>
                <NavLink aria-label="Open Seo Plan page" to="/seo-plan" className="col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img

                            className="object-contain size-[86px] rounded-[10px]"
                            src={search}
                            alt="search" />
                        <h3 className="md:text-[24px] text-[22px] tb-bold group-hover:text-primary">SEO</h3>
                        <p className="text-neutral-600 text-[18px] tb-medium leading-[30px]">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-primary h-[2px]"></div>
                        <div aria-label="Open seo plan page" >
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </NavLink>
                <NavLink aria-label="Open unternehmenslistung plan page" to="/unternehmenslistung-plan" className="col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img

                            className="object-contain size-[86px] rounded-[10px]"
                            src={system}
                            alt="system" />
                        <h3 className="md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Unternehmenslistung</h3>
                        <p className="text-neutral-600 text-[18px] tb-medium leading-[30px]">Sichtbarkeit optimieren durch Google-Unternehmenslistung.</p>
                        <div className="md:flex hidden"></div>

                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                        <div aria-label="Open Unternehmenslistung page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </NavLink>
            </motion.div>
        </section>
    )
}

export default HomeV1CardSection