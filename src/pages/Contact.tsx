import { NavLink, useNavigate } from "react-router-dom"
import Button from "../components/Button"
// import facebookIcon from "../assets/images/facebook.webp"
// import xIcon from "../assets/images/x.webp"
// import intagramIcon from "../assets/images/instagram.webp"
// import linkedinIcon from "../assets/images/linkedin.webp"
// import youtubeIcon from "../assets/images/youtube.webp"
// import whatsappIcon from "../assets/images/whatsapp.webp"
import Accordion from "../components/Accordion"
import { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import APP_CONFIG from '../../public/config.ts';
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/images/logo.webp"
import { CgSpinner } from "../assets/icons/icons.tsx"

const Contact = () => {
    const captchaRef = useRef<ReCAPTCHA>(null);
    const form = useRef<HTMLFormElement>(null);
    const [captchaError, setCaptchaError] = useState<boolean>(false);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const termAndConditionsCheckboxRef = useRef<HTMLInputElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

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



    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstNameRef.current?.value.trim()) {
            newErrors.firstname = "Dieses Feld darf nicht leer sein.";
        }

        if (!lastNameRef.current?.value.trim()) {
            newErrors.lastname = "Dieses Feld darf nicht leer sein.";
        }

        if (!emailRef.current?.value.trim()) {
            newErrors.email = "Dieses Feld darf nicht leer sein.";
        } else if (!emailRegex.test(emailRef.current.value)) {
            newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        }

        if (!termAndConditionsCheckboxRef.current?.checked) {
            newErrors.terms = "Sie müssen die Bedingungen akzeptieren.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!validateForm()) return;

        if (!captchaRef.current) {
            console.error("ReCAPTCHA referansı bulunamadı.");
            return;
        }

        try {
            setIsSubmitting(true);
            const token = await captchaRef.current.executeAsync();

            if (!token) {
                setCaptchaError(true);
                return;
            }

            setCaptchaError(false);

            const formData = new FormData(form.current!);
            const formattedData: Record<string, string> = {};

            formData.forEach((value, key) => {
                if (typeof value === "string") {
                    formattedData[key] = value.trim() || `• Keine Angabe`;
                } else {
                    formattedData[key] = `• Keine Angabe`;
                }
            });

            // debugger
            const backendUrl = import.meta.env.VITE_BACKEND_URL;


            const response = await fetch(`${backendUrl}/api/send-mail`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formattedData),
            });

            if (response.ok) {
                navigate("/danke-seite", { replace: true });
            } else {
                let errorMessage = await response.text();
                try {
                    const errorData = JSON.parse(errorMessage);
                    console.error("Backend error:", errorData);
                    alert(`Error: ${errorData.message}\n${errorData.debug ? JSON.stringify(errorData.debug, null, 2) : ''}`);
                } catch (parseError) {
                    console.error("Raw error response:", errorMessage);
                    alert(`Server error: ${errorMessage || 'Unknown error occurred'}`);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
            captchaRef.current.reset();
        }
    };

    const handleCaptchaChange = (token: string | null) => {
        if (token) {
            setCaptchaError(false);
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


    const handleInputChange = (field: string) => {
        setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[field];
            return updatedErrors;
        });
    };


    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Kontaktieren Sie Superagentur</title>
                <meta name="description" content="Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns für individuelle digitale Marketinglösungen." />
                <meta name="keywords" content="Kontakt, Marketinglösungen, Anfrage, Superagentur" />
                <meta property="og:title" content="Kontaktieren Sie Superagentur" />
                <meta property="og:description" content="Lassen Sie uns gemeinsam an Ihrer digitalen Marketingstrategie arbeiten. Wir stehen Ihnen zur Verfügung." />

                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${APP_CONFIG.base_url}kontakt`} />
                <meta property="og:image" content={logo} />
                <link rel="canonical" href={`${APP_CONFIG.base_url}kontakt`} />
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
                                <div className="bg-[#E4E2FF] size-12 min-w-12 min-h-12 p-2.5 rounded-[10px] mr-[25px] overflow-hidden group/parent">
                                    <svg className="group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" fill="none">
                                        <path opacity="0.35" d="M29.75 32H5.25C2.35025 32 0 29.6497 0 26.75V9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25V26.75C35 29.6497 32.6497 32 29.75 32Z" fill="#4A3AFF" />
                                        <path d="M13.8985 17.5888L0 9.25C0 6.35025 2.35025 4 5.25 4H29.75C32.6497 4 35 6.35025 35 9.25L21.1015 17.5888C18.8842 18.9188 16.1158 18.9188 13.8985 17.5888Z" fill="#4A3AFF" />
                                    </svg>
                                </div>

                                <a href={`mailto:${APP_CONFIG.contact.email}`} className='flex flex-col text-white'>
                                    <div className='tb-bold text-neutral-800 text-[18px] group-hover:text-primary transition-colors duration-300 xs:break-words break-words'>{`${APP_CONFIG.contact.email}`}</div>
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

                                <a href={`tel:${APP_CONFIG.contact.phone}`} className='flex flex-col text-white'>
                                    <div className='tb-bold text-neutral-800 text-[18px] group-hover:text-primary transition-colors duration-300'>{`${APP_CONFIG.contact.phone}`}</div>
                                </a>
                            </div>
                        </div>

                        {/* <div className="text-[24px] tb-bold mb-[30px]">
                            Folge uns!
                        </div>

                        <div className='flex gap-4 md:max-w-[311px] w-full xs:min-w-[311px] items-center justify-center md:pb-0 pb-4'>
                            <a aria-label="Open facebook" href={APP_CONFIG.social_media.facebook} className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={facebookIcon} alt="facebook" />
                            </a>
                            <a aria-label="Open x" href={APP_CONFIG.social_media.x} className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={xIcon} alt="x" />
                            </a>
                            <a aria-label="Open instagram" href={APP_CONFIG.social_media.instagram} className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={intagramIcon} alt="instagram" />
                            </a>
                            <a aria-label="Open linkedin" href={APP_CONFIG.social_media.linkedin} className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={linkedinIcon} alt="linkedin" />
                            </a>
                            <a aria-label="Open youtube" href={APP_CONFIG.social_media.youtube} className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={youtubeIcon} alt="youtube" />
                            </a>
                            <a aria-label="Open whatsapp" href={APP_CONFIG.social_media.whatsapp} className='rounded-full flex items-center justify-center hover-up-lg'>
                                <img loading="lazy" className='size-[37px] object-contain' src={whatsappIcon} alt="whatsapp" />
                            </a>
                        </div> */}

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
                        <form noValidate ref={form} onSubmit={handleSubmit} className="grid grid-cols-2 gap-[20px] bg-white">
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="firstname" className="xs:text-[18px] text-base tb-bold">Vorname</label>
                                <input
                                    ref={firstNameRef}
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Max"
                                    className={`placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium ${errors.firstname ? "border-red-500" : ""}`}
                                    onChange={() => handleInputChange("firstname")}
                                    type="text"
                                />
                                {errors.firstname && <span className="text-red-500 text-xs">{errors.firstname}</span>}
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="lastname" className="xs:text-[18px] text-base tb-bold">Nachname</label>
                                <input
                                    ref={lastNameRef}
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Mustermann"
                                    className={`placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium ${errors.lastname ? "border-red-500" : ""}`}
                                    onChange={() => handleInputChange("lastname")}
                                    type="text"
                                />
                                {errors.lastname && <span className="text-red-500 text-xs">{errors.lastname}</span>}
                            </div>
                            <div className="md:col-span-1 col-span-2 flex flex-col gap-3">
                                <label htmlFor="email" className="xs:text-[18px] text-base tb-bold">E-Mail</label>
                                <input
                                    ref={emailRef}
                                    id="email"
                                    name="email"
                                    placeholder="name@domain.de"
                                    className={`placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium ${errors.email ? "border-red-500" : ""}`}
                                    onChange={() => handleInputChange("email")}
                                    type="email"
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
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
                                <input readOnly id="pn" name="pn" value="Contact Page" placeholder="contact" className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium" type="text" />
                            </div>

                            <div className="sr-only md:col-span-1 col-span-2 flex flex-col gap-3">
                                <input
                                    readOnly
                                    id="dt"
                                    name="dt"
                                    placeholder="dt"
                                    value={formattedDate} // Nokta ile ayrılmış tarih formatını ekle
                                    className="placeholder:text-neutral-600 text-neutral-800 py-2 px-5 h-[62px] border rounded-[10px] hover:border-primary transition-colors duration-300 focus:border-primary focus:outline-none xs:text-[18px] text-base tb-medium"
                                    type="text"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col gap-3">
                                <label htmlFor="message" className="xs:text-[18px] text-base tb-bold">Nachricht<span className="tb-medium text-neutral-600 ml-1">(optional)</span></label>
                                <textarea id="message" name="message" placeholder="Nachricht" className="bplaceholder placeholder:text-neutral-600 text-neutral-800 focus:outline-none border rounded-[10px] py-[17px] h-28 px-5 xs:text-[18px] text-base resize-none hover:border-primary focus:border-primary transition-colors duration-300 tb-medium"></textarea>
                            </div>

                            {/* reCAPTCHA */}
                            <ReCAPTCHA
                                className="col-span-2"
                                ref={captchaRef}
                                size="invisible"
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                hl="de"
                                onChange={handleCaptchaChange} // Değişiklik kontrolü
                            />
                            {
                                captchaError && (
                                    <div className="text-red-600 text-sm w-full col-span-2 mt-2">
                                        <p>
                                            Verifizierung fehlgeschlagen. Bitte vervollständigen Sie das reCAPTCHA, um zu bestätigen, dass Sie kein Roboter sind.
                                        </p>
                                    </div>
                                )
                            }


                            <div className="col-span-2 flex flex-col items-start gap-1">
                                <div className="flex items-start gap-3">
                                    <input
                                        ref={termAndConditionsCheckboxRef}
                                        id="termandconditions"
                                        name="terms"
                                        type="checkbox"
                                        className={`size-5 mt-1 outline-none ring-0 !accent-primary ${errors.terms ? "border-red-500" : ""}`}
                                        onChange={() => handleInputChange("terms")}
                                    />
                                    <label htmlFor="termandconditions" className="text-sm text-neutral-600 flex-wrap tb-medium">
                                        Mit dem Absenden des Formulars akzeptieren Sie die <NavLink to="/datenschutz-und-agbs" className="text-primary cursor-pointer">Datenschutzerklärung</NavLink>.
                                    </label>
                                </div>

                                <div className="col-span-2">
                                    {errors.terms && <span className="text-red-500 text-xs">{errors.terms}</span>}
                                </div>
                            </div>

                            <div className="col-span-2">
                                <Button disabled={isSubmitting} aria-label="Submit form" type="submit" className="tb-bold md:w-auto w-full gap-2">
                                    {isSubmitting && (
                                        <div className="animate-spin">
                                            <CgSpinner />
                                        </div>
                                    )}
                                    {isSubmitting ? "Wird gesendet..." : "Absenden"}
                                </Button>
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