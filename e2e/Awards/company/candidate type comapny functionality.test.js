var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/216/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'check awards page info': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h3[text()="IndustryForum Healthcare"]')
            .verify.elementPresent('//h4[text()="Awards"]')

            .verify.elementPresent('//label[text()="Award title local"]')
            .verify.elementPresent('//label[text()="Award title English"]')
            .verify.elementPresent('//label[text()="Candidate type"]')

            .verify.elementPresent('//input[@id=1]')
            .verify.elementPresent('//input[@id=2]')
            .verify.elementPresent('//input[@id=3]')

            .verify.elementPresent('//label[text()="Status"]')

            .verify.elementPresent('//div[text()="Modified: "]')
            .verify.elementPresent('//div[text()="Modified by: "]')

            .verify.elementPresent('//button[@type="submit"]')

            .verify.elementPresent('//h4[text()="Candidates"]');

    },
    'verify status switcher': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="0"]', 7000)
            .verify.cssProperty('//label[@btnradio="0"]', 'background-color', 'rgba(231, 60, 60, 1)');

    },
    'select on in status switcher': function (browser) {
        browser
            .waitForElementVisible('//label[@btnradio="1"]', 7000)
            .clickBySelectorXpath('//label[@btnradio="1"]')
            .verify.cssProperty('//label[@btnradio="1"]', 'background-color', 'rgba(41, 115, 207, 1)');
    },


    'set values into the input fields': function (browser) {
        browser
            .setValueByXpath('//div[1]/div/input[1][@type="text"]','The best of the best')
            .setValueByXpath('//div[2]/div/input[1][@type="text"]','The best of the best 2')
    },
    'select company radio button ': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id=2]')
            .clickBySelectorXpath('//button[@type="submit"]')
            .waitForElementVisible('//div[text()="Award saved successfully"]', 30000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]')
            .waitForElementVisible('//button[text()="Add a new candidate"]', 30000);
    },
    'to return everything to its original position ': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id=1]')
            .clickBySelectorXpath('//label[@btnradio="0"]')
            .clickBySelectorXpath('//button[@type="submit"]')
            .waitForElementVisible('//h3[text()="IndustryForum Healthcare"]', 7000)
            .checkModifiedInSelectorXpath('//*[contains(text(),"Awards")]/../..//div[contains(text(),"Modified:")]/../div[2]');

    },


});
