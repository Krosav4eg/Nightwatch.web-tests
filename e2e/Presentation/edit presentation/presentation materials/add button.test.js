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
            .verify.elementPresent('//h3[text()="IndustryForum Energy"]')
            .verify.elementPresent('//div[text()="Local name: StrategyCircle Energie"]')
            .verify.elementPresent('//div[text()="Dates: 2012-05-09 08:00:00 - 2012-05-10 18:00:00"]')
            .verify.elementPresent('//div[text()="Venue: , "]');
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/3696"]')
    },

    'add button verify': function (browser) {
        browser
            .setValueBySelectorXpath('//input[@type="file"]', 'C:/Users/Avic/Desktop/Agenda-Elements.docx')
            .clickBySelectorXpath('//button[text()="Upload file"]')
            .useXpath()
            .waitForElementVisible('//li[contains(text(),"Agenda-Elements.docx (999.99 kB)")]', 8000)
            .waitForElementVisible('//p[@class="btn material-delete btn-primary"]', 8000)
            .click('//p[@class="btn material-delete btn-primary"]')
            .acceptAlert()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//li[contains(text(),"Agenda-Elements.docx (999.99 kB)")]')

            .setValueBySelectorXpath('//input[@type="file"]', 'C:/Users/Avic/Desktop/Event-Agenda.docx')
            .clickBySelectorXpath('//button[text()="Upload file"]')
            .useXpath()
            .waitForElementVisible('//li[contains(text(),"Event-Agenda.docx (351.29 kB)")]', 8000)
            .waitForElementVisible('//p[@class="btn material-delete btn-primary"]', 8000)
            .click('//p[@class="btn material-delete btn-primary"]')
            .acceptAlert()
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//li[contains(text(),"Event-Agenda.docx (351.29 kB)")]')
    },
});