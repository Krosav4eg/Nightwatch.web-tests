var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/221/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },

    'check save button': function (browser) {
        browser
            .waitForElementVisible('button.btn.btn-primary.btn-block', 5000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'autotest6')
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
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "autotest6")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'delete container': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .waitForElementVisible('modal.modal.fade.in div.modal-footer>button.btn.btn-success', 4000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "autotest6")]');

    },

    'Check that field is required = blank click another field': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 5000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .click('input#heading')
            .pause(1000)
            .click('input#subHeading')
            .useXpath()
            .assert.elementPresent('//p[text()=" Heading is required.           "]')
            .waitForElementVisible('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]', 2000)
            .click('//modal[@class="modal fade in"]//button[1][@class="btn btn-default pull-right"]')
            .pause(2000)

    },

    'blank.click Save': function (browser) {
        browser
            .useCss()
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .pause(1000)
            .assert.elementPresent('//p[text()=" Heading is required.           "]')
            .assert.elementPresent('//modal[@class="modal fade in"]//form/div[2]/div/div/button[contains(text(),"Cancel")]')
            .click('//modal[@class="modal fade in"]//form/div[2]/div/div/button[contains(text(),"Cancel")]')
            .useCss()
            .waitForElementNotVisible('div.modal-content', 4000);

    },

});
