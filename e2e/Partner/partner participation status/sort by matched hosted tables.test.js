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
            .verify.containsText('@secondRow', 'OK')
            .verify.containsText('@thirdRow', 'OK')
            .verify.containsText('@fourthRow', 'OK')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'PENDING')
            .verify.containsText('@secondRow', 'OK')
            .verify.containsText('@thirdRow', 'OK')
            .verify.containsText('@fourthRow', 'OK')
    },

    'choose ok option': function (browser) {
        var matchedHostedTablesColumn = browser.page.partnerParticipationStatus().section.matchedHostedTablesColumn;
        matchedHostedTablesColumn
            .clickBySelector('@okOption')

            .verify.containsText('@firstRow', 'OK')
            .verify.containsText('@secondRow', 'OK')
            .verify.containsText('@thirdRow', 'OK')
    },

    'choose PENDING option': function (browser) {
        var matchedHostedTablesColumn = browser.page.partnerParticipationStatus().section.matchedHostedTablesColumn;
        matchedHostedTablesColumn
            .clickBySelector('@pendingOption')

            .verify.containsText('@firstRow', 'PENDING')
    },
});