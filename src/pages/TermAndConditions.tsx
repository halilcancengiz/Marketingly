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
        const handleScrollSpy = () => {
            // Tüm section'ları seçiyoruz
            const sections = document.querySelectorAll("#datenschutz, #websiteAGB");

            // Mevcut scroll pozisyonunu hesaplıyoruz
            const scrollPosition = window.scrollY + 100; // Biraz offset ekliyoruz

            sections.forEach((section) => {
                const sectionElement = section as HTMLElement;

                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop;
                    const sectionHeight = sectionElement.offsetHeight;

                    // Scroll pozisyonu section'ın içinde mi?
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionElement.id);
                    }
                }
            });
        };

        // Scroll event'ini dinliyoruz
        window.addEventListener("scroll", handleScrollSpy);

        // Sayfa yüklendiğinde bir kez çalıştırıyoruz
        handleScrollSpy();

        // Event temizleme
        return () => {
            window.removeEventListener("scroll", handleScrollSpy);
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
                    className="lg:mt-[63px] lg:mb-0 mb-10 lg:mr-10 min-w-[274px] grid grid-cols-2 gap-[15px] lg:sticky lg:top-5 lg:h-full md:h-[72px] h-[144px]">

                    <div onClick={() => scrollToSection("datenschutz")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] lg:text-start text-center px-5 hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "datenschutz" ? "text-primary" : "text-neutral-800"}`}>Datenschutz</div>
                    <div onClick={() => scrollToSection("websiteAGB")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] px-5 lg:text-start text-center hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "websiteAGB" ? "text-primary" : "text-neutral-800"}`}>Website AGB</div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.50, duration: 0.3 }}
                    style={{ boxShadow: '0px 4px 22px 0px rgba(8, 15, 52, 0.03)' }}
                    className="flex flex-col h-full rounded-[24px] bg-white w-full lg:pt-[80px] md:pt-[70px] xs:pt-[60px] pt-[50px] lg:px-[91px] md:px-[76px] xs:px-[35px] px-[25px] lg:pb-[108px] md:pb-[90px] xs:pb-[75px] pb-[63px] border border-neutral-300">
                    {/* <div id="terms-and-conditions" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Datenschutz</div>
                        <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua massa sed elementum tempus egestas sed sed risus pretium quam amet nulla facilisi morbi tempus iaculis urna <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">et malesuada</a> fames ac turpis egestas sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">Use Terms for Marketing X app</div>
                        <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">Velit sed ullamcorper morbi tincidunt ornare massa eget volutpat est velit egestas dui id ornare arcu. Facilisis sed odio morbi quis commodo vitae proin sagittis nisl rhoncus mattis rhoncus <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">nunc scelerisque</a> viverra mauris in vitae suscipit tellus mauris a purus in massa tempor nec feugiat nisl pretium fusce id nunc sed velit dignissim sodales bibendum at varius vel pharetra pharetra massa massa ultricies mi ornare aenean euismod elementum nisi quis eleifend ut tortor pretium viverra suspendisse potenti nullam ac tortor volutpat commodo sed egestas egestas fringilla phasellus faucibus.</div>
                    </div> */}
                    {/* <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" /> */}
                    <div id="datenschutz" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Datenschutz</div>

                    </div>
                    <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" />
                    <div id="websiteAGB" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Website AGB</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">1. Geltungsbereich</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">1.1. Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Website der Colacy GmbH (im Folgenden „Superagentur“) sowie aller angebotenen Inhalte, Dienste und Funktionen.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">1.2. Abweichende oder ergänzende Bedingungen des Nutzers finden keine Anwendung, es sei denn, die Superagentur stimmt ihrer Geltung ausdrücklich zu.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">2. Nutzung der Website</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">2.1. Die Nutzung der Website ist ausschließlich zu rechtmäßigen Zwecken gestattet.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">2.2. Nutzer verpflichten sich, keine Inhalte zu übermitteln, die gegen geltendes Recht oder Rechte Dritter verstoßen (z. B. urheberrechtlich geschütztes Material ohne Genehmigung, beleidigende Inhalte).</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">2.3. Der Betreiber behält sich das Recht vor, Inhalte zu entfernen, die unangemessen oder rechtswidrig sind.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">3. Registrierung und Nutzerkonto</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">3.1. Einige Dienste oder Funktionen der Website können eine Registrierung erfordern.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">3.2. Nutzer sind verpflichtet, wahrheitsgemäße und vollständige Angaben zu machen.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">3.3. Das Nutzerkonto ist nicht übertragbar, und Nutzer sind für die Sicherheit ihrer Zugangsdaten verantwortlich.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">4. Haftungsausschluss</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">4.1. Die Superagentur haftet nur bei Vorsatz oder grober Fahrlässigkeit, ausgenommen sind Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">4.2. Für die Inhalte verlinkter externer Websites wird keine Haftung übernommen. Die Verantwortung für diese Inhalte liegt bei den jeweiligen Anbietern oder Betreibern.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">4.3. Die Verfügbarkeit der Website wird nicht garantiert. Insbesondere Wartungsarbeiten, technische Probleme oder höhere Gewalt können die Nutzung einschränken.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">5. Urheberrecht und Nutzungsrechte</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">5.1. Alle auf der Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, Videos, etc.) sind urheberrechtlich geschützt.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">5.2. Eine Nutzung, Vervielfältigung oder Verbreitung der Inhalte ist nur mit ausdrücklicher schriftlicher Zustimmung der Superagentur zulässig.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">6. Datenschutz</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">6.1. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Informationen zum Umgang mit Daten finden Sie in unserer Datenschutzerklärung unter <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">www.superagentur-marketing.de/datenschutz-und-agbs</a>.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">7. Änderungen der AGB</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">7.1. Die Superagentur behält sich das Recht vor, diese AGB jederzeit zu ändern.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">7.2. Änderungen treten in Kraft, sobald sie auf der Website veröffentlicht werden. Es obliegt den Nutzern, sich regelmäßig über Änderungen zu informieren.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">8. Schlussbestimmungen</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">8.1. Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">8.2. Gerichtsstand ist der Sitz der Colacy GmbH, sofern gesetzlich zulässig.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">8.3. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">9. Verbraucherinformationen zur Streitbeilegung</div>
                        <ol className="md:my-4 my-3 list-inside pl-5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">9.1. Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">https://ec.europa.eu/consumers/odr/</a> .</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">9.2. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</li>
                        </ol>
                        {/* <div className="text-neutral-600 text-[18px] tb-medium leading-[30.006px]">Enim nec dui nunc mattis enim vulputate eu scelerisque felis imperdiet proin fermentum leo vel proin sed libero enim sed <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">faucibus turpis</a> at lectus urna duis convallis convallis at tellus at urna condimentum mattis pellentesque id nibh nibh cras pulvinar mattis nunc sed.</div>

                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] md:mb-4 mb-[10px]">Cookies and tracking</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base md:mb-8 mb-[26px] leading-[30.006px]">Consequat mauris nunc congue nisi cursus metus aliquam eleifend mi in null dignissim cras tincidunt lobortis feugiat vivamus blandit aliquam etiam erat velit sapien faucibus et molestie ac ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">id cursus</a> metus aliquam eleifend mi in nulla posuere sollicitudin.</div> */}
                    </div>


                    {/* <div id="user-policy" className="flex flex-col">
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
                    </div> */}
                </motion.div>
            </div>
        </section>


    )
}

export default TermAndConditions