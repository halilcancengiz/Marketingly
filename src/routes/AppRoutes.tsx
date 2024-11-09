import { Routes, Route } from "react-router-dom";
import { HomeV1 } from "../pages/HomeV1";
import { HomeV2 } from "../pages/HomeV2";
// import { StyleGuidePage } from "../pages/StyleGuidePage";
// import Test from "../pages/Test";
import NotFound from "../pages/NotFound";
import Thankyou from "../pages/Thankyou";
import TermAndConditions from "../pages/TermAndConditions";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import Services from "../pages/Services";
import SeoPlan from "../pages/SeoPlan";
import AdsPlan from "../pages/AdsPlan";
import CompanyListingPlan from "../pages/CompanyListingPlan";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeV1 />} />
            <Route path="/homev2" element={<HomeV2 />} />
            {/* <Route path="/styleguide" element={<StyleGuidePage />} /> */}
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="/thank-you-page" element={<Thankyou />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/datenschutz" element={<TermAndConditions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/seo-plan" element={<SeoPlan />} />
            <Route path="/ads-plan" element={<AdsPlan />} />
            <Route path="/company-listing-plan" element={<CompanyListingPlan />} />
        </Routes>
    );
};
