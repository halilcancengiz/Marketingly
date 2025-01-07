"use client";
import Button from "../../components/Button";
import * as motion from "framer-motion/client";
import blueCardImage from "../../assets/images/blue.webp"
import yellowCardImage from "../../assets/images/yellow.webp"
import redCardImage from "../../assets/images/red.webp"
import { NavLink } from "react-router-dom";


const HomeV1SeventhSection = () => {

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
        <section className="3xl:py-[220px] lg:py-[176px] xs:px-6 px-4 md:py-[140px] xs:py-[113px] py-[90px] overflow-hidden flex items-center justify-center relative bg-neutral-200">
            <div className="max-w-[1173px] w-full mx-auto flex flex-col items-center ">
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="flex flex-col items-center justify-center max-w-[452px] w-full mb-[60px]">
                    <div className="text-primary uppercase mb-5 tb-medium text-base tracking-[1.6px]">Unser Prozess</div>
                    <h2 className="text-center md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-5">Ein einfacher, aber effektiver Drei-Schritte-Prozess</h2>
                </motion.div>
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="flex lg:flex-row flex-col w-full gap-[26px]">
                    <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                        <div>
                            <img src={blueCardImage} alt="card" />
                        </div>
                        <div className="pt-[42px] pb-[52px] px-[25px]">
                            <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px] text-neutral-800">1. Erstkontakt</div>
                            <p className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Wir beginnen mit einem persönlichen Gespräch, um Ihre Bedürfnisse und Ziele zu verstehen.</p>

                        </div>
                    </div>
                    <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                        <div>
                            <img src={yellowCardImage} alt="card" />
                        </div>
                        <div className="pt-[42px] pb-[52px] px-[25px]">
                            <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px] text-neutral-800">2. Planung</div>
                            <p className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Wir entwickeln eine maßgeschneiderte Strategie für Ihren Erfolg.</p>

                        </div>
                    </div>
                    <div className="bg-white lg:max-w-full max-w-[660px] lg:mx-0 mx-auto  flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 section-6-shadow">
                        <div>
                            <img src={redCardImage} alt="card" />
                        </div>
                        <div className="pt-[42px] pb-[52px] px-[25px]">
                            <div className="md:text-[24px] text-[22px] lg:leading-[34px] leading-[31px] tb-bold mb-[10px] text-neutral-800">3. Durchführung</div>
                            <p className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Unsere Experten setzen die Planung präzise und effizient um.</p>

                        </div>
                    </div>
                </motion.div>
                <NavLink aria-label="Open contact page" to="/kontakt" className="mt-10">
                    <Button className="tb-bold">Kontakt</Button>
                </NavLink>
            </div>
        </section>
    )
}

export default HomeV1SeventhSection