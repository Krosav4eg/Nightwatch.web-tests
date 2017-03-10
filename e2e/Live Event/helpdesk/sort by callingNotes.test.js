var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2316/helpdesk')
    },

    'sort by callingNotes up': function (browser) {
        var callingNotesColumn = browser.page.helpdesk().section.callingNotesColumn;
        callingNotesColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'sort by callingNotes down': function (browser) {
        var callingNotesColumn = browser.page.helpdesk().section.callingNotesColumn;
        callingNotesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'vahvistetaan vielä ennen lomia. 5/16TJ')
            .verify.containsText('@secondRow', 'tyulee ab-palsuun. Saapuu tilaisuutta edeltävänä päivänä Thamaan lomalta, katsoo vielä osallitumista. 10/16TJ')
            .verify.containsText('@thirdRow', 'test2 test')
            .verify.containsText('@fourthRow', 'ristiin exitistä 9/16/VR,. laitettu yhteinen vahvistusmaili sales and mrketingin kanssa, kun pyysi');
    },

    'search by callingNotes': function (browser) {
        var callingNotesColumn = browser.page.helpdesk().section.callingNotesColumn;
        callingNotesColumn
            .setValueBySelector('@seachColumn', ['kai laitinen', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "kai laitinen")
    },
});