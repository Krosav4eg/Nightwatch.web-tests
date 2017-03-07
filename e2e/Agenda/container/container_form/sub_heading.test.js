var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/223/agenda')
    },

    'blank click another field': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@addCotainerButton')

            .verify.elementPresent('@totalNameContainer')

            .clickBySelector('@subHeadingInput')
            .clickBySelector('@headingInput');
    },

    'Check that field is not required': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .verify.elementNotPresent('@massegeSubHeadingInputError');
    },

    'blank click Save': function (browser) {
        var addCotainerPage = browser.page.agenda().section.addCotainer;
        addCotainerPage
            .clickBySelector('@saveButton');
    },
});
