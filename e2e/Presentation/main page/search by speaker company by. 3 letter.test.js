var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'sort ': function (browser) {
        var speakerCompanyColumn = browser.page.presentations().section.speakerCompanyColumn;
        speakerCompanyColumn
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Citiworks AG")
            .verify.containsText("@secondRow", "Citiworks AG")
            .verify.containsText("@thirdRow", "Citiworks AG")
            .verify.containsText("@fourthRow", "Citiworks AG")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "RWE Group Business Services GmbH")
            .verify.containsText("@secondRow", "RWE GBS GmbH")
            .verify.containsText("@thirdRow", "E.ON Global ")
            .verify.containsText("@fourthRow", "Citiworks AG")
    },

    'search by 3 letters': function (browser) {
        var speakerCompanyColumn = browser.page.presentations().section.speakerCompanyColumn;
        speakerCompanyColumn
            .setValueBySelector('@seachColumn', ['RWE', browser.Keys.ENTER])

            .verify.containsText("@firstRow", "RWE Group Business Services GmbH")
    },
});