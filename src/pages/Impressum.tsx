import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import APP_CONFIG from '../../public/config.ts';
import logo from "../assets/images/logo.webp";

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

        if (element) {
            const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScrollSpy = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleScrollSpy, {
            root: null,
            rootMargin: "-80px 0px 0px 0px",
            threshold: 0.3,
        });

        const sections = document.querySelectorAll("div[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <section className="pt-[40px] xs:pt-[50px] pb-[60px] md:pt-[60px] md:pb-[79px] lg:pt-[98px] lg:pb-[98px] 3xl:pt-[123px] 3xl:pb-[123px] px-6 relative bg-[#F8F9FF]">
            <Helmet>
                <title>Impressum von Superagentur</title>
                <meta name="description" content="Rechtliche Informationen, Kontaktdaten und Verantwortlichkeiten von Superagentur in einem Überblick." />
                <meta name="keywords" content="Impressum, rechtliche Informationen, Kontakt, Superagentur" />
                <meta property="og:title" content="Impressum von Superagentur" />
                <meta property="og:description" content="Alle rechtlichen Details und Kontaktdaten Ihrer Full-Service Marketingagentur." />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${APP_CONFIG.base_url}impressum`} />
                <meta property="og:image" content={logo} />
                <link rel="canonical" href={`${APP_CONFIG.base_url}impressum`} />
                <meta charSet="UTF-8" />
                <html lang="de" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Superagentur Marketing",
                            "url": "${APP_CONFIG.base_url}",
                            "logo": "${APP_CONFIG.base_url}assets/images/logo.webp",
                            "sameAs": [
                                "${APP_CONFIG.social_media.facebook}",
                                "${APP_CONFIG.social_media.instagram}",
                                "${APP_CONFIG.social_media.linkedin}"
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col relative">

                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    id="menuItems"
                    className="lg:mt-[63px] lg:mb-0 mb-10 lg:mr-10 min-w-[274px] grid grid-cols-3 gap-[15px] lg:sticky lg:top-5 lg:h-full h-[72px]">

                    <div onClick={() => scrollToSection("impressum")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] lg:text-start text-center px-5 hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "impressum" ? "text-primary" : "text-neutral-800"}`}>Impressum</div>

                </motion.div>

                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.50, duration: 0.3 }}
                    style={{ boxShadow: '0px 4px 22px 0px rgba(8, 15, 52, 0.03)' }}
                    className="flex flex-col h-full rounded-[24px] bg-white w-full lg:pt-[80px] md:pt-[70px] xs:pt-[60px] pt-[50px] lg:px-[91px] md:px-[76px] xs:px-[35px] px-[25px] lg:pb-[108px] md:pb-[90px] xs:pb-[75px] pb-[63px] border border-neutral-300">

                    <h1 id="impressum" className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Anbieter</h1>
                    <div className="md:mb-8 mb-[26px]">
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Superagentur</p>
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Colacy GmbH</p>
                        <h2 className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">Vertreten durch:</h2>
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Brucknerstraße 2, 75015 Bretten</p>
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Geschäftsführung: Savio Montagna, Mehmet Sakar</p>
                    </div>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Kontakt</h2>
                    <div className=":mb-8 mb-[26px]">
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">E-Mail: <a aria-label={`Send an email to ${APP_CONFIG.contact.email}`} href={`mailto:${APP_CONFIG.contact.email}`} className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">{APP_CONFIG.contact.email}</a></p>
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Telefon: <a aria-label={`Call the phone number ${APP_CONFIG.contact.phone}`} href={`tel:${APP_CONFIG.contact.phone}`} className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">{APP_CONFIG.contact.phone}</a></p>
                    </div>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Registereintrag</h2>
                    <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Handelsregister: HRB738045</p>
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Registergericht: Amtsgericht Mannheim</p>
                    </div>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Umsatzsteuer-ID</h2>
                    <p className="md:mb-8 mb-[26px] text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">DE335943401</p>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Angaben zu audiovisuellen Mediendiensten</h2>
                    <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Sitzland: Deutschland</p>
                        <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">Regulierungs- und Aufsichtsbehörde: Landesanstalt für Kommunikation Baden-Württemberg (LFK)</p>
                    </div>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">EU-Streitbeilegung</h2>
                    <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium md:mb-8 mb-[26px]">
                        Durch die Europäische Kommission wird eine Plattform zur Online-Streitbeilegung (OS) bereitgestellt: <a aria-label="Go to the European Commission's Online Dispute Resolution page" href="https://ec.europa.eu/consumers/odr/" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">https://ec.europa.eu/consumers/odr/</a>
                    </p>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px] break-words hyphens-auto">Verbraucherstreitbeilegung gem. § 36 VSBG</h2>
                    <p className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px] ">
                        Wir nehmen nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.
                    </p>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Haftungsausschluss</h2>
                    <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium md:mb-8 mb-[26px]">
                        Wir sind für die Inhalte unserer Internetseiten nach den Maßgaben der allgemeinen Gesetzen verantwortlich. Alle Inhalte werden mit der gebotenen Sorgfalt und nach bestem Wissen erstellt. Soweit wir auf unseren Internetseiten mittels Hyperlink auf Internetseiten Dritter verweisen, können wir keine Gewähr für die fortwährende Aktualität, Richtigkeit und Vollständigkeit der verlinkten Inhalte übernehmen, da diese Inhalte außerhalb unseres Verantwortungsbereichs liegen und wir auf die zukünftige Gestaltung keinen Einfluss haben. Sollten aus Ihrer Sicht Inhalte gegen geltendes Recht verstoßen oder unangemessen sein, teilen Sie uns dies bitte mit.
                        Die rechtlichen Hinweise auf dieser Seite sowie alle Fragen und Streitigkeiten im Zusammenhang mit der Gestaltung dieser Internetseite unterliegen dem Recht der Bundesrepublik Deutschland.
                    </p>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Datenschutzhinweis</h2>
                    <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium md:mb-8 mb-[26px]">
                        Unsere Datenschutzerklärung finden Sie unter: <a aria-label="Go to the Superagentur page for privacy policy and terms" href="https://www.superagentur-marketing.de/datenschutz-und-agbs" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">www.superagentur-marketing.de/datenschutz-und-agbs</a>
                    </p>

                    <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Urheberrechtshinweis</h2>
                    <p className="text-neutral-600 xs:text-[18px] text-base xs:leading-[30.006px] leading-[26px] tb-medium">
                        Die auf unserer Internetseite vorhandenen Texte, Bilder, Fotos, Videos oder Grafiken unterliegen in der Regel dem Schutz des Urheberrechts. Jede unberechtigte Verwendung (insbesondere die Vervielfältigung, Bearbeitung oder Verbreitung) dieser urheberrechtsgeschützten Inhalte ist daher untersagt. Wenn Sie beabsichtigen, diese Inhalte oder Teile davon zu verwenden, kontaktieren Sie uns bitte im Voraus unter den oben stehenden Angaben. Soweit wir nicht selbst Inhaber der benötigten urheberrechtlichen Nutzungsrechte sein sollten, bemühen wir uns, einen Kontakt zum Berechtigten zu vermitteln.
                    </p>

                    {/* <h2 className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Social-Media-Profile</h2>
                        <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">
                            Dieses Impressum gilt auch für folgende Social-Media-Profile: <br />
                            <a href={APP_CONFIG.social_media.instagram} target="_blank" className="hover:text-secondary3 underline break-words text-primary tb-medium transition-all duration-300">Instagram: {APP_CONFIG.social_media.instagram}</a> <br />
                            <a href={APP_CONFIG.social_media.facebook} target="_blank" className="hover:text-secondary3 underline break-words text-primary tb-medium transition-all duration-300">Facebook: {APP_CONFIG.social_media.facebook}</a> <br />
                            <a href={APP_CONFIG.social_media.x} target="_blank" className="hover:text-secondary3 underline break-words text-primary tb-medium transition-all duration-300">X (ehemals Twitter): {APP_CONFIG.social_media.x}</a> <br />
                            <a href={APP_CONFIG.social_media.youtube} target="_blank" className="hover:text-secondary3 underline break-words text-primary tb-medium transition-all duration-300">YouTube: {APP_CONFIG.social_media.youtube}</a> <br />
                            <a href={APP_CONFIG.social_media.linkedin} target="_blank" className="hover:text-secondary3 underline break-words text-primary tb-medium transition-all duration-300">LinkedIn: {APP_CONFIG.social_media.linkedin}</a>
                        </div> */}
                </motion.div>
            </div>
        </section>
    );
}

export default TermAndConditions;
