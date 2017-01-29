var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/227/agenda')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation new container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'click on add element button': function (browser) {
        browser
            .clickBySelectorCss('.btn.btn-info.btn-block');
    },

    'element form window is displayed': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h4[contains(text(),"Element form")]')
            .verify.elementPresent('//label[contains(text(),"Agenda Element Entry Type")]');
    },

    'choose static agenda element': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementEntryTypeId.form-control')
            .clickBySelectorXpath('//option[contains(text(),"Meeting element")]');
    },

    'static agenda element page assertion': function (browser) {
        browser
            .agendaElementPageAssertion();
    },

    'creating meeting element panel': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .verify.containsText('option[value="25"]', '1-TO-1 Placeholder')
            .clickBySelectorCss('option[value="25"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:59', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:59', browser.Keys.ENTER])

            .clickBySelectorXpath('//option[contains(text(),"Primary meeting hour")]')
            .clickBySelectorCss('input#room')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation meeting element panel': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:59 - 09:59")]')
            .verify.elementPresent('//h5[contains(text(),"1-TO-1 Placeholder")]')
            .verify.elementPresent('//button[contains(text(), "Add room")]');
    },

    'check static agenda element color': function (browser) {
        browser
            .verify.elementPresent('//div[@class="panel-heading blueBlockColorForEvent"]')
            .verify.cssProperty('//div[@class="panel-heading blueBlockColorForEvent"]', 'background-color', 'rgba(0, 122, 255, 1)');
    },

    'delete 1-TO-1 Placeholder panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .waitForElementVisible('//div[text()="     Do you really want to delete element 1-TO-1 Placeholder?   "]', 2000)
            .clickBySelectorXpath('//modal[@class="modal fade in"]/div/div/modal-footer/div/button[@data-marker="me-confirm__button__button__yes"]');
    },

    '1-TO-1 Placeholder has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:59 - 09:59")]')
            .verify.elementNotPresent('//h5[contains(text(),"1-TO-1 Placeholder")]')
            .verify.elementNotPresent('//button[contains(text(), "Add room")]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },
});
