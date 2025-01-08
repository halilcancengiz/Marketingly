import { NavLink } from "react-router-dom";
import { IoIosArrowDown, TbPointFilled } from "../assets/icons/icons";
import { Logo } from "../assets/svg/Logo";
import Button from "./Button";
import { Squash as Hamburger } from "hamburger-react";
import { useRef, useState, useEffect } from "react";

const Navbar = () => {
    const mobileNavbarRef = useRef<HTMLElement | null>(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            const isLg = window.innerWidth >= 1024;
            setIsLgScreen(isLg);
            if (isLg) {
                setIsMobileNavOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isLgScreen]);

    return (
        <header className="flex items-center bg-neutral-100 gap-5 text-neutral-600 py-6 border-b-[1px] border-neutral-300 relative">
            <div className="mx-auto max-w-[1221px] w-full flex items-center text-[18px] px-6 leading-[20px] justify-between">
                <Logo />
                <div className="flex items-center gap-x-8">
                    <nav className="lg:flex hidden items-center gap-x-8">
                        <NavLink aria-label="Go to the Home page" className="flex items-center gap-1 hover:text-primary transition-all duration-300 tb-medium" to="/" >
                            Start
                        </NavLink>
                        <NavLink aria-label="Go to the Dienstleistungen page" className="hover:text-primary transition-all duration-300 tb-medium" to="/dienstleistungen" >
                            Dienstleistungen
                        </NavLink>

                        <div className="lg:flex hidden items-center gap-1 group hover:text-primary transition-colors duration-300 relative">
                            <div className="tb-medium">Preise</div>
                            <IoIosArrowDown className="group-hover:transform group-hover:-rotate-180 transition-transform duration-300" size={16} />
                            <div className="absolute invisible opacity-0 translate-y-[10px] z-[11] pt-[13px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out 2xl:-left-1/2 -right-1/2 top-full  text-neutral-600">
                                <div className="flex flex-col gap-8 rounded-3xl px-[66px] py-[64px] border-[1px] border-net bg-neutral-100 mt-2 min-w-[400px]">
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the SEA plan page" to="/sea-preise" >
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>SEA (Google & Bing Ads)</span>
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the SEO plan page" to="/seo-preise" >
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>SEO</span>
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the Social Media Ads plan page" to="/social-media-ads-preise">
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>Social Media Ads</span>
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the E-mail Marketing plan page" to="/email-marketing-preise">
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>E-mail Marketing</span>
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the Funnel-Website plan page" to="/websitefunnel-preise">
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>Funnel-Website</span>
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the Unternehmenslistung plan page" to="/unternehmenslistung-preis">
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>Unternehmenslistung</span>
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the Video- und Fotografie plan page" to="/foto-und-videographie-preise">
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>Video- und Fotografie</span>
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the Aufsetzung Analyse-Software plan page" to="/analytics-aufsetzung-preis">
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>Aufsetzung Analyse-Software</span>
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-start gap-1 tb-medium" aria-label="Go to the Marketing-Ressourcen (Grafiken) plan page" to="/marketing-ressourcen-preise">
                                        <TbPointFilled className="w-5 h-5 min-w-5 min-h-5" />
                                        <span>Marketing-Ressourcen (Grafiken)</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="flex items-center gap-x-8">
                        <NavLink aria-label="Go to the kontakt page" className="md:flex hidden" to="/kontakt">
                            <Button className="tb-bold" variant="primary" size="small">
                                Kontakt
                            </Button>
                        </NavLink>
                        <div className={`${isMobileNavOpen ? "bg-secondary3" : "bg-primary"} rounded-[10px] hover:bg-secondary3 transition-all duration-300 lg:hidden ml-3`}>
                            <Hamburger
                                aria-label="Toggle mobile navbar"
                                toggled={isMobileNavOpen}
                                toggle={toggleMobileNav}
                                size={20}
                                color="white"
                                duration={0.8}
                            />
                        </div>
                    </div>
                </div>

            </div>
            {/* mobile navbar */}
            <nav ref={mobileNavbarRef} className={`mobile-navbar-shadow z-20 lg:hidden absolute left-0 top-full w-full bg-neutral-100 transition-[max-height] duration-300 ease-in-out overflow-hidden border-b-[1px] border-neutral-300 ${isMobileNavOpen ? "max-h-[800px]" : "max-h-0"}`}>
                <div className="w-full h-full flex flex-col p-6 text-[20px] tb-medium">

                    <NavLink className="flex items-center gap-1 hover:text-primary transition-all duration-300 py-[15px]" aria-label="Go to the Home page" to="/" >
                        Start
                    </NavLink>
                    <NavLink className="hover:text-primary transition-all duration-300 py-[15px]" aria-label="Go to the dienstleistungen page" to="/dienstleistungen" >
                        Dienstleistungen
                    </NavLink>

                    <div className="flex flex-col items-start gap-1 group transition-colors duration-300 py-[15px]" >
                        <div className="flex items-center gap-1 group-hover:text-primary">
                            Preise <IoIosArrowDown className="group-hover:transform group-hover:-rotate-180 transition-transform duration-300" size={16} />
                        </div>
                        <div className="hidden opacity-0 group-hover:flex group-hover:opacity-100 flex-col transition-opacity duration-300">
                            <NavLink to="/sea-preise" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the SEA plan page" >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>SEA (Google & Bing Ads)</span>
                            </NavLink>
                            <NavLink to="/seo-preise" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the seo plan page" >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>SEO</span>
                            </NavLink>
                            <NavLink to="/social-media-ads-preise" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the Social Media Ads plan page" >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>Social Media Ads</span>
                            </NavLink>
                            <NavLink to="/email-marketing-preise" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the E-Mail-Marketing plan page" >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>E-Mail-Marketing</span>
                            </NavLink>
                            <NavLink to="/websitefunnel-preise" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the Funnel-Websites plan page"   >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>Funnel-Websites</span>
                            </NavLink>
                            <NavLink to="/unternehmenslistung-preis" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the Unternehmenslistung plan page" >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>Unternehmenslistung</span>
                            </NavLink>
                            <NavLink to="/foto-und-videographie-preise" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the Video- und Fotografie plan page" >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>Video- und Fotografie</span>
                            </NavLink>
                            <NavLink to="/analytics-aufsetzung-preis" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the Aufsetzung Analyse-Software plan page" >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>Aufsetzung Analyse-Software</span>
                            </NavLink>
                            <NavLink to="/marketing-ressourcen-preise" className="hover:text-primary transition-colors duration-300 flex items-start py-[15px] gap-1 tb-medium" aria-label="Go to the Marketing-Ressourcen (Grafiken) plan page" >
                                <TbPointFilled className="w-5 h-5 min-w-5 min-h-5 mt-1" />
                                <span>Marketing-Ressourcen (Grafiken)</span>
                            </NavLink>
                        </div>
                    </div>


                    <div className="py-[15px] xs:mt-[60px] mt-10">
                        <NavLink aria-label="Go to the kontakt page" to="/kontakt">
                            <Button className="w-full h-16 text-base tb-bold" variant="primary" size="default">
                                Kontakt
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;