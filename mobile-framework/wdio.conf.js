const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const markets = require('./config/markets.json');
const {generate} = require('multiple-cucumber-html-reporter');
const {removeSync} = require('fs-extra');

const defaultMarket = 'UK';

exports.config = {
    // runner: 'local',
    // path: '/wd/hub',
    port: 4723,
    specs: [
        './features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        appiumVersion: '1.18.3',
        platformName: "Android",
        platformVersion: "11",
        deviceName: "Android Emulator",
        browserName: 'Chrome'
    }],
    logLevel: 'info',
    bail: 0,
    market: argv.market || defaultMarket,
    baseUrl: argv.market ? markets[argv.market].url : markets[defaultMarket].url,
    waitforTimeout: 50000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['appium', {
        args: {
            chromedriverExecutable: 'c:\\BODEN\\wdiodemo\\mobile-framework\\bin\\chromedriver.exe'
        }
    }]],
    framework: 'cucumber',
    reporters: ['cucumberjs-json',
        ['cucumberjs-json', {
            jsonFolder: '.tmp/new/',
            language: 'en',
        }],
    ],
    cucumberOpts: {
        require: ['./step_definitions/**/*.js'],
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
    onPrepare: () => {
        removeSync('.tmp/');
    },
    onComplete: () => {
        generate({
            jsonDir: '.tmp/json/',
            reportPath: '.tmp/report/',
            displayDuration: true,
            reportName: "WDIO mobile test report",
            hideMetadata: true,
            // metadata: {
            //     browser: {
            //         name: 'Chrome',
            //         version: '83'
            //     },
            //     device: 'Pixel 3a',
            //     platform: {
            //         name: 'Android',
            //         version: '11.0'
            //     }
            // },
            customData: {
                title: 'Run info',
                data: [
                    {label: 'Market', value: argv.market || defaultMarket}
                ]
            }
        });
    }
}