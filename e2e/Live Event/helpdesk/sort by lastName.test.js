var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by lastName up': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Aarnihuhta')
            .verify.containsText('@secondRow', 'Ahtikari')
            .verify.containsText('@thirdRow', 'Ala-Louko')
            .verify.containsText('@fourthRow', 'Alanko');

    },

    'sort by lastName down': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Ylönen')
            .verify.containsText('@secondRow', 'Välimaa')
            .verify.containsText('@thirdRow', 'Vuoripelto')
            .verify.containsText('@fourthRow', 'Virtala');
    },

    'search by lastName': function (browser) {
        var lastNameColumn = browser.page.helpdesk().section.lastNameColumn;
        lastNameColumn
            .setValueBySelector('@seachColumn', ['Terho', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Terho")
    },
});