var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
    },

    'choose Show all': function (browser) {
        var allInformation = browser.page.partners().section.allInformation;
        allInformation
            .clickBySelector('@showAllFilterOption');

        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed');
    },

    'choose Show cancelled': function (browser) {
        var allInformation = browser.page.partners().section.allInformation;
        allInformation
            .clickBySelector('@showCancelledFilterOption');
        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn

            .verify.elementPresent('@noResultsFound');
    },

    'choose Show only active': function (browser) {
        var allInformation = browser.page.partners().section.allInformation;
        allInformation
            .clickBySelector('@showOnlyActiveFilterOption');

        var participationStatusColumn = browser.page.partners().section.participationStatusColumn;
        participationStatusColumn

            .verify.containsText('@firstRow', 'Confirmed')
            .verify.containsText('@secondRow', 'Confirmed')
            .verify.containsText('@thirdRow', 'Confirmed')
            .verify.containsText('@fourthRow', 'Confirmed');
    },
});
