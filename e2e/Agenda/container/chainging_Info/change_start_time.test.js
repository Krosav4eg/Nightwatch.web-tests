var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/218/agenda')
    },

    'creation container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
        containerCreation();
    },

    'delete start time': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@editButton')
            .verify.elementPresent('@totalNameContainer')

            .setValueBySelector('@startTimeInput', '')
            .clickBySelector('@subHeadingInput')

            .verify.containsText("@massegeStartTimeError", "Start Hour is required")

            .setValueBySelector('@startTimeInput', ['7:59', browser.Keys.ENTER])

            .verify.containsText("@massegeStartTimeError", "Date should be between 08:00 and 23:59")
            .clickBySelector('@cancelButton');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
