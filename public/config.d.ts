interface AppConfig {
    base_url: string;
    contact: {
        email: string;
        phone: string;
    };
    prices: {
        SEO: {
            basis: number;
            standard: number;
            premium: string;
        };
        google_ads: {
            basis: number;
            standard: number;
            premium: string;
        };
        company_listing: {
            premium: number;
        };
    };
    campaign_limits_google_ads: {
        basis: number;
        standard: number;
    };
    social_media: {
        instagram: string;
        facebook: string;
        x: string;
        youtube: string;
        linkedin: string;
        whatsapp: string;
    };
}

declare global {
    interface Window {
        APP_CONFIG: AppConfig;
    }
}

declare const APP_CONFIG: AppConfig;
export default APP_CONFIG; 