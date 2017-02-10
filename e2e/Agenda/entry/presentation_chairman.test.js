var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/1000/agenda')
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

    'blank click another field': function (browser) {
        browser
            .blankClickOnAnotherField();
    },

    'blank click on Save button': function (browser) {
        browser
            .clickBySelectorCss('option[value="19"]')

            .clickBySelectorXpath('//div/div/div/div/button[contains(text(),"Save")]')
            .verify.elementPresent('//p[text()=" Start Hour is required.           "]')
            .verify.elementPresent('//p[text()=" End Hour is required.           "]');
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
    },

    'click on attach button': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Attach"]');
    },

    'add presentation window is displayed': function (browser) {
        browser
            .waitForElementVisible('//h4[text()="Add presentation to "]', 5000)
            .clickBySelectorXpath('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__1670"]')
            .clickBySelectorXpath('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]');
    },

    'the person is displayed': function (browser) {
        browser
            .verify.elementPresent('//li[text()=" - Hannula Panu             "]')
            .verify.elementPresent('(//b[contains(text(),"Musti Group Oy")])[1]')

            .verify.elementPresent('//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//i[@class="fa fa-trash-o delete-element"]')
            .verify.elementPresent('//i[@class="fa fa-plus"]')

            .clickBySelectorXpath('//div/div/div/div/button[contains(text(),"Save")]');
    },

    'presentation chairman was created': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementPresent('//h5[contains(text(),"Presentation / Chairman")]')
            .verify.elementPresent('//button[contains(text(), "Add room")]')
            .verify.elementPresent('(//b[contains(text(),"Musti Group Oy")])[1]')
            .verify.elementPresent('//li[text()=" - Hannula Panu             "]')
            .verify.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]');
    },

    'click on edit presentation/chairman panel': function (browser) {
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

    'click on pencil option': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]')
    },

    'putting check-boxes in Group 1 & Group 2': function (browser) {
        browser
            .puttingCeckBoxesForAgenda();
    },

    'redirection after selection "Group 1 - orange" & "Group 2 - violet"  page': function (browser) {
        browser
            .useXpath()
            .verify.containsText('//span[@class="label orangeGroupColorForEvent"]', 'Group 1 - orange')

            .waitForElementVisible('//span[@class="label violetGroupColorForEvent"]', 2000)
            .verify.containsText('//span[@class="label violetGroupColorForEvent"]', 'Group 2 - violet')

            .verify.elementPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementPresent('//h5[contains(text(),"Presentation / Chairman")]')
            .verify.elementPresent('//button[contains(text(), "Add room")]')

            .verify.elementPresent('(//b[contains(text(),"Musti Group Oy")])[1]')
            .verify.elementPresent('//li[text()=" - Hannula Panu             "]')

            .verify.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]');
    },

    'delete award panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]');
    },

    'presentation/chairman has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementNotPresent('//h5[contains(text(),"Presentation / Chairman")]')
            .verify.elementNotPresent('//button[contains(text(), "Add room")]');
    },

    'delete container': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-trash-o delete-container"]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]')
            .verify.elementNotPresent('//b[contains(text(), "test1")]');
    },
});
