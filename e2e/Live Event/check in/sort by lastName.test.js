var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by lastName up': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Alitalo')
            .verify.containsText('@secondRow', 'Alknert')
            .verify.containsText('@thirdRow', 'Andersson')
            .verify.containsText('@fourthRow', 'Andersson');

    },

    'sort by lastName down': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Ylänen')
            .verify.containsText('@secondRow', 'Yli-Marttila')
            .verify.containsText('@thirdRow', 'Würtz')
            .verify.containsText('@fourthRow', 'Wood');
    },

    'search by lastName': function (browser) {
        var lastNameColumn = browser.page.checkIn().section.lastNameColumn;
        lastNameColumn
            .setValueBySelector('@seachColumn', ['Tollin', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Tollin")
    },
});