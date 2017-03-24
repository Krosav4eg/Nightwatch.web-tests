var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker email': function (browser) {
        var speakerTitleColumn = browser.page.presentations().section.speakerTitleColumn;
        speakerTitleColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Geschäftsführer")
            .verify.containsText("@secondRow", "Leiter Handel und Portfoliomanagement")
            .verify.containsText("@thirdRow", "Leiter Handel und Portfoliomanagement")
            .verify.containsText("@fourthRow", "Leiter Handel und Portfoliomanagement")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", 'Senior Consultant & Analyst, Center of Expertise "Internal Reporting"')
            .verify.containsText("@secondRow", "Prokurist")
            .verify.containsText("@thirdRow", "Leiter Handel und Portfoliomanagement")
            .verify.containsText("@fourthRow", "Leiter Handel und Portfoliomanagement")
    },

    'search by 3 letters': function (browser) {
        var speakerTitleColumn = browser.page.presentations().section.speakerTitleColumn;
        speakerTitleColumn
            .setValueBySelector('@seachColumn', ['Prokurist', browser.Keys.ENTER])

            .verify.containsText("@firstRow", "Prokurist")
    },
});