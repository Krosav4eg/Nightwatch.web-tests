var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by firstName up': function (browser) {
        var firstNameColumn = browser.page.checkIn().section.firstNameColumn;
        firstNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Allan')
            .verify.containsText('@secondRow', 'Alyona')
            .verify.containsText('@thirdRow', 'Anders')
            .verify.containsText('@fourthRow', 'Anders');

    },

    'sort by firstName down': function (browser) {
        var firstNameColumn = browser.page.checkIn().section.firstNameColumn;
        firstNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Ville')
            .verify.containsText('@secondRow', 'Ville')
            .verify.containsText('@thirdRow', 'Vesa')
            .verify.containsText('@fourthRow', 'Vagn');
    },

    'search by firstName': function (browser) {
        var firstNameColumn = browser.page.checkIn().section.firstNameColumn;
        firstNameColumn
            .setValueBySelector('@seachColumn', ['Tomi', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Tomi")
    },
});