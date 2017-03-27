var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Participation status up': function (browser) {
        var participationStatusColumn = browser.page.representatives().section.participationStatusColumn;
        participationStatusColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')
    },

    'choose Unconfirmed': function (browser) {
        var participationStatusColumn = browser.page.representatives().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@unconfirmedOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose Confirmed': function (browser) {
        var participationStatusColumn = browser.page.representatives().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@confirmedOption')

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')
    },

    'choose Confirmed (rebook)': function (browser) {
        var participationStatusColumn = browser.page.representatives().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@confirmedRebookOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose Unconfirmed (rebook)': function (browser) {
        var participationStatusColumn = browser.page.representatives().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@unconfirmedRebookOption')

            .verify.elementPresent('@noResultsFound')
    },
});
