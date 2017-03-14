var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/agenda')
    },
    'creation new container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'choose static agenda element': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addElementButton');

        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@staticAgendaElementOption');
    },

    'select presentation/case': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@presentationCaseOption')
            .setValueBySelector('@startTimeInput', ['8:00', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:45', browser.Keys.ENTER])

            .clickBySelector('@attachButton');
    },

    'not selected speaker': function (browser) {
        var addPresentation = browser.page.agenda().section.addPresentation;
        addPresentation
            .clickBySelector('@checkbox629')
            .clickBySelector('@cancelButton');

    },

    'none speaker is not displayed': function (browser) {
        browser
            .verify.elementNotPresent('//modal[@class="modal fade in"]//td[text()="3756"]');
    },

    'attach new speaker ': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@attachButton');

        var addPresentation = browser.page.agenda().section.addPresentation;
        addPresentation
            .clickBySelector('@checkbox629')
            .clickBySelector('@saveButton');
    },

    'chosen speaker is displayed in Element form': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage            .verify.elementPresent('//td[text()="3756"]')
            .verify.containsText('@namePresentation', 'RWE Group Business Services GmbH')
            .verify.containsText('@namePresentation', 'Klink Holger')
            .verify.elementPresent('@editPresentationButton')
            .verify.elementPresent('@deletePresentationButton')
            .verify.elementPresent('@plusPresentationButton')

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'chosen speakers is displayed in the Element form': function (browser) {
        browser

            .verify.elementPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementPresent('//h5[contains(text(),"Presentation / Case")]')

            .verify.elementPresent('//button[contains(text(), "Add room")]')
            .verify.elementPresent('//button[@class="btn btn-primary"]/i[@class="fa fa-plus"]')

            .verify.elementPresent('//td[text()="3756"]')
            .verify.elementPresent('//td/ul/li/b[text()="Telenor ASA"]')
            .verify.elementPresent('//a[@href="/presentations/edit/3756"]/i')
            .verify.elementPresent('//me-event-agenda-attached-presentation-list//i[@class="fa fa-trash-o delete-element"]');
    },

    'delete award panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@deleteElementButton')
            .clickBySelector('@confitmYesButton');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
