var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by meetingTypeColumn up': function (browser) {
        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '1-to-1 meeting')
            .verify.containsText('@secondRow', '1-to-1 meeting')
            .verify.containsText('@thirdRow', '1-to-1 meeting')
            .verify.containsText('@fourthRow', '1-to-1 meeting');

    },

    'sort by meetingTypeColumn down': function (browser) {
        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Hosted table meeting')
            .verify.containsText('@secondRow', 'Hosted table meeting')
            .verify.containsText('@thirdRow', 'Hosted table meeting')
            .verify.containsText('@fourthRow', 'Hosted table meeting');
    },

    'search by meetingTypeColumn': function (browser) {
        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .setValueBySelector('@seachColumn', ['1-to-1 meeting', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "1-to-1 meeting")
    },
});