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
    'sort by mobile up': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[7]', 3000)
            .click('//tr[1]/th[7]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[7]/span[text()="         +380937766688       "]', 7000)
            .waitForElementVisible('//tr[2]/td[7]/span[text()="         +47 48 16 06 439898989       "]', 7000)
            .waitForElementVisible('//tr[3]/td[7]/span[text()="         +49 162 2565252       "]', 7000);


    },
    'sort by mobile down': function (browser) {
        browser
            .waitForElementVisible('//tr[1]/th[7]', 3000)
            .click('//tr[1]/th[7]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[1]/td[7]/span[text()="         4915254617454       "]', 7000)
            .waitForElementVisible('//tr[2]/td[7]/span[text()="         4790992788       "]', 7000)
            .waitForElementVisible('//tr[3]/td[7]/span[text()="         4790992788       "]', 7000)
            .waitForElementVisible('//tr[4]/td[7]/span[text()="         324567890546789       "]', 7000)

    },


});