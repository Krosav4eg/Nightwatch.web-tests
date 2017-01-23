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
    'sort by organizer up': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[9]', 3000)
            .click('//tr[1]/th[9]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li/span[text()="               Management Events             "]', 7000)
            .waitForElementVisible('//tr[2]/td[9]/span/ul/li/span[text()="               Management Events             "]', 7000)
            .waitForElementVisible('//tr[3]/td[9]/span/ul/li/span[text()="               Management Events             "]', 7000)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li/span[text()="               Management Events             "]', 7000);


    },
    'sort by organizer down': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[9]', 3000)
            .click('//tr[1]/th[9]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[9]/span/ul/li/a[@href="http://alpha.ew.managementevents.com/EW/MasterCompany/cruII/id/62904"]', 7000)
            .waitForElementVisible('//tr[2]/td[9]/span/ul/li/span[text()="               Management Events             "]', 7000)
            .waitForElementVisible('//tr[3]/td[9]/span/ul/li/span[text()="               Management Events             "]', 7000)
            .waitForElementVisible('//tr[4]/td[9]/span/ul/li/span[text()="               Management Events             "]', 7000);

    },


});