var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event-settings-templates')
    },

    'sort by id down': function (browser) {
        var idColumn = browser.page.searchTemplate().section.idColumn;
        idColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '#11')
            .verify.containsText('@secondRow', '#10')
            .verify.containsText('@thirdRow', '#9')
            .verify.containsText('@fourthRow', '#8')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '#1')
            .verify.containsText('@secondRow', '#2')
            .verify.containsText('@thirdRow', '#3')
            .verify.containsText('@fourthRow', '#4')
    },

    'search by company Blank': function (browser) {
        var idColumn = browser.page.searchTemplate().section.idColumn;
        idColumn

            .setValueBySelector('@seachColumn', ['5', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '#5')
    },
});