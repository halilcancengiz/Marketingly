import analytics from "../assets/images/analytics.png";
import search from "../assets/images/search.png";
import system from "../assets/images/system.png";
import Button from "../components/Button";

const Services = () => {
    return (
        <div className="flex flex-col">
            <section className="relative overflow-hidden z-[1] 2xl:h-[469px] md:h-[362px] h-[265px] flex items-center justify-center bg-secondary1 w-full 3xl:pt-[142px] lg:pt-[114px] md:pt-[91px] xs:pt-[72px] pt-[54px] 3xl:pb-[196px]  lg:pb-[118px] md:pb-[140px] xs:pb-[88px] pb-[100px] px-6">
                <div className="max-w-[540px] w-full flex flex-col text-white z-[3]">
                    <div className="mb-[10px] text-center tb-bold lg:text-[54px] md:text-[45px] xs:text-[38px] text-[32px] lg:leading-[61.02px] md:leading-[50.85px] xs:leading-[42.94px] leading-[36.16px]">Dienstleistungen</div>
                    <div className="text-center text-[18px] tb-medium">Unsere Dienstleistungen auf einen Blick:</div>
                </div>
                <div className="absolute right-0 md:top-0 top-[-60px] lg:w-[170px] md:w-[150px] w-[120px] aspect-square bg-primary flex items-center justify-center">
                    <div className="w-full h-full bg-secondary2 rounded-full"></div>
                </div>
                <div style={{clipPath:"polygon(0 0, 0% 100%, 100% 100%)"}} className="absolute left-0 md:top-0 top-[-25px] lg:w-[170px] md:w-[150px] w-[120px] aspect-square bg-secondary4 flex items-center justify-center z-[1]"></div>
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
                            <Button className="">Details</Button>
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
                            <Button className="">Details</Button>
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
                            <Button className="">Details</Button>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Services