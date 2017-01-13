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
    'choose all people in the list': function (browser) {
        browser
            .waitForElementVisible('//thead/tr[1]/th[1]', 3000)
            .click('//thead/tr[1]/th[1]')
            .pause(1000)
            .verify.attributeEquals('//table/tbody/tr[1]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[2]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[3]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[4]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[5]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[6]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[7]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[8]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[9]/td[1]/input', 'checked', 'true')
            .verify.attributeEquals('//table/tbody/tr[10]/td[1]/input', 'checked', 'true');

    },
    'choose one person from the list': function (browser) {
        browser
            .waitForElementVisible('//thead/tr[1]/th[1]', 3000)
            .click('//thead/tr[1]/th[1]')
            .pause(1000)
            .click('//table/tbody/tr[1]/td[1]/input')
            .verify.attributeEquals('//table/tbody/tr[1]/td[1]/input', 'checked', 'true');
    },

});