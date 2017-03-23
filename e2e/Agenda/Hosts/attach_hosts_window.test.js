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
        addElementPage
            .verify.containsText('@namePresentation', 'Klink Holger')
            .verify.elementPresent('@editPresentationButton')
            .verify.elementPresent('@deletePresentationButton')
            .verify.elementPresent('@plusPresentationButton')

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'verify speakers is displayed in the Element form': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.containsText('@timeElementText',"08:00 - 09:45")
            .verify.containsText('@namePlaceholderText',"Presentation / Case")
            .verify.elementPresent('@addRoomButton')
            .verify.elementPresent('@plusPresentationButton')
            .verify.elementPresent('@RWEGroupBusinessText')
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
