var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/speakers')
    },

    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;
        eventSection
            .waitForElementVisible('@totalName212', 3000);
    },

    'sort by email up': function (browser) {
        var emailColumnSection = browser.page.speaker().section.emailColumn;
        emailColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "boris.funke@citiworks.de")
            .verify.containsText("@secondRow", "holger.kink@rwe.com")
            .verify.containsText("@thirdRow", "ingo.alpheus@rwe.com")
    },

    'sort by email down': function (browser) {
        var emailColumnSection = browser.page.speaker().section.emailColumn;
        emailColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "ingo.alpheus@rwe.com")
            .verify.containsText("@secondRow", "holger.kink@rwe.com")
            .verify.containsText("@thirdRow", "boris.funke@citiworks.de");
    },

    'search by email ': function (browser) {
        var emailColumnSection = browser.page.speaker().section.emailColumn;
        emailColumnSection
            .setValueBySelector('@seachColumn', ['holger.kink@rwe.com', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "holger.kink@rwe.com")
    },
});