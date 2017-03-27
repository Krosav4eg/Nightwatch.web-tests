var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'sort by First name up': function (browser) {
        var firstNameColumn = browser.page.representatives().section.firstNameColumn;
        firstNameColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Abdulrahim')
            .verify.containsText('@secondRow', 'Abhinav')
            .verify.containsText('@thirdRow', 'Alaa')
            .verify.containsText('@fourthRow', 'Albert')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Ville')
            .verify.containsText('@secondRow', 'Victor')
            .verify.containsText('@thirdRow', 'Venki')
            .verify.containsText('@fourthRow', 'Varun')
    },

    'search by First name Blank': function (browser) {
        var firstNameColumn = browser.page.representatives().section.firstNameColumn;
        firstNameColumn
            .setValueBySelector('@seachColumn', ['Sanaullah', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Sanaullah')
    },

    'search by First name 3 numbers': function (browser) {
        var firstNameColumn = browser.page.representatives().section.firstNameColumn;
        firstNameColumn
            .setValueBySelector('@seachColumn', ['San', browser.Keys.ENTER])

            .verify.containsText('@firstRow', 'Sanaullah')
    },
});
