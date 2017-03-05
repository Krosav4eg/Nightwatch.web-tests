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

    'sort by mobile up': function (browser) {
        var mobileColumnSection = browser.page.speaker().section.mobileColumn;
        mobileColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@fourthRow", "0151 19 52 66 76")
            .verify.containsText("@secondRow", "+49 (0) 173 2549926")
            .verify.containsText("@thirdRow", "+491511 5049851");
    },

    'sort by mobile down': function (browser) {
        var mobileColumnSection = browser.page.speaker().section.mobileColumn;
        mobileColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText("@firstRow", "49 151 17442523")
            .verify.containsText("@secondRow", "0151 19 52 66 76")
            .verify.containsText("@thirdRow", "+491511 5049851")
            .verify.containsText("@fourthRow", "+49 (0) 173 2549926")
    },

    'search by mobile ': function (browser) {
        var mobileColumnSection = browser.page.speaker().section.mobileColumn;
        mobileColumnSection
            .setValueBySelector('@seachColumn', ['+491511 5049851', browser.Keys.ENTER])

            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "+491511 5049851")
    },
});