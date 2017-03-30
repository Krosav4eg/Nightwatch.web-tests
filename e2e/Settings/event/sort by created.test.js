var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event-settings-templates')
    },

    'sort by id down': function (browser) {
        var createdColumn = browser.page.searchTemplate().section.createdColumn;
        createdColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2017-02-27 09:31:50')
            .verify.containsText('@secondRow', '2017-03-01 07:28:36')
            .verify.containsText('@thirdRow', '2017-03-01 07:29:54')
            .verify.containsText('@fourthRow', '2017-03-01 07:30:37')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2017-03-30 11:59:36')
            .verify.containsText('@secondRow', '2017-03-30 11:35:16')
            .verify.containsText('@thirdRow', '2017-03-06 15:29:09')
            .verify.containsText('@fourthRow', '2017-03-02 11:16:05')
    },

    'search by company Blank': function (browser) {
        var createdColumn = browser.page.searchTemplate().section.createdColumn;
        createdColumn

            .setValueBySelector('@seachColumn', ['2017-03-01 08:48:43', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '2017-03-01 08:48:43')
    },
});