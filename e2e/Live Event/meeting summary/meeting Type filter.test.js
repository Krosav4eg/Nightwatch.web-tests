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
            .verify.containsText('@firstRow', '1-to-1 meeting')
            .verify.containsText('@secondRow', '1-to-1 meeting')
            .verify.containsText('@thirdRow', '1-to-1 meeting')
            .verify.containsText('@fourthRow', '1-to-1 meeting');
    },

    'choose hostedTableMeetingOption': function (browser) {
        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter
            .clickBySelector('@hostedTableMeetingOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', 'Hosted table meeting')
            .verify.containsText('@secondRow', 'Hosted table meeting')
            .verify.containsText('@thirdRow', 'Hosted table meeting')
            .verify.containsText('@fourthRow', 'Hosted table meeting');
    },

    'choose all': function (browser) {
        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        meetingTypeFilter
            .clickBySelector('@allOption');

        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .verify.containsText('@firstRow', '1-to-1 meeting')
            .verify.containsText('@secondRow', '1-to-1 meeting')
            .verify.containsText('@thirdRow', '1-to-1 meeting')
            .verify.containsText('@fourthRow', '1-to-1 meeting');
    },
});