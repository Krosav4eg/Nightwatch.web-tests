var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/228/agenda')
    },

    'creation new container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'redirection to settings page': function (browser) {
        browser
            .relUrl('/event/228/settings')
            .useXpath()
            .waitForElementVisible('//span[contains(text(),"228/IndustryForum Retail - Event settings")]', 5000);
    },

    'inputting checkboxes': function (browser) {
        browser

            .setValueByXpath('//input[@data-marker="me-event-settings-agenda-group-qty__input__text"]', ['6', browser.Keys.ENTER])

            // .verify.elementPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__1"]')
            // .verify.elementPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__2"]')
            // .verify.elementPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__3"]')
            // .verify.elementPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__4"]')
            // .verify.elementPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__5"]')
            // .verify.elementPresent('//input[@data-marker="me-groups-managed-automatically__input__checkbox__6"]')
    },

    'redirection to agenda page again': function (browser) {
        browser
            .relUrl('/event/228/agenda')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
    },

    'click on add element button': function (browser) {
        browser
            .clickBySelectorCss('.btn.btn-info.btn-block');
    },

    'element form window is displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Element form")]')
            .verify.elementPresent('//label[contains(text(),"Agenda Element Type ")]');
    },

    'choose Static agenda element': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
            .clickBySelectorXpath('//option[contains(text(),"Static agenda element")]')
    },

    'static agenda element page assertion': function (browser) {
        browser
            .agendaElementPageAssertion();
    },

    'creating Awards panel': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .verify.containsText('option[value="35"]', 'Awards Panel')
            .clickBySelectorCss('option[value="35"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:59', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:59', browser.Keys.ENTER])

            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__0"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__1"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__2"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__3"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__4"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5"]')

            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorCss('input#room')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation awards panel': function (browser) {
        browser

            .verify.elementPresent('//h5[contains(text(),"08:59 - 09:59")]')
            .verify.elementPresent('//h5[contains(text(),"Awards Panel")]')
            .verify.elementPresent('//button[contains(text(), "Add room")]')

            .verify.elementPresent('//span[@class="label orangeGroupColorForEvent"]')
            .verify.elementPresent('//span[@class="label violetGroupColorForEvent"]')
            .verify.elementPresent('//span[@class="label blueGroupColorForEvent"]')
            .verify.elementPresent('//span[@class="label greenGroupColorForEvent"]')
            .verify.elementPresent('//span[@class="label redGroupColorForEvent"]')
            .verify.elementPresent('//span[@class="label grayBlockColorForEvent"]')
    },
    'check all groups colors ': function (browser) {
        browser
            .verify.cssProperty('//span[@class="label orangeGroupColorForEvent"]', 'background-color', 'rgba(255, 153, 51, 1)')
            .verify.cssProperty('//span[@class="label violetGroupColorForEvent"]', 'background-color', 'rgba(255, 153, 255, 1)')
            .verify.cssProperty('//span[@class="label blueGroupColorForEvent"]', 'background-color', 'rgba(51, 153, 255, 1)')
            .verify.cssProperty('//span[@class="label greenGroupColorForEvent"]', 'background-color', 'rgba(153, 255, 204, 1)')
            .verify.cssProperty('//span[@class="label redGroupColorForEvent"]', 'background-color', 'rgba(255, 102, 102, 1)')
            .verify.cssProperty('//span[@class="label grayBlockColorForEvent"]', 'background-color', 'rgba(204, 204, 204, 1)')
    },

    'check container color ': function (browser) {
        browser
            .verify.elementPresent('//button[text()="Add container"]')
            .verify.cssProperty('//button[text()="Add container"]', 'background-color', 'rgba(79, 142, 220, 1)');
    },

    'check static agenda element color': function (browser) {
        browser
            .verify.elementPresent('//div[@class="panel-heading orangeBlockColorForEvent"]')
            .verify.cssProperty('//div[@class="panel-heading orangeBlockColorForEvent"]', 'background-color', 'rgba(245, 166, 35, 1)');
    },

    'check that the button is green when room was not chosen': function (browser) {
        browser
            .verify.elementPresent('//button[contains(text(),"Add room")]')
            .verify.cssProperty('//button[contains(text(),"Add room")]', 'background-color', 'rgba(133, 199, 68, 1)');
    },

    'click add room': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(), "Add room")]');
    },

    'add room for awards panel is displayed': function (browser) {
        browser
            .waitForElementVisible('//h4[contains(text(),"Add room for Awards Panel 25-04-2013 08:59:00 - 09:59:00")]', 4000)
            .useCss()
            .verify.valueContains("input.form-control[title=Room]", "")
            .setValueByCss('input.form-control[title=Room]', 'MyRoom')
            .clickBySelectorXpath('//button[@data-marker="me-event-agenda__button__save-room"]');
    },

    'redirection after adding room': function (browser) {
        browser
            .verify.elementPresent('//h5[contains(text(),"08:59 - 09:59")]')
            .verify.elementPresent('//h5[contains(text(),"Awards Panel")]')

            .verify.elementPresent('//button[contains(text(), "MyRoom")]');
    },

    'check that the button is red when room was choosen': function (browser) {
        browser
            .verify.elementPresent('//button[contains(text(), "MyRoom")]')
            .verify.cssProperty('//button[contains(text(), "MyRoom")]', 'background-color', 'rgba(231, 60, 60, 1)');
    },

    'delete groups checkboxes': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]');
    },


    'awards panel has been deleted': function (browser) {
        browser
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__0"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__1"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__2"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__3"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__4"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__5"]')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]')
    },

    'groups are not present': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//span[@class="label orangeGroupColorForEvent"]')
            .verify.elementNotPresent('//span[@class="label violetGroupColorForEvent"]')
            .verify.elementNotPresent('//span[@class="label blueGroupColorForEvent"]')
            .verify.elementNotPresent('//span[@class="label greenGroupColorForEvent"]')
            .verify.elementNotPresent('//span[@class="label redGroupColorForEvent"]')
            .verify.elementNotPresent('//span[@class="label grayBlockColorForEvent"]');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
