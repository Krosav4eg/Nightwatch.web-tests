var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/1000/agenda')
    },
    'creation new container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
        containerCreation();
    },

    'click on add element button': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addElementButton');

        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@staticAgendaElementOption');
    },

    'blank click on Save button': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@presentationChairmanOption')

            .clickBySelector('@saveButton')
            .verify.containsText('@errorMassegeStartHour','End Hour is required.')
    },

    'input time ': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .setValueBySelector('@startTimeInput', ['8:00', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:45', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'add presentation window is displayed': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addPresentationButton');

        var addPresentation = browser.page.agenda().section.addPresentation;
        addPresentation
            .clickBySelector('@checkbox')
            .clickBySelector('@saveButton');
    },

    'the person is displayed': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.containsText('@namePresentation','Hannula Panu')
            .verify.containsText('@namePresentation','Musti Group Oy')

            .verify.elementPresent('@editPresentationButton')
            .verify.elementPresent('@deletePresentationButton')
            .verify.elementPresent('@plusPresentationButton')
    },

    'presentation chairman was created': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage

            .verify.containsText('@timeElementText','08:00 - 09:45')
            .verify.containsText('@namePlaceholderText','Presentation / Chairman')
            .verify.elementPresent('@addRoomButton')
    },

    'click on edit presentation/chairman panel': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@editElementButton');
    },

    'static agenda page displayed and click on background': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@groupOrangeCheckbox')
            .clickBySelector('@groupVioletCheckbox')

            .clickBySelector('@saveButton');
    },

    'redirection after selection "Group 1 - orange" & "Group 2 - violet"  page': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage

            .verify.containsText('@timeElementText','08:00 - 09:45')
            .verify.containsText('@namePlaceholderText','Presentation / Chairman')
            .verify.elementPresent('@addRoomButton')

            .verify.elementPresent('@orangeGroupColorForEvent')
            .verify.elementPresent('@violetGroupColorForEvent');
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
