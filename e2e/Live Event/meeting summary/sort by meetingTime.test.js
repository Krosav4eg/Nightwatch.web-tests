var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by meetingTimeColumn up': function (browser) {
        var meetingTimeColumn = browser.page.meetingSummary().section.meetingTimeColumn;
        meetingTimeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2017-03-17 10:45:00 - 2017-03-17 11:00:00')
            .verify.containsText('@secondRow', '2017-03-17 10:30:00 - 2017-03-17 10:45:00')
            .verify.containsText('@thirdRow', '2017-03-17 10:30:00 - 2017-03-17 10:45:00')
            .verify.containsText('@fourthRow', '2017-03-17 10:15:00 - 2017-03-17 10:30:00');

    },

    'sort by meetingTimeColumn down': function (browser) {
        var meetingTimeColumn = browser.page.meetingSummary().section.meetingTimeColumn;
        meetingTimeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2017-03-16 10:00:00 - 2017-03-16 10:15:00')
            .verify.containsText('@secondRow', '2017-03-16 10:00:00 - 2017-03-16 10:15:00')
            .verify.containsText('@thirdRow', '2017-03-16 10:00:00 - 2017-03-16 10:15:00')
            .verify.containsText('@fourthRow', '2017-03-16 10:00:00 - 2017-03-16 10:15:00');
    },

    'search by meetingTimeColumn': function (browser) {
        var meetingTimeColumn = browser.page.meetingSummary().section.meetingTimeColumn;
        meetingTimeColumn
            .setValueBySelector('@seachColumn', ['2017-03-16 10:00:00', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "2017-03-16 10:00:00 - 2017-03-16 10:15:00")
    },
});