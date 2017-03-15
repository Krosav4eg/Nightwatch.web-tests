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

    // 'add room for Dinner placeholder is displayed': function (browser) {
    //     browser
    //         .verify.elementPresent('//label[contains(text(),"Room")]')
    //         .verify.elementPresent('//h4[contains(text(),"Add room for Dinner placeholder 14-11-2013 08:55:00 - 09:25:00")]');
    // },

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
/*
    'add room is displayed again': function (browser) {
        browser
            .waitForElementVisible('//h4[contains(text(),"Add room for Dinner placeholder 14-11-2013 08:55:00 - 09:25:00")]', 3000)

            .waitForElementVisible('//button[contains(text(),"MyRoom")]', 2000)
            .useCss()
            .verify.valueContains("input.form-control[title=Room]", "MyRoom")

            .clickBySelectorCss('button[data-dismiss="modalRoom"]');
    },

    'click on edit dinner panel': function (browser) {
        browser
            .clickBySelectorXpath('//a[2]/i[@class="fa fa-pencil edit-element"]');
    },

    'room field contains name My Room': function (browser) {
        browser
            .useCss()
            .verify.valueContains("input#room", "MyRoom")

            .refresh()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'delete dinner panel': function (browser) {
        browser
            .useXpath()

            .clickBySelectorXpath('//a[3]/i[@class="fa fa-trash-o delete-element"]')
            .clickBySelectorXpath('//button[@data-marker="me-confirm__button__button__yes"]');
    },

    'presentation-leaderShip has been deleted': function (browser) {
        browser
            .useXpath()
            .verify.elementNotPresent('//h5[contains(text(),"08:00 - 09:45")]')
            .verify.elementNotPresent('//h5[contains(text(),"Dinner Placeholder")]')
            .verify.elementNotPresent('//button[contains(text(), "MyRoom")]');
    },

    'delete container': function (browser) {
        browser
            .deleteContainerForAgenda();
    },*/
});
