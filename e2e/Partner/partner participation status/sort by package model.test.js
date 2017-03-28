var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-participation-status')
    },
    'sort by package up': function (browser) {
        var packagMobileColumn = browser.page.partnerParticipationStatus().section.packagMobileColumn;
        packagMobileColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '')
    },

    'chose options': function (browser) {
        var packagMobileColumn = browser.page.partnerParticipationStatus().section.packagMobileColumn;
        packagMobileColumn

            .clickBySelector('@eventBasedOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@creditBasedOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@allOption')
            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '')
    },
});
