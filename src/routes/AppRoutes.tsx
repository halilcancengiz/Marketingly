import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/HomeV1";


// Dinamik olarak yüklenen bileşenler
const HomeV2 = React.lazy(() => import("../pages/HomeV2"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Thankyou = React.lazy(() => import("../pages/Thankyou"));
const TermAndConditions = React.lazy(() => import("../pages/TermAndConditions"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Services = React.lazy(() => import("../pages/Services"));
const SeoPlan = React.lazy(() => import("../pages/SeoPlan"));
const AdsPlan = React.lazy(() => import("../pages/AdsPlan"));
const CompanyListingPlan = React.lazy(() => import("../pages/CompanyListingPlan"));
const Impressum = React.lazy(() => import("../pages/Impressum"));
const StandartPackageDetail = React.lazy(() => import("../pages/StandartPackageDetail"));
const PremiumPackageDetail = React.lazy(() => import("../pages/PremiumPackageDetail"));
const BasicPackageDetail = React.lazy(() => import("../pages/BasicPackageDetail"));
const CompanyListingPremiumPackageDetail = React.lazy(() => import("../pages/CompanyListingPremiumPackageDetail"));
const SeoPlanBasicPackageDetail = React.lazy(() => import("../pages/SeoPlanBasicPackageDetail"));
const SeoPlanStandartPackageDetail = React.lazy(() => import("../pages/SeoPlanStandartPackageDetail"));
const SeoPlanPremiumPackageDetail = React.lazy(() => import("../pages/SeoPlanPremiumPackageDetail"));

export const AppRoutes = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomeV1 />} />
                <Route path="/startseite-v2" element={<HomeV2 />} />
                <Route path="/danke-seite" element={<Thankyou />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/datenschutz-und-agbs" element={<TermAndConditions />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/google-ads-plan-basis-paket-detail" element={<BasicPackageDetail />} />
                <Route path="/google-ads-plan-standard-paket-detail" element={<StandartPackageDetail />} />
                <Route path="/google-ads-plan-premium-paket-detail" element={<PremiumPackageDetail />} />
                <Route path="/unternehmenslistung-premium-paket-detail" element={<CompanyListingPremiumPackageDetail />} />
                <Route path="/seo-plan-basis-paket-detail" element={<SeoPlanBasicPackageDetail />} />
                <Route path="/seo-plan-standard-paket-detail" element={<SeoPlanStandartPackageDetail />} />
                <Route path="/seo-plan-premium-paket-detail" element={<SeoPlanPremiumPackageDetail />} />
                <Route path="/dienstleistungen" element={<Services />} />
                <Route path="/seo-plan" element={<SeoPlan />} />
                <Route path="/google-ads-plan" element={<AdsPlan />} />
                <Route path="/unternehmenslistung-plan" element={<CompanyListingPlan />} />
            </Routes>
        </React.Suspense>
    );
};
