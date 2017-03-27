var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by ME Account up': function (browser) {
        var MEAccountColumn = browser.page.representatives().section.MEAccountColumn;
        MEAccountColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'No')
            .verify.containsText('@secondRow', 'No')
            .verify.containsText('@thirdRow', 'No')
            .verify.containsText('@fourthRow', 'No')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'No')
            .verify.containsText('@secondRow', 'No')
            .verify.containsText('@thirdRow', 'No')
            .verify.containsText('@fourthRow', 'No')
    },

    'choose Yes': function (browser) {
        var MEAccountColumn = browser.page.representatives().section.MEAccountColumn;
        MEAccountColumn
            .clickBySelector('@yesOption')

            .verify.elementPresent('@noResultsFound')
    },

    'choose No': function (browser) {
        var MEAccountColumn = browser.page.representatives().section.MEAccountColumn;
        MEAccountColumn
            .clickBySelector('@noOption')

            .verify.containsText('@firstRow', 'No')
            .verify.containsText('@secondRow', 'No')
            .verify.containsText('@thirdRow', 'No')
            .verify.containsText('@fourthRow', 'No')
    },
});
