import { Routes, Route } from "react-router-dom";
import { HomeV1 } from "../pages/HomeV1";
import { HomeV2 } from "../pages/HomeV2";
import NotFound from "../pages/NotFound";
import Thankyou from "../pages/Thankyou";
import TermAndConditions from "../pages/TermAndConditions";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import SeoPlan from "../pages/SeoPlan";
import AdsPlan from "../pages/AdsPlan";
import CompanyListingPlan from "../pages/CompanyListingPlan";
import Impressum from "../pages/Impressum";
import StandartPackageDetail from "../pages/StandartPackageDetail";
import PremiumPackageDetail from "../pages/PremiumPackageDetail";
import BasicPackageDetail from "../pages/BasicPackageDetail";
import CompanyListingPremiumPackageDetail from "../pages/CompanyListingPremiumPackageDetail";
import SeoPlanBasicPackageDetail from "../pages/SeoPlanBasicPackageDetail";
import SeoPlanStandartPackageDetail from "../pages/SeoPlanStandartPackageDetail";
import SeoPlanPremiumPackageDetail from "../pages/SeoPlanPremiumPackageDetail";



export const AppRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<HomeV1 />} />
            <Route path="/startseite-v2" element={<HomeV2 />} />
            <Route path="/danke-seite" element={<Thankyou />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/datenschutz-und-agbs" element={<TermAndConditions />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/google-ads-basis-paket-detail" element={<BasicPackageDetail />} />
            <Route path="/google-ads-standard-paket-detail" element={<StandartPackageDetail />} />
            <Route path="/google-ads-premium-paket-detail" element={<PremiumPackageDetail />} />
            <Route path="/unternehmenslistung-premium-paket-detail" element={<CompanyListingPremiumPackageDetail />} />
            <Route path="/seo-plan-basis-paket-detail" element={<SeoPlanBasicPackageDetail />} />
            <Route path="/seo-plan-standard-paket-detail" element={<SeoPlanStandartPackageDetail />} />
            <Route path="/seo-plan-premium-paket-detail" element={<SeoPlanPremiumPackageDetail />} />
            <Route path="/dienstleistungen" element={<Services />} />
            <Route path="/seo-plan" element={<SeoPlan />} />
            <Route path="/google-ads-plan" element={<AdsPlan />} />
            <Route path="/unternehmenslistung-plan" element={<CompanyListingPlan />} />
        </Routes>
        
    );
};
