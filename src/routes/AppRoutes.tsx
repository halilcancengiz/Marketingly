import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/HomeV1";

const NotFound = React.lazy(() => import("../pages/NotFound"));
const Thankyou = React.lazy(() => import("../pages/Thankyou"));
const TermAndConditions = React.lazy(() => import("../pages/TermAndConditions"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Services = React.lazy(() => import("../pages/Services"));
const Impressum = React.lazy(() => import("../pages/Impressum"));

const SeaPreise = React.lazy(() => import("../pages/PricingPlans/SeaPreise"))
const SeoPreise = React.lazy(() => import("../pages/PricingPlans/SeoPreise"))
const SocialMediaAdsPreise = React.lazy(() => import("../pages/PricingPlans/SocialMediaAdsPreise"))
const EmailMarketingPreise = React.lazy(() => import("../pages/PricingPlans/EmailMarketingPreise"))
const WebsiteFunnelPreise = React.lazy(() => import("../pages/PricingPlans/WebsiteFunnelPreise"))
const UnternehmenslistungPreise = React.lazy(() => import("../pages/PricingPlans/UnternehmenslistungPreise"))
const FotoUndVideographiePreise = React.lazy(() => import("../pages/PricingPlans/FotoUndVideographiePreise"))
const AnalyticsAufsetzungPreise = React.lazy(() => import("../pages/PricingPlans/AnalyticsAufsetzungPreise"))
const MarketingRessourcenPreise = React.lazy(() => import("../pages/PricingPlans/MarketingRessourcenPreise"))

const SeaBasis = React.lazy(() => import("../pages/DetailPages/SEA/SeaBasis"))
const SeaStandard = React.lazy(() => import("../pages/DetailPages/SEA/SeaStandard"))
const SeaPremium = React.lazy(() => import("../pages/DetailPages/SEA/SeaPremium"))

const SeoBasis = React.lazy(() => import("../pages/DetailPages/SEO/SeoBasis"))
const SeoStandard = React.lazy(() => import("../pages/DetailPages/SEO/SeoStandard"))
const SeoPremium = React.lazy(() => import("../pages/DetailPages/SEO/SeoPremium"))

const SocialMediaAdsBasis = React.lazy(() => import("../pages/DetailPages/SocialMediaAds/SocialMediaAdsBasis"))
const SocialMediaAdsStandard = React.lazy(() => import("../pages/DetailPages/SocialMediaAds/SocialMediaStandard"))
const SocialMediaAdsPremium = React.lazy(() => import("../pages/DetailPages/SocialMediaAds/SocialMediaAdsPremium"))

const EmailMarketingBasis = React.lazy(() => import("../pages/DetailPages/EmailMarketing/EmailMarketingBasis"))
const EmailMarketingStandard = React.lazy(() => import("../pages/DetailPages/EmailMarketing/EmailMarketingStandard"))
const EmailMarketingPremium = React.lazy(() => import("../pages/DetailPages/EmailMarketing/EmailMarketingPremium"))

const WFunnelBasis = React.lazy(() => import("../pages/DetailPages/WFunnel/WFunnelBasis"))
const WFunnelStandard = React.lazy(() => import("../pages/DetailPages/WFunnel/WFunnelStandard"))
const WFunnelPremium = React.lazy(() => import("../pages/DetailPages/WFunnel/WFunnelPremium"))

const UnternehmenslistungPremium = React.lazy(() => import("../pages/DetailPages/Unternehmenslistung/UnternehmenslistungPremium"))

const FotoUndVideographieBasis = React.lazy(() => import("../pages/DetailPages/FotoUndVideographie/FotoUndVideographieBasis"))
const FotoUndVideographieStandard = React.lazy(() => import("../pages/DetailPages/FotoUndVideographie/FotoUndVideographieStandard"))
const FotoUndVideographiePremium = React.lazy(() => import("../pages/DetailPages/FotoUndVideographie/FotoUndVideographiePremium"))

const AnalyticsAufsetzungBasis = React.lazy(() => import("../pages/DetailPages/AnalyticsAufsetzung/AnalyticsAufsetzungBasis"))
const AnalyticsAufsetzungStandard = React.lazy(() => import("../pages/DetailPages/AnalyticsAufsetzung/AnalyticsAufsetzungStandard"))
const AnalyticsAufsetzungPremium = React.lazy(() => import("../pages/DetailPages/AnalyticsAufsetzung/AnalyticsAufsetzungPremium"))

const MarketingRessourcenBasis = React.lazy(() => import("../pages/DetailPages/MarketingRessourcen/MarketingRessourcenBasis"))
const MarketingRessourcenStandard = React.lazy(() => import("../pages/DetailPages/MarketingRessourcen/MarketingRessourcenStandard"))
const MarketingRessourcenPremium = React.lazy(() => import("../pages/DetailPages/MarketingRessourcen/MarketingRessourcenPremium"))



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
                    {/* standard eksik */}
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
