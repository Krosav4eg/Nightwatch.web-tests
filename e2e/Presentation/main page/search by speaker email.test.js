var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },
    
    'select by speaker email': function (browser) {
        var speakerEmailColumn = browser.page.presentations().section.speakerEmailColumn;
        speakerEmailColumn
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "andrea.abels@eon-energie.com")
            .verify.containsText("@secondRow", "boris.funke@citiworks.de")
            .verify.containsText("@thirdRow", "boris.funke@citiworks.de")
            .verify.containsText("@fourthRow", "boris.funke@citiworks.de")

            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "ingo.alpheus@rwe.com")
            .verify.containsText("@secondRow", "holger.kink@rwe.com")
            .verify.containsText("@thirdRow", "boris.funke@citiworks.de")
            .verify.containsText("@fourthRow", "boris.funke@citiworks.de")
    },

    'search by 3 letters': function (browser) {
        var speakerEmailColumn = browser.page.presentations().section.speakerEmailColumn;
        speakerEmailColumn
            .setValueBySelector('@seachColumn', ['ingo', browser.Keys.ENTER])

            .verify.containsText("@firstRow", "ingo.alpheus@rwe.com")
    },
});