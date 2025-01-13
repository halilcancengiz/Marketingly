"use client";
import Button from "../Button";
import * as motion from "framer-motion/client";
import { NavLink } from "react-router-dom";
// import { useScroll, useSpring, useTransform } from "framer-motion";
import videoSrc from "../../assets/videos/mergedvideo-720.mp4"

const HomeV1VideoSection = () => {

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


    // const { scrollY }: { scrollY: any } = useScroll();
    // const firstImageTranslateY: any = useTransform(scrollY, (value: number) => value / 20);
    // const firstImageTranslateYReverse: any = useTransform(scrollY, (value: number) => -value / 40);


    // const smoothFirstImageTranslateY: any = useSpring(firstImageTranslateY, {
    //     stiffness: 100,
    //     damping: 20,
    // });
    // const smoothFirstImageTranslateYReverse: any = useSpring(firstImageTranslateYReverse, {
    //     stiffness: 100,
    //     damping: 20,
    // });



    return (
        <section className="3xl:pt-[220px] lg:pt-[176px] md:pt-[140px] xs:pt-[113px] pt-[90px] 3xl:pb-[220px] lg:pb-[176px] md:pb-[160px] xs:pb-[140px] pb-[100px] xs:px-6 px-4 overflow-hidden flex items-center justify-center relative bg-white">
            <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-center justify-between">
                {/* <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.50, duration: 0.3 }}
                    className=" lg:mr-10 flex lg:max-w-[587px] max-w-[660px] lg:min-w-[488px] lg:max-h-[660px] max-h-[718px] hxl:aspect-[11/13] aspect-[11/12] w-full relative lg:order-1 order-2 lg:my-0 my-20 ">
                    <div>
                        <video
                            className="md:rounded-[24px] xs:rounded-[20px] rounded-[15px] scale-x-[.96]"
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                objectFit: "cover", // Video ekranı dolduracak şekilde ayarlanır
                                pointerEvents: "none", // Videoya tıklama engellenir
                            }}
                        />
                    </div>
                </motion.div> */}

                {/* <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.60, duration: 0.3 }}
                    className=" lg:max-w-[504px] max-w-[660px] flex flex-col lg:pl-5 lg:order-2 order-1">
                    <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-[16px] leading-[18px] uppercase tb-medium text-primary tracking-[1.6px]">Unsere Zielgruppe</div>
                    <div className="col-span-1 md:text-[38px] xs:text-[32px] text-[26px] md:leading-[50px] xs:leading-[42px] leading-[34px] tb-bold text-neutral-800 md:mb-5 xs:mb-[15px] mb-[10px]"> Wer kann von unseren Dienstleistungen profitieren?</div>
                    <p className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-10">
                        Egal ob Makler, Zahnarztpraxis, lokales Geschäft oder große Industriefirma – unsere maßgeschneiderte Lösung passt zu jedem. Unser Dienst ist flexibel, skalierbar und hilft Ihnen, genau die Ergebnisse zu erzielen, die Sie brauchen – ob mehr Kunden, mehr Mitarbeiter oder mehr Sichtbarkeit.
                    </p>

                    <div className="xs:w-auto w-full">
                        <NavLink aria-label="Open kontakt page" className="xs:w-auto w-full" to="/kontakt">
                            <Button className="tb-bold xs:w-auto w-full">Kontakt</Button>
                        </NavLink>
                    </div>
                </motion.div> */}
                <div className="flex lg:flex-row flex-col items-center justify-between z-[3]">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="relative lg:mr-10 lg:order-1 order-2">
                        <div className="w-full h-full z-10 lg:mr-10">
                            <video
                                style={{ boxShadow: "rgba(8, 15, 52, 0.03) 0px 4px 22px 0px" }}
                                className="hxxl:max-w-[572px] max-w-[660px] hxxl:w-full w-full md:rounded-[24px] xs:rounded-[20px] rounded-[15px] object-cover aspect-[14/9]"
                                src={videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>

                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.45, duration: 0.3 }}
                        className="lg:max-w-[527px] max-w-[660px] w-full flex flex-col lg:order-2 order-1 lg:mb-0 md:mb-[80px] xs:mb-[60px] mb-[50px]">
                        <div className="md:mb-[20px] xs:mb-[15px] mb-[10px] text-[16px] leading-[18px] uppercase tb-medium text-primary tracking-[1.6px]">Unsere Zielgruppe</div>
                        <div className="lg:text-[38px] xs:text-[32px] text-[26px] lg:leading-[50.006px] xs:leading-[42.112px] leading-[34.216px] tb-bold text-neutral-800 lg:mb-5 xs:mb-[15px] mb-[10px]">Wer kann von unseren Dienstleistungen profitieren?</div>
                        <p className="md:mb-12 mb-10 tb-medium text-[18px] text-neutral-600">Egal ob Makler, Zahnarztpraxis, lokales Geschäft oder große Industriefirma – unsere maßgeschneiderte Lösung passt zu jedem. Unser Dienst ist flexibel, skalierbar und hilft Ihnen, genau die Ergebnisse zu erzielen, die Sie brauchen – ob mehr Kunden, mehr Mitarbeiter oder mehr Sichtbarkeit.</p>
                        <div className="xs:w-auto w-full xs:flex">
                            <NavLink aria-label="Open kontakt page" to="/kontakt">
                                <Button className="tb-bold xs:w-auto w-full">Kontakt</Button>
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HomeV1VideoSection