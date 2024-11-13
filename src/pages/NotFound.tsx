import { Helmet } from 'react-helmet'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"


const NotFound = () => {
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
            scale: 0.7
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };
    return (
        <div className='3xl:pt-[186px] 3xl:pb-[198px] lg:pt-[148px] lg:pb-[158px] md:pt-[118px] md:pb-[126px] xs:pt-[94px] xs:pb-[100px] pt-[75px] pb-[80px] px-6 relative bg-secondary1 overflow-hidden'>
            <Helmet>
                <title>404 - Seite nicht gefunden | MARKETINGLY X</title>
                <meta name="description" content="Die gesuchte Seite ist nicht verfügbar. Bitte gehen Sie zurück zur Startseite oder nutzen Sie die Navigation." />
                <meta property="og:title" content="404 - Seite nicht gefunden" />
                <meta property="og:description" content="Oh, es scheint so, als ob da etwas schiefgelaufen ist. Gehen Sie zurück zur Startseite." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}not-found`} />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <motion.div
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className='flex flex-col z-[10] max-w-[750px] w-full mx-auto'>
                <div className='text-center tracking-tight md:text-[164px] md:leading-[131px] xs:text-[131px] xs:leading-[104px] text-[105px] leading-[84px] lg:mb-[50px] md:mb-10 xs:mb-[30px] mb-5 tb-bold text-white transition-all duration-300'>
                    404
                </div>
                <div className='text-center lg:text-[54px] md:text-[45px] xs:[38px] text-[32px] lg:leading-[61.02px] md:leading-[50.85px] xs:leading-[42.94px] leading-[36.16px] text-white tb-bold transition-all duration-300'>
                    Die Seite ist nicht verfügbar!
                </div>
                <div className='text-center text-white tb-medium text-[18px] mb-10 transition-all duration-300'>
                    Oh, es scheint so, als ob da etwas schiefgelaufen ist.
                </div>
                <div className='z-[10]'>
                    <NavLink className="mx-auto  w-full flex items-center justify-center" to="/">
                        <Button className='bg-white !text-primary tb-bold hover:!text-white hover:bg-secondary3 xs:w-auto w-full !border-neutral-300 hover:!border-secondary3' variant='primary' size='default'>Zurück</Button>
                    </NavLink>
                </div>
            </motion.div>


            {/* <div className='absolute w-full h-full z-[1]'>
                <div className='absolute left-0 top-0 w-[25%] max-w-[280px] bg-transparent'>
                    <div className='w-full max-w-[280px] aspect-square bg-primary'>

                    </div>
                    <div style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} className='w-full max-w-[280px] aspect-square bg-secondary4'>

                    </div>
                </div>
                <div className='absolute right-0 top-0 w-[25%] max-w-[280px] bg-transparent'>
                    <div className='w-full max-w-[280px] aspect-square bg-primary'>

                    </div>
                </div>
                <div className='rounded-full aspect-square overflow-hidden w-[25%] max-w-[280px] absolute 3xl:top-[33.5%] top-auto 3xl:bottom-auto bottom-0  right-0'>
                    <div className='w-full h-full relative'>
                        <div className='absolute bottom-0 right-0 bg-secondary4 z-[2] w-1/2 h-full transform text-white'></div>
                        <div className='absolute bottom-0 bg-secondary3 z-[1] w-full h-1/2  text-white'></div>
                    </div>
                </div>
                <div className='absolute left-0 lg:-bottom-[35%] -bottom-[25%] -translate-y-1/2 w-[25%] max-w-[307px] aspect-square rounded-full bg-secondary2'></div>
            </div> */}

            {/* 3xl / 3xl+ */}
            <div className='3xl:visible invisible absolute top-0 left-0 w-full h-full'>
                <div className='relative w-full h-full'>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className='absolute top-0 right-0 3xl:max-w-auto 3xl:w-[307px] 3xl:h-[298px] bg-primary flex items-center justify-center'></motion.div>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className='absolute top-[298px] right-0 size-[332px] rounded-full  overflow-hidden'>
                        <div className='relative w-full h-full'>
                            <div className='absolute bottom-0 h-1/2 w-full bg-secondary3'></div>
                            <div className='absolute right-0 h-full w-1/2 bg-secondary4'></div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className='absolute left-0 top-0 3xl:w-[307px] 3xl:h-[269px] bg-primary z-[2]'></motion.div>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className='absolute left-0 top-[265px] 3xl:w-[307px] 3xl:h-[298px] bg-secondary4'></motion.div>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className='absolute left-0 -bottom-[153.5px] size-[307px] bg-secondary2 rounded-full'></motion.div>
                </div>
            </div>
            {/* 3xl / lg */}
            <div className='3xl:invisible lg:visible invisible absolute top-0 left-0 w-full h-full'>
                <div className='relative w-full h-full'>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className='absolute top-0 right-0 w-[18%] aspect-square bg-primary flex items-center justify-center'></motion.div>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className='absolute bottom-0 right-0 w-[23%] aspect-square rounded-full  overflow-hidden'>
                        <div className='relative w-full h-full'>
                            <div className='absolute bottom-0 h-1/2 w-full bg-secondary3'></div>
                            <div className='absolute right-0 h-full w-1/2 bg-secondary4'></div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className='absolute left-0 top-0 aspect-square w-[21%] '>
                        <div className='relative h-full w-full'>
                            <div className='absolute top-0 h-1/2 w-full bg-primary'></div>
                            <div style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className='absolute top-0 h-full w-full bg-secondary4'></div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={scaleAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className='absolute left-0 -bottom-[13.2%] w-[21%] aspect-square bg-secondary2 rounded-full'></motion.div>

                </div>
            </div>
            {/* lg / md */}
            <div className='lg:invisible md:visible invisible absolute top-0 left-0 w-full h-full'>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute top-0 right-0 w-[18%] aspect-square bg-primary flex items-center justify-center'></motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute bottom-0 right-0 w-[23%] aspect-square rounded-full  overflow-hidden'>
                    <div className='relative w-full h-full'>
                        <div className='absolute bottom-0 h-1/2 w-full bg-secondary3'></div>
                        <div className='absolute right-0 h-full w-1/2 bg-secondary4'></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute left-0 top-0 aspect-square w-[21%] '>
                    <div className='relative h-full w-full'>
                        <div className='absolute top-0 h-1/2 w-full bg-primary'></div>
                        <div style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className='absolute top-0 h-full w-full bg-secondary4'></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute left-0 bottom-0 w-[21%] aspect-square bg-secondary2 rounded-full'></motion.div>
            </div>
            {/* md / xs */}
            <div className='md:invisible xs:visible invisible absolute top-0 left-0 w-full h-full'>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute top-0 right-0 w-[20%] aspect-square bg-primary flex items-center justify-center'></motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute -bottom-[6.4%] -right-[4%] w-[208px] aspect-square rounded-full  overflow-hidden'>
                    <div className='relative w-full h-full'>
                        <div className='absolute bottom-0 h-1/2 w-full bg-secondary3'></div>
                        <div className='absolute right-0 h-full w-1/2 bg-secondary4'></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute left-0 top-0 aspect-square w-[25%] '>
                    <div className='relative h-full w-full'>
                        <div className='absolute top-0 h-1/2 w-full bg-primary'></div>
                        <div style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className='absolute top-0 h-full w-full bg-secondary4'></div>
                    </div>
                </motion.div>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute -left-[20%] -bottom-[40%] w-[64.167%] max-w-[308px] aspect-square bg-secondary2 rounded-full'></motion.div>
            </div>
            {/* xs / xs- */}
            <div className='xs:invisible visible absolute top-0 left-0 w-full h-full'>
                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute top-0 right-0 w-[20%] aspect-square bg-primary flex items-center justify-center'></motion.div>

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute -bottom-[1%] -right-[4%] w-[25%] aspect-square rounded-full  overflow-hidden'>
                    <div className='relative w-full h-full'>
                        <div className='absolute bottom-0 h-1/2 w-full bg-secondary3'></div>
                        <div className='absolute right-0 h-full w-1/2 bg-secondary4'></div>
                    </div>
                </motion.div>

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute left-0 top-0 aspect-square w-[25%] '>
                    <div className='relative h-full w-full'>
                        <div className='absolute top-0 h-1/2 w-full bg-primary'></div>
                        <div style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className='absolute top-0 h-full w-full bg-secondary4'></div>
                    </div>
                </motion.div>

                <motion.div
                    variants={scaleAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className='absolute left-0 -bottom-0 w-[25.535%] max-w-[308px] aspect-square bg-secondary2 rounded-full'></motion.div>

            </div>
        </div>
    )
}

export default NotFound