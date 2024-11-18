import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ["../tests/specs/**/app*.spec.ts"],

    // ============
    // Capabilities
    // ============
    capabilities: [
        {
            platformName: "Android",
            maxInstances: 1,
            "appium:deviceName": "Pixel 4",
            "appium:platformVersion": "12.0",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(
                process.cwd(),
                "apps",
                "zuhauseplus-debug-5.apk"
            ),
            "appium:newCommandTimeout": 240,
        },
    ],
};
