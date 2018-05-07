const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')
const apickli = require('apickli')
var reporter = require('cucumber-html-reporter')
var nightwatch = require('nightwatch')

require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'timeout.js', '--require', './features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', './features']
})

nightwatch_config = {

    output_folder: 'reports',
    custom_assertions_path: '',
    page_objects_path: 'pages',

    selenium: {
        "start_process": false,
        "host": "hub-cloud.browserstack.com",
        "port": 80,
        "proxy": "http://surf.proxy.agis.allianz:8080"
    },

    common_capabilities: {
        'build': 'nightwatch-browserstack-AEM-stage-component',
        'project': 'AEM-stage-component',
        'name': 'TC_OMPRO-386_Stage_Component',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'Chetanak3',
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'YaHbscWAbcKAmj3j9jPz',
        'browserstack.debug': true
    },

    test_settings: {
        default: {},
        chrome: {
            desiredCapabilities: {
                browser: "chrome"
            }
        },
        firefox: {
            desiredCapabilities: {
                browser: "firefox"
            }
        },
        safari: {
            desiredCapabilities: {
                browser: "safari"
            }
        },
        ie: {
            desiredCapabilities: {
                browser: "internet explorer"
            }
        }
    }
};

// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['proxy'] = nightwatch_config.selenium.proxy;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for (var j in nightwatch_config.common_capabilities) {
        config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
}

module.exports = nightwatch_config;