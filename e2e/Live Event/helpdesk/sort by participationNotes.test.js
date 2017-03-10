var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by participationNotes up': function (browser) {
        var participationNotesColumn = browser.page.helpdesk().section.participationNotesColumn;
        participationNotesColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'sort by participationNotes down': function (browser) {
        var participationNotesColumn = browser.page.helpdesk().section.participationNotesColumn;
        participationNotesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'tulee puheenvuoron aikaan. noin klo 14')
            .verify.containsText('@secondRow', 'tulee myöhässä')
            .verify.containsText('@thirdRow', 'test2 test')
            .verify.containsText('@fourthRow', 'tapaamiset sovittu, lähtee klo 13');
    },

    'search by participationNotes': function (browser) {
        var participationNotesColumn = browser.page.helpdesk().section.participationNotesColumn;
        participationNotesColumn
            .setValueBySelector('@seachColumn', ['RBtopi', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "rbtopi")
    },
});