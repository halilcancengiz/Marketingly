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

const APP_CONFIG: AppConfig = {
    base_url: "https://facebookadsagentur.de/",
    contact: {
        email: "kontakt@superagentur-marketing.de",
        phone: "+49 7252 5867380"
    },
    prices: {
        SEO: {
            basis: 899,
            standard: 1499,
            premium: "Preis auf Anfrage"
        },
        google_ads: {
            basis: 349,
            standard: 499,
            premium: "Preis auf Anfrage"
        },
        company_listing: {
            premium: 299
        }
    },
    campaign_limits_google_ads: {
        basis: 1500,
        standard: 3500
    },
    social_media: {
        instagram: "https://www.instagram.com/xxxx/",
        facebook: "https://www.facebook.com/xxxx/",
        x: "https://www.x.com/xxxx/",
        youtube: "https://www.youtube.com/xxxx/",
        linkedin: "https://www.linkedin.com/company/xxxx/",
        whatsapp: "https://wa.me/+4972525867380"
    }
};

export default APP_CONFIG; 