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

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');

    },

    'sort by meetingTypeColumn down': function (browser) {
        var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
        meetingTypeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    // 'search by meetingTypeColumn': function (browser) {
    //     var meetingTypeColumn = browser.page.meetingSummary().section.meetingTypeColumn;
    //     meetingTypeColumn
    //         .setValueBySelector('@seachColumn', ['1140', browser.Keys.ENTER])
    //
    //         .waitForElementVisible('@firstRow', 3000)
    //         .verify.containsText("@firstRow", "")
    // },
});