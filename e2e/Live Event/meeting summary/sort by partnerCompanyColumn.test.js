var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to meeting-summary': function (browser) {
        browser
            .relUrl('/events/2339/meeting-summary')
    },

    'sort by partnerCompanyColumn up': function (browser) {
        var partnerCompanyColumn = browser.page.meetingSummary().section.partnerCompanyColumn;
        partnerCompanyColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Accenture')
            .verify.containsText('@secondRow', 'Accenture')
            .verify.containsText('@thirdRow', 'Accenture')
            .verify.containsText('@fourthRow', 'Accenture');

    },

    'sort by partnerCompanyColumn down': function (browser) {
        var partnerCompanyColumn = browser.page.meetingSummary().section.partnerCompanyColumn;
        partnerCompanyColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Vattenfall')
            .verify.containsText('@secondRow', 'Vattenfall')
            .verify.containsText('@thirdRow', 'Vattenfall')
            .verify.containsText('@fourthRow', 'Vattenfall');
    },

    'search by partnerCompanyColumn': function (browser) {
        var partnerCompanyColumn = browser.page.meetingSummary().section.partnerCompanyColumn;
        partnerCompanyColumn
            .setValueBySelector('@seachColumn', ['SynerTrad', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "SynerTrad")
    },
});