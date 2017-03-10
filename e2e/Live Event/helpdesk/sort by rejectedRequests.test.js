var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by rejectedRequests up': function (browser) {
        var rejectedRequestsColumn = browser.page.helpdesk().section.rejectedRequestsColumn;
        rejectedRequestsColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');
    },

    'sort by rejectedRequests down': function (browser) {
        var rejectedRequestsColumn = browser.page.helpdesk().section.rejectedRequestsColumn;
        rejectedRequestsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '7')
            .verify.containsText('@secondRow', '7')
            .verify.containsText('@thirdRow', '6')
            .verify.containsText('@fourthRow', '3');
    },

    'search by rejectedRequests': function (browser) {
        var rejectedRequestsColumn = browser.page.helpdesk().section.rejectedRequestsColumn;
        rejectedRequestsColumn
            .setValueBySelector('@seachColumn', ['2', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "2")
    },
});