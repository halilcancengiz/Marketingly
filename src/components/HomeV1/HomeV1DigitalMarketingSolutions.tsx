"use client";
import Button from "../Button";
import services from "../../assets/images/homev1-services-image.webp";
import check from "../../assets/images/check.webp";
import seoImage from "../../assets/images/seoimage.webp";
import cardSocialMedia from "../../assets/images/cardSocialMedia.webp";
import * as motion from "framer-motion/client";
import { NavLink } from "react-router-dom";


const HomeV1DigitalMarketingSolutions = () => {

    return (
        <section className="3xl:py-[220px] lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] xs:px-6 px-4 bg-neutral-200 z-[1]">
            <div className="max-w-[1176px] w-full mx-auto flex flex-col lg:gap-y-[86px] md:gap-y-[200px] xs:gap-y-[160px] gap-y-[128px] z-[2]">
                <div className="flex lg:flex-row flex-col items-center justify-between z-[3]">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5
                        }}
                        className="relative lg:mr-10 lg:order-1 order-2">
                        <div className="w-full h-full z-10">
                            <img style={{ boxShadow: "rgba(8, 15, 52, 0.03) 0px 4px 22px 0px" }} className="hxxl:max-w-[572px] max-w-[660px] hxxl:w-full lg:min-w-[461px] w-full md:rounded-[24px] xs:rounded-[20px] rounded-[15px] border border-neutral-300 z-[4]" src={services} alt="services" />
                            <div className="absolute lg:-left-20 left-auto lg:right-auto -right-12 lg:-top-20 -top-16 bg-[#F9F5E5] size-[248px] -z-[1] rounded-full"></div>
                        </div>

                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5
                        }}
                        className="lg:max-w-[527px] max-w-[660px] w-full flex flex-col lg:order-2 order-1 lg:mb-0 md:mb-[80px] xs:mb-[60px] mb-[50px]">
                        <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-[16px] leading-[18px] uppercase tb-medium text-primary tracking-[1.6px]">Reichweite mit Präzision</div>
                        <div className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] xs:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800 lg:mb-5 xs:mb-[15px] mb-[10px]">Wieso Suchmaschinenwerbung?</div>
                        <p className="md:mb-12 mb-10 tb-medium text-[18px] text-neutral-600">Mit bezahlter Werbung auf Suchmaschinen wie Google und Bing erscheint Ihre digitale Anzeige genau in dem Moment, in dem jemand nach Produkten, Dienstleistungen oder Karrieremöglichkeiten sucht, die Sie anbieten.</p>
                        <div className="flex flex-col lg:mb-[60px] xs:mb-[50px] mb-10 gap-[15px]">
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Optimale Reichweite</div>
                            </div>
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Messbare Erfolge</div>
                            </div>
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Schnelle Ergebnisse</div>
                            </div>
                        </div>
                        <div className="xs:w-auto w-full xs:flex">
                            <NavLink aria-label="Open sea-preise page" to="/sea-preise">
                                <Button className="tb-bold xs:w-auto w-full">Pläne</Button>
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between">

                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5
                        }}
                        className="lg:max-w-[527px] max-w-[660px] w-full flex flex-col lg:mb-0 md:mb-[80px] xs:mb-[60px] mb-[50px] lg:mr-10">
                        <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-[16px] leading-[18px] uppercase tb-medium text-primary tracking-[1.6px]">Nachhaltige Reichweite</div>
                        <h2 className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] xs:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800 lg:mb-5 xs:mb-[15px] mb-[10px]">Warum ist eine SEO Optimierung wichtig?</h2>
                        <p className="md:mb-12 mb-10 tb-medium text-[18px] text-neutral-600">Durch gezielte Optimierung bringen wir Ihnen organisch mehr Reichweite durch bessere Platzierungen in Suchmaschinen.</p>
                        <div className="flex flex-col lg:mb-[60px] xs:mb-[50px] mb-10 gap-[15px]">
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Mehr Sichtbarkeit ohne zusätzliche Werbekosten</div>
                            </div>
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Nachhaltige Marketingstrategie</div>
                            </div>
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Maximale organische Leads</div>
                            </div>
                        </div>
                        <div className="xs:w-auto w-full xs:flex">
                            <NavLink aria-label="Open sep-preise page" to="/seo-preise">
                                <Button className="tb-bold xs:w-auto w-full">Pläne</Button>
                            </NavLink>
                        </div>
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5
                        }}
                        className="relative">
                        <img
                            src={seoImage}
                            alt="womanImage"
                            style={{ boxShadow: "rgba(8, 15, 52, 0.03) 0px 4px 22px 0px" }}
                            className="hxxl:max-w-[572px] max-w-[660px] hxxl:w-full lg:min-w-[461px] w-full md:rounded-[24px] xs:rounded-[20px] rounded-[15px] border border-neutral-300" />
                    </motion.div>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between z-[3]">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5
                        }}
                        className="relative lg:mr-10 lg:order-1 order-2">
                        <div className="w-full h-full z-10">
                            <img style={{ boxShadow: "rgba(8, 15, 52, 0.03) 0px 4px 22px 0px" }} className="hxxl:max-w-[572px] max-w-[660px] hxxl:w-full lg:min-w-[461px] w-full md:rounded-[24px] xs:rounded-[20px] rounded-[15px] border border-neutral-300 z-[4]" src={cardSocialMedia} alt="services" />
                        </div>

                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5
                        }}
                        className="lg:max-w-[527px] max-w-[660px] w-full flex flex-col lg:order-2 order-1 lg:mb-0 md:mb-[80px] xs:mb-[60px] mb-[50px]">
                        <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-[16px] leading-[18px] uppercase tb-medium text-primary tracking-[1.6px]">MAXIMALE REICHWEITE</div>
                        <div className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] xs:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800 lg:mb-5 xs:mb-[15px] mb-[10px]">Weshalb Social Media Ads?</div>
                        <p className="md:mb-12 mb-10 tb-medium text-[18px] text-neutral-600">
                            Mit Milliarden von täglichen Nutzern bieten Social Media Plattformen wie Facebook, Instagram, LinkedIn und TikTok die perfekte Möglichkeit, Ihre Zielgruppe in unvorstellbaren Größen zu erreichen.
                        </p>
                        <div className="flex flex-col lg:mb-[60px] xs:mb-[50px] mb-10 gap-[15px]">
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Immense Nutzerzahlen</div>
                            </div>
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Vielfältige Kampagnenmöglichkeiten</div>
                            </div>
                            <div className="flex items-center">
                                <div className="size-6 mr-[13px]">
                                    <img className="w-full h-full rounded-full " src={check} alt="check" />
                                </div>
                                <div className="text-[18px] tb-bold text-neutral-800">Unmittelbare Erfolge</div>
                            </div>
                        </div>
                        <div className="xs:w-auto w-full xs:flex">
                            <NavLink aria-label="Open sea-preise page" to="/social-media-ads-preise">
                                <Button className="tb-bold xs:w-auto w-full">Pläne</Button>
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default HomeV1DigitalMarketingSolutions