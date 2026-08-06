exports.config = {

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    runner: 'local',

    specs: ['./mobile/test/specs/**/*.js'],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',

        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:chromedriverAutodownload': true,
        'appium:noReset': true,
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 120
    }],

    logLevel: 'info',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    mochaOpts: {
        timeout: 180000
    },

    framework: 'mocha',

    services: [],

};