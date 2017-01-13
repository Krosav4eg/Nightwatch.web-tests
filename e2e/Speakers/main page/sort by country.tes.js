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
    'sort by country up': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[8]', 3000)
            .click('//tr[1]/th[8]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[8]/span[text()="         Belarus       "]', 7000)
            .waitForElementVisible('//tr[2]/td[8]/span[text()="         Germany       "]', 7000)
            .waitForElementVisible('//tr[3]/td[8]/span[text()="         Germany       "]', 7000)
            .waitForElementVisible('//tr[4]/td[8]/span[text()="         Germany       "]', 7000);


    },
    'sort by country down': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[8]', 3000)
            .click('//tr[1]/th[8]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[8]/span[text()="         Ukraine       "]', 7000)
            .waitForElementVisible('//tr[2]/td[8]/span[text()="         Norway       "]', 7000)
            .waitForElementVisible('//tr[3]/td[8]/span[text()="         Norway       "]', 7000)
            .waitForElementVisible('//tr[4]/td[8]/span[text()="         Norway       "]', 7000);

    },


});