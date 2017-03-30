var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to rebooking': function (browser) {
        browser
            .relUrl('/event-settings-templates')
    },

    'sort by id down': function (browser) {
        var statusColumn = browser.page.searchTemplate().section.statusColumn;
        statusColumn

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Draft')
            .verify.containsText('@secondRow', 'Draft')
            .verify.containsText('@thirdRow', 'Draft')
            .verify.containsText('@fourthRow', 'Draft')

            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Archived')
            .verify.containsText('@secondRow', 'Active')
            .verify.containsText('@thirdRow', 'Active')
            .verify.containsText('@fourthRow', 'Active')
    },

    'choose by options': function (browser) {
        var statusColumn = browser.page.searchTemplate().section.statusColumn;
        statusColumn

            .clickBySelector('@draftOption')

            .verify.containsText('@firstRow', 'Draft')
            .verify.containsText('@secondRow', 'Draft')
            .verify.containsText('@thirdRow', 'Draft')
            .verify.containsText('@fourthRow', 'Draft')

            .clickBySelector('@activeOption')

            .verify.containsText('@firstRow', 'Active')
            .verify.containsText('@secondRow', 'Active')
            .verify.containsText('@thirdRow', 'Active')
            .verify.containsText('@fourthRow', 'Active')

            .clickBySelector('@archivedOption')

            .verify.containsText('@firstRow', 'Archived')

            .clickBySelector('@allOption')

            .verify.containsText('@firstRow', 'Archived')
            .verify.containsText('@secondRow', 'Active')
            .verify.containsText('@thirdRow', 'Active')
            .verify.containsText('@fourthRow', 'Active')
    },
});