var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/221/agenda')
    },

    'Check that field is required = blank click another field': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')

            .clickBySelector('@headingInput')
            .clickBySelector('@subHeadingInput')

            .verify.containsText("@massegeHeadingInputError", "Heading is required")
            .clickBySelector('@cancelButton');
    },

    'blank.click Save': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')
            .clickBySelector('@saveButton')

            .verify.containsText("@massegeHeadingInputError", "Heading is required")

            .clickBySelector('@cancelButton');
    },
});
