'use strict';
var reporter = require('cucumber-html-reporter');
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ After, Before, registerHandler }) {
    Before(function(scenario, callback) {
        console.log('console logs should not break the report');
        this.scenario = scenario;
        callback();
    });
    Before({ tags: '@testPassing' }, function(scenario, callback) {
        this.attach('Tests INFO will print here.<br>To attach INFO to Any steps, use scenario.attach function in your step definitions as shown below.<br><br>If you pass HTML\'s to scenario.attach then reporter will format accordingly <br>' +
            '<br>Simple String  : scenario.attach(\'sample data\')' +
            '<br>Pretty JSON    : scenario.attach(JSON.stringify(json, null, 2))' +
            '<br>HTML Link      : scenario.attach(\'format the link with html-a tag\'', 'application/json');

        this.attach('some text');
        callback();
    });

    After({ tags: '@testPassing' }, function(scenario, callback) {
        callback();
    });

    registerHandler('AfterFeatures', function(features, callback) {

        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/cucumber.json',
            output: './reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: false,
            metadata: {
                "App Version": "AEM-0.63.2",
                "Test Environment": "Jenkins",
                "Browser": "Chrome  default",
                "Platform": "Docker-Runner",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
        var theme = {
            bootstrap: 'bootstrap',
        }

        callback();
    });

});