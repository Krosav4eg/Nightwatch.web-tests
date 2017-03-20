var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to helpdesk': function (browser) {
        browser
            .relUrl('/events/2339/check-in')
    },

    'sort by callingNotes up': function (browser) {
        var callingNotesColumn = browser.page.checkIn().section.callingNotesColumn;
        callingNotesColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', '')
            .verify.containsText('@secondRow', '')
            .verify.containsText('@thirdRow', '')
            .verify.containsText('@fourthRow', '');
    },

    'sort by callingNotes down': function (browser) {
        var callingNotesColumn = browser.page.checkIn().section.callingNotesColumn;
        callingNotesColumn
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Är kvar fram till maj, back up, CPO Nordic, vill ta med Cargotec, skciakr lsita')
            .verify.containsText('@secondRow', 'syyskuussa voidaan palata ilmoon')
            .verify.containsText('@thirdRow', 'res17:gärna med nästa år/Nicole_27/4/2016')
            .verify.containsText('@fourthRow', 'pvm kalenterissa, katsotaan kun ohjelma valmis lähempänä Vb 19.5');
    },

    'search by callingNotes': function (browser) {
        var callingNotesColumn = browser.page.checkIn().section.callingNotesColumn;
        callingNotesColumn
            .setValueBySelector('@seachColumn', ['Minna alitalon kollega', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Minna alitalon kollega")
    },
});