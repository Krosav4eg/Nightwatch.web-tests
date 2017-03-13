var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/229/agenda')
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

    'assertion agenda element type drop down list': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@agendaElementTypeSelect')

            .verify.containsText('@awardsPanelOption', 'Awards Panel')
            .verify.containsText('@presentationCaseOption', 'Presentation / Case')
            .verify.containsText('@presentationChairmanOption', 'Presentation / Chairman')
            .verify.containsText('@presentationCrossFunctionKeynoteOption', 'Presentation / Cross-Function Keynote')
            .verify.containsText('@presentationDebateOption', 'Presentation / Debate')
            .verify.containsText('@presentationFishBowlOption', 'Presentation / FishBowl')
            .verify.containsText('@presentationKeynoteOption', 'Presentation / Keynote')
            .verify.containsText('@presentationLeadershipOption', 'Presentation / Leadership presentation')
            .verify.containsText('@presentationPanelDiscussionOption', 'Presentation / Panel discussion')
            .verify.containsText('@presentationSnapshotOption', 'Presentation / Snapshot')
            .verify.containsText('@presentationSpotlightOption', 'Presentation / Spotlight');
    },

    'blank.click save button': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@saveButton')

            .verify.containsText('@errorMassegeElementTypeSelect','Field is required.')
            .verify.containsText('@errorMassegeStartHour','Start Hour is required.')
            .verify.containsText('@errorMassegeEndtHour','End Hour is required.')

            .clickBySelector('@awardsPanelOption');
    },

    'start time can not be before set time ': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .setValueBySelector('@startTimeInput', ['7:59', browser.Keys.ENTER])

            .verify.containsText("@massegeStartTimeError", "Date should be between 08:00 and 10:00")

            .setValueBySelector('@startTimeInput', ['8:00', browser.Keys.ENTER]);
    },

    'end time can not be after set time ': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .setValueBySelector('@endTimeInput', ['10:01', browser.Keys.ENTER])

            .verify.containsText("@massegeEndTimeError", "Date should be between 08:00 and 10:00")

            .setValueBySelector('@endTimeInput', ['9:45', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'redirection & assertion  page': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage

            .verify.containsText('@timeElementText','08:00 - 09:45')
            .verify.elementPresent('@addRoomButton')
    },

    'click on edit awards panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@editElementButton');
    },

    'static agenda page displayed and click on background': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@groupOrangeCheckbox')
            .clickBySelector('@groupVioletCheckbox')

            .clickBySelector('@cancelButton');

        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage

            .verify.elementNotPresent('@orangeGroupColorForEvent')
            .verify.elementNotPresent('@violetGroupColorForEvent');
    },

    'click on pencil': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@editElementButton');
    },

    'putting check-boxes into Group 1 & Group 2': function (browser) {
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
            .verify.elementPresent('@addRoomButton')

            .verify.elementPresent('@orangeGroupColorForEvent')
            .verify.elementPresent('@violetGroupColorForEvent');
    },

    'delete lunch panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@deleteElementButton')
            .clickBySelector('@confitmYesButton');
    },


    'awards panel has been deleted': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementNotPresent('@addRoomButton')
            .verify.elementNotPresent('@orangeGroupColorForEvent')
            .verify.elementNotPresent('@violetGroupColorForEvent');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
