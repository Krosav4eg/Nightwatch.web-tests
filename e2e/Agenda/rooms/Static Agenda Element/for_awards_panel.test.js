var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/209/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation new container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'choose static agenda element': function (browser) {
        browser
            .addElementButtonForAgenda();
    },

    'creating awards panel': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="35"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER])

            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorCss('input#room')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation awards panel': function (browser) {
        browser
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Awards Panel")]')
            .verify.elementPresent('//button[contains(text(), "Add room")]');
    },

    'click add room': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(), "Add room")]');
    },

    'add room for Awards Panel is displayed': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Add room for Awards Panel 15-03-2012 08:55:00 - 09:25:00")]')
            .verify.elementPresent('//label[contains(text(),"Room")]')

            .useCss()
            .verify.elementPresent('input.form-control[title=Room]');
    },

    'input room field is empty': function (browser) {
        browser
            .useCss()
            .verify.valueContains("input.form-control[title=Room]", "")
            .setValueByCss('input.form-control[title=Room]', 'MyRoom')

            .clickBySelectorXpath('//button[@data-marker="me-event-agenda__button__save-room"]');
    },

    'set room is displaying': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"MyRoom")]');
    },

    'add room is displayed again': function (browser) {
        browser
            .waitForElementVisible('//h4[contains(text(),"Add room for Awards Panel 15-03-2012 08:55:00 - 09:25:00")]', 3000)

            .waitForElementVisible('//button[contains(text(),"MyRoom")]', 2000)
            .useCss()
            .verify.valueContains("input.form-control[title=Room]", "MyRoom")

            .clickBySelectorCss('button[data-dismiss="modalRoom"]');
    },

    'click on edit awards panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]');
    },

    'assertion for room field contains name My Room': function (browser) {
        browser
            .useCss()
            .waitForElementVisible('input#room', 2000)
            .verify.valueContains("input#room", "MyRoom")
            .refresh()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);

    },

    'delete award panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },

    'awards panel has been deleted': function (browser) {
        browser
            .verify.elementNotPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementNotPresent('//h5[contains(text(),"Awards Panel")]')
            .verify.elementNotPresent('//button[contains(text(), "Add room")]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
