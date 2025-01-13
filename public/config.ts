declare global {
    interface Window {
        APP_CONFIG: AppConfig;
    }
}

interface AppConfig {
    base_url: string;
    contact: {
        email: string;
        phone: string;
    };
    prices: {
        SEA: {
            basis: number;
            standard: number;
            premium: string;
        };
        SEO: {
            basis: number;
            standard: number;
            premium: string;
        };
        Social_Media_Ads: {
            basis: number;
            standard: number;
            premium: string;
        };
        Email_Marketing: {
            basis: number;
            standard: number;
            premium: string;
        };
        Website_Funnel: {
            basis: number;
            standard: number;
            premium: string;
        };
        Unternehmenslistung: {
            premium: number;
        };
        Foto_Und_Videographie: {
            basis: number;
            standard: number;
            premium: string;
        };
        Analytics_Aufsetzung: {
            basis: number;
            standard: number;
            premium: string;
        };
        Marketing_Ressourcen: {
            basis: number;
            standard: number;
            premium: string;
        };

    };
    campaign_limits: {
        SEA: {
            basis: number;
            standard: number;
        };
        Social_Media_Ads: {
            basis: number;
            standard: number;
        };
        Email_Marketing: {
            basis: number;
            standard: number;
        };
        Marketing_Ressourcen: {
            basis: number;
            standard: number;
        };
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
    base_url: "https://superagentur-marketing.de/",
    contact: {
        email: "kontakt@superagentur-marketing.de",
        phone: "+49 7252 5867380"
    },
    prices: {
        SEA: {
            basis: 499,
            standard: 799,
            premium: "Preis auf Anfrage"
        },
        SEO: {
            basis: 899,
            standard: 1499,
            premium: "Preis auf Anfrage"
        },
        Social_Media_Ads: {
            basis: 499,
            standard: 799,
            premium: "Preis auf Anfrage"
        },
        Email_Marketing: {
            basis: 399,
            standard: 699,
            premium: "Preis auf Anfrage"
        },
        Website_Funnel: {
            basis: 149,
            standard: 299,
            premium: "Preis auf Anfrage"
        },
        Unternehmenslistung: {
            premium: 299
        },
        Foto_Und_Videographie: {
            basis: 499,
            standard: 899,
            premium: "Preis auf Anfrage"
        },
        Analytics_Aufsetzung: {
            basis: 1499,
            standard: 2499,
            premium: "Preis auf Anfrage"
        },
        Marketing_Ressourcen: {
            basis: 199,
            standard: 399,
            premium: "Preis auf Anfrage"
        }


    },
    campaign_limits: {
        SEA: {
            basis: 2500,
            standard: 6000
        },
        Social_Media_Ads: {
            basis: 2500,
            standard: 6000
        },
        Email_Marketing: {
            basis: 1000,
            standard: 5000
        },
        Marketing_Ressourcen: {
            basis: 15,
            standard: 40
        }

    },
    social_media: {
        instagram: "https://www.instagram.com/xxxx/",
        facebook: "https://www.facebook.com/xxxx/",
        x: "https://www.x.com/xxxx/",
        youtube: "https://www.youtube.com/xxxx/",
        linkedin: "https://www.linkedin.com/company/xxxx/",
        whatsapp: "https://wa.me/+4972525867380"
    }
} as const;

(window as Window & typeof globalThis).APP_CONFIG = APP_CONFIG;
export default APP_CONFIG; 