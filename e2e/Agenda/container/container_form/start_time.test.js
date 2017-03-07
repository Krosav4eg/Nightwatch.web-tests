var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/222/agenda')
    },

    'Check that field is required = blank click another field ': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')

            .clickBySelector('@startTimeInput')
            .clickBySelector('@subHeadingInput');
    },

    'blank click Save': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@saveButton')

            .verify.containsText("@massegeStartTimeError", "Start Hour is required")

            .clickBySelector('@cancelButton');
    },

    'can not create time before event': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')
            .setValueBySelector('@startTimeInput', ['7:00', browser.Keys.ENTER])

            .verify.containsText("@massegeStartTimeError", "Date should be between 08:00 and 18:00")
            .clickBySelector('@cancelButton');
    },
});
