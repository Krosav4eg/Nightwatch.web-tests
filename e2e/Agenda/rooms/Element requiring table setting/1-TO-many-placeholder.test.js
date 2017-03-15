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

    'click on add element button': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addElementButton');
    },

    'choose element requiring table setting': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@elementRequiringTableSettingOption');
    },

    'assertion elements type in drop down list': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@agendaElementTypeSelect')

            .verify.containsText('@hostedTablePlaceholderOption',"Hosted table placeholder")
            .verify.elementPresent('@dinnerPlaceholderOption',"Dinner placeholder")
            .verify.elementPresent('@groupDiscussionPlaceholderOption',"Group Discussion Placeholder")
            .verify.elementPresent('@lunchPlaceholderOption',"Lunch Placeholder");
    },

    'creating 1-TO-1 placeholder panel': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@hostedTablePlaceholderOption')

            .setValueBySelector('@startTimeInput', ['8:55', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', ['9:25', browser.Keys.ENTER])
    },


    'element requiring table setting assertion': function (browser) {
        var addElementPage = browser.page.agenda().section.addElement;
        addElementPage
            .clickBySelector('@noMeetingsAllowedOption')

            .verify.elementPresent('@TOMANYMEETINGhostsText')
            .verify.elementPresent('@tableSizeText')
            .verify.elementPresent('@tableSizeInput')

            .clickBySelector('@attachButtonOnAddElementForm')
            .clickBySelector('@attachCancelWindowButton')

            .clickBySelector('@saveButton');
    },

    'redirection after creation 1-TO-many-placeholder': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@timeElementText',"08:55 - 09:25")
            .verify.elementPresent('@namePlaceholderText',"Hosted table placeholder")

            .clickBySelector('@plusPresentationButton');
    },

    'add host topics to 1-TO-MANY Placeholder is displayed': function (browser) {
        var addHostTopics = browser.page.agenda().section.addHostTopics;
        addHostTopics
            .verify.elementPresent('@nameModalWindow');

        browser.refresh();
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

