var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by checkingStatusColumn up': function (browser) {
        var checkingStatusColumn = browser.page.meetingSummary().section.checkingStatusColumn;
        checkingStatusColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');

    },

    'sort by checkingStatusColumn down': function (browser) {
        var checkingStatusColumn = browser.page.meetingSummary().section.checkingStatusColumn;
        durationColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'choose ok option': function (browser) {
        var checkingStatusColumn = browser.page.meetingSummary().section.checkingStatusColumn;
        checkingStatusColumn
            .clickBySelector('@okOption')
    },

    'choose cancelled option': function (browser) {
        var checkingStatusColumn = browser.page.meetingSummary().section.checkingStatusColumn;
        checkingStatusColumn
            .clickBySelector('@cancelledOption')
    },

    'choose reschedule option': function (browser) {
        var checkingStatusColumn = browser.page.meetingSummary().section.checkingStatusColumn;
        checkingStatusColumn
            .clickBySelector('@rescheduleOption')
    },

    'choose allOption': function (browser) {
        var checkingStatusColumn = browser.page.meetingSummary().section.checkingStatusColumn;
        checkingStatusColumn
            .clickBySelector('@allOption')
    },
});