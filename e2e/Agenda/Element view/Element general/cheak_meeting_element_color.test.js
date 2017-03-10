var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/227/agenda')
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

    'choose static agenda element': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@meetingElementOption');
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

    'creating meeting element panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .verify.containsText('@TO1PlaceholderOption', '1-TO-1 Placeholder')
            .clickBySelector('@TO1PlaceholderOption')

            .setValueBySelector('@startTimeInput', ['8:59', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:59', browser.Keys.ENTER])

            .clickBySelector('@primaryMeetingHourOption')
            .clickBySelector('@roomInput')

            .clickBySelector('@saveButton');
    },

    'redirection after creation meeting element panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.containsText('@timeElementText', '08:59 - 09:59')
            .verify.containsText('@namePlaceholderText', '1-TO-1 Placeholder')
            .verify.elementPresent('@addRoomButton');
    },

    'check static agenda element color': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementPresent('@blueBlockColorForEvent')
            .verify.cssProperty('@blueBlockColorForEvent', 'background-color', 'rgba(0, 122, 255, 1)');
    },

    'delete 1-TO-1 Placeholder panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .clickBySelector('@deleteElementButton')
            .verify.elementPresent('@massegeForDeleteElement')
            .clickBySelector('@confitmYesButton');
    },

    '1-TO-1 Placeholder has been deleted': function (browser) {
        var addElementPage = browser.page.agenda().section.addCotainer;
        addElementPage
            .verify.elementNotPresent('@timeElementText')
            .verify.elementNotPresent('@namePlaceholderText')
            .verify.elementNotPresent('@addRoomButton');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },
});
