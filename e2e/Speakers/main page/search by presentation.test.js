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

    'sort by presentation type up': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')

            .verify.containsText('@firstRow', 'Debate')
            .verify.containsText('@secondRow', 'Group discussion initiation')
            .verify.containsText('@thirdRow', 'Keynote')
            .verify.containsText('@fourthRow', 'Keynote')
            .verify.containsText('@fifthRow', 'Keynote')
    },

    'sort by presentation type down': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@nameColumn')
            .verify.containsText('@secondRow', 'Keynote')
            .verify.containsText('@thirdRow', 'Keynote')
            .verify.containsText('@fourthRow', 'Group discussion initiation')
            .verify.containsText('@fifthRow', 'Debate')
    },

    'check case-parallel presentations': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .moveToElement('@nameColumn', 1298, 597)
            .clickBySelector('@caseParallelOption')
            .verify.elementPresent('@noResultsFound')
    },

    'check whole-audience presentations': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@caseWholeAudienceOption')
            .verify.elementPresent('@noResultsFound')
    },

    'check case presentations': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@casePresentationOption')
            .verify.elementPresent('@noResultsFound')
    },

    'check chairman speach': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@chairmanSpeechOption')
            .verify.elementPresent('@noResultsFound')
    },

    'check Cross-function keynote': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@crossFunctionKeynoteOption')
            .verify.elementPresent('@noResultsFound')
    },

    'check debate': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@debateOption')
            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Debate")
    },

    'check FishBowl': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@fishBowlOption')
            .verify.elementPresent('@noResultsFound')
    },

    'check group discussion initiation': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@groupDiscussionInitiationOption')
            .waitForElementVisible('@firstRow', 3000)
            .verify.containsText("@firstRow", "Group discussion initiation")
    },

    'check group leadership presentation': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@leadershipPresentationOption')
            .verify.elementPresent('@noResultsFound')
    },

    'check group panel discussion': function (browser) {
        var presentationTypeSection = browser.page.speaker().section.presentationTypeColumn;

        presentationTypeSection
            .clickBySelector('@panelDiscussionOption')
            .verify.elementPresent('@noResultsFound')
    },
});