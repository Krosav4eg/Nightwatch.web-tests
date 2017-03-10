var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by bookedMeetings up': function (browser) {
        var bookedMeetingsColumn = browser.page.helpdesk().section.bookedMeetingsColumn;
        bookedMeetingsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');

    },

    'sort by bookedMeetings down': function (browser) {
        var bookedMeetingsColumn = browser.page.helpdesk().section.bookedMeetingsColumn;
        bookedMeetingsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '8')
            .verify.containsText('@secondRow', '8')
            .verify.containsText('@thirdRow', '7')
            .verify.containsText('@fourthRow', '7');
    },

    'search by bookedMeetings': function (browser) {
        var bookedMeetingsColumn = browser.page.helpdesk().section.bookedMeetingsColumn;
        bookedMeetingsColumn
            .setValueBySelector('@seachColumn', ['5', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "5")
    },
});