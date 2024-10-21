import React from 'react'
import { Logo } from '../assets/svg/Logo'


type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="mx-auto max-w-[1173px] w-full flex items-center justify-between text-[18px] leading-[20px] font-medium px-6 text-neutral-600">

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
                            <div className='font-bold'>Send us an email</div>
                            <div className='text-base'>contact@marketingly.com</div>
                        </div>
                    </div>
                    <div className='footer-card-shadow group gap-x-[17px] max-h-[124px] py-10 px-8 md:max-w-[311px] w-full min-w-[311px] flex items-center border-[1px] border-neutral-300 rounded-[10px] hover-down'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/6160c9819f1e5978b56545d6/6164b381a174dab8087b5eca_icon-2-contact-links-marketing-template.svg" loading="eager" alt="Phone Icon" className="w-[37px] bg-white" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-neutral-800 font-bold group-hover:text-primary'>Give us a call</div>
                            <div className='text-neutral-600 text-base'>(414) 809 - 2567</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer