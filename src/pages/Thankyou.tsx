import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import shapes from "../assets/images/thankspage.png";
import check from "../assets/images/thankcheck.png";
import { Helmet } from "react-helmet";

const Thankyou = () => {
    useEffect(() => {
        const checkImage = document.getElementById("checkImage");
        const shapeImage = document.getElementById("shapeImage");

        const handleMouseMove = (event: any) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            // xOffset ve yOffset değerleri -20px ile 20px arasında olacak şekilde ayarlanır
            const xOffset = ((clientX / innerWidth) * 20) - 10;
            const yOffset = ((clientY / innerHeight) * 20) - 10;

            // checkImage imajı mouse hareketi yönünde
            if (checkImage) {
                checkImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            }

            // shapeImage imajı mouse hareketinin 1/3 oranında ters yönde
            if (shapeImage) {
                shapeImage.style.transform = `translate(${-xOffset / 3}px, ${-yOffset / 3}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Temizlik işlemi: bileşen kaldırıldığında olay dinleyiciyi kaldırın
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='3xl:pt-[95px] lg:pt-[76px] md:pt-[60px] xs:pt-[50px] pt-10 3xl:pb-[220px] lg:pb-[176px] md:pb-[140px] xs:pb-[113px] pb-[90px] bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden'>
            <Helmet>
                <title>Vielen Dank | MARKETINGLY X</title>
                <meta name="description" content="Vielen Dank für Ihre Nachricht! Unser Team wird sich schnellstmöglich bei Ihnen melden." />
                <meta property="og:title" content="Vielen Dank für Ihre Nachricht" />
                <meta property="og:description" content="Das MARKETINGLY X Team wird sich bald bei Ihnen melden. Vielen Dank für Ihr Interesse!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}thank-you`} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div className="max-w-[540px] aspect-[5/3.9] w-full mx-auto lg:mb-[86px] md:mb-[72px] xs:mb-[60px] mb-[50px] relative flex items-center justify-center">
                {/* Shape Image Container */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <img id="shapeImage" src={shapes} alt="" className="w-full h-full object-cover" />
                </div>
                {/* Check Image Container */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <img id="checkImage" className="z-[2] max-w-[320px] object-cover" src={check} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-[640px] w-full">
                <div className="3xl:text-[58px] lg:text-[48px] text-[41px] text-center lg:leading-[59px] md:leading-[49px] leading-[41px] tb-bold mb-5 text-neutral-800">Danke!</div>
                <div className="leading-[30px] text-neutral-600 text-[18px] text-center tb-medium">Vielen Dank für deine Nachricht unser Team wird sich schnellst möglich bei Ihnen melden.</div>
            </div>
            <NavLink to="/" className="mt-10">
                <Button className="tb-bold">Zurück</Button>
            </NavLink>
        </div>
    );
};

export default Thankyou;
