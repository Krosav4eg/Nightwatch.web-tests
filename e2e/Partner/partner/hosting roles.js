var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to hosting roles': function (browser) {
        browser
            .relUrl('/event/2323/partners/20058')
    },

    'check hosting roles content': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .verify.elementPresent('@nameSection')

            .verify.elementPresent('@hostedAgendaElementColumn')
            .verify.elementPresent('@hostingRepresentativeColumn')
            .verify.elementPresent('@contentColumn')

            .verify.elementPresent('@linkToEventAgenda')

            .verify.elementPresent('@editButton')
            .verify.elementPresent('@deleteButton');
    },

    'edit role verify window appear': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .clickBySelector('@editButton')

            .verify.elementPresent('@representativeText')
            .verify.elementPresent('@representativeSelect')
            .verify.elementPresent('@subjectInput')
            .verify.elementPresent('@descriptionInput')
    },

    'edit role': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .setValueBySelector('@descriptionInput', 'test description')
            .setValueBySelector('@subjectInput', '#@$%^123456/.,test subject')
            .clickBySelector('@saveButton');
    },

    'edit info verify': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .verify.elementPresent('@successMassege')
            .verify.elementPresent('@subjectText')
            .verify.elementPresent('@descriptionText');
    },

    'verify link to event agenda': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .clickBySelector('@linkToEventAgenda');
        browser  .window_handles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle)
                    .verify.urlContains("http://alpha.skynet.managementevents.com/event/212/agenda")
                    .back()
                    .useCss()
                    .waitForElementNotVisible('#thisIsMainLoader', 30000);
            })
    },

    'cancel button verify': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .clickBySelector('@deleteButton')
            .clickBySelector('@cancelDeleteButton')
    },

    'create precondition for tests': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .clickBySelector('@editButton')

            .setValueBySelector('@descriptionInput', 'test')
            .setValueBySelector('@subjectInput', 'test')
            .clickBySelector('@saveButton')

            .verify.elementPresent('@successMassege');
    },
});