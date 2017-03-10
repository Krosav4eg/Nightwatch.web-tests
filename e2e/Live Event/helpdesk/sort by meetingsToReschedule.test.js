var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by meetingsToReschedule up': function (browser) {
        var meetingsToRescheduleColumn = browser.page.helpdesk().section.meetingsToRescheduleColumn;
        meetingsToRescheduleColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');
    },

    'sort by meetingsToReschedule down': function (browser) {
        var meetingsToRescheduleColumn = browser.page.helpdesk().section.meetingsToRescheduleColumn;
        meetingsToRescheduleColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '1')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');
    },

    'search by meetingsToReschedule': function (browser) {
        var meetingsToRescheduleColumn = browser.page.helpdesk().section.meetingsToRescheduleColumn;
        meetingsToRescheduleColumn
            .setValueBySelector('@seachColumn', ['0', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "0")
    },
});