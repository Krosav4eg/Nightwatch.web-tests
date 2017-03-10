var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by open121Requests up': function (browser) {
        var open121suggestionsColumn = browser.page.helpdesk().section.open121suggestionsColumn;
        open121suggestionsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');

    },

    'sort by open121Requests down': function (browser) {
        var open121suggestionsColumn = browser.page.helpdesk().section.open121suggestionsColumn;
        open121suggestionsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');
    },

    'search by open121Requests': function (browser) {
        var open121suggestionsColumn = browser.page.helpdesk().section.open121suggestionsColumn;
        open121suggestionsColumn
            .setValueBySelector('@seachColumn', ['0', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "0")
    },
});