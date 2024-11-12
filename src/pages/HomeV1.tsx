import Button from "../components/Button";
import contactPeopleImage from "../assets/images/homeV1-hero-section-small.png";
import chart from "../assets/images/chart.png";
import analytics from "../assets/images/analytics.png";
import search from "../assets/images/search.png";
import system from "../assets/images/system.png";
import services from "../assets/images/homev1-services-image.png";
import check from "../assets/images/check.png";
import womanImage from "../assets/images/card-woman-image.jpeg";
import * as motion from "framer-motion/client";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import blueCardImage from "../assets/images/blue.png"
import yellowCardImage from "../assets/images/yellow.png"
import redCardImage from "../assets/images/red.png"
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"


export const HomeV1 = () => {
    const navigate = useNavigate()
    // firstSectionAnimations
    const fSectionParagraphArea = useRef<HTMLDivElement | null>(null)
    const isInViewFSectionParagraphArea = useInView(fSectionParagraphArea, { margin: "300px", once: true });

    useEffect(() => {
        // Sayfa yüklendiğinde kaydırmayı en üste al
        window.scrollTo(0, 0);
    }, []);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.05
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    // secondSectionAnimations

    // thirdSectionAnimations
    const homeV1FirstImageRef = useRef<HTMLDivElement | null>(null)
    const homeV1FirstParagraph = useRef<HTMLDivElement | null>(null)
    const homeV1SecondImageRef = useRef<HTMLDivElement | null>(null)
    const homeV1SecondParagraph = useRef<HTMLDivElement | null>(null)
    const isInViewHomeV1FirstImageRef = useInView(homeV1FirstImageRef, { margin: "-200px", once: true });
    const isInViewHomeV1FirstParagraph = useInView(homeV1FirstParagraph, { margin: "-300px", once: true });
    const isInViewHomeV1SecondImageRef = useInView(homeV1SecondImageRef, { margin: "-0px", once: true });
    const isInViewHomeV1SecondParagraph = useInView(homeV1SecondParagraph, { margin: "-0px", once: true });
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
            <section className="3xl:py-[145px] lg:py-[116px] py-[60px] flex items-center px-6 justify-center h-full relative ">
                <div className="max-w-[1173px] h-full w-full mx-auto  grid lg:grid-cols-2 grid-cols-1 items-center justify-center lg:gap-8 gap-20 relative ">
                    <motion.div
                        ref={fSectionParagraphArea}
                        initial="hidden"
                        animate={`${isInViewFSectionParagraphArea ? "visible" : ""}`}
                        variants={container} className="col-span-1 lg:max-w-auto max-w-[460px] lg:mx-0 mx-auto lg:text-start text-center flex flex-col lg:mr-10">
                        <motion.div variants={item} className="text-primary uppercase mb-5 font-medium text-base tracking-[1.6px]">Marketing Agentur</motion.div>
                        <motion.div variants={item} className="lg:text-[54px] text-[45px] lg:leading-[61px] leading-[50.85px] font-bold mb-5 text-neutral-800">Maximaler Erfolg mit Google!</motion.div>
                        <motion.div variants={item} className="leading-[30px] text-neutral-600 mb-12 text-[18px] font-medium">Mit uns erreichen Sie Menschen dort wo sie suchen, auf Google - durch Ads, Seo & Unternehmenslistungen.</motion.div>
                        <motion.div variants={item} className="flex items-center gap-7">
                            <NavLink to="contact">
                                <Button className="w-full font-bold" variant="primary" size="default">Kontakt</Button>
                            </NavLink>
                            <a href="#unsereDienstleistungen">
                                <Button className="w-full font-medium" variant="secondary" size="default">Mehr Infos</Button>
                            </a>

                        </motion.div>
                    </motion.div>
                    {/* lg images */}
                    <div className="col-span-1 lg:flex hidden justify-end  relative lg:pl-[62px]">
                        <img src={chart} className="homev1-hero-section-shadow rounded-[18px] w-full border-[1px] border-neutral-300" alt="chart" />
                        <div className="absolute w-full top-1/2 -translate-y-1/2 flex pr-[333px]">
                            <img src={contactPeopleImage} className="homev1-hero-section-shadow rounded-[18px] min-w-[180px] object-contain" alt="humans" />
                        </div>
                    </div>
                    {/* mobile images */}
                    <div className="lg:hidden flex max-w-[660px] w-full mx-auto relative pr-20">
                        <img src={chart} className="homev1-hero-section-shadow rounded-[18px] max-w-[500px] w-full border-[1px] border-neutral-300" alt="chart" />
                        <div className="absolute w-full top-1/2 -translate-y-1/2 flex right-0 pl-60 justify-end">
                            <img src={contactPeopleImage} className="homev1-hero-section-shadow rounded-[18px] min-w-[180px] max-w-[277px] object-contain" alt="humans" />
                        </div>
                    </div>
                </div>
                <div className="absolute lg:visible invisible lg:right-0 bg-primary 3xl:w-[45%] w-[38%] h-full -z-[1] overflow-y-clip">
                    <div className="grid grid-cols-2 h-full relative">
                        <div className="col-span-2 grid grid-cols-2">
                            <div className="col-span-1 bg-secondary1"></div>
                            <div style={{ clipPath: "polygon(100% 0, 0 0, 100% 72%)" }} className="col-span-1 bg-secondary3"></div>
                        </div>

                        <div className="col-span-2 grid grid-cols-2 ">
                            <div className="col-span-1 invisible"></div>
                            <div className="bg-secondary1 col-span-1"></div>
                        </div>

                        <div className="bg-secondary2 absolute -left-[70px] rounded-full -bottom-40 w-[60%] aspect-square"></div>
                    </div>
                </div>
                <div className="absolute lg:invisible visible bottom-0 lg:right-0 bg-primary w-full md:h-[427px] h-[346px] -z-[1] overflow-y-clip">
                    <div className="grid grid-cols-2 h-full relative">
                        <div className="col-span-2 grid grid-cols-2">
                            <div className="col-span-1 bg-secondary1"></div>
                            <div className="col-span-1 flex items-start justify-end">
                                <div style={{ clipPath: "polygon(100% 0, 45% 0, 100% 100%)" }} className=" w-[90%] h-1/2 aspect-square  bg-secondary3"></div>

                            </div>
                        </div>

                        <div className="col-span-2 grid grid-cols-2 invisible">
                            <div className="col-span-1 invisible"></div>
                            <div className="bg-secondary1 col-span-1"></div>
                        </div>

                        <div className="bg-secondary2 absolute left-0 rounded-full -bottom-20 w-[40%] aspect-square"></div>
                    </div>
                </div>
            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px]  flex flex-col bg-white">
                <div id="unsereDienstleistungen" className="flex flex-col max-w-[1173px] w-full mx-auto">
                    <div className="text-primary uppercase mb-5 font-medium text-base lg:text-start text-center tracking-[1.6px]">Unsere Dienstleistungen</div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-end mb-[60px] lg:text-start text-center">
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] font-bold text-neutral-800 lg:mb-0 mb-7">Mit uns an deiner Seite maximierst du deine Sichtbarkeit!</div>
                        <div className="col-span-1">
                            <div className="flex items-center gap-7">
                                <NavLink to="/contact" className="w-full">
                                    <Button className="w-full whitespace-nowrap font-bold" variant="primary" size="default">Kontakt</Button>
                                </NavLink>
                                <NavLink to="/services" className="w-full">
                                    <Button className="w-full whitespace-nowrap font-medium" variant="secondary" size="default">Mehr Details</Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap-6 flex items-start justify-center flex-wrap">
                    <div className="card rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={analytics} alt="analytics" />
                            <div className="md:text-[24px] text-[22px] font-bold">Google Ads</div>
                            <div className="text-neutral-600 text-[18px] font-medium leading-[30px]">Bezahlte Google Marketingkampagnen – für maximale Reichweite</div>
                        </div>
                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                    </div>
                    <div className="card rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={search} alt="search" />
                            <div className="md:text-[24px] text-[22px] font-bold">Seo</div>
                            <div className="text-neutral-600 text-[18px] font-medium leading-[30px]">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen</div>
                        </div>

                        <div className="w-[109px] bg-primary h-[2px]"></div>
                    </div>
                    <div className="card rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={system} alt="system" />
                            <div className="md:text-[24px] text-[22px] font-bold">Unternehmenslistung</div>
                            <div className="text-neutral-600 text-[18px] font-medium leading-[30px]">Sichbarkeit optimieren durch Google-Unternehmenslistung</div>
                        </div>

                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                    </div>
                </div>
            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px]  bg-neutral-200">
                <div className="flex flex-col max-w-[1173px] w-full mx-auto ">
                    <div className="flex lg:flex-row flex-col w-full items-center mb-[86px]">
                        <motion.div
                            ref={homeV1FirstImageRef}
                            initial={{ opacity: 0, y: 5 }}
                            animate={isInViewHomeV1FirstImageRef ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.3, ease: "easeIn" }}
                            className="lg:max-w-[574px] max-w-[660px] lg:min-w-[480px] hxl:mr-20 lg:mr-10 mr-0 w-full lg:order-1 order-2 transition-all duration-300 relative">
                            <img className="homev1-services-shadow border-[1px] rounded-[24px] border-neutral-300 z-[10]" src={services} alt="services" />
                            <div className="absolute bg-[#F9F5E5] max-w-[248px] w-full aspect-square rounded-full lg:-left-20 lg:right-auto -right-20 lg:-top-20 -top-16 z-[-1]"></div>
                        </motion.div>
                        <motion.div
                            ref={homeV1FirstParagraph}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInViewHomeV1FirstParagraph ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.3, ease: "easeIn" }}
                            className="flex flex-col lg:order-2 order-1 w-full mx-auto lg:max-w-auto max-w-[660px] lg:mb-0 mb-20">
                            <div className="text-primary uppercase mb-5 font-medium text-base tracking-[1.6px]">Performance Marketing</div>

                            <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] font-bold text-neutral-800 mb-5">Wieso Google Ads?</div>

                            <div className="leading-[30px] text-neutral-600 mb-10 text-[18px] font-medium">
                                Mit bezahlter Werbung auf Google erscheint Ihre digitale Anzeige genau in dem Moment, in dem jemand nach Produkten, Dienstleistungen oder Karrieremöglichkeiten wie Ihren sucht.
                            </div>

                            <div className="flex flex-col gap-[15px] lg:mb-[60px] md:mb-[50px] mb-10">
                                <div className="flex items-center gap-[13px]">
                                    <img className="size-6 rounded-full" src={check} alt="check" />
                                    <div className="leading-[20px] text-neutral-800 text-[18px] font-bold">Optimale Reichweite</div>
                                </div>
                                <div className="flex items-center gap-[13px]">
                                    <img className="size-6 rounded-full" src={check} alt="check" />
                                    <div className="leading-[20px] text-neutral-800 text-[18px] font-bold">Messbare Erfolge</div>
                                </div>
                                <div className="flex items-center gap-[13px]">
                                    <img className="size-6 rounded-full" src={check} alt="check" />
                                    <div className="leading-[20px] text-neutral-800 text-[18px] font-bold">Schnelle Ergebnisse</div>
                                </div>
                            </div>
                            <NavLink to="/ads-plan">
                                <Button className="font-bold">Details</Button>
                            </NavLink>
                        </motion.div>
                    </div>

                    <div className="flex lg:flex-row flex-col w-full items-center gap-y-[80px]">

                        <motion.div
                            ref={homeV1SecondImageRef}
                            initial={{ opacity: 0, y: 5 }}
                            animate={isInViewHomeV1SecondImageRef ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.3, ease: "easeIn" }}
                            className="flex flex-col order-2 w-full mx-auto lg:max-w-auto max-w-[660px] lg:mb-0 mb-20">
                            <img className="homev1-services-shadow border-[1px] rounded-[24px] border-neutral-300 z-[10]" src={womanImage} alt="woman" />
                        </motion.div>

                        <motion.div
                            ref={homeV1SecondParagraph}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInViewHomeV1SecondParagraph ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.3, ease: "easeIn" }}
                            className="lg:max-w-[574px] max-w-[660px] lg:min-w-[480px] pr-10 w-full order-1 transition-all duration-300 relative">
                            <div className="text-primary uppercase mb-5 font-medium text-base tracking-[1.6px]">Nachhaltige Reichweite</div>

                            <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] font-bold text-neutral-800 mb-5">Warum ist eine SEO Optimierung wichtig?</div>

                            <div className="leading-[30px] text-neutral-600 mb-10 text-[18px] font-medium">
                                Durch gezielte Optimierung bringen wir Ihnen organisch mehr Reichweite durch bessere Platzierungen in Suchmaschinen.
                                Somit ermöglicht es SEO, die Sichtbarkeit Ihrer Webseite nachhaltig zu steigern – ganz ohne zusätzliche Werbeausgaben.
                            </div>

                            <NavLink to="/seo-plan">
                                <Button className="font-bold">Details</Button>
                            </NavLink>
                        </motion.div>

                    </div>
                </div>

            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px] bg-primary  overflow-hidden flex items-center justify-center relative">
                <div className="max-w-[1173px] w-full mx-auto flex flex-col gap-5 z-[5]">
                    <div className="max-w-[527px] w-full md:text-[38px] md:leading-[50px] text-[32px] leading-[42px] font-bold text-white">
                        Lassen Sie uns gemeinsam starten!
                    </div>
                    <div className="max-w-[527px] w-full leading-[30px] text-neutral-100 mb-5 text-[18px] font-medium">
                        Kontaktieren Sie uns, um zu erfahren, wie wir Ihnen dabei helfen, Ihre Ziele zu erreichen.
                    </div>
                    <div className="max-w-[527px] w-full flex xs:flex-row flex-col items-center gap-7">
                        <NavLink className="w-full" to="/contact">
                            <Button className="w-full whitespace-nowrap !text-primary font-bold bg-white hover:bg-secondary3 hover:!text-white" variant="primary" size="default">Kontakt</Button>
                        </NavLink>
                        <NavLink className="w-full" to="services">
                            <Button className="w-full whitespace-nowrap border-white text-white hover:bg-secondary3 font-medium" variant="secondary" size="default">Dienstleistungen</Button>
                        </NavLink>
                    </div>
                </div>
                <div className="absolute right-0 w-full h-full z-[4]">
                    <div className="relative w-full h-full">

                        <div className="absolute lg:right-0 -right-10 lg:top-0 -top-10 bg-secondary2 w-[26.55%] max-w-[348px] z-[2] aspect-square rounded-full"></div>

                        <div className="absolute right-0 bottom-0 bg-secondary1 z-[1] w-[21.91%] aspect-[100/95.3]"></div>

                        <div style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className="absolute md:visible invisible right-0 -top-5 bg-secondary1 z-[1] w-[26%] max-w-[397px] xl:mr-[27%] lg:mr-[28%] md:mr-[25%] mr-[20%] aspect-square"></div>

                        <div className="absolute right-0 bottom-0 bg-transparent z-[3] w-[18%] aspect-square mr-[18%]">
                            <div className="relative w-full h-full">
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-secondary3 rounded-b-full"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-white">
                <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-center justify-between">
                    <div className="lg:mr-10 flex lg:max-w-[587px] max-w-[660px] lg:min-w-[488px] w-full relative lg:order-1 order-2 lg:my-0 my-20">
                        <img src="https://assets-global.website-files.com/6160c9819f1e5978b56545d6/61672bf97fa40916d9d2a267_image-1-about-v2-marketing-template-p-800.jpeg" className="block max-w-[71%] lg:ml-auto w-full rounded-[24px] homev1-card-shadow" alt="woman" />
                        <img style={{ overflowClipMargin: "content-box", overflowX: "clip", overflowY: "clip", verticalAlign: "middle" }} src="https://assets-global.website-files.com/6160c9819f1e5978b56545d6/61672bf9a96ef17d725a04f5_image-2-about-v2-marketing-template-p-800.jpeg" className="max-w-[70%] w-full absolute -bottom-20 lg:left-0 right-0 rounded-[24px]" alt="humans" />
                    </div>
                    <div className="lg:max-w-[504px] max-w-[660px] flex flex-col pl-5 lg:order-2 order-1">
                        <div className="text-primary uppercase mb-5 font-medium text-base tracking-[1.6px]">Zielgruppe</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] font-bold text-neutral-800 mb-5"> Wer kann von unseren Dienstleistungen profitieren?</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] font-medium">Egal ob Makler, Zahnarztpraxis, lokale Geschäfte oder große Industriefirmen – unsere maßgeschneiderten Lösungen passen zu jedem. Unsere Dienste sind flexibel, skalierbar und helfen Ihnen, genau die Ergebnisse zu erzielen, die Sie brauchen – ob mehr Kunden, mehr Mitarbeiter oder mehr Sichtbarkeit.</div>
                        <hr className="w-full border-neutral-400 my-10" />
                        <div className="flex items-center mb-10">
                            <div className="size-[68px] bg-neutral-600 rounded-full mr-[19px]"></div>
                            <div className="flex flex-col text-[18px] gap-1.5">
                                <div className="font-bold text-neutral-800 leading-[20px]">
                                    Filler Name John Carter
                                </div>
                                <div className="font-medium text-neutral-600">
                                    Filler CEO at Marketingly x
                                </div>
                            </div>
                        </div>
                        <div>
                            <NavLink to="/services">
                                <Button className="font-bold">Dienstleistungen</Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-neutral-200">
                <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-center justify-between">

                    <div className="lg:max-w-[436px] max-w-[660px] lg:mb-0 mb-20 lg:w-auto w-full min-w-[288px] flex flex-col lg:mr-10">
                        <div className="text-primary uppercase mb-5 font-medium text-base tracking-[1.6px]">Wieso MARKETINGLY X</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] font-bold text-neutral-800 mb-5">Wieso Sie mit uns abreiten sollten?</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] font-medium"> Es gibt viele Agenturen – aber nur wenige stecken so viel Leidenschaft hinein wie wir.</div>
                        <NavLink to="/contact" className="mt-10">
                            <Button className="font-bold">Kontakt</Button>
                        </NavLink>
                    </div>

                    <div className="flex md:flex-row flex-col relative lg:max-w-[700px] max-w-[660px] w-full transition-all duraiton-500">
                        <div className="md:w-1/2 min-w-[285px] md:pr-[14px] flex flex-col items-start  space-y-[28px] z-[2]">
                            <div className="bg-white py-[60px] px-9 w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                <div className="lg:text-[58px] md:text-[48px] text-[41px] lg:leading-[59px] md:leading-[49px] leading-[41px] font-bold mb-5">100<span className="text-primary font-bold">%</span></div>
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] font-bold mb-[10px]">Einsatz</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] font-medium">Wir geben immer unser Bestes für Ihre Ziele.</div>
                            </div>

                            <div className="bg-white py-[60px] px-9 w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                <div className="lg:text-[58px] md:text-[48px] text-[41px] lg:leading-[59px] md:leading-[49px] leading-[41px] font-bold mb-5">3<span className="text-primary font-bold">x</span></div>
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] font-bold mb-[10px]">Power</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] font-medium">Alles aus einer Hand - SEO, Google Ads, Unternehmenslistungen.</div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-[14px] min-w-[285px] flex flex-col justify-end md:mt-16 mt-7 space-y-[28px] z-[2]">
                            <div className="bg-white py-[60px] px-9 w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                <div className="lg:text-[58px] md:text-[48px] text-[41px] lg:leading-[59px] md:leading-[49px] leading-[41px] font-bold mb-5">14 <span className="text-primary font-bold">Tage</span></div>
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] font-bold mb-[10px]">Kickstart</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] font-medium">Schneller Start  für schnelle Ergebnisse – in nur 14 Tagen.</div>
                            </div>
                            <div className="bg-white py-[60px] px-9 w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                <div className="lg:text-[58px] md:text-[48px] text-[41px] lg:leading-[59px] md:leading-[49px] leading-[41px] font-bold mb-5">1 <span className="text-primary font-bold">Ziel</span></div>
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] font-bold mb-[10px]">Ihr Erfolg</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] font-medium">Wir setzen alles daran, Sie nach vorne zu bringen.</div>
                            </div>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 md:max-w-[284px] max-w-[70%] w-full md:aspect-square md:h-auto h-[90%] bg-[#A199FF] z-[1]"></div>
                    </div>


                </div>
            </section>

            <section className="3xl:py-[220px] lg:py-[176px] px-6 md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-white">
                <div className="max-w-[1173px] w-full mx-auto flex flex-col items-center ">
                    <div className="flex flex-col items-center justify-center max-w-[452px] w-full mb-[60px]">
                        <div className="text-primary uppercase mb-5 font-medium text-base tracking-[1.6px]">Unser Prozess</div>
                        <div className="text-center md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] font-bold text-neutral-800 mb-5">Ein einfacher, aber effektiver Drei-Schritte-Prozess</div>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full gap-[26px]">
                        <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                            <div>
                                <img src={blueCardImage} alt="card" />
                            </div>
                            <div className="pt-[42px] pb-[52px] px-[25px]">
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] font-bold mb-[10px] text-neutral-800">1. Erstkontakt</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] font-medium">Wir beginnen mit einem persönlichen Gespräch, um Ihre Bedürfnisse und Ziele zu verstehen.</div>

                            </div>
                        </div>
                        <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                            <div>
                                <img src={yellowCardImage} alt="card" />
                            </div>
                            <div className="pt-[42px] pb-[52px] px-[25px]">
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] font-bold mb-[10px] text-neutral-800">2. Planung</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] font-medium">Wir entwickeln eine maßgeschneiderte Strategie für Ihren Erfolg.</div>

                            </div>
                        </div>
                        <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                            <div>
                                <img src={redCardImage} alt="card" />
                            </div>
                            <div className="pt-[42px] pb-[52px] px-[25px]">
                                <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] font-bold mb-[10px] text-neutral-800">3. Durchführung</div>
                                <div className="leading-[30px] text-neutral-600 text-[18px] font-medium">Unsere Experten setzen die Planung präzise und effizient um.</div>

                            </div>
                        </div>
                    </div>
                    <NavLink to="/contact" className="mt-10">
                        <Button className="font-bold">Kontakt</Button>
                    </NavLink>
                </div>
            </section>

            <section className="3xl:py-[220px] px-6 lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-neutral-200">
                <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col lg:items-start  justify-between">
                    <div className="max-w-[487px] lg:mb-0 mb-20 mt-[66px] lg:w-auto w-full min-w-[288px] flex flex-col lg:mr-10 ">
                        <div className="text-primary uppercase mb-5 font-medium text-base tracking-[1.6px]">Kontakt</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] font-bold text-neutral-800 mb-5">Jetzt Anfragen</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] font-medium mb-10">Lassen Sie uns gemeinsam Ihre Ziele erreichen – ob mehr Sichtbarkeit, neue Kunden oder andere Anliegen. Wir sind für Sie da und bieten Ihnen maßgeschneiderte Lösungen für Ihre Bedürfnisse.</div>
                        <div className='grid xs:grid-cols-2 gap-x-[32px] md:gap-y-0 gap-y-4 md:flex-nowrap flex-wrap'>
                            <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} className='col-span-1 bg-white flex xs:flex-col flex-row gap-x-3 hover-down lg:rounded-[24px] md:rounded-[20px] rounded-[15px] md:py-[34px] sm:py-[28px] py-[24px] px-[22px]'>
                                <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                    <path opacity="0.35" d="M29.75 32H5.25C2.35025 32 0 29.6497 0 26.75V9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25V26.75C35 29.6497 32.6497 32 29.75 32Z" fill="#4A3AFF" />
                                    <path d="M13.8985 17.5888L0 9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25L21.1015 17.5888C18.8842 18.9188 16.1158 18.9188 13.8985 17.5888Z" fill="#4A3AFF" />
                                </svg>
                                <div className='flex flex-col text-white'>
                                    <div className='font-bold text-neutral-800 text-[18px]'>Schreibe uns eine Mail! </div>
                                    <div className='text-base text-neutral-600 truncate font-medium'>contact@marketingly.com</div>
                                </div>
                            </div>
                            <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} className='col-span-1 bg-white flex xs:flex-col flex-row gap-x-3 hover-down lg:rounded-[24px] md:rounded-[20px] rounded-[15px] md:py-[34px] sm:py-[28px] py-[24px] px-[22px]'>
                                <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                    <g clip-path="url(#clip0)">
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
                                    <div className='font-bold text-neutral-800 text-[18px]'>Ruf uns an</div>
                                    <div className='text-base text-neutral-600 font-medium'>(414) 809 - 2567</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[600px] lg:min-w-[542px] border border-gray-200/60 w-full lg:py-[70px] lg:px-[55px] md:px-[46px] px-[35px] md:py-[58px] sm:[48px] py-[40px] section-6-shadow rounded-[24px] bg-white z-[2]">
                        <form onSubmit={() => navigate("/thank-you-page")} className="grid grid-cols-2 gap-[30px]">
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="text-[18px] font-bold">E-Mail</div>
                                <input required placeholder="name@domain.de" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none text-[18px] font-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="text-[18px] font-bold">Telefonnummer</div>
                                <input placeholder="0123 4567890" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none text-[18px] font-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="text-[18px] font-bold">Firma</div>
                                <input placeholder="Mustermann GmbH" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none text-[18px] font-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="text-[18px] font-bold">Straße, Nr.</div>
                                <input placeholder="Musterstraße 1" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none text-[18px] font-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="text-[18px] font-bold">PLZ</div>
                                <input placeholder="12345" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none text-[18px] font-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="text-[18px] font-bold">Ort</div>
                                <input placeholder="Musterstadt" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none text-[18px] font-medium" type="text" />
                            </div>

                            <div className="col-span-2 flex flex-col gap-3">
                                <div className="text-[18px] font-bold">Nachricht</div>
                                <textarea placeholder="Nachricht" className="focus:outline-none border rounded-[10px] py-[17px] h-28 px-5 text-[18px] resize-none hover:border-primary focus:border-primary transition-colors duration-300" name="" id=""></textarea>
                            </div>

                            <div className="col-span-2 flex items-start gap-3">
                                <label>
                                    <input required className="size-6 mt-1 border-none outline-none ring-0 !accent-primary" type="checkbox" />
                                </label>
                                <div className="text-[18px] text-neutral-600 flex-wrap font-medium">Mit dem Absenden des Formulars akzeptieren Sie die <NavLink to="/datenschutz" className="text-primary cursor-pointer font-medium">Datenschutzerkärung</NavLink></div>
                            </div>
                            <div className="col-span-2">
                                <Button type="submit" className="md:w-auto w-full font-bold">Abenden</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="absolute lg:visible invisible right-0 h-full bg-primary 2xl:w-[45%] lg:w-[32%] z-[1]">
                    <div className="w-full h-full relative">
                        <div className="absolute lg:w-[65%] w-full aspect-square rounded-full right-0 max-w-[318px] bg-secondary2"></div>
                        <div style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} className="absolute lg:w-[57%] w-full aspect-square right-0 bottom-0 max-w-[290px] bg-secondary3"></div>
                        <div className="absolute lg:w-[57%] w-full aspect-square right-[87%] bottom-0 max-w-[290px] bg-secondary1"></div>
                    </div>
                </div>
                <div className="absolute lg:invisible visible bottom-0 bg-primary 2xl:w-[45%] lg:w-[32%] w-full lg:h-full h-1/2 z-[1]">
                    <div className="w-full h-full relative">
                        <div className="absolute md:w-[65%] w-[40%] aspect-square rounded-full left-0 bottom-0 max-w-[318px]  bg-secondary2"></div>
                        <div style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} className="absolute lg:w-[57%] w-full aspect-square right-0 bottom-0 max-w-[290px] bg-secondary3"></div>
                        <div className="absolute lg:w-[57%] md: w-full aspect-square left-0 top-0 max-w-[290px] bg-secondary1"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}