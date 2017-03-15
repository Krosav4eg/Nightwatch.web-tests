var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by delegateColumn up': function (browser) {
        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Anders Duer Pedersen')
            .verify.containsText('@secondRow', 'Anders Fritz')
            .verify.containsText('@thirdRow', 'Anders Fritz')
            .verify.containsText('@fourthRow', 'Anders Fritz');

    },

    'sort by delegateColumn down': function (browser) {
        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Ville Halonen')
            .verify.containsText('@secondRow', 'Vagn Hundebøll')
            .verify.containsText('@thirdRow', 'Urban Svensson')
            .verify.containsText('@fourthRow', 'Urban Svensson');
    },

    'search by delegateColumn': function (browser) {
        var delegateColumn = browser.page.meetingSummary().section.delegateColumn;
        delegateColumn
            .setValueBySelector('@seachColumn', ['Bo Jacobsen', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Bo Jacobsen")
    },
});