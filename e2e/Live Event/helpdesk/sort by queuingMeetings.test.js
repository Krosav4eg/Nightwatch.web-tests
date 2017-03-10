var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by queuingMeetings up': function (browser) {
        var queuingMeetingsColumn = browser.page.helpdesk().section.queuingMeetingsColumn;
        queuingMeetingsColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');
    },

    'sort by queuingMeetings down': function (browser) {
        var queuingMeetingsColumn = browser.page.helpdesk().section.queuingMeetingsColumn;
        queuingMeetingsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '3')
            .verify.containsText('@secondRow', '2')
            .verify.containsText('@thirdRow', '1')
            .verify.containsText('@fourthRow', '1');
    },

    'search by queuingMeetings': function (browser) {
        var queuingMeetingsColumn = browser.page.helpdesk().section.queuingMeetingsColumn;
        queuingMeetingsColumn
            .setValueBySelector('@seachColumn', ['2', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "2")
    },
});