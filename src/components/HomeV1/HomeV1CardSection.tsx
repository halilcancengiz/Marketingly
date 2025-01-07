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
import { useEffect } from "react";



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


    useEffect(() => {
        const updateHeightsFirstCardSection = () => {
            const firstParagraphs = Array.from(document.getElementsByClassName("card-description")) as HTMLParagraphElement[]

            if (window.innerWidth >= 992) {
                // 994px ve üzeri: İlk paragrafın yüksekliğini diğerlerine uygula
                if (firstParagraphs.length > 0) {
                    const firstHeight = firstParagraphs[0].clientHeight
                    firstParagraphs.forEach(paragraph => {
                        paragraph.style.height = `${firstHeight}px`
                    })
                }
            } else {
                // 993px ve altı: Her paragrafın yüksekliğini kaldır
                firstParagraphs.forEach(paragraph => {
                    paragraph.style.height = "auto"
                })
            }
        }

        const updateHeightsSecondCardSection = () => {
            const secondParagraphs = Array.from(document.getElementsByClassName("second-card-description")) as HTMLParagraphElement[]

            if (window.innerWidth >= 992) {
                // 994px ve üzeri: İlk paragrafın yüksekliğini diğerlerine uygula
                if (secondParagraphs.length > 0) {
                    const firstHeight = secondParagraphs[2].clientHeight
                    secondParagraphs.forEach(paragraph => {
                        paragraph.style.height = `${firstHeight}px`
                    })
                }
            } else {
                // 993px ve altı: Her paragrafın yüksekliğini kaldır
                secondParagraphs.forEach(paragraph => {
                    paragraph.style.height = "auto"
                })
            }
        }
        const updateHeightsSecondCardHeader = () => {
            const headers = Array.from(document.getElementsByClassName("card-header")) as HTMLDivElement[];

            if (window.innerWidth >= 992) {
                // 992px ve üzeri: İlk 3 elemanı hariç tut ve en yüksek height değerini uygula
                if (headers.length > 3) {
                    const filteredHeaders = headers.slice(3); // İlk 3 elemanı hariç tut
                    const maxHeight = Math.max(...filteredHeaders.map(h => h.clientHeight));
                    filteredHeaders.forEach(h => {
                        h.style.height = `${maxHeight}px`;
                    });
                }
            } else {
                // 991px ve altı: Her paragrafın yüksekliğini kaldır
                headers.forEach(h => {
                    h.style.height = "auto";
                });
            }
        };


        // İlk yükleme sırasında yükseklik ayarla
        updateHeightsFirstCardSection()
        updateHeightsSecondCardSection()
        updateHeightsSecondCardHeader()

        // Pencere yeniden boyutlandırıldığında yükseklikleri güncelle
        window.addEventListener("resize", updateHeightsFirstCardSection)
        window.addEventListener("resize", updateHeightsSecondCardSection)
        window.addEventListener("resize", updateHeightsSecondCardHeader)

        return () => {
            // Etkinlik dinleyicisini kaldır
            window.removeEventListener("resize", updateHeightsFirstCardSection)
            window.removeEventListener("resize", updateHeightsSecondCardSection)
            window.removeEventListener("resize", updateHeightsSecondCardHeader)
        }
    }, [])

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
                    <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-base leading-[18px] uppercase text-primary tb-medium tracking-[1.6px]">Unsere Dienstleistungen</div>
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
                <div onClick={() => navigate("/google-ads-plan", { replace: true })} aria-label="Open Google Ads Plan page" className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img
                            className="object-contain size-[86px] rounded-[10px]"
                            src={analytics}
                            alt="analytics"

                        />
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">SEA</h3>
                        <p className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Suchmaschinenwerbung – Effektive Kampagnen auf Google und Bing für maximale Ergebnisse.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                        <NavLink to="/google-ads-plan" aria-label="Open seo plan page">
                            <Button className="tb-bold">Pläne</Button>
                        </NavLink>
                    </div>
                </div>

                <div aria-label="Open Seo Plan page" onClick={() => navigate("/seo-plan", { replace: true })} className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img

                            className="object-contain size-[86px] rounded-[10px]"
                            src={search}
                            alt="search" />
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">SEO</h3>
                        <p className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-primary h-[2px]"></div>
                        <div aria-label="Open seo plan page" >
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div aria-label="Open Google Ads Plan page" onClick={() => navigate("/google-ads-plan", { replace: true })} className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img
                            className="object-contain size-[86px] rounded-[10px]"
                            src={likeImage}
                            alt="analytics"

                        />
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Social Media Ads</h3>
                        <p className="card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Maximale Reichweite auf Plattformen wie , Facebook, Instagram, TikTok und LinkedIn.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary3 h-[2px]"></div>
                        <div aria-label="Open seo plan page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div aria-label="Open unternehmenslistung plan page" onClick={() => navigate("/google-ads-plan", { replace: true })}  className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img
                            className="object-contain size-[86px] rounded-[10px]"
                            src={emailImage}
                            alt="system" />
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Email Marketing</h3>
                        <p className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Effiziente Mailkampagnen für mehr Conversions und langfristigen Erfolg.</p>

                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-secondary3 h-[2px]"></div>
                        <div aria-label="Open Unternehmenslistung page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div aria-label="Open unternehmenslistung plan page" onClick={() => navigate("/unternehmenslistung-plan", { replace: true })} className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex min-h-[410px] flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img

                            className="object-contain size-[86px] rounded-[10px]"
                            src={filterImage}
                            alt="system" />
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Website Funnels</h3>
                        <p className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Maßgeschneiderte Funnel-Websites, perfekt auf Ihre Kampagne abgestimmt.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                        <div className="w-[109px] bg-primary h-[2px]"></div>
                        <div aria-label="Open Unternehmenslistung page">
                            <Button className="tb-bold">Pläne</Button>
                        </div>
                    </div>
                </div>

                <div aria-label="Open unternehmenslistung plan page"  onClick={() => navigate("/kontakt", { replace: true })} className="cursor-pointer col-span-1 rounded-[18px] group hover-up-md py-16 px-6 flex flex-col items-center text-center homev1-card-shadow border-[1px] border-neutral-300">
                    <div className="flex items-center flex-col gap-6">
                        <img

                            className="object-contain size-[86px] rounded-[10px]"
                            src={achievementImage}
                            alt="system" />
                        <h3 className="card-header md:text-[24px] text-[22px] tb-bold group-hover:text-primary">Weitere Marketinglösungen</h3>
                        <p className="second-card-description text-neutral-600 text-[18px] tb-medium leading-[30px]">Von Content-Marketing bis hin zu Google Unternehmenslistungen und vielem mehr.</p>
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