var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/214/speakers')
    },

    'check event data': function (browser) {
        var eventSection = browser.page.speaker().section.event;
        eventSection
            .waitForElementVisible('@totalName214', 3000);
    },

    'sort by last name up': function (browser) {
        var lastNameColumnSection = browser.page.speaker().section.lastNameColumn;
        lastNameColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Spindler")
            .verify.containsText("@secondRow", "Ruhnau")
            .verify.containsText("@thirdRow", "Dachs")
            .verify.containsText("@fourthRow", "Bairlein")
    },

    'sort by last name down': function (browser) {
        var lastNameColumnSection = browser.page.speaker().section.lastNameColumn;
        lastNameColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Babeck")
            .verify.containsText("@secondRow", "Bairlein")
            .verify.containsText("@thirdRow", "Dachs")
            .verify.containsText("@fourthRow", "Ruhnau")
    },

    'search by last name ': function (browser) {
        var lastNameColumnSection = browser.page.speaker().section.lastNameColumn;
        lastNameColumnSection
            .setValueBySelector('@seachColumn', ['Dachs', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Dachs")
    },
});