var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by called up': function (browser) {
        var calledColumn = browser.page.checkIn().section.calledColumn;
        calledColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'sort by called down': function (browser) {
        var calledColumn = browser.page.checkIn().section.calledColumn;
        calledColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2017-03-16 17:08:39')
            .verify.containsText('@secondRow', '2017-02-21 13:21:56')
            .verify.containsText('@thirdRow', '2017-02-21 13:20:41')
            .verify.containsText('@fourthRow', '2017-02-21 12:16:36');
    },

    'search by called': function (browser) {
        var calledColumn = browser.page.checkIn().section.calledColumn;
        calledColumn
            .setValueBySelector('@seachColumn', ['2017-02-21 12:16:36', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "2017-02-21 12:16:36")
    },
});