import { Logo } from '../assets/svg/Logo'
import facebookIcon from "../assets/images/facebook.png"
import xIcon from "../assets/images/x.png"
import intagramIcon from "../assets/images/instagram.png"
import linkedinIcon from "../assets/images/linkedin.png"
import youtubeIcon from "../assets/images/youtube.png"
import whatsappIcon from "../assets/images/whatsapp.png"
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'


const Footer = () => {
    const footerRef = useRef<HTMLDivElement | null>(null)
    const isInViewFooterRef = useInView(footerRef, { once: true });

    useEffect(() => {
        // Sayfa yüklendiğinde kaydırmayı en üste al
        window.scrollTo(0, 0);
    }, []);

    return (
        <footer className='border-t'>
            <motion.div
                ref={footerRef}
                initial={{ opacity: 0 }}
                animate={isInViewFooterRef ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="mx-auto max-w-[1221px] w-full flex flex-col items-center justify-between text-[18px] px-6 leading-[20px] tb-medium pt-20 mb-10 text-neutral-600">

                <div className='flex lg:flex-nowrap justify-between flex-wrap w-full'>
                    <div className='flex flex-col mr-10 lg:mb-[15px] mb-[35px] max-w-[357px] w-full items-start'>
                        <Logo />
                        <div className='leading-[30px] mt-[10px] tb-medium'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam voluptate blanditiis.
                        </div>
                    </div>

                    <div className='flex gap-x-[32px] md:gap-y-0 gap-y-4 md:flex-nowrap flex-wrap '>
                        <a href='mailto:contact@marketingly.com' className='footer-card-shadow gap-x-[17px] xs:max-h-[124px] xs:py-10 py-[33px] xs:px-8 px-[25px] md:max-w-[311px] w-full xs:min-w-[311px] gap-y-3 flex xs:flex-row flex-col xs:items-center bg-primary rounded-[10px] hover:bg-secondary1 hover-down'>
                            <div className='min-w-[37px]'>
                                <img src="https://cdn.prod.website-files.com/6160c9819f1e5978b56545d6/6165df0bde91472c9eeaad9f_icon-3-contact-links-marketing-template.svg" loading="eager" alt="Email Icon" className="w-[37px] bg-primary" />
                            </div>
                            <div className='flex flex-col text-white'>
                                <div className='tb-bold'>Send us an email</div>
                                <div className='text-base truncate'>contact@marketingly.com</div>
                            </div>
                        </a>
                        <a href='tel:(414) 809 - 2567' className='footer-card-shadow group gap-x-[17px] xs:max-h-[124px] xs:py-10 py-[33px] xs:px-8 px-[25px] md:max-w-[311px] w-full xs:min-w-[311px] gap-y-3 flex xs:flex-row flex-col xs:items-center border-[1px] border-neutral-300 rounded-[10px] hover-down'>
                            <div className='min-w-[37px]'>
                                <img src="https://cdn.prod.website-files.com/6160c9819f1e5978b56545d6/6164b381a174dab8087b5eca_icon-2-contact-links-marketing-template.svg" loading="eager" alt="Phone Icon" className="w-[37px] bg-white" />
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-neutral-800 tb-bold group-hover:text-primary'>Give us a call</div>
                                <div className='text-neutral-600 text-base'>(414) 809 - 2567</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='mt-20 border-b w-full md:flex-row flex-col gap-y-6 flex items-center justify-between border-neutral-400 pb-2'>
                    <div className='flex items-center gap-7'>
                        <NavLink to="/impressum" className='hover:text-primary transition-all duration-300 tb-medium'>Impressum</NavLink>
                        <NavLink to="/datenschutz" className='hover:text-primary transition-all duration-300 tb-medium'>Datenschutz und AGBs</NavLink>
                    </div>
                    <div className='flex gap-4 md:max-w-[311px] w-full xs:min-w-[311px] items-center justify-center md:pb-0 pb-4'>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img className='size-[29px] object-contain' src={facebookIcon} alt="facebook" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img className='size-[29px] object-contain' src={xIcon} alt="x" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img className='size-[29px] object-contain' src={intagramIcon} alt="instagram" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img className='size-[29px] object-contain' src={linkedinIcon} alt="linkedin" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img className='size-[29px] object-contain' src={youtubeIcon} alt="youtube" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img className='size-[29px] object-contain' src={whatsappIcon} alt="whatsapp" />
                        </NavLink>
                    </div>


                </div>

            </motion.div>
        </footer>

    )
}

export default Footer