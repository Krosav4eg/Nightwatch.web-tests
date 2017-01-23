var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/224/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'container creation': function (browser) {
        browser
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest9 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "autotest9")]')
            .pause(1000);
    },

    'check alert message': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .useXpath()
            .assert.containsText('//h4[contains(text(), "Confirmation")]', 'Confirmation');

    },

    'click NO button': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('div.modal-footer>button.btn.btn-danger', 1000)
            .click('div.modal-footer>button.btn.btn-danger')
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .pause(1000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "autotest9")]');
    },

    'click OK button': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.fa.fa-trash-o.delete-container',30000)
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 30000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "test2")]');

    },
});
