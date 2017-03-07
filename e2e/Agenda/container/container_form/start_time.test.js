var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/222/agenda')
    },

    'Check that field is required = blank click another field ': function (browser) {
        browser

            .clickBySelectorCss('button.btn.btn-primary.btn-block')
            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')

            .useCss()
            .clickBySelectorCss('#containerStartHour')
            .clickBySelectorCss('input#subHeading');
    },

    'blank click Save': function (browser) {
        browser
            .useXpath()
            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]')

            .verify.containsText("//*[contains(text(), 'Start time')]/../..", "Start Hour is required")

            .clickBySelectorXpath('//button[1][@class="btn btn-default pull-right"]');
    },

    'can not create time before event': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .setValueByCss('#containerStartHour input', ['7:00', browser.Keys.ENTER])

            .useXpath()
            .verify.containsText("//*[contains(text(), 'Start time')]/../..", "Date should be between 08:00 and 18:00")
            .clickBySelectorXpath('//button[1][@class="btn btn-default pull-right"]');
    },

    'creation container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
