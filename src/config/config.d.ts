interface AppConfig {
    base_url: string;
    contact: {
        email: string;
        phone: string;
    };
    // ... diğer tip tanımlamaları
}

declare const APP_CONFIG: AppConfig;
export default APP_CONFIG; 