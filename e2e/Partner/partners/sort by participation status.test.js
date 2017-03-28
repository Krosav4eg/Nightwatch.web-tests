var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'sort by Participation status up': function (browser) {
        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')
    },

    'sort by Participation status down': function (browser) {
        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')
    },

    'choose Unconfirmed ': function (browser) {
        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@unconfirmedOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose Confirmed (rebook)': function (browser) {
        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@confirmedRebookOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose Unconfirmed (rebook)': function (browser) {
        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@unconfirmedRebookOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose Confirmed': function (browser) {
        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn
            .clickBySelector('@confirmedOption')

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed')
    },
});
