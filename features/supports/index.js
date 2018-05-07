'use strict';

var reporter = require('./reporter');

function generateReport(options) {
    return reporter.generate(options);
}

module.exports = {
    generate: generateReport
};