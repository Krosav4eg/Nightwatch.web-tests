var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },

    'creation container': function (browser) {
        browser
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'new_event2016 ')
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
            .pause(1000);
    },

    'check information in agenda page': function (browser) {
        browser
            .useXpath()
            .assert.containsText('//b[contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[contains(text(),"10:00")]', '10:00')
            .assert.elementPresent('//b[contains(text(), "new_event2016")]');
    },

    'click edit button': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('i.fa.fa-pencil.edit-container', 3000)
            .click('i.fa.fa-pencil.edit-container')
            .pause(1000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form');
    },

    'blank.click another field': function (browser) {
        browser
            .useCss()
            .click('input#heading')
            .clearValue('input#heading')
            .click('input#subHeading');


    },

    'blank click Save': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//form/div[2]/div/div/button[contains(text(),"Save")]', 3000)
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);

    },

    'click NO button': function (browser) {
        browser
            .pause(3000)
            .click('i.fa.fa-pencil.edit-container')
            .refresh()
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(3000)
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "new_event2016")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00')
            .pause(3000);
    },

    'delete container': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .waitForElementVisible('div.modal-footer>button.btn.btn-success', 1000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]');

    },
});
