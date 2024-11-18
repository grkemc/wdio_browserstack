import { config as baseConfig } from "./wdio.shared.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    //
    // ======
    // Appium
    // ======
    //
    services: [
        ...(baseConfig.services || []),
        [
            "appium",
            {
                args: {
                    relaxedSecurity: true,
                    log: "./logs/appium.log",
                },
            },
        ],
    ],
};
