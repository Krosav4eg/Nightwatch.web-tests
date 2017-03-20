var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/delegates/edit/148599');
    },

    'select confirmed for delegates': function (browser) {
        var delegatesEdit = browser.page.delegates().section.delegatesEdit;
        delegatesEdit
            .clickBySelector('@confirmatedOption')

            .clickBySelector('@saveButton');
    },

    'verify status confirmed on meeting-summary': function (browser) {
        browser
            .relUrl('/events/2326/meeting-summary');
        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter

            .clickBySelector('@hostedTableMeetingOption');

        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@allOption');

        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .moveToElement('@nameColumn', 1298, 597)
            .setValueBySelector('@seachColumn', ['Raymond Lim', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Raymond Lim")

        meetingStatusFilter
            .clickBySelector('@delegateCancellationOption');
        delegateColumn
            .verify.elementPresent('@noResultsFound');
    },

    'select cancel for delegates': function (browser) {
        browser
            .relUrl('/delegates/edit/148599');

        var delegatesEdit = browser.page.delegates().section.delegatesEdit;
        delegatesEdit
            .clickBySelector('@cancelledOption')

            .clickBySelector('@saveButton');
    },

    'verify status canceled on meeting-summary': function (browser) {
        browser
            .relUrl('/events/2326/meeting-summary');

        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter
            .clickBySelector('@hostedTableMeetingOption');

        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter
            .clickBySelector('@delegateCancellationOption');

        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .moveToElement('@nameColumn', 1298, 597)
            .setValueBySelector('@seachColumn', ['Raymond Lim', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Raymond Lim")
    },
    'return confirmed for delegates': function (browser) {
        browser
            .relUrl('/delegates/edit/148599');

        var delegatesEdit = browser.page.delegates().section.delegatesEdit;
        delegatesEdit
            .clickBySelector('@confirmatedOption')

            .clickBySelector('@saveButton');
    },

    'verify status on meeting-summary after return confirmed': function (browser) {
        browser
            .relUrl('/events/2326/meeting-summary');

        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter
            .clickBySelector('@hostedTableMeetingOption');

        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter
            .clickBySelector('@allOption');

        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .moveToElement('@nameColumn', 1298, 597)
            .setValueBySelector('@seachColumn', ['Raymond Lim', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Raymond Lim")

        meetingStatusFilter
            .clickBySelector('@delegateCancellationOption');
        delegateColumn
            .verify.elementPresent('@noResultsFound');
    },
});
