var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary');
    },

    'choose first day': function (browser) {
        var meetingTimeFilter = browser.page.meetingSummary().section.meetingTimeFilter;
        var meetingTimeColumn = browser.page.meetingSummary().section.meetingTimeColumn;
        meetingTimeFilter
            .clickBySelector('@firstDay');

        meetingTimeColumn
            .verify.containsText('@firstRow', "2017-03-16 10:00:00 - 2017-03-16 10:15:00")
            .verify.containsText('@secondRow', "2017-03-16 10:00:00 - 2017-03-16 10:15:00")
            .verify.containsText('@thirdRow', "2017-03-16 10:00:00 - 2017-03-16 10:15:00")
            .verify.containsText('@fourthRow', "2017-03-16 10:00:00 - 2017-03-16 10:15:00");
    },

    'choose all': function (browser) {
        var meetingTimeFilter = browser.page.meetingSummary().section.meetingTimeFilter;
        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTimeFilter
            .clickBySelector('@allOption');
        meetingTypeColumn
            .verify.elementPresent('@noResultsFound');
    },

    'choose second day': function (browser) {
        var meetingTimeFilter = browser.page.meetingSummary().section.meetingTimeFilter;
        var meetingTimeColumn = browser.page.meetingSummary().section.meetingTimeColumn;
        meetingTimeFilter
            .clickBySelector('@secondDay');

        meetingTimeColumn
            .verify.containsText('@firstRow', "2017-03-17 10:00:00 - 2017-03-17 10:15:00")
            .verify.containsText('@secondRow', "2017-03-17 10:00:00 - 2017-03-17 10:15:00")
            .verify.containsText('@thirdRow', "2017-03-17 10:00:00 - 2017-03-17 10:15:00")
            .verify.containsText('@fourthRow', "2017-03-17 10:00:00 - 2017-03-17 10:15:00");
    },
    'choose any data': function (browser) {
        var meetingSummary = browser.page.meetingSummary();
        var meetingTimeColumn = browser.page.meetingSummary().section.meetingTimeColumn;
        meetingSummary
            .clickByDateOption('2017-03-16', '10:00');

        meetingTimeColumn
            .verify.containsText('@firstRow', "2017-03-16 10:00:00 - 2017-03-16 10:15:00")
            .verify.containsText('@secondRow', "2017-03-16 10:00:00 - 2017-03-16 10:15:00")
            .verify.containsText('@thirdRow', "2017-03-16 10:00:00 - 2017-03-16 10:15:00")
            .verify.containsText('@fourthRow', "2017-03-16 10:00:00 - 2017-03-16 10:15:00");

        meetingSummary
            .clickByDateOption('2017-03-16', '15:15');

        meetingTimeColumn
            .verify.containsText('@firstRow', "2017-03-16 15:15:00 - 2017-03-16 15:30:00")
            .verify.containsText('@secondRow', "2017-03-16 15:15:00 - 2017-03-16 15:30:00")
            .verify.containsText('@thirdRow', "2017-03-16 15:15:00 - 2017-03-16 15:30:00")
            .verify.containsText('@fourthRow', "2017-03-16 15:15:00 - 2017-03-16 15:30:00");
    },
});