var _ = require('lodash');
var presteps = require('../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/231/agenda')
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

    'blank click Save': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@headlineOption')

            .clickBySelector('@saveButton')

            .verify.containsText('@errorMassegeElementTypeSelect','Heading is required.')
            .verify.containsText('@errorMassegeStartHour','Start Hour is required.')
            .verify.containsText('@errorMassegeEndtHour','End Hour is required.')
    },

    'input heading field': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .setValueBySelector('@headingInput', 'autotest2016')
            .setValueBySelector('@subHeadingInput', 'test');
    },

    'input time ': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .setValueBySelector('@startTimeInput', ['8:00', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:45', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'click on edit awards panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@editElementButton');
    },


    'putting check-boxes in Group 1 & Group 2': function (browser) {
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
            .verify.containsText('@namePlaceholderText','autotest2016')
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
