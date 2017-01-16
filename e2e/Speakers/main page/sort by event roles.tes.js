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
    'sort by event roles up': function (browser) {
        browser
            .useXpath()
            .moveToElement('//tr[1]/th[11]', 1298, 597)
            .click('//tr[1]/th[11]')
            .waitForElementVisible('//tr[1]/td[11]/span/ul/li[text()="             Chairman           "]', 10000)
            .assert.elementPresent('//tr[1]/td[11]/span/ul/li[text()="             Chairman           "]')
            .assert.elementPresent('//tr[3]/td[11]/span/ul/li[text()="             Debate speaker           "]')
            .assert.elementPresent('//tr[5]/td[11]/span/ul/li[text()="             Case / expert speaker           "]')
    },

    'sort by event roles down': function (browser) {
        browser
            .moveToElement('//tr[1]/th[11]', 1298, 597)
            .click('//tr[1]/th[11]')
            .waitForElementVisible('//tr[1]/td[11]/span/ul/li[text()="             Debate speaker           "]', 10000)
            .assert.elementPresent('//tr[1]/td[11]/span/ul/li[text()="             Debate speaker           "]')
            .assert.elementPresent('//tr[2]/td[11]/span/ul/li[text()="             Advisory board member           "]')
    },

});