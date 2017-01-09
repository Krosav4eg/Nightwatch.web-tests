var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2008)"]', 3000)
            .assert.elementPresent('//h3[text()="NeedSeeker 18.5.2016"]')
            .assert.elementPresent('//div[text()="Local name: NeedSeeker 18.5.2016"]')
            .assert.elementPresent('//div[text()="Dates: 2016-05-18 08:00:00 - 2016-05-18 13:00:00"]')
            .assert.elementPresent('//div[text()="Venue: Tapahtumakeskus Telakka, Helsinki"]');
    },
    'go to the edit presentation': function (browser) {
        browser
            .waitForElementVisible('//a[@href="/presentations/edit/3732"]', 3000)
            .click('//a[@href="/presentations/edit/3732"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h1[text()="Edit Presentation (#3732)"]', 3000);

    },

    'press select button': function (browser) {
        browser
            .waitForElementVisible('//button[text()="Add speaker"]', 5000)
            .click('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)
            .useCss()
            .waitForElementVisible('.fa.fa-external-link', 5000)
            .click('.fa.fa-external-link')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//tr[4]', 5000)
            .waitForElementVisible('//tr[4]/td[10]/span/button[@class="btn btn-danger"]', 5000)
            .click('//tr[4]/td[10]/span/button[@class="btn btn-danger"]')
            .waitForElementVisible('//h4[text()="Confirmation"]', 7000)
            .waitForElementVisible('//button[@data-marker="me-confirm__button__button__yes"]', 7000)
            .click('//button[@data-marker="me-confirm__button__button__yes"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementNotVisible('//tr[4]', 5000);
    },
    'press add new button': function (browser) {
        browser
            .waitForElementVisible('//button[text()="Add speaker"]', 5000)
            .click('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)
            .waitForElementVisible('//button[text()="           Add new         "]', 5000)
            .click('//button[text()="           Add new         "]')
            .waitForElementVisible('//h4[text()="Add new guest speaker"]', 5000)
            .waitForElementVisible('//input[@id="lastName"]', 3000)
            .waitForElementVisible('//input[@id="firstName"]', 3000)
            .waitForElementVisible('//input[@id="academicTitle"]', 3000)
            .waitForElementVisible('//input[@id="functionTitle"]', 3000)
            .waitForElementVisible('//input[@id="masterCompanyId"]', 3000)
            .waitForElementVisible('//input[@id="country"]', 3000)
            .waitForElementVisible('//input[@id="mobile"]', 3000)
            .waitForElementVisible('//input[@id="email"]', 3000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][text()="Save"]', 3000);

    },

});