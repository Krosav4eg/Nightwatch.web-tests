var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': false,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/215/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },
    'creation container': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 10000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'test1')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'click on (edit button) ': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('i.fa.fa-pencil.edit-container', 2000)
            .click('i.fa.fa-pencil.edit-container')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form');
    },

    'click NO button on form': function (browser) {
        browser
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);
    },

    'no change was made assertion': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "test1")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'delete container': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.fa.fa-trash-o.delete-container',10000)
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 10000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "test2")]');

    },
});
