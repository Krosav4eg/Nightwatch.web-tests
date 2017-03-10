var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by called up': function (browser) {
        var calledColumn = browser.page.helpdesk().section.calledColumn;
        calledColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'sort by called down': function (browser) {
        var calledColumn = browser.page.helpdesk().section.calledColumn;
        calledColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2017-03-07 10:46:30')
            .verify.containsText('@secondRow', '2017-02-10 09:00:20')
            .verify.containsText('@thirdRow', '2017-02-09 14:22:30')
            .verify.containsText('@fourthRow', '2017-02-09 10:17:55');
    },

    'search by called': function (browser) {
        var calledColumn = browser.page.helpdesk().section.calledColumn;
        calledColumn
            .setValueBySelector('@seachColumn', ['2017-01-26 08:54:47', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "2017-01-26 08:54:47")
    },
});