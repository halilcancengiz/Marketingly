import { NavLink, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import facebookIcon from "../assets/images/facebook.webp"
import xIcon from "../assets/images/x.webp"
import intagramIcon from "../assets/images/instagram.webp"
import linkedinIcon from "../assets/images/linkedin.webp"
import youtubeIcon from "../assets/images/youtube.webp"
import whatsappIcon from "../assets/images/whatsapp.webp"
import Accordion from "../components/Accordion"
import { useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };

    const scaleAnimationVariant = {
        initial: {
            opacity: 0,
            scale: 0.7
        },
        animate: {
            opacity: 1,
            scale: 1
        }
    };

    useEffect(() => {
        // Sayfa yüklendiğinde kaydırmayı en üste al
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        // Form verilerini al ve işleme
        const formData = new FormData(form.current);
        const formattedData: Record<string, string> = {};

        formData.forEach((value, key) => {
            if (typeof value === "string") {
                if (key === "companyname") {
                    formattedData[key] = value.trim() || `• Kein Firmenname`; // Companyname için özel kontrol
                } else {
                    formattedData[key] = value.trim() || `• Keine Angabe`; // Diğer alanlar için
                }
            } else {
                // Eğer bir dosya ise (File türü), bunun için de varsayılan değer
                formattedData[key] = `• Keine Angabe`;
            }
        });

        try {
            // Backend URL kontrolü
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            if (!backendUrl) {
                console.error("Backend URL tanımlı değil.");
                alert("Sunucu bağlantı hatası. Lütfen daha sonra tekrar deneyin.");
                return;
            }

            // E-posta gönderimi
            const response = await fetch(`${backendUrl}/send-mail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formattedData),
            });

            if (response.ok) {
                navigate("/thank-you-page", { replace: true });
            } else {
                const errorMessage = await response.text();
                console.error("Mail gönderilemedi:", errorMessage);
                alert("Mail gönderme işlemi başarısız oldu. Lütfen tekrar deneyin.");
            }
        } catch (error) {
            console.error("Mail gönderimi sırasında hata:", error);
            alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
    };

    const today = new Date();
    const formattedDate = today
        .toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
        .replace(/\//g, "."); // "/" karakterlerini "." ile değiştir


    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Kontakt - Erreichen Sie Uns | MARKETINGLY X</title>
                <meta name="description" content="Kontaktieren Sie MARKETINGLY X für maßgeschneiderte Marketinglösungen und individuelle Beratung. Wir sind hier, um Ihre Fragen zu beantworten." />
                <meta property="og:title" content="Kontakt - Erreichen Sie Uns | MARKETINGLY X" />
                <meta property="og:description" content="Lassen Sie uns gemeinsam Ihre Marketingziele erreichen. Kontaktieren Sie MARKETINGLY X für eine maßgeschneiderte Lösung." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}contact`} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <section className="3xl:pt-[120px] lg:pt-[96px] md:pt-[60px] xs:pt-[50px] pt-[40px] 3xl:pb-[220px] lg:pb-[176px] md:pb-[140px] xs:pb-[113px] pb-[90px] px-6  overflow-hidden flex items-center justify-center relative">
                <div className="max-w-[1173px] w-full mx-auto flex lg:flex-row flex-col items-start  justify-between">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.40, duration: 0.3 }}
                        className="max-w-[487px] lg:mb-0 mb-20 lg:-mt-[50px] lg:w-auto w-full min-w-[288px] flex flex-col lg:mr-10 ">
                        <div className="text-primary uppercase mb-5 tb-medium text-base tracking-[1.6px]">Kontakt</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-5">Jetzt Anfragen</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium mb-10">Lassen Sie uns gemeinsam Ihre Ziele erreichen – ob mehr Sichtbarkeit, neue Kunden oder andere Anliegen. Wir sind für Sie da und bieten Ihnen maßgeschneiderte Lösungen für Ihre Bedürfnisse.</div>
                        <div className='flex flex-col gap-y-4 md:flex-nowrap flex-wrap mb-[60px]'>
                            <div style={{ boxShadow: '0px 8px 44px 0px rgba(8, 15, 52, 0.03)' }} className='group cursor-pointer flex items-center gap-x-3 hover-up-md rounded-[16px] py-[21px] px-6 border border-neutral-300'>
                                <div className="bg-[#E4E2FF] size-12 p-2.5 rounded-[10px] mr-[25px] overflow-hidden group/parent">
                                    <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                        <path opacity="0.35" d="M29.75 32H5.25C2.35025 32 0 29.6497 0 26.75V9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25V26.75C35 29.6497 32.6497 32 29.75 32Z" fill="#4A3AFF" />
                                        <path d="M13.8985 17.5888L0 9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25L21.1015 17.5888C18.8842 18.9188 16.1158 18.9188 13.8985 17.5888Z" fill="#4A3AFF" />
                                    </svg>
                                </div>

                                <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className='flex flex-col text-white'>
                                    <div className='tb-bold text-neutral-800 text-[18px] group-hover:text-primary transition-colors duration-300 xs:break-normal break-all'>{`${import.meta.env.VITE_CONTACT_EMAIL}`}</div>
                                </a>
                            </div>
                            <div style={{ boxShadow: '0px 8px 44px 0px rgba(8, 15, 52, 0.03)' }} className='group cursor-pointer flex items-center gap-x-3 hover-up-md rounded-[16px] py-[21px] px-6 border border-neutral-300'>
                                <div className="bg-[#FFE8E8] size-12 p-2.5 rounded-[10px] mr-[25px] overflow-hidden group">
                                    <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                        <g clipPath="url(#clip0)">
                                            <path opacity="0.35" d="M0.152786 8.03404C0.547467 10.9728 2.09241 17.7268 8.1833 23.8177C14.2742 29.9086 21.0264 31.4536 23.967 31.8483C26.0969 32.3087 28.4063 31.7238 30.0614 30.0686C32.65 27.4801 23.2736 18.1037 20.6851 20.6923L19.0335 22.3439L9.65714 12.9676L11.307 11.3159C13.8955 8.7274 4.51917 -0.648943 1.93063 1.9396C0.275457 3.59477 -0.309453 5.90419 0.152786 8.03404Z" fill="#FF6262" />
                                            <path d="M1.93652 1.93629L11.3111 11.3109C13.8943 8.72054 13.8943 4.52839 11.3058 1.93985C8.72077 -0.645134 4.52684 -0.646912 1.93652 1.93629Z" fill="#FF6262" />
                                            <path d="M20.6885 20.6902L30.063 30.0648C32.6462 27.4762 32.6462 23.2823 30.0577 20.6938C27.4709 18.1088 23.2788 18.107 20.6885 20.6902Z" fill="#FF6262" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="35" height="32" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`} className='flex flex-col text-white'>
                                    <div className='tb-bold text-neutral-800 text-[18px] group-hover:text-primary transition-colors duration-300'>{`${import.meta.env.VITE_CONTACT_PHONE}`}</div>
                                </a>
                            </div>
                        </div>

                        <div className="text-[24px] tb-bold mb-[30px]">
                            Folge uns!
                        </div>

                        <div className='flex gap-4 md:max-w-[311px] w-full xs:min-w-[311px] items-center justify-center md:pb-0 pb-4'>
                            <NavLink aria-label="Open facebook" to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={facebookIcon} alt="facebook" />
                            </NavLink>
                            <NavLink aria-label="Open x" to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={xIcon} alt="x" />
                            </NavLink>
                            <NavLink aria-label="Open instagram" to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={intagramIcon} alt="instagram" />
                            </NavLink>
                            <NavLink aria-label="Open linkedin" to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={linkedinIcon} alt="linkedin" />
                            </NavLink>
                            <NavLink aria-label="Open youtube" to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={youtubeIcon} alt="youtube" />
                            </NavLink>
                            <NavLink aria-label="Open whatsapp" to="/" className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={whatsappIcon} alt="whatsapp" />
                            </NavLink>
                        </div>

                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.80, duration: 0.3 }}
                        style={{ boxShadow: '0px 2px 11px 0px rgba(31, 37, 89, 0.08)' }}
                        className="lg:max-w-[600px] max-w-[660px] lg:min-w-[542px] border border-neutral-300 w-full lg:py-[70px] lg:px-[55px] md:px-[46px] px-[35px] md:py-[58px] sm:[48px] py-[40px] rounded-[24px] relative bg-white"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-2 gap-[20px] bg-white">
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="firstname" className="xs:text-[18px] text-base tb-bold">Vorname</label>
                                <input id="firstname" name="firstname" required placeholder="Max" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="lastname" className="xs:text-[18px] text-base tb-bold">Nachname</label>
                                <input id="lastname" name="lastname" required placeholder="Mustermann" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="email" className="xs:text-[18px] text-base tb-bold">E-Mail</label>
                                <input id="email" name="email" required placeholder="name@domain.de" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="email" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="phonenumber" className="xs:text-[18px] text-base tb-bold">Telefonnummer<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="phonenumber" name="phonenumber" placeholder="0123 4567890" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="number" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="companyname" className="xs:text-[18px] text-base tb-bold">Firma<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="companyname" name="companyname" placeholder="Mustermann GmbH" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="street" className="xs:text-[18px] text-base tb-bold">Straße, Nr.<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="street" name="street" placeholder="Musterstraße 1" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="zipcode" className="xs:text-[18px] text-base tb-bold">PLZ<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="zipcode" name="zipcode" placeholder="12345" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="number" />
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="location" className="xs:text-[18px] text-base tb-bold">Ort<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <input id="location" name="location" placeholder="Musterstadt" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>

                            <div className="sr-only md:col-span-1 col-span-2 flex flex-col gap-3">
                                <input id="pn" name="pn" value="Contact Page" placeholder="contact" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>

                            <div className="sr-only md:col-span-1 col-span-2 flex flex-col gap-3">
                                <input
                                    id="dt"
                                    name="dt"
                                    placeholder="dt"
                                    defaultValue={formattedDate} // Nokta ile ayrılmış tarih formatını ekle
                                    className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium"
                                    type="text"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col gap-3">
                                <label htmlFor="message" className="xs:text-[18px] text-base tb-bold">Nachricht<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <textarea id="message" name="message" placeholder="Nachricht" className="bplaceholder placeholder:text-neutral-600 text-neutral-800 focus:outline-none border rounded-[10px] py-[17px] h-28 px-5 xs:text-[18px] text-base resize-none hover:border-primary focus:border-primary transition-colors duration-300 tb-medium"></textarea>
                            </div>



                            <div className="col-span-2 flex items-start gap-3">
                                <div>
                                    <input id="termandconditions" required className="size-5 mt-1 border-none outline-none ring-0 !accent-primary" type="checkbox" />
                                </div>
                                <label htmlFor="termandconditions" className="text-sm text-neutral-600 flex-wrap tb-medium">Mit dem Absenden des Formulars akzeptieren Sie die <NavLink aria-label="Open term and conditions  page" to="/datenschutz" className="text-primary cursor-pointer tb-medium">Datenschutzerklärung.</NavLink></label>
                            </div>
                            <div className="col-span-2">
                                <Button aria-label="Submit form" type="submit" className="tb-bold md:w-auto w-full">Absenden</Button>
                            </div>
                        </form>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 0.3 }}
                            style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }} className="absolute -left-[36px] -top-[49px] size-[205px] z-[-1] bg-secondary2">
                        </motion.div>
                        <motion.div
                            variants={scaleAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="absolute -right-[81px] -bottom-[67px] size-[208px] z-[-1] bg-primary">
                        </motion.div>

                    </motion.div>
                </div>
            </section>
            <section className="3xl:py-[220px] lg:py-[176px] md:py-[140px] xs:py-[113px] py-[90px] px-6 overflow-hidden flex items-center justify-center relative bg-neutral-200">
                <div className="flex flex-col max-w-[660px] w-full mx-auto">
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.50, duration: 0.3 }}
                        className="max-w-[660px] mb-10 lg:w-auto w-full min-w-[288px] text-center flex flex-col lg:mr-10 px-6">
                        <div className="text-primary uppercase mb-5 tb-medium text-base tracking-[1.6px]">Häufig gestellte Fragen</div>
                        <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-5">Sie haben Fragen, wir haben die Antworten</div>
                        <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Ihre Frage ist nicht dabei? Kontaktieren Sie uns, und wir antworten Ihnen unverzüglich.</div>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariant}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.50, duration: 0.3 }}
                        className="flex flex-col gap-4">
                        <Accordion
                            title="Welche Art von Unternehmen betreut ihr?"
                            content="Wir betreuen Unternehmen aller Branchen, von kleinen Betrieben bis zu großen Firmen." />
                        <Accordion
                            title="Könnt ihr auch kleinen Startups helfen?"
                            content="Ja, wir unterstützen Unternehmen jeder Größe, einschließlich Neugründungen." />
                        <Accordion
                            title="Kann ich die Leistungen später erweitern?"
                            content="Absolut, unsere Leistungen sind flexibel erweiterbar, sodass wir Sie auch zukünftig unterstützen können." />
                        <Accordion
                            title="Ist eine Mindestlaufzeit erforderlich?"
                            content="Die Mindestlaufzeit wird individuell je nach Leistung und Bedarf des Kunden festgelegt." />
                        <Accordion
                            title="Wie kann ich den Erfolg eurer Maßnahmen messen?"
                            content="Wir bieten regelmäßige Reportings, damit Sie die Ergebnisse der Maßnahmen genau verfolgen können." />
                        <Accordion
                            title="Bietet ihr eine persönliche Beratung an?"
                            content="Ja, wir bieten individuelle Beratungen an, um die bestmögliche Lösung für Ihre Ziele zu finden." />
                        <Accordion
                            title="Welche Dienstleistungen deckt ihr ab?"
                            content="Wir fokussieren uns aktuell auf Suchmaschinenoptimierung (SEO), bezahlte Anzeigen (Ads) und Unternehmenslistungen." />
                        <Accordion
                            title="Wie funktioniert die Bezahlung?"
                            content="Die Bezahlung erfolgt je nach Dienstleistung entweder als einmalige Gebühr oder wird monatlich abgerechnet." />


                    </motion.div>
                </div>
            </section>
        </div>

    )
}

export default Contact