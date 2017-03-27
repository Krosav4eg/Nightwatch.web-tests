var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by Last name up': function (browser) {
        var lastNameColumn = browser.page.representatives().section.lastNameColumn;
        lastNameColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Abdullah')
            .verify.containsText('@secondRow', 'Abdulwahid')
            .verify.containsText('@thirdRow', 'Abou Rahal')
            .verify.containsText('@fourthRow', 'Adeeb')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Zameer')
            .verify.containsText('@secondRow', 'VS')
            .verify.containsText('@thirdRow', 'Tyagi')
            .verify.containsText('@fourthRow', 'Tantawi')
    },

    'search by Last name Blank': function (browser) {
        var lastNameColumn = browser.page.representatives().section.lastNameColumn;
        lastNameColumn
            .setValueBySelector('@seachColumn', ['Tantawi', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Tantawi')
    },

    'search by First name 3 numbers': function (browser) {
        var lastNameColumn = browser.page.representatives().section.lastNameColumn;
        lastNameColumn
            .setValueBySelector('@seachColumn', ['Tan', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Tantawi')
    },
});
