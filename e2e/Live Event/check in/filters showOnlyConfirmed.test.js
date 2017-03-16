var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2336/check-in')
    },

    'select showOnlyConfirmedOption': function (browser) {
        var filter = browser.page.checkIn().section.filter;
        var allInformation = browser.page.checkIn().section.allInformation;
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;

        filter
            .clickBySelector('@showOnlyConfirmedOption');
        allInformation
            .verify.containsText('@tableCountRow', '172');

        participationStatusesColumn

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')

            .clickBySelector('@cancelledOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@confirmedOption')
            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')

            .clickBySelector('@confirmedRebookOption')
            .verify.containsText('@firstRow', 'Confirmed Rebook')
            .verify.containsText('@secondRow', 'Confirmed Rebook')
            .verify.containsText('@thirdRow', 'Confirmed Rebook')
            .verify.containsText('@fourthRow', 'Confirmed Rebook')

            .clickBySelector('@lateCancellationOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@noShowOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@unconfirmedOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@unconfirmedRebookOption')
            .verify.elementPresent('@noResultsFound')
    },
});