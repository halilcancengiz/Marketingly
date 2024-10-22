import { Logo } from '../assets/svg/Logo'
import facebookIcon from "../assets/images/facebook.png"
import xIcon from "../assets/images/x.png"
import intagramIcon from "../assets/images/instagram.png"
import linkedinIcon from "../assets/images/linkedin.png"
import youtubeIcon from "../assets/images/youtube.png"
import whatsappIcon from "../assets/images/whatsapp.png"
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="mx-auto max-w-[1221px] w-full flex flex-col items-center justify-between text-[18px] leading-[20px] tb-medium px-6 py-10 text-neutral-600">

            <div className='flex lg:flex-nowrap justify-between flex-wrap w-full'>
                <div className='flex flex-col mr-10 lg:mb-[15px] mb-[35px] max-w-[357px] w-full items-start'>
                    <Logo />
                    <div className='leading-[30px] mt-[10px]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam voluptate blanditiis.
                    </div>
                </div>

                <div className='flex gap-x-[32px] md:gap-y-0 gap-y-4 md:flex-nowrap flex-wrap'>
                    <div className='footer-card-shadow gap-x-[17px] max-h-[124px] py-10 px-8 md:max-w-[311px] w-full min-w-[311px] flex items-center bg-primary rounded-[10px] hover:bg-secondary1 hover-down'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/6160c9819f1e5978b56545d6/6165df0bde91472c9eeaad9f_icon-3-contact-links-marketing-template.svg" loading="eager" alt="Email Icon" className="w-[37px] bg-primary" />
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='tb-bold'>Send us an email</div>
                            <div className='text-base'>contact@marketingly.com</div>
                        </div>
                    </div>
                    <div className='footer-card-shadow group gap-x-[17px] max-h-[124px] py-10 px-8 md:max-w-[311px] w-full min-w-[311px] flex items-center border-[1px] border-neutral-300 rounded-[10px] hover-down'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/6160c9819f1e5978b56545d6/6164b381a174dab8087b5eca_icon-2-contact-links-marketing-template.svg" loading="eager" alt="Phone Icon" className="w-[37px] bg-white" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-neutral-800 tb-bold group-hover:text-primary'>Give us a call</div>
                            <div className='text-neutral-600 text-base'>(414) 809 - 2567</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 border-b w-full md:flex-row flex-col gap-y-6 flex items-center justify-between border-neutral-400 pb-2'>
                <div className='flex items-center gap-7'>
                    <NavLink to="/" className='hover:text-primary transition-all duration-300'>Impressum</NavLink>
                    <NavLink to="/" className='hover:text-primary transition-all duration-300'>Datenschutz</NavLink>
                </div>
                <div className='flex gap-4 md:max-w-[311px] w-full min-w-[311px] items-center justify-center md:pb-0 pb-4'>
                    <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                        <img className='size-[29px] object-contain' src={facebookIcon} alt="" />
                    </NavLink>
                    <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                        <img className='size-[29px] object-contain' src={xIcon} alt="" />
                    </NavLink>
                    <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                        <img className='size-[29px] object-contain' src={intagramIcon} alt="" />
                    </NavLink>
                    <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                        <img className='size-[29px] object-contain' src={linkedinIcon} alt="" />
                    </NavLink>
                    <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                        <img className='size-[29px] object-contain' src={youtubeIcon} alt="" />
                    </NavLink>
                    <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                        <img className='size-[29px] object-contain' src={whatsappIcon} alt="" />
                    </NavLink>
                </div>


            </div>

        </div>
    )
}

export default Footer