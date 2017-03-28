var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'sort by Created up': function (browser) {
        var createdColumn = browser.page.partners().section.createdColumn;
        createdColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2015-03-26 14:52:31')
            .verify.containsText('@secondRow', '2015-03-26 14:52:31')
            .verify.containsText('@thirdRow', '2015-03-26 14:52:31')
            .verify.containsText('@fourthRow', '2015-03-26 14:52:31')
    },

    'sort by Created down': function (browser) {
        var createdColumn = browser.page.partners().section.createdColumn;
        createdColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2015-03-26 14:52:31')
            .verify.containsText('@secondRow', '2015-03-26 14:52:31')
            .verify.containsText('@thirdRow', '2015-03-26 14:52:31')
            .verify.containsText('@fourthRow', '2015-03-26 14:52:31')
    },

    'search by Created Blank': function (browser) {
        var createdColumn = browser.page.partners().section.createdColumn;
        createdColumn
            .setValueBySelector('@seachColumn', ['2015-03-26', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '2015-03-26 14:52:31')
    },
});
