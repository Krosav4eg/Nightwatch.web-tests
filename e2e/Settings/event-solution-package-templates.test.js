var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');
var auth = require('./../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event-solution-package-templates')
    },

    'choose Uitto': function (browser) {
        var statusColumn = browser.page.eventSolutionPackageTemplates().section.statusColumn;
        statusColumn
            .clickBySelector('@activeOption')
            .verify.containsText('@firstRow', 'Active')

            .clickBySelector('@archivedOption')
            .verify.containsText('@firstRow', 'Archived')

            .clickBySelector('@passiveOption')
            .verify.containsText('@firstRow', 'Passive')
    },
});