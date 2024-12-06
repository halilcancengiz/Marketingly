import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
import APP_CONFIG from '../../public/config.ts';
const TermAndConditions = () => {

    const [activeSection, setActiveSection] = useState<string>("");

    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };


    const scrollToSection = (id: string) => {
        console.log("tıklandı");
        const element = document.getElementById(id);
        const yOffset = -80;
        console.log(element)
    
        if (element) {
            const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
            console.log(yPosition)
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScrollSpy = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Görünürlüğün %50'si aktif olması için yeterli
        };

        const observer = new IntersectionObserver(handleScrollSpy, options);

        const sections = document.querySelectorAll("section div[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (

        <section className="pt-[40px] xs:pt-[50px] pb-[60px] md:pt-[60px] md:pb-[79px] lg:pt-[98px] lg:pb-[98px] 3xl:pt-[123px] 3xl:pb-[123px] px-6 relative bg-[#F8F9FF]">

            <Helmet>
                <title>AGB und Datenschutz | MARKETINGLY X</title>
                <meta name="description" content="Erfahren Sie mehr über die Allgemeinen Geschäftsbedingungen, Datenschutzrichtlinien und Nutzungsbedingungen von MARKETINGLY X." />
                <meta property="og:title" content="AGB und Datenschutz" />
                <meta property="og:description" content="Detaillierte Informationen zu unseren Geschäftsbedingungen, Datenschutzrichtlinien und Nutzungsbedingungen." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${APP_CONFIG.base_url}terms-and-conditions`} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col relative">

                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    id="menuItems"
                    className="lg:mt-[63px] lg:mb-0 mb-10 lg:mr-10 min-w-[274px] grid grid-cols-3 gap-[15px] lg:sticky lg:top-5 lg:h-full md:h-[72px] h-[246px]">

                    <div onClick={() => scrollToSection("terms-and-conditions")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] lg:text-start text-center px-5 hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "terms-and-conditions" ? "text-primary" : "text-neutral-800"}`}> Terms and Conditions</div>
                    <div onClick={() => scrollToSection("privacy-policy")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] px-5 lg:text-start text-center hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "privacy-policy" ? "text-primary" : "text-neutral-800"}`}> Privacy Policy</div>
                    <div onClick={() => scrollToSection("user-policy")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] px-5 lg:text-start text-center hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "user-policy" ? "text-primary" : "text-neutral-800"}`}> User Policy</div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.50, duration: 0.3 }}
                    style={{ boxShadow: '0px 4px 22px 0px rgba(8, 15, 52, 0.03)' }}
                    className="flex flex-col h-full rounded-[24px] bg-white w-full lg:pt-[80px] md:pt-[70px] xs:pt-[60px] pt-[50px] lg:px-[91px] md:px-[76px] xs:px-[35px] px-[25px] lg:pb-[108px] md:pb-[90px] xs:pb-[75px] pb-[63px] border border-neutral-300">
                    <div id="terms-and-conditions" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Terms and Conditions</div>
                        <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua massa sed elementum tempus egestas sed sed risus pretium quam amet nulla facilisi morbi tempus iaculis urna <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">et malesuada</a> fames ac turpis egestas sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">Use Terms for Marketing X app</div>
                        <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">Velit sed ullamcorper morbi tincidunt ornare massa eget volutpat est velit egestas dui id ornare arcu. Facilisis sed odio morbi quis commodo vitae proin sagittis nisl rhoncus mattis rhoncus <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">nunc scelerisque</a> viverra mauris in vitae suscipit tellus mauris a purus in massa tempor nec feugiat nisl pretium fusce id nunc sed velit dignissim sodales bibendum at varius vel pharetra pharetra massa massa ultricies mi ornare aenean euismod elementum nisi quis eleifend ut tortor pretium viverra suspendisse potenti nullam ac tortor volutpat commodo sed egestas egestas fringilla phasellus faucibus.</div>
                    </div>
                    <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" />

                    <div id="privacy-policy" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Privacy Policy</div>
                        <div className="text-neutral-600 text-[18px] tb-medium leading-[30.006px]">Enim nec dui nunc mattis enim vulputate eu scelerisque felis imperdiet proin fermentum leo vel proin sed libero enim sed <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">faucibus turpis</a> at lectus urna duis convallis convallis at tellus at urna condimentum mattis pellentesque id nibh nibh cras pulvinar mattis nunc sed.</div>
                        <ol className="md:mt-8 md:mb-10 mt-[26px] xs:mb-[33px] mb-[28px] list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">1. Mollis aliquam ut porttitor leo a diam.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">2. Enim nec dui nunc mattis enim.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">3. Vulputate eu scelerisque felis fermentum leo vel.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">4. Quam lacus suspendisse posuere lorem.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] md:mb-4 mb-[10px]">Cookies and tracking</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base md:mb-8 mb-[26px] leading-[30.006px]">Consequat mauris nunc congue nisi cursus metus aliquam eleifend mi in null dignissim cras tincidunt lobortis feugiat vivamus blandit aliquam etiam erat velit sapien faucibus et molestie ac ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">id cursus</a> metus aliquam eleifend mi in nulla posuere sollicitudin.</div>
                    </div>
                    <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" />

                    <div id="user-policy" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">User Policy</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base md:mb-8 mb-[26px] leading-[30.006px]">Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin amet facilisis magna etiam tempor pellentesque massa placerat duis ultricies lacus sed sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Id interdum velit laoreet id donec ultrices <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">aliquam malesuada</a> bibendum arcu vitae elementum curabitur. Sapien eget mi proin sed libero at erat pellentesque adipiscing commodo at pellentesque elit vivamus at augue eget arcu dictum varius.</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] md:mb-4 mb-[10px] mt-2">User responsibilities</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base leading-[30.006px]">eugiat vivamus at augue eget arcu dictum varius curabitur vitae nunc sed velit dignissim felis eget velit aliquet sagittis id consectetur sit amet consectetur adipiscing elit pellentesque habitant morbi <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">mus mauris</a> vitae ultricies leo integer malesuada id aliquet lectus proin nibh nisl condimentum dolor viverra ipsum nunc.</div>
                        <ul className="pl-10 md:my-8 my-[26px] list-disc">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Mollis aliquam ut porttitor leo a diam.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Enim nec dui nunc mattis enim.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Vulputate eu scelerisque felis fermentum leo vel.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Quam lacus suspendisse posuere lorem.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>


    )
}

export default TermAndConditions