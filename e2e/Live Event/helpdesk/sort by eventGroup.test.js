var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by eventGroup up': function (browser) {
        var eventGroupColumn = browser.page.helpdesk().section.eventGroupColumn;
        eventGroupColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '1- Orange')
            .verify.containsText('@fourthRow', '1- Orange');

    },

    'sort by eventGroup down': function (browser) {
        var eventGroupColumn = browser.page.helpdesk().section.eventGroupColumn;
        eventGroupColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2- Purple')
            .verify.containsText('@secondRow', '2- Purple')
            .verify.containsText('@thirdRow', '2- Purple')
            .verify.containsText('@fourthRow', '2- Purple');
    },

    'search by eventGroup': function (browser) {
        var eventGroupColumn = browser.page.helpdesk().section.eventGroupColumn;
        eventGroupColumn
            .setValueBySelector('@seachColumn', ['Orange', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "1- Orange")
    },
});