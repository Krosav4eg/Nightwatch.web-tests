var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');
var auth = require('./../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': false,
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


    'add new guest speaker page assertion': function (browser) {
        browser
            .waitForElementVisible('//button[text()="Add speaker"]', 5000)
            .click('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)
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
    'last name alert message assertion': function (browser) {
        browser
            .click('//input[@id="lastName"]')
            .click('//input[@id="firstName"]')
            .waitForElementVisible('//p[text()="             Last Name is required           "]', 5000);
    },
    'first name alert message assertion': function (browser) {
        browser
            .click('//input[@id="firstName"]')
            .click('//input[@id="academicTitle"]')
            .waitForElementVisible('//p[text()="             First Name is required           "]', 5000);

    },
    'academic title no alert message assertion': function (browser) {
        browser
            .click('//input[@id="academicTitle"]')
            .click('//input[@id="functionTitle"]')
            .assert.elementNotPresent('//p[text()="             Academic Title is required           "]');
    },
    'functional title no alert message assertion': function (browser) {
        browser
            .click('//input[@id="functionTitle"]')
            .click('//input[@id="masterCompanyId"]')
            .assert.elementNotPresent('//p[text()="             Functional Title is required           "]');
    },
    'company no alert message assertion': function (browser) {
        browser
            .click('//input[@id="masterCompanyId"]')
            .click('//input[@id="country"]')
            .assert.elementNotPresent('//p[text()="             Company is required           "]');
    },
    'country alert message assertion': function (browser) {
        browser
            .click('//input[@id="country"]')
            .click('//input[@id="mobile"]')
            .waitForElementVisible('//p[text()="             Country is required           "]', 5000);
    },
    'mobile alert message assertion': function (browser) {
        browser
            .click('//input[@id="mobile"]')
            .click('//input[@id="email"]')
            .waitForElementVisible('//p[text()="             Mobile is not valid           "]', 5000);
    },
    'email alert message assertion': function (browser) {
        browser
            .click('//input[@id="email"]')
            .click('//input[@id="mobile"]')
            .waitForElementVisible('//p[text()="             Email is required           "]', 5000);
    },
    'blank click all alerts assertion': function (browser) {
        browser
            .refresh()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//button[text()="Add speaker"]', 5000)
            .click('//button[text()="Add speaker"]')
            .waitForElementVisible('//h4[text()="Attach Master Contact"]', 5000)
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
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][text()="Save"]', 3000)
            .click('//modal[@class="modal fade in"]//button[1][text()="Save"]')
            .waitForElementVisible('//p[text()="             Last Name is required           "]', 5000)
            .waitForElementVisible('//p[text()="             First Name is required           "]', 5000)
            .assert.elementNotPresent('//p[text()="             Academic Title is required           "]')
            .assert.elementNotPresent('//p[text()="             Functional Title is required           "]')
            .assert.elementNotPresent('//p[text()="             Company is required           "]')
            .waitForElementVisible('//p[text()="             Country is required           "]', 5000)
            .waitForElementVisible('//p[text()="             Mobile is not valid           "]', 5000)
            .waitForElementVisible('//p[text()="             Email is required           "]', 5000)

    },
});