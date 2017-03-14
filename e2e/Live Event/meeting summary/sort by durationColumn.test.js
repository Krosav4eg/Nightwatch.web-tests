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

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');

    },

    'sort by durationColumn down': function (browser) {
        var durationColumn = browser.page.meetingSummary().section.durationColumn;
        durationColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    // 'search by durationColumn': function (browser) {
    //     var durationColumn = browser.page.meetingSummary().section.durationColumn;
    //     durationColumn
    //         .setValueBySelector('@seachColumn', ['1140', browser.Keys.ENTER])
    //
    //         .waitForElementVisible('@firstRow', 3000)
    //         .verify.containsText("@firstRow", "")
    // },
});