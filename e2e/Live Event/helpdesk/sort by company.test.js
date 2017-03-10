var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by company up': function (browser) {
        var companyColumn = browser.page.helpdesk().section.companyColumn;
        companyColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Alko Oy')
            .verify.containsText('@secondRow', 'Aller Media Oy')
            .verify.containsText('@thirdRow', 'Anvia Oyj')
            .verify.containsText('@fourthRow', 'Asianajotoimisto Castrén & Snellman Oy');

    },

    'sort by company down': function (browser) {
        var companyColumn = browser.page.helpdesk().section.companyColumn;
        companyColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Yleisradio Oy')
            .verify.containsText('@secondRow', 'Yleisradio Oy')
            .verify.containsText('@thirdRow', 'Yleisradio Oy')
            .verify.containsText('@fourthRow', 'Würth Oy');
    },

    'search by company': function (browser) {
        var companyColumn = browser.page.helpdesk().section.companyColumn;
        companyColumn
            .setValueBySelector('@seachColumn', ['Tapio', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Tapio Oy")
    },
});