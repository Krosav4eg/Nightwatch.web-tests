var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'select by presentation headings down': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[5]', 10000)
            .click('//tr/th[5]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr/th[5]', 10000)
            .click('//tr/th[5]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[5]/span/div[text()="           Some heading           "]',5000)
            .assert.elementPresent('//tr[1]/td[5]/span/div[text()="           Some heading           "]')
            .assert.elementPresent('//tr[2]/td[5]/span/div[text()="           New Heading           "]');

    },


});