var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by durationColumn up': function (browser) {
        var durationColumn = browser.page.meetingSummary().section.durationColumn;
        durationColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '15 min')
            .verify.containsText('@secondRow', '15 min')
            .verify.containsText('@thirdRow', '15 min')
            .verify.containsText('@fourthRow', '15 min');

    },

    'sort by durationColumn down': function (browser) {
        var durationColumn = browser.page.meetingSummary().section.durationColumn;
        durationColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '20 min')
            .verify.containsText('@secondRow', '20 min')
            .verify.containsText('@thirdRow', '20 min')
            .verify.containsText('@fourthRow', '20 min');
    },

    'search by durationColumn': function (browser) {
        var durationColumn = browser.page.meetingSummary().section.durationColumn;
        durationColumn
            .setValueBySelector('@seachColumn', ['15', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "15 min")
    },
});