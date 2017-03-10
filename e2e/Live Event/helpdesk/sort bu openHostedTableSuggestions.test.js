var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by openHostedTableSuggestions up': function (browser) {
        var openHostedTableSuggestionsColumn = browser.page.helpdesk().section.openHostedTableSuggestionsColumn;
        openHostedTableSuggestionsColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');
    },

    'sort by openHostedTableSuggestions down': function (browser) {
        var openHostedTableSuggestionsColumn = browser.page.helpdesk().section.openHostedTableSuggestionsColumn;
        openHostedTableSuggestionsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');
    },

    'search by openHostedTableSuggestions': function (browser) {
        var openHostedTableSuggestionsColumn = browser.page.helpdesk().section.openHostedTableSuggestionsColumn;
        openHostedTableSuggestionsColumn
            .setValueBySelector('@seachColumn', ['0', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "0")
    },
});