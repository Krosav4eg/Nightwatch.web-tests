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
            .clickBySelector('@inAcademicTitleNameColumn')
            .verify.containsText('@firstRowInAcademicTitleName', '')

            .clickBySelector('@inAcademicTitleNameColumn')
            .verify.containsText('@firstRowInAcademicTitleName', '');
    },

    // 'search by #M ': function (browser) {
    //     var tableSpeaker = browser.page.presentationsEdit().section.tableSpeaker;
    //     tableSpeaker
    //         .setValueBySelector('@inAcademicTitleSearchColumn', ['113708', browser.Keys.ENTER])
    //         .verify.containsText('@firstRowInAcademicTitleName', '');
    // },
});