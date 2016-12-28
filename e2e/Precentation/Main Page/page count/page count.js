var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'page count': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[1][@value="20"]', 5000)
            .click('//option[1][@value="20"]')
            .waitForElementVisible('//span[text()="1 of 2"]', 5000)
            .waitForElementVisible('//a[1][@data-page="2"]', 5000)
            .waitForElementVisible('//a[2][text()="Next"]', 5000)
            .waitForElementVisible('//a[3][text()="Last"]', 5000)
            .waitForElementVisible('//option[2][@value="50"]', 5000)
            .click('//option[2][@value="50"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//span[text()="1 of 1"]', 5000)
            .waitForElementVisible('//option[3][@value="100"]', 5000)
            .click('//option[3][@value="100"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//span[text()="1 of 1"]', 5000);
    },

});