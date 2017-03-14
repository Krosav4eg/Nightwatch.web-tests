var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary');
    },

    'choose to1meetingOption': function (browser) {
        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter
            .verify.containsText('@meetingTypeSelect', 'All')

            .clickBySelector('@to1meetingOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'choose hostedTableMeetingOption': function (browser) {
        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter
            .clickBySelector('@hostedTableMeetingOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'choose all': function (browser) {
        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter
            .clickBySelector('@allOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },
});