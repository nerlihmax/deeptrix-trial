/// <reference types="vite/client" />

declare global {
    const __dev__: boolean;

    interface ImportMetaEnv {
        VITE_API_URL: string;
    }
}

export {};
