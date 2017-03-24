var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker email': function (browser) {
        var speakerFirstNameColumn = browser.page.presentations().section.speakerFirstNameColumn;
        speakerFirstNameColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Andrea")
            .verify.containsText("@secondRow", "Boris")
            .verify.containsText("@thirdRow", "Boris")
            .verify.containsText("@fourthRow", "Boris")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Ingo")
            .verify.containsText("@secondRow", "Holger")
            .verify.containsText("@thirdRow", "Boris")
            .verify.containsText("@fourthRow", "Boris")
    },

    'search by 3 letters': function (browser) {
        var speakerFirstNameColumn = browser.page.presentations().section.speakerFirstNameColumn;
        speakerFirstNameColumn
            .setValueBySelector('@seachColumn', ['Holger', browser.Keys.ENTER])

            .verify.containsText("@firstRow", "Holger")
    },
});