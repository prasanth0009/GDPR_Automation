const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')
const apickli = require('apickli')
var reporter = require('cucumber-html-reporter')


require('nightwatch-cucumber')({
cucumberArgs: [
'--require', './features/supports/hooks.js',
'--require', './features/step_definitions',
'--format', 'json:reports/cucumber.json',
'--format-options', '{"colorsEnabled":true}',
'features'
]
})

const fs = require('fs');
var cookieExtension = fs.readFileSync("chrome-getcookies-extension.crx.asc", "utf8");

module.exports = {
    restartBrowserBetweenTests: false,
    output_folder: 'reports',
    custom_assertions_path: '',
    page_objects_path: 'pages',
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 8081
    },
    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                on_failure: true,
                path: 'reports/screenshots/'
            },
            launch_url: 'http://localhost:8080',
            selenium_port: 8081,
            selenium_host: '127.0.0.1',
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    extensions: [cookieExtension]
                }
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                marionette: true,
                javascriptEnabled: true,
                acceptSslCerts: true,
                selenium: {
                    cli_args: {
                        'webdriver.geckodriver': './node_modules/geckodriver/bin/geckodriver'
                    }
                },
            }
        },
        ie: {
            desiredCapabilities: {
                browserName: 'internet-explorer',
                marionette: true,
                javascriptEnabled: true,
                acceptSslCerts: true,
                selenium: {
                    cli_args: {
                        'webdriver.ie.driver': './node_modules/iedriver/lib/iedriver/IEDriverServer.exe'
                    }
                },
            }
        },
        safari: {
            desiredCapabilities: {
                "browserName": "safari",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        }

    }
}