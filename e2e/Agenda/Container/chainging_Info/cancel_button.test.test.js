var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/215/agenda')
    },

    'creation container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'click on delete button': function (browser) {
        var agendaContainerPage = browser.page.agenda().section.addCotainer;
        agendaContainerPage
            .clickBySelector('@deleteButton')
            .verify.elementPresent('@nameDeletedWindow');
    },

    'click NO button on form': function (browser) {
        var agendaContainerPage = browser.page.agenda().section.addCotainer;
        agendaContainerPage
            .clickBySelector('@confirmNoButton');
    },

    'no change was made assertion': function (browser) {
        var agendaContainerPage = browser.page.agenda().section.addCotainer;
        agendaContainerPage
            .verify.elementPresent('@startTime')
            .verify.elementPresent('@endTime')
            .verify.elementPresent('@textInContainer')
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
