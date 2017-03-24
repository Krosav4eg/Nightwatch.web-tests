var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker email': function (browser) {
        var speakerLastNameColumn = browser.page.presentations().section.speakerLastNameColumn;
        speakerLastNameColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Abels")
            .verify.containsText("@secondRow", "Alphéus")
            .verify.containsText("@thirdRow", "Funke")
            .verify.containsText("@fourthRow", "Funke")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Klink")
            .verify.containsText("@secondRow", "Funke")
            .verify.containsText("@thirdRow", "Funke")
            .verify.containsText("@fourthRow", "Funke")
    },

    'search by 3 letters': function (browser) {
        var speakerLastNameColumn = browser.page.presentations().section.speakerLastNameColumn;
        speakerLastNameColumn
            .setValueBySelector('@seachColumn', ['Abels', browser.Keys.ENTER])

            .verify.containsText("@firstRow", "Abels")
    },
});