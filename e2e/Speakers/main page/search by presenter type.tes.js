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

    'check delegate type': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/td[12]/span/ul/li/span[text()="               Delegate             "]', 1298, 597)
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span[text()="               Delegate             "]', 30000)
            .click('//option[text()="Delegate"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="23"]', 3000)
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)
            .waitForElementVisible('//tr[2]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)
            .waitForElementVisible('//tr[3]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)
            .waitForElementVisible('//tr[4]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)
            .waitForElementVisible('//tr[5]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)
            .waitForElementVisible('//tr[6]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)
            .waitForElementVisible('//tr[7]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)
            .waitForElementVisible('//tr[9]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)
            .waitForElementVisible('//tr[10]/td[12]/span/ul/li/span[text()="               Delegate             "]', 3000)

    },

    'check partner type': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[text()="Partner"]', 30000)
            .click('//option[text()="Partner"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h4/span[text()="4"]', 3000)
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span[text()="               Partner             "]', 3000)
            .waitForElementVisible('//tr[2]/td[12]/span/ul/li/span[text()="               Partner             "]', 3000)
            .waitForElementVisible('//tr[3]/td[12]/span/ul/li/span[text()="               Partner             "]', 3000)
            .waitForElementVisible('//tr[4]/td[12]/span/ul/li/span[text()="               Partner             "]', 3000);

    },

});