var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2323/partner-participation-status')
    },

    'seach PwC': function (browser) {
        var companyNameColumn = browser.page.partnerParticipationStatus().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['PwC', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'PwC');

        var matchedHostedTablesColumn = browser.page.partnerParticipationStatus().section.matchedHostedTablesColumn;
        matchedHostedTablesColumn
            .verify.containsText('@firstRow', 'OK');

        companyNameColumn
            .clickBySelector('@firstRow');
    },

    'delete subject': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .clickBySelector('@editButton')

            .verify.valueContains('@subjectInput', 'test')
            .setValueBySelector('@subjectInput', ' ')
            .verify.containsText('@subjectInput', '')

            .clickBySelector('@saveButton')
    },

    'verify status after delete subject': function (browser) {
        browser
            .relUrl('/event/2323/partner-participation-status')

        var companyNameColumn = browser.page.partnerParticipationStatus().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['PwC', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'PwC');

        var matchedHostedTablesColumn = browser.page.partnerParticipationStatus().section.matchedHostedTablesColumn;
        matchedHostedTablesColumn
            .verify.containsText('@firstRow', 'PENDING');
    },

    'add subject': function (browser) {
        var companyNameColumn = browser.page.partnerParticipationStatus().section.companyNameColumn;
        companyNameColumn
            .clickBySelector('@firstRow');
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .clickBySelector('@editButton')

            .verify.containsText('@subjectInput', '')
            .setValueBySelector('@subjectInput', 'test')
            .verify.valueContains('@subjectInput', 'test')

            .clickBySelector('@saveButton')
    },

    'verify status after add subject': function (browser) {
        browser
            .relUrl('/event/2323/partner-participation-status')

        var companyNameColumn = browser.page.partnerParticipationStatus().section.companyNameColumn;
        companyNameColumn
            .setValueBySelector('@seachColumn', ['PwC', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'PwC');

        var matchedHostedTablesColumn = browser.page.partnerParticipationStatus().section.matchedHostedTablesColumn;
        matchedHostedTablesColumn
            .verify.containsText('@firstRow', 'OK');
    },
});