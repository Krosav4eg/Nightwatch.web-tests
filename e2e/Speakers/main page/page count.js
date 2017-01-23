var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
            .assert.elementPresent('//h3[text()="IndustryForum Energy"]')
            .assert.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
            .assert.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
            .assert.elementPresent('//div[text()="Venue: , "]');
    },
    'page count 20': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//div/select/option[@value="20"]', 3000)
            .click('//div/select/option[@value="20"]')
            .waitForElementVisible('//span[text()="1 of 2"]', 7000)
            .waitForElementVisible('//a[text()="Next"]', 7000)
            .waitForElementVisible('//a[text()="Last"]', 7000);

    },
    'page count 50': function (browser) {
        browser
            .waitForElementVisible('//div/select/option[@value="50"]', 3000)
            .click('//div/select/option[@value="50"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//span[text()="1 of 1"]', 7000)
            .assert.elementNotPresent('//a[text()="Next"]')
            .assert.elementNotPresent('//a[text()="Last"]');

    },
    'page count 100': function (browser) {
        browser
            .waitForElementVisible('//div/select/option[@value="100"]', 3000)
            .click('//div/select/option[@value="100"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//span[text()="1 of 1"]', 7000)
            .assert.elementNotPresent('//a[text()="Next"]')
            .assert.elementNotPresent('//a[text()="Last"]');

    },

});