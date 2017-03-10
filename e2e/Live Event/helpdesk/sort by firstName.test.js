var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by firstName up': function (browser) {
        var firstNameColumn = browser.page.helpdesk().section.firstNameColumn;
        firstNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Aleksi')
            .verify.containsText('@secondRow', 'Alja')
            .verify.containsText('@thirdRow', 'Anna')
            .verify.containsText('@fourthRow', 'Anne');

    },

    'sort by firstName down': function (browser) {
        var firstNameColumn = browser.page.helpdesk().section.firstNameColumn;
        firstNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Ville')
            .verify.containsText('@secondRow', 'Ville')
            .verify.containsText('@thirdRow', 'Ville')
            .verify.containsText('@fourthRow', 'Ville');
    },

    'search by firstName': function (browser) {
        var firstNameColumn = browser.page.helpdesk().section.firstNameColumn;
        firstNameColumn
            .setValueBySelector('@seachColumn', ['Taru', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Taru")
    },
});