"use client";
import Button from "../../components/Button";
import * as motion from "framer-motion/client";
import { NavLink } from "react-router-dom";



const HomeV1SixthSection = () => {

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

    return (
        <section className="3xl:py-[220px] lg:py-[176px] xs:px-6 px-4 md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-white">
            <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-center justify-between">

                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="lg:max-w-[436px] max-w-[660px] lg:mb-0 mb-20 lg:w-auto w-full min-w-[288px] flex flex-col lg:mr-10">
                    <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-[16px] leading-[18px] uppercase tb-medium text-primary tracking-[1.6px]">Wieso Superagentur</div>
                    <h2 className="col-span-1 md:text-[38px] xs:text-[32px] text-[26px] leading-[34px] xs:leading-[42px] md:leading-[50px] tb-bold text-neutral-800 md:mb-5 xs:mb-[15px] mb-[10px]">Warum sollten Sie mit uns arbeiten?</h2>
                    <p className="leading-[30px] text-neutral-600 text-[18px] tb-medium"> Es gibt viele Agenturen – aber nur wenige stecken so viel Leidenschaft hinein wie wir.</p>
                    <NavLink aria-label="Open contact page" to="/kontakt" className="mt-10 xs:w-auto w-full">
                        <Button className="tb-bold xs:w-auto w-full">Kontakt</Button>
                    </NavLink>
                </motion.div>

                <div className="flex md:flex-row flex-col relative lg:max-w-[700px] max-w-[660px] w-full transition-all duraiton-500">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="flex md:flex-row flex-col">
                        <div className="md:w-1/2 min-w-[285px] md:pr-[14px] flex flex-col items-start  space-y-[28px] z-[2]">
                            <div className="bg-white lg:py-[60px] md:py-[50px] xs:py-[42px] py-[35px] md:px-9 xs:px-[35px] px-[25px] w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                <h4 className="text-neutral-800 lg:text-[58px] md:text-[48px] xs:text-[40px] text-[34px] lg:leading-[59.972px] md:leading-[49.632px] xs:leading-[41.36px] leading-[35.156px] tb-bold mb-5">100<span className="text-primary tb-bold">%</span></h4>
                                <div className="text-neutral-800 md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px]">Einsatz</div>
                                <path className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Wir geben immer unser Bestes für Ihre Ziele.</path>
                            </div>

                            <div className="bg-white lg:py-[60px] md:py-[50px] xs:py-[42px] py-[35px] md:px-9 xs:px-[35px] px-[25px] w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                <h4 className="text-neutral-800 lg:text-[58px] md:text-[48px] xs:text-[40px] text-[34px] lg:leading-[59.972px] md:leading-[49.632px] xs:leading-[41.36px] leading-[35.156px] tb-bold mb-5">3<span className="text-primary tb-bold">x</span></h4>
                                <div className="text-neutral-800 md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px]">Power</div>
                                <p className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Alles aus einer Hand - SEO, Google Ads, Unternehmenslistungen.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-[14px] min-w-[285px] flex flex-col justify-end md:mt-16 mt-7 space-y-[28px] z-[2]">
                            <div className="bg-white lg:py-[60px] md:py-[50px] xs:py-[42px] py-[35px] md:px-9 xs:px-[35px] px-[25px] w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                <h4 className="text-neutral-800 lg:text-[58px] md:text-[48px] xs:text-[40px] text-[34px] lg:leading-[59.972px] md:leading-[49.632px] xs:leading-[41.36px] leading-[35.156px] tb-bold mb-5">14 <span className="text-primary tb-bold">Tage</span></h4>
                                <div className="text-neutral-800 md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px]">Kickstart</div>
                                <p className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Schneller Start  für schnelle Ergebnisse – in nur 14 Tagen.</p>
                            </div>
                            <div className="bg-white lg:py-[60px] md:py-[50px] xs:py-[42px] py-[35px] md:px-9 xs:px-[35px] px-[25px] w-full rounded-[24px] flex flex-col transition-all duration-300 section-6-shadow border border-gray-200/60">
                                <h4 className="text-neutral-800 lg:text-[58px] md:text-[48px] xs:text-[40px] text-[34px] lg:leading-[59.972px] md:leading-[49.632px] xs:leading-[41.36px] leading-[35.156px] tb-bold mb-5">1 <span className="text-primary tb-bold">Ziel</span></h4>
                                <div className="text-neutral-800 md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px]">Ihr Erfolg</div>
                                <p className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Wir setzen alles daran, Sie nach vorne zu bringen.</p>
                            </div>
                        </div>
                    </motion.div>


                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 md:max-w-[284px] max-w-[70%] w-full md:aspect-square md:h-auto h-[90%] z-[1]">
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="relative h-full w-full bg-[#A199FF]"></motion.div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default HomeV1SixthSection