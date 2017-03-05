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

    'sort by organizer up': function (browser) {
        var organizerColumnSection = browser.page.speaker().section.organizerColumn;
        organizerColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', "Management Events")
            .verify.containsText('@secondRow', "Management Events")
            .verify.containsText('@thirdRow', "Management Events")
            .verify.containsText('@fourthRow', "Management Events");
    },

    'sort by organizer down': function (browser) {
        var organizerColumnSection = browser.page.speaker().section.organizerColumn;
        organizerColumnSection
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', "Management Events")
            .verify.containsText('@secondRow', "Management Events")
            .verify.containsText('@thirdRow', "Management Events")
            .verify.containsText('@fourthRow', "Management Events");
    },

    'search by country ': function (browser) {
        var organizerColumnSection = browser.page.speaker().section.organizerColumn;
        organizerColumnSection

            .setValueBySelector('@seachColumn', ['Management ', browser.Keys.ENTER])
            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Management Events")
    },
});