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
            .waitForElementNotVisible('#thisIsMainLoader', 30000);

    },
    'check edit page information': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Edit Presentation (#3732)"]', 3000)
            .waitForElementVisible('//label[text()="Organizer "]', 3000)
            .waitForElementVisible('//span[text()="             Management Events           "]', 3000)
            .waitForElementVisible('//label[text()="Presentation Type "]', 3000)
            .waitForElementVisible('//span[text()="Debate"]', 3000)
            .waitForElementVisible('//label[text()="Heading "]', 3000)
            .waitForElementVisible('//input[@placeholder="Heading"]', 3000)
            //should be correct locators for input fields!!!!!!!!!!!!!!!!!!!
            .waitForElementVisible('//label[text()="Sub heading 1 "]', 3000)
            .waitForElementVisible('//label[text()="Sub heading 2 "]', 3000)
            .waitForElementVisible('//label[text()="Sub heading 3 "]', 3000)
            .waitForElementVisible('//label[text()="Notes "]', 3000)
            .waitForElementVisible('//label[text()="Created "]', 3000)
            .waitForElementVisible('//span[text()="2016-10-26 10:12:34"]', 3000)
            .waitForElementVisible('//label[text()="Created By "]', 3000)
            .waitForElementVisible('//span[text()="             Test User, Xsolve           "]', 3000)
            .waitForElementVisible('//label[text()="Modified "]', 3000)
            .waitForElementVisible('//label[text()="Modified By "]', 3000)
            .waitForElementVisible('//span[text()="             Test User, Xsolve           "]', 3000)
            .waitForElementVisible('//button[text()="Cancel"]', 3000)
            .waitForElementVisible('//button[text()="Save"]', 3000);

    },
    'page count': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//option[1][@value="20"]', 5000)
            .click('//option[1][@value="20"]')
            .waitForElementVisible('//span[text()="1 of 1"]', 5000)
            .waitForElementVisible('//option[2][@value="50"]', 5000)
            .click('//option[2][@value="50"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//span[text()="1 of 1"]', 5000)
            .waitForElementVisible('//option[3][@value="100"]', 5000)
            .click('//option[3][@value="100"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .waitForElementVisible('//span[text()="1 of 1"]', 5000);
    },

});