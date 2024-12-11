import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
import APP_CONFIG from '../../public/config.ts';
import logo from "../assets/images/logo.webp"
import Button from "../components/Button.tsx";
import { HiOutlineDownload } from "../assets/icons/icons.tsx"
import agbpdf from "../../public/agb.pdf"
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
        const handleScrollSpy = () => {
            // Tüm section'ları seçiyoruz
            const sections = document.querySelectorAll("#datenschutz,#agb, #websiteAGB");

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
                <title>Datenschutzrichtlinien von Superagentur</title>
                <meta name="description" content="Informieren Sie sich, wie Superagentur Ihre Daten schützt und DSGVO-konform verwendet." />
                <meta name="keywords" content="Datenschutz, Datenverwendung, Datensicherheit, DSGVO" />
                <meta property="og:title" content="Datenschutzrichtlinien von Superagentur" />
                <meta property="og:description" content="Ihre Privatsphäre ist uns wichtig. Lesen Sie, wie wir Ihre Daten sicher und verantwortungsvoll behandeln." />

                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={APP_CONFIG.base_url} />
                <meta property="og:image" content={logo} />
                <link rel="canonical" href={APP_CONFIG.base_url} />
                <meta charSet="UTF-8" />
                <html lang="de" />
                {/* Structured Data for Logo */}
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
                    className="lg:mt-[63px] lg:mb-0 mb-10 lg:mr-10 min-w-[274px] grid grid-cols-3 gap-[15px] lg:sticky lg:top-5 lg:h-full md:h-[72px] h-[216px]">

                    <div onClick={() => scrollToSection("datenschutz")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] lg:text-start text-center px-5 hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "datenschutz" ? "text-primary" : "text-neutral-800"}`}>Datenschutz</div>
                    <div onClick={() => scrollToSection("agb")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] px-5 lg:text-start text-center hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "agb" ? "text-primary" : "text-neutral-800"}`}>AGB</div>
                    <div onClick={() => scrollToSection("websiteAGB")} className={`menuItemShadow  h-[72px] lg:col-span-3 md:col-span-1 col-span-3 py-[25px] lg:px-[25px] px-5 lg:text-start text-center hover:text-primary bg-white rounded-[10px] text-[18px] leading-[19.998px] tb-bold cursor-pointer transition-all border border-white duration-300 ${activeSection === "websiteAGB" ? "text-primary" : "text-neutral-800"}`}>Website AGB</div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: 0.50, duration: 0.3 }}
                    style={{ boxShadow: '0px 4px 22px 0px rgba(8, 15, 52, 0.03)' }}
                    className="flex flex-col h-full rounded-[24px] bg-white overflow-hidden  w-full lg:pt-[80px] md:pt-[70px] xs:pt-[60px] pt-[50px] lg:px-[91px] md:px-[76px] xs:px-[35px] px-[25px] lg:pb-[108px] md:pb-[90px] xs:pb-[75px] pb-[63px] border border-neutral-300">
                    {/* <div id="terms-and-conditions" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Datenschutz</div>
                        <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua massa sed elementum tempus egestas sed sed risus pretium quam amet nulla facilisi morbi tempus iaculis urna <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">et malesuada</a> fames ac turpis egestas sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] lg:mb-4 mb-[10px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px] mt-2">Use Terms for Marketing X app</div>
                        <div className="text-neutral-600 text-[18px] tb-medium md:mb-8 mb-[26px] leading-[30.006px]">Velit sed ullamcorper morbi tincidunt ornare massa eget volutpat est velit egestas dui id ornare arcu. Facilisis sed odio morbi quis commodo vitae proin sagittis nisl rhoncus mattis rhoncus <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">nunc scelerisque</a> viverra mauris in vitae suscipit tellus mauris a purus in massa tempor nec feugiat nisl pretium fusce id nunc sed velit dignissim sodales bibendum at varius vel pharetra pharetra massa massa ultricies mi ornare aenean euismod elementum nisi quis eleifend ut tortor pretium viverra suspendisse potenti nullam ac tortor volutpat commodo sed egestas egestas fringilla phasellus faucibus.</div>
                    </div> */}
                    {/* <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" /> */}
                    <div id="datenschutz" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Datenschutz</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">1. Einleitung</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base leading-[30.006px] my-[20px]">
                            Diese Website wird betrieben von: Colacy GmbH (Superagentur). <br />
                            Es ist uns sehr wichtig, mit den Daten unserer Website-Besucher
                            vertrauensvoll umzugehen und sie bestmöglich zu schützen. Aus diesem
                            Grund leisten wir alle Anstrengungen, um die Anforderungen der DSGVO zu
                            erfüllen. <br />
                            Im Folgenden erläutern wir Ihnen, wie wir Ihre Daten auf unserer Webseite
                            verarbeiten. Dazu verwenden wir eine möglichst klare und transparente
                            Sprache, damit Sie wirklich verstehen, was mit Ihren Daten passiert.
                        </div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">2. Allgemeine Informationen</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5 flex flex-col gap-[20px]">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.1. Verarbeitung von personenbezogenen Daten und andere Begriffe: <br />
                                Datenschutz gilt bei der Verarbeitung von personenbezogenen Daten.
                                Personenbezogen meint alle Daten, mit denen Sie persönlich identifiziert
                                werden können. Das ist z.B. die IP-Adresse des Geräts (PC, Laptop,
                                Smartphone, etc.) vor dem Sie gerade sitzen. Verarbeitet werden solche
                                Daten dann, wenn ‚irgendetwas damit passiert‘. Hier wird z.B. die IP vom
                                Browser an unseren Provider übermittelt und dort automatisch gespeichert.
                                Das ist dann eine Verarbeitung (gemäß Art. 4 Nr. 2 DSGVO) von
                                personenbezogenen Daten (nach Art. 4 Nr. 1 DSGVO). <br />
                                Diese und weitere gesetzlichen Definitionen sind in Art. 4 DSGVO zu finden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.2. Anzuwendende Vorschriften/ Gesetze – DSGVO, BDSG und TDDDG: <br />
                                Der Umfang des Datenschutzes wird durch Gesetze geregelt. Das sind in
                                diesem Fall die DSGVO (Datenschutzgrundverordnung) als europäische
                                Verordnung und das BDSG (Bundesdatenschutzgesetz) als nationales
                                Gesetz. <br />
                                Außerdem ergänzt das TDDDG die Vorschriften aus der DSGVO, soweit es
                                sich um den Einsatz von Cookies handelt.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.3. Der Verantwortliche: <br />
                                Verantwortlich für die Datenverarbeitung auf dieser Website ist der
                                Verantwortliche im Sinne der DSGVO. Das ist diejenige natürliche oder
                                juristische Person, die allein oder gemeinsam mit anderen über die Zwecke
                                und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. <br />
                                Den Verantwortlichen erreichen Sie unter: <br />
                                Colacy GmbH <br />
                                Brucknerstraße 2, 75015 Bretten <br />
                                <a href="mailto:kontakt@superagentur-marketing.de" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">kontakt@superagentur-marketing.de</a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.4. So werden Daten auf dieser Website grundsätzlich verarbeitet: <br />
                                Wie wir bereits festgestellt haben, gibt es Daten (z.B. IP-Adresse), die
                                automatisch erhoben werden. Diese Daten werden überwiegend für die
                                technische Bereitstellung der Homepage benötigt. Soweit wir darüber hinaus
                                personenbezogene Daten verwenden oder andere Daten erheben, klären wir
                                Sie darüber auf bzw. fragen nach einer Einwilligung. <br />
                                Andere personenbezogene Daten teilen Sie uns bewusst mit. <br />
                                Detaillierte Informationen hierzu erhalten Sie weiter unten.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.5. Ihre Rechte:
                                Die DSGVO stattet Sie mit umfassenden Rechten aus. Diese sind z.B. die
                                unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer
                                gespeicherten personenbezogenen Daten. Außerdem können Sie die
                                Berichtigung, Sperrung oder Löschung dieser Daten verlangen oder sich bei
                                der zuständigen <span className="break-all">Datenschutzaufsichtsbehörde</span> beschweren. Eine erteilte
                                Einwilligung können Sie jederzeit widerrufen.
                                Wie diese Rechte im Detail aussehen und wie sie wahrzunehmen sind, finden
                                Sie im letzten Abschnitt dieser Datenschutzerklärung.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.6. Datenschutz – Unsere Sicht: <br />
                                Datenschutz ist für uns mehr als nur eine lästige Pflicht! Personenbezogene
                                Daten haben einen großen Wert und ein achtsamer Umgang mit diesen Daten
                                sollte in unserer digitalisierten Welt selbstverständlich sein. Außerdem sollen
                                Sie als Website-Besucher in der Lage sein, selbst zu entscheiden, was, wann und durch wen mit Ihren Daten „passiert". Deswegen verpflichten wir uns, alle
                                gesetzlichen Bestimmungen einzuhalten, erheben nur die für uns
                                notwendigen Daten und behandeln diese selbstverständlich vertraulich.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.7. Weitergabe und Löschung: <br />
                                Die Weitergabe und Löschung von Daten sind ebenfalls wichtige und sensible
                                Themen. Deswegen möchten wir Sie vorab kurz über unsere generelle
                                Herangehensweise hierzu informieren. <br />
                                Eine Weitergabe der Daten findet nur aufgrund einer Rechtsgrundlage und
                                nur dann statt, wenn dies unumgänglich ist. Dies kann insbesondere dann der
                                Fall sein, wenn es sich um einen sogenannten Auftragsverarbeiter handelt
                                und ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO geschlossen
                                wurde. <br />
                                Wir löschen Ihre Daten dann, wenn der Zweck und die Rechtsgrundlage zur
                                Verarbeitung wegfallen und der Löschung zudem keine anderen gesetzlichen
                                Verpflichtungen entgegenstehen. Einen ‚guten' Überblick darüber gibt auch
                                Art. 17 DSGVO. <br />
                                Alle weiterführenden Informationen entnehmen Sie bitte dieser
                                Datenschutzerklärung und wenden sich bei konkreten Fragen an den
                                Verantwortlichen.


                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.8. Hosting: <br />
                                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf
                                dieser Website erfasst werden, werden auf den Servern des Hosters
                                gespeichert. Hierbei handelt es sich zum einen um die automatisch
                                erhobenen und gespeicherten Logfiles (näheres dazu siehe unten), wie auch
                                um alle sonstigen Daten, die die Website-Besucher angeben. <br />
                                Das externe Hosting erfolgt zum Zwecke einer sicheren, schnelle und
                                zuverlässigen Bereitstellung unserer Website und dient in diesem
                                Zusammenhang der Vertragserfüllung gegenüber unseren potenziellen und
                                bestehenden Kunden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a, b und f DSGVO,
                                sowie § 25 Abs. 1 TDDDG, soweit eine Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Website-
                                Besuchers oder Users im Sinne des TDDDG umfasst. <br />
                                Unser Hoster verarbeitet nur solche Daten, die zur Erfüllung seiner
                                Leistungspflicht erforderlich sind und agiert als unser Auftragsverarbeiter, das
                                heißt, er unterliegt unseren Weisungen. Wir haben einen entsprechenden
                                Vertrag über die Auftragsverarbeitung mit unserem Hoster geschlossen. <br />
                                Folgenden Hoster setzen wir ein: <br />
                                IONOS <br />
                                IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland. <br />
                                <a href="mailto:info@ionos.de" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">info@ionos.de</a> <br />
                                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">https://www.ionos.de/terms-gtc/datenschutzerklaerung/.</a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.9. Rechtsgrundlagen: <br />
                                Die Verarbeitung von personenbezogenen Daten benötigt immer eine
                                Rechtsgrundlage. Die DSGVO sieht in Art. 6 Abs. 1 Satz 1 folgende <br />
                                Möglichkeiten vor: <br />
                                <ul className="pl-10 my-[20px]">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">a)</span>Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie
                                        betreffenden personenbezogenen Daten für einen oder mehrere
                                        bestimmte Zwecke gegeben;
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">b)</span>die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
                                        Vertragspartei die betroffene Person ist, oder zur Durchführung
                                        vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
                                        betroffenen Person erfolgen;
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">c)</span>die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung
                                        erforderlich, der der Verantwortliche unterliegt;
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">d)</span>die Verarbeitung ist erforderlich, um lebenswichtige Interessen der
                                        betroffenen Person oder einer anderen natürlichen Person zu
                                        schützen;
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">e)</span>die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich,
                                        die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt
                                        erfolgt, die dem Verantwortlichen übertragen wurde;
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">f)</span>die Verarbeitung ist zur Wahrung der berechtigten Interessen des
                                        Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
                                        Interessen oder Grundrechte und Grundfreiheiten der betroffenen
                                        Person, die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen
                                        Person um ein Kind handelt.
                                    </li>
                                </ul>
                                In den folgenden Abschnitten werden wir Ihnen die konkrete Rechtsgrundlage
                                zu der jeweiligen Verarbeitung nennen.
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">3. Das passiert auf unserer Website</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base leading-[30.006px] my-[20px]">
                            Durch den Besuch auf unserer Website verarbeiten wir personenbezogene
                            Daten von Ihnen. <br />
                            Um diese Daten bestmöglich gegen einen unbefugten Eingriff durch Dritte zu
                            schützen, benutzen wir eine SSL- bzw. TLS-Verschlüsselung. Diese
                            verschlüsselte Verbindung erkennen Sie daran, dass in der Adresszeile Ihres
                            Browsers ein https:// oder ein Schloss-Symbol abgebildet ist. <br />
                            Im Folgenden erfahren Sie, welche Daten beim Besuch unserer Website
                            erhoben werden, zu welchem Zweck dies geschieht und aufgrund welcher
                            Rechtsgrundlage. <br />
                        </div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5 flex flex-col gap-[20px]">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.1. Datenerhebung beim Aufruf der Website: <br />
                                Durch das Aufrufen der Website werden automatisch Informationen in
                                sogenannten Server-Log-Dateien gespeichert. Es handelt sich um folgende
                                Informationen: <br />
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Browsertyp und Browserversion</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">verwendetes Betriebssystem</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Referrer URL</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Hostname des zugreifenden Rechners</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Uhrzeit der Serveranfrage</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">IP-Adresse</li>
                                </ul>

                                Diese Daten werden vorübergehend benötigt, um Ihnen unsere Website
                                dauerhaft und problemlos anzeigen zu können. Insbesondere dienen diese
                                Daten damit folgenden Zwecken: <br />

                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Systemstabilität der Website</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Fehlerbehebung auf der Website</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Hostname des zugreifenden Rechners</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Verbindungsaufbau zur Website</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Darstellung der Website</li>
                                </ul>

                                Die Datenverarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO und erfolgt
                                aus unserem berechtigten Interesse an der Verarbeitung dieser Daten,
                                insbesondere aus dem Interesse an der Funktionalität der Website sowie
                                deren Sicherheit. <br />
                                Diese Daten werden nach Möglichkeit pseudonymisiert gespeichert und nach
                                Erreichen des jeweiligen Zwecks gelöscht. <br />
                                Soweit die Server-Log-Dateien die Identifizierung der betroffenen Person
                                ermöglicht, werden die Daten maximal für einen Zeitraum von 14 Tagen
                                gespeichert. Eine Ausnahme besteht dann, wenn ein sicherheitsrelevantes
                                Ereignis auftritt. In diesem Fall werden die Server-Log-Dateien bis zur
                                Beseitigung und abschließenden Aufklärung des sicherheitsrelevanten
                                Ereignisses gespeichert. <br />
                                Im Übrigen findet eine Zusammenführung mit anderen Daten findet nicht statt.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.2. Cookies
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.2.1. Allgemeines <br />
                                Diese Website nutzt sogenannte Cookies. Dabei handelt es sich um einen
                                Datensatz, eine Information, die im Browser Ihres Endgeräts gespeichert wird
                                und in einer Relation zu unserer Website steht. <br />
                                Durch das Setzen von Cookies kann dem Besucher insbesondere die
                                Navigation der Website erleichtert werden. <br />
                                In unserem Cookie-Consent-Tool finden Sie alle Informationen über die
                                Cookies, die wir auf unserer Website (ggf. nach Ihrer Einwilligung) im Einsatz
                                haben.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.2.2. Ablehnen von Cookies <br />
                                Alle Cookies, die nicht technisch notwendig sind, können Sie direkt über unser
                                Cookie-Consent-Tool verwalten. <br />
                                Das Setzen von Cookies kann verhindert werden, indem Sie die Einstellungen
                                Ihres Browsers anpassen. <br />
                                Hier finden Sie die entsprechenden Verlinkungen zu häufig benutzten
                                Browsern: <br />
                                Mozilla Firefox: <br />
                                <a href="https://support.mozilla.org/de/kb/cookies-und-website-datenin-firefox-loschen?redirectslug=Cookies+l%C3%B6schen&redirectlocale=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://support.mozilla.org/de/kb/cookies-und-website-datenin-firefox-loschen?redirectslug=Cookies+l%C3%B6schen&redirectlocale=de
                                </a>
                                <br />
                                Google Chrome: <br />
                                <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=de
                                </a>
                                <br />
                                Microsoft Edge: <br />
                                <a href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d
                                </a> <br />
                                Safari: <br />
                                <a href="https://support.apple.com/de-de/guide/mdm/mdmf7d5714d4/web" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://support.apple.com/de-de/guide/mdm/mdmf7d5714d4/web
                                </a> und <br />
                                <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://support.apple.com/de-de/guide/safari/sfri11471/mac
                                </a>. Sie einen
                                anderen Browser nutzen, empfiehlt es sich den Namen Ihres Browsers und
                                ‚Cookies löschen und verwalten' in eine Suchmaschine einzugeben und dem
                                offiziellen Link zu Ihrem Browser zu folgen. <br />
                                Alternativ können Sie Ihre Cookie-Einstellungen auch unter <br />
                                <a href=" www.aboutads.info/choices/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    www.aboutads.info/choices/
                                </a> <br />
                                <a href="www.youronlinechoices.com" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    www.youronlinechoices.com
                                </a> <br />
                                Wir müssen Sie allerdings darauf hinweisen, dass eine umfassende
                                Blockierung/Löschung von Cookies zu Beeinträchtigungen bei der Nutzung
                                der Website führen kann.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.2.3. Technisch notwendige Cookies <br />
                                Wir setzen auf dieser Website technisch notwendige Cookies ein, damit
                                unsere Website fehlerfrei und gemäß den geltenden Gesetzen funktioniert.
                                Sie helfen dabei, die Website nutzerfreundlich zu gestalten. Einige Funktionen
                                unserer Website können ohne den Einsatz von Cookies nicht dargestellt
                                werden. <br />
                                Rechtsgrundlage hierfür ist je nach Einzelfall Art. 6 Abs. 1 lit. b, c und/oder f
                                DSGVO.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.2.4. Technisch nicht notwendige Cookies <br />
                                Außerdem verwenden wir auf unserer Website auch solche Cookies, die
                                technisch nicht notwendig sind. Diese Cookies dienen unter anderem dazu,
                                das Surfverhalten des Website-Besuchers zu analysieren oder Funktionen der
                                Website anzubieten, die jedoch technisch nicht zwingend notwendig sind.Rechtsgrundlage hierfür ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a
                                DSGVO. <br />
                                Technisch nicht notwendige Cookies werden nur mit Ihrer Einwilligung
                                gesetzt, die Sie jederzeit im Cookie-Consent-Tool widerrufen können. <br />

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.3. Datenverarbeitung durch Nutzereingabe
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.3.1. Eigene Datenerhebung <br />
                                Wir bieten folgende (Dienst-)Leistung auf unserer Website an: Google Ads,
                                SEO, Unternehmenslistung, Social Media Ads, Marketingdienstleistungen. <br />
                                Dazu erheben wir folgende Daten: <br />
                                Name <br />
                                E-Mail-Adresse <br />
                                Adresse <br />
                                Telefonnummer <br />
                                Geburtsdatum <br />
                                Kontodaten <br />
                                Unternehmensname, Unternehmensadresse, indiviudelle Nachrichten <br />
                                Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden gelöscht, sobald der jeweilige Zweck entfällt und es gemäß
                                den gesetzlichen Vorgaben möglich ist.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.3.2. Kontaktaufnahme <br />
                                <ul className="xs:pl-5 pl-2.5 my-[20px]">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">a)</span>
                                        E-Mail <br />
                                        Wenn Sie per E-Mail mit uns in Kontakt treten, verarbeiten wir Ihre E-Mail-
                                        Adresse und ggf. weitere in der Mail enthaltene Daten. Diese werden auf dem
                                        Mail-Server und teilweise auf den jeweiligen Endgeräten gespeichert. Je nach
                                        Anliegen ist die Rechtsgrundlage hierfür regelmäßig Art. 6 Abs. 1 lit. f DSGVO
                                        oder Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht, sobald der
                                        jeweilige Zweck entfällt und es gemäß den gesetzlichen Vorgaben möglich
                                        ist.
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">b)</span>
                                        Telefon <br />
                                        Wenn Sie per Telefon mit uns in Kontakt treten, können die Anrufdaten auf
                                        dem jeweiligen Endgerät und beim eingesetzten <span className="break-all">Telekommunikationsanbieter</span>
                                        pseudonymisiert gespeichert werden. Während des Telefonats erhobene
                                        personenbezogene Daten werden ausschließlich verarbeitet, um Ihre Anfrage
                                        zu bearbeiten. Je nach Anliegen ist die Rechtsgrundlage hierfür regelmäßig
                                        Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden
                                        gelöscht, sobald der jeweilige Zweck entfällt und es gemäß den gesetzlichen
                                        Vorgaben möglich ist.
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">c)</span>
                                        Kontaktformular <br />
                                        Wir bieten ein Kontaktformular an. Dieses dient der Kontaktaufnahme zu
                                        unserem Unternehmen. <br />
                                        In diesem Formular verarbeiten wir in der Regel Ihren Vor- und Nachnamen,
                                        Ihre Telefonnummer, Ihre E-Mail-Adresse, eine postalische Adresse sowie
                                        den Inhalt der Nachricht. Die Daten werden auf unserem Webserver
                                        gespeichert und an die jeweils zuständigen E-Mail-Adressen intern
                                        weitergeleitet. <br />
                                        Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO,
                                        da wir ein berechtigtes Interesse an der Beantwortung Ihres Anliegens und an
                                        einer unkomplizierten Kontaktaufnahme-Möglichkeit haben. Zielt die
                                        Kontaktaufnahme auf den Abschluss eines Vertrages ab, so ist zusätzliche
                                        Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. <br />
                                        Wir löschen diese Daten spätestens 3 Monate nach Erhalt, es sei denn, sie
                                        werden für eine entstandene Vertragsbeziehung benötigt. <br />
                                        Das Kontaktformular auf unserer Website beruht auf unserer eigenen
                                        Entwicklung. Eine Datenübermittlung an Dritte findet nicht statt. <br />
                                        IONOS <br />
                                        IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland <br />
                                        <a href="mailto:info@ionos.de" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                            info@ionos.de
                                        </a> <br />
                                        <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                            https://www.ionos.de/terms-gtc/datenschutzerklaerung/
                                        </a>


                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">d)</span>
                                        WhatsApp Business <br />
                                        <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                            https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0.
                                        </a>

                                    </li>

                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.3.3. Fragebögen/Formulare <br />
                                <ul className="xs:pl-5 pl-2.5 my-[20px]">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">a)</span>
                                        Google Forms <br />
                                        Diese Website nutzt Google Forms. Google Forms ist ein Dienst zur
                                        Gestaltung und Auswertung von Umfragen und Online-Formularen. Dieser
                                        Dienst wird angeboten von der Google Ireland Limited, Gordon House,
                                        Barrow Street, Dublin 4, Irland. <br />
                                        Wir nutzen Google Forms zur Erstellung und Einbindung von Online-
                                        Formularen, die der Erfassung von Nachrichten, Anfragen oder anderen
                                        Eingaben auf unserer Website dienen. <br />
                                        Google Forms setzt Cookies zur Datenerhebung und Speicherung auf
                                        unserer Website. Diese Cookies werden nur mit Einwilligung gesetzt. Diese
                                        Einwilligung kann jederzeit in unserem Cookie-Consent-Tool widerrufen
                                        und verwaltet werden. Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. a DSGVO
                                        und § 25 Abs. 1 TDDDG, soweit diese Einwilligung den Zugriff auf
                                        Informationen im Endgerät des Nutzers oder die Speicherung von Cookies
                                        im Sinne des TDDDG umfasst. <br />
                                        Darüber hinaus ist Rechtsgrundlage für den Einsatz von Google Forms Art. 6
                                        Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse daran Online-
                                        Formulare zu erstellen und funktionierend auf unserer Website
                                        einzubinden. Insoweit die Datenverarbeitung über das Formular der
                                        Anbietung unserer vertraglichen Leistungen dient, ist Rechtsgrundlage Art. 6
                                        Abs. 1 lit. b DSGVO. <br />
                                        Die durch den Website-Besucher eigegebenen Daten in das Formular werden
                                        auf den Servern von Google Forms gespeichert, bis der Website-Besucher
                                        zur Löschung auffordert, eine abgegebene Einwilligung zur Speicherung
                                        widerrufen wird oder der Zweck für die Speicherung der Daten entfällt.
                                        Zwingend gesetzliche Bestimmungen zu Aufbewahrungsfristen bleiben
                                        unberührt. <br />
                                        Nähere Informationen finden Sie hier: <br />
                                        <a href=" https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                            https://policies.google.com/privacy?hl=de.
                                        </a>


                                    </li>

                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">b)</span>
                                        Webflow Forms <br />
                                        Auf unserer Website nutzen wir Webflow Forms. Die ist ein Dienst von
                                        Webflow, Inc., 398 11th Street, 2nd Floor, San Francisco, CA 94103, USA. <br />
                                        Dieser Dienst ermöglicht es uns, Online-Formulare zur Erfassung von
                                        Nachrichten, Anfragen oder anderen Eingaben für unsere Website zu
                                        erstellen und sie dort einzubinden. <br />
                                        Webflow empfängt die Daten, die in dem Formular auf unserer Website
                                        eingegeben wurden. <br />
                                        Webflow verwendet ausschließlich technisch notwendige Cookies zur
                                        Sicherheit beim Browsen und zur Verhinderung von Cross-Site Request
                                        Forgery (Session Cookies), sowie für sichere Transaktionen. <br />
                                        Darüber hinaus ist Rechtsgrundlage für den Einsatz von Webflow Forms Art.
                                        6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse daran, Online-
                                        Formulare zu erstellen und funktionierend auf unserer Website
                                        einzubinden. Insoweit die Datenverarbeitung über das Formular der
                                        Anbietung unserer vertraglichen Leistungen dient, ist Rechtsgrundlage Art. 6
                                        Abs. 1 lit. b DSGVO. <br />
                                        Diese Cookies werden nur mit Einwilligung gesetzt. Diese Einwilligung
                                        kann jederzeit widerrufen werden. Rechtsgrundlage dafür ist Art. 6 Abs. 1
                                        lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit diese Einwilligung den
                                        Zugriff auf Informationen im Endgerät des Nutzers oder die Speicherung
                                        von Cookies im Sinne des TDDDG umfasst. <br />
                                        Die durch den Website-Besuchereigegebenen Daten in das Formular werden
                                        auf den Servern von Webflow gespeichert, bis der Website-Besucher zur
                                        Löschung auffordert, eine abgegebene Einwilligung zur Speicherung
                                        widerrufen wird oder der Zweck für die Speicherung der Daten entfällt.
                                        Zwingend gesetzliche Bestimmungen zu Aufbewahrungsfristen bleiben
                                        unberührt. <br />
                                        Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                        (SCC) der EU-Kommission. <br />
                                        Nähere Informationen zu der Datenverarbeitung von Webflow: <br />

                                        <a href="https://webflow.com/legal/cookie-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">https://webflow.com/legal/cookie-policy.</a> <br />
                                        <a href="https://webflow.com/legal/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">https://webflow.com/legal/privacy.</a> <br />
                                        <a href="https://webflow.com/legal/eu-privacy-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">https://webflow.com/legal/eu-privacy-policy.</a>
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">c)</span>
                                        ClickUp <br />
                                        Auf unserer Website binden wir Fragebögen ein, die mit dem Dienst ClickUp
                                        erstellt wurden. ClickUp ist ein Projektmanagement- und Kollaborationstool,
                                        das von der Firma Mango Technologies, Inc. mit Sitz in 350 Tenth Ave, San
                                        Diego, CA 92101, USA betrieben wird. <br />
                                        Bei der Nutzung des Fragebogens werden die Antworten sowie technische
                                        Informationen (z.B. IP-Adresse, Browsertyp) an die Server von ClickUp
                                        übertragen und dort gespeichert. Dies geschieht, um die Antworten zu
                                        erfassen und auszuwerten. <br />
                                        ClickUp verarbeitet diese Daten als Auftragsverarbeiter für uns. Die
                                        Datenverarbeitung erfolgt auf Grundlage einer Einwilligung gemäß Art. 6 Abs.
                                        1 lit. a DSGVO, die durch das Ausfüllen und Absenden des Fragebogens
                                        erteilt wird. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft
                                        widerrufen werden. <br />
                                        Bei der Nutzung des Fragebogens werden möglicherweise Cookies von
                                        ClickUp auf dem Endgerät gespeichert. Diese Cookies können technisch
                                        notwendig sein, um die Funktionalität des Fragebogens zu gewährleisten,
                                        oder sie können zur Verbesserung der Nutzererfahrung und zur Analyse des
                                        Nutzerverhaltens dienen. Die Verwendung technisch notwendiger Cookies
                                        erfolgt auf Grundlage unseres berechtigten Interesses an der technisch
                                        einwandfreien Bereitstellung und Optimierung unseres Angebots gemäß Art. 6
                                        Abs. 1 lit. f DSGVO. Sofern andere Cookies gesetzt werden, geschieht dies
                                        nur mit ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. <br />
                                        ClickUp hat Maßnahmen zum Schutz der Daten implementiert, einschließlich
                                        Verschlüsselung und Zugriffskontrollen. Die Daten werden auf Servern in den
                                        USA gespeichert. Für die Übermittlung personenbezogener Daten in die USA
                                        stützen wir uns auf die EU-<span className="break-all">Standardvertragsklauseln</span> als geeignete Garantie gemäß Art. 46 DSGVO. ClickUp hat sich zur Einhaltung der DSGVO
                                        verpflichtet. <br />
                                        Weitere Informationen zum Datenschutz bei ClickUp finden sich in deren
                                        Datenschutzerklärung: <br />
                                        <a href="https://clickup.com/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                            https://clickup.com/privacy.
                                        </a>

                                    </li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.4. Cookie-Consent-Tool
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.4.1 Cookiebot <br />
                                Damit auf unserer Website nur die Cookies gesetzt werden, für die es eine
                                Rechtsgrundlage gibt, nutzen wir das Consent-Management-Tool Cookiebot
                                von der Cybot A/S, havnegade 39, 1058 Kopenhagen, Dänemark. <br />
                                Dieser Dienst wird genutzt, um die Einwilligung des Website-Besuchers zur
                                Speicherung bestimmter Cookies in seinem Browser oder den Einsatz von
                                bestimmten Technologien einzuholen und datenschutzkonform zu
                                dokumentieren. <br />
                                Bei Aufruf dieser Website, wird die vom Website-Besucher erteilte
                                Einwilligung oder der Widerruf der Einwilligung als ein Cookibot-Cookie im
                                Browser des Website-Besuchers gespeichert. Hierzu wird eine Verbindung zu
                                den Servern von Cookiebot hergestellt. <br />
                                Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO. Cookiebot wird eingesetzt, um
                                die gesetzlich vorgeschriebene Einwilligung für die Verwendung von Cookies
                                einzuholen. <br />
                                Bis der Website-Besucher uns zur Löschung auffordert oder Cookiebot selbst
                                löscht oder der Zweck für die Speicherung der Daten entfällt, werden die
                                erfassten Daten gespeichert. Hiervon unberührt bleiben die zwingend
                                gesetzlichen Aufbewahrungsfristen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.5. Newsletter
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.1. Mailchimp <br />
                                Wir verwenden Mailchimp zur Bereitstellung unseres Newsletters. <br />
                                Mailchimp ist ein Dienst zur Versendung von Newslettern und wird angeboten
                                von der Rocket Science Group LLC, 675 Ponce De Leon Ave NE, Suite 5000,
                                Atlanta, GA 30308, USA. <br />
                                Durch Mailchimp kann der Versand von Newslettern organisiert werden. Die
                                Daten, welche eingegeben werden, um den Newsletter zu erhalten, werden
                                auf den Servern von Mailchimp in den USA gespeichert. Bei deaktivierter
                                Erfolgsmessung werden die Nutzerdaten nicht ausgewertet. <br />
                                Mailchimp wertet Leistungsdaten, die Auslieferungsstatistik von E-Mails und
                                weitere Kommunikationsdaten aus. <br />
                                Sofern eine Datenübertragung nicht gewünscht ist, muss der Newsletter
                                deabonniert werden. <br />
                                Außerdem nutzen wir weitere E-Mail Services von Mailchimp zur Erfüllung
                                unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Mailchimp verwendet Cookies, um die Sicherheit und Zuverlässigkeit der
                                Systeme, die Einhaltung der Nutzungsbedingungen und die Vermeidung von
                                Missbrauch zu gewährleisten. Diese Cookies kommen nur dann zum Einsatz,
                                wenn Sie sich für den Newsletter anmelden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit deabonnieren des
                                Newsletters wiederrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                <a href="https://mailchimp.com/eu-us-data-transfer-statement/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://mailchimp.com/eu-us-data-transfer-statement/
                                </a> <br />
                                <a href="https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-_Standard_Contractual_Clauses" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-_Standard_Contractual_Clauses.
                                </a> <br />
                                Die Daten werden bei Vertragsende zwischen uns und Mailchimp gelöscht, es
                                sei denn, Sie widerrufen Ihre Einwilligung zuvor. In diesem Fall werden die
                                Daten mit dem Widerruf der Einwilligung gelöscht. <br />
                                Nähere Informationen finden Sie auch unter <br />
                                <a href="https://mailchimp.com/de/help/mailchimp-european-data-transfers/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://mailchimp.com/de/help/mailchimp-european-data-transfers/
                                </a> und <br />
                                <a href="https://mailchimp.com/de/gdpr/erfahren" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://mailchimp.com/de/gdpr/erfahren
                                </a> Sie unter <br />
                                <a href="https://mailchimp.com/legal/cookies/https://www.intuit.com/privacy/statement/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://mailchimp.com/legal/cookies/https://www.intuit.com/privacy/statement/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.2. Cleverreach <br />
                                Wir verwenden Cleverreach zur Bereitstellung unseres Newsletters. Dieser
                                Dienst wird angeboten von der CleverReach GmbH& Co. KG,
                                Schafjückenweg 2, 26180 Rastede, Deutschland. <br />
                                Durch Cleverreach kann der Versand von Newslettern organisiert und
                                analysiert werden. Die Daten, welche eingegeben werden, um den Newsletter
                                zu erhalten, werden auf den Servern von CleverReach in Deutschland und
                                Irland gespeichert. <br />
                                Mit Hilfe von CleverReach können Interaktionen mit dem Newsletter analysiert
                                werden. Außerdem können Conversion-Rates bestimmt werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit deabonnieren des
                                Newsletters wiederrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Außerdem nutzen wir weitere E-Mail Services von Cleverreach zur Erfüllung
                                unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden bei Vertragsende zwischen uns und Cleverreach gelöscht,
                                es sei denn, der Website-Besucher widerruft zuvor seine Einwilligung. Ist dies
                                der Fall, werden die Daten aus der Verteilerliste gelöscht. <br />
                                Außerdem wird die E-Mail-Adresse nach deabonnieren des Newsletters auf
                                einer Blacklist getrennt von anderen Daten für eine unbefristete Zeit
                                gespeichert. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit.f DSGVO. Es dient
                                dem Interesse des Website-Besuchers als auch unserem Interesse, einen
                                Newsletter nach den gesetzlichen Vorgaben zu benutzen/betreiben. <br />
                                Weitere Details: <br />
                                <a href="https://www.cleverreach.com/de/funktionen/reporting-und-tracking/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.cleverreach.com/de/funktionen/reporting-und-tracking/.
                                </a><br />
                                <a href="https://www.cleverreach.com/de/datenschutz/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.cleverreach.com/de/datenschutz/.
                                </a><br />
                                Außerdem nutzen wir weitere E-Mail Services von CleverElements zur
                                Erfüllung unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.3. Rapidmail <br />
                                Wir verwenden Rapidmail zur Bereitstellung unseres Newsletters. Dieser
                                Dienst wird angeboten von der rapidmail GmbH, Augustinerplatz 2, 79098
                                Freiburg i.Br., Deutschland. <br />
                                Durch diesen Dienst kann der Versand von Newslettern organisiert und
                                analysiert werden. Die Daten, welche eingegeben werden, um den Newsletter
                                zu erhalten, werden auf den Servern von Rapidmail gespeichert. <br />
                                Mit Hilfe von Rapidmail können Interaktionen mit dem Newsletter analysiert
                                und die Nutzerdes Newsletters kategorisiert werden, um den Newsletter an
                                die unterschiedlichen Zielgruppen anzupassen. <br />
                                Dieser Analyse kann über den Link in jeder Newsletternachricht
                                widersprochen werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit deabonnieren des
                                Newsletters wiederrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Außerdem nutzen wir weitere E-Mail Services von Rapidmail zur Erfüllung
                                unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden bei Vertragsende zwischen uns und Rapidmail gelöscht, es
                                sei denn, der Website-Besucher widerruft zuvor seine Einwilligung. Ist dies
                                der Fall, werden die Daten aus der Verteilerliste gelöscht. <br />
                                Außerdem wird die E-Mail-Adresse nach deabonnieren des Newsletters auf
                                einer Blacklist getrennt von anderen Daten für eine unbefristete Zeit
                                gespeichert. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit.f DSGVO. Es dient
                                dem Interesse des Website-Besuchers als auch unserem Interesse, einen
                                Newsletter nach den gesetzlichen Vorgaben zu benutzen/betreiben. <br />
                                Weitere Details: <br />
                                <a href="https://de.rapidmail.wiki/kategorien/statistiken/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de.rapidmail.wiki/kategorien/statistiken/.
                                </a><br />
                                <a href="https://www.rapidmail.de/datensicherheit" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.rapidmail.de/datensicherheit.
                                </a><br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.4. Brevo <br />
                                Wir verwenden Brevo zur Bereitstellung unseres Newsletters. Dieser Dienst
                                wird angeboten von der Sendinblue GmbH, Köpenicker Str. 126, 10179
                                Berlin, Deutschland. <br />
                                Durch diesen Dienst kann der Versand von Newslettern organisiert und
                                analysiert werden. Die Daten, welche eingegeben werden, um den Newsletter
                                zu erhalten, werden auf den Servern von Brevo in Deutschland gespeichert.
                                Mit Hilfe von Brevo können Interaktionen mit dem Newsletter analysiert
                                werden. Außerdem können Conversion-Rates bestimmt und die Nutzer des
                                Newsletters kategorisiert werden, um den Newsletter an die unterschiedlichen
                                Zielgruppen anzupassen. <br />
                                Dieser Analyse kann über den Link in jeder Newsletternachricht
                                widersprochen werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit deabonnieren des
                                Newsletters wiederrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Außerdem nutzen wir weitere E-Mail Services von Brevo zur Erfüllung unserer
                                vertragsmäßigen Leistungen und der Kundenverwaltung. Rechtsgrundlage
                                dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden bei Vertragsende zwischen uns und Brevo gelöscht, es sei
                                denn, der Website-Besucher widerruft zuvor seine Einwilligung. Ist dies der
                                Fall, werden die Daten aus der Verteilerliste gelöscht. <br />
                                Außerdem wird die E-Mail-Adresse nach deabonnieren des Newsletters auf
                                einer Blacklist getrennt von anderen Daten für eine unbefristete Zeit
                                gespeichert. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit.f DSGVO. Es dient
                                dem Interesse des Website-Besuchers als auch unserem Interesse einen
                                Newsletter nach den gesetzlichen Vorgaben zu benutzen/betreiben. <br />
                                Weitere Details: <br />
                                <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.brevo.com/de/legal/privacypolicy/.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.5. IONOS <br />
                                Wir verwenden IONOS zur Bereitstellung unseres Newsletters. Dieser Dienst
                                wird angeboten von der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur,
                                Deutschland. <br />
                                Durch diesen Dienst kann der Versand von Newslettern organisiert und
                                analysiert werden. Die Daten, welche eingegeben werden, um den Newsletter
                                zu erhalten, werden auf den Servern von IONOS in Deutschland gespeichert. <br />
                                Mit Hilfe von IONOS können Interaktionen mit dem Newsletter analysiert
                                werden. Außerdem können Conversion-Rates bestimmt werden und die
                                Nutzer des Newsletters kategorisiert werden, um den Newsletter an die
                                unterschiedlichen Zielgruppen anzupassen. Durch das Double-Opt-in-
                                Verfahren wird sichergestellt, dass der Newsletter nur an Nutzer versendet
                                wird, welche klar einer Teilnahme zugestimmt haben. <br />
                                Dieser Analyse kann über den Link in jeder Newsletternachricht
                                widersprochen werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit deabonnieren des
                                Newsletters wiederrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Außerdem nutzen wir weitere E-Mail Services von IONOS zur Erfüllung
                                unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden bei Vertragsende zwischen uns und IONOS gelöscht, es
                                sei denn, der Website-Besucher widerruft zuvor seine Einwilligung. Ist dies
                                der Fall, werden die Daten aus der Verteilerliste gelöscht. <br />
                                Außerdem wird die E-Mail-Adresse nach deabonnieren des Newsletters auf
                                einer Blacklist getrennt von anderen Daten für eine unbefristete Zeit
                                gespeichert. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit.f DSGVO. Es dient
                                dem Interesse des Website-Besuchers als auch unsrem Interesse einen
                                Newsletter nach den gesetzlichen Vorgaben zu benutzen/betreiben. <br />
                                Weitere Details: <br />
                                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.ionos.de/terms-gtc/datenschutzerklaerung/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.6. Hubspot <br />
                                Wir verwenden Hubspot zur Bereitstellung unseres Newsletters. Dieser Dienst
                                wird angeboten von Hubspot Inc., 25 Street, Cambridge, MA 02141 USA. <br />
                                Durch diesen Dienst kann der Versand von Newslettern organisiert und
                                analysiert werden. Die Daten, welche eingegeben werden, um den Newsletter
                                zu erhalten, werden auf den Servern des Dienstes gespeichert. <br />
                                Mit Hilfe von Hubspot können Interaktionen mit dem Newsletter analysiert
                                werden. Außerdem können Conversion-Rates bestimmt und die Nutzer des
                                Newsletters kategorisiert werden, um den Newsletter an die unterschiedlichen
                                Zielgruppen anzupassen. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit Deabonnieren des
                                Newsletters widerrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Außerdem nutzen wir weitere E-Mail Services von Hubspot zur Erfüllung
                                unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden bei Vertragsende zwischen uns und Hubspot gelöscht, es
                                sei denn, der Website-Besucher widerruft zuvor seine Einwilligung. Ist dies
                                der Fall, werden die Daten aus der Verteilerliste gelöscht. <br />
                                Hubspot ist nach dem EU-US Data Privacy Framework zertifiziert. <br />
                                Weitere Details: <br />
                                <a href="https://legal.hubspot.com/de/privacy-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://legal.hubspot.com/de/privacy-policy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.7. Eigenentwicklung <br />
                                Die Bereitstellung unseres Newsletters haben wir eigenständig entwickelt. <br />
                                Dadurch können wir unseren Newsletter organisieren und analysieren. Die
                                Daten, welche eingegeben werden, um den Newsletter zu erhalten, werden
                                auf unseren Servern gespeichert. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit deabonnieren des
                                Newsletters widerrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Die gespeicherten Daten können jederzeit per E-Mail zur Verfügung gestellt
                                werden oder es kann eine Aufforderung zur Löschung der Daten abgegeben
                                werden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.8. Pipedrive <br />
                                Wir verwenden Pipedrive zur Bereitstellung unseres Newsletters. Dieser
                                Dienst wird angeboten von der Pipedrive OÜ, Mustamäe tee 3a, 10615
                                Tallinn, Estland. <br />
                                Durch diesen Dienst kann der Versand von Newslettern organisiert und
                                analysiert werden. Die Daten, welche eingegeben werden, um den Newsletter
                                zu erhalten, werden auf den Servern von Pipedrive gespeichert. <br />
                                Mit Hilfe von Pipedrive können Interaktionen mit dem Newsletter analysiert
                                werden. Außerdem können Conversion-Rates bestimmt und die Nutzer des
                                Newsletters kategorisiert werden, um den Newsletter an die unterschiedlichen
                                Zielgruppen anzupassen. <br />
                                Dieser Analyse kann widersprochen werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit Deabonnieren des
                                Newsletters widerrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Außerdem nutzen wir weitere E-Mail Services von Pipedrive zur Erfüllung
                                unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden bei Vertragsende zwischen uns und Pipedrive gelöscht, es
                                sei denn, der Website-Besucher widerruft zuvor seine Einwilligung. Ist dies
                                der Fall, werden die Daten aus der Verteilerliste gelöscht. <br />
                                Weitere Informationen: <br />
                                <a href="https://www.pipedrive.com/en/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.pipedrive.com/en/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.9. Zapier <br />
                                Wir verwenden die E-Mail-Marketing und Newsletter Funktion von Zapier zur
                                Bereitstellung unseres Newsletters. Dieser Dienst wird angeboten von der
                                Zapier Inc., Market St. #62411, San Francisco, CA 95104-5401, USA. <br />
                                Durch diesen Dienst kann der Versand von Newslettern organisiert und
                                analysiert werden. Die Daten, welche eingegeben werden, um den Newsletter
                                zu erhalten, werden auf den Servern von Zapier gespeichert. <br />
                                Mit Hilfe von Zapier können Interaktionen mit dem Newsletter analysiert
                                werden. Außerdem können Conversion-Rates bestimmt und die Nutzer des
                                Newsletters kategorisiert werden, um den Newsletter an die unterschiedlichen
                                Zielgruppen anzupassen. <br />
                                Dieser Analyse kann widersprochen werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit Deabonnieren des
                                Newsletters widerrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Außerdem nutzen wir weitere E-Mail Services von Zapier zur Erfüllung
                                unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden bei Vertragsende zwischen uns und Zapier gelöscht, es sei
                                denn, der Website-Besucher widerruft zuvor seine Einwilligung. Ist dies der
                                Fall, werden die Daten aus der Verteilerliste gelöscht. <br />
                                Weitere Informationen: <br />
                                <a href="https://zapier.com/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://zapier.com/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.5.10. Webflow <br />
                                Wir verwenden die E-Mail-Marketing und Newsletter Funktion von Webflow
                                zur Bereitstellung unseres Newsletters. Dieser Dienst wird angeboten von der
                                Webflow, Inc., 398 11th Street, 2nd Floor San Francisco, CA 94103, United
                                States of America. <br />
                                Durch diesen Dienst kann der Versand von Newslettern organisiert und
                                analysiert werden. Die Daten, welche eingegeben werden, um den Newsletter
                                zu erhalten, werden auf den Servern von Webflow gespeichert. <br />
                                Mit Hilfe von Webflow können Interaktionen mit dem Newsletter analysiert
                                werden. Außerdem können Conversion-Rates bestimmt und die Nutzer des
                                Newsletters kategorisiert werden, um den Newsletter an die unterschiedlichen
                                Zielgruppen anzupassen. <br />
                                Dieser Analyse kann widersprochen werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit mit Deabonnieren des
                                Newsletters widerrufbar. Die Rechtmäßigkeit der bereits erfolgten
                                Verarbeitungen bleibt von einem ggf. erfolgten Widerruf unberührt. <br />
                                Außerdem nutzen wir weitere E-Mail Services von Webflow zur Erfüllung
                                unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO. <br />
                                Die Daten werden bei Vertragsende zwischen uns und Webflow gelöscht, es
                                sei denn, der Website-Besucherder/die Website-Besucher*in widerruft zuvor
                                seine Einwilligung. Ist dies der Fall, werden die Daten aus der Verteilerliste
                                gelöscht. <br />
                                Weitere Informationen: <br />
                                <a href="https://webflow.com/legal/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://webflow.com/legal/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.6. Analyse- und Trackingtools
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.1. Google Analytics <br />
                                Wir nutzen auf dieser Website Google Analytics. Google Analytics ist ein
                                Webanalysedienst. Dieser Dienst wird angeboten von der Google Irland
                                Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. <br />
                                Google Analytics verwendet Cookies, um den Nutzer wiederzuerkennen und
                                somit das Nutzungsverhalten zu analysieren. Diese Cookies werden nur mit
                                Einwilligung gesetzt. Die Einwilligung kann jederzeit widerrufen und in
                                unserem Cookie-Consent-Tool verwaltet werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. <br />
                                Durch die Nutzung von Google Analytics greift eine IP-Anonymisierung. Die
                                IP-Adresse des jeweiligen Nutzers wird innerhalb der Mitgliedstaaten der EU
                                (bzw. des Europäischen Wirtschaftsraums) so auf Servern innerhalb der EU
                                gekürzt, dass eine Rückverfolgung zu einer natürlichen Person nicht mehr
                                möglich ist. Darüber hinaus verpflichtet sich Google über die Google Ads-
                                Datenverarbeitungsbedingungen zu einem angemessenen Datenschutz und
                                erstellt eine Auswertung der Websitenutzung und der Websiteaktivität und
                                erbringt die mit der Nutzung verbundenen Dienstleistungen. Die Google Ads-
                                Datenverarbeitungsbedingungen gelten für Unternehmen, die der EUDatenschutz-
                                Grundverordnung (DSGVO) des Europäischen Wirtschaftsraums
                                (EWR), dem kalifornischen Gesetz zum Schutz der Privatsphäre von
                                Verbrauchern (California Consumer Privacy Act, CCPA) oder ähnlichen
                                Regelungen unterliegen. <br />
                                Durch ein zusätzliches Browser-Plugin kann verhindert werden, dass die
                                gesammelten Informationen (wie z.B. die IP-Adresse) an Google versendet
                                und durch Google genutzt werden. Das Plugin und weitere Informationen
                                dazu finden Sie unter <br />
                                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://tools.google.com/dlpage/gaoptout?hl=de.
                                </a> <br />
                                Ansonsten hängt die Speicherdauer von der Art der verarbeiteten Daten ab.
                                Jeder Kunde kann wählen, wie lange Google Analytics Daten speichert, bevor
                                sie automatisch gelöscht werden. Die maximale Lebensdauer eines Google
                                Analytics Cookies sind zwei Jahre. <br />
                                Weitere Informationen zur Datennutzung durch Google finden Sie auch unter <br />
                                <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://support.google.com/analytics/answer/6004245?hl=de.
                                </a> <br />
                                Für alle weiteren Rückfragen können Sie sich auch direkt an <br />
                                <a href="mailto:support-deutschland@google.com" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    support-deutschland@google.com
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.2. Google Consent Mode <br />
                                Wir verwenden auf unserer Website den Google Consent Mode, um die
                                Nutzung von Google-Diensten basierend auf Ihrer Einwilligung anzupassen.
                                Dies bedeutet, dass wir je nach Zustimmung entweder die vollen <br />
                                Funktionalitäten dieser Dienste nutzen oder nur eine eingeschränkte
                                Datenerhebung vornehmen. <br />
                                Der Google Consent Mode erlaubt eine gewisse Datenverarbeitung, selbst bei
                                verweigerter Einwilligung, jedoch in anonymisierter Form. <br />
                                Wir nutzen den Advanced Consent Mode. Dieser ermöglicht eine detailliertere
                                Datenerfassung, wenn Sie der Nutzung von Cookies nach Art. 6 Abs.1 lit. a
                                DSGVO zugestimmt haben. Diese Daten helfen uns, die Performance unserer
                                Marketing-Maßnahmen genauer zu bewerten und benutzerdefinierte Analysen
                                durchzuführen. <br />
                                Die Verarbeitung erfolgt in unserem berechtigten Interesse, bestimmte
                                Funktionen der auf der Webseite eingesetzten einwilligungsbedürftigen
                                Google-Dienste besser steuern und verwenden zu können. Rechtsgrundlage
                                der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. <br />
                                Weitere Informationen zum Google Consent Mode finden Sie unter: <br />
                                <a href="https://support.google.com/analytics/answer/9976101" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://support.google.com/analytics/answer/9976101
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.3. Google Maps <br />
                                Wir nutzen auf dieser Website Google Maps. Google Maps ist ein Web-
                                Mapping-Dienst. Dieser Dienst wird angeboten von der Google Irland Limited
                                („Google"), Gordon House, Barrow Street, Dublin 4, Irland. <br />
                                Bei der Nutzung von Google Maps wird die IP-Adresse gespeichert. Diese
                                Daten werden in der Regel an einen Server von Google in den USA
                                übertragen und gespeichert. Hierauf haben wir keinen Einfluss. Google kann
                                hierbei für eine einheitliche Darstellung Google Fonts verwenden. Diese Fonts
                                werden im Browsercache des Website-Besuchersdes/der Website-
                                Besucher*in geladen. <br />
                                Google Maps verwendet Cookies. Diese Cookies werden nur mit einer
                                entsprechenden Einwilligung gesetzt. Die Einwilligung ist jederzeit widerrufen. <br />
                                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG,
                                soweit diese Einwilligung den Zugriff auf Informationen im Endgerät des
                                Nutzers oder die Speicherung von Cookies im Sinne des TDDDG umfasst. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Weitere Details: <br />
                                <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacy.google.com/businesses/gdprcontrollerterms/
                                </a> und <br />
                                <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                                </a> <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.4. YouTube <br />
                                Auf dieser Website binden wir YouTube-Videos ein. YouTube ist eine Online-
                                Videoplattform. Dieser Dienst wird angeboten von der Google Irland Limited
                                („Google"), Gordon House, Barrow Street, Dublin 4, Irland. <br />
                                Sobald Sie auf unserer Website ein Video starten, wird eine Verbindung zu
                                den Servern von YouTube hergestellt. YouTube kann nach dem Start eines
                                Videos Cookies auf dem Endgerät des Website-Besuchers setzen, um
                                Einstellungen und Präferenzen zu speichern und anschließend personalisierte
                                Werbung zu schalten. Die hieraus gewonnen Informationen werden auch für
                                Videostatistiken, die Verbesserung der Anwendungsfreundlichkeit und zur
                                Vorbeugung von Betrugsversuchen genutzt. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG, soweit diese Einwilligung den Zugriff auf Informationen im
                                Endgerät des Nutzers oder die Speicherung von Cookies im Sinne des
                                TDDDG umfasst. Diese Einwilligung ist jederzeit widerrufbar. <br />
                                Weitere Informationen: <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.5. Google Conversion-Tracking <br />
                                Diese Website nutzt Google Conversion Tracking. Google Conversion
                                Tracking ist ein Webanalysedienst. Dieser Dienst wird angeboten von der
                                Google Irland Limited („Google"), Gordon House, Barrow Street, Dublin 4,
                                Irland. <br />
                                Google Conversion-Tracking setzt Cookies zur Identifikation. Wir erfahren die
                                Nutzerzahl und welche Aktionen auf der Website durch die Website-Besucher
                                durchgeführt wurden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Die Daten werden gelöscht, sobald sie für die Verarbeitungszwecke nicht
                                mehr benötigt werden. <br />
                                Weitere Details: <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.6. Google Ads Remarketing <br />
                                Auf dieser Website nutzen wir Google Ads Remarketing. Google Ads
                                Remarketing ist ein Webanalysedienst. Dieser Dienst wird angeboten von der
                                Google Irland Limited („Google"), Gordon House, Barrow Street, Dublin 4,
                                Irland. <br />
                                Google Ads Remarketing setzt Cookies zu folgendem Zweck: Website-
                                Besucher können einer bestimmten Zielgruppe zugeordnet werden und
                                dementsprechend mit personalisierter Werbung versorgt werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Weitere Details: <br />
                                <a href="https://www.google.com/settings/ads/onweb/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.google.com/settings/ads/onweb/
                                </a> <br />
                                <a href="https://policies.google.com/technologies/ads?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/technologies/ads?hl=de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.7. Google Tag Manager <br />
                                Auf dieser Website nutzen wir Google Tag Manager. Google Tag Manager ist
                                ein Webanalysedienst. Dieser Dienst wird angeboten von der Google Irland
                                Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. <br />
                                Der Google Tag Manager speichert keine Cookies und analysiert auch nicht
                                eigenständig. Er dient lediglich der Verwaltung der über ihn eingebundenen
                                Tools. Die IP-Adresse des Website-Besuchers wird jedoch erfasst, welche an
                                das Mutterunternehmen von Google in die USA übertragen werden kann. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Wir haben
                                ein berechtigtes Interesse daran, unkompliziert verschiedene Tools auf seiner
                                Website einzubinden und zu verwalten. <br />
                                Weitere Details: <br />

                                <a href="https://policies.google.com/privacy?hl=en" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=en.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.8. Google Ads <br />
                                Wir nutzen auf dieser Website Google Ads. Google Ads ist ein Online-
                                Werbeprogramm der Google Irland Limited („Google"), Gordon House, Barrow
                                Street, Dublin 4, Irland. <br />
                                Der Dienst ermöglicht es uns, Werbeanzeigen in der Google-Suchmaschine
                                an bestimmte Keywords zu knüpfen und anhand von vorhandenen
                                Nutzerdaten zielgerichtete Werbeanzeigen zu schalten. Hierbei werden für
                                das Conversion-Tracking Cookies genutzt. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Weitere Details: <br />
                                <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacy.google.com/businesses/controllerterms/mccs/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.9. Meta-Pixel <br />
                                Wir nutzen auf dieser Website Meta-Pixel. Meta-Pixel ist ein Conversion-
                                Tracking-Tool. Dieser Dienst wird angeboten von der Meta Platforms Ireland
                                Limited, 4 Grand Canal Square, Grand Canal Habour,Dublin 2, Irland. <br />
                                Meta-Pixel ermöglicht uns, das Verhalten des Website-Besuchers
                                nachzuvollziehen, nachdem dieser über eine Facebook-Werbeanzeige auf die
                                Website weitergeleitet wurde. <br />
                                Meta-Pixel verwendet Cookies zu eigenen Werbezwecken. Die Daten werden
                                von Facebook gespeichert und verarbeitet, sodass eine Verbindung zu dem
                                jeweiligen Nutzerprofil hergestellt werden kann. <br />
                                Die erfassten Daten werden auch in die USA und in andere Drittländer
                                übertragen. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Sofern auf dieser Website mithilfe von Meta-Pixel personenbezogene Daten
                                erfasst und an Facebook weitergeleitet werden, sind wir und die Meta
                                Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Habour,Dublin
                                2, Irland gem. Art. 26 DSGVO gemeinsam für die Datenverarbeitung
                                verantwortlich. Diese gemeinsame Verantwortlichkeit beschränkt sich hierbei
                                ausschließlich auf die Erfassung und Weitergabe der Daten an Facebook. <br />
                                Hierzu gibt es eine Vereinbarung über die gemeinsame Verarbeitung: <br />
                                <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/controller_addendum.
                                </a> <br />
                                Wir sind für die Erteilung der Datenschutzinformationen beim Einsatz des
                                Facebook-Tools und die datenschutzrechtliche sichere Einbindung des Tools
                                auf der entsprechenden Website verantwortlich. Facebook ist hingegen für die
                                Datensicherheit ihrer Produkte verantwortlich. Hieraus folgt, dass
                                Betroffenenrechte hinsichtlich der bei Facebook verarbeiteten Daten direkt bei
                                Facebook geltend zu machen sind. <br />
                                Weitere Details: <br />
                                <a href="https://de-de.facebook.com/about/privacy/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/about/privacy/
                                </a> <br />
                                <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_scrnen" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/ads/preferences/?entry_product=ad_settings_scrnen
                                </a> <br />
                                <a href="http://www.youronlinechoices.com/de/praferenzmanagement/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    http://www.youronlinechoices.com/de/praferenzmanagement/
                                </a> <br />
                                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/EU_data_transfer_addendum
                                </a> <br />
                                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/help/566994660333381.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.10. IONOS WebAnalytics <br />
                                Wir nutzen auf dieser Website IONOS WebAnalytics. IONOS WebAnalytics ist
                                ein Webanalysedienst. Dieser Dienst wird angeboten von der 1&1 IONOS SE,
                                Elgendorfer Straße 57, 56410 Montabaur, Deutschland. <br />
                                Zum Zweck der Analyse speichert IONOS insbesondere diese Daten: zuvor
                                besuchte Website (Referrer), angeforderte Website oder Datei, Browsertyp
                                und Version, verwendetes Betriebssystem, verwendeter Gerätetyp, Uhrzeit
                                des Zugriffs und die IP-Adresse in anonymisierter Form. <br />
                                Die Datenerfassung erfolgt vollständig anonymisiert. Es werden von IONOS
                                WebAnalytics keine Cookies gespeichert. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Wir haben
                                ein berechtigtes Interesse daran, das Nutzerverhalten auf unserer Website zu
                                analysieren, um so unser Webangebot und auch unsere Werbung zu
                                optimieren. <br />
                                Weitere Details: <br />
                                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.ionos.de/terms-gtc/datenschutzerklaerung/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.11. Facebook Conversion API <br />
                                Wir nutzen auf dieser Website Facebook Conversion API. Facebook
                                Conversion API ist ein Webanalysedienst. Dieser Dienst wird angeboten von
                                der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. <br />
                                Mithilfe von Facebook Conversion API können wir die Interaktion des
                                Website-Besuchers mit der Website erfassen und an Facebook übermitteln,
                                um die Werbeperformance bei Facebook zu optimieren. <br />
                                Die erfassten Daten werden auch in die USA und in andere Drittländer
                                übertragen. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/EU_data_transfer_addendum
                                </a><br />
                                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/help/566994660333381.
                                </a><br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Sofern auf dieser Website mit Hilfe von Meta-Pixel personenbezogene Daten
                                erfasst und an Facebook weitergeleitet werden, sind wir und die Meta
                                Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Habour,Dublin
                                2, Irland gem. Art. 26 DSGVO gemeinsam für die Datenverarbeitung
                                verantwortlich. Diese gemeinsame Verantwortlichkeit beschränkt sich hierbei
                                ausschließlich auf die Erfassung und Weitergabe der Daten an Facebook. <br />
                                Hierzu gibt es eine Vereinbarung über die gemeinsame Verarbeitung: <br />
                                <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/controller_addendum.
                                </a><br />
                                Wir sind für die Erteilung der Datenschutzinformationen beim Einsatz des
                                Facebook-Tools und die datenschutzrechtliche sichere Einbindung des Tools
                                auf der entsprechenden Website verantwortlich. Facebook ist hingegen für die
                                Datensicherheit ihrer Produkte verantwortlich. Hieraus folgt, dass
                                Betroffenenrechte hinsichtlich der bei Facebook verarbeiteten Daten direkt bei
                                Facebook geltend zu machen sind. <br />
                                Weitere Details: <br />
                                <a href="https://de-de.facebook.com/about/privacy/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/about/privacy/.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.12. Facebook Custom Audiences <br />
                                Wir nutzen auf dieser Website Facebook Custom Audiences. Facebook
                                Custom Audiences ist ein Webanalysedienst. Dieser Dienst wird angeboten
                                von der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2,
                                Irland. <br />
                                Bei der Nutzung des Online-Angebots werden personenbezogene Daten des
                                Website-Besuchers erfasst. Sofern der Website-Besucher uns die
                                Einwilligung zur Nutzung von Facebook Cutsom Audiences erteilt hat, werden
                                diese Daten an Facebook übermittelt, um dem Website-Besucher passende
                                Werbung auszuspielen und Zielgruppen zu definieren. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                <a href="https://www.facebook.com/legal/terms/customaudience" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/terms/customaudience
                                </a><br />
                                <a href="https://www.facebook.com/legal/terms/dataprocessing" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/terms/dataprocessing.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.13. LinkedIn Insight Tag <br />
                                Wir nutzen auf dieser Website LinkedIn Insight Tag. LinkedIn Insight Tag ist
                                ein Webanalysedienst. Dieser Dienst wird angeboten von der LinkedIn Ireland
                                Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland. <br />
                                Mit Hilfe von LinkedIn Insight Tag erhalten wir Informationen über die
                                Besucher unserer Website. Sofern ein Website-Besucher bei LinkedIn
                                registriert ist, können wir berufliche Eckdaten analysieren, um unsere Website
                                zielgruppenorientiert auszurichten. Zu dem Zweck der zielgruppenorientierten
                                Schaltung von Werbung, kann auch eine geräteübergreifende Conversion-
                                Messung und ein Retargeting stattfinden. Außerdem erfasst LinkedIn Insight
                                Tag Logfiles. Die IP-Adresse wird anonymisiert. <br />
                                LinkedIn Insight Tag verwendet Cookies zur Wiedererkennung des Website-
                                Besuchers und zur Analyse des Nutzerverhaltens. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG, soweit diese Einwilligung den Zugriff auf Informationen im
                                Endgerät des Nutzers oder die Speicherung von Cookies im Sinne des
                                TDDDG umfasst. <br />
                                Die direkten Kennungen der LinkedIn-Mitglieder werden nach sieben Tagen,
                                die verbleibenden pseudonymisierten Daten innerhalb von 180 Tagen von
                                LinkedIn gelöscht. <br />
                                Die erfassten Daten werden auch in die USA und in andere Drittländer
                                übertragen. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Weitere Details: <br />
                                <a href="https://www.linkedin.com/legal/l/dpa" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.linkedin.com/legal/l/dpa
                                </a> <br />
                                <a href="https://www.linkedin.com/legal/l/eu-sccs" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.linkedin.com/legal/l/eu-sccs
                                </a> <br />
                                <a href="https://de.linkedin.com/legal/l/cookie-table" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de.linkedin.com/legal/l/cookie-table.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.14. Calendly <br />
                                Wir nutzen den Dienst Calendly für Analyse- und Tracking-Zwecke. Dieser
                                Dienst wird angeboten von Calendly LLC, 271 17th St NW, Atlanta, GA
                                30363, USA. Calendly ermöglicht es uns, Nutzungsdaten und Interaktionen
                                auf unserer Website zu analysieren, um die Benutzererfahrung zu verbessern
                                und die Leistung unserer Services zu optimieren. <br />
                                Die hierbei verarbeiteten Daten umfassen unter anderem technische
                                Informationen wie IP-Adressen, Browser-Typen, Betriebssysteme,
                                Fehlerprotokolle und Nutzungsdaten. Diese Daten werden genutzt, um die
                                Stabilität und Leistung unserer Webanwendungen zu verbessern und
                                technische Probleme zu identifizieren und zu beheben. Der betreffende Dienst
                                speichert die Daten auf Servern weltweit, einschließlich der USA, und kann
                                zur Datenerhebung und Speicherung Cookies setzen. Diese Cookies werden
                                nur mit Einwilligung gesetzt. Diese Einwilligung kann jederzeit widerrufen
                                werden. Rechtsgrundlage für die Cookie-Nutzung ist Art. 6 Abs. 1 lit. a
                                DSGVO und § 25 Abs. 1 TDDDG, soweit diese Einwilligung den Zugriff auf
                                Informationen im Endgerät des Nutzers/der Nutzer*in oder die Speicherung
                                von Cookies im Sinne des TDDDG umfasst. <br />
                                Die Rechtsgrundlage für die Verarbeitung der erhobenen Daten ist Art. 6 Abs.
                                1 lit. f DSGVO, da wir ein berechtigtes Interesse an der Nutzung dieses Tools
                                zur Optimierung unserer Website und zur Integration von Analyse- und
                                Tracking-Funktionalitäten haben. <br />
                                Die Daten werden so lange gespeichert, bis der Betroffene zur Löschung
                                auffordert, die Einwilligung zur Speicherung widerruft oder der Zweck für die
                                Speicherung entfällt. Zwingend gesetzliche Bestimmungen zu
                                Aufbewahrungsfristen bleiben unberührt. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Weitere Informationen: <br />
                                <a href="https://calendly.com/legal/privacy-notice" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://calendly.com/legal/privacy-notice.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.15. TikTok Pixel <br />
                                Wir nutzen auf unserer Website den TikTok Pixel. TikTok Pixel wird betrieben
                                von der TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380,
                                Irland. <br />
                                TikTok Pixel ermöglicht es uns, das Nutzerverhalten auf unserer Website zu
                                analysieren und gezielte Werbemaßnahmen zu schalten. Verarbeitet werden
                                personenbezogene Daten wie IP-Adresse, Nutzer-ID, besuchte Seiten,
                                Verweildauer und Interaktionen mit der Website. Zweck der
                                Datenverarbeitung ist die Analyse des Nutzerverhaltens und die Optimierung
                                unserer Marketingstrategien. <br />
                                Rechtsgrundlage für die Datenverarbeitung ist die Einwilligung gemäß Art. 6
                                Abs. 1 lit. a DSGVO. TikTok Pixel setzt Cookies zur Analyse und Verfolgung
                                des Nutzerverhaltens. Diese Cookies werden nur mit Einwilligung gesetzt,
                                welche jederzeit widerrufen werden kann. Rechtsgrundlage dafür ist Art. 6
                                Abs. 1 lit. a DSGVO. <br />
                                Es findet eine Datenübermittlung in Drittländer, insbesondere in die USA,
                                statt. Dabei kommen die <span className="break-all">Standardvertragsklauseln</span> (SCC) der EU-Kommission
                                zum Einsatz, um ein angemessenes Datenschutzniveau zu gewährleisten.
                                Daten werden gespeichert, bis der Betroffene die Einwilligung zur
                                Speicherung widerruft oder der Zweck für die Speicherung entfällt. <br />
                                <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.tiktok.com/legal/page/eea/privacy-policy/de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.16. HubSpot <br />
                                <a href="https://www.hubspot.com/privacy-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.hubspot.com/privacy-policy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.6.17. Google Search Console <br />
                                Wir binden auf unserer Website den Dienst Google Search Console ein, der
                                von der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                                Irland, betrieben wird. Google Search Console ist ein Dienst, der uns
                                ermöglicht, den Indexierungsstatus unserer Website zu überwachen und die
                                Sichtbarkeit in den Google-Suchergebnissen zu optimieren. <br />
                                Es werden verschiedene Daten verarbeitet, darunter Informationen zur
                                Website-Performance, Klicks, Zugriffe und technische Fehler, die auf der
                                Website auftreten. Zweck der Datenverarbeitung ist es, die Suchmaschinenoptimierung (SEO) zu verbessern, die technische
                                Performance der Website zu analysieren und Fehler zu beheben. <br />
                                Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, da
                                wir ein berechtigtes Interesse daran haben, unsere Website in den
                                Suchergebnissen zu optimieren und deren Funktionalität sicherzustellen. <br />
                                Google Search Console setzt keine Cookies auf unserer Website. Es kann
                                jedoch eine Datenübermittlung in Drittländer, insbesondere in die USA,
                                stattfinden, da Google Server weltweit betreibt. Dabei werden die
                                <span className="break-all">Standardvertragsklauseln</span> (SCCs) der EU-Kommission verwendet, um ein
                                angemessenes Datenschutzniveau sicherzustellen. <br />
                                Die Daten werden so lange gespeichert, wie sie für den jeweiligen
                                Verarbeitungszweck notwendig sind oder bis der Nutzer eine Löschung
                                beantragt. <br />
                                Weitere Informationen zur Datenverarbeitung finden sich unter: <br />
                                <a href="https://policies.google.com/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.7. Social Media Plugins
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.7.1. Facebook <br />
                                Auf dieser Website werden Elemente des sozialen Netzwerkes Facebook
                                eingebunden. Dieser Dienst wird angeboten von der Meta Platforms Ireland
                                Limited, 4 Grand Canal Square, Dublin 2, Irland. <br />
                                Ist das Social-Media-Element aktiviert, wird eine direkte Verbindung zwischen
                                dem Website-Besucher und den Servern von Facebook hergestellt und
                                dessen IP-Adresse an Facebook übermittelt. Hat der Website-Besucher ein
                                Nutzerkonto, kann der Besuch dieser Website dem entsprechenden
                                Nutzerkonto zugewiesen werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Sofern auf dieser Website mit Hilfe Facebook personenbezogene Daten
                                erfasst und an Meta weitergeleitet werden, sind wir und die Meta Platforms
                                Ireland Limited, 4 Grand Canal Square, Grand Canal Habour, Dublin 2, Irland
                                gem. Art. 26 DSGVO gemeinsam für die Datenverarbeitung verantwortlich. <br />
                                Diese gemeinsame Verantwortlichkeit beschränkt sich hierbei ausschließlich
                                auf die Erfassung und Weitergabe der Daten an Facebook. Hierzu gibt es
                                eine Vereinbarung über die gemeinsame Verarbeitung: <br />
                                <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/controller_addendum
                                </a> <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Weitere Informationen: <br />
                                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/EU_data_transfer_addendum
                                </a> <br />
                                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/help/566994660333381
                                </a> <br />
                                <a href="https://www.facebook.com/policy.php" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/policy.php
                                </a> <br />
                                <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/privacy/explanation.
                                </a> <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.7.2. Twitter <br />
                                Auf dieser Website werden Elemente des sozialen Netzwerkes Twitter
                                eingebunden. Dieser Dienst wird angeboten von der Twitter International
                                Company, One Cumberland Place, Fenian Street, Dublin 2, D02AX07, Irland. <br />
                                Ist das Social-Media-Element aktiviert, wird eine direkte Verbindung zwischen
                                dem Website-Besucher und den Servern von Twitter hergestellt und dessen
                                IP-Adresse an Twitter übermittelt. Hat der Website-Besucher ein Nutzerkonto,
                                kann der Besuch dieser Website dem entsprechenden Nutzerkonto
                                zugewiesen werden. Der Website-Betreiber erlangt hierbei keine Kenntnis
                                über den Inhalt der übertragenen Daten. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Nähere Informationen: <br />
                                <a href="https://twitter.com/de/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://twitter.com/de/privacy
                                </a> <br />
                                <a href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://gdpr.twitter.com/en/controller-to-controller-transfers.html.
                                </a> <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.7.3. Instagram <br />
                                Auf dieser Website werden Elemente des sozialen Netzwerkes Instagram
                                eingebunden. Dieser Dienst wird angeboten von der Meta Platforms Ireland
                                Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. <br />
                                Ist das Social-Media-Element aktiviert, wird eine direkte Verbindung zwischen
                                dem Website-Besucher und den Servern von Instagram hergestellt und
                                dessen IP-Adresse an Instagram übermittelt. Hat der Website-Besucher ein
                                Nutzerkonto, kann der Besuch dieser Website dem entsprechenden
                                Nutzerkonto zugewiesen werden. Wir als Website-Betreiber erlangen hierbei
                                keine Kenntnis über den Inhalt der übertragenen Daten. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Sofern auf dieser Website mit Hilfe Facebook bzw. Instagram
                                personenbezogene Daten erfasst und an Meta weitergeleitet werden, ist der
                                Website-Betreiber und die Meta Platforms Ireland Limited, 4 Grand Canal
                                Square, Grand Canal Habour,Dublin 2, Irland gem. Art. 26 DSGVO
                                gemeinsam für die Datenverarbeitung verantwortlich. Diese gemeinsame
                                Verantwortlichkeit beschränkt sich hierbei ausschließlich auf die Erfassung
                                und Weitergabe der Daten an Facebook bzw. Instagram. Hierzu gibt es eine
                                Vereinbarung über die gemeinsame Verarbeitung: <br />
                                <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/controller_addendum.
                                </a> <br />
                                Der Website-Betreiber ist für die Erteilung der Datenschutzinformationen beim
                                Einsatz des Instagram-Tools und die datenschutzrechtliche sichere
                                Einbindung des Tools auf der entsprechenden Website verantwortlich.
                                Facebook bzw. Instagram ist hingegen für die Datensicherheit ihrer Produkte
                                verantwortlich. Hieraus folgt, dass Betroffenenrechte hinsichtlich der bei
                                Facebook bzw. Instagram verarbeiteten Daten direkt bei Facebook bzw.
                                Instagram geltend zu machen sind. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/legal/EU_data_transfer_addendum
                                </a> <br />
                                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/help/566994660333381
                                </a>
                                <a href="https://www.facebook.com/policy.php" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/policy.php
                                </a>
                                <a href="https://instagram.com/about/legal/privacy/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://instagram.com/about/legal/privacy/
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.7.4. LinkedIn <br />
                                Auf dieser Website werden Elemente des sozialen Netzwerkes LinkedIn
                                eingebunden. Dieser Dienst wird angeboten von der LinkedIn Ireland
                                Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland. <br />
                                Ist das Social-Media-Element aktiviert, wird eine direkte Verbindung zwischen
                                dem Website-Besucher und den Servern von LinkedIn hergestellt und dessen
                                IP-Adresse an LinkedIn übermittelt. Hat der Website-Besucher ein
                                Nutzerkonto, kann der Besuch dieser Website dem entsprechenden
                                Nutzerkonto zugewiesen werden. Der Website-Betreiber erlangt hierbei keine
                                Kenntnis über den Inhalt der übertragenen Daten. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                <a href="https://www.linkedin.com/help/linkedin/answer/62538/datenubertragung-ausder-eu-dem-ewr-und-derschweiz?lang=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.linkedin.com/help/linkedin/answer/62538/datenubertragung-ausder-eu-dem-ewr-und-derschweiz?lang=de.
                                </a> <br />
                                Nähere Informationen: <br />
                                <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.linkedin.com/legal/privacy-policy
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.7.5. TikTok <br />
                                Auf dieser Website werden Elemente des sozialen Netzwerkes TikTok
                                eingebunden. Dieser Dienst wird angeboten von der TikTok Technology
                                Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Irland. <br />
                                Ist das Social-Media-Element aktiviert, wird eine direkte Verbindung zwischen
                                dem Website-Besucher und den Servern von TikTok hergestellt und dessen
                                IP-Adresse an TikTok übermittelt. Hat der Website-Besucher ein Nutzerkonto,
                                kann der Besuch dieser Website dem entsprechenden Nutzerkonto
                                zugewiesen werden. Der Website-Betreiber erlangt hierbei keine Kenntnis
                                über den Inhalt der übertragenen Daten. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Nähere Informationen: <br />
                                <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/de-DE?tid=331689749201" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.tiktok.com/legal/page/eea/privacy-policy/de-DE?tid=331689749201
                                </a> <br />
                                <a href="https://ads.tiktok.com/i18n/official/policy/controller-to-controller" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://ads.tiktok.com/i18n/official/policy/controller-to-controller.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.7.6. WhatsApp Kanäle <br />
                                Durch die WhatsApp Kanäle können Informationen und relevante Meldungen
                                direkt auf WhatsApp ausgespielt werden, indem Kanäle von Menschen und
                                Organisationen abonniert werden. Wenn ein Kanal abonniert wurde, werden
                                Meldungen in Form von Textnachrichten, Links zu Informationen, Bildern oder
                                Videos verschickt.Kanäle sind öffentlich, das heißt, jeder kann die Kanäle
                                finden, ihnen folgen und sie ansehen. Da Kanäle öffentlich sind und die
                                Anzahl der Nutzer unbegrenzt ist, sind Kanal-Statusmeldungen für alle und für
                                WhatsApp sichtbar. Das bedeutet auch, dass Kanal-Statusmeldungen zu den
                                Informationen gehören, die WhatsApp erhebt und verwendet, um die
                                Sicherheit und Integrität der Kanäle zu verbessern.WhatsApp erhebt
                                Informationen der Nutzer, beispielsweise über ihre Reaktionen, ihre
                                Sprachwahl und die Kanäle, denen sie folden.<br />
                                <a href="https://www.whatsapp.com/legal/channels-privacy-policy-eea?lang=de_DE" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.whatsapp.com/legal/channels-privacy-policy-eea?lang=de_DE.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.8. Social Media Profile <br />
                                Außerdem nutzen wir auch die Möglichkeit, Werbeanzeigen und
                                Stellengesuche in sozialen Medien zu schalten.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.8.1. LinkedIn <br />
                                <ul className="pl-10 my-[20px]">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">a)</span> Interaktion mit unserem Unternehmensprofil
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">b)</span> Seiten-Insights <br />
                                        LinkedIn stellt uns zusammengefasste Statistiken und Einblicke (sogenannte
                                        Page-Insights) zur Verfügung, die uns darüber Aufschluss geben, wie
                                        Personen mit unserer Unternehmensseite interagieren. Wir erhalten unter
                                        anderem Informationen über die Anzahl der Profile, die unsere Beiträge
                                        aufrufen, kommentieren oder anderweitig damit interagieren, sowie
                                        zusammengefasste demografische und andere Informationen, die uns helfen,
                                        etwas über die Interaktion mit unserer Seite bzw. unserem LinkedIn Profil zu
                                        erfahren. Pages Insights, die uns von LinkedIn zur Verfügung gestellt werden,
                                        bestehen aus aggregierten Daten, wobei uns LinkedIn keine
                                        personenbezogenen Daten von Mitgliedern in Bezug auf Page Insights zur
                                        Verfügung stellt. Wir haben auch keine Möglichkeit, die Page Insights mit
                                        einzelnen Mitgliedern zu verknüpfen. <br />
                                        Beim Schalten von Werbeanzeigen übermittelt LinkedIn uns Informationen
                                        über die Arten von Personen, die unsere Anzeigen sehen und über den Erfolg
                                        unserer Anzeigen. Personenbezogene Daten werden dabei nur dann an uns
                                        weitergegeben, wenn diese Person in eine derartige Verarbeitung eingewilligt
                                        hat. Wir erhalten von LinkedIn auch Informationen, mit denen wir
                                        nachvollziehen können, welche unserer Anzeigen dazu geführt hat, dass ein
                                        Kauf getätigt oder eine Handlung durchgeführt wurde. <br />
                                        Die Verarbeitung dieser Daten dient dem Zweck der Analyse unserer
                                        Reichweite und der Anpassung unserer Inhalte und Anzeigen an die
                                        Nutzerinteressen. Anhand der Auswertungen dieser Daten können wir
                                        erkennen, wie unser Content, unser Profil und unsere Werbung konsumiert
                                        werden. Damit können wir zielgruppengerechten Content schaffen und Werbung schalten, um unser Unternehmen und unsere Leistungen besser zu
                                        vermarkten. <br />
                                        Die Verarbeitung basiert auf unserem berechtigten Interesse nach Art. 6 Abs.
                                        1 S. 1 lit. f DSGVO. <br />
                                        Bei der Verarbeitung personenbezogener Daten im Zuge der sogenannten
                                        Page-Insights erfolgt die Verarbeitung in gemeinsamer Verantwortlichkeit mit
                                        LinkedIn gem. Art. 26 Abs. 1 DSGVO. <br />
                                        Hierzu haben wir eine entsprechende Vereinbarung mit LinkedIn getroffen, die
                                        hier (https://legal.linkedin.com/pages-joint-controller-addendum) eingesehen
                                        werden kann. <br />
                                        Die Kontaktdaten von LinkedIn lauten: <br />
                                        LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland. <br />
                                        Für LinkedIn können Sie unter folgendem Link mit dem
                                        Datenschutzbeauftragten Kontakt aufnehmen: <br />
                                        <a href="https://www.linkedin.com/help/linkedin/ask/TSO-DPO" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                            https://www.linkedin.com/help/linkedin/ask/TSO-DPO.
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.8.2. Verarbeitung durch LinkedIn <br />
                                Im Zusammenhang mit Ihrem Besuch unseres Unternehmensprofils
                                verarbeitet LinkedIn möglicherweise auch darüber hinaus personenbezogene
                                Daten. In diesem Fall erfolgt die Verarbeitung in alleiniger Verantwortung von
                                LinkedIn und ohne unsere Kenntnis. Nähere Informationen von LinkedIn
                                hierzu finden Sie unter: <br />
                                <a href="https://de.linkedin.com/legal/privacy-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de.linkedin.com/legal/privacy-policy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.8.3. LinkedIn Ads <br />
                                Außerdem binden auf unserer Website die Funktionen von LinkedIn Ads ein. <br />
                                Mit Hilfe von LinkedIn Ads, können wir einfach effektive Anzeigen erstellen,
                                welche von einer großen Zielgruppe auf LinkedIn wahrgenommen werden
                                können. <br />
                                LinkedIn erhebt hierzu personenbezogene Daten durch Cookies. Hierdurch
                                wird das Verhalten der Nutzerausgewertet, um so die Wirksamkeit der Werbemaßnahmen zu analysieren und für zukünftige Kampagnen
                                nutzerorioentierter anzupassen. <br />
                                Diese Cookies werden nur mit Einwilligung gesetzt. Die Einwilligung kann
                                jederzeit widerrufen werden. Rechtsgrundlage dafür ist Art 6 Abs. 1 lit. a
                                DSGVO. <br />
                                Im Übrigen ist Rechtsgrundlage für die Verarbeitung der Daten durch LinkedIn
                                Ads Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse daran,
                                unseren Werbeauftritt auf der Plattform LinkedIn auszubauen und zu
                                optimieren. <br />

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.9. Facebook <br />
                                Wir betreiben eine Facebook Fanpage auf https://www.facebook.com/. Dieses
                                soziale Netzwerk wir von der Meta Platforms Ireland Limited, 4 Grand Canal
                                Square, Grand Canal Harbour, Dublin 2, Irland, betrieben. <br />

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.9.1. Interaktion mit unserem Unternehmensprofil <br />
                                Bei dem Besuch unseres Facebook-Profil und der Interaktion darüber mit uns
                                verarbeiten wir personenbezogene Daten. Einerseits die öffentlich zur
                                Verfügung gestellten Daten auf dem Profil. Andererseits auch die
                                personenbezogenen Daten, die in Posts, Kommentaren oder direkten
                                Nachrichten an uns enthalten sind. Durch Interaktionen wie Liken oder Teilen
                                können wir das Nutzerprofil mit den öffentlichen Informationen sehen. <br />
                                Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Es liegt
                                in unserem berechtigten Interesse, relevante und interessante Inhalte zur
                                Verfügung zu stellen und die Nutzung und Funktionalität unseres Facebook-
                                Profils zu ermöglichen. <br />
                                Soweit eine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder
                                zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, basiert unsere
                                Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.9.2. Seiten Insights <br />
                                Wie in der Meta-Datenschutzrichtlinie unter „Wie verwenden wir deine
                                Informationen?“ (erläutert, erhebt und verwendet Meta Informationen auch, um Analysedienste, sogenannte Seiten-Insights, für Seitenbetreiber
                                bereitzustellen. Dies gilt auch für unsere Facebook Seite. <br />
                                Bei Seiten-Insights handelt es sich um zusammengefasste Statistiken, die
                                anhand bestimmter Interaktionen der Besuchenden mit Seiten und den mit
                                ihnen verbundenen Inhalten (z. B. dem Ansehen einer Seite oder eines
                                Videos, dem Abonnieren einer Seite, eine Seite mit „Gefällt mir" oder „Gefällt
                                mir nicht mehr" markieren etc.) erstellt und von den Meta Servern protokolliert
                                werden. <br />
                                Meta stellt uns im Zusammenhang mit den Seiten-Insights
                                zusammengefasste Statistiken und Einblicke zur Verfügung, die uns darüber
                                Aufschluss geben, wie Personen mit unserer Unternehmensseite interagieren.
                                Dabei erhalten wir keinen Zugriff auf personenbezogene Daten, sondern nur
                                auf die zusammengefassten Seiten-Insights. Mithilfe der Seiten-Insights
                                können wir anonyme Statistiken z. B. der Reichweite unseres Accounts, der
                                Seitenaufrufe, der Likes etc. einsehen. Diese enthalten auch Auswertungen
                                nach Alter, Geschlecht und Standort der Nutzenden (wie von diesen in ihren
                                jeweiligen Facebook-Profilen angegeben). Für die Auswertung der Reichweite
                                können wir Einstellungen vornehmen bzw. entsprechende Filter hinsichtlich
                                der Auswahl eines Zeitraums, der Betrachtung eines bestimmten Beitrags
                                sowie der demografischen Gruppierungen setzen. Diese Daten sind
                                anonymisiert. Rückschlüsse auf bestimmte Personen sind uns dabei nicht
                                möglich. <br />
                                Die Verarbeitung dieser Daten dient dem Zweck der Analyse unserer
                                Reichweite und der Anpassung unserer Inhalte und Anzeigen an die
                                Nutzerinteressen, damit Besuchende einen größtmöglichen Nutzen daraus
                                ziehen können. Anhand der Auswertungen dieser Daten können wir
                                erkennen, wie unser Content, unser Profil und unsere Werbung konsumiert
                                werden. Damit können wir zielgruppengerechten Content schaffen und
                                Werbung schalten, um unser Unternehmen und unsere Leistungen besser zu
                                vermarkten. <br />
                                Die Verarbeitung basiert auf unserem berechtigten Interesse nach Art. 6 Abs.
                                1 S. 1 lit. f DSGVO. <br />
                                Bei der Verarbeitung personenbezogener Daten im Zuge der sogenannten
                                Seiten-Insights erfolgt in gemeinsamer Verantwortlichkeit mit Facebook gem.
                                Art. 26 Abs. 1 DSGVO. <br />
                                Hierzu haben wir eine entsprechende Vereinbarung mit Facebook getroffen,
                                die hier <br />

                                <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    (https://www.facebook.com/legal/terms/page_controller_addendum)
                                </a>
                                eingesehen werden kann. <br />
                                Die Kontaktdaten von Facebook lauten: <br />
                                Online-Kontakt: <br />
                                <a href="https://www.facebook.com/help/contact/1650115808681298" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/help/contact/1650115808681298.
                                </a> <br />
                                Postalisch: Meta Platforms Ireland Limited, ATTN: Privacy Operations,
                                Merrion Road, Dublin 4, D04 X2K5, Irland. <br />
                                Für Facebook können Sie unter folgendem Link mit dem
                                Datenschutzbeauftragten Kontakt aufnehmen: <br />
                                <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/help/contact/540977946302970.
                                </a> <br />
                                Weitere Informationen über die Seiten-Insights: <br />
                                <a href="https://de-de.facebook.com/legal/terms/page_cntroller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/legal/terms/page_cntroller_addendum
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.9.3. Verarbeitung personenbezogener Daten und Cookies durch Meta <br />
                                Beim Zugriff auf eine Facebook-Seite wird die Ihrem Endgeräte zugeteilte IPAdresse
                                an Facebook übermittelt. Nach Auskunft von Facebook wird diese IPAdresse
                                anonymisiert (bei "deutschen" IP-Adressen). Facebook speichert
                                darüber hinaus Informationen über die Endgeräte seiner Nutzer (z.B. im
                                Rahmen der Funktion <span className="break-all">„Anmeldebenachrichtigung"</span> ); gegebenenfalls ist
                                Facebook damit eine Zuordnung von IP-Adressen zu einzelnen Nutzern
                                möglich. Wenn Sie als Nutzer aktuell bei Facebook angemeldet sind, befindet
                                sich auf Ihrem Endgerät ein Cookie mit Ihrer Facebook-Kennung. Dadurch ist
                                Facebook in der Lage, nachzuvollziehen, dass Sie diese Seite aufgesucht und
                                wie Sie sie genutzt haben. Über in Websites eingebundene Facebook-Buttons
                                ist es Facebook möglich, Ihre Besuche auf diesen Websites zu erfassen und
                                Ihrem Facebook-Profil zuzuordnen. Anhand dieser Daten können Inhalte oder
                                Werbung auf Sie zugeschnitten angeboten werden. <br />
                                Informationen dazu, wie personenbezogene Daten verwaltet oder gelöscht
                                werden können, sind im Privacy Center von Facebook zu finden: <br />
                                <a href="https://www.facebook.com/privacy/center/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/privacy/center/
                                </a> <br />
                                Nähere Informationen zu dem Umgang mit Daten von Facebook sind hier zu
                                finden: <br />
                                <a href="http://de-de.facebook.com/about/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    http://de-de.facebook.com/about/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.10. Instagram <br />
                                Wir betreiben ein Instagram Profil. Diese Social-Media-Plattform wird
                                angeboten von der Meta Platforms Ireland Limited, 4 Grand Canal Square,
                                Grand Canal Harbour, Dublin 2, Irland.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.10.1. Interaktion mit unserem Unternehmensprofil <br />
                                Bei dem Besuch unseres Instagram Profils und der Interaktion darüber mit
                                uns verarbeiten wir personenbezogene Daten. Einerseits die öffentlich zur
                                Verfügung gestellten Daten auf dem Profil. Andererseits auch die
                                personenbezogenen Daten, die in Posts, Kommentaren oder direkten
                                Nachrichten an uns enthalten sind. Durch Interaktionen wie Liken oder Teilen
                                können wir das Nutzerprofil mit den öffentlichen Informationen sehen. <br />
                                Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Es liegt
                                in unserem berechtigten Interesse, relevante und interessante Inhalte zur
                                Verfügung zu stellen und die Nutzung und Funktionalität unseres Instagram
                                Profils zu ermöglichen. <br />
                                Soweit eine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder
                                zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, basiert unsere
                                Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.10.2. Insights <br />
                                Wie in der Meta-Datenschutzrichtlinie unter „Wie verwenden wir deine
                                Informationen?“ <br />
                                <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    (https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect)
                                </a> <br />
                                erläutert, erhebt und
                                verwendet Meta Informationen auch, um Analysedienste, sogenannte Insights, für Seitenbetreiber bereitzustellen. Dies gilt auch für unser Instagram
                                Profil. <br />
                                Bei den Insights handelt es sich um zusammengefasste Statistiken, die
                                anhand bestimmter Interaktionen der Besuchenden mit Seiten und den mit
                                ihnen verbundenen Inhalten erstellt und von den Meta Servern protokolliert
                                werden. Hierzu zählen unter anderem folgende Informationen
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        Wie viele Menschen sehen unsere Produkte, Dienste oder Inhalte, wie
                                        u. a. Beiträge, Videos, Instagram-Seiten, Inserate, Shops und
                                        Werbeanzeigen (wenn die Werbung auf Meta-Produkten gezeigt wird)
                                        und interagieren mit ihnen;
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        Wie interagieren Personen mit unseren Inhalten, Websites, Apps und
                                        Diensten;
                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        Welche Personengruppe interagiert mit unseren Inhalten bzw. welche
                                        Personengruppe nutzt unsere Dienste.
                                    </li>
                                </ul>
                                Meta stellt uns zusammengefasste Berichte und Einblicke zur Verfügung, die
                                uns darüber Aufschluss geben, wie gut unsere Inhalte, Features, Produkte
                                und Dienste abschneiden. <br />
                                Dabei erhalten wir keinen Zugriff auf personenbezogene Daten, sondern nur
                                auf die zusammengefassten Berichte. <br />
                                Für die Auswertung der Reichweite können wir Einstellungen vornehmen bzw.
                                entsprechende Filter hinsichtlich der Auswahl eines Zeitraums, der
                                Betrachtung eines bestimmten Beitrags sowie der demografischen
                                Gruppierungen setzen. Diese Daten sind anonymisiert. Rückschlüsse auf
                                bestimmte Personen sind uns dabei nicht möglich. <br />
                                Die Verarbeitung dieser Daten dient dem Zweck der Analyse unserer
                                Reichweite und der Anpassung unserer Inhalte und Anzeigen an die
                                Nutzerinteressen, damit Besuchende einen größtmöglichen Nutzen daraus
                                ziehen können. Anhand der Auswertungen dieser Daten können wir
                                erkennen, wie unser Content, unser Profil und unsere Werbung konsumiert
                                werden. Damit können wir zielgruppengerechten Content schaffen und
                                Werbung schalten, um unser Unternehmen und unsere Leistungen besser zu
                                vermarkten. <br />
                                Die Verarbeitung basiert auf unserem berechtigten Interesse nach Art. 6 Abs.
                                1 S. 1 lit. f DSGVO <br />
                                Bei der Verarbeitung personenbezogener Daten im Zuge der sogenannten
                                Insights erfolgt die Verarbeitung in gemeinsamer Verantwortlichkeit mit Meta
                                gem. Art. 26 Abs. 1 DSGVO. <br />
                                Hierzu haben wir eine entsprechende Vereinbarung mit Meta getroffen, die
                                hier <br />
                                <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    (https://www.facebook.com/legal/terms/page_controller_addendum.)
                                </a> <br />

                                eingesehen werden kann. <br />
                                Die Kontaktdaten von Meta lauten: <br />
                                Online-Kontakt: <br />
                                <a href="https://www.facebook.com/help/contact/1650115808681298" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/help/contact/1650115808681298
                                </a> <br />

                                Postalisch: Meta Platforms Ireland Limited, ATTN: Privacy Operations,
                                Merrion Road, Dublin 4, D04 X2K5, Irland. <br />
                                Für Instagram können Sie unter folgendem Link mit dem
                                Datenschutzbeauftragten Kontakt aufnehmen: <br />
                                <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.facebook.com/help/contact/540977946302970.
                                </a> <br />
                                Weitere Informationen über die Insights: <br />
                                <a href="https://de-de.facebook.com/help/pages/insights" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de-de.facebook.com/help/pages/insights.
                                </a> <br />
                                Die vollständige Datenschutzrichtlinie von Instagram finden Sie hier: <br />
                                <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect
                                </a> <br />
                                Verarbeitung personenbezogener Daten und Cookies durch Meta <br />
                                Beim Zugriff auf eine Instagram-Seite wird die Ihrem Endgerät zugeteilte IPAdresse
                                an Meta übermittelt. Nach Auskunft von Meta wird diese IP-Adresse
                                anonymisiert (bei "deutschen" IP-Adressen). Meta speichert darüber hinaus
                                Informationen über die Endgeräte seiner Nutzer (z.B. im Rahmen der
                                Funktion <span className="break-all">„Anmeldebenachrichtigung"</span>); gegebenenfalls ist Meta damit eine
                                Zuordnung von IP-Adressen zu einzelnen Nutzern möglich. Wenn Sie als
                                Nutzer aktuell bei Instagram angemeldet sind, befindet sich auf Ihrem
                                Endgerät ein Cookie mit Ihrer Instagram-Kennung. Dadurch ist Meta in der
                                Lage nachzuvollziehen, dass Sie diese Seite aufgesucht und wie Sie sie genutzt haben. Über in Websites eingebundene Meta-Buttons ist es Meta
                                möglich, Ihre Besuche auf diesen Websites zu erfassen und Ihrem Instagram-
                                Profil zuzuordnen. Anhand dieser Daten können Inhalte oder Werbung auf Sie
                                zugeschnitten angeboten werden. <br />
                                Nähere Informationen: <br />

                                <a href=" https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect.
                                </a> <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.10.3. Threads <br />
                                Wir nutzen außerdem die Funktionen von Threads. Bei der Nutzung des
                                Dienstes erhobene Daten, darunter IP-Adresse, verwendete Applikation und
                                Informationen zum Endgerät sowie aufgerufene Webseiten, Standort und
                                Mobilfunkanbieter, werden von der Meta Platform, Inc., wie oben beschrieben,
                                verarbeitet. Diese Daten können dabeiauch in Länder außerhalb der
                                Europäischen Union übertragen werden.Die erfassten Daten werden mit dem
                                Konto oder Profil bei Threads verknüpft. Es besteht keine Kontrolle über die
                                Spezifika der von Threads bearbeiteten Daten, einschließlich deren
                                Verarbeitung, Nutzung oder Weitergabe an Dritte. <br />
                                <a href="https://help.instagram.com/769983657850450/?helpref=uf_share" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://help.instagram.com/769983657850450/?helpref=uf_share
                                </a> <br />
                                <a href="https://privacycenter.instagram.com/policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacycenter.instagram.com/policy.
                                </a> <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.11. X (ehemals Twitter) <br />
                                Wir greifen auf den Kurznachrichtendienst „X" (ehm. Twitter) zurück. Dies ist
                                ein Dienst der X Corp., 1355 Market Street, Suite 900, San Francisco, CA
                                94103 USA. Verantwortlich für die Datenverarbeitung von außerhalb der
                                Vereinigten Staaten lebenden Personen ist die Twitter International Company,
                                One Cumberland Place, Fenian Street, Dublin 2 D02 AX07, Irland.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.11.1. Interaktionen mit unserem Account <br />
                                Grundsätzlich erheben und verarbeiten wir keine Daten von Ihnen bei der
                                Nutzung unseres Kurznachrichtendienstes. Die von Ihnen bei X
                                eingegebenen Daten, insbesondere der Nutzername und die unter Ihrem
                                Account veröffentlichten Inhalte, werden von uns aufgrund Ihrer Einwilligung
                                gemäß Art. 6 Abs. 1 lit. a DSGVO verarbeitet, soweit Ihre Tweets gegebenenfalls retweetet werden, wir auf diese antworten oder Tweets
                                verfasst werden, die auf Ihren Account verweisen. Die frei bei X
                                veröffentlichten und verbreiteten Daten werden so von uns einbezogen und
                                unseren Followern zugänglich gemacht.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.11.2. Von X verarbeitete Daten <br />
                                Wir haben keinen Einfluss auf Art und Umfang der durch die X Corp.
                                verarbeiteten Daten, die Art der Verarbeitung und Nutzung oder die
                                Weitergabe dieser Daten an Dritte. Wenn Sie X verwenden, werden Ihre
                                personenbezogenen Daten von der X Corp. erfasst, übertragen, gespeichert,
                                offengelegt und verwendet und dabei unabhängig von Ihrem Wohnsitz in die
                                Vereinigten Staaten, Irland und jedes andere Land, in dem die X Corp.
                                geschäftlich tätig wird, übertragen und dort gespeichert und genutzt. <br />
                                X verarbeitet dabei zum einen alle freiwillig eingegebenen Daten wie Name
                                und Nutzername, E-Mail-Adresse, Telefonnummer oder die Kontakte des
                                Adressbuches, soweit diese hochgeladen oder synchronisiert wurden. <br />
                                Zum anderen wertet X aber auch die geteilten Inhalte daraufhin aus, an
                                welchen Themen der Nutzer interessiert ist. Vertrauliche Nachrichten, die
                                direkt an andere Nutzer geschickt werden, verarbeitet und speichert X.
                                Anhand von GPS-Daten, Informationen zu Drahtlosnetzwerken oder über die
                                IP-Adresse kann X den Standort des Nutzers bestimmen. <br />
                                X erhält auch Informationen darüber, welche Inhalte angesehen werden, auch
                                wenn der Nutzer keinen Account erstellt hat. <br />
                                X verarbeitet sog. „Log-Daten". Dabei handelt es sich um die IP-Adresse, den
                                Browsertyp, das Betriebssystem, Informationen zu der zuvor aufgerufenen
                                Website und den aufgerufenen Seiten, dem Standort, dem Mobilfunkanbieter,
                                dem genutzten Endgerät (einschließlich Geräte-ID und Anwendungs-ID), die
                                verwendeten Suchbegriffe und Cookie-Informationen. <br />
                                Dadurch, dass es sich bei der X Corp. um einen außereuropäischen Anbieter
                                handelt, der eine europäische Niederlassung nur in Irland hat, ist dieser nach
                                seiner eigenen Auffassung nicht an deutsche Datenschutzvorschriften
                                gebunden. Dies betrifft z. B. die Rechte auf Auskunft, Sperrung oder Löschung von Daten oder die Möglichkeit, einer Verwendung von
                                Nutzungsdaten für Werbezwecke zu widersprechen. <br />
                                Im Bereich der allgemeinen Einstellungen des X-Kontos sowie unter dem
                                Punkt „Datenschutz und Sicherheit" kann die Verarbeitung der Daten
                                eingeschränkt werden. Außerdem kann auf Mobilgeräten (Smartphones,
                                Tablet-Computer) in den dortigen Einstellmöglichkeiten der Zugriff von X auf
                                Kontakt- und Kalenderdaten, Fotos, Standortdaten etc. beschränkt werden.
                                Dies ist jedoch abhängig vom genutzten Betriebssystem. <br />
                                Weitere Informationen dazu sind hier zu finden: <br />
                                <a href="https://help.twitter.com/de/safety-and-security/x-privacy-settings" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://help.twitter.com/de/safety-and-security/x-privacy-settings.
                                </a> <br />
                                Angaben über die Verarbeitung der Daten durch X sind in der
                                Datenschutzerklärung von X zu finden: <br />
                                <a href="https://twitter.com/de/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://twitter.com/de/privacy
                                </a> <br />
                                Außerdem können über das X-Datenschutzformular oder die
                                Archivanforderungen können Informationen angefordert werden: <br />
                                <a href="https://support.twitter.com/forms/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://support.twitter.com/forms/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.12. TikTok <br />
                                Wir betreiben einen TikTok-Kanal. TikTok wird von der TikTok Technology
                                Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Ireland (nachfolgend „TikTok
                                Ireland“) zur Verfügung gestellt. Über unseren TikTok-Kanal erhalten wir die
                                Möglichkeit, uns den Nutzern von TikTok zu präsentieren und mit Ihnen in
                                Kontakt zu treten.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.12.1. Interaktionen mit unserem TikTok-Kanal <br />
                                Nutzern können über ihren TikTok-Account mit unserem TikTok-Kanal
                                interagieren, indem Sie zum Beispiel unsere Post liken oder kommentieren.
                                Dabei verarbeiten wir die dazugehörigen Daten wie zum Beispiel den
                                Benutzernamen und das Profilbild. <br />
                                Wir nutzen diese Daten, um unsere Inhalte und deren Präsentation zu
                                optimieren und auf die jeweiligen Nutzerinteressen anzupassen. <br />
                                Außerdem ist es möglich, uns Direktnachrichten auf unserem TikTok-Kanal
                                zukommen zu lassen. Auch hier wird uns der Benutzername und das Profilbild
                                angezeigt. <br />
                                Rechtsgrundlage der Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Wir
                                haben ein berechtigtes Interesse an der Optimierung unseres TikTok-Kanals
                                und der dort veröffentlichten Inhalte. Außerdem haben wir ein berechtigtes
                                Interesse an der Kommunikation mit den Nutzern, um Fragen zu beantworten,
                                auf Kritik einzugehen, eine Beziehung aufzubauen und Informationen
                                auszutauschen. So können wir unsere Leistungen verbessern und auf die
                                Bedürfnisse möglicher Kunden eingehen. Mit der Kommunikation über TikTok
                                erreichen wir insbesondere jüngere Kunden. <br />
                                Kommentare werden zeitlich unbegrenzt auf dem Kanal gespeichert und
                                können von anderen Nutzern eingesehen werden. Das Gleiche gilt für die
                                Nutzung der Like-Funktion und Direktnachrichten.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.12.2. TikTok Analyse <br />
                                Beim Aufruf und der Nutzung unseres TikTok-Kanals werden zusätzlich Daten
                                zur TikTok Analyse verarbeitet. Dabei handelt es sich um zusammengefasste
                                Statistiken, die anhand bestimmter Interaktionen der Besuchenden mit
                                unserem TikTok-Kanal durch TikTok erstellt und protokolliert werden und
                                Aufschluss darüber geben, wie mit unserem Kanal interagiert wird. <br />
                                Diese Daten umfassen, sind aber nicht beschränkt auf:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Follower-Wachstum</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Videoaufrufe</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Profilaufrufe</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Durchschnittliche Wiedergabezeit</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Quellen des Traffics (z.B. Profil, For You-Feed)</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Geografische Verteilung des Publikums</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Aktivitätszeiten der Follower.</li>
                                </ul>
                                Die Daten werden uns in aggregierter Form als Statistiken bereitgestellt. Wir
                                erhalten keinen Zugriff auf personenbezogene Daten, sondern nur auf die
                                zusammengefassten Statistiken. <br />
                                Weitere Informationen zu den TikTok Analysen finden sich hier: <br />
                                <a href="https://www.tiktok.com/creators/creator-portal/en-us/tiktok-content-strategy/understanding-your-analytics/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.tiktok.com/creators/creator-portal/en-us/tiktok-content-strategy/understanding-your-analytics/.
                                </a> <br />
                                Die Verarbeitung dieser Daten dient ausschließlich der Analyse und
                                Verbesserung der Inhalte auf unserem TikTok-Kanal. Anhand der
                                Auswertungen dieser Daten können wir erkennen, wie unser Content und
                                unser TikTok-Kanal konsumiert werden. Damit können wir
                                zielgruppengerechten Content schaffen und ggf. Werbung schalten, um unser
                                Unternehmen und unsere Leistungen besser zu vermarkten. <br />
                                Die Verarbeitung basiert auf unserem berechtigten Interesse nach Art. 6 Abs.
                                1 S. 1 lit. f DSGVO. <br />
                                Bei der Verarbeitung personenbezogener Daten im Zuge der TikTok Analysen
                                erfolgt die Verarbeitung in gemeinsamer Verantwortlichkeit mit TikTok gem.
                                Art. 26 Abs. 1 DSGVO. <br />
                                Hierzu haben wir eine entsprechende Vereinbarung mit TikTok getroffen, die
                                hier eingesehen werden kann. <br />
                                Die Kontaktdaten von TikTok lauten: <br />
                                Online-Kontakt: <br />
                                <a href="https://privacytiktok.zendesk.com/hc/en-us/requests/new" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacytiktok.zendesk.com/hc/en-us/requests/new.
                                </a> <br />
                                Postalisch: TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02
                                T380, Ireland. <br />
                                Über dieses Formular kann man mit dem Datenschutzbeauftragten von
                                TikTok Kontakt aufnehmen: <br />
                                <a href="https://www.tiktok.com/legal/report/DPO" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.tiktok.com/legal/report/DPO.
                                </a> <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.12.3. Verarbeitung personenbezogener Daten durch TikTok <br />
                                Bei Nutzung der Angebote von TikTok verarbeitet TikTok personenbezogene
                                Daten den Nutzern. Dazu gehören Daten wie Ihre IP-Adresse, Standortdaten,
                                Zeitzoneneinstellungen, Werbe-IDs, App- und Browser-Versionen sowie
                                Daten zu dem Gerät (System, Netzwerktyp, Geräte-ID, Bildschirmauflösung,
                                Betriebssystem, Audioeinstellungen und angeschlossene Audiogeräte). Auch die aufgerufenen TikTok-Profile und Kanäle, Likes, Nachrichten und weitere
                                Nutzungsdaten werden verarbeitet. Sofern Sie mit einem eigenen TikTok-
                                Account angemeldet sind, werden diese Daten Ihrem Account zugeordnet. <br />
                                Weitere Informationen zur Verarbeitung der Daten durch TikTok finden sich
                                hier: <br />
                                <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.tiktok.com/legal/page/eea/privacy-policy/de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.13. WhatsApp Kanal <br />
                                Durch WhatsApp Kanäle können Informationen und relevante Meldungen
                                direkt auf WhatsApp ausgespielt werden, indem Kanäle von Menschen und
                                Organisationen abonniert werden. Wenn ein Kanal abonniert wurde, werden
                                Meldungen in Form von Textnachrichten, Links zu Informationen, Bildern oder
                                Videos verschickt.Kanäle sind öffentlich, das heißt, jeder kann die Kanäle
                                finden, ihnen folgen und sie ansehen. Da Kanäle öffentlich sind und die
                                Anzahl der Nutzer unbegrenzt ist, sind Kanal-Statusmeldungen für alle und für
                                WhatsApp sichtbar.WhatsApp erhebt Informationen der Nutzer,
                                beispielsweise über ihre Reaktionen, ihre Sprachwahl und die Kanäle, denen
                                sie folgen.der Nutzer erhalten. <br />
                                <a href="https://www.whatsapp.com/legal/channels-privacy-policy-eea?lang=de_DE" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.whatsapp.com/legal/channels-privacy-policy-eea?lang=de_DE
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.13.1. YouTube <br />
                                Wir betreiben ein Profil auf YouTube. Dies ist eine Videoplattform der Google
                                Ireland Limited mit Sitz in Gordon House, Barrow Street, Dublin 4, Irland, die
                                es uns ermöglicht, Videoinhalte zu veröffentlichen und mit unserem Publikum
                                zu interagieren. <br />
                                Auch wir verarbeiten die Daten der Profilbesucher. Dabei verarbeiten wir
                                Daten aus Ihrer Nutzung unseres Profils, die uns von YouTube zur Verfügung
                                gestellt wird. <br />
                                Diese Informationen enthalten Statistiken zu den Besuchen unseres Profils,
                                Berichte zur Wiedergabezeit unserer Videos, zur Interaktion von Nutzern (z.B.
                                „Mag ich“ oder Kommentare), als auch Informationen über einzelne Personen
                                die aktiv mit unserer Seite interagieren, z.B. durch das Abonnieren oder die
                                <span className="break-all">Kommunikationsmöglichkeiten</span> von YouTube. <br />
                                Die bei YouTube eingegebenen Daten, insbesondere der Nutzername und die
                                unter dem Account veröffentlichten Inhalte, werden von uns durch
                                Interaktionen mit unserem Profil sichtbar gemacht und verarbeitet. <br />
                                Wir verarbeiten diese Daten, um eine Kommunikation zu ermöglichen und um
                                unsere Inhalte in Reichweite und Zielgruppe zu optimieren. <br />
                                Rechtsgrundlage für die Verarbeitung ist ein berechtigtes Interesse nach Art.
                                6 Abs. 1 lit. f DSGVO zu den genannten Zwecken.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.13.2. Datenverarbeitung durch uns <br />
                                Auch wir verarbeiten die Daten der Profilbesucher. Dabei verarbeiten wir
                                Daten aus Ihrer Nutzung unseres Profils, die uns von YouTube zur Verfügung
                                gestellt wird. <br />
                                Diese Informationen enthalten Statistiken zu den Besuchen unseres Profils,
                                Berichte zur Wiedergabezeit unserer Videos, zur Interaktion von Nutzern (z.B.
                                „Mag ich“ oder Kommentare), als auch Informationen über einzelne Personen
                                die aktiv mit unserer Seite interagieren, z.B. durch das Abonnieren oder die
                                <span className="break-all">Kommunikationsmöglichkeiten</span> von YouTube. <br />
                                Die bei YouTube eingegebenen Daten, insbesondere der Nutzername und die
                                unter dem Account veröffentlichten Inhalte, werden von uns durch
                                Interaktionen mit unserem Profil sichtbar gemacht und verarbeitet. <br />
                                Wir verarbeiten diese Daten, um eine Kommunikation zu ermöglichen und um
                                unsere Inhalte in Reichweite und Zielgruppe zu optimieren. <br />
                                Rechtsgrundlage für die Verarbeitung ist ein berechtigtes Interesse nach Art.
                                6 Abs. 1 lit. f DSGVO zu den genannten Zwecken. <br />

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.13.3. Datenverarbeitung durch YouTube <br />
                                Beim Besuch unseres YouTube-Kanals oder bei Interaktion mit unserem
                                YouTube-Kanal, erfasst YouTube personenbezogene Daten wie die IPAdresse,
                                Geräteinformationen, geografische Informationen, sowie die
                                Aktivitäten auf der Plattform, einschließlich der angesehenen Videos, der
                                Interaktionen wie Likes, Kommentare und Abonnements. Diese Daten können
                                durch Cookies und ähnliche Technologien gesammelt werden, die auf dem
                                Gerät gespeichert werden. <br />
                                YouTube verwendet diese Informationen, um die Plattform zu betreiben und
                                zu verbessern, personalisierte Werbung zu schalten und um Analysen und
                                Messungen durchzuführen, um zu verstehen, wie Nutzer mit den Inhalten
                                interagieren. Darüber hinaus hilft die Datenverarbeitung, die Reichweite und
                                Effektivität der Inhalte zu bewerten und zu verbessern. <br />
                                Die Verarbeitung der Daten durch YouTube erfolgt unter anderem auf der
                                Grundlage Ihrer Einwilligung, die durch die Annahme der Cookie-Richtlinien
                                auf YouTube ausgedrückt wird. <br />
                                Die von YouTube erfassten Daten können innerhalb der Google-
                                Unternehmensgruppe sowie an Dritte weitergegeben werden, die in Ländern
                                außerhalb der Europäischen Union ansässig sein können, einschließlich der
                                USA. Google LLC ist durch das EU-U.S. Data Privacy Framework zertifiziert,
                                was sicherstellt, dass auch bei der Übermittlung in Drittländer ein
                                angemessenes Datenschutzniveau gewahrt bleibt. <br />
                                Wir haben keinen Einfluss auf den Umfang der durch YouTube verarbeiteten
                                Daten, die Art der Verarbeitung und Nutzung oder die Weitergabe dieser Daten an Dritte. Auch haben wir insoweit keine effektiven
                                Kontrollmöglichkeiten. <br />
                                Angaben darüber, welche Daten durch YouTube verarbeitet und zu welchen
                                Zwecken genutzt werden, finden Sie in der Datenschutzerklärung von <br />
                                YouTube: <br />
                                <a href="https://policies.google.com/privacy?hl=de&gl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de&gl=de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.14. Google Unternehmensprofil <br />
                                Wir verfügen über ein sogenanntes Google Unternehmensprofil. Dabei greifen
                                wir auf den von Google angebotenen Informationsdienst und die Dienste der
                                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
                                („Google“) zurück.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.14.1. Datenverarbeitung durch Google <br />
                                Die Google-Seite und ihre Funktionen werden in eigener Verantwortung
                                genutzt. Dies gilt insbesondere für die Nutzung der sozialen und interaktiven
                                Funktionen (z. B. Kommentieren, Teilen, Bewerten, Direktnachrichten). Beim
                                Besuch und der Interaktion mit unserem Google Unternehmensprofil Eintrag
                                erfasst Google auch Ihre IP-Adresse sowie weitere Informationen, die in Form
                                von sog. Cookies auf dem Endgerät vorhanden sind. Gegebenenfalls ist
                                Google damit eine Zuordnung von IP- Adressen zu einzelnen Nutzern oder
                                Nutzerkonten möglich. Diese Informationen werden verwendet, um uns als
                                Betreiber des Google Unternehmensprofil Eintrags statistische Informationen
                                über die Inanspruchnahme der Google-Dienste zur Verfügung zu stellen. Die
                                in diesem Zusammenhang erhobenen Daten werden von Google verarbeitet
                                und dabei gegebenenfalls in Länder außerhalb der Europäischen Union
                                übertragen. Welche Informationen Google erhält und wie diese verwendet
                                werden, beschreibt Google allgemein in der Datenschutzerklärung. <br />
                                Sollten Sie uns über unseren Google Unternehmensprofil Eintrag oder andere
                                Google-Dienste per Direktnachricht kontaktieren, können wir nicht
                                ausschließen, dass diese Nachrichten auch von Google (sowohl von
                                Mitarbeiterinnen und Mitarbeitern als auch automatisiert) mitgelesen und
                                ausgewertet werden können. Wir raten daher davon ab, uns dort
                                personenbezogene Daten mitzuteilen. Stattdessen sollte so früh wie möglich
                                eine andere Form der Kommunikation gewählt werden. <br />
                                Die Nutzung dieses Dienstes unterliegt der Google Datenschutzerklärung, der
                                Sie – mit Nutzung – bereits zugestimmt haben. <br />
                                Nähere Informationen finden sich in der Datenschutzerklärung unter
                                folgendem Link: <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.14.2. Datenverarbeitung durch uns <br />
                                Wir als Anbieter unseres Google Unternehmensprofil Eintrags erheben und
                                verarbeiten keine weiteren Daten aus der Nutzung dieses Google-Angebotes. <br />
                                Wenn Sie mit uns in Kontakt tretenoder eine Bewertung über uns
                                veröffentlichst, verarbeiten wir Ihreveröffentlichten Profildaten, sowie den
                                Inhalt der Bewertung/des Kommentars. <br />
                                Rechtsgrundlage ist Art. 6 Abs.1 lit. f DSGVO. Wir haben ein berechtigtes
                                Interesse an der Darstellung unseres Unternehmens und Ermöglichung der
                                Bewertung unserer Leistungen, um unser Unternehmen uns unsere
                                Leistungen zu präsentieren und nach außen gut zu präsentieren.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.15. Drittinhalte <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.15.1. Google Fonts<br />
                                Wir haben Google Fonts lokal auf unserem Server eingebunden. Damit
                                werden, trotz der Nutzung, keine Daten an Google übertragen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.15.2. Google reCAPTCHA<br />
                                Diese Website nutzt Google reCAPTCHA. Google reCAPTCHA ist ein Plugin,
                                welches von der Google Ireland Limited, Gordon House, Barrow Street,
                                Dublin 4, Irland, angeboten wird. <br />
                                Der Dienst ermöglicht es festzustellen, ob eine Dateneingabe durch einen
                                Menschen oder durch ein automatisiertes Programm erfolgt. Diese Analyse
                                beginnt automatisch im Hintergrund, sobald die Website betreten wird. Hierzu
                                werden verschiedene Informationen erfasst, welche an Google übermittelt
                                werde. Ein Hinweis auf diese Analyse findet nicht statt. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Weitere Details: <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de
                                </a> <br />
                                <a href="https://policies.google.com/terms?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/terms?hl=de.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.15.3. HiDrive - IONOS<br />
                                Wir verwenden auf unserer Seite den Dienst HiDrive. Dieser Dienst wird von
                                der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur. <br />
                                HiDrive ist ein Online-Speicher Dienst. Mit diesem Dienst können Daten
                                verschlüsselt auf RAID gesicherten Servern abgelegt werden und somit von
                                überall auf der Welt und von verschiedenen Geräten aus zugänglich gemacht
                                werden. Diese Server befinden sich ausschließlich in Deutschland und sind
                                TÜV zertifiziert.
                                <br />
                                Sofern mit uns eine Datenspeicherung auf den HiDrive Servern vereinbart
                                wurde, erfragen wir eine Einwilligung für den Einsatz dieses Dienstes. Die
                                Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. a DSGVO. Diese Einwilligung kann
                                jederzeit widerrufen werden.
                                <br />
                                Darüber hinaus ist Rechtsgrundlage für den Einsatz von HiDrive Art. 6 Abs. 1
                                lit. f DSGVO, basierend auf unserem berechtigten Interesse, Daten speziell zu
                                sichern und cloudbasiert zugänglich zu machen. <br />
                                Die auf den Servern gespeicherten Daten werden gelöscht, sobald sie für den
                                Zweck ihrer Verarbeitung nicht mehr erforderlich sind und keine gesetzlichen
                                Aufbewahrungspflichten entgegenstehen. <br />
                                Weitere Informationen: <br />
                                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.ionos.de/terms-gtc/datenschutzerklaerung/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.15.4. Trustpilot Bewertungen<br />
                                Wir binden die Funktionen des Bewertungsportals Trustpilot auf unserer
                                Website ein. Dieser Dienst wird angeboten von der Trustpilot A/S, Pilestræde
                                58, 5,1112 Kopenhagen, Dänemark. <br />
                                Trustpilot ermöglicht es den Nutzern, unsere Dienste zu beurteilen. Nutzer,
                                die unsere Services genutzt haben, werden um Zustimmung gebeten, eine
                                Aufforderung zur Abgabe einer Bewertung zu erhalten. Nach erteilter
                                Zustimmung, beispielsweise durch Anklicken eines Kontrollkästchens oder Links, wird ihnen ein Link zur Bewertungsseite zugesandt. Um zu bestätigen,
                                dass die Nutzer unsere Dienste wirklich in Anspruch genommen haben,
                                übermitteln wir Trustpilot notwendige Informationen wie Namen, E-Mail-
                                Adresse und eine Referenznummer der Nutzer sowie Details zur genutzten
                                Leistung. Diese Informationen dienen ausschließlich der Überprüfung der
                                Echtheit und der gezielten Kontaktaufnahme. <br />
                                Diese geschieht nur mit Einwilligung. Die Einwilligung kann jederzeit
                                widerrufen werden. Rechtsgrundlage dafür ist Art 6 Abs. 1 lit. a DSGVO. <br />
                                Weitere Informationen: <br />
                                <a href="https://de.legal.trustpilot.com/for-reviewers/end-user-privacy-terms" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://de.legal.trustpilot.com/for-reviewers/end-user-privacy-terms
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.15.5. Gravatar<br />
                                Wir binden die Funktionen von Gravatar auf unserer Website ein. Dieser
                                Dienst wird angeboten von der Automattic Inc., 60 29th Street #343, San
                                Francisco, CA 94110, USA. <br />
                                Gravatar ist ein Dienst, der es Nutzer ermöglicht, ein einziges Avatar-Bild zu
                                erstellen und dieses mit ihrer E Mail-Adresse zu verknüpfen. Dieses Avatar-
                                Bild wird dann automatisch neben dem Namen angezeigt, wenn auf gravatarfähigen
                                Websites, Foren und Blogs Kommentare gepostet oder Artikel
                                geschrieben werden. Die Hauptfunktionen von Gravatar umfassen die
                                einfache Erstellung und Verwaltung eines universellen Avatars, der auf
                                verschiedenen Webplattformen konsistent verwendet wird, wodurch Nutzer
                                leichter identifizierbar sind und eine einheitliche Online-Identität über mehrere
                                Seiten hinweg pflegen können. <br />
                                Hierzu wird die E-Mail Adresse und die IP-Adresse an die Server von
                                Automattic in den USA übertragen. Gravatar setzt sowohl technisch
                                notwendige Cookies, als auch solche zur Analyse, Leistungsmessung und
                                Werbung. Letztere werden nur mit Einwilligung nach Art. 6 Abs. 1 lit. a
                                DSGVO gesetzt. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Im Übrigen beruht die Datenverarbeitung auf Art. 6 Abs. 1 lit. f DSGVO. Wir
                                haben ein berechtigtes Interesse daran den Nutzern die Möglichkeit zu geben, die Funktionen von Gravatar auf unserer Website zu verwenden, um so ein
                                uneingeschränktes Nutzungserlebnis zu gewährleisten. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Nähere Informationen: <br />
                                <a href="https://automattic.com/privacy/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://automattic.com/privacy/
                                </a> <br />
                                <a href="https://automattic.com/cookies/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://automattic.com/cookies/
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.15.6. Unsplash<br />
                                Auf unserer Website verwenden wir Bilder von Unsplash, einem Dienst der
                                Unsplash Inc., Unsplash, Inc. 500–400 rue McGill Montreal, QC H2Y 2G1,
                                Canada, E-Mail: <br />
                                <a href="mailto:abuse@unsplash.com" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    abuse@unsplash.com
                                </a> <br />
                                Dieser Dienst stellt lizenzfreie Fotos zur Verfügung und ermöglicht uns damit,
                                qualitativ hochwertige visuelle Inhalte auf unserer Webseite zu präsentieren,
                                die das Nutzererlebnis verbessern. <br />
                                Beim Besuch unserer Website kann es sein, dass Informationen über die
                                Nutzung der Bilder (wie z.B. Datum und Uhrzeit des Abrufs, betrachtete
                                Seiten) an Server von Unsplash übermittelt werden. Normalerweise werden
                                beim Einbetten von Bildern von Unsplash direkt über öffentliche URLs keine
                                umfangreichen Nutzerdaten wie Cookies oder IP-Adressen aktiv von
                                Unsplash gesammelt. <br />
                                Es ist möglich, dass beim Laden eines Bildes von Unplash eine HTTPAnfrage
                                an den Server gesendet wird und dabei die IP-Adresse des
                                Anfragenden von diesem Server protokolliert werden kann. In diesem Fall
                                holen wir vorher eine Einwilligung nach Art. 6 Abs.1 lit. a DSGVO ein. Die
                                Einwilligung ist widerruflich. <br />
                                Unsplash verarbeitet diese Daten in den USA. Wir haben keinen Einfluss auf
                                diesen <span className="break-all">Datenverarbeitungsvorgang</span>. <br />
                                Die Nutzung von Unsplash erfolgt im Interesse einer ansprechenden
                                Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im
                                Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. <br />
                                Weitere Informationen zur Datennutzung durch Unsplash finden sich in der
                                Datenschutzerklärung von Unsplash: <br />
                                <a href="https://unsplash.com/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://unsplash.com/privacy
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.15.7. Spline<br />
                                Wir verwenden das Tool Spline, um interaktive 3D-Grafiken und -Animationen
                                zu erstellen, die auf unserer Website und in unseren digitalen Anwendungen
                                präsentiert werden. Dieser Dienst wird angeboten von der Spline, Inc., 651
                                North Broad Street, Suite 206, Middletown, DE 19709, USA. <br />
                                Spline ermöglicht es uns, visuell ansprechende Designs zu entwickeln, die die
                                Benutzererfahrung verbessern und unsere Inhalte in einer interaktiven Form
                                darstellen. <br />
                                Durch die Nutzung von Spline können Daten wie Benutzerinteraktionen mit
                                den 3D-Modellen und technische Daten (z.B. Gerätetyp, Browser-Version)
                                erfasst werden, um die Darstellung und Funktionalität der Designs zu
                                optimieren. <br />
                                Die Datenverarbeitung dient dazu, die Funktionalität und Ästhetik unserer
                                digitalen Präsenz zu verbessern und ein ansprechendes Nutzererlebnis zu
                                gewährleisten. <br />
                                Rechtsgrundlage für die Verarbeitung ist unser berechtigtes Interesses eine
                                technisch einwandfreie und optimierte Website sowie digitale Anwendungen
                                bereitzustellen nach Art. 6 Abs. 1 lit. f DSGVO. <br />
                                Weitere Informationen: <br />
                                <a href="https://splinetool.notion.site/Spline-Privacy-Policy-69eb8efed8fe44418afaafa3e2d8156d" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://splinetool.notion.site/Spline-Privacy-Policy-69eb8efed8fe44418afaafa3e2d8156d
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.15.8. Google Video<br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.16. Audio- und Videokonferenzen <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.16.1. Zoom<br />
                                Für die Kommunikation mit Kunden verwenden wir Zoom. Zoom ist ein
                                Online-Konferenzen-Tool. Dieser Dienst wird angeboten von der Zoom Communications Inc., San Jose, 55 Almaden Boulevard, 6th Floor, San Jose,
                                CA 95113, USA. <br />
                                Bei der Kommunikation mit diesem Tool per Video- oder Audiokonferenzen
                                werden personenbezogene Daten von uns und dem Anbieter des Tools
                                verarbeitet. Die dabei erfassten Daten beinhalten alle Informationen, die Sie
                                bei der Nutzung des Tools bereitstellen. Außerdem werden Metadaten
                                bezüglich der Konferenz verarbeitet. Des weiteren werden technische
                                Information verarbeitet, welche für die Funktion der Online-Kommunikation
                                benötigt werden. Ferner werden auf den Servern des Tool-Anbieters alle
                                Dateien gespeichert, welche innerhalb des Tools geteilt werden. <br />
                                Zoom kann auch Cookies setzen. Diese Cookies werden nur mit Einwilligung
                                gesetzt. Die Einwilligung kann jederzeit widerrufen werden. Rechtsgrundlage
                                dafür ist Art 6 Abs. 1 lit. a DSGVO. <br />
                                Im Übrigen ist Rechtsgrundlage für die Verarbeitung der Daten durch Zoom
                                Art. 6 Abs. 1 lit. b DSGVO. Die Kommunikation hängt mit der Erfüllung eines
                                Vertrags zusammen oder ist zur Erfüllung von vorvertraglichen Pflichten
                                erforderlich. Des weiteren wird dieses Tool genutzt, um die Kommunikation
                                mit unserem Unternehmen zu vereinfachen. Dies stellt ein berechtigtes
                                Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. <br />
                                Diese Daten werden so lange gespeichert, bis der Betroffene zur Löschung
                                auffordert, die Einwilligung zur Speicherung widerrufen wurde oder der Zweck
                                für die Speicherung entfallen ist. Cookies verbleiben auf dem Endgerät, bis
                                der Nutzer sie löscht. Zwingend gesetzliche Bestimmungen zu
                                Aufbewahrungsfristen bleiben unberührt. <br />
                                Bei der Datenübertragung in die USA greifen die <span className="break-all">Standardvertragsklauseln</span>
                                (SCC) der EU-Kommission. <br />
                                Nähere Informationen: <br />
                                <a href="https://zoom.us/de-de/privacy.html" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://zoom.us/de-de/privacy.html.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.16.2. Skype for Business<br />
                                Für die Kommunikation mit Kundenverwenden wir Skype for Business. Skype
                                for Business ist ein Online-Konferenzen-Tool. Dieser Dienst wird angeboten von der Skype Communications SARL, 23-29 Rives de Clausen, L-2165,
                                Luxembourg. <br />
                                Bei der Kommunikation mit diesem Tool per Video- oder Audiokonferenzen
                                werden personenbezogene Daten von uns und dem Anbieter des Tools
                                verarbeitet. Die dabei erfassten Daten beinhalten alle Informationen, die Sie
                                bei der Nutzung des Tools bereitstellen. Außerdem werden Metadaten
                                bezüglich der Konferenz verarbeitet. Des Weiteren werden technische
                                Information verarbeitet, welche für die Funktion der Online-Kommunikation
                                benötigt werden. Ferner werden auf den Servern des Tool-Anbieters alle
                                Dateien gespeichert, welche innerhalb des Tools geteilt werden. <br />
                                Skype for Business kann auch Cookies setzen. Diese Cookies werden nur mit
                                Einwilligung gesetzt. Diese Einwilligung kann jederzeit widerrufen
                                werden. Rechtsgrundlage dafür ist Art 6 Abs. 1 lit. a DSGVO. <br />
                                Im Übrigen ist Rechtsgrundlage für die Verarbeitung der Daten durch Skype
                                for Business Art. 6 Abs. 1 lit. b DSGVO. Die Kommunikation hängt mit der
                                Erfüllung eines Vertrags zusammen oder ist zur Erfüllung von vorvertraglichen
                                Pflichten erforderlich. Des weiteren wird dieses Tool genutzt, um die
                                Kommunikation mit unserem Unternehmen zu vereinfachen. Dies stellt ein
                                berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. <br />
                                Diese Daten werden so lange gespeichert, bis der Betroffene zur Löschung
                                auffordert, die Einwilligung zur Speicherung widerrufen wurde oder der Zweck
                                für die Speicherung entfallen ist. Cookies verbleiben auf dem Endgerät, bis
                                der Nutzer sie löscht. Zwingend gesetzliche Bestimmungen zu
                                Aufbewahrungsfristen bleiben unberührt. <br />
                                Weitere Details: <br />
                                <a href="https://privacy.microsoft.com/de-de/privacystatement/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacy.microsoft.com/de-de/privacystatement/
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.16.3. Google Meet<br />
                                Für die Kommunikation mit Kunden verwenden wir Google Meet. Google Meet
                                ist ein Online-Konferenzen-Tool. Dieser Dienst wird angeboten von der
                                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. <br />
                                Bei der Kommunikation mit diesem Tool per Video- oder Audiokonferenzen
                                werden personenbezogene Daten von uns und dem Anbieter des Tools
                                verarbeitet. Die dabei erfassten Daten beinhalten alle Informationen, die Sie
                                bei der Nutzung des Tools bereitstellen. Außerdem werden Metadaten
                                bezüglich der Konferenz verarbeitet. Des Weiteren werden technische
                                Information verarbeitet, welche für die Funktion der Online-Kommunikation
                                benötigt werden. Ferner werden auf den Servern des Tool-Anbieters alle
                                Dateien gespeichert, welche innerhalb des Tools geteilt werden. <br />
                                Google Meet kann auch Cookies setzen. Diese Cookies werden nur mit
                                Einwilligung gesetzt. Diese Einwilligung kann jederzeit widerrufen
                                werden. Rechtsgrundlage dafür ist Art 6 Abs. 1 lit. a DSGVO. <br />
                                Im Übrigen ist Rechtsgrundlage für die Verarbeitung der Daten durch Google
                                Meet Art. 6 Abs. 1 lit. b DSGVO. Die Kommunikation hängt mit der Erfüllung
                                eines Vertrags zusammen oder ist zur Erfüllung von vorvertraglichen Pflichten
                                erforderlich. Des weiteren wird dieses Tool genutzt, um die Kommunikation
                                mit unserem Unternehmen zu vereinfachen. Dies stellt ein berechtigtes
                                Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. <br />
                                Diese Daten werden so lange gespeichert, bis der Betroffene zur Löschung
                                auffordert, die Einwilligung zur Speicherung widerrufen wurde oder der Zweck
                                für die Speicherung entfallen ist. Cookies verbleiben auf dem Endgerät, bis
                                der Nutzer sie löscht. Zwingend gesetzliche Bestimmungen zu
                                Aufbewahrungsfristen bleiben unberührt. <br />
                                Weitere Details: <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.16.4. Webex<br />
                                Für die Kommunikation mit Kunden verwenden wir Webex. Webex ist ein
                                Online-Konferenzen-Tool. Dieser Dienst wird angeboten von der Webex
                                Communications Deutschland GmbH, Hansaallee 249 c/o Cisco Systems
                                GmbH, 40549 Düsseldorf, Deutschland. <br />
                                Bei der Kommunikation mit diesem Tool per Video- oder Audiokonferenzen
                                werden personenbezogene Daten von uns und dem Anbieter des Tools verarbeitet. Die dabei erfassten Daten beinhalten alle Informationen, die Sie
                                bei der Nutzung des Tools bereitstellen. Außerdem werden Metadaten
                                bezüglich der Konferenz verarbeitet. Des Weiteren werden technische
                                Information verarbeitet, welche für die Funktion der Online-Kommunikation
                                benötigt werden. Ferner werden auf den Servern des Tool-Anbieters alle
                                Dateien gespeichert, welche innerhalb des Tools geteilt werden. <br />
                                Webex kann auch Cookies setzen. Diese Cookies werden nur mit Einwilligung
                                gesetzt. Diese Einwilligung kann jederzeit widerrufen
                                werden. Rechtsgrundlage dafür ist Art 6 Abs. 1 lit. a DSGVO. <br />
                                Im Übrigen ist Rechtsgrundlage für die Verarbeitung der Daten durch Webex
                                Art. 6 Abs. 1 lit. b DSGVO. Die Kommunikation hängt mit der Erfüllung eines
                                Vertrags zusammen oder ist zur Erfüllung von vorvertraglichen Pflichten
                                erforderlich. Des weiteren wird dieses Tool genutzt, um die Kommunikation
                                mit unserem Unternehmen zu vereinfachen. Dies stellt ein berechtigtes
                                Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO dar. <br />
                                Webex verfügt über Binding Corporate Rules (BCR). Dies sind verbindliche
                                unternehmensinterne Vorschriften, welche die Datenübertragung in
                                Drittstaaten legitimieren. <br />
                                Die Daten werden so lange gespeichert, bis der Betroffene zur Löschung
                                auffordert, die Einwilligung zur Speicherung widerrufen wurde oder der Zweck
                                für die Speicherung entfallen ist. Cookies verbleiben auf dem Endgerät, bis
                                der Nutzer sie löscht. Zwingend gesetzliche Bestimmungen zu
                                Aufbewahrungsfristen bleiben unberührt. <br />
                                Weitere Details: <br />
                                <a href="https://www.cisco.com/c/de_de/about/trust-center/data-protection-and-privacypolicy.html" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.cisco.com/c/de_de/about/trust-center/data-protection-and-privacypolicy.html
                                </a> <br />
                                <a href="https://www.cisco.com/c/de_de/about/legal/privacy-full.html" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.cisco.com/c/de_de/about/legal/privacy-full.html.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.16.5. FaceTime<br />
                                Für die Kommunikation mit Kunden verwenden wir FaceTime. Der Dienst wird
                                angeboten von der Apple Inc., Infinite Loop, Cupertino, CA 95014, USA. <br />
                                FaceTime ist ein Dienst von Apple, mit dem Video- oder Audioanrufe mit
                                Personen getätigt werden können, die ebenfalls ein iOS- oder iPadOS-Gerät,
                                einen Mac oder einen WebRTC-Browser verwenden. Mit einer Apple Watch
                                können Audioanrufe getätigt werden. FaceTime verwendet die Ende-zu-Ende-
                                Verschlüsselung. Apple speichert niemals den Inhalt von FaceTime-
                                Anrufen.Die Apple-ID, Telefonnummer oder E-Mail Adresse wird den
                                Personen angezeigt, die kontaktiert werden. <br />
                                Apple kann beim Gebrauch von FaceTime bestimmte Nutzungsdaten
                                erfassen, wie etwa die Nutzer eines Anrufs und die Netzwerkeinstellungen
                                des verwendeten Geräts, ohne jedoch persönlich identifizierbare
                                Informationen zu speichern oder den Inhalt der Gespräche einzusehen. Diese
                                Daten können für bis zu 30 Tage gespeichert werden. Zudem kommunizieren
                                Apps wie FaceTime mit Apple-Servern, um die Verfügbarkeit anderer Nutzer. <br />
                                Die Daten werden so lange gespeichert, bis der Betroffene zur Löschung
                                auffordert, die Einwilligung zur Speicherung widerruft oder der Zweck für die
                                Speicherung entfallen ist. Zwingend gesetzliche Bestimmungen zu
                                Aufbewahrungsfristen bleiben unberührt. <br />
                                Nähere Informationen: <br />
                                <a href="https://www.apple.com/de/legal/privacy/data/de/face-time/#:~:text=Wenn%20du%20FaceTime%20verwendest%2C%20kann,FaceTime%2DAnrufe%20aufzeichnen%20und%20speichern" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.apple.com/de/legal/privacy/data/de/face-time/#:~:text=Wenn%20du%20FaceTime%20verwendest%2C%20kann,FaceTime%2DAnrufe%20aufzeichnen%20und%20speichern.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.16.6. WhatsApp<br />
                                Wir nutzen den Dienst WhatsApp für Audio- und Videokonferenzen. Dieser
                                Dienst wird angeboten von WhatsApp LLC, 1601 Willow Road, Menlo Park,
                                CA 94025, USA. Wir nutzen WhatsApp, um zu kommunizieren und Audiosowie
                                Videoanrufe durchzuführen. <br />
                                Die hierbei verarbeiteten Daten umfassen unter anderem Telefonnummern,
                                Profilnamen und -fotos, Online-Status, Statusnachrichten, die Inhalte der
                                Nachrichten, sowie Verbindungs- und Gerätedaten wie IP-Adressen und
                                Gerätemodelle. Diese Daten werden genutzt, um die Kommunikation zu
                                ermöglichen und die Qualität der Dienste sicherzustellen. WhatsApp speichert
                                die Daten auf Servern weltweit und kann zur Datenerhebung und Speicherung Cookies setzen. Diese Cookies werden nur mit Einwilligung gesetzt. Diese
                                Einwilligung kann jederzeit widerrufen werden. Rechtsgrundlage für die
                                Cookie-Nutzung ist Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG,
                                soweit diese Einwilligung den Zugriff auf Informationen im Endgerät des
                                Nutzers oder die Speicherung von Cookies im Sinne des TDDDG umfasst. <br />
                                Die Rechtsgrundlage für die Verarbeitung der erhobenen Daten ist Art. 6 Abs.
                                1 lit. f DSGVO, da wir ein berechtigtes Interesse an der Nutzung dieses Tools
                                zur Optimierung unserer Kommunikation haben. <br />
                                Die Daten werden so lange gespeichert, bis der Betroffene zur Löschung
                                auffordert, die Einwilligung zur Speicherung widerrufen wird oder der Zweck
                                für die Speicherung entfällt. Zwingend gesetzliche Bestimmungen zu
                                Aufbewahrungsfristen bleiben unberührt. <br />
                                Bei der Datenübertragung in Drittstaaten (z.B. die USA) greifen die
                                <span className="break-all">Standardvertragsklauseln</span> (SCC) der EU-Kommission. <br />
                                Weitere Informationen: <br />
                                <a href="https://www.whatsapp.com/legal/privacy-policy-eea?lang=de_DE" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.whatsapp.com/legal/privacy-policy-eea?lang=de_DE.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.16.7. Slack<br />
                                <a href="www.slack.com" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    www.slack.com.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                3.16.8. [...]<br />
                            </li>

                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.17. CRM-Systeme <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.18. Hubspot CRM <br />
                                Wir nutzen das CRM-System Hubspot. Dieser Dienst wird angeboten von
                                Hubspot Inc., 25 Street, Cambridge, MA 02141 USA. <br />
                                CRM (Customer Relationship Management) ist ein System zur Verwaltung
                                aller Interaktionen und Beziehungen eines Unternehmens mit seinen aktuellen
                                und potenziellen Kunden. Es unterstützt die Automatisierung und Optimierung
                                von Vertriebsprozessen, Marketingkampagnen, Kundenservice und
                                Kundenkommunikation. <br />
                                Sobald wir auf unserer Website Ihre personenbezogenen Daten erfassen,
                                werden diese von uns im CRM-System Hubspot verarbeitet. <br />
                                Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO. Die Datenverarbeitung
                                erfolgt zur Erfüllung von (vor-) vertraglichen Pflichten. <br />
                                Hubspot ist im Rahmen des EU-U.S. Data Privacy Frameworks zertifiziert.
                                Ansonsten greifen die <span className="break-all">Standardvertragsklauseln</span> (SCC) der EU-Kommission. <br />
                                Nähere Informationen: <br />
                                <a href="https://legal.hubspot.com/de/privacy-policy?hubs_content=www.hubspot.de/&hubs_content-cta=Datenschutzbestimmungen" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://legal.hubspot.com/de/privacy-policy?hubs_content=www.hubspot.de/&hubs_content-cta=Datenschutzbestimmungen.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.19. Pipedrice CRM <br />
                                Wir nutzen das CRM-System Pipedrive CRM. Dieser Dienst wird angeboten
                                von Pipedrive OÜ, Mustamäe tee 3a, 10615 Tallinn, Estland. <br />
                                CRM (Customer Relationship Management) ist ein System zur Verwaltung
                                aller Interaktionen und Beziehungen eines Unternehmens mit seinen aktuellen
                                und potenziellen Kunden. Es unterstützt die Automatisierung und Optimierung
                                von Vertriebsprozessen, Marketingkampagnen, Kundenservice und
                                Kundenkommunikation. <br />
                                Sobald wir auf unserer Website Ihre personenbezogenen Daten erfassen,
                                werden diese von uns im CRM-System Pipedrive CRM verarbeitet. <br />
                                Rechtsgrundlage hierfür ist Art. 6 abs. 1 lit. b DSGVO. Die Datenverarbeitung
                                erfolgt zur Erfüllung von (vor-) vertraglichen Pflichten. <br />
                                Nähere Informationen: <br />
                                <a href="https://www.pipedrive.com/en/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.pipedrive.com/en/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.20. Airtable <br />
                                Wir verwenden Airtable zur Verwaltung unserer Kundenbeziehungen. Airtable
                                ist eine Anwendung der Formagrid Inc., 799 Market Street, 8. Stock, San
                                Francisco, CA, USA. <br />
                                In diesem Zusammenhang speichern und verarbeiten wir Daten wie Namen,
                                Kontaktinformationen, Kommunikationshistorie und Kundeninteraktionen, um
                                unsere Dienstleistungen effektiv bereitzustellen und zu verbessern. <br />
                                Die Verarbeitung dieser Daten basiert auf einer Einwilligung nach Art. 6 Abs.
                                1 lit. a DSGVO und/oder unserem berechtigten Interesse an der effektiven
                                Kundenverwaltung nach Art. 6 Abs. 1 lit. f DSGVO. Eine Einwilligung kann
                                jederzeit widerrufen werden. <br />
                                Die Daten werden möglicherweise in die USA übertragen und dort
                                gespeichert. In diesem Fall haben wir mit Formagrid einen SCC geschlossen,
                                um ein geeufbetes Schutzniveau der Daten sicherzustellen. <br />
                                Weitere Informationen: <br />
                                <a href="https://www.airtable.com/company/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.airtable.com/company/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.21. Eigenentwicklung <br />
                                Wir nutzen ein Customer Relationship Management (CRM)-System, welches
                                wir selbst entwickelt haben. <br />
                                Dieses CRM ermöglicht es uns, bestehende und potenzielle Kunden sowie
                                Kontakte zu verwalten und Vertriebs-, Buchhaltungs- und
                                Kommunikationsprozesse zu organisieren. Dieses System ist entscheidend
                                für die Analyse und Optimierung unserer kundenbezogenen Prozesse. <br />
                                Mithilfe des CRM Systems können wir unsere Kundenkommunikation über
                                verschiedene Kanäle effizient gestalten, um relevante Informationen und
                                Angebote zu präsentieren, die den Interessen unserer Kunden entsprechen. <br />
                                Sobald wir auf unserer Website personenbezogene Daten erfassen, werden
                                diese von uns im CRM-System verarbeitet. Die Verarbeitung der Daten
                                erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Erfüllung von
                                (vor-)vertraglichen Pflichten sowie auf Art. 6 Abs. 1 lit. f DSGVO, da der
                                Einsatz von CRM-Funktionen für das Wachstum und die Skalierung unseres
                                Unternehmens von zentraler Bedeutung ist und wir ein berechtigtes Interesse
                                an einer möglichst effizienten Kundenverwaltung und -kommunikation haben. <br />
                                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
                                Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung
                                ist jederzeit widerrufbar. <br />
                                Durch die Eigenenticklung können wir sicherstellen, dass keine
                                Datenübertragung an Dritte stattfindet.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.22. Notion <br />
                                Wir nutzen das CRM-System Notion. Dieser Dienst wird angeboten von
                                Notion Labs, Inc., 2300 Harrison Street, San Francisco, CA 94110, USA.
                                Notion ermöglicht es uns, Kundenbeziehungen zu verwalten, indem wir Daten
                                wie Kontaktinformationen, Interaktionen und Geschäftsabschlüsse in einer
                                flexiblen und anpassbaren Datenbank speichern und organisieren. <br />
                                Notion speichert die Daten auf Servern weltweit und kann zur Datenerhebung
                                und Speicherung Cookies setzen. Diese Cookies werden nur mit Einwilligung
                                gesetzt. Diese Einwilligung kann jederzeit widerrufen werden.
                                Rechtsgrundlage für die Cookie-Nutzung ist Art. 6 Abs. 1 lit. a DSGVO und §
                                25 Abs. 1 TDDDG, soweit diese Einwilligung den Zugriff auf Informationen im
                                Endgerät des Nutzers oder die Speicherung von Cookies im Sinne des
                                TDDDG umfasst. <br />
                                Die Rechtsgrundlage für die Verarbeitung der erhobenen Daten ist Art. 6 Abs.
                                1 lit. b DSGVO, da die Datenverarbeitung zur Erfüllung von (vor-)vertraglichen
                                Pflichten notwendig ist. Darüber hinaus haben wir ein berechtigtes Interesse
                                an der Nutzung dieses Tools zur Optimierung unserer
                                Kundenbeziehungsverwaltung, was durch Art. 6 Abs. 1 lit. f DSGVO gedeckt
                                ist. <br />
                                Die Daten werden so lange gespeichert, bis der Betroffene zur Löschung
                                auffordert, die Einwilligung zur Speicherung widerrufen wird oder der Zweck
                                für die Speicherung entfällt. Zwingend gesetzliche Bestimmungen zu
                                Aufbewahrungsfristen bleiben unberührt. <br />
                                <a href="https://www.notion.so/notion/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.notion.so/notion/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.23. Cloud-Backups <br />
                                Wir nutzen auf unserer Website Cloud-Backup Funktionen, um die Daten und
                                die Inhalte der Website vor Datenverlust, Korruption oder Sicherheitsvorfällen
                                zu schützen. Dies gewährleistet, dass im Falle eines Serverausfalls, eines
                                Hackerangriffs oder anderer unvorhergesehener Ereignisse die Website
                                schnell und vollständig wiederhergestellt werden kann. <br />
                                Folgenden Cloud-Backup-Service verwenden wir:  <br />
                                Google Drive <br />
                                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://policies.google.com/privacy?hl=de
                                </a> <br />
                                One Drive <br />
                                Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA. <br />
                                <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://privacy.microsoft.com/de-de/privacystatement
                                </a> <br />
                                IONOS <br />
                                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">
                                    https://www.ionos.de/terms-gtc/datenschutzerklaerung/.
                                </a> <br />
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">4. Das ist sonst noch wichtig</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base leading-[30.006px] my-[20px]">
                            Zum Abschluss möchten wir Sie ausführlich und detailliert über Ihre Rechte
                            informieren und Ihnen mitteilen, wie Sie über Veränderungen der
                            datenschutzrechtlichen Anforderungen informiert werden wirst.
                        </div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5 flex flex-col gap-[20px]">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                4.1. Ihre Rechte im Detail <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.1. Auskunftsrecht nach Art. 15 DSGVO <br />
                                Sie können Auskunft darüber verlangen, ob personenbezogenen Daten von
                                Ihnen verarbeitet werden. Ist das der Fall, können Sie weitere Auskünfte zur
                                Art und Weise der Verarbeitung einfordern. Eine detaillierte Aufzählung finden
                                Sie in Art. 15 Abs. 1 lit. a bis h DSGVO.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.2. Recht auf Berichtigung nach Art. 16 DSGVO <br />
                                Dieses Recht umfasst die Berichtigung unrichtiger Daten und die Ergänzung
                                unvollständiger personenbezogener Daten.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.3. Recht auf Löschung nach Art. 17 DSGVO <br />
                                Dieses sogenannte ‚Recht auf Vergessenwerden‘ gibt Ihnen das Recht, unter
                                bestimmten Voraussetzungen, die Löschung der personenbezogenen Daten
                                durch den Verantwortlichen zu verlangen. Dies ist grundsätzlich dann der Fall,
                                wenn der Zweck der Datenverarbeitung entfallen ist, wenn eine Einwilligung widerrufen wurde oder die Ausgangsverarbeitung ohne Rechtsgrundlage
                                stattfand. Eine detaillierte Aufzählung von Gründen finden Sie in Art. 17 Abs.
                                1 lit. a bis f DSGVO. Dieses „Recht auf Vergessenwerden“ korrespondiert
                                darüber hinaus mit der Pflicht des Verantwortlichen aus Art. 17 Abs. 2
                                DSGVO angemessene Maßnahmen zu ergreifen, um eine allgemeine
                                Löschung der Daten herbeizuführen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.4. Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO <br />
                                Dieses Recht ist an die Voraussetzungen gemäß Art. 18 Abs. 1 lit. a bis d
                                geknüpft.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.5. Recht auf Datenübertragbarkeit nach Art. 20 DSGVO <br />
                                Hier wird das grundsätzliche Recht zum Erhalt der eigenen Daten in einer
                                gängigen Form und der Übermittlung an einen anderen Verantwortlichen
                                geregelt. Dies gilt allerdings nur für die Daten einer Verarbeitung aufgrund von
                                Einwilligung oder Vertrag nach Art. 20 Abs. 1 lit. a und b und soweit dies
                                technisch machbar ist.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.6. Recht auf Widerspruch nach Art. 21 DSGVO <br />
                                Sie können grundsätzlich der Verarbeitung Ihrer personenbezogenen Daten
                                widersprechen. Dies gilt insbesondere dann, wenn Ihr Interesse am
                                Widerspruch das berechtigte Interesse des Verantwortlichen an der
                                Verarbeitung überwiegt und wenn sich die Verarbeitung auf Direktwerbung
                                und oder Profiling bezieht.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.7. Recht auf „Entscheidung im Einzelfall“ nach Art. 22 DSGVO <br />
                                Sie haben grundsätzlich das Recht, nicht einer ausschließlich auf einer
                                automatisierten Verarbeitung (einschließlich Profiling) beruhenden
                                Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche
                                Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Auch
                                dieses Recht findet allerdings Einschränkungen und Ergänzungen in Art. 22
                                Abs. 2 und 4 DSGVO.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.8. Weitere Rechte <br />
                                Die DSGVO beinhaltet umfassende Rechte der Unterrichtung von Dritten
                                darüber, ob oder wie Sie Rechte nach Art. 16, 17, 18 DSGVO geltend gemacht haben. Dies allerdings nur, insoweit dies auch möglich bzw. mit
                                einem angemessenen Aufwand durchführbar ist. <br />
                                Wir möchten Sie an dieser Stelle erneut auf Ihr Recht des Widerrufs einer
                                erteilten Einwilligung nach Art. 7 Abs. 3 DSGVO hinweisen. Die
                                Rechtmäßigkeit der bis dahin durchgeführten Verarbeitung wird dadurch
                                allerdings nicht berührt. <br />
                                Außerdem möchten wir Sie auch noch auf Ihre Rechte nach §§ 32 ff. BDSG
                                hinweisen, die allerdings inhaltlich größtenteils deckungsgleich mit den
                                soeben beschrieben Rechten sind.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 xs:pl-7 pl-4">
                                4.1.9. Beschwerderecht nach Art. 77 DSGVO <br />
                                Sie haben auch das Recht, sich bei einer <span className="break-all">Datenschutzaufsichtsbehörde</span> zu
                                beschweren, wenn Sie der Ansicht sind, dass eine Verarbeitung der Sie
                                betreffenden personenbezogenen Daten gegen diese Verordnung verstößt.
                            </li>
                        </ol>

                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">5. Was ist, wenn morgen die DSGVO abgeschafft wird oder andere Veränderungen stattfinden?</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base leading-[30.006px] my-[20px]">
                            Der aktuelle Stand dieser Datenschutzerklärung ist 06.05.2024. Von Zeit zu
                            Zeit ist es erforderlich, den Inhalt der Datenschutzerklärung anzupassen, um
                            auf tatsächliche und rechtliche Veränderungen zu reagieren. Wir behalten uns
                            daher vor, diese Datenschutzerklärung jederzeit zu ändern. Wir werden die
                            geänderte Version an gleicher Stelle veröffentlichen und empfehlen Ihnen, die
                            Datenschutzerklärung regelmäßig zu lesen. <br /> <br />
                            Dieter macht den Datenschutz" ist ein Produkt der simply Legal GmbH, Burkarderstr. 36, D-97082 Würzburg. All rights reserved 2024
                        </div>
                    </div>
                    <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" />
                    <div id="agb" className="flex flex-col">
                        <div className="flex flex-col items-start gap-2 lg:mb-4 mb-[10px]">
                            <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">AGB</div>

                            <Button size="small">
                                <a className="flex items-center justify-center gap-2" href={agbpdf} download="Allgemeine Geschäftsbedingungen Superagentur">
                                    <HiOutlineDownload size={20} />
                                    Herunterladen
                                </a>
                            </Button>
                        </div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">1. Geltungsbereich</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                1.1. Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) regeln sämtliche Geschäftsbeziehungen zwischen der Colacy GmbH (nachfolgend „Dienstleister“) und deren Kunden (nachfolgend „Kunde“). Sie umfassen alle vom Dienstleister angebotenen Dienstleistungen, insbesondere, aber nicht ausschließlich, die Schaltung und Optimierung von Google Ads, Suchmaschinenoptimierung (SEO), die Erstellung und Verwaltung von Google MyBusiness-Unternehmensprofilen („Unternehmenslistungen“) sowie die Planung, Schaltung und Verwaltung von Social Media Ads.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                1.2. Verträge und zukünftige Geschäftsbeziehungen: <br />
                                Diese AGB gelten für alle zwischen den Parteien geschlossenen Verträge sowie für zukünftige Geschäftsbeziehungen, sofern nicht ausdrücklich abweichende schriftliche Vereinbarungen getroffen werden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                1.3. Ausschluss fremder AGB: <br />
                                Allgemeine Geschäftsbedingungen des Kunden, die von diesen AGB abweichen, ihnen entgegenstehen oder sie ergänzen, werden nicht Vertragsbestandteil. Dies gilt auch dann, wenn der Kunde auf seine eigenen AGB verweist und der Dienstleister diesen nicht ausdrücklich widersprochen hat. Eine Zustimmung des Dienstleisters erfolgt ausschließlich durch eine ausdrücklich schriftliche und eindeutig bezeichnete Bestätigung im Einzelfall. Die vorbehaltlose Erbringung von Leistungen durch den Dienstleister stellt keine Anerkennung der abweichenden AGB des Kunden dar.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                1.4. Hinweise auf gesetzliche Vorschriften: <br />
                                Hinweise auf gesetzliche Vorschriften dienen lediglich der Klarstellung. Die gesetzlichen Regelungen gelten auch ohne ausdrückliche Bezugnahme, soweit sie nicht durch diese AGB geändert oder ausgeschlossen werden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                1.5. Vorrang individueller Vereinbarungen: <br />
                                Individuelle Vereinbarungen zwischen den Parteien (z. B. Nebenabreden, Änderungen oder Ergänzungen) haben Vorrang vor diesen AGB. Diese Vereinbarungen sind nur wirksam, wenn sie eindeutig formuliert, schriftlich festgehalten und von beiden Parteien ausdrücklich bestätigt wurden.
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">2. Vertragsstruktur und Zustimmung</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.1. Grundlage der Vertragsbeziehung: <br />
                                Die Vertragsbeziehung zwischen den Parteien basiert auf einem individuell gestalteten Dienstleistungsvertrag, der die spezifischen Leistungen und Konditionen regelt. Dieser Dienstleistungsvertrag nimmt ausdrücklich Bezug auf die vorliegenden Allgemeinen Geschäftsbedingungen (AGB) sowie die Datenschutzerklärung, die dem Kunden vor Vertragsabschluss zur Verfügung gestellt wurden. Die AGB und die Datenschutzerklärung werden dadurch zu integralen Bestandteilen des Vertrags.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.2. Zustimmung durch Unterzeichnung: <br />
                                Mit der Unterzeichnung des Dienstleistungsvertrages bestätigen beide Parteien, dass sie die AGB und die Datenschutzerklärung zur Kenntnis genommen haben und deren Geltung akzeptieren. Eine zusätzliche schriftliche Bestätigung ist nicht erforderlich.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.3. Begriffsdefinition "Vertrag": <br />
                                Der Begriff „Vertrag“ umfasst im Folgenden das gesamte Vertragskonstrukt, bestehend aus dem Dienstleistungsvertrag, den Allgemeinen Geschäftsbedingungen (AGB) und der Datenschutzerklärung.

                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] break-words hyphens-auto">3. Dienstleistungsspezifikationen</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.1. Festlegung von Art, Umfang und Spezifikationen: <br />
                                Die Art, der Umfang und die Spezifikationen der vom Dienstleister zu erbringenden Dienstleistungen werden im jeweiligen Dienstleistungsvertrag festgelegt und dort detailliert beschrieben.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.2. Ergänzende Geltung der AGB: <br />
                                Neben den individuellen Vereinbarungen des Dienstleistungsvertrages gelten die Allgemeinen Geschäftsbedingungen (AGB) ergänzend. Dies betrifft insbesondere allgemeine Leistungsvoraussetzungen, Haftungsbeschränkungen und Abrechnungsmodalitäten.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.3. Änderungen und Ergänzungen: <br />
                                Änderungen oder Ergänzungen der Dienstleistungsspezifikationen bedürfen der vorherigen schriftlichen Zustimmung beider Parteien, um wirksam zu sein.
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">4. Allgemeine Verpflichtungen der Parteien</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                4.1. Verpflichtung zu professionellem Umgang: <br />
                                Beide Parteien verpflichten sich zu einem professionellen und respektvollen Umgang miteinander. Dies umfasst insbesondere: <br />
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Einhaltung vereinbarter Verpflichtungen und Fristen,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Wahrung von Integrität und Transparenz in der Kommunikation, sowie</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die gegenseitige Respektierung getroffener Vereinbarungen.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                4.2. Verpflichtung zu effektiver Kommunikation und Handlungserfüllung: <br />
                                Um einen reibungslosen Ablauf der Dienstleistungen sicherzustellen, verpflichten sich die Parteien:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Zeitnah auf Anfragen, Probleme oder Anforderungen im Zusammenhang mit den Dienstleistungen zu reagieren,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Alle erforderlichen Schritte zu unternehmen, um ihren vertraglichen Verpflichtungen ordnungsgemäß nachzukommen, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Geeignete Ansprechpartner und klare Kommunikationswege bereitzustellen.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                4.3. Informationspflicht bei wesentlichen Umständen: <br />
                                Beide Parteien sind verpflichtet, die jeweils andere Partei unverzüglich zu informieren, wenn:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Eine Insolvenz, drohende Zahlungsunfähigkeit oder Geschäftsaufgabe eintritt, oder</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Andere Umstände eintreten, die die Fortführung der Geschäftsbeziehung erheblich gefährden könnten.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                4.4. Benachrichtigung bei Sanktionen oder Handelseinschränkungen: <br />
                                Sollte eine Partei von Sanktionen oder Handelseinschränkungen betroffen sein oder deren Eintreten befürchten, verpflichtet sie sich:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die andere Partei unverzüglich über die festgelegten Ansprechpartner und Kommunikationswege formell zu informieren, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Im Rahmen des gesetzlich zulässigen Handlungsspielraums zu agieren.</li>
                                </ul>
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">5. Kontaktpersonen</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                5.1. Festlegung von Kontaktpersonen und allgemeine Mitteilungsform: <br />
                                Beide Vertragsparteien benennen eine primäre Kontaktperson, einschließlich vollständiger Kontaktinformationen, die für alle wesentlichen und formalen Angelegenheiten zuständig ist. Dazu gehören insbesondere:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Kündigungen,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Wesentliche Vertragsänderungen, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Andere rechtlich relevante Mitteilungen oder Erklärungen.</li>
                                </ul>
                                Alle rechtlich relevanten Mitteilungen oder Erklärungen der Parteien – insbesondere Mängelanzeigen, Fristsetzungen, Rücktrittserklärungen oder Preisminderungsforderungen – müssen in Textform (z. B. E-Mail, Fax) oder schriftlich (z. B. Brief mit Originalunterschrift) erfolgen. Strengere gesetzliche Formvorschriften bleiben unberührt. <br />
                                Jede Partei ist berechtigt, bei Zweifeln an der Berechtigung oder Authentizität einer Erklärung zusätzliche Nachweise zu verlangen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                5.2. Operative Ansprechpartner: <br />
                                Für operative Angelegenheiten, wie die Abwicklung von Dienstleistungen oder die Meldung von Problemen, können nach Bedarf weitere Ansprechpartner benannt werden. Diese operativen Ansprechpartner müssen nicht explizit im Vertrag aufgeführt sein, sofern deren Zuständigkeiten klar kommuniziert wurden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                5.3. Änderung der Kontaktinformationen: <br />
                                Änderungen der Kontaktinformationen der primären Kontaktperson sind der jeweils anderen Partei unverzüglich schriftlich mitzuteilen.
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Mitteilung sollte vorzugsweise postalisch erfolgen, ergänzt durch eine Benachrichtigung über andere vereinbarte Kommunikationswege.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Werden geänderte Kontaktinformationen nicht mitgeteilt, gelten Mitteilungen an die zuletzt bekannten Kontaktinformationen als ordnungsgemäß zugestellt.</li>
                                </ul>
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">6. Verpflichtungen des Dienstleisters</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                6.1. Erbringung der vereinbarten Dienstleistungen: <br />
                                Der Dienstleister verpflichtet sich, die im jeweiligen Dienstleistungsvertrag festgelegten Dienstleistungen ordnungsgemäß und im Rahmen der dort beschriebenen Leistungsinhalte zu erbringen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                6.2. Begrenzung auf den vereinbarten Leistungsumfang <br />
                                Die Erbringung der Dienstleistungen erfolgt ausschließlich im Rahmen des vereinbarten Leistungsumfangs. Leistungen, die über den Vertrag hinausgehen, bedürfen einer schriftlichen Zusatzvereinbarung zwischen den Parteien.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                6.3. Branchenübliche Standards und Sorgfalt: <br />
                                Der Dienstleister erbringt die Leistungen unter Anwendung branchenüblicher Standards und mit der gebotenen Sorgfalt. Er verpflichtet sich, seine Pflichten gewissenhaft und im Interesse des Kunden zu erfüllen.
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">7. Kulanzleistungen und freiwilliges Engagement</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                7.1. Kulanzleistungen und freiwillige Unterstützung: <br />
                                Leistungen, die nicht ausdrücklich in den schriftlichen Vereinbarungen zwischen den Parteien als verpflichtend festgelegt sind, werden freiwillig und auf Kulanzbasis erbracht. Solche Leistungen dienen der Förderung und Unterstützung der Geschäftsbeziehung, begründen jedoch keine rechtliche Verpflichtung zur gegenwärtigen oder zukünftigen Erbringung ähnlicher Leistungen. Sie dürfen weder als stillschweigende noch als mündliche Ergänzung der bestehenden Vereinbarungen interpretiert werden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                7.2. Keine Gewohnheitsrechte: <br />
                                Die Erbringung von Kulanzleistungen oder freiwilligem Engagement in der Vergangenheit begründet weder ein Gewohnheitsrecht noch eine rechtlich durchsetzbare Erwartungshaltung des Kunden für die zukünftige Erbringung solcher oder ähnlicher Leistungen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                7.3. Änderungen und zusätzliche Leistungen: <br />
                                Änderungen des Umfangs oder der Art der vom Dienstleister vertraglich zu erbringenden Leistungen bedürfen einer schriftlichen Vereinbarung zwischen den Parteien.
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Mündliche Absprachen oder implizite Erwartungen führen nicht zu einer Änderung der vertraglich vereinbarten Leistungen.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Zusätzliche Leistungen, die vom Kunden gewünscht werden, können nur auf Grundlage einer neuen schriftlichen Vereinbarung erbracht werden.</li>
                                </ul>
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">8. Verpflichtungen des Kunden</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                8.1. Bereitstellung von Informationen und Materialien: <br />
                                Der Kunde verpflichtet sich, alle für die ordnungsgemäße Erbringung der Dienstleistungen erforderlichen Informationen, Unterlagen und Materialien vollständig, korrekt und rechtzeitig bereitzustellen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                8.2. Mitwirkungspflichten: <br />
                                Der Kunde unterstützt den Dienstleister aktiv bei der Erbringung der vereinbarten Dienstleistungen, insbesondere durch:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die rechtzeitige Erfüllung notwendiger Mitwirkungshandlungen,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Bereitstellung erforderlicher Ressourcen, wie Zugänge, technische Voraussetzungen oder andere unterstützende Materialien, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Benennung eines Ansprechpartners, der für die Koordination und Rückfragen zur Verfügung steht.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                8.3. Verantwortung für Inhalte und Rechtmäßigkeit: <br />
                                Der Kunde ist dafür verantwortlich, dass die bereitgestellten Informationen und Unterlagen:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Frei von Rechten Dritter sind, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Den gesetzlichen Vorschriften entsprechen, insbesondere in Bezug auf Datenschutz und Urheberrechte.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                8.4. Informationspflicht bei Änderungen: <br />
                                Der Kunde verpflichtet sich, den Dienstleister unverzüglich über wesentliche Änderungen zu informieren, die die Erbringung der Dienstleistungen beeinflussen könnten. Dies umfasst insbesondere:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Änderungen von Ansprechpartnern,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Technische Voraussetzungen, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Betriebliche Rahmenbedingungen.</li>
                                </ul>
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">9. Geheimhaltung vertraulicher Informationen</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.1. Definition vertraulicher Informationen: <br />
                                Vertrauliche Informationen umfassen alle mündlichen, schriftlichen, elektronischen oder anderweitig übermittelten Informationen, die im Rahmen dieser Vereinbarung oder der Geschäftsanbahnung offengelegt werden.
                                Die Vertraulichkeit ergibt sich entweder aus einer entsprechenden Kennzeichnung oder aus der Natur bzw. den Umständen der Offenlegung. <br />
                                Als vertraulich gelten insbesondere, aber nicht ausschließlich:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Geschäftsgeheimnisse, technische Daten, Finanzinformationen, Marketingstrategien, Kundenlisten, Personalinformationen sowie andere sensible Daten,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Schulungsmaterialien, Best-Practice-Dokumentationen, technische Unterlagen, Analysen und Präsentationen.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.2. Geheimhaltungspflicht: <br />
                                Beide Parteien verpflichten sich, vertrauliche Informationen der jeweils anderen Partei strikt geheim zu halten. Eine Weitergabe oder anderweitige Verwendung ist ohne vorherige schriftliche Zustimmung der offenlegenden Partei unzulässig, es sei denn, sie ist zur Erfüllung der vertraglichen Pflichten erforderlich.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.3. Schutzmaßnahmen: <br />
                                Die empfangende Partei ergreift alle angemessenen Maßnahmen, um die Vertraulichkeit der erhaltenen Informationen zu gewährleisten. Der Zugang wird auf Personen beschränkt, die die Informationen für die Erfüllung ihrer beruflichen Aufgaben benötigen und zur Geheimhaltung verpflichtet sind.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.4. Begrenzung der Nutzung: <br />
                                Vertrauliche Informationen dürfen ausschließlich zur ordnungsgemäßen Erfüllung der vertraglich vereinbarten Dienstleistungen genutzt werden. Eine anderweitige Verwendung bedarf der schriftlichen Zustimmung der offenlegenden Partei.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.5. Weitergabe an Mitarbeiter und Berater: <br />
                                Die Weitergabe vertraulicher Informationen an Mitarbeiter oder externe Berater ist nur zulässig, wenn:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Diese Personen schriftlich zur Geheimhaltung verpflichtet wurden, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Weitergabe zur Erfüllung der vertraglichen Aufgaben erforderlich ist.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.6. Rückgabe und Vernichtung von Informationen: <br />
                                Nach Beendigung der Vereinbarung oder auf Verlangen der offenlegenden Partei sind alle vertraulichen Informationen unverzüglich zurückzugeben oder sicher zu vernichten. Dies umfasst Kopien, Aufzeichnungen und elektronische Dateien.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.7. Dauer der Geheimhaltungspflicht: <br />
                                Die Geheimhaltungspflicht bleibt auch nach Beendigung der Vereinbarung bestehen.
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Für besonders schützenswerte Informationen (z. B. Geschäftsgeheimnisse) gilt die Geheimhaltung unbefristet.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Für alle anderen, weniger sensiblen vertraulichen Informationen endet die Geheimhaltungspflicht fünf (5) Jahre nach Beendigung der Vereinbarung, sofern keine längeren gesetzlichen Aufbewahrungs- oder Geheimhaltungspflichten bestehen.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.8. Ausnahmen von der Geheimhaltungspflicht: <br />
                                Die Geheimhaltungspflicht gilt nicht für Informationen, die:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Zum Zeitpunkt der Offenlegung öffentlich bekannt waren,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Nach der Offenlegung ohne Verschulden der empfangenden Partei öffentlich bekannt werden, oder</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Der empfangenden Partei nachweislich bereits rechtmäßig bekannt waren.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.9. Rechtliche Offenlegungspflichten: <br />
                                Falls die empfangende Partei gesetzlich verpflichtet ist, vertrauliche Informationen offenzulegen, darf sie dies tun, muss jedoch:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die offenlegende Partei unverzüglich informieren (soweit gesetzlich zulässig), und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Offenlegung auf das gesetzlich erforderliche Maß beschränken.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                9.10. Haftung und Schadensersatz: <br />
                                Verstöße gegen diese Geheimhaltungsklausel können Schadensersatzansprüche oder andere rechtliche Konsequenzen nach sich ziehen. Die Haftung richtet sich nach den vertraglich oder gesetzlich vorgesehenen Regelungen.
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] break-words hyphens-auto">10. Haftungs- und Gewährleistungsregelungen</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                10.1. Haftung beider Parteien: <br />
                                Beide Parteien haften nicht für indirekte, zufällige oder Folgeschäden, die sich aus oder im Zusammenhang mit der Erfüllung dieser Vereinbarung ergeben. Dies umfasst insbesondere:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Entgangenen Gewinn,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Betriebsunterbrechungen,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Verlust von Geschäftsinformationen,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Schäden oder Verluste an Hardware, Software, Accounts, digitalen Strukturen oder anderen materiellen oder immateriellen Gütern.</li>
                                </ul>
                                Eine Haftung besteht jedoch, soweit dies gesetzlich vorgeschrieben ist, insbesondere bei:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Vorsatz oder grober Fahrlässigkeit,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Schäden aus der Verletzung von Leben, Körper oder Gesundheit, oder</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Verstößen gegen wesentliche Vertragspflichten (Kardinalpflichten).</li>
                                </ul>
                                Bei der Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags erst ermöglicht und auf deren Einhaltung die andere Partei regelmäßig vertrauen darf.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                10.2. Begrenzung der Haftung: <br />
                                Die Haftung jeder Partei ist auf den Gesamtbetrag der im Rahmen dieser Vereinbarung gezahlten Vergütung begrenzt. Diese Begrenzung gilt nicht in Fällen von:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Vorsatz,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Grober Fahrlässigkeit, oder</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Schäden aus der Verletzung von Leben, Körper oder Gesundheit.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                10.3. Gewährleistungsausschluss: <br />
                                Keine der Parteien übernimmt eine ausdrückliche oder stillschweigende Garantie für Eigenschaften oder Ergebnisse, die nicht ausdrücklich im Vertrag vereinbart wurden. Dies umfasst insbesondere:

                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Eignung der Dienstleistungen oder Produkte für einen bestimmten Zweck,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Marktgängigkeit, oder</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Nichtverletzung von Rechten Dritter.</li>
                                </ul>
                                Beide Parteien gewährleisten jedoch, dass die vertraglich vereinbarten Leistungen ordnungsgemäß, mit der gebotenen Sorgfalt und in Übereinstimmung mit den im Vertrag festgelegten Standards erbracht werden. <br />
                                Dienstleistungen oder Mitwirkungen, die über den ausdrücklich vereinbarten Leistungsumfang hinaus erbracht werden, erfolgen „wie besehen“ und ohne zusätzliche Gewährleistung, sofern keine abweichenden schriftlichen Vereinbarungen getroffen wurden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                10.4. Freistellung und Verzicht auf Ansprüche: <br />
                                Beide Parteien verpflichten sich, die jeweils andere Partei von sämtlichen Ansprüchen, Forderungen oder Schäden freizustellen, die durch eine Verletzung ihrer vertraglichen Pflichten entstehen. Diese Freistellung gilt nicht, wenn die Verletzung auf Vorsatz oder grober Fahrlässigkeit der freistellenden Partei beruht. <br />
                                Darüber hinaus erkennen beide Parteien an, dass dieser Haftungs- und Gewährleistungsausschluss alle nicht zwingend gesetzlich vorgesehenen Ansprüche der jeweils anderen Partei ausschließt. Zusätzliche Haftungs- oder Gewährleistungszusagen bestehen nur, wenn sie ausdrücklich schriftlich vereinbart wurden.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                10.5. Anwendbares Recht: <br />
                                Diese Haftungs- und Gewährleistungsregelungen gelten im gesetzlich zulässigen Umfang und unterliegen den geltenden Gesetzen der Bundesrepublik Deutschland.

                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">11. Mängelansprüche und Beanstandungen</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                11.1. Leistungsumfang und Erfolgsverpflichtung: <br />
                                Die Dienstleistungen des Dienstleisters, insbesondere im Bereich Google Ads und Suchmaschinenoptimierung (SEO), stellen Tätigkeiten zur Optimierung der Sichtbarkeit und Reichweite des Kunden dar.
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Der Dienstleister verpflichtet sich, die vereinbarten Leistungen mit der gebotenen Sorgfalt und gemäß den vertraglichen Vorgaben auszuführen.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Eine konkrete Garantie für bestimmte Ergebnisse (z. B. spezifische Rankings, Conversions oder Umsatzsteigerungen) wird nicht übernommen, sofern dies nicht ausdrücklich schriftlich vereinbart wurde.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                11.2. Beanstandung von Fehlern: <br />
                                Der Kunde ist verpflichtet, die erbrachten Leistungen unverzüglich zu prüfen und etwaige Beanstandungen oder Abweichungen von den vereinbarten Leistungen schriftlich anzuzeigen.
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Für offensichtliche Mängel oder Abweichungen: Diese müssen spätestens innerhalb von sieben (7) Kalendertagen nach Erbringung der jeweiligen Leistung gemeldet werden.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Für versteckte Mängel: Es gelten die gesetzlichen Gewährleistungsfristen gemäß § 438 Abs. 1 Nr. 3 BGB.</li>
                                </ul>
                                Spätere Beanstandungen offensichtlicher Mängel können nicht berücksichtigt werden, sofern der Fehler dem Kunden bei ordnungsgemäßer Prüfung hätte auffallen können.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                11.3. Nachbesserung und Haftungsbeschränkung: <br />
                                Im Falle einer berechtigten Beanstandung hat der Dienstleister das Recht, innerhalb einer angemessenen Frist eine Nachbesserung oder Korrektur vorzunehmen.
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Eigenständige Mängelbeseitigungen durch den Kunden oder durch Dritte ohne vorherige schriftliche Zustimmung des Dienstleisters führen zum Verlust sämtlicher Ansprüche auf Mängelbeseitigung und Kostenerstattung.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Weitergehende Ansprüche des Kunden, insbesondere Schadensersatz, sind ausgeschlossen, sofern nicht Vorsatz oder grobe Fahrlässigkeit vorliegt.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Kosten, die dem Kunden durch eigenmächtige Behebung vermeintlicher Mängel entstehen, werden vom Dienstleister nicht erstattet.</li>
                                </ul>
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">12. Rechnungsstellung und Zahlungsmodalitäten</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.1. Zahlungsfrist: <br />
                                Der Kunde verpflichtet sich, alle vom Dienstleister gemäß den Bestimmungen dieses Vertrags ausgestellten Rechnungen innerhalb der auf der Rechnung angegebenen Frist, jedoch spätestens vierzehn (14) Tage nach Erhalt, zu begleichen, sofern keine abweichende schriftliche Vereinbarung getroffen wurde.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.2. Elektronische Rechnungsstellung: <br />
                                Rechnungen können über die vereinbarten Kommunikationskanäle in elektronischer Form bereitgestellt werden. Elektronisch übermittelte Rechnungen haben die gleiche verbindliche Wirkung wie physisch ausgestellte Rechnungen, sofern dies zwischen den Parteien vereinbart wurde.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.3. Vorauszahlungen: <br />
                                Der Dienstleister ist berechtigt, vereinbarte Beträge oder Rechnungen vor Erbringung der Dienstleistungen in Rechnung zu stellen, sofern dies ausdrücklich schriftlich zwischen den Parteien festgelegt wurde. In solchen Fällen ist der Kunde verpflichtet, die entsprechenden Beträge gemäß den vereinbarten Zahlungsbedingungen zu begleichen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.4. Lastschriftmandat: <br />
                                Sofern ein Lastschriftmandat erteilt wurde, ist der Dienstleister berechtigt, alle offenen Forderungen direkt vom Bankkonto des Kunden einzuziehen.
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Ein gescheiterter Lastschrifteinzug aufgrund unzureichender Kontodeckung oder anderer Gründe gilt als Nichtzahlung.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Das Lastschriftmandat erfordert eine separate schriftliche Vereinbarung, die die Bedingungen und den Umfang der Ermächtigung regelt.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.5. Verzugszinsen und Mahnverfahren: <br />
                                Im Falle einer verspäteten Zahlung ist der Dienstleister berechtigt, Verzugszinsen gemäß den geltenden gesetzlichen Bestimmungen zu erheben: <br />
                                Für Verbraucher: 5 Prozentpunkte über dem Basiszinssatz.
                                <br />
                                Für Unternehmer: 9 Prozentpunkte über dem Basiszinssatz (§ 288 BGB).
                                <br />
                                Zusätzlich können angemessene Mahnkosten geltend gemacht werden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.6. Währung und Gebühren: <br />
                                Alle Zahlungen sind in der auf der Rechnung angegebenen Währung zu leisten. Der Kunde ist dafür verantwortlich, sicherzustellen, dass der vollständige Rechnungsbetrag ohne Abzug von Bankgebühren oder anderen Transaktionskosten beim Dienstleister eingeht
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.7. Mehrwertsteuer (MwSt.): <br />
                                Sofern in den zwischen den Parteien geschlossenen Verträgen nichts anderes geregelt ist, verstehen sich die angegebenen Beträge als Nettobeträge. In der Rechnungsstellung wird die gesetzliche Mehrwertsteuer (MwSt.) zusätzlich ausgewiesen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.8. Prüfung und Einspruchsfrist: <br />
                                Der Kunde ist verpflichtet, alle erhaltenen Rechnungen innerhalb von dreißig (30) Tagen nach Erhalt auf Richtigkeit zu prüfen.
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Unstimmigkeiten oder Widersprüche sind innerhalb dieser Frist schriftlich beim Dienstleister einzureichen.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Ein Einspruch hat keine aufschiebende Wirkung auf die Zahlungsverpflichtung. Der Rechnungsbetrag ist zunächst vollständig zu begleichen.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.9. Ausschluss von Aufrechnungs- und Zurückbehaltungsrechten: <br />
                                Aufrechnungs- oder Zurückbehaltungsrechte stehen dem Kunden nur zu, wenn:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Der Anspruch rechtskräftig festgestellt oder unbestritten ist, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Der Gegenanspruch auf demselben Vertragsverhältnis beruht.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.10. Ausschluss bei Mängeln: <br />
                                Der Kunde ist verpflichtet, die vertraglich vereinbarten Zahlungen auch bei behaupteten oder tatsächlichen Mängeln der gelieferten Ware oder Dienstleistung fristgerecht und vollständig zu leisten. Zurückbehaltungsrechte und die Aufrechnung mit Gegenansprüchen wegen Mängeln sind ausgeschlossen. <br />
                                Die Geltendmachung von Mängelansprüchen, wie Nachbesserung, Ersatzlieferung oder Schadensersatz, bleibt unberührt und muss unabhängig von der Zahlungspflicht separat erfolgen.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                12.11. Bearbeitung von Einsprüchen: <br />
                                Der Dienstleister wird jeden Einspruch prüfen und bei berechtigten Einwänden eine entsprechende Korrektur oder Rückerstattung vornehmen. Alle Punkte in der Rechnung, die nicht innerhalb der Einspruchsfrist beanstandet werden, gelten als akzeptiert.
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">13. Laufzeit und Kündigungsverfahren</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                13.1. Laufzeit und spezifische Bestimmungen: <br />
                                Die Laufzeit des Vertrages sowie die Kündigungsverfahren, Fristen und Bedingungen werden spezifisch in den jeweiligen Vereinbarungen zwischen den Parteien definiert. Soweit keine abweichenden Regelungen getroffen wurden, gelten die nachfolgenden allgemeinen Grundsätze: <br />
                                Der Vertrag hat eine unbestimmte Laufzeit, sofern nicht ausdrücklich eine feste Vertragslaufzeit vereinbart wurde.
                                Bei einer festen Laufzeit verlängert sich der Vertrag automatisch um denselben Zeitraum, sofern er nicht rechtzeitig gekündigt wird. Die Kündigungsfrist richtet sich nach den spezifischen Vereinbarungen oder, falls nicht anders geregelt, nach 13.3 dieser AGB.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                13.2. Kündigungsmodalitäten: <br />
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Eine Kündigung muss schriftlich erfolgen und an die im Vertrag benannte Kontaktperson gerichtet werden.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Sie wird erst wirksam, wenn sie der anderen Vertragspartei postalisch an die im Vertrag angegebene Adresse zugestellt wurde.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Alternativ können die Parteien ausdrücklich einen anderen Übermittlungsweg schriftlich vereinbaren.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                13.3. Kündigungsmodalitäten: <br />
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Eine Kündigung muss schriftlich erfolgen und an die im Vertrag benannte Kontaktperson gerichtet werden.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Sie wird erst wirksam, wenn sie der anderen Vertragspartei postalisch an die im Vertrag angegebene Adresse zugestellt wurde.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Alternativ können die Parteien ausdrücklich einen anderen Übermittlungsweg schriftlich vereinbaren.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                13.4. Fortführung der Dienstleistung während der Kündigungsfrist: <br />
                                Während der Kündigungsfrist sind beide Parteien verpflichtet, ihre vertraglichen Pflichten uneingeschränkt zu erfüllen. Dies umfasst insbesondere:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Erbringung der vereinbarten Leistungen durch den Dienstleister, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die rechtzeitige Zahlung aller offenen und laufenden Forderungen durch den Kunden.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                13.5. Ansprüche nach Vertragsbeendigung: <br />
                                Nach Beendigung des Vertrages bleiben alle Ansprüche bestehen, die:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Vor der Vertragsbeendigung entstanden sind, oder</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Auf Handlungen oder Ereignisse zurückzuführen sind, die vor der Vertragsbeendigung stattgefunden haben.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                13.6. Fortlaufende Pflichten nach Vertragsende: <br />
                                Bestimmte gesetzliche und vertragliche Pflichten bleiben auch nach Beendigung des Vertrages bestehen. Dazu gehören unter anderem:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Gesetzliche Aufbewahrungspflichten,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Einhaltung von Datenschutzvorschriften, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Vertragliche Pflichten, die ihrer Natur nach auch nach Vertragsende weiterwirken (z. B. Geheimhaltungspflichten).</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                13.7. Wirkung der Kündigung auf andere Vereinbarungen: <br />
                                Die Kündigung eines spezifischen Vertrages hat keinen Einfluss auf andere zwischen den Parteien geschlossene Vereinbarungen, sofern nicht ausdrücklich etwas anderes geregelt wurde. Andere Verträge bleiben unberührt und behalten ihre volle Wirksamkeit.
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">14. Aussetzung der Dienstleistung bei Zahlungsverzug</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                14.1. Recht zur Aussetzung: <br />
                                Der Dienstleister ist berechtigt, die Erbringung sämtlicher Dienstleistungen temporär auszusetzen, falls der Kunde mit der Zahlung länger als vierzehn (14) Tage nach Fälligkeit in Verzug ist. Die Aussetzung bleibt solange wirksam, bis die ausstehenden Zahlungen vollständig beglichen wurden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                14.2. Voraussetzungen für die Aussetzung: <br />
                                Eine Aussetzung der Dienstleistung ist möglich, wenn:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Der Kunde mit einer Zahlung länger als vierzehn (28) Tage nach Fälligkeit im Verzug ist, und</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Der Dienstleister dem Kunden zuvor eine schriftliche Zahlungsaufforderung mit einer Nachfrist von mindestens sieben (7) Tagen zur Begleichung der offenen Forderungen gestellt hat.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                14.3. Folgen der Aussetzung: <br />
                                Während der Aussetzung der Dienstleistung:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Ist der Dienstleister von seiner Verpflichtung zur Leistungserbringung befreit, solange der Zahlungsverzug andauert.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Bleiben alle anderen vertraglichen Verpflichtungen des Kunden, insbesondere die Zahlungspflichten, bestehen.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Betrifft die Aussetzung nur zukünftige Leistungen und gilt nicht rückwirkend für bereits erbrachte Leistungen.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                14.4. Wiederaufnahme der Dienstleistung: <br />
                                Die Dienstleistung wird wieder aufgenommen, sobald der Kunde die ausstehenden Beträge vollständig beglichen hat. Der Dienstleister kann:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Bedingungen für die Wiederaufnahme festlegen, wie z. B. die Zahlung von Verzugszinsen oder die Erstattung von durch den Zahlungsverzug entstandenen Kosten.</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Wiederaufnahme der Dienstleistung innerhalb eines angemessenen Zeitraums nach Begleichung der ausstehenden Beträge sicherstellen.</li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                14.5. Rechtliche Schritte: <br />
                                Ungeachtet der Aussetzung der Dienstleistung behält sich der Dienstleister das Recht vor, rechtliche Schritte einzuleiten, um ausstehende Zahlungen einzufordern. Dazu gehören:
                                <ul className="pl-10 my-[20px] list-disc">
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Einleitung gerichtlicher Mahnverfahren,</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Die Sicherung von Forderungen durch geeignete rechtliche Maßnahmen, oder</li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">Weitere Schritte, die zur Durchsetzung der Ansprüche erforderlich sind.</li>
                                </ul>
                            </li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">15. Generelle Bestimmungen</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.1. Unterzeichnerberechtigung: <br />
                                Die Unterzeichner aller zwischen den Parteien geschlossenen Verträge versichern, dass sie vollumfänglich berechtigt sind, im Namen der jeweils genannten Partei zu handeln und alle damit verbundenen Verpflichtungen einzugehen.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.2. Elektronische Dokumente und Unterzeichnung: <br />
                                Die Parteien erkennen elektronische Kopien und elektronisch unterzeichnete Dokumente als gleichwertig zu ihren physischen Pendants an. Elektronisch unterzeichnete und übermittelte Dokumente besitzen die gleiche verbindliche Wirkung wie handschriftlich unterzeichnete Unterlagen, es sei denn, es ist ausdrücklich festgelegt, dass bestimmte Dokumente postalisch versendet werden müssen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.3. Unverbindlichkeit von Angeboten <br />
                                Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst zustande, wenn das Angebot von beiden Parteien schriftlich bestätigt wurde.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.4. Ausschluss mündlicher Nebenabreden: <br />
                                Es wird vereinbart, dass mündliche Nebenabreden zu den Verträgen zwischen den Parteien nicht bestehen und auch zukünftig ausgeschlossen sind.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.5. Schriftformerfordernis für Änderungen: <br />
                                Änderungen oder Ergänzungen zu den Verträgen bedürfen der Schriftform und müssen von beiden Parteien unterzeichnet werden, um rechtsgültig zu sein. Ausnahmefälle, in denen abweichende Verfahren zur Anwendung kommen, müssen spezifisch und explizit vereinbart werden.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.6. Gerichtsstand: <br />
                                Für sämtliche aus den Verträgen zwischen den Parteien resultierenden Rechtsstreitigkeiten gilt das Recht der Bundesrepublik Deutschland. Als ausschließlicher Gerichtsstand wird der Sitz des Dienstleisters festgelegt.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.7. Übertragung von Rechten und Pflichten: <br />
                                Die Übertragung von Rechten und Pflichten aus den Verträgen an Dritte ist nur mit vorheriger schriftlicher Zustimmung der anderen Partei zulässig oder wenn gesetzliche Regelungen dies erfordern. Rechtsnachfolger und Abtretungsempfänger sind verpflichtet, alle Verpflichtungen unter denselben Bedingungen wie im ursprünglichen Vertrag festgelegt zu übernehmen.

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.8. Nutzung geistigen Eigentums: <br />
                                Der Dienstleister kann im Rahmen der Erbringung der vereinbarten Dienstleistungen auf das geistige Eigentum des Kunden angewiesen sein. Zu diesem Zweck räumt der Kunde dem Dienstleister eine weltweite, nicht-exklusive, zeitlich unbeschränkte, nicht übertragbare und nicht unterlizenzierbare Lizenz ein, die gebührenfrei ist und ausschließlich der Erbringung der vertraglich vereinbarten Dienstleistungen dient. Diese Lizenz gilt ausschließlich für die Nutzung des geistigen Eigentums im Rahmen der Bedingungen dieses Vertrags sowie etwaiger dazugehöriger Dienstleistungsvereinbarungen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.9. Nutzung von Kundenbeziehungen für Marketingzwecke:<br />
                                Sofern nicht ausdrücklich anders vereinbart, ist es den Parteien gestattet, die Geschäftsbeziehung und die Erbringung von Dienstleistungen durch den Dienstleister für den Kunden zu referenzieren oder auf andere Weise zu verwenden, einschließlich, aber nicht beschränkt auf die Nennung als Kunde auf der Website, in Marketingmaterialien oder in Pressemitteilungen.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                15.10. Salvatorische Klausel:<br />
                                Sollten einzelne Bestimmungen dieses Vertrages ganz oder teilweise unwirksam oder nicht durchsetzbar sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die Parteien verpflichten sich, die unwirksame oder nicht durchsetzbare Bestimmung durch eine Regelung zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung möglichst nahekommt, soweit dies rechtlich zulässig ist.
                            </li>
                        </ol>
                    </div>
                    <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" />
                    <div id="websiteAGB" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold md:text-[38px] xs:text-[32px] text-[26px] lg:mb-4 mb-[10px] md:leading-[50.008px] xs:leading-[42.112px] leading-[34.216px]">Website AGB</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">1. Geltungsbereich</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">1.1. Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Website der Colacy GmbH (im Folgenden „Superagentur“) sowie aller angebotenen Inhalte, Dienste und Funktionen.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">1.2. Abweichende oder ergänzende Bedingungen des Nutzers finden keine Anwendung, es sei denn, die Superagentur stimmt ihrer Geltung ausdrücklich zu.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">2. Nutzung der Website</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">2.1. Die Nutzung der Website ist ausschließlich zu rechtmäßigen Zwecken gestattet.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">2.2. Nutzer verpflichten sich, keine Inhalte zu übermitteln, die gegen geltendes Recht oder Rechte Dritter verstoßen (z. B. urheberrechtlich geschütztes Material ohne Genehmigung, beleidigende Inhalte).</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">2.3. Der Betreiber behält sich das Recht vor, Inhalte zu entfernen, die unangemessen oder rechtswidrig sind.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">3. Registrierung und Nutzerkonto</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">3.1. Einige Dienste oder Funktionen der Website können eine Registrierung erfordern.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">3.2. Nutzer sind verpflichtet, wahrheitsgemäße und vollständige Angaben zu machen.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">3.3. Das Nutzerkonto ist nicht übertragbar, und Nutzer sind für die Sicherheit ihrer Zugangsdaten verantwortlich.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">4. Haftungsausschluss</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">4.1. Die Superagentur haftet nur bei Vorsatz oder grober Fahrlässigkeit, ausgenommen sind Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">4.2. Für die Inhalte verlinkter externer Websites wird keine Haftung übernommen. Die Verantwortung für diese Inhalte liegt bei den jeweiligen Anbietern oder Betreibern.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">4.3. Die Verfügbarkeit der Website wird nicht garantiert. Insbesondere Wartungsarbeiten, technische Probleme oder höhere Gewalt können die Nutzung einschränken.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">5. Urheberrecht und Nutzungsrechte</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">5.1. Alle auf der Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, Videos, etc.) sind urheberrechtlich geschützt.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">5.2. Eine Nutzung, Vervielfältigung oder Verbreitung der Inhalte ist nur mit ausdrücklicher schriftlicher Zustimmung der Superagentur zulässig.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">6. Datenschutz</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">6.1. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Informationen zum Umgang mit Daten finden Sie in unserer Datenschutzerklärung unter <a href="www.superagentur-marketing.de/datenschutz-und-agbs" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">www.superagentur-marketing.de/datenschutz-und-agbs</a>.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">7. Änderungen der AGB</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">7.1. Die Superagentur behält sich das Recht vor, diese AGB jederzeit zu ändern.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">7.2. Änderungen treten in Kraft, sobald sie auf der Website veröffentlicht werden. Es obliegt den Nutzern, sich regelmäßig über Änderungen zu informieren.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">8. Schlussbestimmungen</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">8.1. Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">8.2. Gerichtsstand ist der Sitz der Colacy GmbH, sofern gesetzlich zulässig.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">8.3. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] break-words">9. Verbraucherinformationen zur Streitbeilegung</div>
                        <ol className="md:my-4 my-3 list-inside xs:pl-5 pl-2.5">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">9.1. Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300 break-words">https://ec.europa.eu/consumers/odr/</a>.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">9.2. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</li>
                        </ol>
                    </div>
                </motion.div>
            </div>
        </section>


    )
}

export default TermAndConditions