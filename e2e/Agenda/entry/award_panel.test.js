var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/229/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation new container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'click on add element button': function (browser) {
        browser
            .addElementButtonForAgenda();
    },

    'blank.click another field': function (browser) {
        browser
            .blankClickOnAnotherField();
    },

    'assertion agenda element type drop down list': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')

            .verify.containsText('option[value="35"]', 'Awards Panel')
            .useXpath()
            .verify.containsText('//option[contains(text(),"Headline")]', 'Headline')

            .useCss()
            .verify.containsText('option[value="27"]', 'Presentation / Case')
            .verify.containsText('option[value="19"]', 'Presentation / Chairman')
            .verify.containsText('option[value="28"]', 'Presentation / Cross-Function Keynote')
            .verify.containsText('option[value="18"]', 'Presentation / Debate')
            .verify.containsText('option[value="29"]', 'Presentation / FishBowl')
            .verify.containsText('option[value="1"]', 'Presentation / Keynote')
            .verify.containsText('option[value="30"]', 'Presentation / Leadership presentation')
            .verify.containsText('option[value="17"]', 'Presentation / Panel discussion')
            .verify.containsText('option[value="31"]', 'Presentation / Snapshot')
            .verify.containsText('option[value="21"]', 'Presentation / Spotlight');
    },

    'static agenda element page assertion': function (browser) {
        browser
            .agendaElementPageAssertion();
    },

    'blank.click save button': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//div/div/div/div/button[contains(text(),"Save")]')

            .verify.containsText('(//p[@class="help-block"])[1]','Field is required.')
            .verify.containsText('(//p[@class="help-block"])[2]','Start Hour is required.')
            .verify.containsText('(//p[@class="help-block"])[3]','End Hour is required.')

            .clickBySelectorCss('option[value="35"]');
    },

    'start time can not be before set time ': function (browser) {
        browser
            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['7:59', browser.Keys.ENTER])

            .useXpath()
            .verify.containsText("//*[contains(text(), 'Start time')]/../..", "Date should be between 08:00 and 10:00")

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:00', browser.Keys.ENTER]);
    },

    'end time can not be after set time ': function (browser) {
        browser
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['10:01', browser.Keys.ENTER])
            .useXpath()
            .verify.containsText("//*[contains(text(), 'End time')]/../..", "Date should be between 08:00 and 10:00")

            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:45', browser.Keys.ENTER])
            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorXpath('//div/div/div/div/button[contains(text(),"Save")]');
    },

    'redirection & assertion  page': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Awards Panel")]', 2000)

            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000);
    },

    'click on edit awards panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]');
    },

    'static agenda page displayed and click on background': function (browser) {
        browser
            .agendaElementPageAssertion()

            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__0"]')
            .clickBySelectorXpath('//checkbox-item[@data-marker="me-event-agenda-element-form__input__checkbox__1"]')

            .clickBySelectorXpath('//button[@data-marker="me-event-agenda-element-form__input__button__cancel"]')

            .verify.elementNotPresent('//span[@class="label orangeGroupColorForEvent"]')
            .verify.elementNotPresent('//span[@class="label violetGroupColorForEvent"]');
    },

    'click on pencil': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]')
    },

    'putting check-boxes into Group 1 & Group 2': function (browser) {
        browser
            .puttingCeckBoxesForAgenda();
    },

    'redirection after selection "Group 1 - orange" & "Group 2 - violet"  page': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"Awards Panel")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)

            .waitForElementVisible('//span[@class="label orangeGroupColorForEvent"]', 2000)
            .verify.containsText('//span[@class="label orangeGroupColorForEvent"]', 'Group 1 - orange')

            .waitForElementVisible('//span[@class="label violetGroupColorForEvent"]', 2000)
            .verify.containsText('//span[@class="label violetGroupColorForEvent"]', 'Group 2 - violet');
    },

    'delete lunch panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .verify.elementPresent('//modal-content[contains(text(),"Do you really want to delete element Awards Panel?")]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },


    'awards panel has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementNotPresent('//h5[contains(text(),"Awards Panel")]')
            .verify.elementNotPresent('//button[contains(text(), "Add room")]');
    },
    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
