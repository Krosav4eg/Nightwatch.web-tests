var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/238/agenda')
    },

    'creation new container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
             containerCreation();
    },

    'choose Element requiring table setting': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addElementButton');

        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@elementRequiringTableSettingOption');
    },

    'creating Lunch Placeholder panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@lunchPlaceholderOption')

            .setValueBySelector('@startTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:25', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'redirection after creation Dinner-placeholder': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@timeElementText',"08:55 - 09:25")
            .verify.elementPresent('@namePlaceholderText',"Lunch Placeholder");
    },

    'click add room': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addRoomButton');
    },

    'add room for Awards Panel is displayed': function (browser) {
        var addRoom = browser.page.agenda().section.addRoom;
        addRoom
            .verify.elementPresent('@nameForLunchPlaceholder')
            .verify.valueContains("@nameRoomInput", "")
            .setValueBySelector('@nameRoomInput', 'MyRoom')

            .clickBySelector('@saveButton');
    },

    'created room is displaying': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@myRoomButton');
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

