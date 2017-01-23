var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/222/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'Check that field is required = blank click another field ': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .click('#containerStartHour')
            .pause(1000)
            .click('input#subHeading')
            .pause(1000);
    },

    'blank click Save': function (browser) {
        browser
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .assert.elementPresent('//p[text()=" Start Hour is required.           "]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);

    },

    'can not create time before event': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', ['7:00', browser.Keys.ENTER])
            .useXpath()
            .waitForElementVisible('//p[text()=" Date should be between 08:00 and 18:00           "]',30000)
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000);
    },

    'creation container': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest7 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '8:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .pause(3000);
    },
    'check start time after creation container': function (browser) {
        browser
            .useXpath()
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00');
    },

    'delete container': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 30000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .pause(1500)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest7")]');

    },
});
