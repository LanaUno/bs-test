const path = require("path");
exports.config = {
    runner: "local",
    port: 4723,
    specs: ["./test/specs/**/*.js"],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            platformName: "Android",
            "appium:platformVersion": "9.0",
            "appium:deviceName": "Pixel 3 API 28",
            "appium:app": path.join(process.cwd(),"\\Android-NativeDemoApp-0.4.0.apk"),
            "appium:automationName": "UiAutomator2",
            "appium:ensureWebviewsHavePages": "true",
            "appium:appWaitActivity": "*",
        },
    ],
    logLevel: "info",
    baseUrl: "http://localhost",
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ["appium"],
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
};
