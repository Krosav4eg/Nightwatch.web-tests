var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by speaker email': function (browser) {
        var presentationHeadingsColumn = browser.page.presentations().section.presentationHeadingsColumn;
        presentationHeadingsColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "")
            .verify.containsText("@secondRow", "")
            .verify.containsText("@thirdRow", "")
            .verify.containsText("@fourthRow", "")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", '')
            .verify.containsText("@secondRow", "")
            .verify.containsText("@thirdRow", "")
            .verify.containsText("@fourthRow", "")
    },

    // 'search by 3 letters': function (browser) {
    //     var presentationHeadingsColumn = browser.page.presentations().section.presentationHeadingsColumn;
    //     presentationHeadingsColumn
    //         .setValueBySelector('@seachColumn', ['Prokurist', browser.Keys.ENTER])
    //
    //         .verify.containsText("@firstRow", "Prokurist")
    // },
});