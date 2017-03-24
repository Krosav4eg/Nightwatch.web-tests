var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'sort ': function (browser) {
        var organizerColumn = browser.page.presentations().section.organizerColumn;
        organizerColumn
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Management Events")
            .verify.containsText("@secondRow", "Management Events")
            .verify.containsText("@thirdRow", "Management Events")
            .verify.containsText("@fourthRow", "Management Events")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Management Events")
            .verify.containsText("@secondRow", "Management Events")
            .verify.containsText("@thirdRow", "Management Events")
            .verify.containsText("@fourthRow", "Management Events")
    },

    'search by created by 3 numbers': function (browser) {
        var organizerColumn = browser.page.presentations().section.organizerColumn;
        organizerColumn
            .setValueBySelector('@seachColumn', ['man', browser.Keys.ENTER])

            .verify.containsText("@firstRow", "Management Events")
            .verify.containsText("@secondRow", "Management Events")
            .verify.containsText("@thirdRow", "Management Events")
            .verify.containsText("@fourthRow", "Management Events")

            .setValueBySelector('@seachColumn', ['', browser.Keys.ENTER])

            .verify.containsText("@firstRow", "Management Events")
            .verify.containsText("@secondRow", "Management Events")
            .verify.containsText("@thirdRow", "Management Events")
            .verify.containsText("@fourthRow", "Management Events")
    },
});