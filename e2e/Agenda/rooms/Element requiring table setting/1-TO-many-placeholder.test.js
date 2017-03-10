var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/235/agenda')
    },

    'creation new container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'click on add element button': function (browser) {
        browser
            .clickBySelectorCss('.btn.btn-info.btn-block')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Element form")]')
            .verify.elementPresent('//label[contains(text(),"Agenda Element Entry Type")]');
    },

    'choose element requiring table setting': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
            .clickBySelectorXpath('//option[contains(text(),"Element requiring table setting")]');
    },

    'assertion elements type in drop down list': function (browser) {
        browser
            .useCss()
            .clickBySelectorCss('select#agendaElementTypeId')

            .useXpath()
            .verify.elementPresent('//option[contains(text(),"Hosted table placeholder")]')
            .verify.elementPresent('//option[contains(text(),"Dinner placeholder")]')
            .verify.elementPresent('//option[contains(text(),"Group Discussion Placeholder")]')
            .verify.elementPresent('//option[contains(text(),"Lunch Placeholder")]');
    },

    'creating 1-TO-1 placeholder panel': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="23"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER]);
    },


    'element requiring table setting assertion': function (browser) {
        browser
            .useCss()
            .clickBySelectorCss('select#meetingAllowed')

            .useXpath()
            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')

            .verify.elementPresent('//label[contains(text(),"1 TO MANY MEETING hosts")]')
            .verify.elementPresent('//label[contains(text(),"Table size")]')
            .useCss()
            .verify.elementPresent('input[id="tableSize"]')

            .clickBySelectorCss('div.col-sm-8.text-center>button.btn.btn-primary')
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Add host topics to ")]')
            .clickBySelectorXpath('(//div[@class="modal in fade"]//span[contains(text(),"×")])[2]')

            .clickBySelectorCss('input#room')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation 1-TO-many-placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Hosted table placeholder")]')

            .clickBySelectorCss('i.fa.fa-plus');
    },

    'Add host topics to 1-TO-MANY Placeholder is displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//b[contains(text(),"Hosted table placeholder")]')

            .refresh()
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },


    'delete 1-to-many-placeholder panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]')
    },

    '1-to-many-placeholder has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementNotPresent('//h5[contains(text(),"Hosted table placeholder")]')
            .verify.elementNotPresent('//i[@class="fa fa-plus"]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});

