var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2323/partner-participation-status')
    },

    'sort by ME Account up': function (browser) {
        var matchedHostedTablesColumn = browser.page.partnerParticipationStatus().section.matchedHostedTablesColumn;
        matchedHostedTablesColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')

        var companyNameColumn = browser.page.partnerParticipationStatus().section.companyNameColumn;
        companyNameColumn
            .clickBySelector('@firstRow');
    },

    'verify empti': function (browser) {
        var hostingRoles = browser.page.partnersEdit().section.hostingRoles;
        hostingRoles
            .verify.elementNotPresent('@editButton');
    },
});