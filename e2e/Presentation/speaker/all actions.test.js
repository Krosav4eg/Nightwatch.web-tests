var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2008)"]', 3000)
            .verify.elementPresent('//h3[text()="NeedSeeker 18.5.2016"]')
            .verify.elementPresent('//div[text()="Local name: NeedSeeker 18.5.2016"]')
            .verify.elementPresent('//div[text()="Dates: 2016-05-18 08:00:00 - 2016-05-18 13:00:00"]')
            .verify.elementPresent('//div[text()="Venue: Tapahtumakeskus Telakka, Helsinki"]');
    },
    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/5721"]')
            .useXpath()
            .verify.elementPresent('//h1[text()="Edit Presentation (#5721)"]');

    },

    'press add new button': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"Add speaker")]')
            .verify.elementPresent('//h4[text()="Attach Master Contact"]')
            .clickBySelectorXpath('//button[contains(text(),"Add new")]')

            .verify.elementPresent('//h4[text()="Add new guest speaker"]')
            .verify.elementPresent('//input[@id="lastName"]')
            .verify.elementPresent('//input[@id="firstName"]')
            .verify.elementPresent('//input[@id="academicTitle"]')
            .verify.elementPresent('//input[@id="functionTitle"]')
            .verify.elementPresent('//input[@id="masterCompanyId"]')
            .verify.elementPresent('//input[@id="country"]')
            .verify.elementPresent('//input[@id="mobile"]')
            .verify.elementPresent('//input[@id="email"]')
            .verify.elementPresent('(//button[text()="Save"])[2]');
    },

});