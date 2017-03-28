var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-participation-status')
    },

    'sort by Rebooked to next up': function (browser) {
        var rebookToNextColumn = browser.page.partnerParticipationStatus().section.rebookToNextColumn;
        rebookToNextColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Empty')
            .verify.containsText('@secondRow', 'Empty')
            .verify.containsText('@thirdRow', 'Empty')
            .verify.containsText('@fourthRow', 'Empty')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Empty')
            .verify.containsText('@secondRow', 'Empty')
            .verify.containsText('@thirdRow', 'Empty')
            .verify.containsText('@fourthRow', 'Empty')
    },

    'choose Empty': function (browser) {
        var rebookToNextColumn = browser.page.partnerParticipationStatus().section.rebookToNextColumn;
        rebookToNextColumn
            .clickBySelector('@emptyOption')
            .verify.containsText('@firstRow', 'Empty')

            .clickBySelector('@okOption')
            .verify.elementPresent('@noResultsFound')

            .clickBySelector('@allOption')
            .verify.containsText('@firstRow', 'Empty')
            .verify.containsText('@secondRow', 'Empty')
            .verify.containsText('@thirdRow', 'Empty')
    },
});
