var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
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
    'pess on id': function (browser) {
        browser
            .waitForElementVisible('//a[@href="/presentations/edit/3696"]', 30000)
            .click('//a[@href="/presentations/edit/3696"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
    },
    'check edit page information': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Edit Presentation (#3696)"]', 3000)
            .waitForElementVisible('//label[text()="Organizer "]', 3000)
            .waitForElementVisible('//span[text()="             Management Events           "]', 3000)
            .waitForElementVisible('//label[text()="Presentation Type "]', 3000)
            .waitForElementVisible('//span[text()="Panel discussion"]', 3000)
            .waitForElementVisible('//label[text()="Heading "]', 3000)
            .waitForElementVisible('//input[@placeholder="Heading"]', 3000)
            //should be correct locators for input fields!!!!!!!!!!!!!!!!!!!
            .waitForElementVisible('//label[text()="Sub heading 1 "]', 3000)
            .waitForElementVisible('//label[text()="Sub heading 2 "]', 3000)
            .waitForElementVisible('//label[text()="Sub heading 3 "]', 3000)
            .waitForElementVisible('//label[text()="Notes "]', 3000)
            .waitForElementVisible('//label[text()="Created "]', 3000)
            .waitForElementVisible('//span[text()="2016-10-20 11:25:19"]', 3000)
            .waitForElementVisible('//label[text()="Created By "]', 3000)
            .waitForElementVisible('//span[text()="             Test User, Xsolve           "]', 3000)
            .waitForElementVisible('//label[text()="Modified "]', 3000)
            .waitForElementVisible('//span[text()="2016-12-07 15:47:52"]', 3000)
            .waitForElementVisible('//label[text()="Modified By "]', 3000)
            // .waitForElementVisible('//span[text()="             Test User, Xsolve           "]', 3000)
            .waitForElementVisible('//button[text()="Cancel"]', 3000)
            .waitForElementVisible('//button[text()="Save"]', 3000);

    },
    'press on organizer name': function (browser) {
        browser
            .waitForElementVisible('//a[@href="/presentations/edit/3696"]', 30000)
            .click('//a[@href="/presentations/edit/3696"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//h1[text()="Master Contact Edit"]', 3000)
            .waitForElementVisible('//h4[text()="Master Contact(#6)"]', 3000)

    },
    'check information about organizer ': function (browser) {
        browser
            .waitForElementVisible('//input[@id="lastName"]',3000)
            .assert.valueContains('//input[@id="lastName"]','Vekve')
            .waitForElementVisible('//input[@id="firstName"]',3000)
            .assert.valueContains('//input[@id="firstName"]','Sandra')
            .waitForElementVisible('//input[@id="academicTitle"]',3000)
            .assert.valueContains('//input[@id="academicTitle"]','')
            .waitForElementVisible('//input[@id="functionTitle"]',3000)
            .assert.valueContains('//input[@id="functionTitle"]','Senior Adviser Information Security')
            .waitForElementVisible('//input[@id="masterCompanyId"]',3000)
            .assert.valueContains('//input[@id="masterCompanyId"]','')
            .waitForElementVisible('//input[@id="country"]',3000)
            .assert.valueContains('//input[@id="country"]','133')
            .waitForElementVisible('//input[@id="mobile"]',3000)
            .assert.valueContains('//input[@id="mobile"]','324567890546789')
            .waitForElementVisible('//input[@id="email"]',3000)
            .assert.valueContains('//input[@id="email"]','sandra.vekve@mfa.no')


    },
});