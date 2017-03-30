var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event-settings-templates')
    },

    'sort by id down': function (browser) {
        var modifiedColumn = browser.page.searchTemplate().section.modifiedColumn;
        modifiedColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2017-03-01 07:30:42')
            .verify.containsText('@secondRow', '2017-03-01 07:34:16')
            .verify.containsText('@thirdRow', '2017-03-01 08:48:43')
            .verify.containsText('@fourthRow', '2017-03-02 11:00:55')

            .clickBySelector('@nameColumn')
            .verify.containsText('@firstRow', '2017-03-30 11:59:36')
            .verify.containsText('@secondRow', '2017-03-30 11:36:54')
            .verify.containsText('@thirdRow', '2017-03-06 15:43:25')
            .verify.containsText('@fourthRow', '2017-03-06 15:42:40')

    },

    'search by company Blank': function (browser) {
        var modifiedColumn = browser.page.searchTemplate().section.modifiedColumn;
        modifiedColumn

            .setValueBySelector('@seachColumn', ['2017-03-02 11:14:12', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '2017-03-02 11:14:12')
    },
});