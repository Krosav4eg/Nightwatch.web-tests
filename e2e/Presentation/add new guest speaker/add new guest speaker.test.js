var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[text()="Event (#2008)"]')
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

    'add new guest speaker page verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Add speaker"]')
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
            .verify.elementPresent('(//button[1][text()="Save"])[2]');
    },

    'last name alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="lastName"]')
            .clickBySelectorXpath('//input[@id="firstName"]')
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Last Name")]/..' ,"Last Name is required");
    },

    'first name alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="firstName"]')
            .clickBySelectorXpath('//input[@id="academicTitle"]')
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "First Name")]/..' ,"First Name is required");
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
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Country")]/..' ,"Country");
    },

    'mobile alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="mobile"]')
            .clickBySelectorXpath('//input[@id="email"]')
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Mobile")]/..' ,"Mobile is not valid");
    },

    'email alert message verifyion': function (browser) {
        browser
            .clickBySelectorXpath('//input[@id="email"]')
            .clickBySelectorXpath('//input[@id="mobile"]')
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Email")]/..' ,"Email is required");
    },

    'blank click all alerts verifyion': function (browser) {
        browser
            .refresh()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .clickBySelectorXpath('//button[text()="Add speaker"]')
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

            .clickBySelectorXpath('(//button[1][text()="Save"])[2]')
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Last Name")]/..' ,"Last Name is required")
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "First Name")]/..' ,"First Name is required")

            .verify.elementNotPresent('//p[contains(text(),"Academic Title is required")]')
            .verify.elementNotPresent('//p[contains(text(),"Functional Title is required")]')
            .verify.elementNotPresent('//p[contains(text(),"Company is required")]')

            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Country")]/..' ,"Country is required")
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Mobile")]/..' ,"Mobile is not valid")
            .verify.containsText('//*[contains(text(), "Add new guest speaker")]/../..//*[contains(text(), "Email")]/..' ,"Email is required");
    },
});