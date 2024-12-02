interface EmailConfig {
    Host: string;
    Port: number;
    Username: string;
    Password: string;
    To: string;
    From: string;
    Subject: string;
    Body: string;
}

export declare class Email {
    static send(config: EmailConfig): Promise<void>;
}