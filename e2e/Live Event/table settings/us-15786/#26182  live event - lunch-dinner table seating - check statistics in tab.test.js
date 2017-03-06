var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2314/agenda')
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'creation new container': function (browser) {
        browser
            .containerCreationForAgenda();
    },

    'choose Element requiring table setting': function (browser) {
        browser
            .chooseElementRequiringTableSetting();
    },

    'lunch placeholder page assertion ': function (browser) {
        browser
            .agendaElementPageAssertion();
    },

    'creating Hosted Table panel': function (browser) {
        browser
            .clickBySelectorCss('select#agendaElementTypeId')
            .clickBySelectorCss('option[value="23"]')

            .setValueByCss('me-date-time-input#elementStartHour input.form-control.dateTimeInput.dateTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueByCss('me-date-time-input#elementEnd input.form-control.dateTimeInput.dateTimeInput', ['9:25', browser.Keys.ENTER])

            .clickBySelectorXpath('//option[contains(text(),"No meetings allowed")]')
            .clickBySelectorXpath('//button[@class="btn btn-primary"]')

            .clickBySelectorXpath('(//input[@type="checkbox"])[6]')
            .clickBySelectorXpath('(//input[@type="checkbox"])[7]')
            .clickBySelectorXpath('//button[contains(text(),"Save & Close")]')

            .clickBySelectorXpath('//div[@class="col-sm-12 container_btn_group"]/button[2][contains(text(),"Save")]');
    },

    'redirection after creation lunch-placeholder': function (browser) {
        browser
            .useXpath()
            .verify.elementPresent('//h5[contains(text(),"08:55 - 09:25")]')
            .verify.elementPresent('//h5[contains(text(),"Hosted table placeholder")]')

            .verify.elementPresent('//b[contains(text(),"Esri Schweiz AG")]')
            .verify.elementPresent('//b[contains(text(),"LCC Consulting AG")]')

            .useCss()
            .verify.elementPresent('i.fa.fa-plus');
    },

    'search for an event in live event - choose event sidebar navigation': function (browser) {
        browser
            .clickBySelectorXpath('//span[contains(text(),"Live event")]')
            .verify.elementPresent('(//span[contains(text(),"Choose event")])[3]');
    },

    'click event Id for any of the returned search results': function (browser) {
        browser
            .clickBySelectorXpath('(//span[contains(text(),"Choose event")])[3]')
            .clickBySelectorXpath('//a[contains(text(),"IndustryForum Healthcare")]')

            .verify.elementPresent('//h4[contains(text(),"Event (#2314)")]')
            .verify.elementPresent('//h3[contains(text(),"IndustryForum Healthcare")]')

            .clickBySelectorXpath('(//span[contains(text(),"IndustryForum Healthcare")])[4]')

            .verify.elementPresent('//span[contains(text(),"Check-in")]')
            .verify.elementPresent('//span[contains(text(),"HelpDesk")]')
            .verify.elementPresent('//span[contains(text(),"Table setting")]')
            .verify.elementPresent('//span[contains(text(),"Table groups check view")]')
            .verify.elementPresent('//span[contains(text(),"Table groups Summary")]')
            .verify.elementPresent('//span[contains(text(),"Meetings check")]')
            .verify.elementPresent('//span[contains(text(),"Meetings summary")]');
    },

    'check statistics displayed below the table setting tab header.': function (browser) {
        browser
            .clickBySelectorXpath('//span[contains(text(),"Table setting")]')

            .verify.elementPresent('//abbr[contains(text(),"Delegates in tables:")]')
            .verify.containsText('(//p)[1]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Delegates not in tables:")]')
            .verify.containsText('(//p)[2]', '142')

            .verify.elementPresent('//abbr[contains(text(),"Representatives in tables:")]')
            .verify.containsText('(//p)[3]', '2')

            .verify.elementPresent('//abbr[contains(text(),"Tables missing representative:")]')
            .verify.containsText('(//p)[4]', '0')

            .verify.elementPresent('//abbr[contains(text(),"Hosted tables:")]')
            .verify.containsText('(//p)[5]', '2')
    },

    'check statistic for "representatives in tables"': function (browser) {
        browser
            .verify.elementPresent('(//td[contains(text(),"P")])[1]')
            .verify.elementPresent('(//div[contains(text(),"1/0")])[1]')
            .verify.containsText('(//td/b[contains(text(),"")])[1]', 'Frei Andrew')
            .verify.containsText('(//td/span)[1]', 'Esri Schweiz AG')

            .verify.elementPresent('(//td[contains(text(),"P")])[2]')
            .verify.elementPresent('(//div[contains(text(),"1/0")])[2]')
            .verify.containsText('(//td/b[contains(text(),"")])[2]', 'Ledermann Thomas')
            .verify.containsText('(//td/span)[2]', 'LCC Consulting AG')
    },

    'redirection to agenda again': function (browser) {
        browser
            .relUrl('/event/2314/agenda')
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

