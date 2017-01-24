var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');
var auth = require('./../presteps/auth.js');

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
            .verify.elementPresent('//h3[text()="NeedSeeker 18.5.2016"]')
            .verify.elementPresent('//div[text()="Local name: NeedSeeker 18.5.2016"]')
            .verify.elementPresent('//div[text()="Dates: 2016-05-18 08:00:00 - 2016-05-18 13:00:00"]')
            .verify.elementPresent('//div[text()="Venue: Tapahtumakeskus Telakka, Helsinki"]');
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/3732"]')
            .useXpath()
            .waitForElementVisible('//h1[text()="Edit Presentation (#3732)"]', 3000);
    },

    'add new guest speaker page verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)
            .clickBySelectorXpath('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)
            .clickBySelectorXpath('//button[contains(text(),"Add new")]')
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

    'last name alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="lastName"]')
            .clickBySelectorXpath('//input[@id="firstName"]')
            .waitForElementVisible('//p[contains(text(),"Last Name is required")]', 5000);
    },

    'first name alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="firstName"]')
            .clickBySelectorXpath('//input[@id="academicTitle"]')
            .waitForElementVisible('//p[contains(text(),"First Name is required")]', 5000);
    },

    'academic title no alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="academicTitle"]')
            .clickBySelectorXpath('//input[@id="functionTitle"]')
            .verify.elementNotPresent('//p[contains(text(),"Academic Title is required")]');
    },

    'functional title no alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="functionTitle"]')
            .clickBySelectorXpath('//input[@id="masterCompanyId"]')
            .verify.elementNotPresent('//p[contains(text(),"Functional Title is required")]');
    },

    'company no alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="masterCompanyId"]')
            .clickBySelectorXpath('//input[@id="country"]')
            .verify.elementNotPresent('//p[contains(text(),"Company is required")]');
    },

    'country alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="country"]')
            .clickBySelectorXpath('//input[@id="mobile"]')
            .waitForElementVisible('//p[contains(text(),"Country is required")]', 5000);
    },

    'mobile alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="mobile"]')
            .clickBySelectorXpath('//input[@id="email"]')
            .waitForElementVisible('//p[contains(text(),"Mobile is not valid")]', 5000);
    },

    'email alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="email"]')
            .clickBySelectorXpath('//input[@id="mobile"]')
            .waitForElementVisible('//p[contains(text(),"Email is required")]', 5000);
    },

    'blank click all alerts verifyion': function (browser) {
        browser
            .refresh()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .clickBySelectorXpath('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)
            .clickBySelectorXpath('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)
            .clickBySelectorXpath('//button[contains(text(),"Add new")]')
            .waitForElementVisible('//h4[text()="Add new guest speaker"]', 5000)
            .waitForElementVisible('//input[@id="lastName"]', 3000)
            .waitForElementVisible('//input[@id="firstName"]', 3000)
            .waitForElementVisible('//input[@id="academicTitle"]', 3000)
            .waitForElementVisible('//input[@id="functionTitle"]', 3000)
            .waitForElementVisible('//input[@id="masterCompanyId"]', 3000)
            .waitForElementVisible('//input[@id="country"]', 3000)
            .waitForElementVisible('//input[@id="mobile"]', 3000)
            .waitForElementVisible('//input[@id="email"]', 3000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][text()="Save"]', 3000)
            .click('//modal[@class="modal fade in"]//button[1][text()="Save"]')
            .waitForElementVisible('//p[contains(text(),"Last Name is required")]', 5000)
            .waitForElementVisible('//p[contains(text(),"First Name is required")]', 5000)
            .verify.elementNotPresent('//p[contains(text(),"Academic Title is required")]')
            .verify.elementNotPresent('//p[contains(text(),"Functional Title is required")]')
            .verify.elementNotPresent('//p[contains(text(),"Company is required")]')
            .waitForElementVisible('//p[contains(text(),"Country is required")]', 5000)
            .waitForElementVisible('//p[contains(text(),"Mobile is not valid")]', 5000)
            .waitForElementVisible('//p[contains(text(),"Email is required")]', 5000)
    },
});