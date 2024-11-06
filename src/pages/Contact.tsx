import { NavLink, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import facebookIcon from "../assets/images/facebook.png"
import xIcon from "../assets/images/x.png"
import intagramIcon from "../assets/images/instagram.png"
import linkedinIcon from "../assets/images/linkedin.png"
import youtubeIcon from "../assets/images/youtube.png"
import whatsappIcon from "../assets/images/whatsapp.png"
import { IoIosArrowDown } from "../assets/icons/icons"
import Accordion from "../components/Accordion"


const Contact = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col">
            <section className="3xl:pt-[120px] lg:pt-[96px] md:pt-[60px] xs:pt-[50px] pt-[40px] 3xl:pb-[220px] lg:pb-[176px] md:pb-[140px] xs:pb-[113px] pb-[90px] px-6  overflow-hidden flex items-center justify-center relative">
                <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-start  justify-between">
                    <div className="max-w-[487px] lg:mb-0 mb-20 mt-[66px] lg:w-auto w-full min-w-[288px] flex flex-col lg:mr-10 ">
                        <div className="text-primary uppercase mb-5 tb-medium text-base tracking-[1.6px]">Kontakt</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-5">Jetzt Anfragen</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-10">Lassen Sie uns gemeinsam Ihre Ziele erreichen – ob mehr Sichtbarkeit, neue Kunden oder andere Anliegen. Wir sind für Sie da und bieten Ihnen maßgeschneiderte Lösungen für Ihre Bedürfnisse.</div>
                        <div className='flex flex-col gap-y-4 md:flex-nowrap flex-wrap mb-[60px]'>
                            <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 0px 0px" }} className='group cursor-pointer flex items-center gap-x-3 hover-up-md rounded-[16px] py-[21px] px-6 border border-neutral-300'>
                                <div className="bg-[#E4E2FF] size-12 p-2.5 rounded-[10px] mr-[25px] overflow-hidden group/parent">
                                    <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                        <path opacity="0.35" d="M29.75 32H5.25C2.35025 32 0 29.6497 0 26.75V9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25V26.75C35 29.6497 32.6497 32 29.75 32Z" fill="#4A3AFF" />
                                        <path d="M13.8985 17.5888L0 9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25L21.1015 17.5888C18.8842 18.9188 16.1158 18.9188 13.8985 17.5888Z" fill="#4A3AFF" />
                                    </svg>
                                </div>

                                <div className='flex flex-col text-white'>
                                    <div className='tb-bold text-neutral-800 text-[18px] group-hover:text-primary transition-colors duration-300'>contact@marketingly.com </div>
                                </div>
                            </div>
                            <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 0px 0px" }} className='group cursor-pointer flex items-center gap-x-3 hover-up-md rounded-[16px] py-[21px] px-6 border border-neutral-300'>
                                <div className="bg-[#FFE8E8] size-12 p-2.5 rounded-[10px] mr-[25px] overflow-hidden group">
                                    <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                        <g clip-path="url(#clip0)">
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

                                <div className='flex flex-col text-white'>
                                    <div className='tb-bold text-neutral-800 text-[18px] group-hover:text-primary transition-colors duration-300'>(414) 809 - 2567</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-[24px] tb-bold mb-[30px]">
                            Folge uns!
                        </div>

                        <div className='flex gap-4 md:max-w-[311px] w-full xs:min-w-[311px] items-center justify-center md:pb-0 pb-4'>
                            <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img className='size-[37px] object-contain' src={facebookIcon} alt="" />
                            </NavLink>
                            <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img className='size-[37px] object-contain' src={xIcon} alt="" />
                            </NavLink>
                            <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img className='size-[37px] object-contain' src={intagramIcon} alt="" />
                            </NavLink>
                            <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img className='size-[37px] object-contain' src={linkedinIcon} alt="" />
                            </NavLink>
                            <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img className='size-[37px] object-contain' src={youtubeIcon} alt="" />
                            </NavLink>
                            <NavLink to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img className='size-[37px] object-contain' src={whatsappIcon} alt="" />
                            </NavLink>
                        </div>

                    </div>
                    <div className="lg:max-w-[600px] lg:min-w-[542px] border border-gray-200/60 w-full lg:py-[70px] lg:px-[55px] md:px-[46px] px-[35px] md:py-[58px] sm:[48px] py-[40px] section-6-shadow rounded-[24px] bg-white z-[2]">
                        <form onSubmit={() => navigate("/thank-you-page")} className="grid grid-cols-2 gap-[30px]">
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="xs:text-[18px] text-base tb-bold">E-Mail</div>
                                <input required placeholder="name@domain.de" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="xs:text-[18px] text-base tb-bold">Telefonnummer</div>
                                <input placeholder="0123 4567890" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="xs:text-[18px] text-base tb-bold">Firma</div>
                                <input placeholder="Mustermann GmbH" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="xs:text-[18px] text-base tb-bold">Straße, Nr.</div>
                                <input placeholder="Musterstraße 1" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="xs:text-[18px] text-base tb-bold">PLZ</div>
                                <input placeholder="12345" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <div className="xs:text-[18px] text-base tb-bold">Ort</div>
                                <input placeholder="Musterstadt" className="py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>

                            <div className="col-span-2 flex flex-col gap-3">
                                <div className="xs:text-[18px] text-base tb-bold">Nachricht</div>
                                <textarea placeholder="Nachricht" className="focus:outline-none border rounded-[10px] py-[17px] h-28 px-5 xs:text-[18px] text-base resize-none hover:border-primary focus:border-primary transition-colors duration-300" name="" id=""></textarea>
                            </div>

                            <div className="col-span-2 flex items-start gap-3">
                                <input required className="size-7 border-none outline-none ring-0" type="checkbox" />
                                <div className="xs:text-[18px] text-base text-neutral-600 flex-wrap">Mit dem Absenden des Formulars akzeptieren Sie die <span className="text-primary cursor-pointer">Datenschutzerkärung</span></div>
                            </div>
                            <div className="lg:flex hidden">
                                <Button type="submit" className="">Abenden</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="absolute lg:visible invisible right-0 top-0 h-full bg-primary 2xl:w-[45%] lg:w-[32%] z-[1]">
                    <div className="w-full h-full relative">
                        <div className="absolute lg:w-[65%] w-full aspect-square rounded-full right-0 max-w-[318px] bg-secondary2"></div>
                        <div style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} className="absolute lg:w-[57%] w-full aspect-square right-0 bottom-0 max-w-[290px] bg-secondary3"></div>
                        <div className="absolute lg:w-[57%] w-full aspect-square right-[87%] bottom-0 max-w-[290px] bg-secondary1"></div>
                    </div>
                </div>
                <div className="absolute lg:invisible visible bottom-0 bg-primary 2xl:w-[45%] lg:w-[32%] w-full lg:h-full h-1/2 z-[1]">
                    <div className="w-full h-full relative">
                        <div className="absolute md:w-[65%] w-[40%] aspect-square rounded-full left-0 bottom-0 max-w-[318px]  bg-secondary2"></div>
                        <div style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} className="absolute lg:w-[57%] w-full aspect-square right-0 bottom-0 max-w-[290px] bg-secondary3"></div>
                        <div className="absolute lg:w-[57%] md: w-full aspect-square left-0 top-0 max-w-[290px] bg-secondary1"></div>
                    </div>
                </div>
            </section>
            <section className="3xl:py-[220px] lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] px-6 overflow-hidden flex items-center justify-center relative bg-neutral-200">
                <div className="flex flex-col max-w-[660px] w-full mx-auto">
                    <div className="max-w-[660px] mb-10 lg:w-auto w-full min-w-[288px] text-center flex flex-col lg:mr-10 px-6">
                        <div className="text-primary uppercase mb-5 tb-medium text-base tracking-[1.6px]">Häufig gestellte Fragen</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-5">Sie haben Fragen, wir haben die Antworten</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Ihre Frage ist nicht dabei? Kontaktieren Sie uns und wir antworten Ihnen unverzüglich</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Accordion
                            title="Könnt ihr auch kleinen Startups helfen?"
                            content="Ja, wir unterstützen Unternehmen jeder Größe, einschließlich Neugründungen." />
                        <Accordion
                            title="Wie funktioniert die Bezahlung?"
                            content="Die Bezahlung erfolgt je nach Umfang des Projekts entweder als einmalige Pauschale oder als monatliche Abrechnung." />

                        <Accordion
                            title="Kann ich die Leistungen später erweitern?"
                            content="Absolut, unsere Leistungen sind flexibel erweiterbar, sodass wir Sie auch zukünftig unterstützen können." />

                        <Accordion
                            title="Welche Art von Unternehmen betreut ihr?"
                            content="Wir betreuen Unternehmen aller Branchen, von kleinen Betrieben bis zu großen Firmen." />

                        <Accordion
                            title="Ist eine Mindestlaufzeit erforderlich?"
                            content="Die Mindestlaufzeit wird individuell je nach Leistung und Bedarf des Kunden festgelegt." />

                        <Accordion
                            title="Wie kann ich den Erfolg eurer Maßnahmen messen?"
                            content="Wir bieten regelmäßige Reportings, damit Sie die Ergebnisse der Maßnahmen genau verfolgen können." />

                        <Accordion
                            title="Bietet ihr eine persönliche Beratung an?"
                            content="Ja, wir bieten individuelle Beratungen an, um die bestmögliche Lösung für Ihre Ziele zu finden." />

                        <Accordion
                            title="Welche Dienstleistungen deckt ihr ab?"
                            content="Wir fokussieren uns aktuell auf Suchmaschinenoptimierung (SEO), bezahlte Anzeigen (Ads) und Unternehmenslistungen." />


                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contact