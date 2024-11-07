import { NavLink } from "react-router-dom";
import analytics from "../assets/images/analytics.png";
import search from "../assets/images/search.png";
import system from "../assets/images/system.png";
import Button from "../components/Button";
import { Helmet } from "react-helmet";

const Services = () => {
    console.log(`${import.meta.env.VITE_BASE_URL}/services`)
    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Dienstleistungen - Unsere Services</title>
                <meta name="description" content="Unsere Dienstleistungen auf einen Blick. Google Ads, SEO und Unternehmenslistung für maximale Reichweite und Sichtbarkeit." />
                <meta property="og:title" content="Dienstleistungen - Unsere Services" />
                <meta property="og:description" content="Erfahren Sie mehr über unsere Google Ads Kampagnen, SEO-Optimierung und Unternehmenslistung für maximale Reichweite und Sichtbarkeit." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}services`} />
                {/* <meta property="og:image" content="https://www.yourwebsite.com/path-to-your-image.jpg" /> */}
                <meta name="robots" content="index, follow" />
            </Helmet>

            <section className="relative overflow-hidden z-[1] 2xl:h-[469px] md:h-[362px] h-[265px] flex items-center justify-center bg-secondary1 w-full 3xl:pt-[142px] lg:pt-[114px] md:pt-[91px] xs:pt-[72px] pt-[54px] 3xl:pb-[196px]  lg:pb-[118px] md:pb-[140px] xs:pb-[88px] pb-[100px] px-6">
                <div className="max-w-[540px] w-full flex flex-col text-white z-[3]">
                    <div className="mb-[10px] text-center tb-bold lg:text-[54px] md:text-[45px] xs:text-[38px] text-[32px] lg:leading-[61.02px] md:leading-[50.85px] xs:leading-[42.94px] leading-[36.16px]">Dienstleistungen</div>
                    <div className="text-center text-[18px] tb-medium">Unsere Dienstleistungen auf einen Blick:</div>
                </div>
                <div className="absolute right-0 md:top-0 top-[-60px] lg:w-[170px] md:w-[150px] w-[120px] aspect-square bg-primary flex items-center justify-center">
                    <div className="w-full h-full bg-secondary2 rounded-full"></div>
                </div>
                <div style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }} className="absolute left-0 md:top-0 top-[-25px] lg:w-[170px] md:w-[150px] w-[120px] aspect-square bg-secondary4 flex items-center justify-center z-[1]"></div>
                <div className="absolute lg:-left-[104px] md:-left-[104px] -left-[104px] md:-bottom-0 -bottom-[100px] lg:w-[230px] md:w-[200px] w-[180px] aspect-square bg-secondary3 rounded-full flex items-center justify-center z-[2]"></div>
            </section>

            <section className="md:-mt-28 -mt-20 z-[2] px-6">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center max-w-[1173px] gap-6 w-full mx-auto">

                    <div className="col-span-1 w-full bg-white rounded-[18px] lg:min-h-[500px] py-16 px-6 flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6 ">
                            <img className="object-contain size-[86px] rounded-[10px]" src={analytics} alt="" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Google Ads</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px]">Bezahlte Google Marketingkampagnen – für maximale Reichweite</div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                            <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                            <NavLink to="/seo-plan">
                                <Button className="tb-bold">Details</Button>
                            </NavLink>

                        </div>

                    </div>

                    <div className="col-span-1 w-full bg-white rounded-[18px] lg:min-h-[500px] py-16 px-6 flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={search} alt="" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Seo</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px] lg:line-clamp-3">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen</div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                            <div className="w-[109px] bg-primary h-[2px]"></div>
                            <NavLink to="/ads-plan">
                                <Button className="tb-bold">Details</Button>
                            </NavLink>
                        </div>

                    </div>

                    <div className="col-span-1 w-full bg-white rounded-[18px] lg:min-h-[500px] py-16 px-6 flex flex-col items-center justify-between text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={system} alt="" />
                            <div className="md:text-[24px] text-[22px] tb-bold">Unternehmenslistung</div>
                            <div className="text-neutral-600 text-[18px] tb-medium leading-[30px] lg:line-clamp-3">Sichbarkeit optimieren durch Google-Unternehmenslistung</div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 mt-[20px]">
                            <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                            <NavLink to="/company-listing-plan">
                                <Button className="tb-bold">Details</Button>
                            </NavLink>
                        </div>

                    </div>

                </div>
            </section>

            <section className="3xl:pb-[160px] lg:pb-[128px] md:pb-[102px] xs:pb-[82px] pb-[66px] 3xl:mt-20 lg:mt-16 md:mt-[60px]">
                <div className="bg-primary lg:max-w-[1173px] max-w-[660px] w-full mx-auto lg:pt-[104px] lg:pb-[104px] md:pt-[83px] md:pb-[400px] xs:pt-[60px] xs:pb-[350px] pt-[50px] pb-[320px] 3xl:px-[88px] lg:px-[70px] px-[25px] md:rounded-[24px] xs:rounded:-[20px] rounded-[15px]">
                    <div className="flex flex-col">
                        <div className="md:max-w-[498px] w-full mb-8 md:text-[38px] xs:text-[32px] text-[26px] tb-bold text-white lg:text-start text-center">Lassen Sie uns gemeinsam starten!</div>
                        <div className="flex items-center">
                            <Button className="tb-bold bg-white !text-primary hover:!bg-secondary3 hover:!text-white">Kontakt</Button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Services