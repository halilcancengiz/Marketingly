"use client";
import Button from "../../components/Button";
import * as motion from "framer-motion/client";
import { NavLink } from "react-router-dom";


const HomeV1FourthSection = () => {

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
    <section className="relative">
    <div style={{ clipPath: "polygon(0 7%, 100% 7%, 100% 93%, 0 93%)" }} className="3xl:py-[220px] lg:py-[176px] xs:px-6 px-4 md:py-[140px] xs:py-[113px] py-[90px] bg-primary  overflow-hidden flex items-center justify-center relative">
        <div className="max-w-[1173px] w-full mx-auto flex flex-col z-[5]">
            <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="max-w-[527px] w-full md:text-[38px] md:leading-[50px] xs:text-[32px] xs:leading-[42px] text-[26px] leading-[34.216px] tb-bold text-white md:mb-5 xs:mb-[15px] mb-[10px]">
                Lassen Sie uns gemeinsam starten!
            </motion.div>
            <motion.p
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="max-w-[527px] w-full leading-[30px] text-neutral-100 mb-10 text-[18px] tb-medium">
                Kontaktieren Sie uns, um zu erfahren, wie wir Ihnen dabei helfen können, Ihre Ziele zu erreichen.
            </motion.p>
            <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="max-w-[527px] w-full flex xs:flex-row flex-col items-center gap-6">
                <NavLink aria-label="Open contact page" className="xs:w-auto w-full" to="/kontakt">
                    <Button className="w-full whitespace-nowrap !text-primary tb-bold bg-white hover:bg-secondary3 hover:!text-white" variant="primary" size="default">Kontakt</Button>
                </NavLink>
                <NavLink aria-label="Open services page" className="xs:w-auto w-full" to="/dienstleistungen">
                    <Button className="w-full whitespace-nowrap border-white text-white hover:bg-secondary3 tb-medium" variant="secondary" size="default">Dienstleistungen</Button>
                </NavLink>
            </motion.div>
        </div>

        {/* 3xl+ */}
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute 3xl:visible invisible right-0 top-0 aspect-square w-[334px] bg-secondary2 rounded-full"></motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            style={{ clipPath: "polygon(95% 0, 100% 0, 100% 100%, 5% 100%)" }}
            className="absolute 3xl:visible invisible right-0 top-0 w-[398.5px] h-[358.64px] mr-[398px] bg-secondary1"></motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute 3xl:visible invisible -right-[24px] bottom-0 w-[398.5px] h-[378.02px] bg-secondary1"></motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute 3xl:visible invisible right-0 bottom-0 mr-[343px] rounded-full size-[334px]">
            <div className="relative w-full h-full">
                <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
            </div>
        </motion.div>
        {/* 3xl / lg */}
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute 3xl:invisible lg:visible invisible right-0 top-0 aspect-square w-[22.95%] bg-secondary2 rounded-full z-[2]">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute 3xl:invisible lg:visible invisible -right-[24px] bottom-0 w-[25.5%] h-[50.0024%] bg-secondary1 z-[1]">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            style={{ clipPath: "polygon(95% 0, 100% 0, 100% 100%, 5% 100%)" }}
            className="absolute 3xl:invisible lg:visible invisible right-0 top-0 w-[25.5%] aspect-[11/10] mr-[25.5%] bg-secondary1">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute 3xl:invisible lg:visible invisible right-[19.95%]  bottom-0 rounded-full w-[22.95%] aspect-square z-[2]">
            <div className="relative w-full h-full">
                <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
            </div>
        </motion.div>

        {/* lg / md */}
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute lg:invisible md:visible invisible right-0 top-0 aspect-square w-[22.95%] bg-secondary2 rounded-full z-[2]">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute lg:invisible md:visible invisible -right-[24px] bottom-0 w-[25.5%] h-[50.0024%] bg-secondary1 z-[1]">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            style={{ clipPath: "polygon(96% 0, 100% 0, 100% 100%, 5% 100%)" }}
            className="absolute lg:invisible md:visible invisible right-0 -top-[13%] w-[25.5%] aspect-[11/10] mr-[25.5%] bg-secondary1">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute lg:invisible md:visible invisible right-[12.5%]  bottom-0 rounded-full w-[22.95%] aspect-square z-[2]">
            <div className="relative w-full h-full">
                <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
            </div>
        </motion.div>

        {/* md / xs */}

        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute md:invisible xs:visible invisible -right-[2.5%] -top-[11%] aspect-square w-[25%] bg-secondary2 rounded-full z-[2]">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute md:invisible xs:visible invisible -right-[72px] bottom-0 w-[30%] aspect-square bg-secondary1 z-[1]">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute md:invisible xs:visible invisible right-[68px]  bottom-0 rounded-full w-[25%] aspect-square z-[2]">
            <div className="relative w-full h-full">
                <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
            </div>
        </motion.div>

        {/* xs- */}

        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute xs:invisible visible -right-[4%] -top-[6%] aspect-square w-[25%] bg-secondary2 rounded-full z-[2]">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute xs:invisible visible -right-0 bottom-0 w-[30%] aspect-square bg-secondary1 z-[1]">
        </motion.div>
        <motion.div
            variants={scaleAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.70, duration: 0.3 }}
            className="absolute xs:invisible visible right-[68px]  bottom-0 rounded-full w-[25%] aspect-square z-[2]">
            <div className="relative w-full h-full">
                <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-secondary3"></div>
            </div>
        </motion.div>

    </div>
    <div className="z-[-1] absolute top-0 right-0 h-1/2 w-full bg-neutral-200"></div>
    <div className="z-[-1] absolute bottom-0 right-0 h-1/2 w-full bg-white"></div>
</section>
  )
}

export default HomeV1FourthSection