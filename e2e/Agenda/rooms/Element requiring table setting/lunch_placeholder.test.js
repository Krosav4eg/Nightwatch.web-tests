var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/238/agenda')
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

            .clickBySelectorCss('input#room')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation Dinner-placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Lunch Placeholder")]');
    },

    'click add room': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(), "Add room")]');
    },

    'add room for Awards Panel is displayed': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Add room for Lunch Placeholder 17-10-2013 08:55:00 - 09:25:00")]')
            .verify.elementPresent('//label[contains(text(),"Room")]')

            .useCss()
            .verify.elementPresent('input.form-control[title=Room]');
    },

    'room input field is empty': function (browser) {
        browser
            .useCss()
            .verify.valueContains("input.form-control[title=Room]", "")
            .setValueByCss('input.form-control[title=Room]', 'MyRoom')

            .clickBySelectorXpath('//button[@data-marker="me-event-agenda__button__save-room"]');
    },

    'created room is displaying': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"MyRoom")]');
    },

    'add room is displayed again': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Add room for Lunch Placeholder 17-10-2013 08:55:00 - 09:25:00")]')

            .verify.elementPresent('//button[contains(text(),"MyRoom")]')
            .useCss()
            .verify.valueContains("input.form-control[title=Room]", "MyRoom")

            .clickBySelectorCss('button[data-dismiss="modalRoom"]');
    },

    'click on edit lunch panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]');
    },

    'verifying for room field contains name My Room': function (browser) {
        browser
            .useCss()
            .verify.valueContains("input#room", "MyRoom")

            .refresh()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'delete lunch panel': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },

    'presentation-leaderShip has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementNotPresent('//h5[contains(text(),"Lunch Placeholder")]')
            .verify.elementNotPresent('//button[contains(text(), "MyRoom")]');
    },

    'delete container': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-trash-o delete-container"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')
            .verify.elementNotPresent('//b[contains(text(), "test1")]');
    },
});

