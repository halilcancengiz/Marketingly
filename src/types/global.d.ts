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
    }
} 