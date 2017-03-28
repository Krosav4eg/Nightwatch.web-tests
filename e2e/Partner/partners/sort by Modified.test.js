var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'sort by Modified up': function (browser) {
        var modifiedColumn = browser.page.partners().section.modifiedColumn;
        modifiedColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2016-07-01 15:01:14')
            .verify.containsText('@secondRow', '2016-07-01 15:01:14')
            .verify.containsText('@thirdRow', '2016-07-01 15:01:14')
            .verify.containsText('@fourthRow', '2016-07-01 15:01:15')
    },

    'sort by Modified down': function (browser) {
        var modifiedColumn = browser.page.partners().section.modifiedColumn;
        modifiedColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '2017-03-02 14:01:01')
            .verify.containsText('@secondRow', '2016-07-01 15:01:16')
            .verify.containsText('@thirdRow', '2016-07-01 15:01:16')
            .verify.containsText('@fourthRow', '2016-07-01 15:01:16')
    },

    'search by Modified Blank': function (browser) {
        var modifiedColumn = browser.page.partners().section.modifiedColumn;
        modifiedColumn
            .setValueBySelector('@seachColumn', ['2016-07-01', browser.Keys.ENTER])

            .verify.containsText('@firstRow', '2016-07-01 15:01:14')
    },
});
