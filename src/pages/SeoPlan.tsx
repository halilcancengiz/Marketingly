import circlesImage from "../assets/images/circles.webp"
import trianglesImage from "../assets/images/triangles.webp"
import squaresImage from "../assets/images/squares.webp"
import check from "../assets/images/check.webp";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

const SeoPlan = () => {
    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };

    const scaleAnimationVariant = {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };

    const headerDescRef = useRef<HTMLDivElement | null>(null);
    const priceRef = useRef<HTMLDivElement | null>(null);
    const checkListRef = useRef<HTMLDivElement | null>(null);
    const [headerDescHeight, setHeaderDescHeight] = useState<number>(0);
    const [priceHeight, setPriceHeight] = useState<number>(0);
    const [checkListHeight, setCheckListHeight] = useState<number>(0);

    useEffect(() => {
        // Function to update the height
        const updateHeight = () => {
            if (headerDescRef.current) {
                setHeaderDescHeight(headerDescRef.current.offsetHeight);
            }
            if (priceRef.current) {
                setPriceHeight(priceRef.current.offsetHeight);
            }
            if (checkListRef.current) {
                setCheckListHeight(checkListRef.current.offsetHeight);
            }
        };

        // Initial height calculation
        updateHeight();

        // Update height on window resize
        window.addEventListener("resize", updateHeight);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);
    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Ads Plan - Flexible Lösungen für jeden Bedarf | MARKETINGLY X</title>
                <meta name="description" content="Entdecken Sie unsere Ads-Preismodelle, die flexible Lösungen für Social Media Marketing, bezahlte Werbung und SEO bieten. MARKETINGLY X unterstützt Sie bei jedem Schritt." />
                <meta property="og:title" content="Ads Plan - Flexible Lösungen für jeden Bedarf | MARKETINGLY X" />
                <meta property="og:description" content="Flexible Ads-Pläne für Social Media Marketing, bezahlte Werbung und SEO. Finden Sie den idealen Plan, der zu Ihrem Budget und Ihren Zielen passt!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}ads-plan`} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div className="bg-secondary4 3xl:h-[642px] lg:h-[560px] md:h-[475px] h-[401px]  3xl:pt-[126px] lg:pt-[100px] md:pt-[60px] xs:pt-[50px] pt-[40px] 3xl:pb-[281px] lg:pb-[225px] md:pb-[200px] pb-[160px] relative overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center text-white max-w-[481px] px-6 w-full mx-auto">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                        className="md:mb-5 xs:mb-[15px] mb-[10px] tb-medium text-base leading-[18px] uppercase">Unsere Pläne</motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.30, duration: 0.3 }}
                        className="mb-[15px] lg:text-[54px] md:text-[45px] xs:text-[38px] text-[32px] tb-bold lg:leading-[61.02px] md:leading-[50.85px] xs:leading-[42.94px] leading-[36.16px] ">
                        Pläne für jeden Bedarf
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.35, duration: 0.3 }}
                        className="tb-medium text-[18px] leading-[30.006px]">Unsere Preismodelle bieten flexible Lösungen für jedes Budget und jeden Bedarf.</motion.div>
                </div>

                {/* shapes start */}
                {/* 3xl / lg */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute left-0 top-0 size-[208px] z-[2] lg:visible invisible">
                    <div className="relative w-full h-full bg-secondary1 ">
                        <div className="absolute top-0 right-0 w-full h-full bg-primary" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-0 size-[208px] z-[2] lg:visible invisible">
                    <div className="relative w-full h-full bg-primary ">
                        <div className="absolute top-0 left-0 w-full h-full bg-secondary1" style={{ clipPath: "polygon(100% 0, 0% 100%, 0 0)" }}></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute 3xl:top-[116px] lg:top-[101px] right-0 size-[208px] bg-secondary2 rounded-full lg:visible invisible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[10%] top-[205px] z-[3] size-[310px] bg-secondary2 rounded-full lg:visible invisible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 3xl:top-[324px] lg:top-[311px] size-[208px] bg-secondary3 rounded-full lg:visible invisible">
                </motion.div>

                {/* lg / md */}

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[15%] top-0 size-[208px] z-[2]">
                    <div className="relative w-full h-full bg-secondary1 lg:invisible md:visible invisible">
                        <div className="absolute top-0 right-0 w-full h-full bg-primary" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -right-[15%] top-0 size-[208px] z-[2] lg:invisible md:visible invisible">
                    <div className="relative w-full h-full bg-primary ">
                        <div className="absolute top-0 left-0 w-full h-full bg-secondary1 " style={{ clipPath: "polygon(100% 0, 0% 100%, 0 0)" }}></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute top-[85px] -right-[15%] size-[208px] bg-secondary2 rounded-full lg:invisible md:visible invisible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[29%] -bottom-[14.4%] z-[3] size-[310px] bg-secondary2 rounded-full lg:invisible md:visible invisible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -right-[15%] -bottom-[8.2%]  size-[208px] bg-secondary3 rounded-full lg:invisible md:visible invisible">
                </motion.div>

                {/* md / xs */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[30%] -bottom-[40%] z-[3] size-[308px] bg-secondary2 rounded-full md:invisible visible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -right-[18%] -bottom-[17%]  size-[208px] bg-secondary3 rounded-full md:invisible visible">
                </motion.div>

            </div>

            <section className="md:-mt-28 -mt-20 px-6 flex flex-col z-[6]">
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="grid lg:grid-cols-3 grid-cols-1 items-start max-w-[1173px] gap-[26px] gap-y-[72px] w-full mx-auto ">
                    {/* Basis */}
                    <NavLink aria-label="Open basic package detail page" to="/seo-plan-basic-package-detail" className="col-span-1 w-full shadow-sm max-w-[660px] mx-auto 3xl:-mt-32 lg:-mt-[68px] md:-mt-[32px] xs:-mt-[32px] -mt-[32px] hover-up-md group bg-white flex flex-col md:pb-12 xs:pb-10 pb-[33px] md:pt-[42px] xs:pt-[35px] pt-[30px] xs:px-[30px] px-[25px] border border-neutral-300 rounded-[20px] relative overflow-hidden">
                        <div className="size-[74px] rounded-[22px] border border-neutral-300 mb-[22px] flex items-center justify-center overflow-hidden">
                            <img loading="lazy" className="group-hover:scale-110 transition-all duration-300" src={squaresImage} alt="square" />
                        </div>

                        <div className="tb-bold text-neutral-800 group-hover:text-primary transition-colors duration-300 mb-[10px] md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">
                            Basis
                        </div>
                        <div style={{ height: `${headerDescHeight}px` }} className="text-[18px] leading-[30.006px] text-neutral-600 tb-medium">Perfekt für den Einstieg in SEO.<span className="lg:flex hidden"></span> </div>
                        <div style={{ height: `${priceHeight}px` }} className="flex flex-col lg:mt-[20px]">
                            <div className="tb-bold text-neutral-800 md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">899 €</div>
                            <div className="tb-medium text-neutral-600">pro Monat (zzgl. Mwst.)</div>
                        </div>
                        <hr className="w-full my-[35px]" />
                        <div style={{ height: `${checkListHeight}px` }} className="flex flex-col gap-[16px] mb-10">
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Keyword-Recherche</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">On-Page-Optimierung</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Technische SEO-Analyse</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Monatliches Reporting</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Local SEO</div>
                            </div>
                            <br />
                        </div>
                        <Button className="tb-bold">Details</Button>

                    </NavLink>


                    {/* Standart */}
                    <NavLink aria-label="Open standart package detail page" to="/seo-plan-standart-package-detail" className="col-span-1 w-full shadow-sm max-w-[660px] mx-auto 3xl:-mt-32 lg:-mt-[68px] md:-mt-[32px] xs:-mt-[32px] -mt-[32px] hover-up-md group bg-white flex flex-col md:pb-12 xs:pb-10 pb-[33px] md:pt-[42px] xs:pt-[35px] pt-[30px] xs:px-[30px] px-[25px] border border-neutral-300 rounded-[20px] relative overflow-hidden">
                        <div className="absolute left-0 top-0 py-1 px-9 tb-bold text-white bg-primary rounded-br-[20px]">Bestseller</div>

                        <div className="size-[74px] rounded-[22px] border border-neutral-300 mb-[22px] flex items-center justify-center overflow-hidden">
                            <img loading="lazy" className="group-hover:scale-110 transition-all duration-300" src={circlesImage} alt="circle" />
                        </div>
                        <div className="tb-bold text-neutral-800 group-hover:text-primary transition-colors duration-300 mb-[10px] md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">
                            Standard
                        </div>
                        <div style={{ height: `${headerDescHeight}px` }} className="text-[18px] leading-[30.006px] text-neutral-600 tb-medium">Ideal für ambitionierte Ziele.</div>

                        <div style={{ height: `${priceHeight}px` }} className="flex flex-col lg:mt-[20px]">
                            <div className="tb-bold text-neutral-800 md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">1499 €</div>
                            <div className="tb-medium text-neutral-600">pro Monat (zzgl. Mwst.)</div>
                        </div>

                        <hr className="w-full my-[35px]" />
                        <div style={{ height: `${checkListHeight}px` }} className="flex flex-col gap-[16px] mb-10">
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Alle Leistungen aus "Basis"</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Content-Optimierung</div>
                            </div>
                            <div className="flex items-center gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Linkbuilding</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Persönliche Strategie-Meetings</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Persönlicher Ansprechpartner</div>
                            </div>
                        </div>
                        <Button className="tb-bold">Details</Button>
                    </NavLink>


                    {/* Premium */}
                    <NavLink aria-label="Open premium package detail page" to="/seo-plan-premium-package-detail" className="col-span-1 w-full shadow-sm max-w-[660px] mx-auto 3xl:-mt-32 lg:-mt-[68px] md:-mt-[32px] xs:-mt-[32px] -mt-[32px] hover-up-md group bg-white flex flex-col md:pb-12 xs:pb-10 pb-[33px] md:pt-[42px] xs:pt-[35px] pt-[30px] xs:px-[30px] px-[25px] border border-neutral-300 rounded-[20px] relative overflow-hidden">

                        <div className="size-[74px] rounded-[22px] border border-neutral-300 mb-[22px] flex items-center justify-center overflow-hidden">
                            <img loading="lazy" className="group-hover:scale-110 transition-all duration-300" src={trianglesImage} alt="triangles" />
                        </div>
                        <div className="tb-bold text-neutral-800 group-hover:text-primary transition-colors duration-300 mb-[10px] md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">
                            Premium
                        </div>
                        <div ref={headerDescRef} className="text-[18px] leading-[30.006px] text-neutral-600 tb-medium">Lösung für maximale Ergebnisse.</div>
                        <div ref={priceRef} className="flex flex-col lg:mt-[20px]">
                            <div className="tb-bold text-neutral-800 md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">Preis auf Anfrage</div>
                            <div className="tb-medium text-neutral-600">Kontaktieren Sie unseren Vertrieb.</div>
                        </div>
                        <hr className="w-full my-[35px]" />
                        <div ref={checkListRef} className="flex flex-col gap-[16px] mb-10">
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Maßgeschneiderte SEO-Strategie</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Wettbewerbsanalysen</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Technische Tiefen-Optimierung
                                </div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Tiefgreifende Analysen und Reporting</div>
                            </div>
                            <div className="flex items-start gap-[13px]">
                                <img loading="lazy" className="size-6 rounded-full" src={check} alt="check" />
                                <div className="leading-[20px] text-neutral-600 text-[18px] tb-medium">Conversion-Optimierungsstrategien</div>
                            </div>
                        </div>
                        <Button className="tb-bold">Details</Button>

                    </NavLink>
                </motion.div>
            </section>

            <motion.section
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="3xl:pb-[200px] lg:pb-[160px] md:pb-[128px] xs:pb-[102px] pb-[88px] px-6 max-w-[419px] w-full mx-auto flex flex-col items-center justify-center text-center lg:mt-[60px] mt-10">
                <div className="text-neutral-800 mb-[15px] tb-bold lg:text-[24px] md:text-[22px] text-[20px] lg:leading-[34.008px] md:leading-[31.174px] leading-[28.34px]">Haben wir Ihr Interesse geweckt?</div>
                <div className="text-neutral-600 text-[18px] leading-[30.006px] mb-[40px] tb-medium">Wir freuen uns zusammen mit Ihnen Ihre Ziele zu erfüllen.</div>
                <div>
                    <Button className="tb-bold" variant="primary">Kontakt</Button>
                </div>
            </motion.section>

            <motion.section
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="3xl:py-[170px] lg:py-[136px] md:py-[110px] xs:py-[88px] py-[70px] px-6 overflow-hidden flex items-center justify-center relative bg-neutral-200">
                <div className="flex flex-col max-w-[660px] w-full mx-auto">
                    <div className="max-w-[660px] mb-10 lg:w-auto w-full text-center flex flex-col lg:mr-10 md:px-6">
                        <div className="text-primary uppercase md:mb-5 xs:mb-[15px] mb-[10px] tb-medium text-base tracking-[1.6px]">Häufig gestellte Fragen</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-[10px] flex flex-wrap">Sie haben Fragen, wir haben die Antworten</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Ihre Frage ist nicht dabei? Kontaktieren Sie uns, und wir antworten Ihnen unverzüglich.</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Accordion
                            title="Welche Art von Unternehmen betreut ihr?"
                            content="Wir betreuen Unternehmen aller Branchen, von kleinen Betrieben bis zu großen Firmen." />
                        <Accordion
                            title="Könnt ihr auch kleinen Startups helfen?"
                            content="Ja, wir unterstützen Unternehmen jeder Größe, einschließlich Neugründungen." />
                        <Accordion
                            title="Kann ich die Leistungen später erweitern?"
                            content="Absolut, unsere Leistungen sind flexibel erweiterbar, sodass wir Sie auch zukünftig unterstützen können." />
                        <Accordion
                            title="Ist eine Mindestlaufzeit erforderlich?"
                            content="Die Mindestlaufzeit wird individuell je nach Leistung und Bedarf des Kunden festgelegt." />
                        <Accordion
                            title="Wie kann ich den Erfolg eurer Maßnahmen messen?"
                            content="Wir bieten regelmäßige Reportings, damit Sie die Ergebnisse der Maßnahmen genau verfolgen können." />
                        <Accordion
                            title="Bietet ihr eine persönliche Beratung an?"
                            content="Ja, wir bieten individuelle Beratungen an, um die bestmögliche Lösung für Ihre Ziele zu finden." />
                        <Accordion
                            title="Welche Dienstleistungen deckt ihr ab?"
                            content="Wir fokussieren uns aktuell auf Suchmaschinenoptimierung (SEO), bezahlte Anzeigen (Ads) und Unternehmenslistungen." />
                        <Accordion
                            title="Wie funktioniert die Bezahlung?"
                            content="Die Bezahlung erfolgt je nach Dienstleistung entweder als einmalige Gebühr oder wird monatlich abgerechnet." />



                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default SeoPlan