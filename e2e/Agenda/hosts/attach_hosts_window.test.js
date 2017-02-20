var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/agenda')
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

    'assertion Agenda Element Type drop down list': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .verify.elementPresent('option[value="35"]')

            .useXpath()
            .verify.elementPresent('//option[contains(text(),"Headline")]')
            .verify.elementPresent('//option[@value="27"][contains(text(),"Presentation / Case")]')
            .verify.elementPresent('//option[@value="19"][contains(text(),"Presentation / Chairman")]')
            .verify.elementPresent('//option[@value="28"][contains(text(),"Presentation / Cross-Function Keynote")]')
            .verify.elementPresent('//option[@value="29"][contains(text(),"Presentation / FishBowl")]')
            .verify.elementPresent('//option[@value="1"][contains(text(),"Presentation / Keynote")]')
            .verify.elementPresent('//option[@value="30"][contains(text(),"Presentation / Leadership presentation")]')
            .verify.elementPresent('//option[@value="17"][contains(text(),"Presentation / Panel discussion")]')
            .verify.elementPresent('//option[@value="31"][contains(text(),"Presentation / Snapshot")]')
            .verify.elementPresent('//option[@value="21"][contains(text(),"Presentation / Spotlight")]');
    },

    'select presentation/case': function (browser) {
        browser
            .clickBySelectorCss('option[value="27"]');
    },

    'set start time ': function (browser) {
        browser
            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:00', browser.Keys.ENTER]);
    },

    'set end time ': function (browser) {
        browser
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:45', browser.Keys.ENTER])
    },

    'click on attach button': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]');
    },

    'not selected speaker': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Add presentation to")]', 4000)
            .clickBySelectorXpath('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3756"]')
            .clickBySelectorXpath('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__cancel"]')
    },

    'none speaker is not displayed': function (browser) {
        browser
            .verify.elementNotPresent('//modal[@class="modal fade in"]//td[text()="3756"]');
    },

    'attach new speaker ': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-agenda-element-presentation/div/div[2]/button[text()="Attach"]')

            .verify.elementPresent('//h4[contains(text(),"Add presentation to")]')
            .clickBySelectorXpath('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__3756"]')
            .clickBySelectorXpath('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]');
    },

    'chosen speaker is displayed in Element form': function (browser) {
        browser
            .verify.elementPresent('//td[text()="3756"]')
            .verify.elementPresent('//td[text()="New Heading"]')
            .verify.elementPresent('//b[contains(text(),"Telenor ASA")]')
            .verify.elementPresent('//a[@href="/presentations/edit/3756"]//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//tr[1]//i[@class="fa fa-trash-o delete-element"]')
            .verify.elementPresent('//i[@class="fa fa-plus"]')

            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')
            .clickBySelectorXpath('//div/div/div/div/button[contains(text(),"Save")]')
    },
    'chosen speakers is displayed in the Element form': function (browser) {
        browser

            .verify.elementPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementPresent('//h5[contains(text(),"Presentation / Case")]')

            .verify.elementPresent('//button[contains(text(), "Add room")]')
            .verify.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')

            .verify.elementPresent('//td[text()="3756"]')
            .verify.elementPresent('//td/ul/li/b[text()="Telenor ASA"]')
            .verify.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]');
    },

    'delete presentation': function (browser) {
        browser
            .clickBySelectorXpath('//i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },

    'delete container': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-trash-o delete-container"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')
            .verify.elementNotPresent('//b[contains(text(), "test1")]');
    },
});
