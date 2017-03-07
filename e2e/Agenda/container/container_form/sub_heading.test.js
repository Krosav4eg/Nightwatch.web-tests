var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/223/agenda')
    },

    'blank click another field': function (browser) {
        browser
            .clickBySelectorCss('button.btn.btn-primary.btn-block')

            .useXpath()
            .verify.elementPresent('//h4[contains(text(), "Container form")]')

            .clickBySelectorCss('input#subHeading')
            .clickBySelectorCss('input#heading');
    },

    'Check that field is not required': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//p[text()=" Sub Heading is required."]');
    },

    'blank click Save': function (browser) {
        browser
            .clickBySelectorXpath('//form/div[2]/div/div/button[contains(text(),"Save")]');
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
