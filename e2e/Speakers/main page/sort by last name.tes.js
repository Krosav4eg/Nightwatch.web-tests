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
    'sort by last name up': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[3]', 3000)
            .click('//tr[1]/th[3]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/95857/eventId/212"]', 7000)
            .waitForElementVisible('//tr[2]/td[3]/span/a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/90400/eventId/212"]', 7000)
            .waitForElementVisible('//tr[3]/td[3]/span/a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/197946/eventId/212"]', 7000)
            .waitForElementVisible('//tr[4]/td[3]/span/a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/30/eventId/212"]', 7000);



    },
    'sort by last name down': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[3]', 3000)
            .click('//tr[1]/th[3]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[3]/span/a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/97828/eventId/212"]', 7000)
            .waitForElementVisible('//tr[2]/td[3]/span/a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/6/eventId/212"]', 7000)
            .waitForElementVisible('//tr[3]/td[3]/span/a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/29/eventId/212"]', 7000)
            .waitForElementVisible('//tr[4]/td[3]/span/a[@href="http://alpha.ew.managementevents.com/EW/MasterContact/cruII/id/492282/eventId/212"]', 7000);


    },


});