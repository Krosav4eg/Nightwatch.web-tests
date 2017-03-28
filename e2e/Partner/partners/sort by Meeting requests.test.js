var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'sort by  Meeting requests up': function (browser) {
        var meetingRequestsColumn = browser.page.partners().section.meetingRequestsColumn;
        meetingRequestsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0')
    },

    'sort by  Meeting requests down': function (browser) {
        var meetingRequestsColumn = browser.page.partners().section.meetingRequestsColumn;
        meetingRequestsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0')
    },

    'search by  Meeting requests Blank': function (browser) {
        var meetingRequestsColumn = browser.page.partners().section.meetingRequestsColumn;
        meetingRequestsColumn
            .setValueBySelector('@seachColumn', ['0', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '0')
    },
});
