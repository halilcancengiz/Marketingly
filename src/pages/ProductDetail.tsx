import circlesImage from "../assets/images/circles.png"
import check from "../assets/images/check.png";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { Helmet } from "react-helmet";

const ProductDetail = () => {
    return (
        <section className="3xl:pt-[95px] lg:pt-[75px] md:pt-[60px] xs:pt-[50px] pt-[40px] 3xl:pb-[136px] lg:pb-[110px] md:pb-[88px] xs:pb-[70px] pb-[60px] px-6 flex items-center justify-center relative">
            <Helmet>
                <title>Premium-Paket - Detaillierte Informationen | MARKETINGLY X</title>
                <meta name="description" content="Entdecken Sie unser Premium-Paket für umfassende Marketinglösungen, inklusive Content-Marketing und erweiterter Analytik." />
                <meta property="og:title" content="Premium-Paket - MARKETINGLY X" />
                <meta property="og:description" content="Unser Premium-Paket bietet umfassende Lösungen für fortgeschrittenes Marketing, von Content-Marketing bis hin zu erweiterten Analysen." />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}product-detail`} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col lg:items-start items-center justify-between z-[2]">
                <div className="lg:mr-10 lg:mb-0 md:mb-[70px] mb-[60px] flex flex-col lg:max-w-[621.69px] max-w-[660px] lg:min-w-[491px] w-full">
                    <div className="size-[90px] border border-neutral-300 md:mb-8 xs:mb-[28px] mb-[25px] rounded-[25px] flex items-center justify-center overflow-hidden">
                        <img src={circlesImage} alt="circle" />
                    </div>
                    <div className="whitespace-nowrap text-neutral-800 tb-bold lg:text-[54px] md:text-[45px] xs:text-[38px] text-[32px] lg:leading-[61px] md:leading-[50px] xs:leading-[42px] leading-[36px] mb-[15px]">
                        Premium Package
                    </div>
                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-[28px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </div>
                    <div className="flex flex-col gap-[15px] mb-10">
                        <div className="flex items-center gap-[13px]">
                            <img className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">All in Standard Plan</div>
                        </div>
                        <div className="flex items-center gap-[13px]">
                            <img className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Content Marketing</div>
                        </div>
                        <div className="flex items-center gap-[13px]">
                            <img className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Advanced Analytics</div>
                        </div>
                        <div className="flex items-center gap-[13px]">
                            <img className="size-6 rounded-full" src={check} alt="check" />
                            <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Premium Support</div>
                        </div>
                    </div>
                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit nunc donec vel sem ut ipsum odio duis vel sem et ornare consequat. Bibendum nibh et eget magna at habitant mauris nisi <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">pellentesque morbi massa</a> in eleifend tempus pellentesque sed pellentesque ridiculus aliquam maecenas turpis vulputate pellentesque maecenas egestas platea dictumst.
                    </div>
                    <ul className="pl-10 lg:mt-8 lg:mb-10 md:mt-[26px] xs:mb-[33px] mb-[28px] list-disc">
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Mollis aliquam ut porttitor leo a diam.</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Enim nec dui nunc mattis enim.</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Vulputate eu scelerisque felis fermentum leo vel.</li>
                        <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Quam lacus suspendisse posuere lorem.</li>
                    </ul>
                    <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-[28px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus elit fermentum adipiscing facilisi eu massa habitant penatibus vitae sed lorem sem facilisi dolor. Faucibus at mattis montes aliquam Iaculis ut morbi nullam enim hac ut donec.
                    </div>
                </div>
                <div className="bg-white md:px-[45px] xs:px-[35px] px-[25px] lg:py-[65px] md:py-[60px] xs:py-[50px] py-[42px] lg:max-w-[503px] max-w-[660px] lg:min-w-[395.79px] w-full border rounded-[20px] sticky top-3">
                    <div className="flex flex-col">
                        <div className="lg:text-[24px] xs:text-[22px] text-[20px] tb-bold mb-[10px] text-neutral-800">Order your package today</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-[28px]">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna
                        </div>
                        <div className="lg:text-[24px] xs:text-[22px] text-[20px] tb-bold mb-[20px] text-neutral-800">$ 2,500.00 USD</div>
                        <NavLink to="/contact">
                            <Button className="w-full tb-bold" variant="primary" size="default">Kontakt</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="absolute lg:visible invisible right-0 top-0 bg-secondary1 lg:w-[37%] lg:h-[537px] z-[1]">
                <div className="w-full relative">
                    <div className="absolute left-0 top-0 bg-primary lg:w-[290px] aspect-square">
                        <div className="absolute top-0 left-0 w-full h-[43%] bg-secondary3 rounded-b-full"></div>
                    </div>
                </div>
                <div className="absolute top-[65.2%] right-0 w-[346px] bg-secondary2 rounded-full aspect-square z-[2]"></div>
                <div style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className="absolute top-full right-0 w-[346px] bg-secondary4 aspect-square"></div>
            </div>

            <div className="absolute lg:invisible visible right-0 bottom-0 bg-secondary1 w-full md:h-[25%] h-[23%] z-[1]">
                <div className="w-full h-full relative ">
                    <div className="absolute left-0 top-0 bg-primary md:w-[290px] w-[35%] aspect-square overflow-hidden">
                        <div className="absolute md:top-0  top-[-5%] md:left-0 left-[-5%]  w-full md:h-[43%] h-full bg-secondary3 md:rounded-b-full md:rounded-none rounded-full"></div>
                    </div>
                    <div className="absolute md:top-0 right-0 md:w-[300px] w-[35%] bg-secondary2 rounded-full aspect-square z-[2]"></div>
                    <div style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className="absolute bg-secondary4 bottom-0 right-0 md:w-[300px] w-[45%] aspect-square z-[1]"></div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail