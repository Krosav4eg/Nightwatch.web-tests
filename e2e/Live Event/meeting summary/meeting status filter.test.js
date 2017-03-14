var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary');
    },

    'choose cancelledOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@cancelledOption')

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '1-to-1 meeting')
            .verify.containsText('@secondRow', '1-to-1 meeting')
            .verify.containsText('@thirdRow', '1-to-1 meeting')
            .verify.containsText('@fourthRow', '1-to-1 meeting');
    },

    'choose suggestedOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@suggestedOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.elementPresent('@noResultsFound');
    },

    'choose delegateCancellationOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@delegateCancellationOption')

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '1-to-1 meeting')
            .verify.containsText('@secondRow', '1-to-1 meeting')
            .verify.containsText('@thirdRow', '1-to-1 meeting')
            .verify.containsText('@fourthRow', '1-to-1 meeting');
    },

    'choose queuedOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@queuedOption')

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.elementPresent('@noResultsFound');
    },

    'choose openOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@openOption')
            .clickBySelector('@rejectedOption')
            .clickBySelector('@allOption')
            .clickBySelector('@bookedOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'choose rejectedOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@rejectedOption')

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'choose allOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@allOption')

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '1-to-1 meeting')
            .verify.containsText('@secondRow', '1-to-1 meeting')
            .verify.containsText('@thirdRow', '1-to-1 meeting')
            .verify.containsText('@fourthRow', '1-to-1 meeting');
    },

    'choose bookedOption': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@bookedOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '1-to-1 meeting')
            .verify.containsText('@secondRow', '1-to-1 meeting')
            .verify.containsText('@thirdRow', '1-to-1 meeting')
            .verify.containsText('@fourthRow', '1-to-1 meeting');
    },

    'choose queuedOption and verify Meeting time': function (browser) {
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@queuedOption')

       //после исправления бага проверить что фильтр Meeting time не доступен
    },
});