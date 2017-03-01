var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2308/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    //
    // 'creation new container': function (browser) {
    //     browser
    //         .containerCreationForAgenda();
    // },

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

            .clickBySelectorCss('div.col-sm-8.text-center>button.btn.btn-primary')
            .pause(1000)
            .useXpath()
        //  .verify.elementPresent('(//h4[contains(text(),"Add host topics to ")])[2]')
            .clickBySelectorXpath('(//input[@type="checkbox"])[15]')

            .clickBySelectorXpath('(//button[@class="btn btn-primary pull-left"])[2]');
    },

    'selected hosts are displayed in element form': function (browser) {
        browser
            .verify.elementPresent('(//b[contains(text(),"NetApp Denmark ApS")])[1]')
            .verify.elementPresent('(//a[@class="action"])[1]')

            .setValueByCss('input[ngcontrol="tableSize"]', '2')
            .setValueByCss('input#room', 'My Room')
            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation 1-TO-many-placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Hosted table placeholder")]')

            .verify.elementPresent('(//b[contains(text(),"NetApp Denmark ApS")])[2]')
            .verify.elementPresent('(//i[@class="fa fa-trash-o delete-element"])[2]');
    },

    'click delete button for host': function (browser) {
        browser
            .useCss()
            .click('i[class="fa fa-pencil edit-element"]')
            .pause(3000)
            .useXpath()
            .click('(//i[@class="fa fa-trash-o delete-element"])[3]')
            .pause(2000)
            .verify.containsText('(//modal[@class="modal fade in"]//div[@class="modal-body"])[2]','Do you really want to detach current host with topic?')
            .pause(1000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]')
            .verify.elementNotPresent('(//b[contains(text(),"NetApp Denmark ApS")])[2]')
            .clickBySelectorXpath('//button[@data-marker="me-event-agenda-element-form__input__button__cancel"]');
    },

    'host is still displaying again on main page': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Hosted table placeholder")]')

            .verify.elementPresent('(//b[contains(text(),"NetApp Denmark ApS")])[1]')
            .verify.containsText('//span/br[1]','Hvilke krav stilles der til fremtidens datacenter  ? Hvilke krav stiller I ? Hvilke krav bør I stille ?');
    },

    'click delete button for host again': function (browser) {
        browser
            .useCss()
            .click('i[class="fa fa-pencil edit-element"]')
            .pause(3000)
            .useXpath()
            .click('(//i[@class="fa fa-trash-o delete-element"])[3]')
            .pause(2000)
            .verify.containsText('(//modal[@class="modal fade in"]//div[@class="modal-body"])[2]','Do you really want to detach current host with topic?')
            .pause(1000)
            .click('//modal[@class="modal fade in"]//button[@data-marker="me-confirm__button__button__yes"]')
            .verify.elementNotPresent('(//b[contains(text(),"NetApp Denmark ApS")])[2]')
            .clickBySelectorXpath('//button[@data-marker="me-event-agenda-element-form__input__button__save"]');
    },

    'host is not displaying again on main page': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Hosted table placeholder")]')

            .verify.elementNotPresent('(//b[contains(text(),"NetApp Denmark ApS")])[1]')
            .verify.elementNotPresent('//span/br[1]');
    },


});

