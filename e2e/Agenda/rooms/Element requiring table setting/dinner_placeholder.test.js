var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/235/agenda')
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

    'dinner element page assertion': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .verify.elementPresent('@endTimeText')
            .verify.elementPresent('@startTimeText')
            .verify.elementPresent('@meetingAllowedText')
            .verify.elementPresent('@groupsUsedText')

            .verify.elementPresent('@eventGroupsText')
            .verify.containsText('@groupOrangeCheckbox','Group 1 - orange')
            .verify.containsText('@groupVioletCheckbox','Group 2 - violet')

            .verify.elementPresent('@showInCalendarsText', 'Show in calendars')
            .verify.containsText('@delegatesCheckbox','Delegates')
            .verify.containsText('@providerRepresentativesCheckbox','Provider representatives')

            .verify.elementPresent('@publishWWWText', 'Publish WWW')
            .verify.elementPresent('@visibilityPublishWWWYesCheckbox')
            .verify.elementPresent('@visibilityPublishWWWNoCheckbox')

            .verify.elementPresent('@roomText');
    },

    'creating Dinner Placeholder panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@dinnerPlaceholderOption')

            .setValueBySelector('@startTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:25', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')
            .clickBySelector('@saveButton');
    },

    'redirection after creation Dinner-placeholder': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@timeElementText',"08:55 - 09:25")
            .verify.elementPresent('@namePlaceholderText',"Dinner placeholder");
    },

    'click add room': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addRoomButton');
    },

    'room input field is empty': function (browser) {
        var addRoom = browser.page.agenda().section.addRoom;
        addRoom
            .setValueBySelector('@nameRoomInput', 'MyRoom')
            .clickBySelector('@saveButton');
    },

    'created room is displaying': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@myRoomButton');
    },

    'add room is displayed again': function (browser) {
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
