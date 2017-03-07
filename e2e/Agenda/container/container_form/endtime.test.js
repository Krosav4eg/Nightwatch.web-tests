var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/220/agenda')
    },

    'Check that field is required = blank click another field': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')
            .clickBySelector('@endTimeInput')
            .clickBySelector('@subHeadingInput');
    },

    'blank click Save': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@saveButton')

            .verify.containsText("@massegeEndTimeError", "End Hour is required")
            .clickBySelector('@cancelButton');
    },

    'check end time after event': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')

            .setValueBySelector('@endTimeInput', ['00:00', browser.Keys.ENTER])

            .verify.containsText("@massegeEndTimeError", "Date should be between 08:00 and 18:00")
            .clickBySelector('@cancelButton');
    },

    'check end time after creation container': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')

            .setValueBySelector('@headingInput', 'autotest5')
            .setValueBySelector('@subHeadingInput', 'test')
            .setValueBySelector('@startTimeInput', '8:00')
            .setValueBySelector('@endTimeInput', '10:00')
            .clickBySelector('@headingInput')

            .clickBySelector('@saveButton');
    },

    'check that only container was create ': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementPresent('@textAutotest5InContainer')

            .verify.elementPresent('@startTime')
            .verify.elementPresent('@endTime');
    },

    'that information message appears': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.containsText('@alertInfo', 'You don`t have any elements into container')
    },

    'delete container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementNotPresent('@textAutotest5InContainer');
    },

    'container without time 8:00-8:00': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')

            .setValueBySelector('@headingInput', 'autotest5')
            .setValueBySelector('@subHeadingInput', 'test')
            .setValueBySelector('@startTimeInput', '8:00')
            .setValueBySelector('@endTimeInput', '8:00')
            .clickBySelector('@headingInput')

            .clickBySelector('@saveButton')

            .verify.elementPresent('@textAutotest5InContainer')
            .verify.containsText('@startTime', '8:00')
            .verify.containsText('@end8Time', '8:00');
    },

    'remove container': function (browser) {
        var agendaPage = browser.page.agenda();
        agendaPage
            .containerDelete();
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementNotPresent('@textAutotest5InContainer');
    },
});
