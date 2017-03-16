var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'select showOnlyConfirmedOption': function (browser) {
        var filter = browser.page.checkIn().section.filter;
        var allInformation = browser.page.checkIn().section.allInformation;
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;

        filter
            .clickBySelector('@showAllOption');
        allInformation
            .verify.containsText('@tableCountRow', '295');

        participationStatusesColumn

            .verify.containsText('@firstRow', 'Cancelled')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'No show')
            .verify.containsText('@fourthRow', 'Cancelled')

            .clickBySelector('@cancelledOption')
            .verify.containsText('@firstRow', 'Cancelled')
            .verify.containsText('@secondRow', 'Cancelled')
            .verify.containsText('@thirdRow', 'Cancelled')
            .verify.containsText('@fourthRow', 'Cancelled')

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
            .verify.containsText('@firstRow', 'Late cancellation')
            .verify.containsText('@secondRow', 'Late cancellation')
            .verify.containsText('@thirdRow', 'Late cancellation')
            .verify.containsText('@fourthRow', 'Late cancellation')

            .clickBySelector('@noShowOption')
            .verify.containsText('@firstRow', 'No show')

            .clickBySelector('@unconfirmedOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@unconfirmedRebookOption')
            .verify.elementPresent('@noResultsFound')
    },
});