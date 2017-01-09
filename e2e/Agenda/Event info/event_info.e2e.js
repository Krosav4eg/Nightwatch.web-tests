var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/210/agenda')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000);
    },

    'check event name': function (browser) {
        browser.useXpath()
            .waitForElementVisible('//h3[contains(text(),"IndustryForum Automotive")]', 3000)
            .assert.containsText('//h3[contains(text(),"IndustryForum Automotive")]', 'IndustryForum Automotive');
    },

    'check event Local name': function (browser) {
        browser
            .waitForElementVisible('//div[contains(text(),"Local name: StrategyCircle Automobilindustrie")]', 3000)
            .assert.containsText('//div[contains(text(),"Local name: StrategyCircle Automobilindustrie")]', 'Local name: StrategyCircle Automobilindustrie');
    },

    'check event date': function (browser) {
        browser
            .waitForElementVisible('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 1000)
            .assert.containsText('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 'Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00');
    },

    'check event ID': function (browser) {
        browser
            .waitForElementVisible('//h4[contains(text()," (#210)")]', 1000)
            .assert.containsText('//h4[contains(text()," (#210)")]', '(#210)');
    },

    'two day event (data and time check)': function (browser) {
        browser
            .waitForElementVisible('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 1000)
            .assert.containsText('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 'Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00');
    },

    'two day event (day tabs)': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('a.btn.btn-default.day.active', 1000)
            .assert.containsText('a.btn.btn-default.day.active', '2012-11-27')
            .useXpath()
            .waitForElementVisible('//a[@class="btn btn-default day"]', 1000)
            .assert.containsText('//a[@class="btn btn-default day"]', '2012-11-28');
    },

    'can not create time before event': function (browser) {
        browser
            .useCss()
            .click('a.btn.btn-default.day.active')
            .waitForElementVisible('button.btn.btn-primary.btn-block', 1000)
            .click('button.btn.btn-primary.btn-block')
            .pause(2000)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', ['7:00', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 08:00 and 23:59           "]');
    },

    'creation container with correct time and data 1-st day event': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'new_event2016 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .clearValue('#containerStartHour input')
            .pause(1000)
            .setValue('#containerStartHour input', ['8:00', browser.Keys.ENTER])
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', '10:00')
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .pause(3000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000);
    },

    '1-st day container has been created': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "new_event2016")]')
            .assert.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .assert.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'delete 1-st container': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('.fa.fa-trash-o.delete-container', 2000)
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]')
            .assert.elementNotPresent('//b[1][contains(text(),"8:00")]')
            .assert.elementNotPresent('//b[2][contains(text(),"10:00")]')
    },

    'can not create time after event': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//a[@class="btn btn-default day"]', 3000)
            .click('//a[@class="btn btn-default day"]')
            .useCss()
            .waitForElementVisible('button.btn.btn-primary.btn-block', 3000)
            .click('button.btn.btn-primary.btn-block')
            .pause(1500)
            .useXpath()
            .assert.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .useCss()
            .waitForElementVisible('#containerEndHour input', 1000)
            .setValue('#containerEndHour input', ['18:01', browser.Keys.ENTER])
            .useXpath()
            .assert.elementPresent('//p[text()=" Date should be between 00:00 and 18:00           "]');
    },

    'creation container with correct time and data 2-nd day event': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('input#heading', 1000)
            .setValue('input#heading', 'new_event2016 ')
            .waitForElementVisible('input#subHeading', 1000)
            .setValue('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValue('#containerStartHour input', '10:00')
            .waitForElementVisible('#containerEndHour input', 1000)
            .clearValue('#containerEndHour input')
            .pause(1000)
            .setValue('#containerEndHour input', ['17:59', browser.Keys.ENTER])
            .useXpath()
            .click('//form/div[2]/div/div/button[contains(text(),"Save")]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000);
    },

    '2-st day container has been created': function (browser) {
        browser
            .useXpath()
            .assert.elementPresent('//b[contains(text(), "new_event2016")]')
            .assert.elementPresent('//b[1][contains(text(),"10:00")]')
            .assert.elementPresent('//b[2][contains(text(),"17:59")]');
    },

    'delete container': function (browser) {
        browser
            .useCss()
            .click('.fa.fa-trash-o.delete-container')
            .pause(1000)
            .click('div.modal-footer>button.btn.btn-success')
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000)
            .useXpath()
            .assert.elementNotPresent('//b[contains(text(), "new_event2016")]')
            .assert.elementNotPresent('//b[1][contains(text(),"10:00")]')
            .assert.elementNotPresent('//b[2][contains(text(),"17:59")]');
    },

    'redirection to one day event': function (browser) {
        browser
            .relUrl('/event/210/presentations')
            .useCss()
            .pause(1000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .pause(1000);
    },

    'one day event (data and time check)': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 1000)
            .assert.containsText('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 'Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00');
    },

    'check the tabs are not displaying in one day event': function (browser) {
        browser
            .assert.elementNotPresent('a.btn.btn-default.day.active')
            .useXpath()
            .assert.elementNotPresent('//a[@class="btn btn-default day"]');
    },

});
