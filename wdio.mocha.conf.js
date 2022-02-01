const { join } = require('path');

exports.config = {
    runner: 'local',
    //hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['web/test/e2e/**.e2e.js'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],
    logLevel: 'info',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'https://webdriver.io/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        timeout: 60000,
    },
    automationProtocol: 'devtools',
    reporters: [
        'spec',
    ],
    services: [
        //'chromedriver',
    ],
    beforeSession() {
        //require('expect-webdriverio').setOptions({ wait: 5000 });
    },
    before() {
        browser.setWindowSize(1280, 720);
    },
};
