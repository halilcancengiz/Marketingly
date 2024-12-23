declare global {
    interface Window {
        Email: {
            send: (config: {
                Host: string;
                Port: number;
                Username: string;
                Password: string;
                To: string;
                From: string;
                Subject: string;
                Body: string;
            }) => Promise<unknown>;
        };
        grecaptcha: {
            enterprise: {
                execute: (siteKey: string, options: { action: string }) => Promise<string>;
            };
        };
    }
}

export {};