var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/213/agenda')
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

    'creating presentation-debate panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@presentationDebateOption')

            .setValueBySelector('@startTimeInput', ['9:30', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['10:00', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@attachButton');

        var addPresentation = browser.page.agenda().section.addPresentation;
        addPresentation
            .verify.elementPresent('@daimlerAGText')
            .clickBySelector('@cancelButton');

        addElementPage
            .clickBySelector('@saveButton');
    },

    'redirection after creation presentation-debate ': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@timeElementText',"09:30 - 10:00")
            .verify.elementPresent('@namePlaceholderText',"Presentation / Debate")
    },

    'click add Content button': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@plusPresentationButton');
    },

    'add presentation to Presentation window is displayed': function (browser) {
        var addPresentation = browser.page.agenda().section.addPresentation;
        addPresentation
            .verify.elementPresent('@totalName')
            .verify.elementPresent('@daimlerAGText')
            .clickBySelector('@checkbox932')

            .clickBySelector('@saveButton');
    },

    'added person is displayed': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@timeElementText',"09:30 - 10:00")
            .verify.elementPresent('@namePlaceholderText',"Presentation / Debate")

            .verify.elementPresent('@daimlerAGText')

            .verify.elementPresent('@plusPresentationButton')
            .verify.elementPresent('@addRoomButton')

            .verify.elementPresent('@editElementButton')
            .verify.elementPresent('@deleteElementButton')

            .clickBySelector('@addRoomButton');
    },

    'presentation-debate is displayed': function (browser) {
        var addRoom = browser.page.agenda().section.addRoom;
        addRoom
            .verify.elementPresent('@nameForPresentation')
            .verify.elementPresent('@nameRoomInput');
    },

    'input Room field is empty': function (browser) {
        var addRoom = browser.page.agenda().section.addRoom;
        addRoom
            .verify.valueContains("@nameRoomInput", "")
            .setValueBySelector('@nameRoomInput', 'MyRoom')

            .clickBySelector('@saveButton');
    },

    'set room is displaying': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@myRoomButton');
    },

    'add room for Presentation is displayed again': function (browser) {
        var addRoom = browser.page.agenda().section.addRoom;
        addRoom
            .verify.elementPresent('@nameForPresentation')
            .verify.valueContains("@nameRoomInput", "MyRoom")

            .clickBySelector('@cancelButton');
    },

    'delete 1-to-many-placeholder panel': function (browser) {
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
