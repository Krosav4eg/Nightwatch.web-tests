var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by delegateColumn up': function (browser) {
        var delegateCompanyColumn = browser.page.meetingSummary().section.delegateCompanyColumn;
        delegateCompanyColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'AB Svenska Spel')
            .verify.containsText('@secondRow', 'AB Svenska Spel')
            .verify.containsText('@thirdRow', 'AB Svenska Spel')
            .verify.containsText('@fourthRow', 'AB Svenska Spel');

    },

    'sort by delegateColumn down': function (browser) {
        var delegateCompanyColumn = browser.page.meetingSummary().section.delegateCompanyColumn;
        delegateCompanyColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Zebra A/S (Flying tiger)')
            .verify.containsText('@secondRow', 'Wärtsilä Finland Oy')
            .verify.containsText('@thirdRow', 'Wärtsilä Finland Oy')
            .verify.containsText('@fourthRow', 'Wärtsilä Finland Oy');
    },

    'search by delegateColumn': function (browser) {
        var delegateCompanyColumn = browser.page.meetingSummary().section.delegateCompanyColumn;
        delegateCompanyColumn
            .setValueBySelector('@seachColumn', ['Bong AB', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Bong AB")
    },
});