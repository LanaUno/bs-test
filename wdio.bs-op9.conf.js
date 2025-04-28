exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'svetlana61',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'v6xnNAjHgUzeR8J9wsmz',

    updateJob: false,
    specs: [
      './test/specs/**.e2e.js'
    ],

    exclude: [],
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://b5627fd64c15f366e16b5648bef694d6f1241acd',
          buildIdentifier: "Webdriverio Android",
          browserstackLocal: true,
          accessibility: false
        },
      ]
    ],
    capabilities: [
    {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      }
    }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sample",
        buildName: "bstack-demo",
        testObservability: true,
        debug: true,
        networkLogs: true,
        percy: false,
      }
    },
    maxInstances: 1,
}