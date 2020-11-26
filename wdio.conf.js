exports.config = {
    runner: 'local',
    specs: [
        './web/test/features/**.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.boden.co.uk/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        requireModule: [
            ['@babel/register']
        ],
        require: ['./web/test/steps/**.step.js'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: true,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 300000,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip',
    },
    before() {
        browser.setWindowSize(1280, 720);
    },
    afterStep(
        uri,
        feature,
        scenario,
    ) {
        if (scenario.error) {
            browser.takeScreenshot();
        }
    },
}
