import circlesImage from "../assets/images/circles.png"
import trianglesImage from "../assets/images/triangles.png"
import squaresImage from "../assets/images/squares.png"
import check from "../assets/images/check.png";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const CompanyListingPlan = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-secondary4 3xl:h-[642px] lg:h-[560px] md:h-[475px] h-[401px]  3xl:pt-[126px] lg:pt-[100px] md:pt-[60px] xs:pt-[50px] pt-[40px] 3xl:pb-[281px] lg:pb-[225px] md:pb-[200px] pb-[160px]">
        <div className="flex flex-col items-center justify-center text-center text-white max-w-[481px] px-6 w-full mx-auto">
          <div className="md:mb-5 xs:mb-[15px] mb-[10px] tb-medium text-base leading-[18px] uppercase">Unsere Pläne</div>
          <div className="mb-[15px] lg:text-[54px] md:text-[45px] xs:text-[38px] text-[32px] tb-bold lg:leading-[61.02px] md:leading-[50.85px] xs:leading-[42.94px] leading-[36.16px] ">
            Pläne für jeden Bedarf
          </div>
          <div className="tb-medium text-[18px] leading-[30.006px]">Unsere Preismodelle bieten flexible Lösungen für jedes Budget und jeden Bedarf.</div>
        </div>
      </div>
      <section className="md:-mt-28 -mt-20 z-[2] px-6 flex flex-col">
        <div className="grid lg:grid-cols-3 grid-cols-1  max-w-[1173px] gap-[26px] w-full mx-auto">
          <NavLink to="/product-detail" className="invisible lg:flex hidden col-span-1 w-full max-w-[660px] mx-auto 3xl:-mt-[56px] lg:-mt-[-4px] md:-mt-[32px] xs:-mt-[32px] -mt-[32px] hover-up-md group bg-white flex-col md:pb-12 xs:pb-10 pb-[33px] md:pt-[42px] xs:pt-[35px] pt-[30px] xs:px-[30px] px-[25px] border border-neutral-300 rounded-[20px]">

            <div className="size-[74px] rounded-[22px] border border-neutral-300 mb-[22px] flex items-center justify-center overflow-hidden">
              <img className="group-hover:scale-110 transition-all duration-300" src={squaresImage} alt="" />
            </div>

            <div className="tb-bold text-neutral-800 group-hover:text-primary transition-colors duration-300 mb-[10px] md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">
              Standard
            </div>
            <div className="text-[18px] leading-[30.006px] text-neutral-600 tb-medium">Basis-Paket für den Start.<span className="lg:flex hidden"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div>
            <hr className="w-full my-[35px]" />
            <div className="flex flex-col gap-[16px] mb-10">
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Social Media Marketing</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Paid Advertising</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">SEO: Search Engine Optimization</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Normal Support</div>
              </div>
            </div>
            <div className="lg:text-[24px] xs:text-[22px] text-[20px] tb-bold mb-[15px] text-neutral-800">$ 2,500.00 USD</div>

          </NavLink>

          <NavLink to="/product-detail" className="col-span-1 shadow-sm min-w-[373px] w-full max-w-[660px] mx-auto 3xl:-mt-32 lg:-mt-[68px] md:-mt-[32px] xs:-mt-[32px] -mt-[32px] hover-up-md group bg-white flex flex-col md:pb-12 xs:pb-10 pb-[33px] md:pt-[42px] xs:pt-[35px] pt-[30px] xs:px-[30px] px-[25px] border border-neutral-300 rounded-[20px]">

            <div className="size-[74px] rounded-[22px] border border-neutral-300 mb-[22px] flex items-center justify-center overflow-hidden">
              <img className="group-hover:scale-110 transition-all duration-300" src={circlesImage} alt="" />
            </div>
            <div className="tb-bold text-neutral-800 group-hover:text-primary transition-colors duration-300 mb-[10px] md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">
              Premium
            </div>
            <div className="text-[18px] leading-[30.006px] text-neutral-600 tb-medium">Ideales Paket für ambitionierte Ziele.</div>
            <hr className="w-full my-[35px]" />
            <div className="flex flex-col gap-[16px] mb-10">
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Social Media Marketing</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Paid Advertising</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">SEO: Search Engine Optimization</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Normal Support</div>
              </div>
            </div>
            <div className="lg:text-[24px] xs:text-[22px] text-[20px] tb-bold mb-[15px] text-neutral-800">$ 2,500.00 USD</div>

          </NavLink>

          <NavLink to="/product-detail" className="invisible lg:flex hidden col-span-1 w-full max-w-[660px] mx-auto 3xl:-mt-[56px] lg:-mt-[-4px] md:-mt-[32px] xs:-mt-[32px] -mt-[32px] hover-up-md group bg-white flex-col md:pb-12 xs:pb-10 pb-[33px] md:pt-[42px] xs:pt-[35px] pt-[30px] xs:px-[30px] px-[25px] border border-neutral-300 rounded-[20px]">

            <div className="size-[74px] rounded-[22px] border border-neutral-300 mb-[22px] flex items-center justify-center overflow-hidden">
              <img className="group-hover:scale-110 transition-all duration-300" src={trianglesImage} alt="" />
            </div>
            <div className="tb-bold text-neutral-800 group-hover:text-primary transition-colors duration-300 mb-[10px] md:text-[24px] xs:text-[22px] text-[20px] md:leading-[34.008px] xs:leading-[31.174px] leading-[28.34px]">
              Deluxe
            </div>
            <div className="text-[18px] leading-[30.006px] text-neutral-600 tb-medium">Umfassende Lösung für maximale Ergebnisse.</div>
            <hr className="w-full my-[35px]" />
            <div className="flex flex-col gap-[16px] mb-10">
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Social Media Marketing</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Paid Advertising</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">SEO: Search Engine Optimization</div>
              </div>
              <div className="flex items-center gap-[13px]">
                <img className="size-6 rounded-full" src={check} alt="" />
                <div className="leading-[20px] text-neutral-800 text-[18px] tb-medium">Normal Support</div>
              </div>
            </div>
            <div className="lg:text-[24px] xs:text-[22px] text-[20px] tb-bold mb-[15px] text-neutral-800">$ 2,500.00 USD</div>

          </NavLink>
        </div>
      </section>
      <section className="3xl:pb-[200px] lg:pb-[160px] md:pb-[128px] xs:pb-[102px] pb-[88px] px-6 max-w-[419px] w-full mx-auto flex flex-col items-center justify-center text-center lg:mt-[60px] mt-10">
        <div className="text-neutral-800 mb-[15px] tb-bold lg:text-[24px] md:text-[22px] text-[20px] lg:leading-[34.008px] md:leading-[31.174px] leading-[28.34px]">Haben wir Ihr Interesse geweckt?</div>
        <div className="text-neutral-600 text-[18px] leading-[30.006px] mb-[40px] tb-medium">Wir freuen uns zusammen mit Ihnen Ihre Ziele zu erfüllen.</div>
        <div>
          <Button className="tb-bold" variant="primary">Kontakt</Button>
        </div>
      </section>

      <section className="3xl:py-[170px] lg:py-[136px] md:py-[110px] xs:py-[88px] py-[70px] px-6 overflow-hidden flex items-center justify-center relative bg-neutral-200">
        <div className="flex flex-col max-w-[660px] w-full mx-auto">
          <div className="max-w-[660px] mb-10 lg:w-auto w-full min-w-[288px] text-center flex flex-col lg:mr-10 px-6">
            <div className="text-primary uppercase mb-5 tb-medium text-base tracking-[1.6px]">Häufig gestellte Fragen</div>
            <div className="col-span-1 md:text-[38px] text-[32px] leading-[42px] md:leading-[50px] tb-bold text-neutral-800 mb-5">Sie haben Fragen, wir haben die Antworten</div>
            <div className="leading-[30px] text-neutral-600 text-[18px] tb-medium">Ihre Frage ist nicht dabei? Kontaktieren Sie uns und wir antworten Ihnen unverzüglich</div>
          </div>
          <div className="flex flex-col gap-4">
            <Accordion
              title="Könnt ihr auch kleinen Startups helfen?"
              content="Ja, wir unterstützen Unternehmen jeder Größe, einschließlich Neugründungen." />
            <Accordion
              title="Wie funktioniert die Bezahlung?"
              content="Die Bezahlung erfolgt je nach Umfang des Projekts entweder als einmalige Pauschale oder als monatliche Abrechnung." />

            <Accordion
              title="Kann ich die Leistungen später erweitern?"
              content="Absolut, unsere Leistungen sind flexibel erweiterbar, sodass wir Sie auch zukünftig unterstützen können." />

            <Accordion
              title="Welche Art von Unternehmen betreut ihr?"
              content="Wir betreuen Unternehmen aller Branchen, von kleinen Betrieben bis zu großen Firmen." />

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


          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyListingPlan