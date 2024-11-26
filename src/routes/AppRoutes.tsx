import { Routes, Route } from "react-router-dom";
import { HomeV1 } from "../pages/HomeV1";
import { HomeV2 } from "../pages/HomeV2";
// import { StyleGuidePage } from "../pages/StyleGuidePage";
// import Test from "../pages/Test";
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
import { HomeV3 } from "../pages/HomeV3";
import CompanyListingPremiumPackageDetail from "../pages/CompanyListingPremiumPackageDetail";
import SeoPlanBasicPackageDetail from "../pages/SeoPlanBasicPackageDetail";
import SeoPlanStandartPackageDetail from "../pages/SeoPlanStandartPackageDetail";
import SeoPlanPremiumPackageDetail from "../pages/SeoPlanPremiumPackageDetail";



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeV1 />} />
            <Route path="/homev2" element={<HomeV2 />} />
            <Route path="/homev3" element={<HomeV3 />} />
            {/* <Route path="/styleguide" element={<StyleGuidePage />} /> */}
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="/thank-you-page" element={<Thankyou />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/datenschutz" element={<TermAndConditions />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/basic-package-detail" element={<BasicPackageDetail />} />
            <Route path="/standart-package-detail" element={<StandartPackageDetail />} />
            <Route path="/premium-package-detail" element={<PremiumPackageDetail />} />
            <Route path="/company-listing-premium-package-detail" element={<CompanyListingPremiumPackageDetail />} />
            <Route path="/seo-plan-basic-package-detail" element={<SeoPlanBasicPackageDetail />} />
            <Route path="/seo-plan-standart-package-detail" element={<SeoPlanStandartPackageDetail />} />
            <Route path="/seo-plan-premium-package-detail" element={<SeoPlanPremiumPackageDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/seo-plan" element={<SeoPlan />} />
            <Route path="/ads-plan" element={<AdsPlan />} />
            <Route path="/company-listing-plan" element={<CompanyListingPlan />} />
        </Routes>
        
    );
};
