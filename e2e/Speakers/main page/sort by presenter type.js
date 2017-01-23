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
    'sort by presenter type up': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/th[12]', 1298, 597)
            .click('//tr[1]/th[12]')
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span[text()="               Delegate             "]', 10000)
            .assert.elementPresent('//tr[1]/td[12]/span/ul/li/span[text()="               Delegate             "]')
            .assert.elementPresent('//tr[2]/td[12]/span/ul/li/span[text()="               Delegate             "]')
            .assert.elementPresent('//tr[3]/td[12]/span/ul/li/span[text()="               Delegate             "]')
            .assert.elementPresent('//tr[5]/td[12]/span/ul/li/span[text()="               Delegate             "]')
    },

    'sort by presenter type down': function (browser) {
        browser
            .moveToElement('//tr[1]/th[12]', 1298, 597)
            .click('//tr[1]/th[12]')
            .waitForElementVisible('//tr[1]/td[12]/span/ul/li/span[text()="               Delegate             "]', 10000)
            .assert.elementPresent('//tr[1]/td[12]/span/ul/li/span[text()="               Delegate             "]')
            .assert.elementPresent('//tr[2]/td[12]/span/ul/li/span[text()="               Delegate             "]')
            .assert.elementPresent('//tr[3]/td[12]/span/ul/li/span[text()="               Delegate             "]')

    },

});