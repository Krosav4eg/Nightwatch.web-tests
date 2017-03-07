var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {


    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2308/agenda')
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

    'assertion elements type in drop down list': function (browser) {
        browser
            .useCss()
            .clickBySelectorCss('select#agendaElementTypeId', 5000)

            .useXpath()
            .verify.elementPresent('//option[contains(text(),"Hosted table placeholder")]')
            .verify.elementPresent('//option[contains(text(),"Dinner placeholder")]')
            .verify.elementPresent('//option[contains(text(),"Group Discussion Placeholder")]')
            .verify.elementPresent('//option[contains(text(),"Lunch Placeholder")]');
    },

    'select "hosted table placeholder" option.': function (browser) {
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

            .verify.elementPresent('//label[contains(text(),"1 TO MANY MEETING hosts")]')
            .verify.elementPresent('//label[contains(text(),"Table size")]')
            .useCss()
            .verify.elementPresent('input[ngcontrol="tableSize"]')

            .clickBySelectorCss('div.col-sm-8.text-center>button.btn.btn-primary')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Add host topics to ")]')
            .clickBySelectorXpath('(//input[@type="checkbox"])[12]')
            .clickBySelectorXpath('(//input[@type="checkbox"])[13]')

            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[@class="btn btn-primary pull-left"]');
    },

    'selected hosts are displayed': function (browser) {
        browser
            .verify.elementPresent('(//b[contains(text(),"NetApp Denmark ApS")])[1]')
            .verify.elementPresent('(//modal[@class="modal fade in"]//a[@class="action"])[1]')

            .verify.elementPresent('(//b[contains(text(),"Accenture A/S")])[2]')
            .verify.elementPresent('(//modal[@class="modal fade in"]//a[@class="action"])[2]')

            .setValueByCss('input[ngcontrol="tableSize"]', '2')
            .setValueByCss('input#room', 'My Room')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation 1-TO-many-placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Hosted table placeholder")]')

            .verify.elementPresent('(//b[contains(text(),"NetApp Denmark ApS")])[1]')
            .verify.elementPresent('(//i[@class="fa fa-trash-o delete-element"])[2]')

            .verify.elementPresent('(//b[contains(text(),"Accenture A/S")])[2]')
            .verify.elementPresent('(//i[@class="fa fa-trash-o delete-element"])[3]');
    },

    'click edit agenda button for any hosted table placeholder element in the event agenda.': function (browser) {
        browser
            .useCss()
            .click('i[class="fa fa-pencil edit-element"]')
            .pause(3000)
            .useXpath()
            .click('(//i[@class="fa fa-trash-o delete-element"])[4]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]')

            .setValueByCss('input#room', 'Room#1')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'delete host': function (browser) {
        browser
            .useCss()
            .clickBySelectorXpath('(//i[@class="fa fa-trash-o delete-element"])[1]')

            .clickBySelectorXpath('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]');
    },

    '1-to-many-placeholder has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementNotPresent('//h5[contains(text(),"Hosted table placeholder")]');
    },

    'delete container': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-trash-o delete-container"]')
            .clickBySelectorXpath('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]')
            .verify.elementNotPresent('//b[contains(text(), "test1")]')
            .verify.elementPresent('//div[contains(text(), "Container deleted")]');
    },
});

