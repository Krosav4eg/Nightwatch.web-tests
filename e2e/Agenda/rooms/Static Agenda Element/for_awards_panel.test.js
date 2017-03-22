var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/209/agenda')
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

    'creating awards panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@awardsPanelOption')

            .setValueBySelector('@startTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:25', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'redirection after creation awards panel': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@timeElementText',"08:55 - 09:25")
            .verify.elementPresent('@namePlaceholderText',"Awards Panel");
    },

    'click add room': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addRoomButton');
    },

    'input room field is empty': function (browser) {
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

    'add room is displayed again': function (browser) {
        var addRoom = browser.page.agenda().section.addRoom;
        addRoom
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
