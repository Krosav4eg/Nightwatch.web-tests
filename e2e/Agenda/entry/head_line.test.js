var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/231/agenda')
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

    'blank click Save': function (browser) {
        browser
            .clickBySelectorXpath('//option[contains(text(),"               Headline             ")]')
            .clickBySelectorCss('select#agendaElementTypeId')

            .clickBySelectorXpath('//div/div/div/div/button[contains(text(),"Save")]')
            .verify.elementPresent('//p[text()=" Start Hour is required.           "]')
            .verify.elementPresent('//p[text()=" Heading is required.           "]')
            .verify.elementPresent('//p[text()=" End Hour is required.           "]');
    },

    'input heading field': function (browser) {
        browser
            .setValueByCss('input#heading.form-control.ng-pristine.ng-invalid.ng-touched', 'autotest2016');
    },

    'input sub heading field': function (browser) {
        browser
            .setValueByCss('input#subHeading.form-control.ng-pristine.ng-valid.ng-touched', 'test');
    },

    'start time can not be before set time ': function (browser) {
        browser
            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['7:59', browser.Keys.ENTER])

            .useXpath()
            .verify.elementPresent('//p[text()=" Date should be between 08:00 and 10:00           "]')
            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:00', browser.Keys.ENTER]);
    },

    'end time can not be after set time ': function (browser) {
        browser
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['10:01', browser.Keys.ENTER])
            .useXpath()
            .verify.elementPresent('//p[text()=" Date should be between 08:00 and 10:00           "]')

            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:45', browser.Keys.ENTER])
            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorXpath('//div/div/div/div/button[contains(text(),"Save")]');
    },

    'redirection & assertion  page': function (browser) {
        browser
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 4000)
            .waitForElementVisible('//h5[contains(text(),"autotest2016")]', 4000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 4000);
    },

    'click on edit head line panel': function (browser) {
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
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]');
    },

    'putting check-boxes in Group 1 & Group 2': function (browser) {
        browser
            .puttingCeckBoxesForAgenda();
    },

    'redirection after selection "Group 1 - orange" & "Group 2 - violet"  page': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h5[contains(text(),"08:00 - 09:45")]', 2000)
            .waitForElementVisible('//h5[contains(text(),"autotest2016")]', 2000)
            .waitForElementVisible('//button[contains(text(), "Add room")]', 2000)

            .waitForElementVisible('//span[@class="label orangeGroupColorForEvent"]', 2000)
            .verify.containsText('//span[@class="label orangeGroupColorForEvent"]', 'Group 1 - orange')

            .waitForElementVisible('//span[@class="label violetGroupColorForEvent"]', 2000)
            .verify.containsText('//span[@class="label violetGroupColorForEvent"]', 'Group 2 - violet');
    },

    'delete award panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .waitForElementVisible('//div[text()="     Do you really want to delete element autotest2016?   "]', 2000)
            .clickBySelectorXpath('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]');
    },

    'awards panel has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementNotPresent('//h5[contains(text(),"autotest2016")]')
            .verify.elementNotPresent('//button[contains(text(), "Add room")]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
