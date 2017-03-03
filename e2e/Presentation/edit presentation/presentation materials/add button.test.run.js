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
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/628"]')
    },

    'add button verify': function (browser) {
        browser
            .setValueByXpath('//input[@type="file"]', __dirname + '/Event-Agenda.docx')
            .pause(2000)
            .clickBySelectorXpath('//*[text()="Upload file"]')
            .useXpath()
            .verify.containsText('//li[@class="list-group-item list-material-item"]', 'Event-Agenda.docx (351.29 kB)')
            .waitForElementVisible('//p[@class="btn material-delete btn-primary"]', 8000)

            .click('//p[@class="btn material-delete btn-primary"]')
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//li[contains(text(),"Event-Agenda.docx (351.29 kB)")]')

            .setValueByXpath('//input[@type="file"]', __dirname + '/Event-Agenda.docx')
            .clickBySelectorXpath('//button[text()="Upload file"]')
            .useXpath()
            .verify.containsText('//li[@class="list-group-item list-material-item"]', 'Event-Agenda.docx (351.29 kB)')
            .waitForElementVisible('//p[@class="btn material-delete btn-primary"]', 8000)

            .click('//p[@class="btn material-delete btn-primary"]')
            .acceptAlert()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.elementNotPresent('//li[contains(text(),"Event-Agenda.docx (351.29 kB)")]')
    },
});