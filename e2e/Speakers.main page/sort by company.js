var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');
var auth = require('./../presteps/auth.js');

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
    'sort by company up': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[2]', 3000)
            .click('//tr[1]/th[2]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[2]/span[text()="         :em engineering methods AG       "]', 7000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="         Bayernwerk AG       "]', 7000)
            .waitForElementVisible('//tr[3]/td[2]/span[text()="         E.ON Global Commodities SE       "]', 7000)
            .waitForElementVisible('//tr[4]/td[2]/span[text()="         EnergieNetz Mitte GmbH       "]', 7000)
            .waitForElementVisible('//tr[5]/td[2]/span[text()="         EWE AG       "]', 7000)
            .waitForElementVisible('//tr[6]/td[2]/span[text()="         Ferngas Nordbayern GmbH       "]', 7000)
            .waitForElementVisible('//tr[7]/td[2]/span[text()="         Mainova AG       "]', 7000)
            .waitForElementVisible('//tr[8]/td[2]/span[text()="         Norges Statsbaner AS (NSB)       "]', 7000);


    },
    'sort by company down': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[2]', 3000)
            .click('//tr[1]/th[2]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[2]/span[text()="         Telenor ASA       "]', 7000)
            .waitForElementVisible('//tr[2]/td[2]/span[text()="         Telenor ASA       "]', 7000)
            .waitForElementVisible('//tr[3]/td[2]/span[text()="         SpareBank 1 Gruppen AS       "]', 7000)
            .waitForElementVisible('//tr[4]/td[2]/span[text()="         RWE Service GmbH       "]', 7000)
            .waitForElementVisible('//tr[5]/td[2]/span[text()="         RWE GBS GmbH       "]', 7000)
            .waitForElementVisible('//tr[6]/td[2]/span[text()="         Norwegian Ministry of Foreign Affairs       "]', 7000)
            .waitForElementVisible('//tr[7]/td[2]/span[text()="         Norges Statsbaner AS (NSB)       "]', 7000)
            .waitForElementVisible('//tr[8]/td[2]/span[text()="         Mainova AG       "]', 7000);


    },


});