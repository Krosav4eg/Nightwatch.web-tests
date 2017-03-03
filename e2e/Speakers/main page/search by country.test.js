var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/2473/speakers')
    },
    
    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;
        eventSection
            .waitForElementVisible('@totalName2473', 3000);
    },

    'sort by country up': function (browser) {
        var countryColumnSection = browser.page.speaker().section.countryColumn;
        countryColumnSection
            .clickBySelector('@nameColumn')
             .verify.containsText("@firstRow", "Finland")
            .verify.containsText("@secondRow", "Finland")
            .verify.containsText("@thirdRow", "Singapore")
    },

    'sort by country down': function (browser) {
        var countryColumnSection = browser.page.speaker().section.countryColumn;
        countryColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Singapore")
            .verify.containsText("@secondRow", "Finland")
            .verify.containsText("@thirdRow", "Finland")
    },

    'search by country ': function (browser) {
        var countryColumnSection = browser.page.speaker().section.countryColumn;
        countryColumnSection
            .setValueBySelector('@seachColumn', ['Finland', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Finland")
    },
});