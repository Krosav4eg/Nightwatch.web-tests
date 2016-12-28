var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
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
    'go to the edit presentation': function (browser) {
        browser
            .waitForElementVisible('//a[@href="/presentations/edit/3696"]', 3000)
            .click('//a[@href="/presentations/edit/3696"]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);

    },
    'add button verify': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//input[@type="file"]', 3000)
            .setValue('//input[@type="file"]', 'C:/Users/Avic/Desktop/Agenda-Elements.docx')
            .useXpath()
            .waitForElementVisible('//button[text()="Upload file"]', 3000)
            .click('//button[text()="Upload file"]')
            .useXpath()
            .waitForElementVisible('//li[text()="     Agenda-Elements.docx (999.99 kB)   "]', 8000)
            .waitForElementVisible('//p[@class="btn material-delete btn-primary"]', 8000)
            .click('//p[@class="btn material-delete btn-primary"]')
            .acceptAlert()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.elementNotPresent('//li[text()="     Agenda-Elements.docx (999.99 kB)   "]')

            .setValue('//input[@type="file"]', 'C:/Users/Avic/Desktop/Event-Agenda.docx')
            .useXpath()
            .waitForElementVisible('//button[text()="Upload file"]', 3000)
            .click('//button[text()="Upload file"]')
            .useXpath()
            .waitForElementVisible('//li[text()="     Event-Agenda.docx (351.29 kB)   "]', 8000)
            .waitForElementVisible('//p[@class="btn material-delete btn-primary"]', 8000)
            .click('//p[@class="btn material-delete btn-primary"]')
            .acceptAlert()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.elementNotPresent('//li[text()="     Event-Agenda.docx (351.29 kB)   "]')


    },
});