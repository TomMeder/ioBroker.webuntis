// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
    namespace ioBroker {
        interface AdapterConfig {
            anonymous: boolean;
            class: string;
            username: string;
            client_secret: string;
            school: string;
            baseUrl: string;
            days: string;
        }
    }
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};