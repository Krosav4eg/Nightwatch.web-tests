var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
    },

    'choose Show all': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@showAllFilterOption')

        var firstNameColumn = browser.page.representatives().section.firstNameColumn;
        firstNameColumn
            .verify.containsText('@firstRow', 'Mohd')
            .verify.containsText('@secondRow', 'Ville')
            .verify.containsText('@thirdRow', 'Khuram')
            .verify.containsText('@fourthRow', 'Asif')
    },

    'choose Show cancelled': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@showCancelledFilterOption')

        var firstNameColumn = browser.page.representatives().section.firstNameColumn;
        firstNameColumn

            .verify.elementPresent('@noResultsFound')
    },

    'choose Show only active': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@showOnlyActiveFilterOption')

        var firstNameColumn = browser.page.representatives().section.firstNameColumn;
        firstNameColumn
            .verify.containsText('@firstRow', 'Mohd')
            .verify.containsText('@secondRow', 'Ville')
            .verify.containsText('@thirdRow', 'Khuram')
            .verify.containsText('@fourthRow', 'Asif')
    },

    'clock reset all': function (browser) {
        var allInformation = browser.page.representatives().section.allInformation;
        allInformation
            .clickBySelector('@resetAllButton')

        var firstNameColumn = browser.page.representatives().section.firstNameColumn;
        firstNameColumn
            .verify.containsText('@firstRow', 'Mohd')
            .verify.containsText('@secondRow', 'Ville')
            .verify.containsText('@thirdRow', 'Khuram')
            .verify.containsText('@fourthRow', 'Asif')
    },
});
