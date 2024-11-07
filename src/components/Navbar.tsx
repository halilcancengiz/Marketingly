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
                <nav className="lg:flex hidden items-center gap-x-8 mr-[100px]">
                    <NavLink className="flex items-center gap-1 hover:text-primary transition-all duration-300 tb-medium" to="/" >
                        Start
                    </NavLink>
                    <NavLink className="hover:text-primary transition-all duration-300 tb-medium" to="/services" >
                        Dienstleistungen
                    </NavLink>
                    <div className="lg:flex hidden items-center gap-1 group hover:text-primary transition-colors duration-300 relative">
                        <div className="tb-medium">Pläne</div>
                        <IoIosArrowDown className="group-hover:transform group-hover:-rotate-180 transition-transform duration-300" size={16} />
                        <div className="absolute invisible opacity-0 translate-y-[10px] z-[11] pt-[13px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out -left-1/2 top-full  text-neutral-600">
                            <div className="flex flex-col gap-8 rounded-3xl px-[66px] py-[64px] border-[1px] border-net bg-neutral-100">
                                <NavLink className="hover:text-primary transition-all duration-300 flex items-center gap-1 tb-medium" to="/ads-plan" >
                                    <TbPointFilled /> Google Ads
                                </NavLink>
                                <NavLink className="hover:text-primary transition-all duration-300 flex items-center gap-1 tb-medium" to="/seo-plan" >
                                    <TbPointFilled /> SEO
                                </NavLink>
                                <NavLink className="hover:text-primary transition-all duration-300 flex items-center gap-1 tb-medium" to="/company-listing-plan">
                                    <TbPointFilled /> Unternehmenslistung
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="flex items-center gap-x-8">
                    <NavLink className="md:flex hidden" to="/contact">
                        <Button className="tb-bold" variant="primary" size="small">
                            Kontakt
                        </Button>
                    </NavLink>
                    <div className={`${isMobileNavOpen ? "bg-secondary3" : "bg-primary"} rounded-[10px] hover:bg-secondary3 transition-all duration-300 lg:hidden`}>
                        <Hamburger
                            toggled={isMobileNavOpen}
                            toggle={toggleMobileNav}
                            size={20}
                            color="white"
                            duration={0.8}
                        />
                    </div>
                </div>
            </div>
            {/* mobile navbar */}
            <nav ref={mobileNavbarRef} className={`mobile-navbar-shadow z-10 lg:hidden absolute left-0 top-full w-full bg-neutral-100 transition-[max-height] duration-300 ease-in-out overflow-hidden border-b-[1px] border-neutral-300 ${isMobileNavOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="w-full h-full flex flex-col p-6 text-[20px] tb-medium">
                    <NavLink className="flex items-center gap-1 hover:text-primary transition-all duration-300 py-[15px]" to="/" >
                        Start
                    </NavLink>
                    <NavLink className="hover:text-primary transition-all duration-300 py-[15px]" to="/homev2" >
                        Dienstleistungen
                    </NavLink>
                    <NavLink className="flex items-center gap-1 group hover:text-primary transition-colors duration-300 py-[15px]" to="/homev2">
                        Pläne
                        <IoIosArrowDown className="group-hover:transform group-hover:-rotate-180 transition-transform duration-300" size={16} />
                    </NavLink>
                    <div className="py-[15px] mt-[60px]">
                        <NavLink to="/">
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