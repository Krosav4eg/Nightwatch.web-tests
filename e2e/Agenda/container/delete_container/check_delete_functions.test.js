var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/224/agenda')
    },

    'container creation': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'check alert message': function (browser) {
        browser
            .useCss()
            .clickBySelectorCss('.fa.fa-trash-o.delete-container')
            .useXpath()
            .verify.containsText('//h4[contains(text(), "Confirmation")]', 'Confirmation');
    },

    'click NO button': function (browser) {
        browser
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__no"]')
            .useXpath()
            .verify.elementPresent('//b[1][contains(text(),"8:00")]')
            .verify.elementPresent('//b[2][contains(text(),"10:00")]')
            .verify.elementPresent('//b[contains(text(),"test1")]');
    },

    'click OK button': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
