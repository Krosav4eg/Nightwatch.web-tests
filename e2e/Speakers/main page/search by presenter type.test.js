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

    'sort by presenter type up': function (browser) {
        var presenterTypeSection = browser.page.speaker().section.presenterTypeColumn;

        presenterTypeSection
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')
            .verify.containsText('@firstRow', 'Delegate')
            .verify.containsText('@thirdRow', 'Delegate')
            .verify.containsText('@fourthRow', 'Delegate')
    },

    'sort by presenter type down': function (browser) {
        var presenterTypeSection = browser.page.speaker().section.presenterTypeColumn;

        presenterTypeSection
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@sortColumn')
            .verify.containsText('@thirdRow', 'Delegate')
            .verify.containsText('@fourthRow', 'Delegate')
            .verify.containsText('@fifthRow', 'Delegate')
    },

    'check delegate type': function (browser) {
        var presenterTypeSection = browser.page.speaker().section.presenterTypeColumn;

        presenterTypeSection
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@delegateOption')
            .verify.containsText("@firstRow", "Delegate")
            .verify.containsText("@secondRow", "Delegate")
            .verify.containsText("@thirdRow", "Delegate")
            .verify.containsText("@fourthRow", "Delegate")
            .verify.containsText("@fifthRow", "Delegate")
    },

    'check partner type': function (browser) {
        var presenterTypeSection = browser.page.speaker().section.presenterTypeColumn;

        presenterTypeSection
            .clickBySelector('@partnerOption')
            .verify.elementPresent('@noResultsFound')
    },
});