var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by company up': function (browser) {
        var companyColumn = browser.page.checkIn().section.companyColumn;
        companyColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'AB Svenska Spel')
            .verify.containsText('@secondRow', 'ABB Oy, Functions & Services')
            .verify.containsText('@thirdRow', 'AGCO Power Oy')
            .verify.containsText('@fourthRow', 'AGCO Power Oy');

    },

    'sort by company down': function (browser) {
        var companyColumn = browser.page.checkIn().section.companyColumn;
        companyColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'ÅF AB')
            .verify.containsText('@secondRow', 'ÅF AB')
            .verify.containsText('@thirdRow', 'Zebra A/S (Flying tiger)')
            .verify.containsText('@fourthRow', 'Wärtsilä Finland Oy');
    },

    'search by company': function (browser) {
        var companyColumn = browser.page.checkIn().section.companyColumn;
        companyColumn
            .setValueBySelector('@seachColumn', ['Tieto', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Tieto Sweden AB")
    },
});