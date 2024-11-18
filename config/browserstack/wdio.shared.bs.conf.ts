import { config as baseConfig } from "../wdio.shared.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,
    // ========
    // Services
    // ========
    services: [...(baseConfig.services || []), ["browserstack", {}]],

    // =================
    // Service Providers
    // =================
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    connectionRetryTimeout: 180000,

    specFileRetries: 2,

    logLevel: "info",
    
};
