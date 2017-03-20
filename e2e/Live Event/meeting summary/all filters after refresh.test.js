var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to check-in': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'verify filter ': function (browser) {
        var meetingTypeFilter = browser.page.meetingSummary().section.meetingTypeFilter;
        var meetingStatusFilter = browser.page.meetingSummary().section.meetingStatusFilter;
        var meetingSourceFilter = browser.page.meetingSummary().section.meetingSourceFilter;
        var meetingTimeFilter = browser.page.meetingSummary().section.meetingTimeFilter;
        var checkingStatusColumn = browser.page.meetingSummary().section.checkingStatusColumn;

        meetingTypeFilter
            .clickBySelector('@to1meetingOption');
        meetingStatusFilter
            .clickBySelector('@cancelledOption');
        meetingSourceFilter
            .clickBySelector('@requestOption');
        meetingTimeFilter
            .clickBySelector('@firstDay');

        meetingTypeFilter
            .verify.containsText('@meetingTypeSelect', '1-to-1 meeting');
        meetingStatusFilter
            .verify.containsText('@meetingTypeSelect', 'Cancelled');
        meetingSourceFilter
            .verify.containsText('@meetingTypeSelect', 'Request');
        meetingTimeFilter
            .verify.containsText('@meetingTypeSelect', '2017-03-16');

        meetingTypeFilter
            .clickBySelector('@hostedTableMeetingOption');

        meetingStatusFilter
            .verify.containsText('@meetingTypeSelect', 'Cancelled');
        meetingSourceFilter
            .verify.containsText('@meetingTypeSelect', 'Request');
        meetingTimeFilter
            .verify.containsText('@meetingTypeSelect', '2017-03-16');

        meetingStatusFilter
            .clickBySelector('@bookedOption');

        meetingTypeFilter
            .verify.containsText('@meetingTypeSelect', 'Hosted table meeting');
        meetingStatusFilter
            .verify.containsText('@meetingTypeSelect', 'Booked');
        meetingSourceFilter
            .verify.containsText('@meetingTypeSelect', 'Request');
        meetingTimeFilter
            .verify.containsText('@meetingTypeSelect', '2017-03-16');

        meetingSourceFilter
            .clickBySelector('@additionalOption');

        meetingTypeFilter
            .verify.containsText('@meetingTypeSelect', 'Hosted table meeting');
        meetingStatusFilter
            .verify.containsText('@meetingTypeSelect', 'Booked');
        meetingSourceFilter
            .verify.containsText('@meetingTypeSelect', 'Additional');
        meetingTimeFilter
            .verify.containsText('@meetingTypeSelect', '2017-03-16');

        checkingStatusColumn
            .clickBySelector('@okOption');

        meetingTypeFilter
            .verify.containsText('@meetingTypeSelect', 'Hosted table meeting');
        meetingStatusFilter
            .verify.containsText('@meetingTypeSelect', 'Booked');
        meetingSourceFilter
            .verify.containsText('@meetingTypeSelect', 'Additional');
        meetingTimeFilter
            .verify.containsText('@meetingTypeSelect', '2017-03-16');
    },
});