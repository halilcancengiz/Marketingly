import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/HomeV1";
import SeaPreise from "../pages/PricingPlans/SeaPreise";
import SeoPreise from "../pages/PricingPlans/SeoPreise";
import SocialMediaAdsPreise from "../pages/PricingPlans/SocialMediaAdsPreise";
import EmailMarketingPreise from "../pages/PricingPlans/EmailMarketingPreise";
import WebsiteFunnelPreise from "../pages/PricingPlans/WebsiteFunnelPreise";
import UnternehmenslistungPreise from "../pages/PricingPlans/UnternehmenslistungPreise";
import FotoUndVideographiePreise from "../pages/PricingPlans/FotoUndVideographiePreise";
import AnalyticsAufsetzungPreise from "../pages/PricingPlans/AnalyticsAufsetzungPreise";
import MarketingRessourcenPreise from "../pages/PricingPlans/MarketingRessourcenPreise";
import SeaBasis from "../pages/DetailPages/SEA/SeaBasis";
import SeaStandard from "../pages/DetailPages/SEA/SeaStandard";
import SeaPremium from "../pages/DetailPages/SEA/SeaPremium";
import SocialMediaAdsBasis from "../pages/DetailPages/SocialMediaAds/SocialMediaAdsBasis";
import SocialMediaAdsStandard from "../pages/DetailPages/SocialMediaAds/SocialMediaStandard";
import SocialMediaAdsPremium from "../pages/DetailPages/SocialMediaAds/SocialMediaAdsPremium";
import EmailMarketingBasis from "../pages/DetailPages/EmailMarketing/EmailMarketingBasis";
import EmailMarketingStandard from "../pages/DetailPages/EmailMarketing/EmailMarketingStandard";
import EmailMarketingPremium from "../pages/DetailPages/EmailMarketing/EmailMarketingPremium";
import WFunnelBasis from "../pages/DetailPages/WFunnel/WFunnelBasis";
import WFunnelStandard from "../pages/DetailPages/WFunnel/WFunnelStandard";
import WFunnelPremium from "../pages/DetailPages/WFunnel/WFunnelPremium";
import UnternehmenslistungPremium from "../pages/DetailPages/Unternehmenslistung/UnternehmenslistungPremium";
import FotoUndVideographieBasis from "../pages/DetailPages/FotoUndVideographie/FotoUndVideographieBasis";
import FotoUndVideographieStandard from "../pages/DetailPages/FotoUndVideographie/FotoUndVideographieStandard";
import FotoUndVideographiePremium from "../pages/DetailPages/FotoUndVideographie/FotoUndVideographiePremium";
import AnalyticsAufsetzungBasis from "../pages/DetailPages/AnalyticsAufsetzung/AnalyticsAufsetzungBasis";
import AnalyticsAufsetzungStandard from "../pages/DetailPages/AnalyticsAufsetzung/AnalyticsAufsetzungStandard";
import AnalyticsAufsetzungPremium from "../pages/DetailPages/AnalyticsAufsetzung/AnalyticsAufsetzungPremium";
import MarketingRessourcenBasis from "../pages/DetailPages/MarketingRessourcen/MarketingRessourcenBasis";
import MarketingRessourcenStandard from "../pages/DetailPages/MarketingRessourcen/MarketingRessourcenStandard";
import MarketingRessourcenPremium from "../pages/DetailPages/MarketingRessourcen/MarketingRessourcenPremium";
import SeoBasis from "../pages/DetailPages/SEO/SeoBasis";
import SeoStandard from "../pages/DetailPages/SEO/SeoStandard";
import SeoPremium from "../pages/DetailPages/SEO/SeoPremium";


// Dinamik olarak yüklenen bileşenler
// const HomeV2 = React.lazy(() => import("../pages/HomeV2"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Thankyou = React.lazy(() => import("../pages/Thankyou"));
const TermAndConditions = React.lazy(() => import("../pages/TermAndConditions"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Services = React.lazy(() => import("../pages/Services"));
const Impressum = React.lazy(() => import("../pages/Impressum"));

export const AppRoutes = () => {

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomeV1 />} />
                {/* <Route path="/startseite-v2" element={<HomeV2 />} /> */}
                <Route path="/danke-seite" element={<Thankyou />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/datenschutz-und-agbs" element={<TermAndConditions />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/dienstleistungen" element={<Services />} />

                {/* services */}
                <Route path="/sea-preise" element={<SeaPreise />} />
                <Route path="/sea-basis" element={<SeaBasis />} />
                <Route path="/sea-standard" element={<SeaStandard />} />
                <Route path="/sea-premium" element={<SeaPremium />} />

                <Route path="/seo-preise" element={<SeoPreise />} />
                <Route path="/seo-basis" element={<SeoBasis />} />
                <Route path="/seo-standard" element={<SeoStandard />} />
                <Route path="/seo-premium" element={<SeoPremium />} />

                <Route path="/social-media-ads-preise" element={<SocialMediaAdsPreise />} />
                <Route path="/social-media-ads-basis" element={<SocialMediaAdsBasis />} />
                <Route path="/social-media-ads-standard" element={<SocialMediaAdsStandard />} />
                <Route path="/social-media-ads-premium" element={<SocialMediaAdsPremium />} />

                <Route path="/email-marketing-preise" element={<EmailMarketingPreise />} />
                <Route path="/email-marketing-basis" element={<EmailMarketingBasis />} />
                <Route path="/email-marketing-standard" element={<EmailMarketingStandard />} />
                <Route path="/email-marketing-premium" element={<EmailMarketingPremium />} />

                <Route path="/websitefunnel-preise" element={<WebsiteFunnelPreise />} />
                <Route path="/websitefunnel-basis" element={<WFunnelBasis />} />
                <Route path="/websitefunnel-standard" element={<WFunnelStandard />} />
                <Route path="/websitefunnel-premium" element={<WFunnelPremium />} />

                <Route path="/unternehmenslistung-preis" element={<UnternehmenslistungPreise />} />
                <Route path="/unternehmenslistung-premium" element={<UnternehmenslistungPremium />} />

                <Route path="/foto-und-videographie-preise" element={<FotoUndVideographiePreise />} />
                <Route path="/foto-und-videographie-basis" element={<FotoUndVideographieBasis />} />
                <Route path="/foto-und-videographie-standard" element={<FotoUndVideographieStandard />} />
                <Route path="/foto-und-videographie-premium" element={<FotoUndVideographiePremium />} />

                <Route path="/analytics-aufsetzung-preis" element={<AnalyticsAufsetzungPreise />} />
                <Route path="/analytics-aufsetzung-basis" element={<AnalyticsAufsetzungBasis />} />
                <Route path="/analytics-aufsetzung-standard" element={<AnalyticsAufsetzungStandard />} />
                <Route path="/analytics-aufsetzung-premium" element={<AnalyticsAufsetzungPremium />} />

                <Route path="/marketing-ressourcen-preise" element={<MarketingRessourcenPreise />} />
                <Route path="/marketing-ressourcen-basis" element={<MarketingRessourcenBasis />} />
                <Route path="/marketing-ressourcen-standard" element={<MarketingRessourcenStandard />} />
                <Route path="/marketing-ressourcen-premium" element={<MarketingRessourcenPremium />} />

            </Routes>
        </React.Suspense>
    );
};
