var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/1001/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation new container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'choose element requiring table setting': function (browser) {
        browser
            .chooseElementRequiringTableSetting();
    },

    'creating group discussion placeholder panel': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="33"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER])

            .useXpath()
            .verify.containsText('//button[text()="Attach"]', 'Attach')
            .verify.containsText('//label[text()="Attach role/presentation"]', 'Attach role/presentation')

            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')
            .clickBySelectorCss('input#room')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation group discussion placeholder panel': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Group Discussion Placeholder")]')

            .clickBySelectorCss('i.fa.fa-plus');
    },

    'choose person in  add presentation to window': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//b[contains(text(),"Group Discussion Placeholder")]')

            .verify.elementPresent('//b[contains(text(),"ISS Palvelut Oy")]')
            .clickBySelectorXpath('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__1962"]')
            .clickBySelectorXpath('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]');
    },

    'chosen person is appear': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Group Discussion Placeholder")]')

            .verify.elementPresent('//b[contains(text(),"ISS Palvelut Oy")]')

            .verify.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]')

            .clickBySelectorXpath('//button[contains(text(), "Add room")]');
    },

    'input room field is empty': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Add room for Group Discussion Placeholder 15-04-2015 09:00:00 - 10:00:00")]')

            .useCss()
            .verify.valueContains("input.form-control[title=Room]", "")
            .setValueByCss('input.form-control[title=Room]', 'MyRoom#3')

            .clickBySelectorXpath('//button[@data-marker="me-event-agenda__button__save-room"]');
    },

    'input room is displaying': function (browser) {
        browser
            .clickBySelectorXpath('//button[contains(text(),"MyRoom#3")]');
    },

    'add room for group discussion is displayed again': function (browser) {
        browser
            .verify.elementPresent('//h4[contains(text(),"Add room for Group Discussion Placeholder 15-04-2015 09:00:00 - 10:00:00")]')

            .useCss()
            .verify.elementPresent('input.form-control[title=Room]')
            .verify.valueContains("input.form-control[title=Room]", "MyRoom#3")
            .clickBySelectorCss('button[data-dismiss="modalRoom"]')

            .useXpath()
            .waitForElementVisible('//button[contains(text(),"MyRoom#3")]', 2000);
    },

    'click on edit panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]');
    },

    'chosen person displayed in Element form': function (browser) {
        browser
            .verify.elementPresent('//label[text()="Attach role/presentation"]')
            .verify.elementPresent('//modal//i[@class="fa fa-plus"]')

            .verify.elementPresent('//li[text()=" - Virta Kari             "]')
            .verify.elementPresent('//modal//i[@class="fa fa-pencil edit-element"]')
            .verify.elementPresent('//modal//i[@class="fa fa-trash-o delete-element"]');
    },

    'assertion for room field contains name My Room': function (browser) {
        browser
            .useCss()
            .verify.valueContains("input#room", "MyRoom#3")

            .refresh()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);

    },

    'delete group discussion placeholder panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .verify.elementPresent('//modal-content[contains(text(),"    Do you really want to delete element Group Discussion Placeholder?")]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },

    'group discussion placeholder has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"Group Discussion Placeholder")]')
            .verify.elementNotPresent('//button[contains(text(),"MyRoom#3"])');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
