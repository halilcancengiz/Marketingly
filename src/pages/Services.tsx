import { NavLink } from "react-router-dom";
import analytics from "../assets/images/analytics.png";
import search from "../assets/images/search.png";
import system from "../assets/images/system.png";
import Button from "../components/Button";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
const Services = () => {
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
    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Dienstleistungen - Unsere Services</title>
                <meta name="description" content="Unsere Dienstleistungen auf einen Blick. Google Ads, SEO und Unternehmenslistung für maximale Reichweite und Sichtbarkeit." />
                <meta property="og:title" content="Dienstleistungen - Unsere Services" />
                <meta property="og:description" content="Erfahren Sie mehr über unsere Google Ads Kampagnen, SEO-Optimierung und Unternehmenslistung für maximale Reichweite und Sichtbarkeit." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}services`} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <section className="relative overflow-hidden z-[1]  flex items-center justify-center bg-secondary1 w-full 3xl:pt-[142px] lg:pt-[114px] md:pt-[91px] xs:pt-[72px] pt-[58px] 3xl:pb-[196px]  lg:pb-[118px] md:pb-[140px] xs:pb-[88px] pb-[100px] px-6">
                <div className="max-w-[540px] w-full flex flex-col text-white z-[3]">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="mb-[10px] text-center tb-bold lg:text-[54px] md:text-[45px] xs:text-[38px] text-[32px] lg:leading-[61.02px] md:leading-[50.85px] xs:leading-[42.94px] leading-[36.16px]">Dienstleistungen</motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="text-center text-[18px] tb-medium">Unsere Dienstleistungen auf einen Blick:
                    </motion.div>
                    {/* <div className="text-center text-[18px] leading-[30.006px] tb-medium">Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat nun eget massa velit eros etiam nunc.</div> */}
                </div>

                {/* 3xl+ */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-0 size-[205px] bg-primary 3xl:visible invisible">
                    <div className="relative w-full h-full rounded-full bg-secondary2"></div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-[205px] size-[264px] 3xl:visible invisible">
                    <div className="relative w-full h-full">
                        <div className="absolute right-0 h-full w-1/2 rounded-r-full bg-secondary4"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                    className="absolute left-0 top-0 size-[205px] bg-secondary4 3xl:visible invisible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[104px] top-[205px] size-[264px] rounded-full bg-secondary3 3xl:visible invisible">
                </motion.div>
                {/* 3xl / lg */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-0 size-[170px] bg-primary 3xl:invisible  lg:visible invisible">
                    <div className="relative w-full h-full rounded-full bg-secondary2"></div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-[133px] size-[230px] 3xl:invisible lg:visible invisible">
                    <div className="relative w-full h-full">
                        <div className="absolute right-0 h-full w-1/2 rounded-r-full bg-secondary4"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                    className="absolute left-0 top-0 size-[170px] bg-secondary4 3xl:invisible lg:visible invisible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[104px] bottom-0 size-[230px] rounded-full bg-secondary3 3xl:invisible lg:visible invisible">
                </motion.div>
                {/* lg / md */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-0 size-[150px] bg-primary lg:invisible  md:visible invisible">
                    <div className="relative w-full h-full rounded-full bg-secondary2"></div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-[151.5px] size-[200px] lg:invisible  md:visible invisible">
                    <div className="relative w-full h-full">
                        <div className="absolute right-0 h-full w-1/2 rounded-r-full bg-secondary4"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                    className="absolute left-0 top-0 size-[150px] bg-secondary4 lg:invisible  md:visible invisible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[104px] top-[151.5px] size-[200px] rounded-full bg-secondary3 lg:invisible  md:visible invisible">
                </motion.div>
                {/* md / xs */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 -top-[64px] size-[120px] bg-primary md:invisible xs:visible invisible">
                    <div className="relative w-full h-full rounded-full bg-secondary2"></div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-[168px] size-[180px] md:invisible xs:visible invisible">
                    <div className="relative w-full h-full">
                        <div className="absolute right-0 h-full w-1/2 rounded-r-full bg-secondary4"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                    className="absolute left-0 -top-[23px] size-[120px] bg-secondary4 md:invisible xs:visible invisible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[104px] top-[168px] size-[180px] rounded-full bg-secondary3 md:invisible xs:visible invisible">
                </motion.div>
                {/* xs / xs- */}
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 -top-[75px] size-[120px] bg-primary xs:invisible visible">
                    <div className="relative w-full h-full rounded-full bg-secondary2"></div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute right-0 top-[184px] size-[180px] xs:invisible visible">
                    <div className="relative w-full h-full">
                        <div className="absolute right-0 h-full w-1/2 rounded-r-full bg-secondary4"></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                    className="absolute left-0 -top-[75px] size-[120px] bg-secondary4 xs:invisible visible">
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -left-[104px] top-[159px] size-[180px] rounded-full bg-secondary3 xs:invisible visible">
                </motion.div>
            </section>

            <section className="3xl:-mt-[131px] lg:-mt-[105px] md:-mt-[84px] xs:-mt-[67px] -mt-[53px] z-[2] px-6">
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center max-w-[1173px] gap-6 w-full mx-auto">
                    <div className="col-span-1 w-full bg-white md:rounded-[24px] xs:rounded-[20px] rounded-[15px] lg:min-h-[500px] py-16 px-6 flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6 ">
                            <img className="object-contain size-[86px] rounded-[10px]" src={analytics} alt="analytics" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Google Ads</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px]">Bezahlte Google Marketingkampagnen – für maximale Reichweite</div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                            <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                            <NavLink to="/seo-plan">
                                <Button className="tb-bold">Details</Button>
                            </NavLink>

                        </div>

                    </div>

                    <div className="col-span-1 w-full bg-white md:rounded-[24px] xs:rounded-[20px] rounded-[15px] lg:min-h-[500px] py-16 px-6 flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={search} alt="search" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Seo</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px] lg:line-clamp-3">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen</div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                            <div className="w-[109px] bg-primary h-[2px]"></div>
                            <NavLink to="/ads-plan">
                                <Button className="tb-bold">Details</Button>
                            </NavLink>
                        </div>

                    </div>

                    <div className="col-span-1 w-full bg-white md:rounded-[24px] xs:rounded-[20px] rounded-[15px] lg:min-h-[500px] py-16 px-6 flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={system} alt="system" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Unternehmenslistung</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px] lg:line-clamp-3">Sichbarkeit optimieren durch Google-Unternehmenslistung</div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                            <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                            <NavLink to="/company-listing-plan">
                                <Button className="tb-bold">Details</Button>
                            </NavLink>
                        </div>

                    </div>
                </motion.div>
            </section>

            <section className="3xl:pb-[160px] lg:pb-[128px] md:pb-[102px] xs:pb-[82px] pb-[66px] 3xl:mt-20 lg:mt-16 md:mt-[60px] md:pt-0 pt-[60px] px-6">
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="bg-primary relative overflow-hidden lg:max-w-[1173px] max-w-[660px] w-full mx-auto lg:pt-[104px] lg:pb-[104px] md:pt-[83px] md:pb-[400px] xs:pt-[60px] xs:pb-[350px] pt-[50px] pb-[320px] lg:px-[88px] md:px-[70px] px-[25px] md:rounded-[24px] xs:rounded:-[20px] rounded-[15px]">

                    <div className="flex lg:items-start items-center flex-col">
                        <div className="max-w-[498px] w-full mb-8 md:text-[38px] xs:text-[32px] text-[26px] tb-bold text-white lg:text-start text-center">Lassen Sie uns gemeinsam starten!</div>
                        <div className="flex items-center lg:justify-start justify-center max-w-[498px] w-full">
                            <Button className="tb-bold bg-white !text-primary md:w-auto w-full hover:!bg-secondary3 hover:!text-white">Kontakt</Button>
                        </div>
                    </div>

                    <div className="absolute lg:visible invisible right-0 top-0 max-w-[35.9%] w-full h-full">
                        <div className="flex flex-col w-full h-full">
                            <motion.div
                                variants={scaleAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                className="w-full h-full  flex">
                                <div className="w-1/2 bg-secondary1"></div>
                                <div className="w-1/2">
                                    <div className="bg-secondary2 rounded-full w-full aspect-square"></div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={scaleAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                className="w-full h-full flex">
                                <div className="w-1/2 flex items-end justify-end relative overflow-hidden">
                                    <div className="bg-secondary3  w-full rounded-l-full aspect-square absolute -right-1/2"></div>
                                </div>
                                <div style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }} className="w-1/2 bg-secondary1"></div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 h-[340px] left-0 w-full lg:invisible md:visible invisible">
                        <div className="h-full mx-[94px] flex flex-col">
                            <motion.div
                                variants={scaleAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="h-full flex">
                                <div className="w-full bg-secondary1"></div>
                                <div className="w-full flex items-center justify-end">
                                    <div className="w-[169.55px] aspect-square rounded-full bg-secondary2"></div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={scaleAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="h-[169.55px] flex">
                                <div className="w-full h-full flex items-center justify-end relative overflow-hidden">
                                    <div className="absolute w-full h-full bg-secondary3 aspect-square rounded-l-full -right-[150px]"></div>
                                </div>
                                <div className="w-full">
                                    <div className="aspect-square w-[169.55px] bg-secondary1" style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 h-[304px] w-full flex items-center justify-center left-0 md:invisible xs:visible invisible">
                        <div className="max-w-[384px] w-full mx-auto bg-primary h-full flex flex-col">
                            <motion.div
                                variants={scaleAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="w-full h-full flex">
                                <div className="w-full bg-secondary1"></div>
                                <div className="w-full flex items-start justify-end">
                                    <div className="w-[127px] aspect-square bg-secondary2 rounded-full"></div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={scaleAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="w-full h-full flex">
                                <div className="w-full flex items-end justify-end relative overflow-hidden">
                                    <div className="absolute -right-[130px] w-full h-[80%] rounded-l-full bg-secondary3">

                                    </div>
                                </div>
                                <div className="w-full">
                                    <div style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }} className="bg-secondary1 w-full h-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 h-[304px] w-full flex items-center justify-center left-0 xs:invisible visible px-4">
                        <div className="w-full mx-auto bg-primary h-full flex flex-col">
                            <motion.div
                                variants={scaleAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="h-full flex">
                                <div className="w-full bg-secondary1"></div>
                                <div className="w-full  flex items-start justify-end">
                                    <div className="bg-secondary2 w-[65.5%] rounded-full aspect-square"></div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={scaleAnimationVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                                className="h-full flex">
                                <div className="w-full  relative overflow-hidden flex items-end justify-end">
                                    <div className="absolute -right-[60%] w-full bg-secondary3 h-[80%] rounded-l-full aspect-square"></div>
                                </div>
                                <div className="w-full ">
                                    <div className="bg-secondary1 w-[80%] h-full" style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </section>


        </div>
    )
}

export default Services