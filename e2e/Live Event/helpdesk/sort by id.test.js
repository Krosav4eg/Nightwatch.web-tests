var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by id up': function (browser) {
        var idColumn = browser.page.helpdesk().section.idColumn;
        idColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '#162339')
            .verify.containsText('@secondRow', '#162227')
            .verify.containsText('@thirdRow', '#162222')
            .verify.containsText('@fourthRow', '#162028');

    },

    'sort by id down': function (browser) {
        var idColumn = browser.page.helpdesk().section.idColumn;
        idColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '#96313')
            .verify.containsText('@secondRow', '#96324')
            .verify.containsText('@thirdRow', '#96327')
            .verify.containsText('@fourthRow', '#96328');
    },

    'search by ID': function (browser) {
        var idColumn = browser.page.helpdesk().section.idColumn;
        idColumn
            .setValueBySelector('@seachColumn', ['1140', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "#114018")
    },
});