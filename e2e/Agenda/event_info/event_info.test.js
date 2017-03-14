var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/210/agenda')
    },

    'check event name': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .verify.containsText('@nameEvent', 'IndustryForum Automotive');
    },

    'check event Local name': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .verify.containsText('@localName', 'Local name: StrategyCircle Automobilindustrie');
    },

    'check event date': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .verify.containsText('@dates', 'Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00');
    },

    'check event ID': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .verify.containsText('@titleEvent', '(#210)');
    },

    'two day event (day tabs)': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .verify.containsText('@firstDay', '2012-11-27')
            .verify.containsText('@secondDay', '2012-11-28');
    },

    'can not create time before event': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .clickBySelector('@firstDay');

        var addCotainer = browser.page.agenda().section.addCotainer;
        addCotainer
            .clickBySelector('@addCotainerButton')
            .setValueBySelector('@startTimeInput', ['7:59', browser.Keys.ENTER])
            .verify.containsText("@massegeStartTimeError", "Date should be between 08:00 and 23:59");
    },

    'creation container with correct time and data 1-st day event': function (browser) {
        var addCotainer = browser.page.agenda().section.addCotainer;
        addCotainer
            .setValueBySelector('@headingInput', 'new_event2016 ')
            .setValueBySelector('@subHeadingInput', 'test')
            .setValueBySelector('@startTimeInput', ['8:00', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', '10:00')
            .clickBySelector('@headingInput')

            .clickBySelector('@saveButton');
    },

    '1-st day container has been created': function (browser) {
        var addCotainer = browser.page.agenda().section.addCotainer;
        addCotainer
            .verify.containsText('@startTime', '8:00')
            .verify.containsText('@endTime', '10:00');
    },

    'delete 1-st container': function (browser) {
        var addCotainer = browser.page.agenda().section.addCotainer;
        addCotainer
            .clickBySelector('@deleteButton')
            .clickBySelector('@confirmYesButton')

            .verify.elementNotPresent('@startTime')
            .verify.elementNotPresent('@endTime');
    },

    'can not create time after event': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .clickBySelector('@secondDay');

        var addCotainer = browser.page.agenda().section.addCotainer;
        addCotainer
            .clickBySelector('@addCotainerButton')
            .setValueBySelector('@endTimeInput', ['18:01', browser.Keys.ENTER])
            .verify.containsText("@massegeEndTimeError", "Date should be between 00:00 and 18:00");
    },

    'creation container with correct time and data 2-nd day event': function (browser) {
        var addCotainer = browser.page.agenda().section.addCotainer;
        addCotainer
            .setValueBySelector('@headingInput', 'new_event2016 ')
            .setValueBySelector('@subHeadingInput', 'test')
            .setValueBySelector('@startTimeInput', ['10:00', browser.Keys.ENTER])
            .setValueBySelector('@endTimeInput', '18:00')
            .clickBySelector('@headingInput')

            .clickBySelector('@saveButton');
    },

    '2-st day container has been created': function (browser) {
        var addCotainer = browser.page.agenda().section.addCotainer;
        addCotainer
            .verify.elementPresent('@start10Time')
            .verify.elementPresent('@end18Time');
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
    },

    'redirection to one day event': function (browser) {
        browser
            .relUrl('/event/210/agenda')
    },

    'one day event (data and time check)': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .verify.containsText('@dates', 'Dates: 2012-11-27 08:00:00 - 2012-11-28 18:00:00');
    },

    'check the tabs are not displaying in one day event': function (browser) {
        var allInformation = browser.page.agenda().section.allInformation;
        allInformation
            .verify.containsText('@firstDay', '2012-11-27')
            .verify.containsText('@secondDay', '2012-11-28');
    },

});
