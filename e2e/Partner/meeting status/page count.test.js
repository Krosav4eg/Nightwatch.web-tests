var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2/partner-meeting-status')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2)"]', 3000)
    },

    'page count 20': function (browser) {
        browser
            .clickBySelectorXpath('//div/select/option[@value="20"]')
            .verify.elementPresent('//span[text()="1 of 2"]')
            .verify.elementPresent('//a[text()="Next"]')
            .verify.elementPresent('//a[text()="Last"]');
    },

    'page count 50': function (browser) {
        browser
            .clickBySelectorXpath('//div/select/option[@value="50"]')
            .useXpath()
            .waitForElementVisible('//span[text()="1 of 1"]', 3000)
            .verify.elementNotPresent('//a[text()="Next"]')
            .verify.elementNotPresent('//a[text()="Last"]');
    },

    'page count 100': function (browser) {
        browser
            .clickBySelectorXpath('//div/select/option[@value="100"]')
            .useXpath()
            .waitForElementVisible('//span[text()="1 of 1"]', 3000)
            .verify.elementNotPresent('//a[text()="Next"]')
            .verify.elementNotPresent('//a[text()="Last"]');
    },
});