var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

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

    'add element button': function (browser) {
        browser
            .clickBySelectorCss('.btn.btn-info.btn-block')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Element form")]')
            .verify.elementPresent('//label[contains(text(),"Agenda Element Entry Type")]');
    },

    'select "Element requiring table setting" agenda element entry type': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
            .clickBySelectorXpath('//option[contains(text(),"Element requiring table setting")]');
    },

    'select "hosted table placeholder" option': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="23"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER]);
    },

    'check fields/elements that appeared below: Agenda Element Type field': function (browser) {
        browser
            .useCss()
            .clickBySelectorCss('select#meetingAllowed')

            .useXpath()
            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorCss('div.col-sm-8.text-center>button.btn.btn-primary')
            .pause(1000)
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Add host topics to ")]')
            .clickBySelectorXpath('(//input[@type="checkbox"])[15]')

            .clickBySelectorXpath('(//button[@class="btn btn-primary pull-left"])[2]');
    },

    'selected hosts are displayed in element form': function (browser) {
        browser
            .verify.elementPresent('//me-event-agenda-element-host-topics//b[contains(text(),"BEITEN BURKHARDT Rechtsanwaltsgesellschaft mbH")]')
            .verify.elementPresent('(//me-event-agenda-element-host-topics//a[@class="action"])')

            .setValueByCss('input[ngcontrol="tableSize"]', '2')
            .setValueByCss('input#room', 'My Room')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation 1-TO-many-placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Hosted table placeholder")]')

            .verify.elementPresent('//b[contains(text(),"BEITEN BURKHARDT Rechtsanwaltsgesellschaft mbH")]')
            .verify.containsText('(//div[@class="col-sm-8 col-sm-offset-2 text-center"]//span)[1]', 'Host: Scholz Jessica')
            .verify.containsText('//div[@class="col-sm-8 text-center"]//button[@class="btn btn-danger"]', 'My Room');
    },


    'add element button again': function (browser) {
        browser
            .clickBySelectorCss('.btn.btn-info.btn-block')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Element form")]')
            .verify.elementPresent('//label[contains(text(),"Agenda Element Entry Type")]');
    },

    'select "element requiring table setting" agenda element entry type': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
            .clickBySelectorXpath('//option[contains(text(),"Element requiring table setting")]');
    },

    'select "dinner placeholder" option': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="34"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:00', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['8:25', browser.Keys.ENTER])

            .useCss()
            .clickBySelectorCss('select#meetingAllowed')

            .useXpath()
            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .setValueByCss('input#room', 'My Room 2')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection on the main page after creation dinner placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:00 - 08:25")]')
            .verify.elementPresent('//h5[contains(text(),"Dinner placeholder")]')

            .verify.containsText('//button[contains(text(),"My Room 2")]', 'My Room 2');
    },

    'click add element button ': function (browser) {
        browser
            .clickBySelectorCss('.btn.btn-info.btn-block')

            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Element form")]')
            .verify.elementPresent('//label[contains(text(),"Agenda Element Entry Type")]');
    },

    'select element requiring table ': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
            .clickBySelectorXpath('//option[contains(text(),"Element requiring table setting")]');
    },

    'select "group discussion placeholder" option': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="33"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:30', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:00', browser.Keys.ENTER])

            .useCss()
            .clickBySelectorCss('select#meetingAllowed')

            .useXpath()
            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .clickBySelectorCss('div.col-sm-8.text-center>button.btn.btn-primary')
            .pause(1000)
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Add host topics to ")]')
            .clickBySelectorXpath('//input[@data-marker="me-modal-attach-presentation-to-element__input__checkbox__628"]')
            .clickBySelectorXpath('//button[@data-marker="me-modal-attach-presentation-to-element__input__button__save"]');
    },

    'host displayed in element form': function (browser) {
        browser
            .verify.elementPresent('//table[@class="table table-striped"]//b[contains(text(),"RWE GBS GmbH")]')
            .verify.elementPresent('(//i[@class="fa fa-pencil edit-element"])[3]')
            .verify.elementPresent('(//i[@class="fa fa-trash-o delete-element"])[4]')
            .verify.elementPresent('(//button[@class="btn btn-primary"])[2]')

            .setValueByCss('input#room', 'My Room 3')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection on the main page after creation group discussion placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:30 - 09:00")]')
            .verify.elementPresent('//h5[contains(text(),"Group discussion placeholder")]')
            .verify.elementPresent('//b[contains(text(),"RWE GBS GmbH")]')

            .verify.elementPresent('//button[contains(text(),"My Room 3")]');
    },

    'add button click': function (browser) {
        browser
            .clickBySelectorCss('.btn.btn-info.btn-block')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Element form")]')
            .verify.elementPresent('//label[contains(text(),"Agenda Element Entry Type")]');
    },

    'click element requiring table setting agenda ': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
            .clickBySelectorXpath('//option[contains(text(),"Element requiring table setting")]');
    },

    'select "lunch placeholder" option': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="32"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['9:00', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:15', browser.Keys.ENTER])

            .useCss()
            .clickBySelectorCss('select#meetingAllowed')

            .useXpath()
            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .setValueByCss('input#room', 'My Room 4')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection on the main page after creation lunch placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"09:00 - 09:15")]')
            .verify.elementPresent('//h5[contains(text(),"Lunch placeholder")]')

            .verify.elementPresent('//button[contains(text(),"My Room 4")]');
    },

    'come back to Table settings': function (browser) {
        browser
            .relUrl('/events/212/table-settings')
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check Lunch tab headers in the the Table setting view.': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"Lunch  1")]')
            .verify.elementPresent('//a[text()="                   2012-05-09 09:00                 "]')

            .verify.elementPresent('//abbr[contains(text(),"Delegates in tables:")]')
            .verify.containsText('(//p)[1]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Delegates not in tables:")]')
            .verify.containsText('(//p)[2]', '64')

            .verify.elementPresent('//abbr[contains(text(),"Representatives in tables:")]')
            .verify.containsText('(//p)[3]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Representatives not in tables:")]')
            .verify.containsText('(//p)[4]', '4')

            .verify.elementPresent('//abbr[contains(text(),"Hosted tables:")]')
            .verify.containsText('(//p)[5]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Extra tables:")]')
            .verify.containsText('(//p)[6]', '0');
    },

    'check Group discussion tab headers in the the Table setting view.': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"Group discussion  1")]')
            .verify.elementPresent('//a[text()="                   2012-05-09 08:30                 "]')

            .verify.elementPresent('//abbr[contains(text(),"Delegates in tables:")]')
            .verify.containsText('(//p)[1]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Delegates not in tables:")]')
            .verify.containsText('(//p)[2]', '64')

            .verify.elementPresent('//abbr[contains(text(),"Representatives in tables:")]')
            .verify.containsText('(//p)[3]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Representatives not in tables:")]')
            .verify.containsText('(//p)[4]', '4')

            .verify.elementPresent('//abbr[contains(text(),"Hosted tables:")]')
            .verify.containsText('(//p)[5]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Extra tables:")]')
            .verify.containsText('(//p)[6]', '0');
    },

    'check Dinner tab headers in the the Table setting view.': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"Dinner  1")]')
            .verify.elementPresent('//a[text()="                   2012-05-09 08:00                 "]')

            .verify.elementPresent('//abbr[contains(text(),"Delegates in tables:")]')
            .verify.containsText('(//p)[1]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Delegates not in tables:")]')
            .verify.containsText('(//p)[2]', '64')

            .verify.elementPresent('//abbr[contains(text(),"Representatives in tables:")]')
            .verify.containsText('(//p)[3]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Representatives not in tables:")]')
            .verify.containsText('(//p)[4]', '4')

            .verify.elementPresent('//abbr[contains(text(),"Hosted tables:")]')
            .verify.containsText('(//p)[5]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Extra tables:")]')
            .verify.containsText('(//p)[6]', '0');
    },

    'check Hosted table tab headers in the the Table setting view.': function (browser) {
        browser
            .clickBySelectorXpath('//a[contains(text(),"Hosted table  1")]')
            .verify.elementPresent('//a[text()="                   2012-05-09 08:55                 "]')

            .verify.elementPresent('//abbr[contains(text(),"Delegates in tables:")]')
            .verify.containsText('(//p)[1]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Delegates not in tables:")]')
            .verify.containsText('(//p)[2]', '64')

            .verify.elementPresent('//abbr[contains(text(),"Representatives in tables:")]')
            .verify.containsText('(//p)[3]', '1')

            .verify.elementPresent('//abbr[contains(text(),"Tables missing representative:")]')
            .verify.containsText('(//p)[4]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Hosted tables:")]')
            .verify.containsText('(//p)[5]', '1')

            .verify.elementNotPresent('//abbr[contains(text(),"Extra tables:")]')

            .verify.elementPresent('(//td[contains(text(),"P")])[1]')
            .verify.elementPresent('//div[contains(text(),"1/2")]')
            .verify.elementPresent('//td/b[contains(text(),"Scholz Jessica ")]')
            .verify.elementPresent('(//td/span[contains(text(),"BEITEN BURKHARDT Rechtsanwaltsgesellschaft mbH")])[1]');
    },

    'redirection to agenda again ': function (browser) {
        browser
            .relUrl('/event/212/agenda')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'delete container': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-trash-o delete-container"]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]')
            .verify.elementNotPresent('//b[contains(text(), "test1")]')
            .verify.elementPresent('//div[contains(text(), "Container deleted")]');
    },
});

