var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
    },

    'go to the edit presentation': function (browser) {
        var idColumn = browser.page.presentations().section.idColumn;
        idColumn
            .clickBySelector('@firstRow')
    },

    'sort by #M ': function (browser) {
        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .clickBySelector('@firstNameColumnM')
            .verify.containsText('@firstRowInColumnM', '#113708')

            .clickBySelector('@firstNameColumnM')
            .verify.containsText('@firstRowInColumnM', '#113708');
    },

    'search by #M ': function (browser) {
        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .setValueBySelector('@firstSearchColumnM', ['113708', browser.Keys.ENTER])
            .verify.containsText('@firstRowInColumnM', '#113708');
    },
});