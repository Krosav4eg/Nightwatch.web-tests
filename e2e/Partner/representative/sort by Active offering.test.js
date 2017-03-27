var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Active offering up': function (browser) {
        var activeOfferingColumn = browser.page.representatives().section.activeOfferingColumn;
        activeOfferingColumn
            .moveToElement('@nameColumn', 1298, 597)

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0')
    },

    'sort by Active offering down': function (browser) {
        var activeOfferingColumn = browser.page.representatives().section.activeOfferingColumn;
        activeOfferingColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '0')
            .verify.containsText('@secondRow', '0')
            .verify.containsText('@thirdRow', '0')
            .verify.containsText('@fourthRow', '0')
    },
});
