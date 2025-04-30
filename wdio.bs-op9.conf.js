exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    updateJob: false,
    specs: ["./test/specs/**.e2e.js"],
    exclude: [],
    hostname: "hub.browserstack.com",
    services: [
        [
            "browserstack",
            {
                app: "bs://b5627fd64c15f366e16b5648bef694d6f1241acd",
                buildIdentifier: "Webdriverio Android",
                browserstackLocal: true,
                accessibility: false,
            },
        ],
    ],
    capabilities: [
        {
            "bstack:options": {
                deviceName: "OnePlus 9",
                platformVersion: "11.0",
                platformName: "android",
            },
        },
    ],
    commonCapabilities: {
        "bstack:options": {
            projectName: "BrowserStack Sample",
            buildName: "bstack-demo",
            testObservability: true,
            debug: true,
            networkLogs: true,
            percy: false,
        },
    },
    maxInstances: 1,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 20000,
    },
};
