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
    'sort by email up': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[6]', 3000)
            .click('//tr[1]/th[6]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[6]/span[text()="         alexander.fenzl@bayernwerk.de       "]', 7000)
            .waitForElementVisible('//tr[2]/td[6]/span[text()="         andreadis@ferngas.de       "]', 7000)
            .waitForElementVisible('//tr[3]/td[6]/span[text()="         cathal.kennedy@telenor.no       "]', 7000)
            .waitForElementVisible('//tr[4]/td[6]/span[text()="         go@go.go       "]', 7000);


    },
    'sort by email down': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[6]', 3000)
            .click('//tr[1]/th[6]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[6]/span[text()="         Sergey_Potapof@mail.ru       "]', 7000)
            .waitForElementVisible('//tr[2]/td[6]/span[text()="         sandra.vekve@mfa.no       "]', 7000)
            .waitForElementVisible('//tr[3]/td[6]/span[text()="         p.luebcke@mainova.de       "]', 7000);

    },


});