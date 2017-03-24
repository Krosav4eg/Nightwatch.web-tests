var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'select by id up': function (browser) {
        var idColumn = browser.page.presentations().section.idColumn;
        idColumn
            .clickBySelector('@nameColumn')
            .verify.containsText("@firstRow", "628")
            .verify.containsText("@secondRow", "629")
            .verify.containsText("@thirdRow", "5712")
            .verify.containsText("@fourthRow", "5713")

            .clickBySelector('@nameColumn')
            .verify.containsText("@firstRow", "6062")
            .verify.containsText("@secondRow", "5720")
            .verify.containsText("@thirdRow", "5719")
            .verify.containsText("@fourthRow", "5718")
    },

    'seach by id ': function (browser) {
        var idColumn = browser.page.presentations().section.idColumn;
        idColumn
            .setValueBySelector('@seachColumn', ['5720', browser.Keys.ENTER])
            .verify.containsText("@firstRow", "5720")
    },
});