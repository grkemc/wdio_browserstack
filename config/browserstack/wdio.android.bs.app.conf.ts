import { config as baseConfig } from "../wdio.shared.conf.js";
import path from "path";
import { runUploadProcess } from "@tests/helpers/UploadApp.js";


export const config: WebdriverIO.Config = {
    ...baseConfig,

    onPrepare: async function () {
        await runUploadProcess();
    },

    onComplete: function() {
        if (this.browserstackLocal) {
            this.browserstackLocal.stop(() => {
                console.log('BrowserStack Local instance stopped.');
            });
        }
    },

    // ============
    // Specs
    // ============
    specs: [path.join(process.cwd(), "tests", "features", "**", "*.feature")],

    // =============================
    // Browserstack specific config
    // =============================
    // User configuration
    user: process.env.BROWSERSTACK_USER || "BROWSERSTACK_USER",
    key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
    // Use browserstack service
    services: [
        [
            "browserstack",
            {
                browserstackLocal: true, 
                browserstackLocalForcedStop: true,
            },
        ],
    ],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    maxInstances: 1,
    capabilities: [
        {
            "appium:app":
                "yelloAndroid",
    
            "bstack:options": {
                deviceName: "Samsung Galaxy S23",
                osVersion: "13.0",
    
                debug: true,
                realMobile: true,
                projectName: "Yello Android Automation",
                buildName: "Test Android Yello",
                sessionName: "yello-android-test",
                networkLogs: true,
                interactiveDebugging: true,
            },
            "appium:noReset": true,
            "appium:fullReset": false,
            "goog:chromeOptions": {
                "args": ["--disable-popup-blocking", "--disable-infobars", "--disable-notifications"]
            }
        },
    ] as WebdriverIO.Capabilities[],

    framework: "cucumber",
    cucumberOpts: {
        require: 
        [
            path.join(process.cwd(), "tests", "steps", "**", "*.ts"),
            path.join(process.cwd(), "tests", "helpers", "Hooks.ts"),
        ],
        backtrace: false,
        requireModule: ["ts-node/register"],
        dryRun: false,
        failFast: false,
        format: ["pretty"],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: "",
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
        scenarioLevelReporter: true,
         
    },

};
