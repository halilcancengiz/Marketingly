import Button from "../components/Button"
import contactPeopleImage from "../assets/images/homeV1-hero-section-small.png"
import chart from "../assets/images/chart.png"
import analytics from "../assets/images/analytics.png"
import search from "../assets/images/search.png"
import system from "../assets/images/system.png"


export const HomeV1 = () => {
    return (
        <main className="flex flex-col">
            <section className="flex items-center justify-center h-full relative">
                <div className="max-w-[1221px] h-full w-full mx-auto lg:py-[116px] py-[60px] px-6 grid lg:grid-cols-2 grid-cols-1 items-center justify-center lg:gap-8 gap-20 relative ">
                    <div className="col-span-1 lg:max-w-auto max-w-[460px] lg:mx-0 mx-auto lg:text-start text-center flex flex-col lg:mr-10">
                        <div className="text-primary uppercase mb-5 font-medium text-base tracking-[1.6px]">Marketing Agentur</div>
                        <div className="lg:text-[54px] text-[45px] lg:leading-[61px] leading-[50.85px] font-bold mb-5 text-neutral-800">Maximaler Erfolg mit Google!</div>
                        <div className="leading-[30px] text-neutral-600 mb-12 text-[18px]">Mit uns erreichen Sie Menschen dort wo sie suchen, auf Google - durch Ads, Seo & Unternehmenslistungen.</div>
                        <div className="flex items-center gap-7">
                            <Button className="w-full" variant="primary" size="default">Kontakt</Button>
                            <Button className="w-full" variant="secondary" size="default">Mehr Infos</Button>
                        </div>
                    </div>
                    {/* lg images */}
                    <div className="col-span-1 lg:flex hidden justify-end  relative lg:pl-[62px]">
                        <img src={chart} className="homev1-hero-section-shadow rounded-[18px] w-full border-[1px] border-neutral-300" alt="chart" />
                        <div className="absolute w-full top-1/2 -translate-y-1/2 flex pr-[333px]">
                            <img src={contactPeopleImage} className="homev1-hero-section-shadow rounded-[18px] min-w-[180px] object-contain" alt="dsa" />
                        </div>
                    </div>
                    {/* mobile images */}
                    <div className="lg:hidden flex max-w-[660px] w-full mx-auto relative pr-20">
                        <img src={chart} className="homev1-hero-section-shadow rounded-[18px] max-w-[500px] w-full border-[1px] border-neutral-300" alt="chart" />
                        <div className="absolute w-full top-1/2 -translate-y-1/2 flex right-0 pl-60 justify-end">
                            <img src={contactPeopleImage} className="homev1-hero-section-shadow rounded-[18px] min-w-[180px] max-w-[277px] object-contain" alt="dsa" />
                        </div>
                    </div>
                </div>
                <div className="absolute lg:visible invisible lg:right-0 bg-primary 3xl:w-[45%] w-[38%] h-full -z-[1] overflow-y-clip">
                    <div className="grid grid-cols-2 h-full relative">
                        <div className="col-span-2 grid grid-cols-2">
                            <div className="col-span-1 bg-secondary1"></div>
                            <div style={{ clipPath: "polygon(100% 0, 0 0, 100% 72%)" }} className="col-span-1 bg-secondary3"></div>
                        </div>

                        <div className="col-span-2 grid grid-cols-2 ">
                            <div className="col-span-1 invisible"></div>
                            <div className="bg-secondary1 col-span-1"></div>
                        </div>

                        <div className="bg-secondary2 absolute -left-[70px] rounded-full -bottom-40 w-[60%] aspect-square"></div>
                    </div>
                </div>

                <div className="absolute lg:invisible visible bottom-0 lg:right-0 bg-primary w-full md:h-[427px] h-[346px] -z-[1] overflow-y-clip">
                    <div className="grid grid-cols-2 h-full relative">
                        <div className="col-span-2 grid grid-cols-2">
                            <div className="col-span-1 bg-secondary1"></div>
                            <div className="col-span-1 flex items-start justify-end">
                                <div style={{ clipPath: "polygon(100% 0, 45% 0, 100% 100%)" }} className=" w-[90%] h-1/2 aspect-square  bg-secondary3"></div>

                            </div>
                        </div>

                        <div className="col-span-2 grid grid-cols-2 invisible">
                            <div className="col-span-1 invisible"></div>
                            <div className="bg-secondary1 col-span-1"></div>
                        </div>

                        <div className="bg-secondary2 absolute left-0 rounded-full -bottom-20 w-[40%] aspect-square"></div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1221px] px-6 w-full mx-auto lg:py-[176px] md:py-[140px] py-[113px] flex flex-col">
                <div className="text-primary uppercase mb-5 font-medium text-base lg:text-start text-center tracking-[1.6px]">Unsere Dienstleistungen</div>
                <div className="grid lg:grid-cols-2 grid-cols-1 items-end mb-[60px] lg:text-start text-center">
                    <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] font-bold text-neutral-800 lg:mb-0 mb-7">Mit uns an deiner Seite maximierst du deine Sichtbarkeit!</div>
                    <div className="col-span-1">
                        <div className="flex items-center gap-7">
                            <Button className="w-full whitespace-nowrap" variant="primary" size="default">Kontakt</Button>
                            <Button className="w-full whitespace-nowrap" variant="secondary" size="default">Mehr Details</Button>
                        </div>
                    </div>
                </div>

                <div className="gap-6 flex items-start justify-center flex-wrap">
                    <div className="card rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={analytics} alt="" />
                            <div className="md:text-[24px] text-[22px] font-bold">Google Ads</div>
                            <div className="text-neutral-600 text-[18px] font-medium leading-[30px]">Bezahlte Google Marketingkampagnen – für maximale Reichweite</div>
                        </div>
                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                    </div>
                    <div className="card rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={search} alt="" />
                            <div className="md:text-[24px] text-[22px] font-bold">Seo</div>
                            <div className="text-neutral-600 text-[18px] font-medium leading-[30px]">Organische Reichweite steigern durch bessere Platzierungen in Suchmaschinen</div>
                        </div>

                        <div className="w-[109px] bg-primary h-[2px]"></div>
                    </div>
                    <div className="card rounded-[18px] py-16 px-6 flex min-h-[410px] flex-col items-center justify-between gap-6 text-center homev1-card-shadow border-[1px] border-neutral-300">
                        <div className="flex items-center flex-col gap-6">
                            <img className="object-contain size-[86px] rounded-[10px]" src={system} alt="" />
                            <div className="md:text-[24px] text-[22px] font-bold">Unternehmenslistung</div>
                            <div className="text-neutral-600 text-[18px] font-medium leading-[30px]">Sichbarkeit optimieren durch Google-Unternehmenslistung</div>
                        </div>

                        <div className="w-[109px] bg-secondary2 h-[2px]"></div>
                    </div>
                </div>
            </section>
        </main>

    )
}

