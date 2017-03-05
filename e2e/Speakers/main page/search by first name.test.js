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

    'sort by first name up': function (browser) {
        var firstNameColumnSection = browser.page.speaker().section.firstNameColumn;
        firstNameColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Clemens")
            .verify.containsText("@secondRow", "Jürgen")
            .verify.containsText("@thirdRow", "Stefan")
            .verify.containsText("@fourthRow", "Stefan");
    },

    'sort by first name down': function (browser) {
        var firstNameColumnSection = browser.page.speaker().section.firstNameColumn;
        firstNameColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "Werner")
            .verify.containsText("@secondRow", "Stefan")
            .verify.containsText("@thirdRow", "Stefan")
            .verify.containsText("@fourthRow", "Jürgen");
    },

    'search by first name ': function (browser) {
        var firstNameColumnSection = browser.page.speaker().section.firstNameColumn;
        firstNameColumnSection
            .setValueBySelector('@seachColumn', ['Stefan', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Stefan")
    },
});