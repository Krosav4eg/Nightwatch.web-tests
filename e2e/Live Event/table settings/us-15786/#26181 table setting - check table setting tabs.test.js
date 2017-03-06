var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2314/agenda')
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation new container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'choose Element requiring table setting': function (browser) {
        browser
            .chooseElementRequiringTableSetting();
    },

    'lunch placeholder page assertion ': function (browser) {
        browser
            .agendaElementPageAssertion();
    },

    'creating Lunch Placeholder panel': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="32"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER])

            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation lunch-placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Lunch placeholder")]');
    },

    'choose Element requiring table setting again': function (browser) {
        browser
            .chooseElementRequiringTableSetting();
    },

    'dinner element page assertion': function (browser) {
        browser
            .agendaElementPageAssertion();
    },

    'creating Dinner Placeholder panel': function (browser) {
        browser

            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="34"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER])

            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorCss('input#room')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation Dinner-placeholder': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:55 - 09:25")]', 7000)
            .waitForElementVisible('//h5[contains(text(),"Dinner placeholder")]', 7000);
    },

    'search for an event in live event - choose event sidebar navigation': function (browser) {
        browser
            .clickBySelectorXpath('//span[contains(text(),"Live event")]')
            .verify.elementPresent('(//span[contains(text(),"Choose event")])[3]');
    },

    'click event Id for any of the returned search results': function (browser) {
        browser
            .clickBySelectorXpath('(//span[contains(text(),"Choose event")])[3]')
            .clickBySelectorXpath('//a[contains(text(),"IndustryForum Healthcare")]')

            .verify.elementPresent('//h4[contains(text(),"Event (#2314)")]')
            .verify.elementPresent('//h3[contains(text(),"IndustryForum Healthcare")]')

            .clickBySelectorXpath('(//span[contains(text(),"IndustryForum Healthcare")])[4]')

            .verify.elementPresent('//span[contains(text(),"Check-in")]')
            .verify.elementPresent('//span[contains(text(),"HelpDesk")]')
            .verify.elementPresent('//span[contains(text(),"Table setting")]')
            .verify.elementPresent('//span[contains(text(),"Table groups check view")]')
            .verify.elementPresent('//span[contains(text(),"Table groups Summary")]')
            .verify.elementPresent('//span[contains(text(),"Meetings check")]')
            .verify.elementPresent('//span[contains(text(),"Meetings summary")]');
    },

    'check table setting link in live event - event sidebar navigation.': function (browser) {
        browser
            .clickBySelectorXpath('//span[contains(text(),"Table setting")]')

            .verify.elementPresent('//abbr[contains(text(),"Delegates in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Delegates not in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Representatives in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Hosted tables:")]');
    },

    'compare number of Lunch tabs in the Table Settings view tab ': function (browser) {
        browser
            .verify.elementPresent('//a[contains(text(),"Lunch  1")]')
            .verify.elementPresent('//a[contains(text(),"Lunch  1")]/br');
    },

    'compare number of Dinner tabs in the Table Settings view tab': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"Dinner  1")]')
            .verify.elementPresent('//a[contains(text(),"Dinner  1")]/br')

            .verify.elementPresent('//abbr[contains(text(),"Delegates in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Delegates not in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Representatives in tables:")]')
            .verify.elementPresent('//abbr[contains(text(),"Hosted tables:")]');
    },

    'redirection to agenda again': function (browser) {
        browser
            .relUrl('/event/2314/agenda')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'delete lunch panel': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },

    'lunch panel has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"Lunch placeholder")]');
    },

    'delete dinner panel': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },

    'dinner panel has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementNotPresent('//h5[contains(text(),"Dinner Placeholder")]')
            .verify.elementNotPresent('//button[contains(text(), "MyRoom")]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },

});

