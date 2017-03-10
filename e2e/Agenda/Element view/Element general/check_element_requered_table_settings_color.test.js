var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/230/agenda')
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
    },

    'element form window is displayed': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .verify.elementPresent('@totalNameElementForm')
            .verify.elementPresent('@agendaElementType');
    },

    'choose element requiring table setting': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@elementRequiringTableSettingOption');
    },

    'assertion agenda element type drop down list': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@hostedTablePlaceholderOption')
            .clickBySelector('@dinnerPlaceholderOption')
            .clickBySelector('@groupDiscussionPlaceholderOption')
            .clickBySelector('@lunchPlaceholderOption');
    },

    'lunch placeholder page assertion': function (browser) {
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

    'creating Lunch placeholder panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@lunchPlaceholderOption')

            .setValueBySelector('@startTimeInput', ['8:59', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:59', browser.Keys.ENTER])

            .clickBySelector('@noMeetingsAllowedOption')

            .clickBySelector('@saveButton');
    },

    'redirection after creation Dinner-placeholder': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementPresent('@timeElementText')
            .verify.containsText('@namePlaceholderText', 'Lunch placeholder')
            .verify.elementPresent('@addRoomButton');
    },

    'check element required table settings color': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementPresent('@greenBlockColorForEvent')
            .verify.cssProperty('@greenBlockColorForEvent', 'background-color', 'rgba(0, 135, 129, 1)');
    },

    'delete lunch panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@deleteElementButton')
            .clickBySelector('@confitmYesButton');
    },

    'lunch panel has been deleted': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementNotPresent('@timeElementText')
            .verify.elementNotPresent('@addRoomButton');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
