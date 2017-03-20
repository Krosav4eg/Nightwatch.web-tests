var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by irstMeetingTime up': function (browser) {
        var firstMeetingTimeColumn = browser.page.checkIn().section.firstMeetingTimeColumn;
        firstMeetingTimeColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'No meetings')
            .verify.containsText('@secondRow', 'No meetings')
            .verify.containsText('@thirdRow', 'No meetings')
            .verify.containsText('@fourthRow', 'No meetings');
    },

    'sort by irstMeetingTime down': function (browser) {
        var firstMeetingTimeColumn = browser.page.checkIn().section.firstMeetingTimeColumn;
        firstMeetingTimeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'No meetings')
            .verify.containsText('@secondRow', 'No meetings')
            .verify.containsText('@thirdRow', 'No meetings')
            .verify.containsText('@fourthRow', 'No meetings');
    },

    'search by irstMeetingTime': function (browser) {
        var firstMeetingTimeColumn = browser.page.checkIn().section.firstMeetingTimeColumn;
        firstMeetingTimeColumn
            .setValueBySelector('@seachColumn', ['No meetings', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "No meetings")
    },
});