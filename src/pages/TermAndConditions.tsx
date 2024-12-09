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

        if (element) {
            const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
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
                <title>AGB und Datenschutz | Superagentur</title>
                <meta name="description" content="Erfahren Sie mehr über die Allgemeinen Geschäftsbedingungen, Datenschutzrichtlinien und Nutzungsbedingungen von Superagentur." />
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
                        <ol className="md:my-4 my-3 list-inside pl-5 flex flex-col gap-[20px]">
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
                                <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">kontakt@superagentur-marketing.de</a>

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
                                der zuständigen Datenschutzaufsichtsbehörde beschweren. Eine erteilte
                                Einwilligung können Sie jederzeit widerrufen.
                                Wie diese Rechte im Detail aussehen und wie sie wahrzunehmen sind, finden
                                Sie im letzten Abschnitt dieser Datenschutzerklärung.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                2.6. Datenschutz – Unsere Sicht: <br />
                                Datenschutz ist für uns mehr als nur eine lästige Pflicht! Personenbezogene
                                Daten haben einen großen Wert und ein achtsamer Umgang mit diesen Daten
                                sollte in unserer digitalisierten Welt selbstverständlich sein. Außerdem sollen
                                Sie als Website-Besucher in der Lage sein, selbst zu entscheiden, was, wann und durch wen mit Ihren Daten „passiert“. Deswegen verpflichten wir uns, alle
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
                                Verpflichtungen entgegenstehen. Einen ‚guten‘ Überblick darüber gibt auch
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
                                <a href="mailto:info@ionos.de" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">info@ionos.de</a> <br />
                                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">https://www.ionos.de/terms-gtc/datenschutzerklaerung/.</a>
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
                        <ol className="md:my-4 my-3 list-inside pl-5 flex flex-col gap-[20px]">
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
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.2.2. Ablehnen von Cookies <br />
                                Alle Cookies, die nicht technisch notwendig sind, können Sie direkt über unser
                                Cookie-Consent-Tool verwalten. <br />
                                Das Setzen von Cookies kann verhindert werden, indem Sie die Einstellungen
                                Ihres Browsers anpassen. <br />
                                Hier finden Sie die entsprechenden Verlinkungen zu häufig benutzten
                                Browsern: <br />
                                Mozilla Firefox: <br />
                                <a href="https://support.mozilla.org/de/kb/cookies-und-website-datenin-firefox-loschen?redirectslug=Cookies+l%C3%B6schen&redirectlocale=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://support.mozilla.org/de/kb/cookies-und-website-datenin-firefox-loschen?redirectslug=Cookies+l%C3%B6schen&redirectlocale=de
                                </a>
                                <br />
                                Google Chrome: <br />
                                <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=de
                                </a>
                                <br />
                                Microsoft Edge: <br />
                                <a href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d
                                </a> <br />
                                Safari: <br />
                                <a href="https://support.apple.com/de-de/guide/mdm/mdmf7d5714d4/web" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://support.apple.com/de-de/guide/mdm/mdmf7d5714d4/web
                                </a> und <br />
                                <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://support.apple.com/de-de/guide/safari/sfri11471/mac
                                </a>. Sie einen
                                anderen Browser nutzen, empfiehlt es sich den Namen Ihres Browsers und
                                ‚Cookies löschen und verwalten‘ in eine Suchmaschine einzugeben und dem
                                offiziellen Link zu Ihrem Browser zu folgen. <br />
                                Alternativ können Sie Ihre Cookie-Einstellungen auch unter <br />
                                <a href=" www.aboutads.info/choices/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    www.aboutads.info/choices/
                                </a> <br />
                                <a href="www.youronlinechoices.com" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    www.youronlinechoices.com
                                </a> <br />
                                Wir müssen Sie allerdings darauf hinweisen, dass eine umfassende
                                Blockierung/Löschung von Cookies zu Beeinträchtigungen bei der Nutzung
                                der Website führen kann.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.2.3. Technisch notwendige Cookies <br />
                                Wir setzen auf dieser Website technisch notwendige Cookies ein, damit
                                unsere Website fehlerfrei und gemäß den geltenden Gesetzen funktioniert.
                                Sie helfen dabei, die Website nutzerfreundlich zu gestalten. Einige Funktionen
                                unserer Website können ohne den Einsatz von Cookies nicht dargestellt
                                werden. <br />
                                Rechtsgrundlage hierfür ist je nach Einzelfall Art. 6 Abs. 1 lit. b, c und/oder f
                                DSGVO.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.3.2. Kontaktaufnahme <br />
                                <ul className="pl-5 my-[20px]">
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
                                        dem jeweiligen Endgerät und beim eingesetzten Telekommunikationsanbieter
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
                                        <a href="mailto:info@ionos.de" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                            info@ionos.de
                                        </a> <br />
                                        <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                            https://www.ionos.de/terms-gtc/datenschutzerklaerung/
                                        </a>


                                    </li>
                                    <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                        <span className="mr-2">d)</span>
                                        WhatsApp Business <br />
                                        <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0." target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                            https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0.
                                        </a>

                                    </li>

                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.3.3. Fragebögen/Formulare <br />
                                <ul className="pl-5 my-[20px]">
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
                                        <a href=" https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
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
                                        Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                        (SCC) der EU-Kommission. <br />
                                        Nähere Informationen zu der Datenverarbeitung von Webflow: <br />

                                        <a href="https://webflow.com/legal/cookie-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">https://webflow.com/legal/cookie-policy.</a> <br />
                                        <a href="https://webflow.com/legal/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">https://webflow.com/legal/privacy.</a> <br />
                                        <a href="https://webflow.com/legal/eu-privacy-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">https://webflow.com/legal/eu-privacy-policy.</a>
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
                                        stützen wir uns auf die EU-Standardvertragsklauseln als geeignete Garantie gemäß Art. 46 DSGVO. ClickUp hat sich zur Einhaltung der DSGVO
                                        verpflichtet. <br />
                                        Weitere Informationen zum Datenschutz bei ClickUp finden sich in deren
                                        Datenschutzerklärung: <br />
                                        <a href="https://clickup.com/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                            https://clickup.com/privacy.
                                        </a>

                                    </li>
                                </ul>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.4. Cookie-Consent-Tool
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                (SCC) der EU-Kommission. <br />
                                <a href="https://mailchimp.com/eu-us-data-transfer-statement/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://mailchimp.com/eu-us-data-transfer-statement/
                                </a> <br />
                                <a href="https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-_Standard_Contractual_Clauses" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-_Standard_Contractual_Clauses.
                                </a> <br />
                                Die Daten werden bei Vertragsende zwischen uns und Mailchimp gelöscht, es
                                sei denn, Sie widerrufen Ihre Einwilligung zuvor. In diesem Fall werden die
                                Daten mit dem Widerruf der Einwilligung gelöscht. <br />
                                Nähere Informationen finden Sie auch unter <br />
                                <a href="https://mailchimp.com/de/help/mailchimp-european-data-transfers/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://mailchimp.com/de/help/mailchimp-european-data-transfers/
                                </a> und <br />
                                <a href="https://mailchimp.com/de/gdpr/erfahren" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://mailchimp.com/de/gdpr/erfahren
                                </a> Sie unter <br />
                                <a href="https://mailchimp.com/legal/cookies/https://www.intuit.com/privacy/statement/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://mailchimp.com/legal/cookies/https://www.intuit.com/privacy/statement/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://www.cleverreach.com/de/funktionen/reporting-und-tracking/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.cleverreach.com/de/funktionen/reporting-und-tracking/.
                                </a><br />
                                <a href="https://www.cleverreach.com/de/datenschutz/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.cleverreach.com/de/datenschutz/.
                                </a><br />
                                Außerdem nutzen wir weitere E-Mail Services von CleverElements zur
                                Erfüllung unserer vertragsmäßigen Leistungen und der Kundenverwaltung.
                                Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. b DSGVO.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://de.rapidmail.wiki/kategorien/statistiken/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://de.rapidmail.wiki/kategorien/statistiken/.
                                </a><br />
                                <a href="https://www.rapidmail.de/datensicherheit" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.rapidmail.de/datensicherheit.
                                </a><br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.brevo.com/de/legal/privacypolicy/.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.ionos.de/terms-gtc/datenschutzerklaerung/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://legal.hubspot.com/de/privacy-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://legal.hubspot.com/de/privacy-policy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://www.pipedrive.com/en/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.pipedrive.com/en/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://zapier.com/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://zapier.com/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://webflow.com/legal/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://webflow.com/legal/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.6. Analyse- und Trackingtools
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.1. Google Analytics <br />
                                Wir nutzen auf dieser Website Google Analytics. Google Analytics ist ein
                                Webanalysedienst. Dieser Dienst wird angeboten von der Google Irland
                                Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. <br />
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
                                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://tools.google.com/dlpage/gaoptout?hl=de.
                                </a> <br />
                                Ansonsten hängt die Speicherdauer von der Art der verarbeiteten Daten ab.
                                Jeder Kunde kann wählen, wie lange Google Analytics Daten speichert, bevor
                                sie automatisch gelöscht werden. Die maximale Lebensdauer eines Google
                                Analytics Cookies sind zwei Jahre. <br />
                                Weitere Informationen zur Datennutzung durch Google finden Sie auch unter <br />
                                <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://support.google.com/analytics/answer/6004245?hl=de.
                                </a> <br />
                                Für alle weiteren Rückfragen können Sie sich auch direkt an <br />
                                <a href="mailto:support-deutschland@google.com" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    support-deutschland@google.com
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                Weitere Informationen zum Google Consent Mode finden Sie unter:
                                https://support.google.com/analytics/answer/9976101.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.3. Google Maps <br />
                                Wir nutzen auf dieser Website Google Maps. Google Maps ist ein Web-
                                Mapping-Dienst. Dieser Dienst wird angeboten von der Google Irland Limited
                                („Google“), Gordon House, Barrow Street, Dublin 4, Irland. <br />
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
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                (SCC) der EU-Kommission. <br />
                                Weitere Details: <br />
                                <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://privacy.google.com/businesses/gdprcontrollerterms/
                                </a> und <br />
                                <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                                </a> <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://policies.google.com/privacy?hl=de.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.4. YouTube <br />
                                Auf dieser Website binden wir YouTube-Videos ein. YouTube ist eine Online-
                                Videoplattform. Dieser Dienst wird angeboten von der Google Irland Limited
                                („Google“), Gordon House, Barrow Street, Dublin 4, Irland. <br />
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
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://policies.google.com/privacy?hl=de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.5. Google Conversion-Tracking <br />
                                Diese Website nutzt Google Conversion Tracking. Google Conversion
                                Tracking ist ein Webanalysedienst. Dieser Dienst wird angeboten von der
                                Google Irland Limited („Google“), Gordon House, Barrow Street, Dublin 4,
                                Irland. <br />
                                Google Conversion-Tracking setzt Cookies zur Identifikation. Wir erfahren die
                                Nutzerzahl und welche Aktionen auf der Website durch die Website-Besucher
                                durchgeführt wurden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Die Daten werden gelöscht, sobald sie für die Verarbeitungszwecke nicht
                                mehr benötigt werden. <br />
                                Weitere Details: <br />
                                <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://policies.google.com/privacy?hl=de.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.6. Google Ads Remarketing <br />
                                Auf dieser Website nutzen wir Google Ads Remarketing. Google Ads
                                Remarketing ist ein Webanalysedienst. Dieser Dienst wird angeboten von der
                                Google Irland Limited („Google“), Gordon House, Barrow Street, Dublin 4,
                                Irland. <br />
                                Google Ads Remarketing setzt Cookies zu folgendem Zweck: Website-
                                Besucher können einer bestimmten Zielgruppe zugeordnet werden und
                                dementsprechend mit personalisierter Werbung versorgt werden. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Weitere Details: <br />
                                <a href="https://www.google.com/settings/ads/onweb/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.google.com/settings/ads/onweb/
                                </a> <br />
                                <a href="https://policies.google.com/technologies/ads?hl=de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://policies.google.com/technologies/ads?hl=de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.7. Google Tag Manager <br />
                                Auf dieser Website nutzen wir Google Tag Manager. Google Tag Manager ist
                                ein Webanalysedienst. Dieser Dienst wird angeboten von der Google Irland
                                Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. <br />
                                Der Google Tag Manager speichert keine Cookies und analysiert auch nicht
                                eigenständig. Er dient lediglich der Verwaltung der über ihn eingebundenen
                                Tools. Die IP-Adresse des Website-Besuchers wird jedoch erfasst, welche an
                                das Mutterunternehmen von Google in die USA übertragen werden kann. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Wir haben
                                ein berechtigtes Interesse daran, unkompliziert verschiedene Tools auf seiner
                                Website einzubinden und zu verwalten. <br />
                                Weitere Details: <br />

                                <a href="https://policies.google.com/privacy?hl=en" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://policies.google.com/privacy?hl=en.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.8. Google Ads <br />
                                Wir nutzen auf dieser Website Google Ads. Google Ads ist ein Online-
                                Werbeprogramm der Google Irland Limited („Google“), Gordon House, Barrow
                                Street, Dublin 4, Irland. <br />
                                Der Dienst ermöglicht es uns, Werbeanzeigen in der Google-Suchmaschine
                                an bestimmte Keywords zu knüpfen und anhand von vorhandenen
                                Nutzerdaten zielgerichtete Werbeanzeigen zu schalten. Hierbei werden für
                                das Conversion-Tracking Cookies genutzt. <br />
                                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO und § 25
                                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. <br />
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                (SCC) der EU-Kommission. <br />
                                Weitere Details: <br />
                                <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://privacy.google.com/businesses/controllerterms/mccs/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
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
                                <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/legal/controller_addendum.
                                </a> <br />
                                Wir sind für die Erteilung der Datenschutzinformationen beim Einsatz des
                                Facebook-Tools und die datenschutzrechtliche sichere Einbindung des Tools
                                auf der entsprechenden Website verantwortlich. Facebook ist hingegen für die
                                Datensicherheit ihrer Produkte verantwortlich. Hieraus folgt, dass
                                Betroffenenrechte hinsichtlich der bei Facebook verarbeiteten Daten direkt bei
                                Facebook geltend zu machen sind. <br />
                                Weitere Details: <br />
                                <a href="https://de-de.facebook.com/about/privacy/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://de-de.facebook.com/about/privacy/
                                </a> <br />
                                <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_scrnen" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/ads/preferences/?entry_product=ad_settings_scrnen
                                </a> <br />
                                <a href="http://www.youronlinechoices.com/de/praferenzmanagement/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    http://www.youronlinechoices.com/de/praferenzmanagement/
                                </a> <br />
                                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/legal/EU_data_transfer_addendum
                                </a> <br />
                                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://de-de.facebook.com/help/566994660333381.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.ionos.de/terms-gtc/datenschutzerklaerung/.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.11. Facebook Conversion API <br />
                                Wir nutzen auf dieser Website Facebook Conversion API. Facebook
                                Conversion API ist ein Webanalysedienst. Dieser Dienst wird angeboten von
                                der Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. <br />
                                Mithilfe von Facebook Conversion API können wir die Interaktion des
                                Website-Besuchers mit der Website erfassen und an Facebook übermitteln,
                                um die Werbeperformance bei Facebook zu optimieren. <br />
                                Die erfassten Daten werden auch in die USA und in andere Drittländer
                                übertragen. <br />
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                (SCC) der EU-Kommission. <br />
                                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/legal/EU_data_transfer_addendum
                                </a><br />
                                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
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
                                <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/legal/controller_addendum.
                                </a><br />
                                Wir sind für die Erteilung der Datenschutzinformationen beim Einsatz des
                                Facebook-Tools und die datenschutzrechtliche sichere Einbindung des Tools
                                auf der entsprechenden Website verantwortlich. Facebook ist hingegen für die
                                Datensicherheit ihrer Produkte verantwortlich. Hieraus folgt, dass
                                Betroffenenrechte hinsichtlich der bei Facebook verarbeiteten Daten direkt bei
                                Facebook geltend zu machen sind. <br />
                                Weitere Details: <br />
                                <a href="https://de-de.facebook.com/about/privacy/" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://de-de.facebook.com/about/privacy/.
                                </a>

                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                (SCC) der EU-Kommission. <br />
                                <a href="https://www.facebook.com/legal/terms/customaudience" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/legal/terms/customaudience
                                </a><br />
                                <a href="https://www.facebook.com/legal/terms/dataprocessing" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/legal/terms/dataprocessing.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                (SCC) der EU-Kommission. <br />
                                Weitere Details: <br />
                                <a href="https://www.linkedin.com/legal/l/dpa" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.linkedin.com/legal/l/dpa
                                </a> <br />
                                <a href="https://www.linkedin.com/legal/l/eu-sccs" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.linkedin.com/legal/l/eu-sccs
                                </a> <br />
                                <a href="https://de.linkedin.com/legal/l/cookie-table" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://de.linkedin.com/legal/l/cookie-table.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                (SCC) der EU-Kommission. <br />
                                Weitere Informationen: <br />
                                <a href="https://calendly.com/legal/privacy-notice" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://calendly.com/legal/privacy-notice.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                statt. Dabei kommen die Standardvertragsklauseln (SCC) der EU-Kommission
                                zum Einsatz, um ein angemessenes Datenschutzniveau zu gewährleisten.
                                Daten werden gespeichert, bis der Betroffene die Einwilligung zur
                                Speicherung widerruft oder der Zweck für die Speicherung entfällt. <br />
                                <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/de" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.tiktok.com/legal/page/eea/privacy-policy/de.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.6.16. HubSpot <br />
                                <a href="https://www.hubspot.com/privacy-policy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.hubspot.com/privacy-policy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                Standardvertragsklauseln (SCCs) der EU-Kommission verwendet, um ein
                                angemessenes Datenschutzniveau sicherzustellen. <br />
                                Die Daten werden so lange gespeichert, wie sie für den jeweiligen
                                Verarbeitungszweck notwendig sind oder bis der Nutzer eine Löschung
                                beantragt. <br />
                                Weitere Informationen zur Datenverarbeitung finden sich unter: <br />
                                <a href="https://policies.google.com/privacy" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://policies.google.com/privacy.
                                </a>
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.7. Social Media Plugins
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
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
                                <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/legal/controller_addendum
                                </a> <br />
                                Bei der Datenübertragung in die USA greifen die Standardvertragsklauseln
                                (SCC) der EU-Kommission. <br />
                                Weitere Informationen: <br />
                                <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/legal/EU_data_transfer_addendum
                                </a> <br />
                                <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://de-de.facebook.com/help/566994660333381
                                </a> <br />
                                <a href="https://www.facebook.com/policy.php" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://www.facebook.com/policy.php
                                </a> <br />
                                <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">
                                    https://de-de.facebook.com/privacy/explanation.
                                </a> <br />
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.7.2. Twitter
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.7.3.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.7.4.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.7.5.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2 pl-7">
                                3.7.6.
                            </li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30.006px] mb-2">
                                3.8. Cookie-Consent-Tool
                            </li>
                        </ol>

                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">4. Das ist sonst noch wichtig</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px]">5. Was ist, wenn morgen die DSGVO abgeschafft wird oder andere Veränderungen stattfinden?</div>

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