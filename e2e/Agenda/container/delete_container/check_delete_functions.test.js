var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/224/agenda')
    },

    'container creation': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'check alert message': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@deleteButton')
            .verify.containsText('@nameDeletedWindow', 'Confirmation');
    },

    'click NO button': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@confirmNoButton')

            .verify.elementPresent('@startTime')
            .verify.elementPresent('@endTime')
            .verify.elementPresent('@textInContainer');
    },

    'click OK button': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
