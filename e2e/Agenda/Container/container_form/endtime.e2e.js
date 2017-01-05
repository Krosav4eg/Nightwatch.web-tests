var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/220/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },

    'Check that field is required = blank click another field': function (browser) {
        browser
            .waitForElementVisible('button.btn.btn-primary.btn-block', 3000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .click('#containerEndHour')
            .pause(1000)
            .click('input#subHeading')
            .pause(1000);
    },

    'blank click Save': function (browser) {
        browser
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .assert.elementPresent('//p[text()=" End Hour is required.           "]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);
    },

    'check end time after event': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', ['00:00', browser.Keys.ENTER])
            .useXpath()
            .waitForElementVisible('//p[text()=" Date should be between 08:00 and 18:00           "]',10000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 10000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);
    },

    'check end time after creation container': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest5')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .waitForElementVisible('//b[2][contains(text(),"10:00")]',5000)
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'Check that only container was create ': function (browser) {
        browser
            .assert.elementPresent('//b[contains(text(), "autotest5")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'that information message appears': function (browser) {
        browser
            .assert.elementPresent('//div[text()=" You don`t have any elements into container                 "]');

    },

    'delete container': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.fa.fa-trash-o.delete-container', 5000)
            .click('.fa.fa-trash-o.delete-container')
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 3000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest5")]');

    },

    'container without time 8:00-8:00': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 3000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest5 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '8:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "autotest5")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"8:00")]', '8:00');
    },

    'remove container': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.fa.fa-trash-o.delete-container', 5000)
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 10000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest5")]');

    },
});
