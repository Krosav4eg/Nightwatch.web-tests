var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-participation-status')
    },

    'sort by Company info up': function (browser) {
        var invoiceInfoColumn = browser.page.partnerParticipationStatus().section.invoiceInfoColumn;
        invoiceInfoColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'PENDING')
            .verify.containsText('@secondRow', 'PENDING')
            .verify.containsText('@thirdRow', 'PENDING')
            .verify.containsText('@fourthRow', 'PENDING')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'PENDING')
            .verify.containsText('@secondRow', 'PENDING')
            .verify.containsText('@thirdRow', 'PENDING')
            .verify.containsText('@fourthRow', 'PENDING')
    },

    'sort by Company info up': function (browser) {
        var invoiceInfoColumn = browser.page.partnerParticipationStatus().section.invoiceInfoColumn;
        invoiceInfoColumn
            .clickBySelector('@pendingOption')
            .verify.containsText('@firstRow', 'PENDING')

            .clickBySelector('@okOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@allOption')
            .verify.containsText('@firstRow', 'PENDING')
            .verify.containsText('@secondRow', 'PENDING')
            .verify.containsText('@thirdRow', 'PENDING')
            .verify.containsText('@fourthRow', 'PENDING')
    },
});
