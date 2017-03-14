var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by attendanceStatusColumn up': function (browser) {
        var attendanceStatusColumn = browser.page.meetingSummary().section.attendanceStatusColumn;
        attendanceStatusColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Not Arrived')
            .verify.containsText('@secondRow', 'Not Arrived')
            .verify.containsText('@thirdRow', 'Not Arrived')
            .verify.containsText('@fourthRow', 'Not Arrived');

    },

    'sort by attendanceStatusColumn down': function (browser) {
        var attendanceStatusColumn = browser.page.meetingSummary().section.attendanceStatusColumn;
        attendanceStatusColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Not Arrived')
            .verify.containsText('@secondRow', 'Not Arrived')
            .verify.containsText('@thirdRow', 'Not Arrived')
            .verify.containsText('@fourthRow', 'Not Arrived');
    },

    // 'search by attendanceStatusColumn': function (browser) {
    //     var attendanceStatusColumn = browser.page.meetingSummary().section.attendanceStatusColumn;
    //     attendanceStatusColumn
    //         .setValueBySelector('@seachColumn', ['Not Arrived', browser.Keys.ENTER])
    //
    //         .waitForElementVisible('@firstRow', 3000)
    //         .verify.containsText("@firstRow", "Not Arrived")
    // },
});