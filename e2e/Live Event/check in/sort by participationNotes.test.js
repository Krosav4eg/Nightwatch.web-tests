var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by participationNotes up': function (browser) {
        var participationNotesColumn = browser.page.checkIn().section.participationNotesColumn;
        participationNotesColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'sort by participationNotes down': function (browser) {
        var participationNotesColumn = browser.page.checkIn().section.participationNotesColumn;
        participationNotesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Will take 121 meetings with colleague Anders')
            .verify.containsText('@secondRow', 'Meeting with Opus Capita needs to be with Sami Seikkula')
            .verify.containsText('@thirdRow', 'Meeting with Opus Capita needs to be with Sami Seikkula')
            .verify.containsText('@fourthRow', 'Meeting with Opus Capita needs to be with Sami Seikkula');
    },

    'search by participationNotes': function (browser) {
        var participationNotesColumn = browser.page.checkIn().section.participationNotesColumn;
        participationNotesColumn
            .setValueBySelector('@seachColumn', ['Capgemini Dinner?', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Capgemini Dinner?")
    },
});