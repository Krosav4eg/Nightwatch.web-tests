var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/230/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'creation new container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'click on add element button': function (browser) {
        browser
            .clickBySelectorCss('.btn.btn-info.btn-block');
    },

    'element form window is displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Element form")]')
            .verify.elementPresent('//label[contains(text(),"Agenda Element Entry Type")]');
    },

    'choose element requiring table setting': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
            .clickBySelectorXpath('//option[contains(text(),"Element requiring table setting")]');
    },

    'assertion agenda element type drop down list': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('select#agendaElementTypeId', 4000)

            .verify.containsText('option[value="23"]', 'Hosted table placeholder')
            .verify.containsText('option[value="34"]', 'Dinner placeholder')
            .verify.containsText('option[value="33"]', 'Group Discussion Placeholder')
            .verify.containsText('option[value="32"]', 'Lunch Placeholder');
    },

    'lunch placeholder page assertion': function (browser) {
        browser
            .agendaElementPageAssertion();
    },

    'creating Lunch placeholder panel': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')

            .verify.containsText('option[value="32"]', 'Lunch Placeholder')
            .clickBySelectorCss('option[value="32"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER])

            .clickBySelectorCss('input#room')

            .clickBySelectorCss('option[value="32"]')
            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation Dinner-placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Lunch Placeholder")]')

            .verify.elementPresent('//button[contains(text(), "Add room")]');
    },

    'check element required table settings color': function (browser) {
        browser
            .verify.elementPresent('//div[@class="panel-heading greenBlockColorForEvent"]')
            .verify.cssProperty('//div[@class="panel-heading greenBlockColorForEvent"]', 'background-color', 'rgba(0, 135, 129, 1)');
    },

    'delete lunch panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .verify.elementPresent('//modal-content[contains(text(),"Do you really want to delete element Lunch Placeholder?")]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },

    'lunch panel has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementNotPresent('//h5[contains(text(),"Lunch Placeholder")]')
            .verify.elementNotPresent('//button[contains(text(), "Add room")]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
