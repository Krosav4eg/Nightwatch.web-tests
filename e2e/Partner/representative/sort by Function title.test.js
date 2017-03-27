var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Function title up': function (browser) {
        var functionTitleColumn = browser.page.representatives().section.functionTitleColumn;
        functionTitleColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', 'Business Development Director')
            .verify.containsText('@thirdRow', 'Business Development Manager')
            .verify.containsText('@fourthRow', 'Business Development Manager, Middle East and South Africa')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'VP Middle East')
            .verify.containsText('@secondRow', 'Vice president- Sales')
            .verify.containsText('@thirdRow', 'Vice president MENA- Sales and Marketing and head of insurance')
            .verify.containsText('@fourthRow', 'Toimitusjohtaja')
    },

    'search by Last name Blank': function (browser) {
        var functionTitleColumn = browser.page.representatives().section.functionTitleColumn;
        functionTitleColumn
            .setValueBySelector('@seachColumn', ['Toimitusjohtaja', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Toimitusjohtaja')
    },

    'search by First name 3 numbers': function (browser) {
        var functionTitleColumn = browser.page.representatives().section.functionTitleColumn;
        functionTitleColumn
            .setValueBySelector('@seachColumn', ['Toi', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Toimitusjohtaja')
    },
});
