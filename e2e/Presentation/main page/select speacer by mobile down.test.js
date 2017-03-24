var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker email': function (browser) {
        var speakerMobileColumn = browser.page.presentations().section.speakerMobileColumn;
        speakerMobileColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "")
            .verify.containsText("@secondRow", "")
            .verify.containsText("@thirdRow", "")
            .verify.containsText("@fourthRow", "")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "+49 1622850155")
            .verify.containsText("@secondRow", "+49 162 2565252")
            .verify.containsText("@thirdRow", "")
            .verify.containsText("@fourthRow", "")
    },

    'search by 3 letters': function (browser) {
        var speakerMobileColumn = browser.page.presentations().section.speakerMobileColumn;
        speakerMobileColumn
            .setValueBySelector('@seachColumn', ['+49 162 2565252', browser.Keys.ENTER])

            .verify.containsText("@firstRow", "+49 162 2565252")
    },
});