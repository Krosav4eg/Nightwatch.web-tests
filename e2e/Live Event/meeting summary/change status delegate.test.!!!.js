var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/delegates/edit/115153');
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

        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@allOption');

        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .moveToElement('@nameColumn', 1298, 597)
            .setValueBySelector('@seachColumn', ['Scott Dunn', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Scott Dunn")

        meetingStatusFilter
            .clickBySelector('@cancelledOption');
        delegateColumn
            .verify.elementPresent('@noResultsFound');
    },

    'select cancel for delegates': function (browser) {
        browser
            .relUrl('/delegates/edit/115153');

        var delegatesEdit = browser.page.delegates().section.delegatesEdit;
        delegatesEdit
            .clickBySelector('@cancelledOption')

            .clickBySelector('@saveButton');
    },

    'verify status canceled on meeting-summary': function (browser) {
        browser
            .relUrl('/events/2326/meeting-summary');

        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@cancelledOption');

        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .moveToElement('@nameColumn', 1298, 597)
            .setValueBySelector('@seachColumn', ['Scott Dunn', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Scott Dunn")
    },
    'return confirmed for delegates': function (browser) {
        browser
            .relUrl('/delegates/edit/115153');

        var delegatesEdit = browser.page.delegates().section.delegatesEdit;
        delegatesEdit
            .clickBySelector('@confirmatedOption')

            .clickBySelector('@saveButton');
    },

    'verify status on meeting-summary after return confirmed': function (browser) {
        browser
            .relUrl('/events/2326/meeting-summary');

        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        meetingStatusFilter

            .clickBySelector('@allOption');

        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .moveToElement('@nameColumn', 1298, 597)
            .setValueBySelector('@seachColumn', ['Scott Dunn', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Scott Dunn")

        meetingStatusFilter
            .clickBySelector('@cancelledOption');
        delegateColumn
            .verify.elementPresent('@noResultsFound');
    },
});
