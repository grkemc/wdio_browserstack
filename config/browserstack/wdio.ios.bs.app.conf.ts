import { config as baseConfig } from "../wdio.shared.conf.js";
import path from "path";
import { runUploadProcess } from "@tests/helpers/UploadApp.js";


export const config: WebdriverIO.Config = {
    ...baseConfig,
    // ============
    // Specs
    // ============
    
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
    maxInstances: 1,
    capabilities: [
        {
            "appium:app": "yelloIOS",

            "bstack:options": {
                debug: true,

                deviceName: "iPhone 15 Pro",
                osVersion: "17",
                realMobile: true,
                projectName: "Yello IOS Automation",
                buildName: "Test IOS Yello",
                sessionName: "yello-ios-test",
                networkLogs: true,
            },
            "appium:noReset": true,
            "appium:fullReset": false
        },
    ] as WebdriverIO.Capabilities[],

    // ============
    // Cucumber framework setup
    // ============

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
