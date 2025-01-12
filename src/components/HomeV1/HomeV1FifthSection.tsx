"use client";
import Button from "../Button";
import manImage from "../../assets/images/manimage.webp";
import * as motion from "framer-motion/client";
import { NavLink } from "react-router-dom";
import { useScroll, useSpring, useTransform } from "framer-motion";
import marketingimage from "../../assets/images/marketingimage.webp"


const HomV1FifthSection = () => {

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


    const { scrollY }: { scrollY: any } = useScroll();
    const firstImageTranslateY: any = useTransform(scrollY, (value: number) => value / 20);
    const firstImageTranslateYReverse: any = useTransform(scrollY, (value: number) => -value / 40);


    const smoothFirstImageTranslateY: any = useSpring(firstImageTranslateY, {
        stiffness: 100,
        damping: 20,
    });
    const smoothFirstImageTranslateYReverse: any = useSpring(firstImageTranslateYReverse, {
        stiffness: 100,
        damping: 20,
    });



    return (
        <section className="3xl:pt-[220px] lg:pt-[176px] md:pt-[140px] xs:pt-[113px] pt-[90px] 3xl:pb-[220px] lg:pb-[176px] md:pb-[160px] xs:pb-[140px] pb-[100px] xs:px-6 px-4 overflow-hidden flex items-center justify-center relative bg-white">
            <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-center justify-between">
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.50, duration: 0.3 }}
                    className=" lg:mr-10 flex lg:max-w-[587px] max-w-[660px] lg:min-w-[488px] lg:max-h-[660px] max-h-[718px] hxl:aspect-[11/13] aspect-[11/12] w-full relative lg:order-1 order-2 lg:my-0 my-20 ">
                    <motion.img
                        style={{
                            y: smoothFirstImageTranslateY
                        }}
                        className="absolute w-[71%] lg:left-auto left-0 lg:right-0 right-auto lg:-top-[150px] md:-top-[185px] xs:-top-[200px] -top-[250px] md:rounded-[24px] xs:rounded-[20px] rounded-[15px]"
                        src={manImage}
                        alt="woman" />
                    <motion.img
                        style={{
                            y: smoothFirstImageTranslateYReverse
                        }}
                        className="absolute w-[71.15%] lg:left-0 left-auto lg:right-auto right-0 lg:-bottom-[100px] md:-bottom-[200px] xs:-bottom-[250px] -bottom-[200px] md:rounded-[24px] xs:rounded-[20px] rounded-[15px]"
                        src={marketingimage}
                        alt="studing" />
                </motion.div>
                <motion.div
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
                </motion.div>
            </div>
        </section>
    )
}

export default HomV1FifthSection