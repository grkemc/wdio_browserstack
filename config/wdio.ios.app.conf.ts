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
            platformName: "iOS",
            maxInstances: 1,

            "appium:deviceName": "iPhone 13 mini",
            "appium:platformVersion": "15.2",
            "appium:automationName": "XCUITest",

            "appium:app": join(
                process.cwd(),
                "apps",
                "zuhauseplus_ios-dev_com.enbw.ih.zuhauseplus.dev_3.1.0_516.ipa"
            ),
            "appium:newCommandTimeout": 240,
            "appium:webviewConnectTimeout": 5000,
        },
    ],
};
