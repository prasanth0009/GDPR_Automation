const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')
const apickli = require('apickli')
var reporter = require('cucumber-html-reporter')
var nightwatch = require('nightwatch')
var browserstack = require('browserstack-local');


require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'timeout.js', '--require', './features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', './features']
})

nightwatch_config = {
    output_folder: 'reports',
    custom_assertions_path: '',
    page_objects_path: 'pages',
    custom_commands_path: 'helper'

    selenium: {
        "start_process": false,
        server_path: seleniumServer.path,
        "host": "hub-cloud.browserstack.com",
        "port": 80
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                'build': 'nightwatch-browserstack',
                'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'Chetanak3',
                'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'YaHbscWAbcKAmj3j9jPz',
                'browserstack.debug': true,
                'browserstack.local': true,
                'browser': 'chrome'
            }
        }
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;