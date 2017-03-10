var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by open121Requests up': function (browser) {
        var open121RequestsColumn = browser.page.helpdesk().section.open121RequestsColumn;
        open121RequestsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0');

    },

    'sort by open121Requests down': function (browser) {
        var open121RequestsColumn = browser.page.helpdesk().section.open121RequestsColumn;
        open121RequestsColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '8')
            .verify.containsText('@secondRow', '7')
            .verify.containsText('@thirdRow', '7')
            .verify.containsText('@fourthRow', '6');
    },

    'search by open121Requests': function (browser) {
        var open121RequestsColumn = browser.page.helpdesk().section.open121RequestsColumn;
        open121RequestsColumn
            .setValueBySelector('@seachColumn', ['5', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "5")
    },
});