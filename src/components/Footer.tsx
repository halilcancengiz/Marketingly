import { Logo } from "../assets/svg/Logo"
import facebookIcon from "../assets/images/facebook.webp"
import xIcon from "../assets/images/x.webp"
import intagramIcon from "../assets/images/instagram.webp"
import linkedinIcon from "../assets/images/linkedin.webp"
import youtubeIcon from "../assets/images/youtube.webp"
import whatsappIcon from "../assets/images/whatsapp.webp"
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const Footer = () => {
    const footerRef = useRef<HTMLDivElement | null>(null)
    const isInViewFooterRef = useInView(footerRef, { once: true });


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
                            Maximaler Erfolg mit Google!
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-4 md:flex-nowrap flex-wrap'>
                        <div style={{ boxShadow: '0px 8px 44px 0px rgba(8, 15, 52, 0.03)' }} className='group cursor-pointer flex  gap-x-3 hover-up-md rounded-[16px] py-[21px] px-6 border border-neutral-300'>
                            <div className="bg-[#E4E2FF] size-12 min-w-12 min-h-12 p-2.5 rounded-[10px] mr-[25px] overflow-hidden group/parent">
                                <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                    <path opacity="0.35" d="M29.75 32H5.25C2.35025 32 0 29.6497 0 26.75V9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25V26.75C35 29.6497 32.6497 32 29.75 32Z" fill="#4A3AFF" />
                                    <path d="M13.8985 17.5888L0 9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25L21.1015 17.5888C18.8842 18.9188 16.1158 18.9188 13.8985 17.5888Z" fill="#4A3AFF" />
                                </svg>
                            </div>

                            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className='flex flex-col text-white flex-wrap'>
                                <div className='tb-bold text-neutral-800 text-[18px] group-hover:text-primary transition-colors duration-300 break-all'>{`${import.meta.env.VITE_CONTACT_EMAIL}`}</div>
                            </a>
                        </div>
                        <div style={{ boxShadow: '0px 8px 44px 0px rgba(8, 15, 52, 0.03)' }} className='group cursor-pointer flex items-center gap-x-3 hover-up-md rounded-[16px] py-[21px] px-6 border border-neutral-300'>
                            <div className="bg-[#FFE8E8] size-12 min-w-12 min-h-12 p-2.5 rounded-[10px] mr-[25px] overflow-hidden group">
                                <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                    <g clipPath="url(#clip0)">
                                        <path opacity="0.35" d="M0.152786 8.03404C0.547467 10.9728 2.09241 17.7268 8.1833 23.8177C14.2742 29.9086 21.0264 31.4536 23.967 31.8483C26.0969 32.3087 28.4063 31.7238 30.0614 30.0686C32.65 27.4801 23.2736 18.1037 20.6851 20.6923L19.0335 22.3439L9.65714 12.9676L11.307 11.3159C13.8955 8.7274 4.51917 -0.648943 1.93063 1.9396C0.275457 3.59477 -0.309453 5.90419 0.152786 8.03404Z" fill="#FF6262" />
                                        <path d="M1.93652 1.93629L11.3111 11.3109C13.8943 8.72054 13.8943 4.52839 11.3058 1.93985C8.72077 -0.645134 4.52684 -0.646912 1.93652 1.93629Z" fill="#FF6262" />
                                        <path d="M20.6885 20.6902L30.063 30.0648C32.6462 27.4762 32.6462 23.2823 30.0577 20.6938C27.4709 18.1088 23.2788 18.107 20.6885 20.6902Z" fill="#FF6262" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="35" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`} className='flex flex-col text-white'>
                                <div className='tb-bold text-neutral-800 text-[18px] group-hover:text-primary transition-colors duration-300'>{`${import.meta.env.VITE_CONTACT_PHONE}`}</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='lg:mt-20 mt-10 border-b w-full md:flex-row flex-col gap-y-6 flex items-center justify-between border-neutral-400 pb-2'>
                    <div className='flex xs:flex-row flex-col items-center gap-6'>
                        <NavLink to="/impressum" className='hover:text-primary transition-all duration-300 tb-medium'>Impressum</NavLink>
                        <NavLink to="/datenschutz" className='hover:text-primary transition-all duration-300 tb-medium'>Datenschutz und AGBs</NavLink>
                    </div>
                    <div className='flex gap-4 md:max-w-[311px] w-full xs:min-w-[311px] items-center justify-center md:pb-0 pb-4'>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img loading="lazy" className='size-[29px] object-contain' src={facebookIcon} alt="facebook" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img loading="lazy" className='size-[29px] object-contain' src={xIcon} alt="x" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img loading="lazy" className='size-[29px] object-contain' src={intagramIcon} alt="instagram" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img loading="lazy" className='size-[29px] object-contain' src={linkedinIcon} alt="linkedin" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img loading="lazy" className='size-[29px] object-contain' src={youtubeIcon} alt="youtube" />
                        </NavLink>
                        <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                            <img loading="lazy" className='size-[29px] object-contain' src={whatsappIcon} alt="whatsapp" />
                        </NavLink>
                    </div>


                </div>

            </motion.div>
        </footer>

    )
}

export default Footer