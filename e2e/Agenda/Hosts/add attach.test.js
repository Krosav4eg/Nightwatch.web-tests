var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2475/agenda')
    },

    'add attach': function (browser) {
        var attachTemplate = browser.page.agenda().section.attachTemplate;
        attachTemplate
            .clickBySelector('@addattachTemplateButton')

            .clickBySelector('@continiumButton')
            .clickBySelector('@firstRadioButton')
            .clickBySelector('@doneButton');
    },

    'verify toastNotificationSuccess': function (browser) {
        var toasInformation = browser.page.agenda().section.toasInformation;
        toasInformation
            .waitForElementVisible('@toastNotificationSuccess', 10000)
            .verify.containsText('@toastTitle', 'Success!')
            .verify.containsText('@toastContent', 'The selected template has been attached')
            .clickBySelector('@toastNotificationSuccess');
    },

    'verify deleteButton': function (browser) {
        var attachTemplate = browser.page.agenda().section.attachTemplate;
        attachTemplate
            .verify.elementPresent('@rowAgendaContainer')

            .clickBySelector('deleteButton')
            .clickBySelectorXpath('@confirmationSuccess')
            .verify.elementNotPresent('@rowAgendaContainer');
    },
});
