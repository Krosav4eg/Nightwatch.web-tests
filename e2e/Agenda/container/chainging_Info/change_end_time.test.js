var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/216/agenda')
    },

    'creation container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
        containerCreation();
    },

    'delete end time': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@editButton')
            .verify.elementPresent('@totalNameContainer')

            .setValueBySelector('@endTimeInput', '')
            .clickBySelector('@subHeadingInput')

            .verify.containsText("@massegeEndTimeError", "End Hour is required")

            .setValueBySelector('@endTimeInput', ['00:00', browser.Keys.ENTER])

            .verify.containsText("@massegeEndTimeError", "Date should be between 08:00 and 23:59")
            .clickBySelector('@cancelButton');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
