var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/1001/agenda')
    },

    'creation new container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'choose element requiring table setting': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addElementButton');

        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@elementRequiringTableSettingOption');
    },

    'creating group discussion placeholder panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@groupDiscussionPlaceholderOption')

            .setValueBySelector('@startTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:25', browser.Keys.ENTER])

            .verify.elementPresent('@attachButton')
            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'redirection after creation group discussion placeholder panel': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@timeElementText',"08:55 - 09:25")
            .verify.elementPresent('@namePlaceholderText',"Group Discussion Placeholder")
            .clickBySelector('@plusPresentationButton');
    },

    'choose person in  add presentation to window': function (browser) {
        var addPresentation = browser.page.agenda().section.addPresentation;
        addPresentation
            .verify.elementPresent('@groupDiscussionPlaceholderText')
            .clickBySelector('@checkbox1962')

            .clickBySelector('@saveButton');
    },

    // 'chosen person is appear': function (browser) {
    //     var addCotainerPage = browser.page.agenda().section.addCotainer;
    //     addCotainerPage
    //         .verify.elementPresent('@timeElementText',"08:55 - 09:25")
    //         .verify.elementPresent('@namePlaceholderText',"Group Discussion Placeholder")
    //         .verify.elementPresent('@plusPresentationButton')
    //         .verify.elementPresent('@addRoomButton')
    //         .verify.elementPresent('@editElementButton')
    //         .verify.elementPresent('@deleteElementButton')
    //
    //         .clickBySelector('@addRoomButton');
    // },
    //
    // 'input room field is empty': function (browser) {
    //     var addRoom = browser.page.agenda().section.addRoom;
    //     addRoom
    //         .verify.valueContains("@nameRoomInput", "")
    //         .setValueBySelector('@nameRoomInput', 'MyRoom')
    //
    //         .clickBySelector('@saveButton');
    // },
    //
    // 'input room is displaying': function (browser) {
    //     var addCotainerPage = browser.page.agenda().section.addCotainer;
    //     addCotainerPage
    //         .clickBySelector('@myRoomButton');
    // },
    //
    // 'add room for group discussion is displayed again': function (browser) {
    //     var addRoom = browser.page.agenda().section.addRoom;
    //     addRoom
    //         .verify.elementPresent('@nameForPresentation')
    //         .verify.valueContains("@nameRoomInput", "MyRoom")
    //
    //         .clickBySelector('@cancelButton');
    // },
    //
    // 'delete 1-to-many-placeholder panel': function (browser) {
    //     var addElementPage = browser.page.agenda().section.addCotainer;
    //     addElementPage
    //         .clickBySelector('@deleteElementButton')
    //         .clickBySelector('@confitmYesButton');
    // },
    //
    // 'delete container': function (browser) {
    //     var agendaPage = browser.page.agenda();
    //     agendaPage
    //         .containerDelete();
    // },
});
