"use client";
import Button from "../../components/Button";
import analytics from "../../assets/images/analytics.webp";
import search from "../../assets/images/search.webp";
import emailImage from "../../assets/images/email-image.webp";
import likeImage from "../../assets/images/like-image.webp";
import achievementImage from "../../assets/images/achievement-icon.webp";
import filterImage from "../../assets/images/filter-icon.webp";

import * as motion from "framer-motion/client";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";



const HomeV1CardSection = () => {

    const navigate = useNavigate();
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


    const headerDescRef = useRef<HTMLDivElement | null>(null);
    const descriptionRef = useRef<HTMLDivElement | null>(null);

    const [headerDescHeight, setHeaderDescHeight] = useState<number | string>(0);
    const [descriptionHeight, setDescriptionHeight] = useState<number | string>(0);

    useEffect(() => {
        const updateHeight = () => {
            if (headerDescRef.current) {
                setHeaderDescHeight(headerDescRef.current.offsetHeight);
            }
            if (descriptionRef.current) {
                setDescriptionHeight(descriptionRef.current.offsetHeight);
            }
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

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
                    <h2 className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] md:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800">Mit uns an Ihrer Seite maximieren Sie Ihre Sichtbarkeit!</h2>
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
                <div onClick={() => navigate("/sea-preise", { replace: true })} aria-label="Open sea-preise page" className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img
                            className="object-contain size-[86px] rounded-[10px]"
                            src={analytics}
                            alt="analytics"

                        />
                        <h3 style={{height:`${headerDescHeight}px`}} className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">SEA</h3>
                        <p ref={descriptionRef} className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Suchmaschinenwerbung – Effektive Kampagnen auf Google und Bing für maximale Ergebnisse.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                        <div aria-label="Open sea-preise page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate("/seo-preise", { replace: true })} aria-label="Open seo-preise page" className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img

                            className="object-contain size-[86px] rounded-[10px]"
                            src={search}
                            alt="search" />
                        <h3 style={{height:`${headerDescHeight}px`}} className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">SEO</h3>
                        <p style={{height:`${descriptionHeight}px`}} className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-primary h-[2px]"></div>
                        <div aria-label="Open seo-preise page" >
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate("/social-media-ads-preise", { replace: true })} aria-label="Open social-media-ads-preise page" className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img
                            className="object-contain size-[86px] rounded-[10px]"
                            src={likeImage}
                            alt="analytics"

                        />
                        <h3 style={{height:`${headerDescHeight}px`}} className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Social Media Ads</h3>
                        <p style={{height:`${descriptionHeight}px`}} className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Maximale Reichweite auf Plattformen wie Facebook, Instagram, TikTok und LinkedIn.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary3 h-[2px]"></div>
                        <div aria-label="Open social-media-ads-preise page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate("/email-marketing-preise", { replace: true })} aria-label="Open email-marketing-preise page" className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img
                            className="object-contain size-[86px] rounded-[10px]"
                            src={emailImage}
                            alt="system" />
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Email Marketing</h3>
                        <p style={{height:`${descriptionHeight}px`}} className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Effiziente Mailkampagnen für mehr Conversions und langfristigen Erfolg.</p>

                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary3 h-[2px]"></div>
                        <div aria-label="Open email-marketing-preise page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate("/websitefunnel-preise", { replace: true })} aria-label="Open unternehmenslistung-preis page" className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img

                            className="object-contain size-[86px] rounded-[10px]"
                            src={filterImage}
                            alt="system" />
                        <h3 style={{height:`${headerDescHeight}px`}} className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Website Funnels</h3>
                        <p style={{height:`${descriptionHeight}px`}} className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Maßgeschneiderte Funnel-Websites, perfekt auf Ihre Kampagne abgestimmt.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-primary h-[2px]"></div>
                        <div aria-label="Open websitefunnel-preise page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate("/kontakt", { replace: true })} aria-label="Open kontakt page" className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img

                            className="object-contain size-[86px] rounded-[10px]"
                            src={achievementImage}
                            alt="system" />
                        <h3 ref={headerDescRef} className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Weitere Marketinglösungen</h3>
                        <p style={{height:`${descriptionHeight}px`}} className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Unzählige weite Marketingleistungen, abgestimmt auf Ihren individuellen Bedarf.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                        <div aria-label="Open Unternehmenslistung page">
                            <Button className="tb-bold">Anfrage</Button>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default HomeV1CardSection