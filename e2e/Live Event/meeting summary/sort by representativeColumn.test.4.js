var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by representativeColumn up': function (browser) {
        var representativeColumn = browser.page.meetingSummary().section.representativeColumn;
        representativeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Alex Tesdorf')
            .verify.containsText('@secondRow', 'Alex Tesdorf')
            .verify.containsText('@thirdRow', 'Alex Tesdorf')
            .verify.containsText('@fourthRow', 'Alex Tesdorf');

    },

    'sort by representativeColumn down': function (browser) {
        var representativeColumn = browser.page.meetingSummary().section.representativeColumn;
        representativeColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Will Edward')
            .verify.containsText('@secondRow', 'Will Edward')
            .verify.containsText('@thirdRow', 'Will Edward')
            .verify.containsText('@fourthRow', 'Will Edward');
    },

    'search by representativeColumn': function (browser) {
        var representativeColumn = browser.page.meetingSummary().section.representativeColumn;
        representativeColumn
            .setValueBySelector('@seachColumn', ['Sujay Dutta', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Sujay Dutta")
    },
});