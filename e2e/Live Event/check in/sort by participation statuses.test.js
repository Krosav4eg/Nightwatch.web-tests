var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by participation status up': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed');

    },

    'sort by participation status down': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Confirmed Rebook')
            .verify.containsText('@secondRow', 'Confirmed Rebook')
            .verify.containsText('@thirdRow', 'Confirmed Rebook')
            .verify.containsText('@fourthRow', 'Confirmed Rebook');
    },

    'choose cancelled': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@cancelledOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose confirmed': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@confirmedOption')

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed');
    },

    'choose confirmed Rebook': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@confirmedRebookOption')

            .verify.containsText('@firstRow', 'Confirmed Rebook')
            .verify.containsText('@secondRow', 'Confirmed Rebook')
            .verify.containsText('@thirdRow', 'Confirmed Rebook')
            .verify.containsText('@fourthRow', 'Confirmed Rebook');
    },

    'choose late Cancellation': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@lateCancellationOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose not Show': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@noShowOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose unconfirmed': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@unconfirmedOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose unconfirmed Rebook': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@unconfirmedRebookOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose all': function (browser) {
        var participationStatusesColumn = browser.page.checkIn().section.participationStatusesColumn;
        participationStatusesColumn
            .clickBySelector('@allOption')

            .verify.containsText('@firstRow', 'Confirmed Rebook')
            .verify.containsText('@secondRow', 'Confirmed Rebook')
            .verify.containsText('@thirdRow', 'Confirmed Rebook')
            .verify.containsText('@fourthRow', 'Confirmed Rebook');
    },
});