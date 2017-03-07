var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/210/agenda')
    },

    'check event name': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h3[contains(text(),"IndustryForum Automotive")]', 3000)
            .verify.containsText('//h3[contains(text(),"IndustryForum Automotive")]', 'IndustryForum Automotive');
    },

    'check event Local name': function (browser) {
        browser
            .waitForElementVisible('//div[contains(text(),"Local name: StrategyCircle Automobilindustrie")]', 3000)
            .verify.containsText('//div[contains(text(),"Local name: StrategyCircle Automobilindustrie")]', 'Local name: StrategyCircle Automobilindustrie');
    },

    'check event date': function (browser) {
        browser
            .waitForElementVisible('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 1000)
            .verify.containsText('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 'Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00');
    },

    'check event ID': function (browser) {
        browser
            .waitForElementVisible('//h4[contains(text()," (#210)")]', 1000)
            .verify.containsText('//h4[contains(text()," (#210)")]', '(#210)');
    },

    'two day event (data and time check)': function (browser) {
        browser
            .waitForElementVisible('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 1000)
            .verify.containsText('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]', 'Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00');
    },

    'two day event (day tabs)': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('a.btn.btn-default.day.active', 1000)
            .verify.containsText('a.btn.btn-default.day.active', '2012-11-27')

            .useXpath()
            .waitForElementVisible('//a[@class="btn btn-default day"]', 1000)
            .verify.containsText('//a[@class="btn btn-default day"]', '2012-11-28');
    },

    'can not create time before event': function (browser) {
        browser
            .clickBySelectorCss('a.btn.btn-default.day.active')
            .clickBySelectorCss('button.btn.btn-primary.btn-block')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Container form")]', 'Container form')
            .setValueByCss('#containerStartHour input', ['7:59', browser.Keys.ENTER])
            .useXpath()
            .verify.containsText("//*[contains(text(), 'Start time')]/../..", "Date should be between 08:00 and 23:59");
    },

    'creation container with correct time and data 1-st day event': function (browser) {
        browser
            .setValueByCss('input#heading', 'new_event2016 ')
            .setValueByCss('input#subHeading', 'test')
            .waitForElementVisible('#containerStartHour input', 1000)
            .setValueByCss('#containerStartHour input', ['8:00', browser.Keys.ENTER])
            .setValueByCss('#containerEndHour input', '10:00')
            .clickBySelectorCss('input#heading')

            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]');
    },

    '1-st day container has been created': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//b[contains(text(), "new_event2016")]')
            .verify.containsText('//b[1][contains(text(),"8:00")]', '8:00')
            .verify.containsText('//b[2][contains(text(),"10:00")]', '10:00');
    },

    'delete 1-st container': function (browser) {
        browser
            .clickBySelectorCss('.fa.fa-trash-o.delete-container')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')

            .useXpath()
            .verify.elementNotPresent('//b[contains(text(), "new_event2016")]')
            .verify.elementNotPresent('//b[1][contains(text(),"8:00")]')
            .verify.elementNotPresent('//b[2][contains(text(),"10:00")]');
    },

    'can not create time after event': function (browser) {
        browser
            .clickBySelectorXpath('//a[@class="btn btn-default day"]')
            .clickBySelectorCss('button.btn.btn-primary.btn-block')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Container form")]')

            .setValueByCss('#containerEndHour input', ['18:01', browser.Keys.ENTER])
            .useXpath()
            .verify.containsText('//p[@class="help-block"]', 'Date should be between 00:00 and 18:00');
    },

    'creation container with correct time and data 2-nd day event': function (browser) {
        browser
            .setValueByCss('input#heading', 'new_event2016 ')
            .setValueByCss('input#subHeading', 'test')
            .setValueByCss('#containerStartHour input', '10:00')
            .setValueByCss('#containerEndHour input', ['18:00', browser.Keys.ENTER])

            .useXpath()
            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]');
    },

    '2-st day container has been created': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//b[contains(text(), "new_event2016")]')
            .verify.elementPresent('//b[1][contains(text(),"10:00")]')
            .verify.elementPresent('//b[2][contains(text(),"18:00")]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },

    'redirection to one day event': function (browser) {
        browser
            .relUrl('/event/210/agenda')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
    },

    'one day event (data and time check)': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//div[contains(text(),"Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00")]');
    },

    'check the tabs are not displaying in one day event': function (browser) {
        browser
            .verify.elementNotPresent('a.btn.btn-default.day.active')
            .verify.elementPresent('//a[@class="btn btn-default day"]');
    },

});
