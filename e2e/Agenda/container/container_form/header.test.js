var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/221/agenda')
    },

    'check save button': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },

    'Check that field is required = blank click another field': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')

            .clickBySelectorCss('input#heading')
            .clickBySelectorCss('input#subHeading')

            .useXpath()
            .verify.containsText("(//*[contains(text(), 'Heading')]/../..)[1]", "Heading is required")
            .clickBySelectorXpath('//button[1][@class="btn btn-default pull-right"]');
    },

    'blank.click Save': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.containsText('//h4[contains(text(),"Container form")]', 'Container form')
            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]')

            .verify.containsText("(//*[contains(text(), 'Heading')]/../..)[1]", "Heading is required")

            .clickBySelectorXpath('//button[1][@class="btn btn-default pull-right"]')

            .verify.elementNotPresent('//b[contains(text(), "test1")]');
    },
});
