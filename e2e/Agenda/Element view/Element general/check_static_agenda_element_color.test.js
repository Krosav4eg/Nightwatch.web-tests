var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/228/agenda')
    },

    'creation new container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage.
            containerCreation();
    },

    'redirection to settings page': function (browser) {
        browser
            .relUrl('/event/228/settings');
        var settingsPage = browser.page.settings();
        settingsPage
            .waitForElementVisible('@totalName', 5000);
    },

    'inputting checkboxes': function (browser) {
        var settingsPage = browser.page.settings();
        settingsPage

            .setValueBySelector('@groupQtyInput', ['6', browser.Keys.ENTER])

            // .verify.elementPresent('@firstCheckbox')
            // .verify.elementPresent('@secondCheckbox')
            // .verify.elementPresent('@thirdCheckbox')
            // .verify.elementPresent('@fourthCheckbox')
            // .verify.elementPresent('@fifthCheckbox')
            // .verify.elementPresent('@sixthCheckbox')

            .clickBySelector('@saveButton');
    },

    'redirection to agenda page again': function (browser) {
        browser
            .relUrl('/event/228/agenda')
    },

    'click on add element button': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addElementButton');
    },

    'element form window is displayed': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .verify.elementPresent('@totalNameElementForm')
            .verify.elementPresent('@agendaElementType');
    },

    'choose Static agenda element': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@staticAgendaElementOption');
    },

    'static agenda element page assertion': function (browser) {
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

    'creating Awards panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@awardsPanelOption')

            .setValueBySelector('@startTimeInput', ['8:59', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:59', browser.Keys.ENTER])

            .clickBySelector('@groupOrangeCheckbox')
            .clickBySelector('@groupVioletCheckbox')
            .clickBySelector('@groupBlueCheckbox')
            .clickBySelector('@groupGreenCheckbox')
            .clickBySelector('@groupRedCheckbox')
            .clickBySelector('@groupWiteCheckbox')

            .clickBySelector('@noMeetingsAllowedOption')

            .clickBySelector('@saveButton');
    },

    'redirection after creation awards panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementPresent('@timeElementText')
            .verify.containsText('@namePlaceholderText', 'Awards Panel')
            .verify.elementPresent('@addRoomButton')

            .verify.elementPresent('@orangeGroupColorForEvent')
            .verify.elementPresent('@violetGroupColorForEvent')
            .verify.elementPresent('@blueGroupColorForEvent')
            .verify.elementPresent('@greenGroupColorForEvent')
            .verify.elementPresent('@redGroupColorForEvent')
            .verify.elementPresent('@grayBlockColorForEvent')
    },

    'check all groups colors ': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.cssProperty('@orangeGroupColorForEvent', 'background-color', 'rgba(255, 153, 51, 1)')
            .verify.cssProperty('@violetGroupColorForEvent', 'background-color', 'rgba(255, 153, 255, 1)')
            .verify.cssProperty('@blueGroupColorForEvent', 'background-color', 'rgba(51, 153, 255, 1)')
            .verify.cssProperty('@greenGroupColorForEvent', 'background-color', 'rgba(153, 255, 204, 1)')
            .verify.cssProperty('@redGroupColorForEvent', 'background-color', 'rgba(255, 102, 102, 1)')
            .verify.cssProperty('@grayBlockColorForEvent', 'background-color', 'rgba(204, 204, 204, 1)')
    },

    'check container color ': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementPresent('@addCotainerButton')
            .verify.cssProperty('@addCotainerButton', 'background-color', 'rgba(79, 142, 220, 1)');
    },

    'check static agenda element color': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementPresent('@orangeBlockColorForEvent')
            .verify.cssProperty('@orangeBlockColorForEvent', 'background-color', 'rgba(245, 166, 35, 1)');
    },

    'check that the button is green when room was not chosen': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementPresent('@addRoomButton')
            .verify.cssProperty('@addRoomButton', 'background-color', 'rgba(133, 199, 68, 1)');
    },

    'click add room': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@addRoomButton');
    },

    'add room for awards panel is displayed': function (browser) {
        var addRoom = browser.page.agenda().section.addRoom;
        addRoom
            .waitForElementVisible('@totalNameElementForm', 4000)
            .verify.valueContains("@nameRoomInput", "")
            .setValueBySelector('@nameRoomInput', 'MyRoom')
            .clickBySelector('@saveButton');
    },

    'redirection after adding room': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.containsText('@timeElementText', "08:59 - 09:59")
            .verify.containsText('@namePlaceholderText', "Awards Panel")

            .verify.elementPresent('@myRoomButton');
    },

    'check that the button is red when room was choosen': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementPresent('@myRoomButton')
            .verify.cssProperty('@myRoomButton', 'background-color', 'rgba(231, 60, 60, 1)');
    },

    'delete groups checkboxes': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@editElementButton');
    },


    'awards panel has been deleted': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@groupOrangeCheckbox')
            .clickBySelector('@groupVioletCheckbox')
            .clickBySelector('@groupBlueCheckbox')
            .clickBySelector('@groupGreenCheckbox')
            .clickBySelector('@groupRedCheckbox')
            .clickBySelector('@groupWiteCheckbox')

            .clickBySelector('@saveButton');
    },

    'groups are not present': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage

            .verify.elementNotPresent('@orangeGroupColorForEvent')
            .verify.elementNotPresent('@violetGroupColorForEvent')
            .verify.elementNotPresent('@blueGroupColorForEvent')
            .verify.elementNotPresent('@greenGroupColorForEvent')
            .verify.elementNotPresent('@redGroupColorForEvent')
            .verify.elementNotPresent('@grayBlockColorForEvent')
    },

    'delete element': function (browser) {
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
