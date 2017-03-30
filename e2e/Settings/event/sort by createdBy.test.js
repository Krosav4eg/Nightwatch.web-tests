var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event-settings-templates')
    },

    'sort by id down': function (browser) {
        var createdByColumn = browser.page.searchTemplate().section.createdByColumn;
        createdByColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Jonathan Jose')
            .verify.containsText('@secondRow', 'Jonathan Jose')
            .verify.containsText('@thirdRow', 'Jonathan Jose')
            .verify.containsText('@fourthRow', 'Jonathan Jose')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Xsolve Test User')
            .verify.containsText('@secondRow', 'Xsolve Test User')
            .verify.containsText('@thirdRow', 'Xsolve Test User')
            .verify.containsText('@fourthRow', 'Xsolve Test User')
    },

    'search by company Blank': function (browser) {
        var createdByColumn = browser.page.searchTemplate().section.createdByColumn;
        createdByColumn

            .setValueBySelector('@seachColumn', ['Xsolve', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Xsolve Test User')
    },
});