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
            .clickBySelector('@lastNameColumn')
            .verify.containsText('@firstRowInColumnLastName', 'Kolehmainen')

            .clickBySelector('@lastNameColumn')
            .verify.containsText('@firstRowInColumnLastName', 'Kolehmainen');
    },

    'search by #M ': function (browser) {
        var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
        tableSpeaker
            .setValueBySelector('@lastNameSearchColumn', ['Kolehmainen', browser.Keys.ENTER])
            .verify.containsText('@firstRowInColumnLastName', 'Kolehmainen');
    },
});