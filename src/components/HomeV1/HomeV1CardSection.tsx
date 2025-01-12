"use client";
import Button from "../../components/Button";
import analytics from "../../assets/images/analytics.webp";
import search from "../../assets/images/search.webp";
import emailImage from "../../assets/images/email-image.webp";
import likeImage from "../../assets/images/like-image.webp";
import achievementImage from "../../assets/images/achievement-icon.webp";
import filterImage from "../../assets/images/filter-icon.webp";

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
        <section className="3xl:py-[220px] lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] xs:px-6 px-4 flex flex-col bg-neutral-200">
            <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                id="unsereDienstleistungen"
                className="flex lg:flex-row flex-col lg:items-end items-center lg:text-start text-center justify-between lg:max-w-[1173px] max-w-[660px] w-full mx-auto lg:mb-[60px] md:mb-[50px] mb-10 lg:gap-6">
                <div className="flex flex-col max-w-[600px] w-full lg:mb-0 mb-[28px]">
                    <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-[16px] leading-[18px] uppercase tb-medium text-primary tracking-[1.6px]">Unsere Dienstleistungen</div>
                    <h2 className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] xs:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800">Mit uns an Ihrer Seite maximieren Sie Ihre Sichtbarkeit!</h2>
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
                <div aria-label="Open sea-preise page" className="col-span-1 rounded-[18px] group hover-up-md lg:py-16 md:py-[44px] py-[38px] xs:px-[26px] px-[25px] flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300 h-full">
                    <div className="flex items-center justify-center">
                        <img
                            className="object-contain size-[86px] rounded-[10px] mb-6"
                            src={analytics}
                            alt="analytics"
                        />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary mb-[10px]">SEA</h3>
                        <p className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Suchmaschinenwerbung – Effektive Kampagnen auf Google und Bing für maximale Ergebnisse.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[109px] bg-secondary2 h-[2px] md:my-[34px] my-[30px]"></div>
                        <NavLink to="/sea-preise" aria-label="Open sea-preise page">
                            <Button className="tb-bold">Pläne</Button>
                        </NavLink>
                    </div>
                </div>

                <div aria-label="Open seo-preise page" className="col-span-1 rounded-[18px] group hover-up-md lg:py-16 md:py-[44px] py-[38px] xs:px-[26px] px-[25px] flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300 h-full">
                    <div className="flex items-center justify-center">
                        <img
                            className="object-contain size-[86px] rounded-[10px] mb-6"
                            src={search}
                            alt="search" />

                    </div>
                    <div className="flex flex-1 flex-col">
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary mb-[10px]">SEO</h3>
                        <p className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[109px] bg-primary h-[2px] md:my-[34px] my-[30px]"></div>
                        <NavLink to="/seo-preise" aria-label="Open seo-preise page" >
                            <Button className="tb-bold">Pläne</Button>
                        </NavLink>
                    </div>
                </div>

                <div aria-label="Open social-media-ads-preise page" className="col-span-1 rounded-[18px] group hover-up-md lg:py-16 md:py-[44px] py-[38px] xs:px-[26px] px-[25px] flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300 h-full">
                    <div className="flex items-center justify-center">
                        <img
                            className="object-contain size-[86px] rounded-[10px] mb-6"
                            src={likeImage}
                            alt="analytics"
                        />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary mb-[10px]">Social Media Ads</h3>
                        <p className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Maximale Reichweite auf Plattformen wie Facebook, Instagram, TikTok und LinkedIn.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[109px] bg-secondary3 h-[2px] md:my-[34px] my-[30px]"></div>
                        <NavLink to="/social-media-ads-preise" aria-label="Open social-media-ads-preise page">
                            <Button className="tb-bold">Pläne</Button>
                        </NavLink>
                    </div>
                </div>

                <div aria-label="Open email-marketing-preise page" className="col-span-1 rounded-[18px] group hover-up-md lg:py-16 md:py-[44px] py-[38px] xs:px-[26px] px-[25px] flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300 h-full">
                    <div className="flex items-center justify-center">
                        <img
                            className="object-contain size-[86px] rounded-[10px] mb-6"
                            src={emailImage}
                            alt="system" />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary mb-[10px]">E-mail Marketing</h3>
                        <p className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Effiziente E-Mail-Kampagnen für mehr Conversions und langfristigen Erfolg.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[109px] bg-secondary3 h-[2px] md:my-[34px] my-[30px]"></div>
                        <NavLink to="/email-marketing-preise" aria-label="Open email-marketing-preise page">
                            <Button className="tb-bold">Pläne</Button>
                        </NavLink>
                    </div>
                </div>

                <div aria-label="Open unternehmenslistung-preis page" className="col-span-1 rounded-[18px] group hover-up-md lg:py-16 md:py-[44px] py-[38px] xs:px-[26px] px-[25px] flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300 h-full">
                    <div className="flex items-center justify-center">
                        <img
                            className="object-contain size-[86px] rounded-[10px] mb-6"
                            src={filterImage}
                            alt="system" />
                    </div>

                    <div className="flex flex-1 flex-col">
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary mb-[10px]">Website Funnels</h3>
                        <p className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Maßgeschneiderte Funnel-Websites, perfekt auf Ihre Kampagne abgestimmt.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[109px] bg-primary h-[2px] md:my-[34px] my-[30px]"></div>
                        <NavLink to="/websitefunnel-preise" aria-label="Open websitefunnel-preise page">
                            <Button className="tb-bold">Pläne</Button>
                        </NavLink>
                    </div>
                </div>

                <div aria-label="Open kontakt page" className="col-span-1 rounded-[18px] group hover-up-md lg:py-16 md:py-[44px] py-[38px] xs:px-[26px] px-[25px] flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300 h-full">
                    <div className="flex items-center justify-center">
                        <img
                            className="object-contain size-[86px] rounded-[10px] mb-6"
                            src={achievementImage}
                            alt="system" />
                    </div>

                    <div className="flex flex-1 flex-col">
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary mb-[10px]">Weitere Marketinglösungen</h3>
                        <p className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Von Mikro-Influencer-Kampagnen bis hin zu maßgeschneidertem Content-Marketing und vielem mehr.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[109px] bg-secondary2 h-[2px] md:my-[34px] my-[30px]"></div>
                        <NavLink to="/kontakt" aria-label="Open Unternehmenslistung page">
                            <Button className="tb-bold">Kontakt</Button>
                        </NavLink>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default HomeV1CardSection